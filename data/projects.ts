export const projects = [
 {
    id: 1,
    title: 'RideXpress Booking Management',
    description: 'Full-stack MERN application with booking system, booking cart, payment integration, and admin dashboard.',
    category: 'Backend',
    image: '/ride-xpress.png', 
    technologies: ['TypeScript','React', 'Redux Toolkit','passportJs' ,'ShadcnUi' ,'Node.js', 'MongoDB', 'Express' ,],
    frontendlink: 'https://github.com/Subahan-1D/RideXpress-frontend',
    backendlink: 'https://github.com/Subahan-1D/ride-booking-backend',
    liveLink: 'https://ride-xpress-frontend.vercel.app',
  },

   {
    id: 2,
    title: 'Xai Intelligence Workspace',
    description: 'Xai transforms your business data into structured insights with AI-powered analysis and intelligent automation.',
    category: 'Frontend',
    image: '/xai.png',
    technologies: ['Next.js', 'react-three-fiber', 'Tailwind CSS', 'Framer Motion', 'shadcnUi'],
    frontendlink: 'https://github.com/Subahan-1D/Xai-Intelligence-Workspace',
    liveLink: 'https://y-blue-one.vercel.app',
  },
  {
    id: 3,
    title: 'Delicious Restaurant E -Commerce' ,
    description: 'Delicious Restaurant is a full-stack web application designed to facilitate user food ordering while providing an easy management interface for restaurant admins.',
    category: 'Backend',
    image: '/restaurent.png',
    technologies: ['JavaScript','React','daisyUI','Framer Motion','Tailwind CSS','Node.js','MongoDB','Express' ,'stripe'],
    frontendlink: 'https://github.com/Subahan-1D/bistro-marnstack-restaurent-client',
    backendlink: 'https://github.com/Subahan-1D/bistro-marnstack-restaurent-server',
    liveLink: 'https://bistro-boss-restaurant-d1bf8.firebaseapp.com',
  },
   {
    id: 4,
    title: 'Library Management App',
    description: 'Collaborative library management book with real-time updates, user add book, and team collaboration features.',
    category: 'Frontend',
    image: '/library.png',
    technologies: ['Next.js','Redux Toolkit','Tailwind CSS','shadcnUi','Node.js','MongoDB','Express'],
    frontendlink: 'https://github.com/Subahan-1D/library-management-client-api',
    backendlink: 'https://github.com/Subahan-1D/library-management-server-api',
    liveLink: 'https://library-management-client-api.vercel.app',
  },
  {
    id: 5,
    title: 'Grandview Hotel Management',
    description: 'Analytics dashboard for managing multiple social media accounts with real-time metrics and scheduling features.',
    category: 'Full Stack',
    image: '/hotel.png',
    technologies: ['Javascript','React','Tailwind CSS','Node.js','Chart.js','MongoDB','Express'],
    frontendlink: 'https://github.com/Subahan-1D/asset-management-assignment-12-client',
    backendlink: 'https://github.com/Subahan-1D/grandview-mansion-hotels-project-server',
    liveLink: 'https://grandview-hotel-management.web.app',
  },
 
  {
    id: 6,
    title: 'Asset Management System',
    description: 'Asset management streamlines asset management for HR managers and employees alike. With intuitive features tailored to their distinct roles, it offers a seamless experience for tracking, maintaining, and utilizing company assets management',
    category: 'Full Stack',
    image: '/assetmanagement.png',
    technologies: ['Javascript','React','Tailwind CSS','Node.js','Chart.js','MongoDB','Express' ,'stripe'],
    frontendlink: 'https://github.com/Subahan-1D/asset-management-assignment-12-client',
    backendlink: 'https://github.com/Subahan-1D/asset-management-assignment-12-server',
    liveLink: 'https://assignment-assetmanagement.web.app',
  },
 
];

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;         
  technologies: string[];
  link?: string;         
  frontendlink?: string;   
  backendlink?: string;    
  liveLink?: string;       
}