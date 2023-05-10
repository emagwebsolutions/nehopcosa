import Slide from '@/components/Slide';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useGetpostsQuery } from '@/store/fetchData';
import { useEffect } from 'react';

import {
  homepage,
  selectPageState,
  selectPostState,
  selectProfileState,
} from '@/store/store';

import { useDispatch, useSelector } from 'react-redux';
import { builder } from '@/client/client';

function Home() {
  return <><br /><br /><br /><br /><br /> THIS IS HOME PAGE</>;
}

export default Home;
