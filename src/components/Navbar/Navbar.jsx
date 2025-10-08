import logo from "../../assets/logo.png";
import gitHubLogo from "../../assets/github.svg";
import { Link } from "react-router";
import { NavLink } from "react-router";
import './navbar.css';

const Navbar = () => {
	return (
		<div className="bg-base-100 shadow-sm mb-5 lg:mb-20">
			<div className="navbar container mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{" "}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{" "}
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/apps">Apps</NavLink>
							</li>
							<li>
								<NavLink to="/install">Installation</NavLink>
							</li>
						</ul>
					</div>
					<Link className="btn btn-ghost text-xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
						<img className="w-[30px]" src={logo} alt="logo" /> APPIFY.IO
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<NavLink className="font-medium text-[#000000E5]" to="/">Home</NavLink>
						</li>
						<li>
							<NavLink className="font-medium text-[#000000E5]" to="/apps">Apps</NavLink>
						</li>
						<li>
							<NavLink className="font-medium text-[#000000E5]" to="/install">Installation</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<NavLink
						to="https://github.com/Mobassirul-Islam"
						className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
					>
						<img src={gitHubLogo} alt="" /> Contribute
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
