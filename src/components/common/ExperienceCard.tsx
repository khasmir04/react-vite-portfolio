import { ReactNode } from 'react'

const ExperienceCard = ({ timeLine, position, company, description }: { timeLine: ReactNode, position: string, company: ReactNode, description: ReactNode }): JSX.Element => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white border-gray-900 bg-gray-700" />
      <time className="mb-1 text-md font-normal leading-none text-gray-400 text-gray-500">
        {timeLine}
      </time>
      <h3 className="text-2xl font-semibold text-gray-900 text-white">
        {position}
      </h3>
      <p className="text-lg font-normal text-gray-500 text-gray-400">
        {company}
      </p>
      {description}
    </li>
  )
}

export default ExperienceCard