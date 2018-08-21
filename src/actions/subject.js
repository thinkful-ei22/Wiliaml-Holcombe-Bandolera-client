

export const fetchSubjects = () => dispatch => {
    dispatch(fetchSubjectsRequest());
    return fetch('/topics').then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    }).then(data =>
        dispatch(fetchSubjectsSuccess(data))
    ).catch(err =>
        dispatch(fetchSubjectsError(err))
    );
};

export const FETCH_SUBJECTS_REQUEST = 'FETCH_SUBJECTS_REQUEST';
export const fetchSubjectsRequest = () => ({
    type: FETCH_SUBJECTS_REQUEST
});

export const FETCH_SUBJECTS_SUCCESS = 'FETCH_SUBJECTS_SUCCESS';
export const fetchSubjectsSuccess = subjects => ({
    type: FETCH_SUBJECTS_SUCCESS,
    subjects
});

export const FETCH_SUBJECTS_ERROR = 'FETCH_SUBJECTS_ERROR';
export const fetchSubjectsError = error => ({
    type: FETCH_SUBJECTS_ERROR,
    error
});