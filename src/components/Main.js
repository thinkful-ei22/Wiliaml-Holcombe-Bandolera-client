import React from 'react';
import {connect } from 'react-redux';
//key={index}
//import { fetchSubjects } from '../actions/subject'
//import snippets from './Snippets';
import {selectSubtopic, unselectSubtopic, toggleDisplayNewSnippetForm}
     from '../actions/selectSubtopic';
     import { addSnippet } from '../actions/addSnippet';
//import  { fetchSubtopics } from '../actions/subtopic';
import { reduxForm, Field } from 'redux-form';
//import NewSnippetModal from './NewSnippetModal';
import NewSnippetForm from './NewSnippetModal';

export class Main extends React.Component {
onSubmit(values){
  console.log(values);
}
    
  //   constructor(){
  //       super();
  //       this.state = {
  //         newSnippetAddress: '',
  //         newSnippetDescription: ''
  //       };
  //       this.handleSubmit = this.handleSubmit.bind(this);
  //    }
  //    componentDidMount(){
  //     console.log('Main Component did mount');
  //     this.props.dispatch(fetchSubtopics());
  // }

  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    this.setState({ [evt.target.name]: evt.target.value });
  }




    toggleNewSnippetForm(){
      this.props.dispatch(toggleDisplayNewSnippetForm())
    }
      showModal(subtopic){
        //this.setState({currentSubtopic: subtopic});
        //console.log(selectSubtopic, this.props);
        this.props.dispatch(selectSubtopic(subtopic));
      }
      hideModal(){
       // this.setState({currentSubtopic: null});
       this.props.dispatch(unselectSubtopic());
      }

      addSnippet(event){
        console.log(event.target.find());
        console.log(this.state.newSnippetAddress);
        this.setState({search: event.target.value})
      }

      // getBase64 = (file) => {
      //   return new Promise((resolve, reject) => {
      //     const reader = new FileReader();
      //     reader.readAsDataURL(file);
      //     reader.onload = () => resolve(reader.result);
      //     reader.onerror = error => reject(error);
      //   });
      // }

      // onFileChange(e){
      //   const { input } = this.props;
      //   const targetFile = e.target.files[0]
      //   if (targetFile) {
      //     const val = await this.getBase64(targetFile)
      //     input.onChange(val)
      //   } else {
      //     input.onChange(null)
      //   }
      // }
    
      render(){
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
        let lis;
          if(this.props.topicId){
             lis  = this.props.subtopics.filter(
              subtopic => subtopic.topicId ===
              this.props.topicId
          )
      .map(st => <li  onClick={() => 
            this.showModal(st)}>{st.title}</li>)}
        let snippetsModal = null;
        //console.log('Nothing Selected yet', this.props.snippets);
        if(this.props.currentSubtopic){
          
         snippetsModal = <div className="modal">
            <a onClick={() => this.hideModal()}>Close</a>
            
            {this.props.snippets.filter(snippet => snippet.subtopicId === 
                this.props.currentSubtopic._id).map(snippet => 
                <li>{snippet.title}
                <img src={snippet.image} alt="img-alt"/></li>)}

            <a onClick={() => this.toggleNewSnippetForm()}>New</a><br/>
           
          </div>
        }

        let newSnippetFormModal;
        if(this.props.displaySnippetForm){

          newSnippetFormModal = <NewSnippetForm />
         
      
         
        }
        return (
          <div className="main">
          
            {lis}
            {snippetsModal}
            {newSnippetFormModal}
          </div>
        );
      }
    }


   

export const mapStateToProps = state => ({
   subtopics: state.app.subtopics,
   snippets: state.app.snippets,
   currentSubtopic: state.app.currentSubtopic,
   displaySnippetForm: state.app.displaySnippetForm,
   topicId: state.app.topicId
})
 export default connect(mapStateToProps)(Main);

