import React from "react";

const Menu = ()=>{
    return(
        <ul className="hidden sm:block space-x-5 text-sm mt-4">
            <a className="text-GrayishBlue hover:font-semibold  hover:text-VeryDarkBlue hover:opacity-100" href="a">Collection</a>
            <a className="text-GrayishBlue hover:font-semibold  hover:text-VeryDarkBlue hover:opacity-100" href="a">Men</a>
            <a className="text-GrayishBlue hover:font-semibold  hover:text-VeryDarkBlue hover:opacity-100" href="a">Women</a>
            <a className="text-GrayishBlue hover:font-semibold  hover:text-VeryDarkBlue hover:opacity-100" href="a">About</a>
            <a className="text-GrayishBlue hover:font-semibold  hover:text-VeryDarkBlue hover:opacity-100" href="a">Contact</a>
        </ul>
    )
}
export default Menu;