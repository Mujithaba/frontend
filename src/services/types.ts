export interface User {
  _id: string;
  name: string;
  email: string;
  phone?:string;
  isBlocked: boolean;
}

export interface Tutor {
  _id: string;
  name: string;
  email: string;
  phone?:string;
  isBlocked: boolean;
  isGoogle:boolean
}

export interface ITutorDetails {
  _id?:string;
  profileImg:string;
  profileImgUrl:string;
  experience:string;
  position:string;
  companyName:string;
  aboutBio:string;
}

export interface UsersResponse {
  users: User[];
  totalUsers: number;
}

export interface Tutor {
  _id: string;
  name: string;
  email: string;
  isBlocked: boolean;
}

export interface TutorsResponse {
  tutors: Tutor[];
  totalTutors: number;
}

export interface Category {
  _id: string;
  categoryName: string;
  is_listed: boolean;
}

export interface CategoryResponse {
  categories: [];
  totalCategory: number;
}

export interface Lesson {
  type: "video" | "document";
  title: string;
  duration?: string;
  preview?: boolean;
}

export interface Section {
  title: string;
  lessons: Lesson[];
}

export interface ICourse {
  _id?: string;
  title: string;
  description: string;
  instructor_id: string;
  category_id: Category;
  price: string;
  thambnail_Img: string;
  thumbnailSignedUrl: string;
  trailerSignedUrl: string;
  trailer_vd: string;
  chapters?: Modules[];
  modules?:any[];
  assigments?: Assignment[];
  is_verified?: boolean;
  is_listed?: boolean;
  createdAt?: Date;
}

export interface Assignment {
  _id?: string;
  course_id: string;
  title: string;
  pdf_file: string;
  createdAt?: Date;
}

export interface Lecture {
  _id?: string;
  title: string;
  description: string;
  video: File;
  pdf: File;
  createdAt?: Date;
}

export interface Modules {
  _id?: string;
  course_id: string;
  name?: string;
  lectures?: Lecture[];
  createdAt?: Date;
}


export interface IMessage {
  _id:string;
  senderId:string;
  receiverId:string;
  message:string;
}


export interface IAssignment {
  _id?:string;
  title:string;
  pdf_file:string;
  assignmentUrl:string;
  courseId:string;
}


export interface ICoursesForAssignment {
  _id: string;
  courseName: string;
}

export interface IReviews{
  _id?:string;
  userName:string;
  feedback:string;
  rating:number;
}