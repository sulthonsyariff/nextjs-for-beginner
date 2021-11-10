import styles from '../styles/Blog.module.css'
import Metadata from '../comps/Metadata'

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog
    }
  }
}

const Blog = ({ dataBlog }) => {
  return (
    <Metadata title="Blog SSR">
      <h1>Data Blog</h1>
      {dataBlog.map(blog => {
        return (
          <div className={styles.blog} key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      })}
    </Metadata>
  );
}
 
export default Blog;