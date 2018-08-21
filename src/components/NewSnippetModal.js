import React from 'react';
import {connect } from 'react-redux';
//key={index}
//import { fetchSubjects } from '../actions/subject'
//import snippets from './Snippets';
import {selectSubtopic, unselectSubtopic, toggleDisplayNewSnippetForm}
     from '../actions/selectSubtopic';

     import { reduxForm, Field } from 'redux-form';
import { addSnippet } from '../actions/addSnippet';

//import  { fetchSubtopics } from '../actions/subtopic';


export class NewSnippetForm extends React.Component {
    toggleNewSnippetForm(){
        this.props.dispatch(toggleDisplayNewSnippetForm())
      }

onSubmit(values){
    const { image, title } = values;
    const newImage = { image, title }
    return this.props.dispatch(addSnippet(newImage));
}

    

   
    

render(){ 

    return( 

         <div className="modal">
         <a href="#" id="upload_widget_opener">Upload multiple images</a>
            <a onClick={() => this.toggleNewSnippetForm()}>Cancel</a><br/>
                <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                        )}><br/><br/>
                    <label htmlFor="new-snippet-address">Add Snippet</label><br/>
                     <Field name="image" id="new-snippet-address" type="text" component="input" /><br/>
                    <label htmlFor="email">Description</label><br/>
                     <Field name="title" id="new-snippet-description" type="text" component="input" /><br/><br/>
                     <button type="submit">Submit</button>

            
    
                </form>
        </div>

        
    );
}
}


// export const mapStateToProps = state => ({
//     subtopics: state.subtopics,
//     snippets: state.snippets,
//     currentSubtopic: state.currentSubtopic,
//     displaySnippetForm: state.displaySnippetForm,
//     topicId: state.topicId
//  })
  export default reduxForm({
      form: 'newSnippet'
  })(NewSnippetForm);