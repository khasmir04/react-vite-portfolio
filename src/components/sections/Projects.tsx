import styled from 'styled-components'
import Card from '../common/Card'

import PageTitle from '../common/PageTitle'
import projects from '../../data/projects'
import { BsArrowRight } from 'react-icons/bs'

const StyledContainer = styled.div`
  margin: auto;
  padding: 24px;
`

const Projects = () => {
  return (
    <StyledContainer id='projects'>
      <PageTitle
        title='Featured Projects'
        subtitle='A curated selection of my web projects.'
      />
      <div className='mt-11 grid grid-cols-1 justify-around gap-9 md:grid-cols-2 lg:grid-cols-3 lg:px-12 xl:gap-16 xl:px-24'>
        {projects.map((project, key) => (
          <Card
            key={key}
            {...project}
          />
        ))}
      </div>
      <div className='mt-9'>
        {/* <Button
          href='https://github.com/khasmir04?tab=repositories'
          target='_blank'
          className='border border-burnt-sienna text-base'
        >
          See more of my projects...
        </Button> */}
        <a
          className='mx-auto flex w-fit items-center justify-center gap-2 border-b-2 border-transparent text-base transition duration-500 hover:scale-110 hover:cursor-pointer hover:border-current hover:text-2xl'
          href='https://github.com/khasmir04?tab=repositories'
          target='_blank'
        >
          <p className='text-lg'>See all</p> <BsArrowRight />
        </a>
      </div>
    </StyledContainer>
  )
}

export default Projects
