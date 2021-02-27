import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header   	from './Header/Header.js'; 
import Leftsidebar  from './Leftsidebar/Leftsidebar.js'; 
import Login        from './Login/Login.js'; 
import Userlist     from './Userlist/Userlist.js'; 
import User         from './User/User.js'; 

export default function Layout() {

	var [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
        var company_Id = localStorage.getItem("company_Id");
		var user_id = localStorage.getItem("user_ID");
		const token = localStorage.getItem("token");
		console.log("userid", user_id, token);
		if(user_id === 'admin@xyz.com'){        
		  if (token !== null && token !== "undefined") {
		      setLoggedIn(true);
		  } 
		}		
    }, [])  

	if(loggedIn){
		return (
			<Router>
			  <div className="coverBox">		
			  	<Header /> 
			  	<div className="row">
				  	<div className="col-lg-2 sidebarBox">
				  		<Leftsidebar />
				  	</div>
				  	<div className="col-lg-9 mainContentBox">   
					    <Switch>
							<Route path="/"            component={Userlist}   exact  />
                            <Route path="/dashboard"   component={Userlist}   exact  />
                            <Route path="/users"       component={Userlist}   exact  />
                            <Route path="/userdetails"    component={User}   exact  />
					    </Switch>
				    </div>
				</div>    
			  </div>
			</Router>
		);
	}
	else{
		return (
			<Router>
				  <div className="coverBox">		    
				    <Switch>
				    	<Route path="/" exact strict component={Login} />
                        <Route path="/login" exact strict component={Login} />    					
				    </Switch>
				  </div>
			</Router>
		)	
	}
  	
}

