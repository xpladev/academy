mod state;
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
