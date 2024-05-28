import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Bubble from "./Bubble.tsx";
import "./css/BubbleUi.module.css";

interface Props{
	data: string[];
}

const BubbleUi=({data}:Props)=> {
	const options = {
		size: 180,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}

	const children = data.map((data, i) => {
		 return <Bubble className="child" key={i}/>
	});

	return (
		<BubbleUI options={options} className="myBubbleUI"> {children} </BubbleUI>)
};

export default BubbleUi;