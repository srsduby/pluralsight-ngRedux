import { Course } from "../courses/course";
import { filterCourses } from "./actions";
// const { Course } from '../courses/course'; //typescript related sysntax error?

export interface IAppState {
  courses: Course[],
  filterCourses: Course[],
};
