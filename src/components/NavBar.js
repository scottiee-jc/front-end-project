import React from "react";

function NavBar() {

    return(
        <div id="navBar">
        <button className="buttonDesign">Home</button>
        <button className="buttonDesign">About</button>
        <button className="buttonDesign">Products</button>
        <button className="buttonDesign">Contact</button>
        <button className="basketAndLogIn">Log in <></>
        <img src="https://cdn-icons-png.flaticon.com/512/152/152533.png" height="15" width="15"/>
        </button>
        <button className="basketAndLogIn">Basket <></>
            <img src="http://cdn.onlinewebfonts.com/svg/img_230512.png" height="15" width="15"/>
        </button>
        </div>
    );
}

export default NavBar;