import React, { useState ,useRef, useEffect } from 'react';
import './layout.css';
import Dots from "./dots";
import Con1 from './con1';
import Con2 from './con2';
import Con3 from './con3';
// import mainimg1 from '../images/mainimg1.png';
const DIVIDER_HEIGHT = 5;
function Main() {
    const mainIn = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
          e.preventDefault();
          const { deltaY } = e;
          const { scrollTop } = mainIn.current; // 스크롤 위쪽 끝부분 위치
          const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
    
          if (deltaY > 0) {
            // 스크롤 내릴 때
            if (scrollTop >= 0 && scrollTop < pageHeight) {
              //현재 1페이지
              console.log("현재 1페이지, down");
              mainIn.current.scrollTo({
                top: pageHeight + DIVIDER_HEIGHT,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(2);
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
              //현재 2페이지
              console.log("현재 2페이지, down");
              mainIn.current.scrollTo({
                top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(3);
            } else {
              // 현재 3페이지
              console.log("현재 3페이지, down");
              mainIn.current.scrollTo({
                top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(3);
            }
          } else {
            // 스크롤 올릴 때
            if (scrollTop >= 0 && scrollTop < pageHeight) {
              //현재 1페이지
              console.log("현재 1페이지, up");
              mainIn.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(1);
            } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
              //현재 2페이지
              console.log("현재 2페이지, up");
              mainIn.current.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(1);
            } else {
              // 현재 3페이지
              console.log("현재 3페이지, up");
              mainIn.current.scrollTo({
                top: pageHeight + DIVIDER_HEIGHT,
                left: 0,
                behavior: "smooth",
              });
              setScrollIndex(2);
            }
          }
        };
        const mainInCurrent = mainIn.current;
        mainInCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            mainInCurrent.removeEventListener("wheel", wheelHandler);
        };
      }, []);
    return (
        <div ref={mainIn} className='main'>
            <div className='main-in'>
            <Dots scrollIndex={scrollIndex} />
            {/* <img src={mainimg1} alt="mainimg1" /> */}
            <div className="inner bg-green"><Con1/></div>
            {/* <div className="divider"></div> */}
            <div className="inner bg-red"><Con2/></div>
            <div className="divider"></div>
            <div className="inner bg-blue"><Con3/></div>
            </div>
        </div>
    )
}



export default Main;
