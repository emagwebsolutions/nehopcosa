import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import {slides} from '@/typings'
import { useSelector } from 'react-redux';
import { selectSliderState } from '@/store/features/sliderSlice';


const Slide = () => {
  const fadeImages: slides = useSelector(selectSliderState);

  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <Image
                priority
                width="800"
                height="550"
                alt=""
                src={fadeImage.url}
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slide;
