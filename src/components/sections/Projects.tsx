import styled from 'styled-components'
import Card from '../common/Card'
import cusinaImg from '../../assets/img/cusina.png'
import eduKaImg from '../../assets/img/eduka.png'
import gamingInfo from '../../assets/img/gaming.png'
import valorantImg from '../../assets/img/valorant.png'
import modelViewerImg from '../../assets/img/model.png'
import PageTitle from '../common/PageTitle'
import Button from '../common/Button'

const StyledContainer = styled.div`
  margin: auto;
  /* display: flex; */
  /* height: 100vh; */
  padding: 24px;
`

const data = [
  {
    title: 'Cusina',
    description: 'Responsive Web Design (mobile-first approach) using purely HTML and CSS.',
    image: cusinaImg,
    githubUrl: 'https://github.com/khasmir04/Cusina',
    liveUrl: 'https://www.khasmir.ml/Cusina/'
  },
  {
    title: 'EduKa',
    description: 'Education management platform using tailwind, nextjs and other libraries, with auth pages.',
    image: eduKaImg,
    githubUrl: 'https://github.com/khasmir04/eduka',
    liveUrl: 'https://eduka-khasmir04.vercel.app/'
  },
  {
    title: 'Game On',
    description: 'Gaming information website showcasing the use of React, Tailwind, Rapid API and other tools/libraries.',
    image: gamingInfo,
    githubUrl: 'https://github.com/khasmir04/gaming-info-site',
    liveUrl: 'https://gaming-info-website-three.vercel.app/'
  },
  {
    title: 'Valorant Memory Game',
    description: 'Valorant-themed photo memory game implemented using basic Javascript',
    image: valorantImg,
    githubUrl: 'https://github.com/khasmir04/Valorant-Memory-Game',
    liveUrl: 'https://www.khasmir.ml/Valorant-Memory-Game/public/index.html'
  },
  {
    title: '3D Model Viewer',
    description: 'A simple Model Viewer app using React and Three.js',
    image: modelViewerImg,
    githubUrl: 'https://github.com/khasmir04/model-viewer-react',
    liveUrl: 'https://model-viewer-react-drab.vercel.app/'
  },
]

const Projects = () => {
  return (
    <StyledContainer id='projects'>
      <PageTitle title='My Top Projects' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-around mt-9'>
        {data.map((project, key) => (
          <Card key={key} {...project} />
        ))}
      </div>
      <div className='mt-9'>
        <Button href='https://github.com/khasmir04?tab=repositories' target='_blank'>
          See more of my projects...
        </Button>
      </div>
    </StyledContainer>
  )
}

export default Projects