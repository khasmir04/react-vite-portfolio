import styled from 'styled-components'
import PageTitle from '../common/PageTitle'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  /* height: 100vh; */
  padding: 24px;
`

const Contact = () => {
  return (
    <StyledContainer id='contact'>
      <PageTitle title='Contact'/>
      <div></div>
    </StyledContainer>
  )
}

export default Contact