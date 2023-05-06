import React from "react";
import treebackground from "../Assets/beautiful-view-trees-rain-forest-captured-foggy-weather.jpg"

export default function ParallaxScroll() {

	return (
		<>
			<div 
			style={{
				backgroundImage:`url(${treebackground})`,
				height:"110vh",
				backgroundSize:"cover",
				backgroundRepeat:"no-repeat",
				backgroundAttachment:"fixed"
			
			}}
			/>
		</>
	);
}