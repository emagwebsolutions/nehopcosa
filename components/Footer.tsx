import Image from 'next/image';
import styles from '@/styles/Footer.module.scss';
import { useSelector } from 'react-redux';
import { selectContactState } from '@/store/store';

const Footer = () => {
  const { address, email, mobile1, mobile2 } = useSelector(selectContactState);



  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <div>
            <h4>Our Partner</h4>
            <span className="dash"></span>
            <Image src="/donor.jpg" width="200" height="150" alt="" />
          </div>
        </div>
        <div>
          <div>
            <div>
              <h4>Address</h4>
              <span className="dash"></span>
              <p>{address}</p>
            </div>
            <div>
              <h4>Phone</h4>
              <span className="dash"></span>
              <p>{mobile1}</p>
              <p>{mobile2}</p>
            </div>
            <div>
              <h4>Email</h4>
              <span className="dash"></span>
              <p>{email}</p>
            </div>
          </div>

          <div>
            <a href="">
              <i className="fa fa-facebook fa-lg"></i>
              Facebook
            </a>
            <a href="">
              <i className="fa fa-twitter fa-lg"></i>
              Twitter
            </a>
            <a href="">
              <i className="fa fa-instagram fa-lg"></i>
              Instagram
            </a>
            <a href="">
              <i className="fa fa-youtube fa-lg"></i>
              Youtube
            </a>
          </div>
        </div>
      </div>

      <div className="container">&copy; 2023 NEHOPCOSA</div>
    </footer>
  );
};

export default Footer;
