import React from 'react';
import styles from '@/styles/About.module.scss';
import { pages, selectPageState, selectProjectsState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';

const About = () => {
  const dispatch = useDispatch();

  const { data } = useGetpostsQuery('');

  useEffect(() => {
    if (data) {
      dispatch(pages(data.data));
    }
  }, [data, dispatch]);

  const whoweare = useSelector(selectPageState);
  const projects = useSelector(selectProjectsState);

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
          <div>{about?.text}</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <Image src={about?.img} width="500" height="600" alt="" />
          </div>
          <div>
            <h2>{about?.title}</h2>
            {about?.body}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Technical Statistics</h2>
          <div>{projects}</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <h2>{vision?.title}</h2>
            <div>{vision?.body}</div>
          </div>
          <div>
            <h2>{mission?.title}</h2>
            <div>{mission?.body}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
