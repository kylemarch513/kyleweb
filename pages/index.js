import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import TextStyles from "../styles/fonts.module.css"
import Link from 'next/link'



export default function Home () {
  return (
    <div className={TextStyles}>  
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <h1 className={TextStyles.center}>Placeholder Name</h1>
      </Head>
      <div>
        placeholder
      </div>
      TEsting
    </Layout>
  </div>
  )

} 