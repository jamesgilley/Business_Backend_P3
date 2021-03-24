import React, { useContext, useEffect } from "react";
import Mnav from "./../Component/mnav";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import pic5 from "../Img/mn.png";


function MMain() {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push("/");
		
	}, [userData.user, history]);

		return (
			<div>
				<Mnav />
				<h2>
					
					{" "}
					Hello{" "}
					<span className="" id="specialtxt">
						{" "}
						{userData.user ? userData.user.displayName : null}{" "}
					</span>{" "}
				</h2>
				<p>
                 Welcome to your management portal. Review the links above to select a task
                 <br></br>
					{" "}
					<img src={pic5} alt="pic"></img>
					<p></p>
					
				</p>
				
		
			</div>
		);
	}

export default MMain;

// This is the main page that a Manager employee will see after logging in
