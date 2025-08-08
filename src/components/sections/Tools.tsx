import styled from 'styled-components'
import PageTitle from '../common/PageTitle'
import Capsule from '../common/Capsule'

const StyledContainer = styled.div`
  margin: auto;
  padding: 24px;
`

const StyledContent = styled.div`
  padding: 24px;
  // background: rgba(0, 0, 0, 0.3);
  // backdrop-filter: blur(10px);
  // -webkit-backdrop-filter: blur(10px);
  // border-radius: 6px;
  // border: 1px solid rgba(255, 255, 255, 0.1);
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    // transform: translateY(-5px);
    // box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    // background: rgba(0, 0, 0, 0.5);
  }
`

const frontendTools = [
  'ReactJS',
  'NextJS',
  'TailwindCSS',
  'TypeScript',
  'JavaScript',
  'Zustand',
  'Redux',
  'Figma',
  'Ant Design',
  'Mantine UI',
  'Shadcn UI',
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
]

const backendTools = [
  'ExpressJS',
  'MongoDB',
  'NodeJS',
  'TypeScript',
  'JavaScript',
  'Firebase',
  'Kafka',
  'SQL',
  'Postman',
]

const otherTools = ['Git', 'Docker', 'VSCode', 'Kubernetes', 'Node-RED', 'Bitbucket']

const renderToolsWithMiddleDot = (tools: string[]) => {
  return tools.map((tool, key) => {
    if (key === tools.length - 1) {
      return (
        <Capsule
          key={key}
          className='mb-2'
          tool={tool}
        />
      )
    }
    return (
      <Capsule
        key={key}
        className='mb-2'
        tool={tool}
        withDot
      />
    )
  })
}

const Tools = () => {
  return (
    <StyledContainer id='tools'>
      <PageTitle
        title='Tools and Technologies'
        subtitle='A curated selection of my tools.'
      />
      <StyledContent className='mx-auto mt-11 grid grid-cols-1 justify-around gap-9 md:max-w-[80%]'>
        <div>
          <h4 className='mb-4 text-center text-2xl text-[#eb8258]'>Front-end</h4>
          <div className='flex flex-wrap items-center justify-center'>
            {renderToolsWithMiddleDot(frontendTools)}
          </div>
        </div>
        <div>
          <h4 className='mb-4 text-center text-2xl text-[#eb8258]'>Back-end</h4>
          <div className='flex flex-wrap items-center justify-center'>
            {renderToolsWithMiddleDot(backendTools)}
          </div>
        </div>
        <div>
          <h4 className='mb-4 text-center text-2xl text-[#eb8258]'>Others</h4>
          <div className='flex flex-wrap items-center justify-center'>
            {renderToolsWithMiddleDot(otherTools)}
          </div>
        </div>
      </StyledContent>
    </StyledContainer>
  )
}

export default Tools
