import Head from 'next/head'
//import Image from 'next/image'
import Styles from './layout.module.css'
import Link from 'next/link'
import TextStyles from "../styles/fonts.module.css"
//import navBar from '../components/nagivationbar'

const name = 'Kyle March'
export const siteTitle = 'My Home Page'

export default function Layout({ children, home }) {
    return (
      <div className={Styles.container}>
        <Head>

        </Head>
        <header>
         <h1>*The* Homepage</h1>
        </header>
        <p>Navigate to:</p>
        <ul className={Styles.a}>
           <Link href="/">
            <a>||Home Page||</a>
          </Link>
          <Link href="/rate_page">
            <a>About Me||</a>
          </Link>
          <p></p>
          <Link href="/emile">
          <a>||Emile Alain Gutzeit</a>
          </Link>
          <a>2||</a>
          <p></p>
        </ul>
      
      
      
      
      
      
      
      
      {children}</div>
    )
  }