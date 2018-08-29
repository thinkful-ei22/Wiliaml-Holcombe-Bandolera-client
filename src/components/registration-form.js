import React from 'react';
import { registerUser } from '../actions/RegisterUser';
import {connect } from 'react-redux';
import { Input, Button } from 'antd';
import {login} from '../actions/auth';


export class RegistrationForm extends React.Component {
    state = {
        username: '',
        fullName: '',
        password: ''

    }
    onChange = (e) => {
       

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit() {
       // console.log(this.state);
        const user = {fullName:`${this.state.fullName}`,
                        username: `${this.state.username}`,
                        password: `${this.state.password}`}
                        //console.log(user);
        this.props.dispatch(registerUser(user))
        .then(() => this.props.dispatch(login(user.username,
             user.password)))
    }


    render() { 
        return (
            <div>
            <h1>register</h1>
           
                <Input name='fullName' placeholder='Enter Full Name' 
                onChange={e => this.onChange(e)} value={this.state.fullName}/><br/>
                <Input name='username' placeholder='Enter Username' 
                onChange={e => this.onChange(e)} value={this.state.username}/><br/>
                <Input name='password' placeholder='Enter Password' 
                onChange={e => this.onChange(e)} value={this.state.password}/><br/><br/><br/>
    
                <Button type="primary" onClick={() => this.onSubmit()}>Submit</Button>
                </div>
        );
    }
}

export const mapStateToProps = state => ({
    subtopics: state.app.subtopics,
    snippets: state.app.snippets,
    displaySnippetForm: state.app.displaySnippetForm,
    topicId: state.app.topicId
 })
  export default connect(mapStateToProps)(RegistrationForm);