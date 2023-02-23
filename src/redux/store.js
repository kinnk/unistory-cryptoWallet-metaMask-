import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataSlices";
import userReducer from "./reducers/userSlices";


export default configureStore({
  reducer:{
    data: dataReducer,
    user: userReducer
  }
})

