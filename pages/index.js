import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import TextStyles from "../styles/fonts.module.css"
import Link from 'next/link'
import Counter from '../components/counter'
import LogIn from '../components/login'


export default function Home () {
  return (
    <div className={TextStyles}>  
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={TextStyles.seizure}>
        <h1>Epilepsy Warning</h1>
      </div>
      <div>
        <p>
          This webpage will be a living archive of things and ideas that are associated with my friends and I. Some stuff is more important than others, but I think its all pretty neat.
        </p>
        <Counter />
      </div>
    </Layout>
  </div>
  )

} 