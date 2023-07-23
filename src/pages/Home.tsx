
import Title from "../components/Title";
import BackGroundImage from "../components/BackGround";
import Footer from "../components/Footer";
import { Typewriter } from '../components/Typewriter';

export function Home() {

    const text = 'T0he TANPOPO PROJECT is one of JAXAs space experiments conducted in the Japanese Experiment Module Kibo on the International Space Station.'
    return(
        <div>
            <Title/>
            <h2>
                {Typewriter(text)};
            </h2>
            <BackGroundImage/>
            <Footer/>
        </div>
    );
};