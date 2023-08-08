import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import React from "react";

const RustContractCode = () => {
  return (
    <SandpackProvider
      files={{
        "Cargo.toml": cargo_toml,
        "Cargo.lock": cargo_lock,
        "src/lib.rs": lib,
        "src/error.rs": error,
        "src/msgs.rs": msgs,
        "src/query.rs": query,
        "src/state.rs": state,
        "src/execute.rs": execute,
      }}
      customSetup={{
        entry: "src/lib.rs",
      }}
      options={{
        visibleFiles: [
          "src/lib.rs",
          "src/error.rs",
          "src/msgs.rs",
          "src/query.rs",
          "src/state.rs",
          "src/execute.rs",
          "/Cargo.toml",
          "/Cargo.lock",
        ],
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer autoHiddenFiles={true} />
        <SandpackCodeEditor showLineNumbers={true} />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default RustContractCode;


const cargo_toml = `[package]
name = "game-data-save"
version = "0.0.1"
authors = ["Your Name <your@email.com>"]
edition = "2018"
description = "XPLA Contract Example"
license = "Apache-2.0"
repository = ""

[lib]
crate-type = ["cdylib", "rlib"]

[dependencies]
cw0 = { version = "0.10.3" }
cw20 = { version = "0.13.4" }
cw-storage-plus = { version = "0.13.4" }
cosmwasm-std = { version = "1.0.0" }
schemars = "0.8.1"
serde = { version = "1.0.103", default-features = false, features = ["derive"] }
thiserror = { version = "1.0.23" }

[package.metadata.scripts]
optimize = """docker run --rm -v %cd%:/code --mount type=volume,source=game-data-save_cache,target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.6"""`;

const lib = `mod state;
mod execute;
mod msgs;
mod error;
mod query;

pub use crate::msgs::{InstantiateMsg, ExecuteMsg, QueryMsg};
pub use crate::state::GameDataSaveContract;
pub use crate::error::ContractError;

#[cfg(not(feature = "library"))]
pub mod entry {
  use super::*;

  use cosmwasm_std::entry_point;
  use cosmwasm_std::{Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};

  #[entry_point]
  pub fn instantiate(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: InstantiateMsg,
  ) -> StdResult<Response> {
      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();
      tract.instantiate(deps, env, info, msg)
  }

  #[entry_point]
  pub fn execute(
      deps: DepsMut,
      env: Env,
      info: MessageInfo,
      msg: ExecuteMsg,
  ) -> Result<Response, ContractError> {
      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();
      tract.execute(deps, env, info, msg)
  }

  #[entry_point]
  pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();
      tract.query(deps, env, msg)
  }

}
`;

const error = `use cosmwasm_std::StdError;
use thiserror::Error;

#[derive(Error, Debug, PartialEq)]
pub enum ContractError {
  #[error("{0}")]
  Std(#[from] StdError),

  #[error("Unauthorized")]
  Unauthorized {},
  
}`;

const execute = `use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, StdResult};

use crate::state::{Config, GameDataSaveContract, GameData};
use crate::msgs::{InstantiateMsg, ExecuteMsg};
use crate::error::ContractError;

impl<'a> GameDataSaveContract<'a> {
  pub fn instantiate(
    &self,
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
  ) -> StdResult<Response> {
    let config = Config {
      owner: deps.api.addr_validate(&msg.owner)?,
      owner_candidate: deps.api.addr_validate(&msg.owner)?,
      description: msg.description,
    };

    self.config.save(deps.storage, &config)?;

    Ok(Response::new())
  }

  pub fn execute(
    &self,
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg
  ) -> Result<Response, ContractError> {
    match msg{
      ExecuteMsg::SaveData { 
        user, 
        last_stage,
        high_score, 
        game_gold 
      } => self.save_data(deps, env, info, user, last_stage, high_score, game_gold),

      ExecuteMsg::UpdateConfig { 
        owner_candidate,
        description,
      } => self.update_config(deps, env, info, owner_candidate, description),

      ExecuteMsg::AllowOwner {

      } => self.allow_owner(deps, env, info),
    }
  }
}

// execute functions
impl<'a> GameDataSaveContract<'a> {

  pub fn save_data(
    &self,
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    user: String,
    last_stage: Option<u64>,
    high_score: Option<u64>,
    game_gold: Option<u64>,
  ) -> Result<Response, ContractError> {
    let config: Config = self.config.load(deps.storage)?;
    
    if info.sender != config.owner {
      return Err(ContractError::Unauthorized {})
    }

    self.game_data.update(deps.storage, user.clone(), |res| -> StdResult<GameData> { 
      let mut data = res.unwrap_or_default();
      if let Some(ls) = last_stage {
        if ls > data.last_stage {
          data.last_stage = ls;
        }
      }
      if let Some(hs) = high_score {
        if hs > data.high_score {
          data.high_score = hs;
        }
      }
      if let Some(gg) = game_gold {
        data.game_gold += gg;
      }
      Ok(data)
    })?;


    Ok(Response::new()
          .add_attribute("action", "save_data")
          .add_attribute("user", user))

  }

  pub fn update_config(
    &self,
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    owner_candidate: Option<String>,
    description: Option<String>,
  ) -> Result<Response, ContractError> {
    let mut config: Config = self.config.load(deps.storage)?;
    
    if info.sender != config.owner {
      return Err(ContractError::Unauthorized {})
    }

    if let Some(candidate) = owner_candidate {
      let new_owner_candidate = deps.api.addr_validate(&candidate)?;
      config.owner_candidate = new_owner_candidate;
      self.config.save(deps.storage, &config)?;
    }

    if let Some(descript) = description {
      config.description = descript;
    }

    self.config.save(deps.storage, &config)?;

    Ok(Response::new().add_attribute("action", "update_config"))
  }

  pub fn allow_owner(
    &self,
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
  ) -> Result<Response, ContractError> {

    let mut config = self.config.load(deps.storage)?;
    // only owner_candidate can execute
    if info.sender != config.owner_candidate {
      return Err(ContractError::Unauthorized{})
    }

    config.owner = config.owner_candidate.clone();
    config.owner_candidate = config.owner_candidate.clone();
    self.config.save(deps.storage, &config)?;

    Ok(Response::new()
      .add_attribute("action", "allow_owner")
      .add_attribute("new owner", info.sender)
    )
  }
  
}
`;

const msgs = `
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};


#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct InstantiateMsg {
  pub owner: String,
  pub description: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {

  SaveData {
    user: String,
    last_stage: Option<u64>,
    high_score: Option<u64>,
    game_gold: Option<u64>,
  },
  
  UpdateConfig {
    owner_candidate: Option<String>,
    description: Option<String>,
  },

  AllowOwner {},

}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub enum QueryMsg {
  Config {},

  GameData {
    user: String,
  }
}
`;

const query = `use cosmwasm_std::{to_binary, Binary, Deps, StdResult, Env};
use crate::state::{GameDataSaveContract, Config, GameData};
use crate::msgs::QueryMsg;

impl<'a> GameDataSaveContract<'a> {
  pub fn query(&self, deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
      QueryMsg::Config {} => to_binary(&self.config(deps)?),
      QueryMsg::GameData { user } => to_binary(&self.game_data(deps, user)?)
    }
  }
}


impl<'a> GameDataSaveContract<'a> {

  fn config(
    &self, 
    deps: Deps,
  ) -> StdResult<Config> {
    self.config.load(deps.storage)
  }

  fn game_data(
    &self, 
    deps: Deps,
    user: String,
  ) -> StdResult<GameData> {
    let data = self.game_data.may_load(deps.storage, user)?;
    if let Some(user_data) = data {
      return Ok(user_data)
    } else {
      return Ok(GameData{
        last_stage: 0,
        high_score: 0,
        game_gold: 0,
      })
    }
  }

}
`;

const state = `use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use cosmwasm_std::Addr;
use cw_storage_plus::{Item, Map};

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
pub struct Config {
  pub owner: Addr,
  pub owner_candidate: Addr,
  pub description: String,
}

#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]
pub struct GameData {
  pub last_stage: u64,
  pub high_score: u64,
  pub game_gold: u64,
}


pub struct GameDataSaveContract<'a> {
  pub config: Item<'a, Config>,
  pub game_data: Map<'a, String, GameData>,
}

impl Default for GameDataSaveContract<'static> {
  fn default() -> Self {
    Self::new(
      "config",
      "game_data",
    )
  }
}

impl<'a> GameDataSaveContract<'a> {
  fn new(
    config_key: &'a str,
    game_data_key: &'a str,
  ) -> Self {

    Self {
      config: Item::new(config_key),
      game_data: Map::new(game_data_key),
    }
  }
}

`;

const cargo_lock = `# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
version = 3

[[package]]
name = "base16ct"
version = "0.1.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "349a06037c7bf932dd7e7d1f653678b2038b9ad46a74102f1fc7bd7872678cce"

[[package]]
name = "base64"
version = "0.13.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "904dfeac50f3cdaba28fc6f57fdcddb75f49ed61346676a78c4ffe55877802fd"

[[package]]
name = "base64ct"
version = "1.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "3bdca834647821e0b13d9539a8634eb62d3501b6b6c2cec1722786ee6671b851"

[[package]]
name = "block-buffer"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4152116fd6e9dadb291ae18fc1ec3575ed6d84c29642d97890f4b4a3417297e4"
dependencies = [
 "generic-array",
]

[[package]]
name = "byteorder"
version = "1.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "14c189c53d098945499cdfa7ecc63567cf3886b3332b312a5b4585d8d3a6a610"

[[package]]
name = "cfg-if"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "baf1de4339761588bc0619e3cbc0120ee582ebb74b53b4efbf79117bd2da40fd"

[[package]]
name = "const-oid"
version = "0.7.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e4c78c047431fee22c1a7bb92e00ad095a02a983affe4d8a72e2a2c62c1b94f3"

[[package]]
name = "cosmwasm-crypto"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "5eb0afef2325df81aadbf9be1233f522ed8f6e91df870c764bc44cca2b1415bd"
dependencies = [
 "digest",
 "ed25519-zebra",
 "k256",
 "rand_core 0.6.3",
 "thiserror",
]

[[package]]
name = "cosmwasm-derive"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4b36e527620a2a3e00e46b6e731ab6c9b68d11069c986f7d7be8eba79ef081a4"
dependencies = [
 "syn",
]

[[package]]
name = "cosmwasm-std"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "875994993c2082a6fcd406937bf0fca21c349e4a624f3810253a14fa83a3a195"
dependencies = [
 "base64",
 "cosmwasm-crypto",
 "cosmwasm-derive",
 "forward_ref",
 "schemars",
 "serde",
 "serde-json-wasm",
 "thiserror",
 "uint",
]

[[package]]
name = "cpufeatures"
version = "0.2.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dc948ebb96241bb40ab73effeb80d9f93afaad49359d159a5e61be51619fe813"
dependencies = [
 "libc",
]

[[package]]
name = "crunchy"
version = "0.2.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7a81dae078cea95a014a339291cec439d2f232ebe854a9d672b796c6afafa9b7"

[[package]]
name = "crypto-bigint"
version = "0.3.2"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "03c6a1d5fa1de37e071642dfa44ec552ca5b299adb128fab16138e24b548fd21"
dependencies = [
 "generic-array",
 "rand_core 0.6.3",
 "subtle",
 "zeroize",
]

[[package]]
name = "crypto-mac"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "b1d1a86f49236c215f271d40892d5fc950490551400b02ef360692c29815c714"
dependencies = [
 "generic-array",
 "subtle",
]

[[package]]
name = "curve25519-dalek"
version = "3.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "90f9d052967f590a76e62eb387bd0bbb1b000182c3cefe5364db6b7211651bc0"
dependencies = [
 "byteorder",
 "digest",
 "rand_core 0.5.1",
 "subtle",
 "zeroize",
]

[[package]]
name = "cw-storage-plus"
version = "0.13.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "648b1507290bbc03a8d88463d7cd9b04b1fa0155e5eef366c4fa052b9caaac7a"
dependencies = [
 "cosmwasm-std",
 "schemars",
 "serde",
]

[[package]]
name = "cw-utils"
version = "0.13.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9dbaecb78c8e8abfd6b4258c7f4fbeb5c49a5e45ee4d910d3240ee8e1d714e1b"
dependencies = [
 "cosmwasm-std",
 "schemars",
 "serde",
 "thiserror",
]

[[package]]
name = "cw0"
version = "0.10.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8ae676b6cced78a3d38ad4b01ab4ed66fc78ac191c3c0d6bfd5372cb2efd473b"
dependencies = [
 "cosmwasm-std",
 "schemars",
 "serde",
 "thiserror",
]

[[package]]
name = "cw20"
version = "0.13.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4cb782b8f110819a4eb5dbbcfed25ffba49ec16bbe32b4ad8da50a5ce68fec05"
dependencies = [
 "cosmwasm-std",
 "cw-utils",
 "schemars",
 "serde",
]

[[package]]
name = "der"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6919815d73839e7ad218de758883aae3a257ba6759ce7a9992501efbb53d705c"
dependencies = [
 "const-oid",
]

[[package]]
name = "digest"
version = "0.9.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d3dd60d1080a57a05ab032377049e0591415d2b31afd7028356dbf3cc6dcb066"
dependencies = [
 "generic-array",
]

[[package]]
name = "dyn-clone"
version = "1.0.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4f94fa09c2aeea5b8839e414b7b841bf429fd25b9c522116ac97ee87856d88b2"

[[package]]
name = "ecdsa"
version = "0.13.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d0d69ae62e0ce582d56380743515fefaf1a8c70cec685d9677636d7e30ae9dc9"
dependencies = [
 "der",
 "elliptic-curve",
 "rfc6979",
 "signature",
]

[[package]]
name = "ed25519-zebra"
version = "3.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "403ef3e961ab98f0ba902771d29f842058578bb1ce7e3c59dad5a6a93e784c69"
dependencies = [
 "curve25519-dalek",
 "hex",
 "rand_core 0.6.3",
 "serde",
 "sha2",
 "thiserror",
 "zeroize",
]

[[package]]
name = "elliptic-curve"
version = "0.11.12"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "25b477563c2bfed38a3b7a60964c49e058b2510ad3f12ba3483fd8f62c2306d6"
dependencies = [
 "base16ct",
 "crypto-bigint",
 "der",
 "ff",
 "generic-array",
 "group",
 "rand_core 0.6.3",
 "sec1",
 "subtle",
 "zeroize",
]

[[package]]
name = "ff"
version = "0.11.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "131655483be284720a17d74ff97592b8e76576dc25563148601df2d7c9080924"
dependencies = [
 "rand_core 0.6.3",
 "subtle",
]

[[package]]
name = "forward_ref"
version = "1.0.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c8cbd1169bd7b4a0a20d92b9af7a7e0422888bd38a6f5ec29c1fd8c1558a272e"

[[package]]
name = "game-data-save"
version = "0.0.1"
dependencies = [
 "cosmwasm-std",
 "cw-storage-plus",
 "cw0",
 "cw20",
 "schemars",
 "serde",
 "thiserror",
]

[[package]]
name = "generic-array"
version = "0.14.6"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bff49e947297f3312447abdca79f45f4738097cc82b06e72054d2223f601f1b9"
dependencies = [
 "typenum",
 "version_check",
]

[[package]]
name = "getrandom"
version = "0.1.16"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8fc3cb4d91f53b50155bdcfd23f6a4c39ae1969c2ae85982b135750cccaf5fce"
dependencies = [
 "cfg-if",
 "libc",
 "wasi 0.9.0+wasi-snapshot-preview1",
]

[[package]]
name = "getrandom"
version = "0.2.7"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4eb1a864a501629691edf6c15a593b7a51eebaa1e8468e9ddc623de7c9b58ec6"
dependencies = [
 "cfg-if",
 "libc",
 "wasi 0.11.0+wasi-snapshot-preview1",
]

[[package]]
name = "group"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bc5ac374b108929de78460075f3dc439fa66df9d8fc77e8f12caa5165fcf0c89"
dependencies = [
 "ff",
 "rand_core 0.6.3",
 "subtle",
]

[[package]]
name = "hex"
version = "0.4.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7f24254aa9a54b5c858eaee2f5bccdb46aaf0e486a595ed5fd8f86ba55232a70"

[[package]]
name = "hmac"
version = "0.11.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "2a2a2320eb7ec0ebe8da8f744d7812d9fc4cb4d09344ac01898dbcb6a20ae69b"
dependencies = [
 "crypto-mac",
 "digest",
]

[[package]]
name = "itoa"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6c8af84674fe1f223a982c933a0ee1086ac4d4052aa0fb8060c12c6ad838e754"

[[package]]
name = "k256"
version = "0.10.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "19c3a5e0a0b8450278feda242592512e09f61c72e018b8cd5c859482802daf2d"
dependencies = [
 "cfg-if",
 "ecdsa",
 "elliptic-curve",
 "sec1",
 "sha2",
]

[[package]]
name = "libc"
version = "0.2.132"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "8371e4e5341c3a96db127eb2465ac681ced4c433e01dd0e938adbef26ba93ba5"

[[package]]
name = "opaque-debug"
version = "0.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "624a8340c38c1b80fd549087862da4ba43e08858af025b236e509b6649fc13d5"

[[package]]
name = "pkcs8"
version = "0.8.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "7cabda3fb821068a9a4fab19a683eac3af12edf0f34b94a8be53c4972b8149d0"
dependencies = [
 "der",
 "spki",
 "zeroize",
]

[[package]]
name = "proc-macro2"
version = "1.0.43"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0a2ca2c61bc9f3d74d2886294ab7b9853abd9c1ad903a3ac7815c58989bb7bab"
dependencies = [
 "unicode-ident",
]

[[package]]
name = "quote"
version = "1.0.21"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "bbe448f377a7d6961e30f5955f9b8d106c3f5e449d493ee1b125c1d43c2b5179"
dependencies = [
 "proc-macro2",
]

[[package]]
name = "rand_core"
version = "0.5.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "90bde5296fc891b0cef12a6d03ddccc162ce7b2aff54160af9338f8d40df6d19"
dependencies = [
 "getrandom 0.1.16",
]

[[package]]
name = "rand_core"
version = "0.6.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "d34f1408f55294453790c48b2f1ebbb1c5b4b7563eb1f418bcfcfdbb06ebb4e7"
dependencies = [
 "getrandom 0.2.7",
]

[[package]]
name = "rfc6979"
version = "0.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "96ef608575f6392792f9ecf7890c00086591d29a83910939d430753f7c050525"
dependencies = [
 "crypto-bigint",
 "hmac",
 "zeroize",
]

[[package]]
name = "ryu"
version = "1.0.11"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4501abdff3ae82a1c1b477a17252eb69cee9e66eb915c1abaa4f44d873df9f09"

[[package]]
name = "schemars"
version = "0.8.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "1847b767a3d62d95cbf3d8a9f0e421cf57a0d8aa4f411d4b16525afb0284d4ed"
dependencies = [
 "dyn-clone",
 "schemars_derive",
 "serde",
 "serde_json",
]

[[package]]
name = "schemars_derive"
version = "0.8.10"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "af4d7e1b012cb3d9129567661a63755ea4b8a7386d339dc945ae187e403c6743"
dependencies = [
 "proc-macro2",
 "quote",
 "serde_derive_internals",
 "syn",
]

[[package]]
name = "sec1"
version = "0.2.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "08da66b8b0965a5555b6bd6639e68ccba85e1e2506f5fbb089e93f8a04e1a2d1"
dependencies = [
 "der",
 "generic-array",
 "pkcs8",
 "subtle",
 "zeroize",
]

[[package]]
name = "serde"
version = "1.0.144"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "0f747710de3dcd43b88c9168773254e809d8ddbdf9653b84e2554ab219f17860"
dependencies = [
 "serde_derive",
]

[[package]]
name = "serde-json-wasm"
version = "0.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "479b4dbc401ca13ee8ce902851b834893251404c4f3c65370a49e047a6be09a5"
dependencies = [
 "serde",
]

[[package]]
name = "serde_derive"
version = "1.0.144"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "94ed3a816fb1d101812f83e789f888322c34e291f894f19590dc310963e87a00"
dependencies = [
 "proc-macro2",
 "quote",
 "syn",
]

[[package]]
name = "serde_derive_internals"
version = "0.26.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "85bf8229e7920a9f636479437026331ce11aa132b4dde37d121944a44d6e5f3c"
dependencies = [
 "proc-macro2",
 "quote",
 "syn",
]

[[package]]
name = "serde_json"
version = "1.0.85"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "e55a28e3aaef9d5ce0506d0a14dbba8054ddc7e499ef522dd8b26859ec9d4a44"
dependencies = [
 "itoa",
 "ryu",
 "serde",
]

[[package]]
name = "sha2"
version = "0.9.9"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4d58a1e1bf39749807d89cf2d98ac2dfa0ff1cb3faa38fbb64dd88ac8013d800"
dependencies = [
 "block-buffer",
 "cfg-if",
 "cpufeatures",
 "digest",
 "opaque-debug",
]

[[package]]
name = "signature"
version = "1.4.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "02658e48d89f2bec991f9a78e69cfa4c316f8d6a6c4ec12fae1aeb263d486788"
dependencies = [
 "digest",
 "rand_core 0.6.3",
]

[[package]]
name = "spki"
version = "0.5.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "44d01ac02a6ccf3e07db148d2be087da624fea0221a16152ed01f0496a6b0a27"
dependencies = [
 "base64ct",
 "der",
]

[[package]]
name = "static_assertions"
version = "1.1.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "a2eb9349b6444b326872e140eb1cf5e7c522154d69e7a0ffb0fb81c06b37543f"

[[package]]
name = "subtle"
version = "2.4.1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "6bdef32e8150c2a081110b42772ffe7d7c9032b606bc226c8260fd97e0976601"

[[package]]
name = "syn"
version = "1.0.99"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "58dbef6ec655055e20b86b15a8cc6d439cca19b667537ac6a1369572d151ab13"
dependencies = [
 "proc-macro2",
 "quote",
 "unicode-ident",
]

[[package]]
name = "thiserror"
version = "1.0.32"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "f5f6586b7f764adc0231f4c79be7b920e766bb2f3e51b3661cdb263828f19994"
dependencies = [
 "thiserror-impl",
]

[[package]]
name = "thiserror-impl"
version = "1.0.32"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "12bafc5b54507e0149cdf1b145a5d80ab80a90bcd9275df43d4fff68460f6c21"
dependencies = [
 "proc-macro2",
 "quote",
 "syn",
]

[[package]]
name = "typenum"
version = "1.15.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "dcf81ac59edc17cc8697ff311e8f5ef2d99fcbd9817b34cec66f90b6c3dfd987"

[[package]]
name = "uint"
version = "0.9.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "12f03af7ccf01dd611cc450a0d10dbc9b745770d096473e2faf0ca6e2d66d1e0"
dependencies = [
 "byteorder",
 "crunchy",
 "hex",
 "static_assertions",
]

[[package]]
name = "unicode-ident"
version = "1.0.3"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "c4f5b37a154999a8f3f98cc23a628d850e154479cd94decf3414696e12e31aaf"

[[package]]
name = "version_check"
version = "0.9.4"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "49874b5167b65d7193b8aba1567f5c7d93d001cafc34600cee003eda787e483f"

[[package]]
name = "wasi"
version = "0.9.0+wasi-snapshot-preview1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "cccddf32554fecc6acb585f82a32a72e28b48f8c4c1883ddfeeeaa96f7d8e519"

[[package]]
name = "wasi"
version = "0.11.0+wasi-snapshot-preview1"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "9c8d87e72b64a3b4db28d11ce29237c246188f4f51057d65a7eab63b7987e423"

[[package]]
name = "zeroize"
version = "1.3.0"
source = "registry+https://github.com/rust-lang/crates.io-index"
checksum = "4756f7db3f7b5574938c3eb1c117038b8e07f95ee6718c0efad4ac21508f1efd"
`