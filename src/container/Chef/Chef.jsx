import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className = "app__bg app__wrapper section__padding">
    <div className = "app__wrapper_img app__wrapper_img-reverse">
      <img src= { images.chef } alt="chef_image" />
      </div>
      <div className = "app__wrapper_info">
        <SubHeading title="Chef's Word"/>
        <h1 className ="headtext__cormorant">What We Believe In</h1>

        <div className = "app__chef-content">
          <div className = "app__chef-content_quote">
            <img src= { images.quote } alt="quote_image" />
            <p className="p__opensans">We believe in providing quality food to our customers. Customer satisfaction is utmost priority in Kiwi Restro.</p> 
         </div>
         <p className = "p__opensans"> we believe in cruelty free and sattvic food that is what we provide on your plates.</p>
        </div>

        <div className = "app__chef-sign">
          <p>Kiwi Gupta</p>
          <p className = "p__opensans">Chef & Founder</p>
          <img src= { images.sign } alt="sign_image" />
        </div>
      </div>
    </div>
);

export default Chef;
