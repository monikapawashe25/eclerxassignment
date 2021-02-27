import React from "react";


export default function Leftsidebar(props) {

	
	return (
		<aside className="main-sidebar">
	        <section className="sidebar">
	          <ul className="sidebar-menu" data-widget="tree">
	            <li className="singleTreeview" >
	                <a href="/dashboard"  title="Dashboard" className="menulinks" >
	                  <i className="fa fa-dashboard" aria-hidden="true"></i>  
	                  <span className="sidebarMenuTitle">Dashboard</span>                  
	                </a>
	            </li>
	           <li className="singleTreeview">
	                <a href="/users"  title="Courses" className="menulinks">
	                  <i className="fa fa-money" aria-hidden="true"></i>
	                  <span className="sidebarMenuTitle">Users</span>                  
	                </a>
	            </li>
	            
	          </ul>
	        </section>
      </aside>
	)		
  	
}
