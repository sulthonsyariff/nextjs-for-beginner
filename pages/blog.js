import styles from '../styles/Blog.module.css'
import Metadata from '../components/Metadata'
import { useState, useEffect } from 'react'

// initial blogs dari SSR supaya kita dapet 10 data awal
export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');
  const initialBlogs = await res.json();

  return {
    props: {
      initialBlogs
    }
  }
}

const Blog = ({ initialBlogs }) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [loading, setLoading] = useState(false);
  
  // func fetch more blogs data
  const fetchMoreBlogs = async () => {
    setLoading(true);
    const start = blogs.length + 10;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`);
    const newBlogs = await res.json();
    
    setBlogs([...blogs, ...newBlogs]);

    setLoading(false);
  }

  // triggered ketika state blogs berubah dan scroll paling bawah
  useEffect(() => {
    const scrollingFunction = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10) {
            fetchMoreBlogs();
            window.removeEventListener('scroll', scrollingFunction)
        }
    }
    
    window.addEventListener('scroll', scrollingFunction);
  }, [blogs]);

  return (
    <Metadata title="Blog SSR">
      <h1>Data Blog</h1>
      {blogs.map(blog => {
        return (
          <div className={styles.blog} key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        )
      })}
      { loading && <div className={styles['text-center']}>Loading...</div> }
    </Metadata>
  );
}
 
export default Blog;