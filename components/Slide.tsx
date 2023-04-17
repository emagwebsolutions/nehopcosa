import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const fadeImages = [
  {
    url: '/header1.jpg',
  },
  {
    url: '/header2.jpg',
  },
  {
    url: '/header3.jpg',
  },
];

const Slide = () => {
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
