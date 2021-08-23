let initialState = {
    error:'',
    food: [],
  };
  
  function foodReducer(state = initialState, action) {
    switch (action.type) {
  
      case 'FETCH_FOOD':
        console.log("data in reducer from fetch action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          food: action.payload,
        };
       
      
      default:
        return state;
    }
  }
  
  export default foodReducer;