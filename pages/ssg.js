import Head from 'next/head'
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export async function getStaticProps(){
  console.log('static site generation')
  return {
    props: {time: new Date().toISOString()}
  }
}

export default function SSG({time}) {
  return (
    <>
        <h1 className="title">
          {time}
        </h1>
    </>
  )
}


SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
//Layout 컴포넌트와, SubLayout 컴포넌트를 중첩으로 사용하여, ssg 페이지를 감싸줬다.
