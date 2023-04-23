import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import {
  homepage,
  selectPageState,
  selectPostState,
  selectProfileState,
} from '@/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { client } from '@/client/client';
import { useEffect, useState } from 'react';

function Home({ data }: any) {
  const dispatch = useDispatch();

  dispatch(homepage(data));

  const { img, title } = useSelector(selectProfileState);
  const whoweare = useSelector(selectPageState);

  const who = Object.values(whoweare)
    .filter((v: any) => v.slug === 'who-we-are')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      text: v.text,
    }))[0];

  //POSTS

  const featuredposts = useSelector(selectPostState);

  //CONTACT

  return (
    <>
      <section className={styles.header}>
        <div className={styles.slider}>
          <Slide />
        </div>
        <div className={styles.profile}>
          <div>
            <Image src={img} alt="" width="196" height="200" />
            <p>{title}</p>
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
