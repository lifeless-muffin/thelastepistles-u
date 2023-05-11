import Link from 'next/link';
import styles from '../../styles/modules/Navbar-ml.module.css';

function NavbarModule(props) {
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar_inner}>
          <div className={styles.navbar_left_container}>

            <div className={styles.hamburger_menu_container}>
              <button className={styles.hamburger_menu_button}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>

            <ul className={styles.navbar_left_list}>
              <li className={styles.navbar_left_item}>
                <Link id={styles.home_link} href="/home" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Home
                  </span>
                </Link>
              </li>
              <li className={styles.navbar_left_item}>
                <Link id={styles.music_link} href="/music" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Music
                  </span>
                </Link>
              </li>
              <li className={styles.navbar_left_item}>
                <Link id={styles.artists_link} href="/artists" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Artists
                  </span>
                </Link>
              </li>
              <li className={styles.navbar_left_item}>
                <Link id={styles.explore_link} href="/explore" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Explore
                  </span>
                </Link>
              </li>
              <li className={styles.navbar_left_item}>
                <Link id={styles.store_link} href="/Store" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Store
                  </span>
                </Link>
              </li>
              <li className={styles.navbar_left_item}>
                <Link id={styles.demo_link} href="/demo" className={styles.nabar_left_item_link}>
                  <span className={styles.navbar_left_item_text}>
                    Demo Submissions
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.navbar_right_container}>
            <div className={styles.login_button_container}>
              <Link id={styles.signin_link} href="/login" className={styles.nabar_left_item_link}>
                <span className={styles.navbar_left_item_text}>
                  Artist Signin
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarModule;