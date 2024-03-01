import { dummyJson } from "../../extras/dummyData";
import { ADD_NEW_ITERATION, DUMMY_JSON_DATA, REMOVE_ALL_ITERATION } from "../reducers/Reducers";


//Actiopn of the certain functions 
export const mainJsonFuntion = (data)=>{
  return (dispatch) =>{
    try {
      dispatch({ type: DUMMY_JSON_DATA, payload: data });
   
    } catch (error) {
      // console.log("error",error);
    }
  }
}


export const handleIterationData = (data, index) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_NEW_ITERATION, payload: data });
      let newArry = dummyJson[index].iteration.push(data)
      console.log("newarray", newArry);
    
    } catch (error) {
      console.log("data", data);//when api gives error then this cath run
      // dispatch({type: ADD_NEW_ITERATION, payload:data });
    }
  };
};

export const handleRemoveiterationArray = (index) =>{
  return (dispatch) =>{
    try {
      dispatch({ type: REMOVE_ALL_ITERATION, payload: index });
    const removeArr =   dummyJson[index].iteration = []
      console.log("newarray", removeArr);
    } catch (error) {
      console.log("error",error);
    }
  }
}