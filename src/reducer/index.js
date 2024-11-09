import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice"
import profileReducer from "../slices/profileSlice"
import cartReducer from "../slices/cartSlice"
import addCourseReducer from "../slices/AddCourseSlice";
import courseReducer from "../slices/CourseSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    addCourse: addCourseReducer,
    course: courseReducer,
})

export default rootReducer;