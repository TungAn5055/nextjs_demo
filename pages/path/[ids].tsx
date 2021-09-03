import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/path'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


// return all static path can access to params
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    // return
	// [
	// 	{
	// 		params: {
	// 			id: '1'
	// 		}
	// 	},
	// 	{
	// 		params: {
	// 			id: '2'
	// 		}
	// 	},
	// 	....
	// ]
    return {
        paths,
        // fallback: true
        fallback: false,
    }
}

// get data form param get data
// for page add to props
// where call data api 
export const getStaticProps: GetStaticProps = async({ params }) =>  {
    const postData = await getPostData(params.ids)
    return {
      props: {
        postData
      }
    }
  }

export default function Path({postData}) {
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

