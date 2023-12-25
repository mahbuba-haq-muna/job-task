import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";


const Register = () => {
    const [success, setSuccess] = useState();
    const [registerError, setRegisterError] = useState();

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        const profession = form.get('profession');
        console.log(email, password, name, photo, profession);

        

        setSuccess('');
        setRegisterError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Registered successfully')



            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen login-bg">
                <div className="card lg:w-1/2 mx-auto py-10 mt-10 shadow-2xl bg-base-100 ">
                    <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Profession</span>
                            </label>
                            <select
                                type="text"
                                name="profession"
                                className="input input-bordered" required
                            >
                                <option value="">Select your profession</option>
                                <option value="Developer">Developer</option>
                                <option value="Corporate Officer">Corporate Officer</option>
                                <option value="Banker">Banker</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account? <Link className="font-bold text-blue-700" to={"/login"}>Login Now</Link></p>
                            </label>
                        </div>
                        {
                            success && <p className="text-green-700 ">{success}</p>
                        }
                        {
                            registerError && <p className="text-red-500 ">{registerError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-400">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;