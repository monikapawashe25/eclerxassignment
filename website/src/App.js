import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from "react-redux";
import store        from "./store";
import Products     from './components/Products/Products.js'
import Header       from './components/Header/Header.js'
import Cart         from './components/Cart/Cart.js'

function App() {
  return (
    <Provider store={store}>
      <div className="row main">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Products />
            </div>
            <div className="col-lg-3">
              <Cart />
            </div>
          </div>
        </div>
      </div>  
    </Provider>  
  );
}

export default App;
