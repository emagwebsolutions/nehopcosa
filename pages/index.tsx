import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import {
  homepage,
  selectPageState,
  selectPostState,
  selectProfileState,
  selectSocialState,
} from '@/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { client } from '@/client/client';

function Home({ data }: any) {
  const dispatch = useDispatch();

  dispatch(homepage(data));

  //PROFILE DETAILS
  const { img, title } = useSelector(selectProfileState);
  const whoweare = useSelector(selectPageState);

  //WHO WE ARE DETAILS
  const who = Object.values(whoweare)
    .filter((v: any) => v.slug === 'who-we-are')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      text: v.text,
    }))[0];

  //FEATURED POST DETAILS
  const featuredposts = useSelector(selectPostState);

  //SOCIAL ICONS
  const socialicons = useSelector(selectSocialState);

  const social = Object.values(socialicons).map((v: any, k: number) => {
    const fa = v.title.toLowerCase();
    return (
      <a href={v.slug} key={k}>
        <i className={`fa fa-${fa}`}></i>
      </a>
    );
  });

  return (
    <>
      <section className={styles.header}>
        <div className={styles.slider}>
          <Slide />
        </div>
        <div className={styles.profile}>
          <div>
            <Image src={img} alt="" width="196" height="200" />
            <strong>{title}</strong>
            <strong>(C.E.O)</strong>
            <div className={styles.social}>{social}</div>
          </div>
        </div>
      </section>

      <section className={styles.whoweare}>
        <div className="container">
          <div>
            <Image src={who.img} width="560" height="400" priority alt="" />
          </div>
          <div>
            <h1>{who.title}</h1>

            <div>{who.text}</div>

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
          <div>
            <h1>JOIN US TO HELP THE POOR AND NEEDY IN SOCIETY</h1>
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <h4>Our Blog</h4>
        <h2>Recent From Blog</h2>

        <div className="container">{featuredposts}</div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.fetch(`
        *[
          _type == 'post' ||
          _type == 'pages' ||
          _type == 'slider' ||
          _type == 'profile' ||
          _type == 'social' ||
          _type == 'contact' 
        ]{
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

export default Home;
