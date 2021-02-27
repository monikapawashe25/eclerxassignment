import React, {useState, useEffect} from "react";
import Swal           from 'sweetalert2';
import { useHistory } from "react-router"; 
import axios          from 'axios';
import ClipLoader     from "react-spinners/ClockLoader"; 
import Moment         from 'moment';
import './Userlist.css';

export default function Userlist(props) {

	const [userList, setUserList] = useState([]);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	useEffect(() => {
        axios.get("https://randomuser.me/api/?results=60")
            .then(response =>{
                console.log("users list = ",response.data); 
                setUserList(response.data.results);
            })
            .catch(error=>{
                Swal.fire("Some Error Occured while getting the user List",error.message,"error");
        })	
    }, [])  


	
	return (
		<div className="row ">
			<div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 titleaddcontact NOpadding ">
				<div className="box-header " >
				    <div className="col-lg-6 ">
				        <h4 className="weighttitle ">User List</h4>
				    </div>                                  
				    
				</div>
				<hr/>
			</div>                         
			<br/>
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 table-margin " >
				<table id="table-to-xls" className=" adminLmsTable margin-top-24 table table-bordered table-striped table-hover striped  bordered ">
				<thead>
					<tr className="tableHeader"> 							
					<th> Sr. No.</th>                          
					<th> First Name </th>
					<th> Last Name </th>
					<th> Email </th>
					<th> DOB </th>
					<th> Address </th>
					<th> Actions </th>					
				</tr>
				</thead>
				<tbody className="tablebody text-center">
				{
				userList && userList.length > 0 ?
					userList.map((data,index)=>{
					return(
						<tr key={index}>
							<td> {index+1} </td>
							<td className="textAlignLeft wordBr"> 	{data.name.first}</td>
							<td className="textAlignLeft wordBr">   {data.name.last}</td>
							<td className="textAlignLeft wordBr">   {data.email}</td>
							<td className="textAlignLeft wordBr">   {Moment(data.dob.date).format("YYYY-MM-DD")}</td>
							<td className="textAlignLeft wordBr">   {data.location.street.name},  {data.location.city}</td>
							<td>
								<div>
									<a href={"/userdetails"}><i className="fa fa-eye delcolor"></i></a>
									
								</div>		
							</td>					
						</tr>	
					);
				})
				:
				loading === false ?
					<tr>
						<td colspan="12" className="textAlignLeft">
							<div className="col-lg-10 col-md-10 col-xs-12 col-sm-12 noDataCard">
							Sorry ! No Data Available
							</div>
						</td>
					</tr>			
				:   
					<div  className="spinnerCenter">
						<ClipLoader
						size={80}
						color={"#3c8dbc"}
						loading={loading}
						/>
					</div> 
				}			
				</tbody>

				</table>                               
			</div>		
		</div>
			
	)		
  	
}
