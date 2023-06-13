export default function ContentText(infotext:Array<string|object>) {

	return (
		infotext.map((value:any) => 
			<>
				<p>{value}<br/></p>
			</>
		)

	);
}