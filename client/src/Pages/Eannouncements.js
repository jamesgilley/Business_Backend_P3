import React from "react";
import Enav from "../Component/enav";
import Heading from "../Component/heading";
import EannounceContainer from "../Component/EannounceContainer";

const EAnnouncements = () => {
	return (
		<div>
			<Heading />
			<Enav />
			<h2>ANNOUNCEMENTS</h2>
			Here you will see current messages and updates from the executive team
			<br></br>
			<EannounceContainer />
		</div>
	);
};

export default EAnnouncements;
