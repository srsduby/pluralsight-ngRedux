export const FILTER_COURSES = 'courses/FILTER';

// action creator; function responsible for retuning correct object that represents action
export function filterCourses(searchText:string) {
  return {
    type: FILTER_COURSES,
    searchText,
  }
}
