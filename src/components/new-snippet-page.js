import React from 'react';
import {connect } from 'react-redux';
//key={index}
//import { fetchSubjects } from '../actions/subject'
//import snippets from './Snippets';
import {selectSubtopic, unselectSubtopic, toggleDisplayNewSnippetForm}
     from '../actions/selectSubtopic';
     import NewSnippetForm from './new-snippet-form';

     import { reduxForm, Field } from 'redux-form';
import { addSnippet } from '../actions/addSnippet';

//import  { fetchSubtopics } from '../actions/subtopic';


export class NewSnippetPage extends React.Component {
    constructor(props) {
        super(props);
    }
    toggleNewSnippetForm(){
        this.props.dispatch(toggleDisplayNewSnippetForm())
      }
addNewSnippet(image, title){
    
    
    //console.log('Here >>>>>>>>', this.props.currentUser);
    const userId = this.props.currentUser.id
    
    const subtopicId = this.props.currentSubtopic
    //console.log(userId);
    console.log(title);
    console.log(subtopicId);
    const newImage = { image, title, userId, subtopicId }
    //console.log(newImage);
    const headers = {
        'Authorization': 'Bearer ' + this.props.authToken,
        'Content-Type' : 'application/json'
      };
    return this.props.dispatch(addSnippet(newImage, headers));
}

    

   // <a href="#" id="upload_widget_opener">Upload multiple images</a>
    

render(){ 

    return( 

         <div className="modal">
                <NewSnippetForm 
                onAdd={(image, title) => this.addNewSnippet(image, title)}
                onClick={e => this.toggleNewSnippetForm()}/>
            
        </div>

        
    );
}
}


export const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  authToken: state.auth.authToken,
  currentSubtopic: state.app.currentSubtopic
 })

 export default connect(mapStateToProps)(NewSnippetPage);