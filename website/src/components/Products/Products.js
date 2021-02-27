import React, {useState, useEffect} from "react";
import {connect, useDispatch}   from 'react-redux';
import Swal           from 'sweetalert2';
import axios          from 'axios';
import ClipLoader     from "react-spinners/ClockLoader"; 
import { addToCart } from "../Redux/action";
import './Products.css';

export default function Products(props) {

	const [productList, setProductList] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response =>{
                console.log("Product list = ",response.data); 
                setProductList(response.data);
                setAllProducts(response.data);
                setLoading(false)
            })
            .catch(error=>{
                Swal.fire("Some Error Occured while getting the product List",error.message,"error");
        }) 

        axios.get("https://fakestoreapi.com/products/categories")
            .then(response =>{
                console.log("Categories  list = ",response.data); 
                setCategories(response.data);
            })
            .catch(error=>{
                Swal.fire("Some Error Occured while getting the category List",error.message,"error");
        })    
    }, [])  

	const filterProducts = (event) =>{
		var category = event.target.value;
		console.log("Category", category);
		if(category === 'All'){
			setProductList(allProducts);
		}
		else{
			var products = allProducts.filter((elem, index, array)=>{
				return elem.category === category
			})
			setProductList(products);
		}
		
	}

	console.log("productList", productList);
	return (
		<div className="row">
			<h4 className="weighttitle ">Products</h4>     
			<hr/>
			<br/>
			<div className="row">
				<div className="col-lg-4">
					<select name="category" onChange={filterProducts} id="category" className="catSelect">
					<option value="All" >All</option>
					{   categories.length > 0 ?
						categories.map((category, index) => {
							return(
								<option value={category} key={index}>{category}</option>
							)
						})
						:
						null
					}							
					</select>
				</div>
			</div>
			<div className="row" >				
				{
				productList && productList.length > 0 ?
					productList.map((data,index)=>{
					return(
						<div className="col-lg-4" style={{marginTop:"20px"}} key={data.id}>
						    <div className="card col-lg-12 col-md-12 col-xs-12 col-sm-12 " style={{width: "18rem", paddingTop:'0px', margin:"0px",alignItems:"center" }}>
						    <img className="card-img-top" src={data.image} alt={data.title}  style={{height: "200px"}}/>
						    <div className="card-body">
						        <h6 className="card-title">{data.title}</h6>
						        <h6 className="card-category">{data.category}</h6>
						        <div className="priceTag"><i className="fa fa-inr" aria-hidden="true"></i>{data.price} </div>              
						        <button
						          className="btn btn-primary" onClick={() => dispatch(addToCart(data))}					          
						        >
						          Add to cart
						        </button>
						    </div>
							</div>
						</div>
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
			</div>		
		</div>			
	)	  	
}
