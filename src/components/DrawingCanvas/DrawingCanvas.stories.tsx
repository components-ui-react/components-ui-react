import DrawingCanvas from "./";

export default {
	title: "Unusual group/DrawingCanvas"
};

export const primary = () => {
	return (
		<DrawingCanvas
			width='1000px'
			height='1000px'
			backgroundColor='black'
			lineColor='white'
			lineDash={[5, 15]}
		/>
	);
};
