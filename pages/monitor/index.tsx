import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Monitor = () => {
  const router = useRouter()
  
  return <p>Post: {router.query.uuid}</p>
}




export async function getServerSideProps() {
  return { 
  props: {  } 
  };
}

export default Monitor