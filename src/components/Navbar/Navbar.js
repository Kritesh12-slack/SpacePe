import { useState } from "react"
import { Link , useLocation } from "react-router-dom";

export default function Navbar(){
    const currentPagePath = useLocation()
    const [subNavVisibility,setSubNavVisibility] = useState(false)
    // const [currentNavItemVisibilty,setCurrentNavItemVisibility] = useState()
    const show = () =>{
        setSubNavVisibility((prev)=>(!prev));
    }

    const subNAvItems = [
        // <Link to="/contact-us">Contact Us</Link>,
        // <Link to="/about-us">About Us</Link>,
        {
            to:"/",
            linkText : "Home"
        },
        {
            to:"/Terms-and-Conditions",
            linkText : "Terms & Conditions"
        },
        {
            to:"/cancellation-and-refund",
            linkText : "Cancellation And Refund"
        },
        {
            to:"/privacy-policy",
            linkText : "Privacy Policy"
        },
        {
            to:"/shipping-and-delivery",
            linkText : "Shipping And Delivery"
        },
        {
            to:"/contact-us",
            linkText : "Contact Us"
        },
        {
            to:"/about-us",
            linkText : "About Us"
        },
    ]
    return (
        <div className="navbar">
            <div className="navImg">
                <img src="imageSrc" alt="SpacePe"/>
            </div>
            <div className="navCart">
            <img src="imageSrc" alt="Cart"/>
            </div>
            <div className="navPages" onClick={show}>
            <span>Pages</span><img src="imageSrc" alt="Cart"/>
            {subNavVisibility &&
                <div className="subNav">
                    {subNAvItems.filter((i)=> i.to !== currentPagePath.pathname).map((i)=>(
                        <Link to={i.to}>{i.linkText}</Link>
                       
                    ))}
                </div>}
            </div>
        </div>
    )
}