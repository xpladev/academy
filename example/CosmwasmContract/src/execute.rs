use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, StdResult};

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
    game_gold: Option<i64>,
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
