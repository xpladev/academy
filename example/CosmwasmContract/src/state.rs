use schemars::JsonSchema;
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
  pub game_gold: i64,
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

