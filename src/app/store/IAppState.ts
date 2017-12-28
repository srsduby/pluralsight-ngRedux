import { Course } from "../courses/course";
// const { Course } from '../courses/course'; //typescript related sysntax error?

export interface IAppState {
  courses: Course[],
  filteredCourses: Course[],
};
