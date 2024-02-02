import { InitialState } from "../InitialValues/initial";

export const SecondReducer = (oldState = InitialState, action) => {
  let newState = oldState;
  console.log(newState);
  switch (action.type) {
    case "MULTIBY2":
      return {
        ...newState,
        value: newState.value * action.payload,
      };
      case "MULTIBY5":
        return {
          ...newState,
          value : newState.value * action.payload
        }
      case "DIVIDEBY2":
        return {
          ...newState,
          value : newState.value / action.payload
        }
      case "DIVIDEBY5":
        return {
          ...newState,
          value : newState.value / action.payload
        }

    default:
      return newState;
  }
};
