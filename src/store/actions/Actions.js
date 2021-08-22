import { db } from "../../config/Firebase";

export const fetchRecord = (setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      let res = await db.collection("stores").get();
      let records=[]
      res.forEach((doc) => {
        records.push(doc.data())
      })
      console.log("students", records);
  
      console.log("data from firebase into action", records);
      dispatch({
        type: 'FETCH_RECORD',
        payload: records,
      });
  
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };