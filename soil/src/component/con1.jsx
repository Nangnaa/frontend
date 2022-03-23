import React from "react";
import './layout.css';
import company from '../images/company.png';
import con1img1 from '../images/con1img1.png';
import con1img2 from '../images/con1img2.png';
import con1img3 from '../images/con1img3.png';
import con1img4 from '../images/con1img4.png';
function Con1(){
    return(
    <div className='con1' >
       <img className="company" src={company} alt="company" />
       <b>최고의 경쟁력과 창의성을 갖춘 친환경 에너지 · 화학 기업</b>
       <section className="con1section">
           <div className="con1-img1"><img src={con1img1} alt="con1img1" /></div>
           <div className="con1-img2"><img src={con1img2} alt="con1img2" /></div>
           <div className="con1-img3"><img src={con1img3} alt="con1img3" /></div>
           <div className="con1-img4"><img src={con1img4} alt="con1img4" /></div>
       </section>
    </div>
    )
   }
   export default Con1;