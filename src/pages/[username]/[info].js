import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])
  useEffect(() => {
    if (uid != null) {
      // uid가 처음에는 undefined이다. 그러므로, uid가 null 이 아닐 경우에만 요청하도록 if문 써준다.
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])

  return (
    <>
      <h1 className="title">
        UsernameInfo {username} from {info}
      </h1>
      <p>name: {name}</p>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
