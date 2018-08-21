import React from 'react';
import {connect } from 'react-redux';





import { reduxForm, Field } from 'redux-form';

export class LoginForms extends React.Component {

submitNewUser(){
    this.props.dispatch(validateUser)
}

render(){

console.log('Hello LoginPage');

return(

    <h1>Over Here Login Page</h1>
//     <section class="signup-login">
//     <form id="signup-form" class="js-signup-from">
//       <fieldset>
//         <legend>Signup</legend>
//         <div>
//           <label for="fullname">Full Name</label>
//           <input type="text" name="fullname" class="js-fullname-entry" value="">
//         </div>
//         <div>
//           <label for="username">Username</label>
//           <input type="text" name="username" class="js-username-entry" value="">
//         </div>
//         <div>
//           <label for="password">Password</label>
//           <input type="password" name="password" class="js-password-entry" value="">
//         </div>
//         <button type="submit" onClick={() => this.submitNewUser()} >Signup</button>
//       </fieldset>
//     </form>

//     <form id="login-form" class="js-login-form">
//       <fieldset>
//         <legend>Login</legend>
//         <div>
//           <label for="username">Username</label>
//           <input type="text" name="username" class="js-username-entry" value="">
//         </div>
//         <div>
//           <label for="password">Password</label>
//           <input type="password" name="password" class="js-password-entry" value="">
//         </div>
//         <button type="submit">Login</button>
//       </fieldset>
//     </form>


//   </section>
    
)}
}
export default reduxForm({
      form: 'newUser'
  })(LoginForms);