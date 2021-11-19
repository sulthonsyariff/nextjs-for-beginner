import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Metadata from '../../components/Metadata';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: { dataUsers }
  }
}

const Users = ({ dataUsers }) => {
  return (
    <Metadata title="Users">
      <h1>Data Users</h1>
      {dataUsers.map(user => (
        <Link href={'/users/' + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{ user.name }</h3>
          </a>
        </Link>
      ))}
    </Metadata>
  );
}
 
export default Users;