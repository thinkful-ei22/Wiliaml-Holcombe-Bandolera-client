import {ADD_SUBTOPIC_REQUEST, ADD_SUBTOPIC_SUCCESS, ADD_SUBTOPIC_ERROR } from
        '../actions/add-subtopic';
const initialState = {
    subtopics: [
        {
          "userId": "333333333333333333333301",
          "topicId":"444444444444444444444402",
          "_id": "111111111111111111111100",
          "title": "Other things to do with Node"
        },
        {
          "_id": "111111111111111111111101",
          "userId":  "333333333333333333333301",
          "topicId": "444444444444444444444402",
          "title": "API sticking points"
        },
        {
          "_id": "111111111111111111111102",
          "userId": "333333333333333333333301",
          "topicId":"444444444444444444444403",
          "title": "Personal"
        },
        {
          "_id":    "111111111111111111111103",
          "topicId":"444444444444444444444401",
          "title": "Testing",
          "userId": "333333333333333333333301"
        }
      ],
}
export const subtopicReducer = (state = initialState, action) => { 
    // console.log(action);
 if(action.type === ADD_SUBTOPIC_REQUEST){
     return Object.assign({}, state, {
         loading:true
     });
 
 } else if(action.type === ADD_SUBTOPIC_SUCCESS){
     return Object.assign({}, state, {
         subtopics: state.subtopics.concat([action.subtopic]),
         loading:false,
 
     });
 } else if(action.type === ADD_SUBTOPIC_ERROR){
     return Object.assign({}, state, {
         loading:false,
         error: action.error
 
     });
    }
    return state;
};