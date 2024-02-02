import { InitialState } from "../InitialValues/initial"
 export const reducer =(oldState = InitialState, action)=>{
      let newState = oldState;
      switch(action.type){
        case "ADDITION": 
        return {
            ...newState,
            value: newState.value + action.payload
        }
        case "RESET":
            return {
                ...newState,
                value: newState.value - action.payload
            }
        case "SUBSCRATION":
            return {
                ...newState,
                value: newState.value - action.payload
            }
        default:
            return newState
      }
}
