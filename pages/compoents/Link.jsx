import Image from 'next/image'


export default function Link() {
    return (
      <div className='w-full h-full flex flex-row justify-end'>
        
        <button> <Image className='transition duration-150 ease-in-out hover:scale-125' src='/res/translate.svg' alt='translate' width={24} height={24}/></button>
        <div className='mr-4'></div>
        <button><Image className='transition duration-150 ease-in-out hover:scale-125' src='/res/github.svg' alt='github' width={24} height={24}/></button>
        <div className='mr-10'></div>
      </div>
    )
}