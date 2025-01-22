import styled from 'styled-components'
import Card from '../common/Card'

import PageTitle from '../common/PageTitle'
import Button from '../common/Button'
import projects from '../../data/projects'

const StyledContainer = styled.div`
  margin: auto;
  padding: 24px;
`

const Projects = () => {
  return (
    <StyledContainer id='projects'>
      <PageTitle title='Projects' />
      <div className='mt-11 md:px-24 grid grid-cols-1 justify-around gap-9 md:gap-16 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, key) => (
          <Card
            key={key}
            {...project}
          />
        ))}
      </div>
      <div className='mt-9'>
        <Button
          href='https://github.com/khasmir04?tab=repositories'
          target='_blank'
          className='border border-burnt-sienna text-base'
        >
          See more of my projects...
        </Button>
      </div>
    </StyledContainer>
  )
}

export default Projects
