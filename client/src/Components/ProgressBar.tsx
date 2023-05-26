import React, {useEffect, useState} from "react";

// this is scroll progress bar

export default function ProgressBar() {

	const [scroll, setScroll] = useState(0);

	useEffect(() => {

		let progressBarHandler = () => {
			
			const totalScroll = document.documentElement.scrollTop;
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const scroll = `${totalScroll / windowHeight}`;
			const numberscroll = Number(scroll)
			setScroll(numberscroll);
		}

		window.addEventListener("scroll", progressBarHandler);

		return () => window.removeEventListener("scroll", progressBarHandler);
	});

	const progressbarstyle = {
		transform: `scale(${scroll}, 1)`,
		opacity: `${scroll}`
	}

	return (
		<>
			<div id="progressBarContainer">
				<div id="progressBar" style={progressbarstyle}/>
			</div>
		</>
	);
}