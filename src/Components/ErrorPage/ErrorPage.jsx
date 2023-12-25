import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen ">
            <h1 className="text-3xl text-red-500 font-bold text-center mt-28">404 page not found</h1>
           <div className="w-fit mx-auto mt-20"> <Link to={"/"}><button className="btn btn-primary text-center">Back to home</button></Link></div>
        </div>
    );
};

export default ErrorPage;