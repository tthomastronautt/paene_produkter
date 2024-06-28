import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navBar">
            <div className="burgerMenu" onClick={toggleMenu}>
                {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </div>
            <ul className={isOpen ? "navLinks open" : "navLinks"}>
                <li>
                    <NavLink className="navItem" to="/" onClick={toggleMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navItem" to="/products" onClick={toggleMenu}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navItem" to="/about" onClick={toggleMenu}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navItem" to="/contact" onClick={toggleMenu}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation