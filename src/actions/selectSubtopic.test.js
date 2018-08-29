import { selectSubtopic, SELECT_SUBTOPIC_REQUEST,
    unselectSubtopic, UNSELECT_SUBTOPIC_REQUEST,
toggleDisplayNewSnippetForm, TOGGLE_DISPLAY_SNIPPET_FORM }
    from './selectSubtopic';

    describe('selectSubtopic', () => {
        it('Should return the action', () => {
            const testSubtopic = {
                "_id": "111111111111111111111107",
                "userId": "333333333333333333333301",
                "topicId":"444444444444444444444403",
                "title": "Parsimony"
              }
            const action = selectSubtopic(testSubtopic);
            expect(action.type).toEqual(SELECT_SUBTOPIC_REQUEST);
            expect(action.currentSubtopic).toEqual(testSubtopic);
        })
    })

    describe('unselectSubtopic', () => {
        it('Should return the action', () => {
           
            const action = unselectSubtopic();
            expect(action.type).toEqual(UNSELECT_SUBTOPIC_REQUEST);
            expect(action.currentSubtopic).toEqual(null);
        })
    })

    describe('toggleDisplaySnippetForm', () => {
        it('Should return the action', () => {
            const action = toggleDisplayNewSnippetForm();
            expect(action.type).toEqual(TOGGLE_DISPLAY_SNIPPET_FORM);
            
        })
    })