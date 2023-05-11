// components 
import Link from 'next/link';
import Image from 'next/image';
import NavbarModule from '../modules/Navbar';
import { useState, useEffect, useRef } from 'react';

// styles
import styles from '../../styles/templates/Home-tp.module.css';

// icons / constants / other assets
import thelastepistlesLogo from '../../public/thelastepistles.png';
import { SocialMediaList } from "../constants/socials.json"


function HomePage(props) {

  const [socialsListClassname, setSocialsListClassname] = useState('false')
  const [timeoutId, setTimeoutId] = useState(null);

  const handleLogoHover = () => {
    setSocialsListClassname('active');
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleLogoHoverLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setTimeoutId(setTimeout(() => {
      setSocialsListClassname('inactive')
    }, 1700));
  };

  const halfway = Math.ceil(SocialMediaList.length / 2);
  const firstGroup = SocialMediaList.slice(0, halfway);
  const secondGroup = SocialMediaList.slice(halfway);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    };
  }, [timeoutId]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.main_heading_container}>
          <h1 className={styles.main_heading}>
            <span>thelastepistles</span>
            <span style={{ color: "black!important" }}>R</span>
            <span>ecords</span>
          </h1>
        </div>

        <div className={styles.subheading_container}>
          <h2 className={styles.subheading}>Official Record Label of Indian Christian/Gospel Artists</h2>
        </div>
      </header>

      <section className={styles.socials_section}>
        <div className={styles.socials_container}>
          <div className={styles.socials_logo_container}>
            <div className={styles.socials_logo}>
              <Image className={styles.socials_logo_image}
                src={thelastepistlesLogo}
                alt="Thelastepistles - LOGO"
                unoptimized
              />
            </div>
            <div
              className={styles.image_overlay}
              onMouseOver={handleLogoHover}
              onMouseLeave={handleLogoHoverLeave}
            />
          </div>

          <div className={styles.socials_links_container}>
            <div className={styles.socials_links}>
              <div className={styles.socials_list}>
                <ul className={styles.socials_list_b}>
                  {firstGroup.map((item, index) => (
                    <li key={index} className={styles.socials_list_item}>
                      <Link href={item.href} target='_blank' className={styles.socials_link_container}>
                        <i className={item.icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className={`${styles.socials_links_gap} socials_links_gap_${socialsListClassname}`}></div>
                <ul className={styles.socials_list_a}>
                  {secondGroup.map((item, index) => (
                    <li key={index} className={styles.socials_list_item}>
                      <Link href={item.href} target='_blank' className={styles.socials_link_container}>
                        <i className={item.icon}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavbarModule />

    </div>
  )
}

export default HomePage; 