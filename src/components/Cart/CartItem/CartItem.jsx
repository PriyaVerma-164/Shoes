import{MdClose} from "react-icons/md";
import prod from "../../../assets/products/leather-sneaker- prod-1.jpg"
import "./CartItem.scss";
const CartItem = () => {
    return(
         <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt=""/>
                    </div>  
                    <div className="prod-details">
                        <span className="name"> Product name</span>
                        <MdClose className="close-btn"/>
                        <div className="quantity-buttons">
                                  <span>-</span>
                                  <span>6</span>
                                  <span>+</span>
                        </div> 
                        <div className="text">
                                  <span>4</span>
                                  <span>x</span>
                                  <span className="highlight">&#8377;789</span>
                       </div> 
                </div>      
            </div>    
        </div>
    );
};

export default CartItem;
