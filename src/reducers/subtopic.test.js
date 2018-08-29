import { subtopicReducer}  from './subtopic';

import { addSubtopicRequest, addSubtopicError, addSubtopicSuccess
             } from '../actions/add-subtopic';


            it('Should set the initial state when nothin is passed in',
        () => {
            const state = subtopicReducer(undefined, {type:'@@UNKNOWN'});
            expect(state).toEqual({subtopics :[
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
              ]})

        });

        it('Should return the current state on an unknown action is passed in',
        () => {
            const oldState = {
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
                    }
                  ]   
            }
            const state = subtopicReducer(oldState, {type: '@@UNKNOW'});
                expect(state).toBe(oldState);
        });

        it('Should handle the add subtopic action',
        () => {
            const oldState = {
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
                    }
                  ]   
            }
            const subtopic = {
                "_id": "111111111111111111111108",
                "userId":  "333333333333333333333301",
                "topicId": "444444444444444444444402",
                "title": "SnowPiercer"
              }
            
        const state = subtopicReducer(oldState, addSubtopicSuccess(subtopic));
        expect(state.subtopics.subtopics).toEqual(oldState.subtopics.subtopics + subtopic);
        });

  
    