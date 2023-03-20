import styled from 'styled-components'
import PageTitle from '../common/PageTitle'
import ContactForm from '../forms/ContactForm'

const StyledContainer = styled.div`
  margin: auto;
  /* height: 100vh; */
  padding: 24px;
  margin-bottom: 16px;
`

const Contact = () => {
  return (
    <StyledContainer id='contact'>
      <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
        <ContactForm />
      </div>
    </StyledContainer>
  )
}

export default Contact