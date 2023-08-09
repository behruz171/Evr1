import React from 'react';
import img2 from '../img/img2.png'
const Jamoa = () => {
    return (
        <div>
            <div class="content_j">
          <h2 class="content_h2">Bizning jamoa</h2>
          <div class="jamoa">
            <div class="content_img">
              <img src={img2} alt="" />
              <h2>Ricky ponting <br /> Istambul</h2>
            </div>
            <div class="content_img">
              <img src={img2} alt="" />
              <h2>Cathe heavan <br /> London</h2>
            </div>
            <div class="content_img">
              <img src={img2} alt="" />
              <h2>Mone morkel<br /> Toronto</h2>
            </div>
            <div class="content_img">
              <img src={img2} alt="" />
              <h2>Maria sarpova <br /> Calefonia</h2>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Jamoa;
