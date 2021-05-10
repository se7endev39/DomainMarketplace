import styles from './index.module.scss'
import facebook_icon from 'assets/images/facebook.svg'
import instagram_icon from 'assets/images/instagram.svg'
import twitter_icon from 'assets/images/twitter.svg'
import Link from 'next/link'

const menu_items = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "UWW Stories",
    link: "/",
  },
  {
    title: "SEARCH",
    link: "/",
  },
  {
    title: "ABOUT",
    link: "/",
  },
]

const Menu = (props) => {
  return (
    <div className={styles.Menu}>
      <div className={styles.Menu_bar}>
        {
          menu_items.map( (item, index) => (
            <Link href={item.link} key={index}>
              <a className={styles.Menu_item} onClick={props.onMenuClicked}>{item.title}</a>
            </Link>
          ))
        }
      </div>
      <div className={styles.Menu_social}>
        <img src={facebook_icon} />
        <img src={instagram_icon} />
        <img src={twitter_icon} />
      </div>
    </div>
  )
}

export default Menu