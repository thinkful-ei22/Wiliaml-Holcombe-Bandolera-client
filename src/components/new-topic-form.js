

import React from 'react';


import { reduxForm, Field } from 'redux-form';

import {Link, Redirect} from 'react-router-dom';

export class NewTopicForm extends React.Component {
    constructor(props) {
        super(props) ;
    }
    onSubmit(values) {
        //console.log(values);
   
            this.props.onAdd(values.topic);
   
    }

    onClick(){
        this.props.onClick();
    }




render(){ 

    return( 

         <div className="new-topic-form">
              <form onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                        )}><br/><br/>
              <label htmlFor="new-topic">Add Topic</label><br/>
              <Field name="topic" id="new-topic-id" type="text"
              component="input"/><br/>
              <button type="submit">Submit</button><br/><br/><br/>
              <Link to="/topics">Back</Link>
            </form>
            
        </div>

        
    );
}
}

export default reduxForm({
    form: 'newSnippet'
})(NewTopicForm);