import styled from 'styled-components'
import PageTitle from '../common/PageTitle'
import { ReactNode } from 'react'
import ExperienceCard from '../common/ExperienceCard'
import experiences from '../../data/experiences'

const StyledContainer = styled.div`
  margin: auto;
  margin-top: 60px;
  /* height: 100vh; */
  padding: 24px;
`

const Experience = () => {
  return (
    <StyledContainer id='experience' className='text-left'>
      <PageTitle title='Experiences' />
      <div className='mt-9'>
        <ol className="relative border-l border-gray-200 border-gray-700">
          {experiences.map((item, key) => {
            const { ...rest } = item
            return (
              <ExperienceCard
                key={key}
                {...rest}
              />
            )
          })}
        </ol>
      </div>
    </StyledContainer>
  )
}

export default Experience