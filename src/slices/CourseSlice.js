import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courseSectionData: [],
    courseEntireData: [],
    completedLectures: [],
    totalNoOfLectures: 0,
}


const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {

    }
})

export const {

} = courseSlice.actions;

export default courseSlice.reducer;