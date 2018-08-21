//import * as subjectActions from '../actions/subjects';
import { FETCH_SUBJECTS_REQUEST, FETCH_SUBJECTS_SUCCESS,
    FETCH_SUBJECTS_ERROR } from '../actions/subject';

import { FETCH_SUBTOPICS_REQUEST, SET_TOPICID_SUCCESS,
        FETCH_SUBTOPICS_ERROR, 
        FETCH_SUBTOPICS_SUCCESS} from '../actions/subtopic';

        import { FETCH_SNIPPETS_REQUEST, FETCH_SNIPPETS_SUCCESS,
            FETCH_SNIPPETS_ERROR } from '../actions/snippet';

            import { SELECT_SUBTOPIC_REQUEST, UNSELECT_SUBTOPIC_REQUEST,
            TOGGLE_DISPLAY_SNIPPET_FORM } 
            from '../actions/selectSubtopic';

const initialState = {
    // subjects: [{
    //     title: 'React',
    //     content: 'impsum'
    // },{
    //     title: 'Node',
    //     content: 'impsum' 
    // },{
    //     title: 'CSS',
    //     content: 'impsum' 
    // }], 
    subjects: [
        {
          "userId": "333333333333333333333301",
          "_id":    "444444444444444444444400",
          "title": "API"
        },
        {
          "_id":    "444444444444444444444401",
          "userId": "333333333333333333333301",
          "title": "Coding Drills"
        },
        {           
          "_id":    "444444444444444444444402",
          "userId": "333333333333333333333301",
          "title": "Node"
        },
        {
          "_id":    "444444444444444444444403",
          "title": "React",
          "userId": "333333333333333333333301"
        },
        {
          "_id":    "444444444444444444444404",
          "userId": "333333333333333333333302",
          "title": "PHP"
        },
        {
          "_id":    "444444444444444444444405",
          "userId": "333333333333333333333302",
          "title": "App Starter"
        },
        {
          "_id":    "444444444444444444444406",
          "title": "Mobile Apps",
          "userId": "333333333333333333333300"
        }
      ],

    topicId: null,
    subtopics:
    // [{
    //     title: 'Sticking Points',
    //     content: 'impsum'
    // },{
    //     title: 'Different ways to work with state',
    //     content: 'impsum' 
    // },{
    //     title: 'Redux',
    //     content: 'impsum',
    //     snippets:'000001' 
    // }], 
    [
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
          "title": "Work",
          "userId": "333333333333333333333301"
        }
      ],
      showCodelist: null,
      displaySnippetForm: null,
    snippets:
    // [{
    //     title: 'Week 1',
    //     content: 'impsum',
    //     subtopicId:'00001'
    // },{
    //     title: 'Week 2',
    //     content: 'quid' 
    // },{
    //     title: 'Week 3',
    //     content: 'peso' 
    // }],  
    [
        {
          "userId": "333333333333333333333301",
          "_id": "000000000000000000000000",
          "title": "5 life lessons learned from cats",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "subtopicId": "111111111111111111111101",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
      
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000001",
          "title": "What the government doesn't want you to know about cats",
          "content": "Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.",
          "subtopicId": "111111111111111111111101",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
        
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000002",
          "title": "The most boring article about cats you'll ever read",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "subtopicId": "111111111111111111111103",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
         
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000003",
          "title": "7 things lady gaga has in common with cats",
          "content": "Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.",
          "subtopicId": "111111111111111111111100",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
          
        },
        {          
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000004",
          "title": "The most incredible article about cats you'll ever read",
          "content": "Lorem ipsum dolor sit amet, boring consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "subtopicId": "111111111111111111111100",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
          
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000005",
          "title": "10 ways cats can help you live to 100",
          "content": "Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.",
          "subtopicId": "111111111111111111111101",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
         
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000006",
          "title": "9 reasons you can blame the recession on cats",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "subtopicId": "111111111111111111111101",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
          
        },
        {
          "userId":"333333333333333333333301",
          "_id": "000000000000000000000007",
          "title": "10 ways marketers are making you addicted to cats",
          "content": "Posuere sollicitudin aliquam ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper velit. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit egestas dui id ornare arcu odio. Molestie at elementum eu facilisis sed odio morbi. Tempor nec feugiat nisl pretium. At tempor commodo ullamcorper a lacus. Egestas dui id ornare arcu odio. Id cursus metus aliquam eleifend. Vitae sapien pellentesque habitant morbi tristique. Dis parturient montes nascetur ridiculus. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquam faucibus purus in massa tempor nec feugiat nisl.",
          "subtopicId": "111111111111111111111102",
          "image":"https://s25005.pcdn.co/wp-content/uploads/jquerysnippets2-658x243.png"
          
        }
      ],
    loading: false,
    error: null,
    currentSubtopic: null
}



export const subjectsReducer = (state=initialState, action) => { 
   // console.log(action);
if(action.type === FETCH_SUBJECTS_REQUEST){
    return Object.assign({}, state, {
        loading:true
    });

} else if(action.type === FETCH_SUBJECTS_SUCCESS){
    return Object.assign({}, state, {
        subjects: action.subjects,
        loading:false,

    });
} else if(action.type === FETCH_SUBJECTS_ERROR){
    return Object.assign({}, state, {
        loading:false,
        error: action.error

    });
}
else if(action.type === FETCH_SUBTOPICS_REQUEST){

    return Object.assign({}, state, {
        loading: true
        
        
    });

    

} else if(action.type === FETCH_SUBTOPICS_SUCCESS){
    return Object.assign({}, state, {
        loading:false,
        subtopics: action.subtopics

    });
} else if(action.type === FETCH_SUBTOPICS_ERROR){
    return Object.assign({}, state, {
        loading:false,
        error: action.error

    });
} else if(action.type === FETCH_SNIPPETS_REQUEST){

    return Object.assign({}, state, {
        loading:true
    });

} else if(action.type === FETCH_SNIPPETS_SUCCESS){
    // const {topicId1}=action
    // const subtopics = state.subtopics.filter((subtopic) => {
    //     return subtopic.
    // })
    return Object.assign({}, state, {
        topicId1: action.snippets,
        loading:false,

    });
} else if(action.type === FETCH_SNIPPETS_ERROR){
    return Object.assign({}, state, {
        loading:false,
        error: action.error

    });
}   else if(action.type === SELECT_SUBTOPIC_REQUEST){
   
    return Object.assign({}, state, {
       currentSubtopic: action.currentSubtopic

    });
} else if(action.type === UNSELECT_SUBTOPIC_REQUEST){
    return Object.assign({}, state, {
     currentSubtopic: null
    });
}    
else if(action.type === TOGGLE_DISPLAY_SNIPPET_FORM){
    return Object.assign({}, state, {
     displaySnippetForm: !state.displaySnippetForm
    });
}  
else if(action.type === SET_TOPICID_SUCCESS){
    // const {topicId1}=action
    //console.log(action.topicId)
    // const subtopics = state.subtopics.filter((subtopic) => {
    //     return subtopic.
    // })
    return Object.assign({}, state, {
        
        topicId: action.topicId,
        loading:false

    });
}               
return state;
};