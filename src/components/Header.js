import React from "react";
const Header = ({handleToggleDarkMode}) =>{
    return(
        <div className="Header">
            <h1>Header</h1>
            <button
             onClick={()=>
                handleToggleDarkMode( 
                    (previousDarkMode)=> !previousDarkMode
                    )
                } 
                    className="save">
                        ToggleMode
                    </button>
        </div>
    )
}
export default Header;
