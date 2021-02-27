import React, {useState, useEffect} from "react";
import Swal           from 'sweetalert2';
import { useHistory } from "react-router"; 
import axios          from 'axios';
import ClipLoader     from "react-spinners/ClockLoader"; 
import Moment         from 'moment';
import './User.css';

export default function User(props) {

	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then(response =>{
                console.log("users list = ",response.data); 
                setUser(response.data.results[0]);
                setLoading(false);
            })
            .catch(error=>{
                Swal.fire("Some Error Occured while getting the user List",error.message,"error");
        })	
    }, [])  


	
	return (
		<div className="row ">
			{ loading ?
				<ClipLoader
					size={80}
					color={"#3c8dbc"}
					loading={loading}
				/>
				:
				<div className="col-lg-12">
					<div>
						<img src={user.picture.large} alt="profile" />
					</div>
					<div>
						<h5>{user.name.title} {user.name.first} {user.name.last}</h5>
						<h5>Email: {user.email}</h5>
						<h5>Phone: {user.phone}</h5>
						<h5>DOB: {Moment(user.dob.date).format("YYYY-MM-DD")}</h5>
						<h5>Address: {user.location.street.name} {user.location.postcode}, {user.location.city}, {user.location.state}</h5>
					</div>                       
				</div>
			}			
		</div>
			
	)		
  	
}
