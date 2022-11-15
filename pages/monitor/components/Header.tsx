import Image from 'next/image'


export default function Header() {

    return (<>
      <div className='z-10 py-3 px-5 bg-white border-b border-slate-900/10 fixed top-0 left-0 right-0 flex justify-between'>
        <div className='z-100'>
          <Image src='/res/reguard-header.svg' alt='logo' width={122} height={30}></Image>
        </div>
        
        <div className='hidden xl:flex' onClick={()=>{
          const sideNav = document.getElementsByClassName('sideNav')[0];
          sideNav.style.width='300px'
        }}>
          <Image src='/res/zh.svg' alt='logo' width={30} height={30}></Image>
        </div>
      </div>
      </>
      
    )
    
}