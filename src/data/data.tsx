import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import dolomitesImage from '../images/header-background-dolomites.webp';
import markTwain from '../images/mark-twain.jpg';
import porfolioImage1 from '../images/portfolio/portofolio-2-apm.jpg';
import porfolioImage7 from '../images/portfolio/portofolio-7-rest.jpg';
import porfolioImage8 from '../images/portfolio/portofolio-8-spring.jpg';
import porfolioImage9 from '../images/portfolio/portofolio-9-microservices.jpg';
import porfolioImage10 from '../images/portfolio/portofolio-10-java.jpg';
import porfolioImage11 from '../images/portfolio/portofolio-11-openshift.jpg';
import porfolioImage12 from '../images/portfolio/portofolio-12-splunk.jpg';
import porfolioImage13 from '../images/portfolio/portofolio-13-swagger.jpg';
import porfolioImage14 from '../images/portfolio/portofolio-14-openapi.jpg';
import porfolioImage15 from '../images/portfolio/portofolio-15-sysdig.jpg';
import porfolioImage16 from '../images/portfolio/portofolio-16-cloudbees.jpg';
import porfolioImage17 from '../images/portfolio/portofolio-17-git.jpg';
import porfolioImage18 from '../images/portfolio/portofolio-18-cassandra.jpg';
import porfolioImage19 from '../images/portfolio/portofolio-19-postgresql.jpg';
import porfolioImage20 from '../images/portfolio/portofolio-20-safe.jpg';
import porfolioImage21 from '../images/portfolio/portofolio-21-maven.jpg';
import porfolioImage22 from '../images/portfolio/portofolio-22-sql.jpg';
import porfolioImage23 from '../images/portfolio/portofolio-23-kafka.jpg';
import porfolioImage24 from '../images/portfolio/portofolio-24-kubernetes.jpg';
import porfolioImage25 from '../images/portfolio/portofolio-25-copilot.jpg';
import porfolioImage26 from '../images/portfolio/portofolio-26-intellij.jpg';
import profilepic from '../images/profilepic.jpg';
import inspirationImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  InspirationSection,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Inspiration: 'inspiration',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: dolomitesImage,
  name: `Hello, I'm Andrei.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Cluj-Napoca based <strong className="text-stone-100">Java Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Endava</strong> helping to build a modern, microservice platform, for one of
        the biggest payment gateways in the world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">taking photos</strong>, strumming my{' '}
        <strong className="text-stone-100">guitar</strong>, or exploring the{' '}
        <strong className="text-stone-100">mountains</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume/Andrei-Prigoana-CV-Resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description1: <> I am a Java developer with hands-on experience in the <strong className="text-stone-100">Fintech industry</strong>, 
  specializing in the development and integration of <strong className="text-stone-100">alternative payment solutions and gateways such as PayPal, 
  dLocal or Bizum.</strong> I deliver end-to-end solutions across both legacy systems and modern microservice architectures, 
  ensuring seamless performance and scalability. </>,

  description2: <> My work spans the <strong className="text-stone-100">full product lifecycle</strong>, 
  from design and development to deployment and ongoing support. I play an active role in maintaining 
  <strong className="text-stone-100"> 24/7 availability for live services</strong>, ensuring high reliability
   and responsiveness in production environments.` </>,

  description3: <> I work with a broad set of technologies, including <strong className="text-stone-100">Java, Spring, REST APIs, Kafka, relational 
  and non-relational databases</strong>, as well as container orchestration platforms like <strong className="text-stone-100">Kubernetes and OpenShift.</strong></>,

  aboutItems: [
    {label: 'Location', text: 'Cluj-Napoca, Romania', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech, sports, nature, music', Icon: SparklesIcon},
    {label: 'Study', text: 'Technical University of Cluj-Napoca', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Endava', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Technical',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Spring',
        level: 10,
      },
      {
        name: 'Security',
        level: 8,
      },
      {
        name: 'Databases',
        level: 8,
      },
      {
        name: 'Openshift',
        level: 9,
      },
    ],
  },
  {
    name: 'Soft',
    skills: [
      {
        name: 'Communication',
        level: 10,
      },
      {
        name: 'Help others',
        level: 9,
      },
      {
        name: 'Multitasking',
        level: 10,
      },
      {
        name: 'Adaptability',
        level: 10,
      },
      {
        name: 'Time management',
        level: 10,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '',
    description: '',
    url: 'https://www.checkout.com/blog/what-are-alternative-payment-methods',
    image: porfolioImage1,
  },
  {
    title: '',
    description: '',
    url: 'https://restfulapi.net/',
    image: porfolioImage7,
  },
  {
    title: '',
    description: '',
    url: 'https://spring.io/',
    image: porfolioImage8,
  },
  {
    title: '',
    description: '',
    url: 'https://www.java.com/',
    image: porfolioImage10,
  },
  {
    title: '',
    description: '',
    url: 'https://www.geeksforgeeks.org/system-design/microservices/',
    image: porfolioImage9,
  },
  {
    title: '',
    description: '',
    url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift',
    image: porfolioImage11,
  },
  {
    title: '',
    description: '',
    url: 'https://www.splunk.com/',
    image: porfolioImage12,
  },
  {
    title: '',
    description: '',
    url: 'https://swagger.io/',
    image: porfolioImage13,
  },
  {
    title: '',
    description: '',
    url: 'https://www.openapis.org/',
    image: porfolioImage14,
  },
  {
    title: '',
    description: '',
    url: 'https://www.sysdig.com/',
    image: porfolioImage15,
  },
  {
    title: '',
    description: '',
    url: 'https://www.cloudbees.com/',
    image: porfolioImage16,
  },
  {
    title: '',
    description: '',
    url: 'https://git-scm.com/',
    image: porfolioImage17,
  },
  {
    title: '',
    description: '',
    url: 'https://cassandra.apache.org/',
    image: porfolioImage18,
  },
  {
    title: '',
    description: '',
    url: 'https://www.postgresql.org/',
    image: porfolioImage19,
  },
  {
    title: '',
    description: '',
    url: 'https://www.atlassian.com/agile/agile-at-scale/what-is-safe',
    image: porfolioImage20,
  },
  {
    title: '',
    description: '',
    url: 'https://maven.apache.org/',
    image: porfolioImage21,
  },
  {
    title: '',
    description: '',
    url: 'https://www.mysql.com/',
    image: porfolioImage22,
  },
  {
    title: '',
    description: '',
    url: 'https://kafka.apache.org/',
    image: porfolioImage23,
  },
  {
    title: '',
    description: '',
    url: 'https://kubernetes.io/',
    image: porfolioImage24,
  },
  {
    title: '',
    description: '',
    url: 'https://github.com/features/copilot',
    image: porfolioImage25,
  },
  {
    title: '',
    description: '',
    url: 'https://www.jetbrains.com/idea/',
    image: porfolioImage26,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2019 - Present',
    location: 'Endava',
    title: 'Java Developer',
    content: (
      <>
        At Endava, I contribute to the development and evolution of one of the world's leading payment gateways,
        supporting a modern microservice architecture that will handle over 200 payment methods globally.
        <br></br>
        <br></br>
        As part of a platform-focused & end-to-end engineering team, I've been deeply involved in solving a variety of
        cross-cutting concerns, including:
        <li>
          Developing and maintaining shared libraries and a standardized service accelerator template for consistent and
          rapid service delivery
        </li>
        <li>Implementing centralized logging, distributed tracing, aggregated metrics, and observability standards</li>
        <li>
          Designing and enforcing security, fault/latency tolerance, configuration management, load balancing, and
          service discovery patterns across the ecosystem
        </li>
        <li>
          Ensure application security and compliance through the use of Black Duck (open source vulnerability scanning)
          and Checkmarx (static application security testing)
        </li>
        <li>
          Ensure code quality and maintainability by integrating SonarQube into our pipelines and reviewing at each
          build static analysis results and also using in my daily work AI plugin such as GitHub Copilot.
        </li>
        <br></br>
        To support independent deployments and frequent releases, I was involved in creating a robust CI/CD pipeline,
        enabling automated delivery of both services and libraries across multiple environments. This involved working
        with tools such as Jenkins, Cloudbees or Openshift. Alongside this platform work.
        <br></br>
        <br></br>
        I’m also actively involved in maintaining and enhancing our legacy payment gateway, ensuring business continuity
        while enabling seamless integration with the microservice architecture.
        <br></br>
        <br></br>
        My work covers the full product lifecycle, from design and development to deployment and ongoing operations. I
        actively contribute to maintaining 24/7 availability for production services by leveraging custom made Splunk
        dashboards and alerts for real-time monitoring, and using Sysdig for system-level insights and troubleshooting.
        <br></br>
        <br></br>
        In addition to my technical contributions, I’m engaged in several initiatives that support our team and
        organization:
        <li>Technical interviewer for engineering candidates</li>
        <li>1:1 mentor for interns as part of Endava’s internship program</li>
        <li>
          Participate in Agile ceremonies and planning sessions, including PI Planning, Iteration Planning, and System
          Demos, following the SAFe (Scaled Agile Framework) methodology to ensure alignment and continuous delivery
          across teams
        </li>
      </>
    ),
  },
  {
    date: 'July 2017 - September 2017',
    location: 'Garmin',
    title: 'Java Intern',
    content: (
      <p>
        As a Java Intern, I was part of an Agile development team responsible for the development and maintenance of
        Garmin’s website. My work focused on backend tasks using Java and the Spring framework. I actively participated
        in Agile ceremonies such as sprint planning and retrospectives, collaborated with the testing team to ensure
        code quality, and received one-on-one mentorship to enhance my technical and professional development.
      </p>
    ),
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014 - 2018',
    location: 'Computer Science',
    title: 'Technical University of Cluj-Napoca',
    content: (
      <>
        Coursework in programming, algorithms, databases, and operating systems. Gained hands-on experience
        with software development, data structures, and web technologies.
        <br></br>
        <br></br>
        Key Skills:
        <li>Object-Oriented Programming</li>
        <li>Algorithms & Data Structures</li>
        <li>Relational Databases (SQL)</li>
        <li>Operating Systems & Computer Architecture</li>
        <li>Web Development (HTML/CSS/JS, frameworks)</li>
        <li>Version Control (Git)</li>
        <li>Agile / Scrum methodology</li>
      </>
    ),
  },
];

/**
 * Inspiration section
 */
export const testimonial: InspirationSection = {
  imageSrc: inspirationImage,
  inspiration: [
    {
      name: 'Mark Twain',
      text: 'The two most important days in your life are the day you are born and the day you find out why.',
      image: markTwain,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Feel free to reach out via Email or LinkedIn for opportunities, collaborations, or technical discussions.',
  items: [
    {
      type: ContactType.Email,
      text: 'andreiprigoanag@gmail.com',
      href: 'mailto:andreiprigoanag@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Cluj-Napoca, Romania',
      href: 'https://maps.app.goo.gl/p8R2rVzfSJZfyxfB9',
    },
    {
      type: ContactType.Github,
      text: 'andreiprigoana',
      href: 'https://github.com/andreiprigoana',
    },
    {
      type: ContactType.Instagram,
      text: '@andreiprigoana',
      href: 'https://www.instagram.com/andreiprigoana/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/andreiprigoana'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/andrei-prigoan%C4%83-314281110/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/andreiprigoana/'},
];
