import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return(
        <footer className="footer">
           <div className="footer-content">
              <div className="col">
                 <div className="title"> About </div>
                   <div className="text">
                   Lorem Ipsum is simply dummy text of
                   the printing and typesetting industry.  
                   Lorem Ipsum has been the industry's 
                   standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                   it to make a type specimen book. 
                </div>
            </div>
            <div className="col">
                <div className="title">Contact </div> 
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                      370  Karuna Complex Sampige Road Malleshwaram, Bangalore,
                      Mumbai,560003
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                    Phone :0796 3456 0987
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                     Email:vermapriya2714@gmail.com
                    </div>
                </div>
                </div>
            <div className="col">
                <div className="title"> Categories</div>
                <span className="text">Leather sneakers</span>
                <span className="text">Hiking sneakers</span>
                <span className="text">Authentic sneakers</span>
                <span className="text">Canvas Sneakers</span>
                <span className="text">Basketball Sneakers</span>
                <span className="text">Designer Sneakers</span>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Return</span>
                <span className="text">Terms & Condition</span>
                <span className="text">Contact US</span>
                </div>
         </div>
         <div className=" bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Street Sneakers 2023 Created BY PV DEV. Premium E-Commerce
                    Solutions.
                </div>
                <img src={Payment}/>
            </div>
         </div>
        </footer>
    );
};

export default Footer;
