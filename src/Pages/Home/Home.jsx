import { Link } from 'react-router-dom';
import img from "../../assets/banner.jpg"
import './Home.css'

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

            {/* footer */}
            <footer className="footer p-10 bg-base-300 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Home;