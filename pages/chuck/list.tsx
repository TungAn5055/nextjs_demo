import Layout from "../../components/layout"
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from "next";
import axios from 'axios';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
    try {
        let categories: string[] = [];

        await axios.get('https://api.chucknorris.io/jokes/categories').then(res => {
        
            categories = categories.concat(res?.data);
          
        }).catch(e => console.log(e));
     

        const posts = await axios.get('https://jsonplaceholder.typicode.com/users');
    
        return {
            props: {
                categories, 
                posts: posts?.data,
            }
        }
    } catch (e) {
        console.log(e);
    }
}

export default function List({categories, posts}) {
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
            { posts.map(items => 
                <div key={items?.id}>
                    <h3>{items?.id}</h3>
                    <h4>{items?.name}</h4>
                    <Link href={`/chuck/user/${items?.id}`}>show more</Link>
                    <br/>
                </div>
                )
            }
            <h1>List Category:</h1>
            { categories.map(item => 
                <div key={item}>
                <span>{item}</span>
                <br/>
                </div>
                )
            }
        </Layout>
    )
}