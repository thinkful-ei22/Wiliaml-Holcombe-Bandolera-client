import React from 'react';
import {connect } from 'react-redux';
//key={index}
import { fetchSubjects } from '../actions/subject'

export class CodeList extends React.Component {

    componentDidMount(){
        console.log('Component did mount');
        this.props.dispatch(fetchSubjects());
    }


    //console.log(props.subjects);
    render() {

        const subjectsList = this.props.subjects.map(
            //parens needed?
            (subject, index) => <li key={index}>{subject.title}:{subject.content}</li>
        );
        return (
            <div>
                <h1>Bandolera</h1>
                    <ul>
                      {subjectsList}
                 </ul>
            </div>
                )
            }
        }
   

export const mapStateToProps = state => ({
    subjects: state.subjects
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