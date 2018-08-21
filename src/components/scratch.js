import React from 'react';
import { registerUser } from '../actions/RegisterUser';
import {connect } from 'react-redux';

class RegisterUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation();
        e.preventDefault();
        //console.log(this.state);
        //console.log(e);
        const user = {fullName:`${this.state.fullName}`,
                        userName: `${this.state.username}`,
                        password: `${this.state.password}`}
        this.props.dispatch(registerUser(user));



    }    
    render() {
        //console.log('Hello world');
        return (
           // <h1>Over Here</h1>
            <section className="signup-login">
                <form id="signup-form" className="js-signup-from"
                        onSubmit={(e) =>  this.onSubmit(e) }>
                    <fieldset>
                        <legend>Signup</legend>
                         <div>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="fullname" className="js-fullname-entry" 
                                defaultValue={this.state.fullName}
                                onChange={this.onChange.bind(this)}></input>
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" className="js-username-entry" 
                            defaultValue={this.state.username}
                            onChange={this.onChange.bind(this)} ></input>
                         </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="js-password-entry" 
                                 defaultValue={this.state.password}
                                 onChange={this.onChange.bind(this)}></input>
                         </div>
                            <button >Signup</button>
                    </fieldset>
                 </form>
        
          </section>
        );
    }
}
//export default RegisterUserForm;

export const mapStateToProps = state => ({
    subtopics: state.app.subtopics,
    snippets: state.app.snippets,
    currentSubtopic: state.app.currentSubtopic,
    displaySnippetForm: state.app.displaySnippetForm,
    topicId: state.app.topicId
 })
  export default connect(mapStateToProps)(RegisterUserForm);


{/* <form id="login-form" class="js-login-form">
              <fieldset>
                <legend>Login</legend>
                <div>
                  <label for="username">Username</label>
                  <input type="text" name="username" class="js-username-entry" value="">
                </div>
                <div>
                  <label for="password">Password</label>
                  <input type="password" name="password" class="js-password-entry" value="">
                </div>
                <button type="submit">Login</button>
              </fieldset>
            </form>
         */}