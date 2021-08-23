import { db } from "../../config/Firebase";


export const fetchFood = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let res = await db.collection("Mohsin Food").get();
      let food=[]
      res.forEach((doc) => {
        food.push(doc.data())
      })
      console.log("foods", food);
  
      console.log("data from firebase into action", food);
      dispatch({
        type: 'FETCH_FOOD',
        payload: food,
      });
  
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };