import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

   

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
            Navigate(location?.state ? location.state : "/")
    }

    const navLinks = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
        <li><Link to={"/about"}>About Us</Link></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-red-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Task<span className="text-teal-500">Burst</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">


                    <label tabIndex={0} className="btn btn-circle avatar mr-3 border ">

                        {
                            user ? <img src={user.photoURL
                            } alt="" className="rounded-full" />
                                :
                                <div>
                                    <FaUser></FaUser>
                                </div>

                        }

                    </label>

                    {
                        user ? user.displayName
                            :
                            <p></p>

                    }

                    {
                        user ? <button onClick={handleLogOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;