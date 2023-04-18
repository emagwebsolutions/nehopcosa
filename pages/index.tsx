import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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

      <section className={styles.whoweare}>
        <div className="container">
          <div>
            <Image src="/whoweare.jpg" width="560" height="400" alt="" />
          </div>
          <div>
            <h1>Who we are?</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odio
              asperiores assumenda officia commodi itaque beatae modi!
              Voluptatum, beatae doloribus? Quibusdam voluptatem illo fuga sit,
              placeat atque suscipit veritatis iusto.
            </p>

            <Link href="" className="button">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.help}>
        <div>
          <div>

            <h2>They Need Your Help</h2>
            <p>Support a cause you care about</p>

            <Link href="" className="button-outline">
              Learn More
            </Link>
     
          </div>
        </div>

        <div>
          <div>JOIN US TO HELP THE POOR AND NEEDY IN SOCIETY</div>
        </div>
      </section>



<section className={styles.blog}>

  <h4>Our Blog</h4>
  <h2>Recent From Blog</h2>

  <div className="container">


  <div>
      <Image width="230" height="170" alt="" src="/blog.jpg" />
      <div>
      <h3>Sponsor a child</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae delectus veniam, unde eos tenetur enim beatae, odio voluptatem 
      </p>

      <Link href="" className="button">Learn More</Link>
      </div>
    </div>



    <div>
      <Image width="230" height="170" alt="" src="/blog.jpg" />
      <div>
      <h3>Sponsor a child</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae delectus veniam, unde eos tenetur enim beatae, odio voluptatem 
      </p>

      <Link href="" className="button">Learn More</Link>
      </div>
    </div>



    <div>
      <Image width="230" height="170" alt="" src="/blog.jpg" />
      <div>
      <h3>Sponsor a child</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae delectus veniam, unde eos tenetur enim beatae, odio voluptatem 
      </p>

      <Link href="" className="button">Learn More</Link>
      </div>
    </div>








    <div>
      <Image width="230" height="170" alt="" src="/blog.jpg" />
      <div>
      <h3>Sponsor a child</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quae delectus veniam, unde eos tenetur enim beatae, odio voluptatem 
      </p>

      <Link href="" className="button">Learn More</Link>
      </div>
    </div>









  </div>


</section>



    </>
  );
}
