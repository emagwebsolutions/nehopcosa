import React from 'react';
import styles from '@/styles/About.module.scss';
import { pages, selectPageState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { client } from '@/client/client';
import { serverSideData } from '@/typings';

const About = ({ data }: any) => {
  const dispatch = useDispatch();

  dispatch(pages(data));

  const whoweare = useSelector(selectPageState);

  const vision = Object.values(whoweare)
    .filter((v: any) => v.slug === 'who-we-are')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      body: v.body,
    }))[0];

  const about = Object.values(whoweare)
    .filter((v: any) => v.slug === 'about')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      body: v.body,
      text: v.text,
    }))[0];

  const mission = Object.values(whoweare)
    .filter((v: any) => v.slug === 'mission-statement')
    .map((v: any) => ({
      title: v.title,
      img: v.img,
      body: v.body,
    }))[0];

  return (
    <div className={styles.about}>
      <section>
        <div>
          <div className="dash"></div>
          <h1>WHO</h1>
          <h1>WE ARE</h1>
          <div>{about.text}</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <Image src={about.img} width="500" height="600" alt="" />
          </div>
          <div>
            <h2>{about.title}</h2>
            {about.body}
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await client.fetch(`
        *[_type == 'pages' || _type == 'social' || _type == 'contact']{
          title,
          _type,
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

export default About;
