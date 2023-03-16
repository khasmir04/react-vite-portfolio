import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Header from '../Header'
import SideBar from '../sections/SideBar'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr auto;
  margin: 0 auto;
`

const StyledAside = styled.aside`
  width: 86px;
`

const MainLayout = (props: { children: ReactNode }) => {
  const { children } = props
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <>
      {/* <Header /> */}
      <StyledContainer className='container block md:grid'>
        <StyledAside>
          <SideBar isLabeled={toggle} handleEnter={() => setToggle(true)} handleLeave={() => setToggle(false)} />
        </StyledAside>
        <main className='container m-auto'>{children}</main>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default MainLayout