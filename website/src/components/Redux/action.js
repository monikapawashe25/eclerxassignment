import {
    SET_ITEMS,
    SET_LOADING
} from './types';


export const addToCart = (product) => (dispatch, getState) => {
  
    var allItems = getState().items;
    var cartUpdated = [];
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    var presentInCart = allItems.filter((item, index)=>{
      if(item.id === product.id){
        console.log("in cart");
        return item;     
      }      
    })

    if(presentInCart.length <= 0){  
      product.count = 1  
      product.updatedPrice = product.price;
      cartUpdated.push(...allItems, product );      
    }
    else{      
        var priceupdated = allItems.filter((item, index)=>{
          if(item.id === product.id){
            item.updatedPrice += product.price;     
            item.count = item.count + 1       
          }  
          return item;         
        })   
        cartUpdated  = [...priceupdated];
    }

    dispatch({
      type: SET_ITEMS,
      payload: cartUpdated ,
    }); 
    dispatch({
      type: SET_LOADING,
      payload: false,
    });     
};

export const removeFromCart = (product) => (dispatch, getState) => {
  
    var allItems = getState().items;
    var cartUpdated = [];
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

         
      var removeCart = allItems.filter((item, index)=>{
        if(item.id === product.id){
          item.updatedPrice -= product.price;     
          item.count = item.count - 1     
          if(item.count !== 0){
            return item;      
          }            
        }
        else{
          return item;  
        }  
           
      }) 
    

    dispatch({
      type: SET_ITEMS,
      payload: removeCart ,
    }); 
    dispatch({
      type: SET_LOADING,
      payload: false,
    });         
  
};

