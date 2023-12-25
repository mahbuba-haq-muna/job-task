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
        </div>
    );
};

export default Home;