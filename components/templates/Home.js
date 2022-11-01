import Image from 'next/image';
import styles from '../../styles/templates/Home-tp.module.css';
import thelastepistlesLogo from '../../public/thelastepistles.png';

// Import socials icons
import facebookI from '../../public/assets/icons/facebook-i.svg'
import applemusicI from '../../public/assets/icons/applemusic-i.svg'
import instagramI from '../../public/assets/icons/instagram-i.svg'
import spotifyI from '../../public/assets/icons/spotify-i.svg'
import NavbarModule from '../modules/Navbar';

function HomePage(props) {
  return (
    <div className={styles.container} >
      <header className={styles.header}>
        <div className={styles.main_heading_container}>
          <h1 className={styles.main_heading}>
            <span className={styles.main_heading_span}>thelastepistles</span>
            <span className={styles.main_heading_span}>R</span>
            <span className={styles.main_heading_span}>ecords</span>
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
              <Image src={thelastepistlesLogo}
                alt="Thelastepistles - LOGO"
                width={380}
                height={380} />
            </div>
            <div className={styles.image_overlay} />
          </div>

          <div className={styles.socials_links_container}>
            <div className={styles.socials_links}>
              <ul className={styles.socials_list}>
                <div className={styles.socials_list_b}>
                  <li className={styles.socials_list_item}>
                    <div className={styles.socials_link_container}>
                      <Image src={applemusicI}
                        alt="Apple Music"
                        width={52}
                        height={52} />
                    </div>
                  </li>
                  <li className={styles.socials_list_item}>
                    <div className={styles.socials_link_container}>
                      <Image src={spotifyI}
                        alt="Spotify"
                        width={52}
                        height={52} />
                    </div>
                  </li>
                </div>
                <div className={styles.socials_list_b}>
                  <li className={styles.socials_list_item}>
                    <div className={styles.socials_link_container}>
                      <Image src={facebookI}
                        alt="Facebook"
                        width={52}
                        height={52} />
                    </div>
                  </li>
                  <li className={styles.socials_list_item}>
                    <div className={styles.socials_link_container}>
                      <Image src={instagramI}
                        alt="Instagram"
                        width={52}
                        height={52} />
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NavbarModule />

    </div>
  )
}

export default HomePage; 