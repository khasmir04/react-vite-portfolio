import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollButton from '../common/ScrollButton'

const MainLayout = (props: { children: ReactNode }) => {
  const { children } = props
  // const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      <Header />
      <main className='container m-auto'>{children}</main>
      <Footer />
      <ScrollButton />
    </>
  )
}

export default MainLayout
