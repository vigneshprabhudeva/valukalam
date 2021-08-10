import React from "react";
import { Carousel } from "react-responsive-carousel";
import joel from './joel.jpeg'

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={joel} style={{size:20}}/>
      <p className="legend">joel<br/>removes cloth on his 4th peg</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
  
  
  
  </Carousel>
);
