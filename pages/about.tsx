import React from 'react';
import styles from '@/styles/About.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';
import { pages, selectPagesState } from '@/store/features/pagesSlice';
import { selectProjectsState } from '@/store/features/projectsSlice';
import { builder } from '@/client/client';
import PortableText from 'react-portable-text';

const About = () => {
  const dispatch = useDispatch();

  const { data } = useGetpostsQuery('');

  useEffect(() => {
    if (data) {
      dispatch(pages(data.data));
    }
  }, [data, dispatch]);

  const whoweare = useSelector(selectPagesState);
  const project = useSelector(selectProjectsState);

  const projects = Object.values(project).map((v: any, k) => {
    return (
      <div key={k}>
        <i className={`fa ${v.slug?.current}`}></i>
        <h1>{v.excerpt}</h1>
        <p>{v.title}</p>
      </div>
    );
  });

  const vision = Object.values(whoweare)
    .filter((v: any) => v.slug?.current === 'who-we-are')
    .map((v: any) => {
      const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
      return {
        title: v.title,
        img,
        body: (
          <PortableText
            className=""
            content={v.body}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
            serializers={{
              h1: (props: any) => {
                <h1 className="" {...props} />;
              },
              h2: (props: any) => {
                <h2 className="" {...props} />;
              },
              li: ({ children }: any) => {
                <li className="">{children}</li>;
              },
              link: ({ href, children }: any) => {
                <a href={href} className="">
                  {children}
                </a>;
              },
            }}
          ></PortableText>
        ),
      };
    })[0];

  const about = Object.values(whoweare)
    .filter((v: any) => v.slug?.current === 'about')
    .map((v: any) => {
      const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
      return {
        title: v.title,
        img,
        body: (
          <PortableText
            className=""
            content={v.body}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
            serializers={{
              h1: (props: any) => {
                <h1 className="" {...props} />;
              },
              h2: (props: any) => {
                <h2 className="" {...props} />;
              },
              li: ({ children }: any) => {
                <li className="">{children}</li>;
              },
              link: ({ href, children }: any) => {
                <a href={href} className="">
                  {children}
                </a>;
              },
            }}
          ></PortableText>
        ),
        text: v.text,
      };
    })[0];

  const mission = Object.values(whoweare)
    .filter((v: any) => v.slug?.current === 'mission-statement')
    .map((v: any) => {
      const img = v.mainImage ? builder(v.mainImage) : '/noimage.jpg';
      return {
        title: v.title,
        img,
        body: (
          <PortableText
            className=""
            content={v.body}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
            serializers={{
              h1: (props: any) => {
                <h1 className="" {...props} />;
              },
              h2: (props: any) => {
                <h2 className="" {...props} />;
              },
              li: ({ children }: any) => {
                <li className="">{children}</li>;
              },
              link: ({ href, children }: any) => {
                <a href={href} className="">
                  {children}
                </a>;
              },
            }}
          ></PortableText>
        ),
      };
    })[0];

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
