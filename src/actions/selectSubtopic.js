// export const selectSubtopic = () => dispatch => {

// }

// export const unselectSubtopic = () => dispatch => {
    
// }


export const SELECT_SUBTOPIC_REQUEST = 'SELECT_SUBTOPIC_REQUEST';
export const selectSubtopic = (subtopic) => ({
  
    type: SELECT_SUBTOPIC_REQUEST,
    currentSubtopic: subtopic
});

export const UNSELECT_SUBTOPIC_REQUEST = 'UNSELECT_SUBTOPIC_REQUEST';
export const unselectSubtopic = () => ({
    type: UNSELECT_SUBTOPIC_REQUEST,
    currentSubtopic: null
});

export const TOGGLE_DISPLAY_SNIPPET_FORM = 'TOGGLE_DISPLAY_SNIPPET_FORM';
export const toggleDisplayNewSnippetForm = () => ({
    type: TOGGLE_DISPLAY_SNIPPET_FORM
});