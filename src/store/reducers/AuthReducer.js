const initialState = {
    isUserLoggedIn : false,
    user: null,
   }
   
   
    function AuthReducer(state=initialState, action) {
       switch (action.type) {
        case 'AUTH_STATE':{
            // if user login than what?
            console.log('authState in Reducer');
                 return {
                     ...state,
                    isUserLoggedIn: true ,
                    user: action.payload,
                    
                    
                 };
             }
           case 'LOGIN':{
          // if user login than what?
               return {
                   ...state,
                  isUserLoggedIn:  true,
                  user: action.payload
               };
           }
          
  
           case 'LOGOUT':{
              // if user login than what?
                   return {
                       ...state,
                      isUserLoggedIn:  false,
                      user:null
                   };
               }
                  
               
       
           default:
           return state;
       }
   }
   
   export default AuthReducer;