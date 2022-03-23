import React from "react";
import Menu from "./menu";
import "./layout.css";

function Header_in(){//컴포넌트이름 첫자는 무조건 대문자
 return(
 <div className="header_in">
   <div className="logo"></div>
   <Menu/>
 </div>
 )
}
export default Header_in;