
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const EDUCATION=[
    {
        year:"2015-2016",
        title:"Class X",
        institute:"H.A.L. School Korwa",
        grade:"9.6 CGPA"

    },
    {
        year:"2017-2018",
        title:"Class XII",
        institute:"H.A.L. School Korwa",
        grade:"80%"

    },
    {
        year:"2020-2024",
        title:"B.Tech (Computer Science and Technology) ",
        institute:"Inderprastha Engineering College",
        grade:"7.26 CGPA"

    }
]
export const PROJECTS=[
    {
        title:"Personal Portfolio",
        image:project1,
        description:"A personal portfolio website showcasing projects, skills and contact information.",
        technologies:["ReactJS","TailwindCSS","Framer-Motion"]
    },
    {
        title:"Home-Axil",
        image:project2,
        description:"A Landing page for an interior decoration organization, designed and developed using Reactjs, Shadcn and Framer-Motion. It is being deployed and distributed using AWS cloudfront and S3 object storage making it highly available and cacheable application. ",
        technologies:["ReactJS","Shadcn-UI","TailwindCSS","Framer-Motion","Cloudfront","AWS S3"]
    },
    {
        title:"Easily",
        image:project3,
        description:"A MVC Architecture based node application which is serving as a job portal where different users can find job for themselves and different recruiters can post their jobs according to their requirements. It is using EJS for server side rendering, MongoDb for database operations and JWT Auth for authentication and authorizing users according to their role.",
        technologies:["Nodejs","EJS","MongoDB","JWT","TailwindCSS"]
    },
    {
        title:"Postaway",
        image:project4,
        description:"A social media platform RESTAPI built using Express.js, designed to enable users to perform various social networking activities such as registration, authentication, post creation, commenting, liking, and more.",
        technologies:["Express.js","JWT","bcryptjs","Multer","Swagger"]
    }
]