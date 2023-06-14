import styled from 'styled-components'
import Card from '../common/Card'

import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import projects from '../../data/projects'

const StyledContainer = styled.div`
  margin: auto;
  /* display: flex; */
  /* height: 100vh; */
  padding: 24px;
`

const Projects = () => {
  return (
    <StyledContainer id='projects'>
      <PageTitle title='My Top Projects' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-around mt-9'>
        {projects.map((project, key) => (
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