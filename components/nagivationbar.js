import Link from 'next/link'
import Body from '../styles/fonts.module.css'



export default function navBar () {
   return (
    <Body>
        <Link href={"/"}>
            <a1>Home</a1>
        </Link>
        <Link href={"/pages/aboutme.js"}>
        </Link>
    </Body>
   )
}