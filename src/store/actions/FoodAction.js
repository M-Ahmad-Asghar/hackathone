import { db } from "../../config/Firebase";
import { storage } from "../../config/Firebase";
import { useState } from "react";


export const fetchFood = (setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    let snapshot = await db.collection("foods").get();
    let foods = [];
    snapshot.forEach((doc) => {
      foods.push({
        docID: doc.id,
        ...doc.data(),
      });
    });

    console.log("data from firebase into action", foods);
    dispatch({
      type: 'FETCH_FOOD',
      payload: foods,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
  };

export const addFood = (data,setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    let res = await db.collection('foods').add(data)
    console.log("data added");
    dispatch({
      type: 'ADD_FOOD',
    });
  } catch (error) {
    console.log("error", error);
  }finally{
    setLoading(false);
  }
}
export const delFood = (docID, setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    await db.collection("foods").doc(docID).delete();
    console.log("data delete into firebase in action",);
    dispatch({
      type: 'DELETE_FOOD',
      payload: docID,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }

}
export const dataExIm = (data) => (dispatch)=>{

  dispatch({
    type: 'DATA_EXIM',
    payload:data
  });
}
export const fetchItem = (setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    let res = await db.collection("foods").get();
    let food=[]
    res.forEach((doc) => {
      food.push(doc.data())
    })
    console.log("foods", food);
    


    console.log("data from firebase into action", food);
    dispatch({
      type: 'FETCH_ITEM',
      payload: food,
    });

  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
};
