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
      <div className={TextStyles.blink}>
        <h1>Placeholder Name</h1>
      </div>
      <div>
        <p>
          This webpage will be a living archive of things and ideas that my friends and I have produced. These pages contain items that I believe should be seen.
        </p>
      </div>
      TEsting
    </Layout>
  </div>
  )

} 