import Api from "../services/axios";
import adminRoutes from "../services/endPoints/adminEndPoints";
import errorHandler from "./error";
// import { AxiosError } from "axios";
import axios from "axios";
import { TutorsResponse, UsersResponse ,CategoryResponse} from "../services/types";

export const getUsers = async (
  page: number,
  limit: number
): Promise<UsersResponse> => {
  try {
    const res = await Api.get(adminRoutes.allUsers, {
      params: { page, limit },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      errorHandler(error);
    } else {
      console.error("Unexpected error:", error);
    }
    return { users: [], totalUsers: 0 };
  }
};

export const userBlock = async (userID: string) => {
  try {
    const res = await Api.patch(adminRoutes.blockUser, { userID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};

// unblock user
export const userUnblock = async (userID: string) => {
  try {
    const res = await Api.patch(adminRoutes.unblockUser, { userID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};

// getting all tutors
export const getTutors = async (
  page: number,
  limit: number
): Promise<TutorsResponse> => {
  try {
    const res = await Api.get(adminRoutes.allTutors, {
      params: { page, limit },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      errorHandler(error);
    } else {
      console.error("Unexpected error:", error);
    }
    return { tutors: [], totalTutors: 0 };
  }
};

//   tutor block
export const tutorBlock = async (tutorID: string) => {
  try {
    const res = await Api.patch(adminRoutes.blockTutor, { tutorID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};
//   tutor unblock
export const tutorUnblock = async (tutorID: string) => {
  try {
    const res = await Api.patch(adminRoutes.unblockTutor, { tutorID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};

// add category 
export const addCategory = async (category:string)=>{
  try {
    console.log(category,"kkk");
    
    const res = await Api.post(adminRoutes.categoryAdd,{category})
    return res
    
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
}

export const getCategory = async ( page: number,limit: number):Promise<CategoryResponse>=>{
  try {

    const res = await Api.get(adminRoutes.getCategories,{
      params:{page,limit}
    })
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      errorHandler(error);
    } else {
      console.error("Unexpected error:", error);
    }
    return { categories: [], totalCategory: 0 };
  }
}


//   category unlist
export const categoryUnlist = async (categoryID: string) => {
  try {
    const res = await Api.patch(adminRoutes.categoryUnlist, { categoryID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};
//   category list
export const categoryList = async (categoryID: string) => {
  try {
    const res = await Api.patch(adminRoutes.categorylist, { categoryID });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
};
// category edit
export const editedCategoryData = async(newCategory:string,categoryID:string)=>{
  try {
    const res = await Api.patch(adminRoutes.categoryEdit,{newCategory,categoryID});
    return res
  } catch (error) {
    console.log("error",error);
    const err:Error = error as Error;
    return errorHandler(err)
  }
}
// get all courses
export const getCourses = async(page: number, limit: number)=>{
  try {
    const res = await Api.get(adminRoutes.getCourse, {
      params: { page, limit },
    });
    return res.data
    
  } catch (error) {
    console.log("error",error);
    const err:Error = error as Error;
    return errorHandler(err)
  }
}
// viewCoureseDetails
export const viewCoureseDetails = async (course_id:string)=>{
  try {
    console.log(course_id,"cours....id");
    
  const res = await Api.get(adminRoutes.getViewCourse, {
    params: {
      id: course_id,
    },
  });
  console.log(res,"data course view");
  
  return res.data;
} catch (error) {
  console.log("error:", error);
  const err: Error = error as Error;
  return errorHandler(err);
}
} 

// unapproved course fetching
export const fetchNotApprovedCourses = async()=>{
  try {
    const res = await Api.get(adminRoutes.getUnapprovedCourse)
    return res.data
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
}

// courseApprove
export const courseApprove = async(course_id:string)=>{
  try {
    const res = await Api.patch(adminRoutes.courseApproved, { course_id });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
}
// courseUnapprove
export const courseUnapprove = async(course_id:string)=>{
  try {
    const res = await Api.patch(adminRoutes.courseUnapproved, { course_id });
    return res;
  } catch (error) {
    console.log("error:", error);
    const err: Error = error as Error;
    return errorHandler(err);
  }
}