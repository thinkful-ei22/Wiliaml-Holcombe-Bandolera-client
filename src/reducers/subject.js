//import * as subjectActions from '../actions/subjects';
import { FETCH_SUBJECTS_REQUEST, FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_ERROR } from '../actions/subject';

const initialState = {
    subjects: [{
        title: 'Promises',
        content: 'impsum'
    }], 
    loading: false,
    error: null
}



export const subjectsReducer = (state=initialState, action) => { 
if(action.type = FETCH_SUBJECTS_REQUEST){
    return Object.assign({}, state, {
        loading:true
    });

} else if(action.type = FETCH_SUBJECTS_SUCCESS){
    return Object.assign({}, state, {
        subjects: action.subjects,
        loading:false,

    });
} else if(action.type = FETCH_SUBJECTS_ERROR){
    return Object.assign({}, state, {
        loading:false,
        error: action.error

    });
}
return state;
};