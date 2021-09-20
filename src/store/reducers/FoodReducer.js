let initialState = {
    error:'',
    food: [],
    category:""
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
        case 'ADD_FOOD':
        console.log("data in reducer from fetch action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          food: action.payload,
        };
        case 'DELETE_FOOD':
          let filterStudents = state.food.filter((item)=> item.docID !== action.payload)

          console.log("data in reducer from fetch action", action.payload);
          // work  / logic will be her
          return {
            ...state,
            food: filterStudents,
          };
        case 'DATA_EXIM':
          console.log("data in reducer from dataExIm", action.payload);
          // work  / logic will be her
          return {
            ...state,
            category: action.payload,
            
          };
       
      
      default:
        return state;
    }
  }
  
  export default foodReducer;