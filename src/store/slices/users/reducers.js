import { initialState } from './state'

const reducers = {
    setUserList: (state, action) => {
        state.list = action.payload;
      }
}

export default reducers



  