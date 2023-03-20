import styled from 'styled-components'
import Button from '../common/Button'
import image from './../../assets/me.jpg'

const StyledContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  /* height: calc(100vh - 80px); */
  padding: 24px;
`

const SpecialText = styled.span`
  color: #eb8258;
`

// THIS IS NOT HOME, ABOUT IS HOME
const Home = () => {
  return (
    <StyledContainer id='' className='flex-col-reverse md:flex-row md:h-[calc(100vh-80px)]'>
      <div className='flex-auto md:w-3/5 text-7xl text-left flex flex-col justify-center gap-9'>
        <p style={{ whiteSpace: 'pre-line' }}>Hello,{"\n"}I'm <SpecialText>Dev KJ</SpecialText>,{"\n"}a <SpecialText>Frontend Developer</SpecialText></p>
        <div className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita beatae ipsam voluptas impedit dolorum praesentium, ipsum minima officiis soluta.
        </div>
        <Button href='#projects' className='text-base self-start'>See my work</Button>
      </div>
      <div className='flex-auto w-3/5 md:w-2/5 p-6 flex items-center justify-center m-auto'>
        <div>
          <img src={image} alt="Image of Dev KJ" />
        </div>
      </div>
    </StyledContainer>
  )
}

export default Home