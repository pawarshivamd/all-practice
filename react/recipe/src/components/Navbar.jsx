import { NavLink } from "react-router";

const Navbar = () => {
    const navStyle = ({ isActive }) =>
        `px-4 py-2 rounded-full transition-all duration-300 font-medium ${isActive
            ? "bg-red-500 text-white shadow-lg shadow-red-200" // Active style
            : "text-gray-600 hover:bg-gray-100 hover:text-black" // Normal style
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto py-4">
                <ul className="flex justify-center items-center gap-2 md:gap-8">
                    <li>
                        <NavLink to="/" className={navStyle}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navStyle}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipes" className={navStyle}>Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" className={navStyle}>Create</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fav" className={navStyle}>
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;