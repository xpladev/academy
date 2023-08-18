
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
    game_gold: Option<i64>,
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
