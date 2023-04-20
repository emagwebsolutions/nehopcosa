import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { client, builder } from '@/client/client';

export default function Home({ data }: any) {
  //SLIDER
  const slider = Object.values(data)
    .filter((v: any) => {
      return v._type === 'slider';
    })
    .map((v: any) => builder(v.mainImage));

  //PROFILE
  const profile = Object.values(data)
    .filter((v: any) => {
      return v._type === 'profile';
    })
    .map((v: any) => ({
      img: builder(v.mainImage),
      title: v.title,
    }))[0];

  const { img, title } = profile;

  //WHO WE ARE
  const whoweare = Object.values(data)
    .filter((v: any) => {
      return v.slug?.current === 'who-we-are';
    })
    .map((v: any) => ({
      img: builder(v.mainImage),
      title: v.title,
      text: v.excerpt,
    }))[0];

  const { text, img: whoweareImg, title: whowearetitle } = whoweare;

  //CONTACTS
  const contacts = Object.values(data)
    .filter((v: any) => {
      return v._type === 'contact';
    })
    .map((v: any) => ({
      address: v.address,
      email: v.email,
      location: v.location,
      mobile1: v.mobile1,
      mobile2: v.mobile2,
      mobile3: v.mobile3,
      mobile4: v.mobile4,
    }))[0];



  //WHO WE ARE
  const posts = Object.values(data)
    .filter((v: any) => {
      return v._type === 'post';
    })
    .map((v: any, k: number) => {
      return (
        <div key={k}>
          <Image width="230" height="170" alt="" src={builder(v.mainImage)} />
          <div>
            <h5>{v.title}</h5>
            <div>{v.excerpt}</div>

            <Link href="" className="button">
              Learn More
            </Link>
          </div>
        </div>
      );
    });

  return (
    <>
      <section className={styles.header}>
        <div className={styles.slider}>
          <Slide arr={slider} />
        </div>
        <div className={styles.profile}>
          <div>
            <Image src={img} alt="" width="196" height="200" />
            <h4>{title}</h4>
            <h3>(C.E.O)</h3>
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
            <Image src={whoweareImg} width="560" height="400" alt="" />
          </div>
          <div>
            <h1>{whowearetitle}</h1>

            <div>{text}</div>

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

        <div className="container">{posts}</div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.fetch(`
  *[_type == 'post' || _type=='pages' || _type =='contact' || _type=='profile' || _type=='slider']{
    _id,
    title,
    _type,
    createdAt,
    mainImage,
    body,
    slug,
    address,
    email,
    location,
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    excerpt
  }
  `);

  return {
    props: {
      data,
    },
  };
};
