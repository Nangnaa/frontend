import React from "react";

const style={
    border: '1px solid red',  
}


function Wrapper({children}){//컴포넌트이름 첫자는 무조건 대문자
 return(
 <div style={style}>{children}</div>
 )
}
export default Wrapper;