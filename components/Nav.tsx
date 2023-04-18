import Image from 'next/image';
import styles from '../styles/Nav.module.scss';
import Link from 'next/link';
import {useState} from 'react'

const Nav = () => {
  const [container,setContainer] = useState('hide')
  return (
    <nav className={styles.nav}>

      <Image src="/menu.jpg" alt="" className="menu" width="70" height="70" onClick={()=> setContainer('show') } />

      <div className={`container ${container}`} >
        <div>
          <Image alt="Logo" src="/logo.jpg" width="70" height="70" />

          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div onClick={()=> setContainer('hide') }></div>
      </div>
    </nav>
  );
};

export default Nav;
