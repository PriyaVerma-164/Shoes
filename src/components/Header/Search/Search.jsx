import{MdClose} from "react-icons/md";

import prod from "../../../assets/products/leather-sneaker- prod-1.jpg"; 
const Search = (setShowSearch) => {
      return(
         <div className="search-modal">
              <div className="form-field">
                 <input
                   type="text"
                   autoFocus
                 placeholder="Serach for products"
                 />
            
                 <MdClose onClick={() => setShowSearch(false)}/>
             </div>
          <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                     <div className="img-container">
                          <img src={prod} alt=""/>
                     </div>
                     <div className="prod-details">
                          <span className="name">Product name</span>
                          <span className="desc">Product desc</span>

                     </div>
                </div>
            </div>
          </div>
      </div>
      );
};

export default Search;
