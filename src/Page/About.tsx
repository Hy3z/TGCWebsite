import BubbleUi from "../Components/BubbleUi"
import BubbleIppt from "../data/BubbleIPPT"

const About = () => {
  return (
    <div>
    <BubbleUi data={BubbleIppt["data"]}/>
    </div>
  )
}

export default About;