import React from 'react';
import {connect } from 'react-redux';
import Main from './Main';
import {Link, Redirect} from 'react-router-dom';
//key={index}
//import RegisterUserForm from './RegisterUser';
import { setTopicId } from '../actions/subtopic';

import { fetchSubjects } from '../actions/subject';


export class CodeList extends React.Component {

    componentDidMount(){
      
        this.props.dispatch(fetchSubjects());
    }

handleClick(topicId) {
    
   
    this.props.dispatch(setTopicId(topicId));
}

newTopic(){

}

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
      


        return (
            <div>
               
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
                             <Link to="/newTopic">New</Link>
                             
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
{/* <a onClick={() => this.newTopic()}>New</a> */}
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