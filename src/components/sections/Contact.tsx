import styled from 'styled-components'
import ContactForm from '../forms/ContactForm'

const StyledContainer = styled.div`
  margin: auto;
  padding: 24px;
`

const Contact = () => {
  return (
    <StyledContainer id='contact'>
      <div className='mx-auto mb-8 rounded-md border border-gray-700 border-opacity-50 bg-cod-gray shadow-lg md:max-w-[70%] lg:py-6'>
        <ContactForm />
      </div>
    </StyledContainer>
  )
}

export default Contact
