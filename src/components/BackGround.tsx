import imgSample1 from "./img4.png";
import './FullScrean.css'


const BackGroundImage = () => {
  return (
    <div>
        <div className='full-screen-image'>
            <img src={imgSample1}/>
        </div>
        
    </div>
  );
};

export default BackGroundImage;