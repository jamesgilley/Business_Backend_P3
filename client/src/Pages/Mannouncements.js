import React from "react";
import Mnav from "../Component/mnav";
import Heading from "../Component/heading";
import AnnounceContainer from "../Component/AnnounceContainer";

const MAnnouncements = () => {
	return (
		<div class="pagetitle">
			<Heading />
			<Mnav />
			<h2>ANNOUCEMENTS</h2>
			Here you can post new annoucements/updates that employees can view
			<br></br>
			<AnnounceContainer />
		</div>
	);
};

export default MAnnouncements;
