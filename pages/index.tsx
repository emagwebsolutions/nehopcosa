import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.slider}>
          <Slide />
        </div>
        <div className={styles.profile}>
          <div>
            <Image src="/founder.jpg" alt="" width="196" height="200" />
            <h4>Mr. Atta Brenya</h4>
            <h3>(Founder)</h3>
            <div className={styles.social}>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
