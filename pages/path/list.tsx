
import Layout from '../../components/layout';
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { getListPost } from '../../lib/path';
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
    const postAll = await getListPost();
    console.log('postAll', postAll)
    return {
        props:{
            postAll,
        }
    }
}
export default function List({postAll}) {
    return (
        <Layout>
            <Head>
                <title>List tabs</title>
            </Head>
            <h1>List Data Show:</h1>
            {
                postAll.map(item => (
                    <div key={item?.id}>
                        <h3>{item?.title}</h3>
                        <span>{item?.date}</span>
                        <Link href={`/path/${item.id}`} passHref>Go to detail</Link>
                    </div>
                ))
            }

        </Layout>
    )
}