const Header= (props)=>{
    return(
    <>
    <h1 style={{marginLeft:'200px'}}>{props.title}</h1>
    </>
    );
}

export default Header;
/*
 import React from "react";
class Header extends React.Component{
    render(){
        return(
            <h1>Movies</h1>
        );
    }
}
export default Header;*/