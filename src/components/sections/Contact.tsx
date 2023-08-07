import styled from 'styled-components'
import ContactForm from '../forms/ContactForm'

const StyledContainer = styled.div`
  margin: auto;
  padding: 24px;
`

const Contact = () => {
  return (
    <StyledContainer id='contact'>
      <div className='mx-auto max-w-screen-md py-8 lg:py-16'>
        <ContactForm />
      </div>
    </StyledContainer>
  )
}

export default Contact
