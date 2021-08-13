import styles from './layout.module.css'
import { getAllPostIds } from '../lib/path'

export default function Layout({ children }) {
    return <div className={styles.container}>
      <h1>check!!!</h1>
      {children}</div>
  }

// return an array of possible values for id
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

//fetch necessary data for the post with id
export async function getStaticProps({params}) {

}