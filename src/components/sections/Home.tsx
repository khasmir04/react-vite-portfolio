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
/**
 * @deprecated Home is already included in About
 */
const Home = () => {
  return (
    <StyledContainer
      id=''
      className='flex-col-reverse md:h-[calc(100vh-80px)] md:flex-row'
    >
      <div className='flex flex-auto flex-col justify-center gap-9 text-left text-7xl md:w-3/5'>
        <p style={{ whiteSpace: 'pre-line' }}>
          Hello,{'\n'}I'm <SpecialText>Dev KJ</SpecialText>,{'\n'}a{' '}
          <SpecialText>Full-stack Engineer</SpecialText>
        </p>
        <div className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita beatae ipsam
          voluptas impedit dolorum praesentium, ipsum minima officiis soluta.
        </div>
        <Button
          href='#projects'
          className='self-start text-base'
        >
          See my work
        </Button>
      </div>
      <div className='m-auto flex w-3/5 flex-auto items-center justify-center p-6 md:w-2/5'>
        <div>
          <img
            src={image}
            alt='Image of Dev KJ'
          />
        </div>
      </div>
    </StyledContainer>
  )
}

export default Home
