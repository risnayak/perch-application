import React, {Component} from 'react';
import './SignUp.css';
class SignUp extends Component {
	render() {
		return (
				<div id="form" className="center-align container">
				    <div className="input-form grey lighten-5 z-depth-3" >
				      <div className="container">
				        <div className="form-header center-align grey-text text-darken-3">Join Perch</div>
				        <div className="row">
				          <form className="col s12" action='/pick-your-interests'>
				            <div className="row min-margin">
				              <div className="input-field col s6">
				                <input id="first_name" type="text" className="validate grey-text text-darken-2" required />
				                <label htmlFor="first">First Name</label>
				              </div>
				              <div className="input-field col s6">
				                <input id="last_name" type="text" className="validate grey-text text-darken-2" required />
				                <label htmlFor="last_name">Last Name</label>
				              </div>
				            </div>
				            <div className="row min-margin">
				              <div className="input-field col s12">
				                <input id="email" type="email" className="validate grey-text text-darken-2" required />
				                <label htmlFor="email">UMich Email</label>
				              </div>
				            </div>

				            <div className="row min-margin">
				              <div className="input-field col s12">
				                <input id="password" type="password" className="validate grey-text text-darken-2" required />
				                <label htmlFor="password">Password</label>
				              </div>
				            </div>
				            <div className="row min-margin">
				              <div className="input-field col s12">
				                <input id="password_retype" type="password" className="validate grey-text text-darken-2" required />
				                <label htmlFor="password_retype">Re-type Password</label>
				              </div>
				            </div>
				              <input className="radio" name="user-type" type="radio" id="faculty" required />
				              <label htmlFor="faculty">Faculty</label>
				              <input className="radio" name="user-type" type="radio" id="student" required />
				              <label htmlFor="student">Student</label>
				            <div className="submit-container row min-margin center-align">
				              <button className="btn waves-effect waves-light submit-btn"  type="submit" name="action">De-awkwardize
				                <i className="material-icons right">send</i>
				              </button>
				              <br /><br />
				            </div>
				          </form>
				        </div>
				        </div>
				      </div>
				  </div>
		);
	}
}

export default SignUp;