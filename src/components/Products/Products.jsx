import "./Products.scss";
import Product from "./Product/Product";
const Products = ({innerPage, headingTex}) => {
    return (
    <div className="product-container">
        {!innerPage &&<div className="sec-heading">{ headingTex}</div>}    
            < div className=" products"> 
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                
                
          
        </div> 
    </div>
    );
};

export default Products;
