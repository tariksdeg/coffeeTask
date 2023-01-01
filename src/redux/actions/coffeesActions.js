import * as actionTypes from "./actionTypes";
import { coffeesDB } from "../../db/coffees"; 

export const getCoffees = () => async (dispatch) => {
    try{
        dispatch({type:actionTypes.GET_COFFEES , coffeesDB})
    }catch(error){
        console.log(error)
    }
    
};


export const changeCategory = (category) => async (dispatch) => {
    try{
        dispatch({type:actionTypes.CHANGE_CATEGORY,category})
    }catch(error){
        console.log(error)
    }
}