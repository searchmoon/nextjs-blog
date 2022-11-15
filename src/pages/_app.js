import Layout from '../components/Layout'

//component, pageProps 는 next.js에서 제공하는 api라고 생각하면 된다.

export default function App({ Component, pageProps }) {
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // )

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(<Component {...pageProps} />)
}
