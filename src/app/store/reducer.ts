import { Course } from '../courses/course';
import { IAppState } from './IAppState';



const initialState: IAppState = {
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
};

export function reducer(state= initialState, action) {
  return state;
};
