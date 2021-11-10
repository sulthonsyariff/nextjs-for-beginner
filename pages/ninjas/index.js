import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Metadata from '../../comps/Metadata';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <Metadata title="Listing">
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </Metadata>
  );
}
 
export default Ninjas;