// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import Candidate from "./pages/candidate";
import Payroll from "./pages/payroll";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Employee from "./pages/employee";
import SignUp from "./pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/candidate" element={<Candidate />} />
				<Route
					path="/payroll"
					element={<Payroll />}
				/>
				<Route
					path="/annual"
					element={<AnnualReport />}
				/>
				<Route path="/team" element={<Teams />} />
				<Route path="/employee" element={<Employee />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;

