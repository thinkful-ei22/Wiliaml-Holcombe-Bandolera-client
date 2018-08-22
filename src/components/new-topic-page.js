import React from 'react';
import {connect } from 'react-redux';

import { addTopic } from '../actions/add-topic';
import NewTopicForm from './new-topic-form';

 

//import  { fetchSubtopics } from '../actions/subtopic';


export class NewTopicPage extends React.Component {
    constructor(props) {
        super(props);
    }
    onadd(topic){
        console.log(topic);
        const newTopic = topic;
        this.props.dispatch(addTopic(newTopic));
    }
    
    

render(){ 

    return( 

         <div className="new-topic-form">

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