import React from 'react';
import {connect } from 'react-redux';

import {selectSubtopic, unselectSubtopic, toggleDisplayNewSnippetForm}
     from '../actions/selectSubtopic';

import { addSubtopic } from '../actions/add-subtopic';

import NewSnippetPage from './new-snippet-page';

export class SubtopicBoard extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      editing: false
  }
  }
  

  handleChange (event) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [event.target.name]: event.target.value });
  }

    toggleNewSnippetForm(){
      this.props.dispatch(toggleDisplayNewSnippetForm())
    }

  
      setSubtopic(subtopic){
       
        const subtopicId = subtopic._id;
        console.log(subtopic);
        this.props.dispatch(selectSubtopic(subtopicId));
      }
             hideModal(){
       
                 this.props.dispatch(unselectSubtopic());
                     }


  

      onSubmit(event) {
        event.preventDefault();

        const headers = {
          'Authorization': 'Bearer ' + this.props.authToken,
          'Content-Type' : 'application/json'
        };
        const text = this.textInput.value.trim();
        const newSubtopic = {
          title: text,
          topicId: this.props.topicId
        }
        // TODO: Add the card or list
        this.props.dispatch(addSubtopic(newSubtopic, headers));
        this.textInput.value = '';
        //this.forceUpdate();
    }
      setEditing(editing) {
        this.setState({
            editing // Shorthand for editing: editing
        });
    }
    
      render(){
        
        let subtopicsDisplay;
          if(this.props.topicId){
            // console.log(this.props.subtopics.filter( 
            // console.log('HALO', this.props.subtopics);
            //   subtopic => {
            //     console.log('>>>>>>', subtopic);
            //     subtopic.topicId ===
            //   this.props.topicId
            //   })
            // );

             subtopicsDisplay  = 
             <div className="subtopics-display">
                {this.props.subtopics.filter( 
                 subtopic => subtopic.topicId ===
                 this.props.topicId)
             .map((subtopic, i) => <li  onClick={() => 
                 this.setSubtopic(subtopic)}>{subtopic.title}</li>)}
                 {addNewSubtopic}
                 </div>
          }
        let snippetsModal = null;
  
        if(this.props.currentSubtopic){
       
         snippetsModal = <div className="modal">
            <a onClick={() => this.hideModal()}>Close</a><br/><br/>
            <h3>Code to Master</h3>
            {this.props.snippets.filter(snippet => snippet.subtopicId === 
                this.props.currentSubtopic).map((snippet, i) => 
                <li>{snippet.title}
                <img src={snippet.image} alt="img-alt"/></li>)}

            <a onClick={() => this.toggleNewSnippetForm()}>New</a><br/>
           
          </div>
        }

        let newSnippetFormModal;
        if(this.props.displaySnippetForm){

          newSnippetFormModal = <NewSnippetPage />
         
        }
      let addNewSubtopic  
        if (!this.state.editing) {
       addNewSubtopic = 
              <div className="add-button"
                  onClick={() => this.setEditing(true)}>
                  <a href="#">Add a Subtopic</a>
              </div>
      } else {
        addNewSubtopic = 
          <form className="card add-form" onSubmit={(e) => this.onSubmit(e)}>
              <input
                  type="text"
                  ref={input => this.textInput = input}
                  aria-label="Enter a Subtopic"
              />
              <button>Add</button>
              <button type="button" onClick={() => this.setEditing(false)}>
                  Cancel
              </button>
          </form>
    
      }

        return (
          <div className="subtopic-board main">
          
            {subtopicsDisplay}
            {snippetsModal}
            {newSnippetFormModal}<br/><br/><br/><br/>
            {this.props.topicId && addNewSubtopic}
          </div>
        );
      }
    }

  
   

export const mapStateToProps = state => ({
   subtopics: state.subtopics.subtopics,
   snippets: state.app.snippets,
   currentSubtopic: state.app.currentSubtopic,
   displaySnippetForm: state.app.displaySnippetForm,
   topicId: state.app.topicId,
   authToken: state.auth.authToken
})
 export default connect(mapStateToProps)(SubtopicBoard);


 //console.log('Over Here', this.props);
        // const subtopics = [
        //   { 
        //     id: 1,
        //     title: 'Sticking Points', 
        //     content: 'ipsum'
        //   }
        // ]
        // const snippets = [
        //   { _id: '0001', title: 'Week1', content: 'ipsum', subtopicId: 1 }, 
        //   { _id: '0002', title: 'Week2', content: 'ipsum', subtopicId: 1 }
        // ];