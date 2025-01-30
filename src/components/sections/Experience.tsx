import styled from 'styled-components'
import PageTitle from '../common/PageTitle'
import { ReactNode } from 'react'
import ExperienceCard from '../common/ExperienceCard'
import experiences from '../../data/experiences'

const StyledContainer = styled.div`
  margin: auto;
  margin-top: 60px;
  padding: 24px;
`

const Experience = () => {
  return (
    <StyledContainer
      id='experience'
      className='text-left'
    >
      <PageTitle
        title='Experiences'
        className='top-20 left-0 text-center lg:sticky lg:text-left'
      />
      <div className='mt-9 lg:mt-0'>
        <ol className='relative border-l-2 border-white/60 lg:ml-80'>
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
