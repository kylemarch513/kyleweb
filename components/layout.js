import Head from 'next/head'

import Styles from './layout.module.css'
import Link from 'next/link'
import TextStyles from "../styles/fonts.module.css"
import LogIn from './login'
const name = 'Kyle March'
export const siteTitle = 'My Home Page'

export default function Layout({ children, home }) {
    return (
      <div className={Styles.container}>
        <Head>

        </Head>
         <ul className={TextStyles.headingXl}>
           <a className={TextStyles.blink}>*</a><a>The</a><a className={TextStyles.blink}>*</a><a> HomePage</a> 
         </ul>
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
          <a>||</a>
          <p></p>
          <Link href='/search'>
            <a>||Waifus||</a>
          </Link>
        </ul>
      
      
      
      
      
      
      
      
      {children}</div>
    )
  }