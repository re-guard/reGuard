import Image from 'next/image'


export default function Logo() {
    return (
      <div className='flex flex-col justify-center items-center'>
        <Image src='/reguard.svg' alt='logo' width={140} height={140}/>
        <text className='text-4xl'>re<a className='text-primary'>Guard</a></text>
      </div>
      
    )
}