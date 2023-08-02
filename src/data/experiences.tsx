import styled from 'styled-components';

const StyledDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #e5e7eb;
`

const Imp = styled.span`
  color: #EB8258;
`

const experiences = [
  {
    timeLine: <>AUGUST 2021 - Present &middot; 1 yr 8 mos</>,
    position: 'MIDDLE SOFTWARE ENGINEER',
    company: <>TERP &middot; Full-time</>,
    description:
      <StyledDescription>
        Working for almost 2 years as a Front-End React Developer.
        <ul className='text-lg list-disc ml-4'>
          <li>Work on a project built using <Imp>ReactJS</Imp></li>
          <li>Use <Imp>TypeScript</Imp> as main scripting language for development</li>
          <li>Create components using <Imp>tsx</Imp>, <Imp>styled-components, html</Imp> and <Imp>css</Imp></li>
          <li>Update <Imp>documentation</Imp> for API types</li>
          <li>Create and report <Imp>tickets</Imp> for tasks</li>
          <li>Participate on <Imp>design</Imp> meeting and <Imp>planning</Imp></li>
          <li><Imp>Maintaining & improving</Imp> web app</li>
        </ul>
      </StyledDescription>
  },
  {
    timeLine: <>April 2021 - July 2021 &middot; 4 mos</>,
    position: 'WEB DEVELOPER TRAINEE',
    company: <>KodeGo &middot; Contract</>,
    description:
      <StyledDescription>
        Learned about web development and how to build a web application.
        <ul className='text-lg list-disc ml-4'>
          <li>Dived deep into <Imp>HTML, CSS</Imp> and <Imp>JS</Imp>.</li>
          <li>Learned how to use <Imp>ReactJS</Imp> and <Imp>NextJS</Imp>.</li>
          <li>Practiced different CSS frameworks such as <Imp>Bootstrap</Imp> and <Imp>Tailwind CSS</Imp></li>
          <li>Backend development using <Imp>NodeJS, ExpressJS</Imp> and <Imp>MongoDB</Imp>.</li>
          <li>Developed a web application for a client using <Imp>NextJS</Imp> and <Imp>TailwindCSS</Imp>.</li>
        </ul>
      </StyledDescription>
  },
  {
    timeLine: <>February 2020 - May 2020 &middot; 4 mos</>,
    position: 'SOFTWARE ENGINEER',
    company: <>CloudSwyft Global Systems, Inc. &middot; Internship</>,
    description:
      <StyledDescription>
        Started getting involved with Web Development in a team
        <ul className='text-lg list-disc ml-4'>
          <li>Use <Imp>Angular</Imp> to create components</li>
          <li>Apply knowledge on <Imp>HTML</Imp> and <Imp>CSS</Imp> to develop web application</li>
          <li>Participate in daily <Imp>meeting</Imp></li>
        </ul>
      </StyledDescription>
  },
  {
    timeLine: <> May 2013 - April 2016 &middot; 3 yrs</>,
    position: 'IT STAFF',
    company: <>Telford SVC. Phils., Inc. &middot; Full-time</>,
    description:
      <StyledDescription>
        The start of my Career
        <ul className='text-lg list-disc ml-4'>
          <li>Setup <Imp>network connection</Imp> of workstations</li>
          <li>Software and hardware <Imp>installations</Imp></li>
          <li><Imp>Maintenance</Imp> of computers, printers and telephones</li>
        </ul>
      </StyledDescription>
  }
]

export default experiences
