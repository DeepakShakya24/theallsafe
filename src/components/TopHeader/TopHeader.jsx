import React from 'react';
import './TopHeader.css';
import Truck from './res/Free Setup Dilevery Sale Me Lo Khush Raho.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faRecycle, faCertificate, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

function TopHeader(){
    return(
        <div>
            <div className='TopHeader'>
                <p><img alt = "logo" src = { Truck } style = {{ width: 30 }}/>  Free Setup Between 6-12 Hours* | Sale Me Lo Khush Raho</p>
            </div>
            <div className='NavigationItems'>
                <span>
                    <ul>
                        <li> <a href = "https://tas/#"> <FontAwesomeIcon className = "fa" icon = { faTruck }/> Free Setup, Delivery*</a> </li>
                        <li> <a href = "https://tas/##"> <FontAwesomeIcon className = "fa" icon = { faRecycle }/> Free Branding Setup on Rental*</a> </li>
                        <li> <a href = "https://tas/##"> <FontAwesomeIcon className = "fa" icon = { faCertificate }/> Best Price Guarantee</a> </li>
                        <li> <a href = "https://tas/##"> <FontAwesomeIcon className = "fa" icon = { faPhoneSquare }/> 12/7 Business Support </a></li>
                    </ul>
                </span>
                <span className = "rightNav" >
                    <ul>
                        <li><a href = "https://tas/#"> About Us </a></li>
                        <li><a href = "https://tas/##"> <FontAwesomeIcon className = "fa" icon = { faPhoneSquare } /> Contact</a></li>
                    </ul>
                </span>
            </div>
        </div>
    );
}

export default TopHeader;