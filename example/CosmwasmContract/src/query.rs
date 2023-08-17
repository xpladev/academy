use cosmwasm_std::{to_binary, Binary, Deps, StdResult, Env};
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
