import Image from 'next/image'
import Link from 'next/link'


export default function Header(props) {

    const { router }  = props;
    console.log(router.locale)
    return (
      <div className='w-full h-full flex flex-row justify-end'>
        <Link href='/' locale={router.locale === 'en' ? 'zh' : 'en'}>
          <button className='transition duration-150 ease-in-out hover:scale-125' > 
          <Image src={ router.locale === 'en' ? '/res/en.svg': '/res/zh.svg' } alt='translate' width={24} height={24}/></button>
        </Link>
        <div className='mr-4'></div>
        <Link href='https://github.com/re-guard/reGuard-sdk'>
        <button className='transition duration-150 ease-in-out hover:scale-125' ><Image src='/res/github.svg' alt='github' width={24} height={24}/></button>
        </Link>
        <div className='mr-10'></div>
      </div>
    )
}