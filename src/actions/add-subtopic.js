import  { API_BASE_URL } from '../../src/config';
// import { addSUbtopicError, addSubtopicRequest, add}

export const addSubtopic = (newSubtopic, headers) => dispatch => {
    dispatch(addSubtopicRequest());
    //console.log(newImage);
    console.log("ICE CRIMMM", newSubtopic);
    return fetch(`${API_BASE_URL}/api/subtopics`, {
        method:'POST',
        headers,
        body: JSON.stringify({ 
            title: newSubtopic.title,
            topicId: newSubtopic.topicId
        } )   
        })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
        dispatch(addSubtopicSuccess(data))
    ).catch(err =>
        dispatch(addSubtopicError(err))
    );
};

export const ADD_SUBTOPIC_REQUEST = 'ADD_SUBTOPIC_REQUEST';
export const addSubtopicRequest = () => ({
    type: ADD_SUBTOPIC_REQUEST
});

export const ADD_SUBTOPIC_SUCCESS = 'ADD_SUBTOPIC_SUCCESS';
export const addSubtopicSuccess = subtopic => ({
    type: ADD_SUBTOPIC_SUCCESS,
    subtopic
});

export const ADD_SUBTOPIC_ERROR = 'ADD_SUBTOPIC_ERROR';
export const addSubtopicError = error => ({
    type: ADD_SUBTOPIC_ERROR,
    error
});