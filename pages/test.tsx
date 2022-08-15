import Logo from './compoents/Logo'
import Header from './compoents/Header'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {

  const router = useRouter()
  const { t } = useTranslation('common')
  
  return (
    <div className='h-screen flex flex-col'>
      <div className='h-1/6'>
        <Header router={router}/>
      </div>
      <div className='h-2/6 flex flex-col items-center justify-center'>
        <Logo/>
        <div className='mt-4 input'>
          <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm transition duration-150 border-slate-300 placeholder-slate-400 focus:scale-105 hover:scale-105 focus:border-sky-800 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={t('placeholder')} />
        </div>
        <button className='bg-primary transition duration-150 ease-in-out hover:scale-105 rounded-md text-white mt-4 px-24 py-2 flex flex-row items-center justify-end'>
          <Image className='pr-4' src='/res/monitor.svg' alt='monitor' width={25} height={25}></Image>
          <text className='pl-2'>{t('continue')}</text> 
        </button>
      </div>
      <div className='h-1/6 mt-auto flex items-end'>
          <text className='w-full flex flex-col justify-center items-center mb-4'>
              © Copyright reGuard | 2023
        </text>
      </div>
      
    </div>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;