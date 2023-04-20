import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { arr } from '../typings';

const Slide = ({ arr }: arr) => {
  const fadeImages = Object.values(arr).map((v) => ({
    url: `${v}`,
  }));

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
