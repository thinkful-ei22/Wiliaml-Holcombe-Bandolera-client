import React from 'react';


import { reduxForm, Field } from 'redux-form';



export class NewSnippetForm extends React.Component {
    constructor(props) {
        super(props) ;
       
    }

    
    onSubmit(values) {
        //console.log(values);
   //console.log('Ice Cream', values.title)
            this.props.onAdd(values.image, values.title);
   
    }

    // onClick(){
    //     this.props.onClick();
    // }
    // () => this.props.handleToggle(()=>this.onClick())


render(){ 
 return( 
        <div>
            <a onClick={this.props.onClick}>Cancel</a><br/>
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

export default reduxForm({
    form: 'newSnippet'
})(NewSnippetForm);