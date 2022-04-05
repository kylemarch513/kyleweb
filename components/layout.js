import Head from 'next/head'
//import Image from 'next/image'
import Styles from './layout.module.css'
import textStyles from "../styles/fonts.module.css"
import Link from 'next/link'
import navBar from '../components/nagivationbar'

const name = 'Kyle March'
export const siteTitle = 'My Home Page'

export default function Layout({ children, home }) {
    return (
    
    <textStyles>
      <div className={Styles.container}>
        <Head>

        </Head>
        <header>
         <h1>*The* Homepage</h1>
        </header>
        <p1>Navigate to:</p1>
        <ul className={Styles.a}>
           <Link href="/">
            <a>||Home Page||</a>
          </Link>
          <Link href="/rate_page">
            <a>About Me||</a>
          </Link>
          <p></p>
          if i just type like this and then
          go here
          <a2>2||</a2>
          <p></p>
        </ul>
      
      
      
      
      
      
      
      
      {children}</div>
      </textStyles>
      
    )
  }