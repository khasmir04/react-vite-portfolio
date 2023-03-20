import styled from 'styled-components'
import PageTitle from '../common/PageTitle'

const StyledContainer = styled.div`
  margin: auto;
  /* height: 100vh; */
  padding: 24px;
`

const StyledDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #e5e7eb;
`

const Imp = styled.span`
  color: #EB8258;
`

const Experience = () => {
  return (
    <StyledContainer id='experience' className='text-left'>
      <PageTitle title='Experience' />
      <div className='mt-9'>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              AUGUST 2021 - Present &middot; 1 yr 8 mos
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              MIDDLE SOFTWARE ENGINEER
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              TERP &middot; Full-time
            </p>
            <StyledDescription>
              Working for almost 2 years as a Front-End React Developer.
              <ul className='text-base list-disc ml-4'>
                <li>Work on a project built using <Imp>ReactJS</Imp></li>
                <li>Use <Imp>TypeScript</Imp> as main scripting language for development</li>
                <li>Create components using <Imp>tsx</Imp>, <Imp>styled-components, html</Imp> and <Imp>css</Imp></li>
                <li>Update <Imp>documentation</Imp> for API types</li>
                <li>Create and report <Imp>tickets</Imp> for tasks</li>
                <li>Participate on <Imp>design</Imp> meeting and <Imp>planning</Imp></li>
                <li><Imp>Maintaining & improving</Imp> web app</li>
              </ul>
            </StyledDescription>
            {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a> */}
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2021 - July 2021 &middot; 4 mos
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              WEB DEVELOPER TRAINEE
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              KodeGo &middot; Contract
            </p>
            <StyledDescription>
              Learned about web development and how to build a web application.
              <ul className='text-base list-disc ml-4'>
                <li>Dived deep into <Imp>HTML, CSS</Imp> and <Imp>JS</Imp>.</li>
                <li>Learned how to use <Imp>ReactJS</Imp> and <Imp>NextJS</Imp>.</li>
                <li>Practiced different CSS frameworks such as <Imp>Bootstrap</Imp> and <Imp>Tailwind CSS</Imp></li>
                <li>Backend development using <Imp>NodeJS, ExpressJS</Imp> and <Imp>MongoDB</Imp>.</li>
                <li>Developed a web application for a client using <Imp>NextJS</Imp> and <Imp>TailwindCSS</Imp>.</li>
              </ul>
            </StyledDescription>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2020 - May 2020 &middot; 4 mos
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              SOFTWARE ENGINEER
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              CloudSwyft Global Systems, Inc. &middot; Internship
            </p>
            <StyledDescription>
              <ul className='text-base list-disc ml-4'>
                <li>Use <Imp>Angular</Imp> to create components</li>
                <li>Apply knowledge on <Imp>HTML</Imp> and <Imp>CSS</Imp> to develop web application</li>
                <li>Participate in daily <Imp>meeting</Imp></li>
              </ul>
            </StyledDescription>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2013 - April 2016 &middot; 3 yrs
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              IT STAFF
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Telford SVC. Phils., Inc. &middot; Full-time
            </p>
            <StyledDescription>
              <ul className='text-base list-disc ml-4'>
                <li>Setup <Imp>network connection</Imp> of workstations</li>
                <li>Software and hardware <Imp>installations</Imp></li>
                <li><Imp>Maintenance</Imp> of computers, printers and telephones</li>
              </ul>
            </StyledDescription>
          </li>
        </ol>
      </div>
    </StyledContainer>
  )
}

export default Experience