import  { API_BASE_URL } from '../../src/config';

export const addSnippet = (newImage, headers) => dispatch => {
    dispatch(fetchSnippetsRequest());
    //console.log(newImage);
    console.log('XLYYY', newImage.title, newImage.image, newImage.subtopicId,
    newImage.userId)
    return fetch(`${API_BASE_URL}/api/snippets`,  {
        method:'POST',
        headers,
        body: JSON.stringify({ title: newImage.title,
                image: newImage.image,
                subtopicId: newImage.subtopicId,
                userId: newImage.userId
        })
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