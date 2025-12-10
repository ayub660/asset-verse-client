import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-md px-6">
            <div className="navbar-start">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                    AssetVerse
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex gap-6">
                <Link to="/" className="hover:text-indigo-600">Home</Link>
                <Link to="/register-employee" className="hover:text-indigo-600">Join as Employee</Link>
                <Link to="/register-hr" className="hover:text-indigo-600">Join as HR</Link>
            </div>

            <div className="navbar-end">
                <Link to="/login" className="btn btn-primary btn-sm">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
