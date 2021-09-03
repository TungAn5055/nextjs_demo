import Layout from "../../components/layout"
import Head from 'next/head';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import axios from 'axios';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log('annn', data);
        return {
            props: {
                data: data,
            }
        }
    } catch (e) {
        console.log(e);
    }
}

export default function Random({data}) {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <form className="form-inline my-2 my-lg-0 ml-5">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
         
            <div >
                <h3>{data?.id}</h3>
                <h4>{data?.value}</h4>
                <h4>{data?.icon_url}</h4>
                {/* <Link href={`/chuck/user/${items?.id}`}>show more</Link> */}
                <br/>
            </div>
        
        </Layout>
    )
}