import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div>
                    <div className="w-64 min-h-screen bg-red-100 p-4">
                        <div className="text-center mb-10">
                            {/* <img src={logo} className='w-20' alt="" /> */}
                            <h2 className="text-3xl font-bold uppercase">Task<span className="text-teal-500">Burst</span></h2>
                        </div>
                        <ul className="menu text-lg">
                            <li><Link to="/">
                                Home</Link>
                            </li>
                            <li><Link to="/dashboard/users">
                                Manage Users </Link>
                            </li>
                            <li><Link to="/dashboard/coupon">
                                Manage Coupons </Link>
                            </li>
                        </ul>
                    </div>
                    {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;