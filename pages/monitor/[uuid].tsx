import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './components/Header'
import ChartLayout from './components/ChartLayout'
import LineBarChart from './components/LineBarChart'

const Monitor = () => {
  const router = useRouter()
  const uuid = String(router.query.uuid).toUpperCase()
  return (<>
    <Head>
      <title>{ uuid } - Dashboard</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className='-z-10 pt-20 px-2'>
        <ChartLayout >
          <LineBarChart></LineBarChart>
        </ChartLayout>
    </div>
    
  </>)
  
}




export async function getServerSideProps() {
  return { 
  props: {  } 
  };
}

export default Monitor