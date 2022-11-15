import Head from 'next/head'
import Link from 'next/link'

//getServerSideProps 는 서버사이드에서 실행되는 함수이다.

export async function getServerSideProps(){
console.log('server side rendering')
  return {
    props: {time: new Date().toISOString()}
  }
}
export default function Home({time}) {
  return (
    <div className="container">

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <h1><Link href="/csr">to CSR</Link></h1>
      <h1><Link href="/ssg">to SSG</Link></h1>
    </div>
  )
}
