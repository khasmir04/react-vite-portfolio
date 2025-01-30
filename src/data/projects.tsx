import cusinaImg from '../assets/img/cusina.png'
import eduKaImg from '../assets/img/eduka.png'
import gamingInfo from '../assets/img/gaming.png'
import valorantImg from '../assets/img/valorant.png'
import martImg from '../assets/img/mart.png'
import modelViewerImg from '../assets/img/model.png'

const projects = [
  {
    title: 'Cusina',
    description: 'Responsive web design with a mobile-first approach.',
    image: cusinaImg,
    githubUrl: 'https://github.com/khasmir04/Cusina',
    liveUrl: 'https://www.khasmir.top/Cusina/',
    tech: ['HTML', 'CSS', 'Javascript', 'Design'],
  },
  {
    title: 'EduKa',
    description: 'Design for an education management platform with auth pages.',
    image: eduKaImg,
    githubUrl: 'https://github.com/khasmir04/eduka',
    liveUrl: 'https://eduka-khasmir04.vercel.app/',
    tech: ['Next.js', 'Tailwind CSS', 'Design', 'Javascript'],
  },
  {
    title: 'Mart App',
    description: 'E-commerce mockup site for SnapMart - with cart.',
    image: martImg,
    githubUrl: 'https://github.com/khasmir04/snapmart',
    liveUrl: 'https://snapmart-blond.vercel.app/',
    tech: ['Next.js', 'Tailwind CSS', 'Redux', 'Typescript'],
  },
  {
    title: 'Game On',
    description: 'Gaming news site using API for latest updates.',
    image: gamingInfo,
    githubUrl: 'https://github.com/khasmir04/gaming-info-site',
    liveUrl: 'https://gaming-info-website-three.vercel.app/',
    tech: ['React', 'Tailwind CSS', 'Rapid API', 'Javascript'],
  },
  {
    title: '3D Model Viewer',
    description: 'View 3D objects with this simple app.',
    image: modelViewerImg,
    githubUrl: 'https://github.com/khasmir04/model-viewer-react',
    liveUrl: 'https://model-viewer-react-drab.vercel.app/',
    tech: ['ThreeJS', 'React', '3D'],
  },
  {
    title: 'Valorant Memory Game',
    description: 'Photo memory game with a Valorant theme.',
    image: valorantImg,
    githubUrl: 'https://github.com/khasmir04/Valorant-Memory-Game',
    liveUrl: 'https://www.khasmir.top/Valorant-Memory-Game/public/index.html',
    tech: ['SCSS', 'Javascript', 'HTML'],
  },
]

export default projects
