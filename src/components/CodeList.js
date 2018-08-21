import React from 'react';
import {connect } from 'react-redux';
import Main from './Main';
//key={index}
//import RegisterUserForm from './RegisterUser';
import { setTopicId } from '../actions/subtopic';

import { fetchSubjects } from '../actions/subject';


export class CodeList extends React.Component {

    componentDidMount(){
        //console.log('Component did mount');
        //console.log(this.props);
        this.props.dispatch(fetchSubjects());
    }

handleClick(topicId) {
    //event.preventDefault();
    //console.log('Working', event);

    //const targetTopicId  = event.currentTarget
   // const subtopicsToDisplay = Subtopic.find({ topicId: targetTopicId }, userId);
   
    this.props.dispatch(setTopicId(topicId));
}
//const subjectId = subject._id
    //console.log(props.subjects);
    render() {
        
        const subjectsList = this.props.subjects.map(
            
            (subject, index) => { return (
            
            <a data-id={subject._id} key={index} 
            onClick={() => {this.handleClick(subject._id)}}>
            {subject.title}</a>
            );
            }
            
        );
            let main;
            let heading;
            if(this.props.topicId){ 
                heading = this.props.subjects.find(
                    subject => subject._id === this.props.topicId).title
                    }

                    main = <Main /> ;

                 let login;
                 //change to !
                 console.log(this.props.showCodelist);
            // if (this.props.showCodelist){
            //     login = <RegisterUserForm />
            // }

            // {login}


        return (
            <div>
                <p> Here </p>
            <div >
            <header>
               
                    <h2 className="heading">{heading}</h2>
            </header>
                    <aside  
                    className="sidebar sidenav">
                        <h3>Topics</h3>
                            <nav >
                            
                                 <ul>
                                     {subjectsList}
                                
                                </ul>
                             </nav>
                             <a onClick={() => this.newTopic()}>New</a>
                        </aside>
             {main}
        </div>
        </div>
                )
            }
        }
   

export const mapStateToProps = state => ({
    subjects: state.app.subjects,
    topicId: state.app.topicId,
    showCodelist: state.app.showCodelist
    
   
})
export default connect(mapStateToProps)(CodeList);

// <header>
// <a href="#" className="toggle-menu fontawesome-reorder"></a>
//  <h1>Bandelero</h1>
// </header>
// <div className="sidebar">
// <h3>Contents</h3>
// <nav>
// <ul>
//     {subjectsList}
// </ul>
// </nav>
// </div>

//className={this.props.showCodelist ? "NORMAL" : "HIDDEN"}