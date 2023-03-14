import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  height: 100vh;
  padding: 24px;
`

const About = () => {
  return (
    <StyledContainer id='about'>
      <div>About Me</div>
      <div></div>
    </StyledContainer>
  )
}

export default About