import styled from 'styled-components'
import PageTitle from '../common/PageTitle'
import { ReactNode } from 'react'
import ExperienceCard from '../common/ExperienceCard'
import experiences from '../../data/experiences'

const StyledContainer = styled.div`
  padding: 24px;
`

const Experience = () => {
  return (
    <StyledContainer
      id='experience'
      className='mt-16 text-left'
    >
      <PageTitle
        title='Experiences'
        subtitle="Skills and experiences I've gained over the years"
        className='lg: top-20 left-0 text-center lg:sticky lg:max-w-xs lg:text-left'
      />
      <div className='mt-9 lg:-mt-20'>
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
