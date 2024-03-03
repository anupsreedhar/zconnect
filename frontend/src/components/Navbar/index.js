// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/candidate" >
						Candidate
					</NavLink>
					<NavLink to="/employee" activeStyle>
						Employee
					</NavLink>
					<NavLink to="/annual" activeStyle>
						Annual Report
					</NavLink>
					<NavLink to="/team" activeStyle>
						Teams
					</NavLink>
					<NavLink to="/payroll" activeStyle>
						Payroll
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
