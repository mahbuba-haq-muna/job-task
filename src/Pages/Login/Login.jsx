import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Home/Home.css"
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const Login = () => {
    const [success, setSuccess] = useState();
    const [loginError, setLoginError] = useState();


    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')

                // navigate
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }

    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setSuccess('');
        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login successfully')

                // navigate
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
                setLoginError(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen login-bg">
                <div className="card lg:w-1/2 mx-auto py-10 shadow-2xl bg-base-100 ">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>New here? <Link className="font-bold text-blue-700" to={"/register"}>Register Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        {
                            success && <p className="text-green-700 ">{success}</p>
                        }
                        {
                            loginError && <p className="text-red-500 ">{loginError}</p>
                        }
                        <div>
                            <Link><button onClick={handleGoogleSignIn} className="btn mt-6 w-full"> <FaGoogle className="text-xl mr-3 text-blue-500"></FaGoogle> Log in With Google</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;