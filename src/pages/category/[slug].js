import Layout from "../../components/Layout";
import SubLayout from "../../components/SubLayout";
import {useRouter} from "next/router";

export default function CategorySlug() {

  const router = useRouter();
  const {slug, status='initial', from, age} = router.query;
  return (
    <>
      <h1 className="title">Category {slug} {status} from {from} age {age}</h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
