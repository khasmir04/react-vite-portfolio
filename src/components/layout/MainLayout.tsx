import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SideBar from '../sections/SideBar'

const MainLayout = (props: { children: ReactNode }) => {
  const { children } = props
  return (
    <>
      <Header />
      <div className='grid justify-center'>
        <SideBar />
        <main className='md:ml-[60px] container m-auto'>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout