import React from 'react';
import {connect } from 'react-redux';

import { addTopic } from '../actions/add-topic';
import NewTopicForm from './new-topic-form';

 

//import  { fetchSubtopics } from '../actions/subtopic';


export class NewTopicPage extends React.Component {
    constructor(props) {
        super(props);
    }
    addNewTopic(topic){

        const headers = {
            'Authorization': 'Bearer ' + this.props.authToken,
            'Content-Type' : 'application/json'
          };
        console.log(topic);
        const newTopic = topic;
        this.props.dispatch(addTopic(newTopic, headers));
    }
    
    

render(){ 

    return( 

         <div className="new-topic-form">
<h1>Hello</h1>
              <NewTopicForm
              onAdd={topic => this.addNewTopic(topic)}
            />
            
        </div>

        
    );
}
}

export const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    authToken: state.auth.authToken,
    currentSubtopic: state.app.currentSubtopic
   })
  
   export default connect(mapStateToProps)(NewTopicPage);