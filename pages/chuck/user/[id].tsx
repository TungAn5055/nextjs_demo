import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/path'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/dist/client/router';

// return all static path can access to params
export const getStaticPaths: GetStaticPaths = async () => {     
    try {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=3');
        const paths = users.data.map(item => {
            return {
                params: {
                    id: item.id.toString()
                }
            }
        });
       
        console.log('paths', paths)
        return {
            paths:paths,
            fallback: true
        }

    } catch(e) {
        return {
            paths:[],
            fallback: true
          }
    }
    //   return {
    //     paths:[
    //         {
    //             params: {
    //                 id: '1'
    //             }
    //         },
    //         {
    //             params: {
    //                 id: '2'
    //             }
    //         },
        
    //     ],
    //       fallback: false
    //   }
  }

// get data form param get data
// for page add to props
// where call data api 
export const getStaticProps: GetStaticProps = async({ params }) =>  {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users/' + params?.id);
    console.log('ann', params)
    return {
      props: {
        user: users?.data,
        revalidate: 1
      }
    }
  }

export default function Show({user}) {
    const router = useRouter()

	// Neu trang chua tao ra, isFallback cua router === true
	// Va trang tam thoi sau day se duoc render

	if (router.isFallback) {
		return (
			<span className='sr-only'>LOADING ....</span>
		)
	}
    
    return (   
        <Layout>
            <h2>Data detail:</h2>
            <h3>{user.name}</h3>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
            <h4>{user.website}</h4>
        </Layout>
    )
 
}

