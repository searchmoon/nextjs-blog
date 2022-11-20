import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useState } from 'react'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  console.log('server side rendering')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function MyInfo() {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const { status = 'initial' } = router.query

  return (
    <>
      <h1 className="title">My Info</h1>
      <h1 className="title">Clicked: {String(clicked)} </h1>
      <h1 className="title">Status: {status} </h1>
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(replace)
      </button>
      {/* 이 첫번째 버튼은 true로 바꼈다가 바로 다시 false로 바뀜. url을 바꾸기 위해 이 페이지를 새로 리렌더 했기 때문 */}
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing')
        }}
      >
        edit(push)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          })
        }}
      >
        edit(replace)
      </button>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
