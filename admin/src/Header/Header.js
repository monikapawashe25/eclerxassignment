import React from "react";
import Swal           from 'sweetalert2';
import { useHistory } from "react-router"; 
import './Header.css';

export default function Header(props) {

	const history = useHistory();

	const logout = (event) =>{
		event.preventDefault();
		
		Swal.fire({
			title: 'Are you sure?',
			text: 'You Want to Sign Out',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, Sign Out',
			cancelButtonText: 'No',
			dangerMode: true,
			className : "signoutModal"
			})
		.then((result) => {
			if (result.value) {
				localStorage.removeItem("token");
				localStorage.removeItem("user_ID")
				history.push("/login");
				window.location.replace("login");
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				Swal.fire(
					'Good Job!',
					'',
					'Success'
				)
			}
		})
	}

	
	return (
		<div className="row headerBox">
			<div className="col-lg-4"><h4 className="heading">Eclerx Admin portal</h4></div>
			<div className="col-lg-8 ">
				<a className="pullRight" href="">
					<i className="fa fa-power-off signoutPowerBtn signoutbtnHover "title="Sign Out" onClick={logout}></i>
				</a>
			</div>			
		</div>
			
	)		
  	
}
