import Head from "next/head"
import Layout, {siteTitle} from '../../components/layout.js'
import textStyles from "../../styles/fonts.module.css"

export default function AboutMe () {
    return (
    <div className={textStyles}>
        <Head>
            <title>About Me</title>
            <header>
            <h1>About Me</h1>
            </header>
        </Head>
        <Layout></Layout>

    </div>
)
}