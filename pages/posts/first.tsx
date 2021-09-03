import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../components/layout'
export default function Firstx () {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>An hello Next!</h1>
        
            <Image  src="/image/an.jpg"  height={144} 
                width={144} alt='nhun' />
            <h3>Link :::
            <Link href='/'> Go to home page</Link>
            </h3>
        </Layout>
    )
}