import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/path'
console.log('Path0')
export default function Path({postData}) {
    console.log('postData', postData)
    return (   
        <Layout>
            <h2>Show data</h2>
            <h2> {postData.id}</h2>
            {postData.title}
            <br />
            {postData.ids}
            <br />
            {postData.date}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
 
}

// return all static path can access to params
export async function getStaticPaths() {
    const paths = getAllPostIds()
    console.log('getStaticPaths', paths)
    return {
        paths,
        fallback: true
    }
}

// get data form param get data
// for page add to props
// where call data api 
export async function getStaticProps({ params }) {
    console.log('getStaticProps', params)
    const postData = await getPostData(params.ids)
    return {
      props: {
        postData
      }
    }
  }