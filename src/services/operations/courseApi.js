import { courseEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast"


const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
} = courseEndpoints;

export const getAllCourses = async () => {
  let result = [];
   const toastId = toast.loading("loadong...");

  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API);
    if (!response?.data?.success) {
      throw new Error("Couldn't get all courses'");
    }

    result = response.data;
  } catch (err) {
    console.log("Error while getting all courses ", err);
  }

  toast.dismiss(toastId);
  return result;
};

export const getCourseDetails = async (courseId) =>{
   const toastId = toast.loading("Loading course...");
   let result = null;

   try{
      const response = await apiConnector("GET",COURSE_DETAILS_API, {courseId});
      if(!response?.data?.success) {
         throw new Error("could not fetch course details");
      }

      result = response.data;

   }catch(err){
      console.log("Error while getting course details", err);
      result = err.response.data;
   }

   toast.dismiss(toastId);
   return result;
}


export const getCourseCategories = async () => {
  let result = [];

  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);

    console.log(response);

    if (!response?.data?.success) {
      throw new Error("could not fetch categories");
    }

    result = response.data?.Categories;
  } catch (e) {
    console.log("could not fetch categories in API", e);
  }

  return result;
};

export const addCourseDetail = async(course, token) => {
   let result = null;
   const toastId = toast.loading("Loading...");

   try{
      const response = await apiConnector("POST", CREATE_COURSE_API, course, {
         "Content-Type": "multipart/form-data",
         Authorisation: `Bearer ${token}`,
       })

       if(!response?.data?.success) {
         throw new Error("Error while adding course");
       }
       result = response.data;
       toast.success("Course Details Added Successfully");
   }catch(e) {
      console.log("Error while adding course", e);
      result = e.response.data;
   }

   toast.dismiss(toastId);
   return result;

};

export const editCourseDetail = async(course, token) => {
   const toastId = toast.loading("Loading...");

   
}
