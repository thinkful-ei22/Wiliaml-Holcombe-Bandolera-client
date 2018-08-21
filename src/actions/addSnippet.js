import  { API_BASE_URL } from '../../src/config';

export const addSnippet = (snippetAddress, 
    snippetDescription, currentSubtopic) => dispatch => {
    dispatch(fetchSnippetsRequest());
    return fetch(`${API_BASE_URL}/snippets`, {
        method:'POST',
        data: { title: snippetDescription,
                image: snippetAddress,
                subtopicId: currentSubtopic
        }
        })
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
        dispatch(fetchSnippetsSuccess(data))
    ).catch(err =>
        dispatch(fetchSnippetsError(err))
    );
};

export const FETCH_SNIPPETS_REQUEST = 'FETCH_SNIPPETS_REQUEST';
export const fetchSnippetsRequest = () => ({
    type: FETCH_SNIPPETS_REQUEST
    
});

export const FETCH_SNIPPETS_SUCCESS = 'FETCH_SNIPPETS_SUCCESS';
export const fetchSnippetsSuccess = snippets => ({
    type: FETCH_SNIPPETS_SUCCESS,
    snippets
});

export const FETCH_SNIPPETS_ERROR = 'FETCH_SNIPPETS_ERROR';
export const fetchSnippetsError = error => ({
    type: FETCH_SNIPPETS_ERROR,
    error
});