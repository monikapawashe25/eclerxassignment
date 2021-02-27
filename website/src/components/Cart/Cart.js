import React, {useState} from "react";
import {connect, useDispatch}   from 'react-redux';
import ClipLoader        from "react-spinners/ClockLoader"; 
import { removeFromCart } from "../Redux/action";
import './Cart.css';


function Cart(props) {

	const dispatch = useDispatch();
	
	return (
		
		<div className="row cartBox" >						
			{
			props.items && props.items.length > 0 ?
				<div className="cartContent">
					<h5 style={{paddingLeft: '10px'}}>Cart</h5>
					{
						props.items.map((item,index)=>{
							return(
								<div className="col-lg-12" style={{marginTop:"20px",marginBottom:"20px"}} key={index}>
								    <div className="row cardData" >
									    <div className="card-body col-lg-11">
									        <h6 className="card-title">{item.title}</h6>
									        <div className="priceTag">{item.count} X {(item.price).toFixed(2)} </div>  
									        <div><i className="fa fa-inr" aria-hidden="true"></i>{(item.updatedPrice).toFixed(2)} </div>            
									        			                	
									    </div>
									    <div className="col-lg-1" style={{paddingRight: '0px'}}>
										    <button
							                    style={{ float: "right" }}
							                    className="btn btn-warning btn-xs"
							                    onClick={(e) =>
							                      dispatch(removeFromCart(item))
							                    }
							                >
							                    X
							                </button>			                
						                </div>
									</div>
								</div>
							);
						})
					}	
				</div>
			:
			props.loading === false ?
				<div>
					<i className="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp;
					Cart is empty!
				</div>
								
			:   
				<div  className="spinnerCenter">
					<ClipLoader
					size={80}
					color={"#3c8dbc"}
					loading={props.loading}
					/>
				</div> 
			}	                      
		</div>	
					
	)		
  	
}

const mapStateToProps = (state)=>{
	// console.log("state", state);
	return {
		items		 : state.items,
		loading      : state.loading
	}
  
};
export default connect(mapStateToProps,{})(Cart);