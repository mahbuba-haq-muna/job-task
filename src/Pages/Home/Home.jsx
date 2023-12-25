import { Link } from 'react-router-dom';
import img from "../../assets/banner.jpg"
import './Home.css'
import { FaPencilAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className=" rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={"/login"}><button className="btn btn-primary">Let’s Explore</button></Link>
                    </div>
                </div>
            </div>
            {/* service */}
            <div>
                <h1 className="text-3xl font-bold py-10 text-center">Our Services</h1>
                <div className='lg:flex gap-10 px-20 pb-20'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-center text-2xl">For Developers</h2>
                            <p className='text-blue-600 font-bold'>Code Faster, Collaborate Better with TaskBurst</p>
                            <p>TaskBurst streamlines your coding workflow. Customize task boards, integrate version control, and collaborate in real-time. Elevate your development game with TaskBurst.
                            </p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-center text-2xl">For Corporate Professionals</h2>
                            <p className='text-blue-600 font-bold'>Boost Corporate Excellence with TaskBurst</p>
                            <p>Stay organized and succeed in the corporate world. TaskBurst offers powerful project management, team collaboration, and tracking features. Your go-to solution for corporate efficiency.
                            </p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-center text-2xl">For Bankers</h2>
                            <p className='text-blue-600 font-bold'>Precision in Finance with TaskBurst</p>
                            <p>TaskBurst is crafted for financial precision. Manage critical deadlines, coordinate reports, and ensure secure collaboration. Experience a new level of financial efficiency with TaskBurst.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;