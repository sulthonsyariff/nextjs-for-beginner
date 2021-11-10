import Head from 'next/head'

export default function Metadata({ children, title }) {
  return (
    <>
      <Head>
        <title>
          Ninjas |
          {' '}
          { title }
        </title>
        <meta name="description" content="apaweh description"/>
      </Head>
      { children }
    </>
  )
}
