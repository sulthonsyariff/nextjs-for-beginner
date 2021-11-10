import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><Image src='/vercel.svg' alt="logo" width="128" height="77" /></Link>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/users/"><a>Users</a></Link>
      <Link href="/blog/"><a>Blogs</a></Link>
    </nav>
  );
}
 
export default Navbar;