import styled from 'styled-components'
import terpImg from '../assets/img/icons/terp.png'
import telfordImg from '../assets/img/icons/telford.png'
import cloudswyftImg from '../assets/img/icons/cloudswyft.png'
import kodegoImg from '../assets/img/icons/kodego.png'
import prulifeukImg from '../assets/img/icons/prulifeuk.png'
import vertereImg from '../assets/img/icons/vertere.png'

const StyledDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  line-height: 1.5;
  color: #e5e7eb;
`

const Imp = styled.span`
  color: #eb8258;
`

const computeDuration = (startDateStr: string) => {
  const startDate = new Date(startDateStr)
  const currentDate = new Date()

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()

  if (months < 0) {
    years -= 1
    months += 12
  }

  let result = ''
  if (years > 0) {
    result += `${years} yr `
  }
  result += `${months} mos`

  return result.trim()
}

const experiences = [
  {
    timeLine: <>June 2024 - Present &middot; {computeDuration('June 2024')}</>,
    position: 'Full Stack Engineer',
    company: <>Pru Life UK &middot; Full-time</>,
    description: (
      <StyledDescription>
        Full Stack Engineer providing solutions and support to other teams.
        <ul className='ml-4 list-disc text-lg'>
          <li>
            <Imp>Migrate existing services</Imp> to improve processing documents, emails, and SMS.
          </li>
          <li>
            <Imp>Create packages</Imp> to be used by different applications.
          </li>
          <li>
            Develop <Imp>service integrations</Imp> for seamless operation within the company
            ecosystem.
          </li>
          <li>
            Provide <Imp>support</Imp> to other team’s development.
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: prulifeukImg,
  },
  {
    timeLine: <>SEPTEMBER 2023 - May 2024 &middot; 8 mos</>,
    position: 'Programmer/Analyst, S2',
    company: <>Vertere Global Solutions, Inc. &middot; Contract</>,
    description: (
      <StyledDescription>
        Worked as engineer to provide solutions.
        <ul className='ml-4 list-disc text-lg'>
          <li>
            Build an <Imp>EKYC application</Imp>, integrating third-party APIs end-to-end.
          </li>
          <li>
            Design and implement <Imp>custom components</Imp> to enhance application functionality.
          </li>
          <li>
            Contribute to <Imp>sprint planning</Imp> sessions utilizing JIRA.
          </li>
          <li>
            Maintain up-to-date <Imp>documentation</Imp> for ongoing application development.
          </li>
          <li>
            Propose <Imp>techniques and technologies</Imp> to optimize the codebase.
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: vertereImg,
  },
  {
    timeLine: <>AUGUST 2021 - June 2023 &middot; 1 yr 10 mos</>,
    position: 'MIDDLE SOFTWARE ENGINEER',
    company: <>TERP &middot; Full-time</>,
    description: (
      <StyledDescription>
        Working for almost 2 years as a Front-End React Developer.
        <ul className='ml-4 list-disc text-lg'>
          <li>
            Work on a project built using <Imp>ReactJS</Imp>
          </li>
          <li>
            Use <Imp>TypeScript</Imp> as main scripting language for development
          </li>
          <li>
            Create components using <Imp>tsx</Imp>, <Imp>styled-components, html</Imp> and{' '}
            <Imp>css</Imp>
          </li>
          <li>
            Update <Imp>documentation</Imp> for API types
          </li>
          <li>
            Create and report <Imp>tickets</Imp> for tasks
          </li>
          <li>
            Participate on <Imp>design</Imp> meeting and <Imp>planning</Imp>
          </li>
          <li>
            <Imp>Maintaining & improving</Imp> web app
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: terpImg,
  },
  {
    timeLine: <>April 2021 - July 2021 &middot; 4 mos</>,
    position: 'WEB DEVELOPER TRAINEE',
    company: <>KodeGo &middot; Contract</>,
    description: (
      <StyledDescription>
        Learned about web development and how to build a web application.
        <ul className='ml-4 list-disc text-lg'>
          <li>
            Dived deep into <Imp>HTML, CSS</Imp> and <Imp>JS</Imp>.
          </li>
          <li>
            Learned how to use <Imp>ReactJS</Imp> and <Imp>NextJS</Imp>.
          </li>
          <li>
            Practiced different CSS frameworks such as <Imp>Bootstrap</Imp> and{' '}
            <Imp>Tailwind CSS</Imp>
          </li>
          <li>
            Backend development using <Imp>NodeJS, ExpressJS</Imp> and <Imp>MongoDB</Imp>.
          </li>
          <li>
            Developed a web application for a client using <Imp>NextJS</Imp> and{' '}
            <Imp>TailwindCSS</Imp>.
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: kodegoImg,
  },
  {
    timeLine: <>February 2020 - May 2020 &middot; 4 mos</>,
    position: 'SOFTWARE ENGINEER',
    company: <>CloudSwyft Global Systems, Inc. &middot; Internship</>,
    description: (
      <StyledDescription>
        Started getting involved with Web Development in a team
        <ul className='ml-4 list-disc text-lg'>
          <li>
            Use <Imp>Angular</Imp> to create components
          </li>
          <li>
            Apply knowledge on <Imp>HTML</Imp> and <Imp>CSS</Imp> to develop web application
          </li>
          <li>
            Participate in daily <Imp>meeting</Imp>
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: cloudswyftImg,
  },
  {
    timeLine: <> May 2013 - April 2016 &middot; 3 yrs</>,
    position: 'IT STAFF',
    company: <>Telford SVC. Phils., Inc. &middot; Full-time</>,
    description: (
      <StyledDescription>
        The start of my Career
        <ul className='ml-4 list-disc text-lg'>
          <li>
            Setup <Imp>network connection</Imp> of workstations
          </li>
          <li>
            Software and hardware <Imp>installations</Imp>
          </li>
          <li>
            <Imp>Maintenance</Imp> of computers, printers and telephones
          </li>
        </ul>
      </StyledDescription>
    ),
    logo: telfordImg,
  },
]

export default experiences
