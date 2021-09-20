import { auth, db } from "../../config/Firebase";
export const doSignup = (user, setPending) => async (dispatch) => {
    try {
      // firebase login
      const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
      await db.collection('users').add(user)
      var userData = userCredential.user;
 if (userData) {
    dispatch({
        type: 'LOGIN',
        payload: userData,
      });
      setPending(false)
 }else{
  setPending(false)
 }
  
    } catch (error) {
        alert(JSON.stringify(error))
      console.log("error", error);
    }
  };

export const authStateChk = (setLoading) => async (dispatch) => {
    try {
        await auth.onAuthStateChanged((user) => {
            if (user) {

        const uid=user.uid;
                    console.log('useronAuthAction',user);
                dispatch({
                    type: "AUTH_STATE",
                    payload: user,
                })
                setLoading(false)

            }else{
                setLoading(false)
            }
        })
    }
    catch (error) {
        alert(JSON.stringify(error))
    }
}
export const doLogout = () => async (dispatch) => {
    try {
      const res = await auth.signOut();
      window.location.reload(true)
      dispatch({
        type: "LOGOUT",
      });
    } catch (error) {
      console.log("error", error);
    }
  };
// export const doLogin = (email, password) => async (dispatch) => {
//   try {
//     // firebase login

//     const userCredential = await auth.signInWithEmailAndPassword(email, password);
//     var user = userCredential.user;
//     console.log("user", user.uid);
//     dispatch({
//       type: LOGIN,
//       payload: user,
//     });
//   } catch (error) {
//       alert(JSON.stringify(error))
//     console.log("error", error);
//   }
// };






// export const doLogout = () => async (dispatch) => {
//     try {
//       // firebase login
//       const res = await auth.signOut();
//       console.log("user", res);
//       dispatch({
//         type: LOGOUT,
//       });
//     } catch (error) {
//         alert(JSON.stringify(error))
//       console.log("error", error);
//     }
//   };