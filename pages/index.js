import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import textStyles from "../styles/fonts.module.css"
import Link from 'next/link'



export default function Home () {
  return (
    <div className={textStyles}>  
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <h1 className={textStyles.center}>Placeholder Name</h1>
      </Head>
      <div className={textStyles.p1}>
        placeholder
      </div>
    </Layout>
  </div>
  )

} 