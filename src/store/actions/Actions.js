import { db, storage } from "../../config/Firebase";
import {React, useState} from 'react';


export const fetchRecord = (setPending) => async (dispatch, previouState) => {
    try {
      
      await db.collection("stores").onSnapshot(
        querySnapshot =>{
          let stores = [];
          querySnapshot.forEach((doc) => {
            stores.push({
              docID: doc.id,
              ...doc.data(),
            });
          });
          
          console.log("data from firebase into action", stores);
          if (stores) {
            dispatch({
              type: 'FETCH_RECORD',
              payload: stores,
            });
            setPending(false)
          } else {
            setPending(false)
          }
          
        }
      );
    } catch (error) {
      console.log("error", error);
      alert(error);
    } 
  };
  export const addStore = (data, setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true)
      let res = await db.collection('stores').add(data)
      console.log("data added", res);
      if (res) {
        dispatch({
          type: 'ADD_STORE',
          payload:res
        });

      } 
     
    } catch (error) {
      console.log("error", error);
    }finally{
      setLoading(true)
    }
  }
  export const addPic = (setLoading, storePic, ) => async (dispatch, previouState) => {
    let file =storePic
    const reference = storage.ref()
    var fRef = reference.child(file.name)
    try {
      setLoading(true);
      await fRef.put(file)
      console.log('URL',fRef.getDownloadURL());
      let url = await fRef.getDownloadURL()
      console.log("Pic added");
      dispatch({
        type: 'ADD_PIC',
        payload:url
      });
    } catch (error) {
      console.log("error", error);
    }finally {
      setLoading(false);
    }
  }
