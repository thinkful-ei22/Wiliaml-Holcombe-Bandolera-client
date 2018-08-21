import React from 'react';
import {connect } from 'react-redux';
//key={index}
import { fetchSnippets} from '../actions/snippet'

export class Snippets extends React.Component {

    componentDidMount(){
        console.log('Component did mount');
        this.props.dispatch(fetchSnippets());
    }


    //console.log(props.subjects);
    render() {

        
           // const targetTopicId = this.props.topicId1;  
           

           // Subtopic.find({ topicId: targetTopicId}, userId)

            //parens needed?
            const snippetsList = this.props.snippets.map( (snippet, index) => 
                <li key={index}><a >{snippet.content}</a></li>
        );
    
        return (
                <div>
                    <ul>
                      {snippetsList}
                    </ul>
                </div>
                )
            }
        }
   

export const mapStateToProps = state => ({
   snippets: state.snippets
})
export default connect(mapStateToProps)(Snippets);