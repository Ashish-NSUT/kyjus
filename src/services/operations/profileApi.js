import { profileEndpoints } from "../api";
import { apiConnector } from "../apiConnector";

const { GET_USER_DETAILS_API, GET_USER_ENROLLED_COURSES_API } =
  profileEndpoints;

export async function getUserEnrolledCourses(token) {
    let result = [];

    try {
      const response = await apiConnector(
        "GET",
        GET_USER_ENROLLED_COURSES_API,
        null,
        {
          authToken: token,
        }
      );
      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      
      result =  response.data.data;
    } catch (err) {
        console.error("Error while getting user enrollment Courses", err);
    }

    return result;
}
