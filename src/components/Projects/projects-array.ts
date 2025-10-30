import docbok from "../../../public/docbook.png"
import apexsport from "../../../public/apexSport.png"
import seven from "../../../public/seven.png"
import infoTech from "../../../public/infoTech.png"

export type ProjectType={

            NameOfProject: string,
            Description: string
            Features: string[]
            ProjectType: string,
            Technologies:string[]
            picture: string,
            TitleColor: string,
            left: boolean,
            repo: string,
            live: string,
  
}


export const projects:ProjectType[] = [
        {
            NameOfProject: 'ApexSport',
            Description: "ApexSport is an sport ecommerce website where admin can make CRUD operation on the products, and users can shop from them.Built using the MERN stack.I developed the Frontend using ReactJS and Tailwind CSS, and implemented the backend using ExpressJS and Mongodb for the database.with a focus on implementing solid principles to ensure a structured and organized codebase.Key features of the app include:",
            Features: [
                'JWT access and refresh token handling for secure authentication.',
                'Implemented responsive design principles to ensure optimal user experience across different devices.',
                'Role management to control user permissions.',
                'Integration with Stripe payment gateway for secure online transactions.'
            ],
            ProjectType: 'FullStack',
            Technologies: ['ReactJS', 'TalwindCSS', 'MongoDb', 'ExpressJs'],
            picture: apexsport,
            TitleColor: 'text-blue-600',
            left: true,
            repo: 'https://github.com/Ayham-A4M/ApexSport-Back-End',
            live: 'https://apex-sport.vercel.app/',
        },
        {
            NameOfProject: 'DocBook',
            Description: 'Developed DocBook, a secure and scalable full-stack web application designed to streamline medical appointment scheduling with multi-role access (Patients, Doctors, and Admin). Built with React.js, Tailwind CSS, and shadcn/ui for a responsive frontend, while the backend leverages Express.js and MongoDB for robust data management',
            Features: [
                'JWT authentication with refresh tokens and token versioning to mitigate security risks.',
                'Dark/light mode toggle for improved accessibility.',
                'Integration with Stripe payment gateway for secure online transactions.',
                `Role management to control user permissions
                    • Patients: Book appointments via cash or online payment (Stripe integration) and consult an AI-powered health assistant powered by Google's Gemini model.
                    • Doctors: Manage appointments, generate medical reports, and view schedules with conflict-free time slots.
                    • Admin: Oversee system analytics via interactive dashboards (pie/line charts), manage users/doctors, and configure system-wide holidays.
                `,
                `Smart Appointment Scheduling
                    • Enforced booking prevention : Patients cannot book overlapping appointments, and doctors cannot have duplicate slots (same date/time). 
                `
            ],
            ProjectType: 'FullStcak',
            Technologies: ['ReactJs', 'TalwindCSS', 'ShadcnUI', 'MongoDb', 'ExpressJs'],
            picture: docbok,
            TitleColor: 'text-[#6495ED]',
            left: false,
            live: 'https://docbook-pi.vercel.app/',
            repo: 'https://github.com/Ayham-A4M/DocBook_FrontEnd'
        },
        {
            NameOfProject: 'InfoTech',
            Description: 'InfoTech is a responsive and visually appealing landing page for a digital marketing agency.I developed it using React.js and used AOS for the animations. Key features of the app include:',
            Features: ['Implemented responsive design principles to ensure optimal user experience across different devices.', 'Beautiful scroll and fade-in animations using AOS library'],
            ProjectType: 'Frontend',
            Technologies: ['ReactJS', 'Talwind CSS'],
            picture: infoTech,
            TitleColor: 'text-violet-500',
            left: true, // true ? mean photos left and information right
            live: 'https://ayham-a4m.github.io/Info-Tech',
            repo: 'https://github.com/Ayham-A4M/Info-Tech',
        },
        {
            NameOfProject: 'Seven',
            Description: 'Seven is a responsive and visually appealing landing page for a digital marketing agency.I developed it using html css js and used AOS for the animations. Key features of the app include:',
            Features: ['Implemented responsive design principles to ensure optimal user experience across different devices.', 'Beautiful scroll and fade-in animations using AOS library'],
            ProjectType: 'Frontend',
            Technologies: ['HTML', 'CSS', 'JavaScript'],
            picture: seven,
            TitleColor: 'text-red-500',
            left: false,
            live: 'https://ayham-a4m.github.io/Seven/',
            repo: 'https://github.com/Ayham-A4M/Seven'
        },



    ]