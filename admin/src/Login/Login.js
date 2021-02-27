import React, {useState} from "react";
import Swal           from 'sweetalert2';
import { useHistory } from "react-router"; 
import $              from 'jquery';
import './Login.css'

export default function Login(props) {

	const [inputs, setInputs] = useState({email:'', password:''});
	const [errors, setErrors] = useState({email:'', password:''});
	const [btnLoading, setBtnLoading] = useState(false);

	const history = useHistory();


	const handleSubmit = (event) => {
		setBtnLoading(true);
		if(event){
			event.preventDefault();
		}
		if(validate()){
			
			if(inputs.email === 'admin@xyz.com' && inputs.password === 'Admin_007'){
				setBtnLoading(false);
				localStorage.setItem("token", 'wnddkacxfbwnddkacxfb');
				localStorage.setItem("user_ID", 'admin@xyz.com');
				history.push('/users');	
				window.location.replace("users");		
			}
			else{  
				Swal.fire('Please enter valid Email ID and Password','','Error' ); 
				setBtnLoading(false);
			} 
		}
		else{
			setBtnLoading(false);
		}
	}

	const handleInputChange = (event) => {
		event.persist();
		console.log("input", event.target.name, event.target.value);
		setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
	}
  
	const validate = () => {
		const errors = {};
		var isValid = true;
		if (!inputs.email) {
			errors.email = 'Please enter your Email';
			isValid = false;
		} 

		if (typeof inputs["email"] !== "undefined") {		  
			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
			  errors["email"] = "Please enter valid email address.";
			  isValid = false;
			}
		}

		if (!inputs.password) {
			errors.password = 'Please enter your password';
			isValid = false;
		}

		//Password Errors
		if(!inputs.password  || inputs.password.length <6){
			errors.password = 'Please enter at least 6 character';
			isValid = false;
		}
		setErrors(errors);
		return isValid;		
	}

	const showSignPass = () => {
		$('.showPwd').hide();
		$('.hidePwd').show();
		$('#password').attr('type', 'text');
	}
	const hideSignPass = () => {
		$('.showPwd').show();
		$('.hidePwd').hide();
		$('#password').attr('type', 'password');
	}
	
	return (
		<div className="row" style={{'backgroundColor': '#008dc4', 'height': window.innerHeight + 'px', 'width': window.innerWidth + 'px', padding: '0px 15px' }}>
			<div className="col-lg-8">
				<div className="topheading">
					<h4 className="heading">Eclerx Admin portal</h4>
				</div>
			</div>
			<div className="col-lg-4">
				<form id="login" onSubmit={handleSubmit} className="formBox">
					<div className="form-group col-lg-12">
						<label className="labelControl ">Email Id<span className="astricsign">*</span></label>
						<div className="input-icons-font">
							<i className="fa fa-envelope icon"></i>
							<input type="email" className="form-control" id="email" name="email" placeholder="Email ID" onChange={handleInputChange} value={inputs.email} required />
							<div className="error">{errors.email}</div>
						</div>
					</div>
					<div className="formInput col-lg-12">
						<label className="labelControl ">Password<span className="astricsign">*</span></label>
						<div className="input-icons-font ">
							<i className="fa fa-lock icon"></i>
							<input type="password" className="form-control" name="password" id="password" onChange={handleInputChange} value={inputs.password} required />
							<div className="error">{errors.password}</div>
							<div className="showHideSignDiv">
	                          <i className="fa fa-eye-slash hidePwd hideEyeSignup rightIcon" aria-hidden="true" style={{"color":"#666"}} onClick={hideSignPass}></i>
	                          <i className="fa fa-eye showPwd showEyeupSign rightIcon" style={{"color":"#666"}}aria-hidden="true" onClick={showSignPass}></i>	                          
	                        </div>
						</div>
					</div>

					{
						btnLoading ?
						<div className="col-lg-3 ">
						  <input id="logInBtn" type="submit" className="btn btn-primary BtnBox" style={{"padding":"6px 30px"}} value="Loading >>" />
						</div>
						:
						<div className="col-lg-5 ">
						  <input id="logInBtn" type="submit" className="btn btn-primary BtnBox" style={{"padding":"6px 30px"}} value="Sign In >>" />
						</div>
					}                  
				</form>
			</div>	
		</div>		
	)		
  	
}
