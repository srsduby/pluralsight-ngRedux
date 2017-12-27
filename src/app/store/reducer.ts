import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES } from './actions';
import { Z_FILTERED } from 'zlib';


const courses = {
  courses: [
    {
      "id": 1,
      "name": "Learning React",
      "topic": "React"
    },
    {
      "id": 2,
      "name": "Learning Angular",
      "topic": "Angular"
    },
    {
      "id": 3,
      "name": "Using Redux with Angular",
      "topic": "Angular"
    }
  ]
}

const initialState: IAppState = {
  courses,
  filteredCourses: courses,
};

function filterCourses(state, action) : IAppState {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => c.name.toLowerCase().indexOf
    (action.searchText.toLowerCase()) > -1),
  });
}

export function reducer(state= initialState, action) {
  switch(action.type) {
    case: FILTER_COURSES:
      return filterCourses(state, action)
    default: return state;
  }
};
