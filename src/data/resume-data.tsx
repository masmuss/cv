import { GitHubIcon } from '../components/icons/GitHubIcon'
import { LinkedInIcon } from '../components/icons/LinkedInIcon'
import { XIcon } from '../components/icons/XIcon'
import BarepapersLogo from '../images/logos/barepapers.svg'
import ConsultlyLogo from '../images/logos/consultly.svg'
import JarockiMeLogo from '../images/logos/jarocki.svg'
import Minimal from '../images/logos/minimal.svg'
import MonitoLogo from '../images/logos/monito.svg'
import ParabolLogo from '../images/logos/parabol.svg'

export const RESUME_DATA = {
	name: 'Ahmad Musafir Khoirul Fattah',
	initials: 'Khoirul',
	location: 'Surabaya, Indonesia',
	locationLink: 'https://www.google.com/maps/place/surabaya',
	about: 'Full Stack Web Deveoper focused on building products with extra attention to details',
	summary:
		'Experienced Full Stack Web Developer with 2 years expertise in TypeScript, React/Next.js, Node.js, Express.js, and Laravel. Led successful projects, fostering optimal team collaboration.',
	avatarUrl: 'https://avatars.githubusercontent.com/u/63689140?v=4',
	personalWebsiteUrl: 'https://khoirul.me',
	contact: {
		email: 'ahmusafir.khoirul@gmail.com',
		tel: '+62859106555503',
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/masmuss',
				icon: GitHubIcon,
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/masmuss/',
				icon: LinkedInIcon,
			},
			{
				name: 'X',
				url: 'https://twitter.com/rexbocho',
				icon: XIcon,
			},
		],
	},
	education: [
		{
			school: 'Electronic Engineering Polytechnic Institute of Surabaya',
			degree: 'Bachelor of Applied Informatics Engineering',
			start: '2021',
			end: 'present',
		},
	],
	work: [
		{
			company: 'EEPIS News and Network Team',
			link: 'https://ent.pens.ac.id',
			badges: ['Fulltime'],
			title: 'Senior Full Stack Web Developer',
			logo: ParabolLogo,
			start: '2021',
			end: 'present',
			description:
				'Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, Vue, TypeScript, Laravel, MySQL',
		},
	],
	skills: [
		'JavaScript',
		'TypeScript',
		'React/Next.js',
		'Node.js',
		'Express.js',
		'PHP',
		'Laravel',
		'MongoDB',
		'MySQL',
		'Websocket',
		'RESTful API',
	],
	projects: [
		{
			title: 'Pixels and Progress.',
			techStack: ['Side Project', 'TypeScript', 'Next.js', 'Sanity'],
			description:
				'A personal website and blog. Built with Next.js and Sanity CMS',
			logo: ConsultlyLogo,
			link: {
				label: 'khoirul.me',
				href: 'https://khoirul.me/',
			},
		},
		{
			title: 'IdeaHive',
			techStack: [
				'Laravel',
				'Livewire',
				'Alpine.js',
				'MySQL',
				'Flutter',
				'React',
				'EDD',
			],
			description:
				'IdeaHive: Mind-mapping app by PENS Agile PBL and Agileteknik, Laravel, MySQL, Flutter-powered.',
			logo: MonitoLogo,
			link: {
				label: 'ideahive.agileteknik.com',
				href: 'https://ideahive.agileteknik.com/',
			},
		},
		{
			title: 'A Journey',
			techStack: ['Side Project', 'Next.js', 'MDX'],
			description:
				'My personal blog. Written in Indonesian. Built with Next.js and MDX.',
			logo: JarockiMeLogo,
			link: {
				label: 'journey.khoirul.me',
				href: 'https://journey.khoirul.me/',
			},
		},
		{
			title: 'PENS Aquaculture',
			techStack: [
				'Side Project',
				'Next.js',
				'Express.js',
				'MongoDB',
				'Websocket',
			],
			description:
				'Enhanced version with real-time IoT monitoring (Express.js, MongoDB, socket.io), Next.js frontend, and TensorFlow water quality classification.',
			logo: Minimal,
			link: {
				label: 'aquaculturepens.com',
				href: 'https://aquaculturepens.com/',
			},
		},
		{
			title: 'Media ENT',
			techStack: ['Side Project', 'Laravel', 'Inertia.js', 'Vue', 'MySQL'],
			description:
				'MediaENT: Information and collaboration portal of the ENT PENS team, inspiring and interactive.',
			logo: BarepapersLogo,
			link: {
				label: 'ent.pens.ac.id',
				href: 'https://ent.pens.ac.id/mediaent/',
			},
		},
	],
} as const
