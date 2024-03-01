export const ADD_NEW_ITERATION = 'ADD_NEW_ITERATION';
export const REMOVE_ALL_ITERATION = 'REMOVE_ALL_ITERATION';
export const DUMMY_JSON_DATA ='DUMMY_JSON_DATA';

const initial_state = {
    dummyData:[],
    iterationData: null,
    removeIteration:null,
  };


  const MainReducer = (state = initial_state, action) => {
    switch (action.type) {
      case DUMMY_JSON_DATA:
        return {
          ...state,
          dummyData: action.payload,
        };
    case ADD_NEW_ITERATION:
        return {
          ...state,
          iterationData: action.payload,
        };
        case REMOVE_ALL_ITERATION:
          return {
            ...state,
            removeIteration: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default MainReducer;
  