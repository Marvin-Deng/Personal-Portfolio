import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { FaGlobeAmericas, FaBrain } from "react-icons/fa";

export const timelineElements = [
    {
        title: 'Codepath WEB103',
        subtitle: 'Advanced Web Development',
        date: 'September 2023',
        icon: <SchoolIcon />,
        content: 'Co-led a team of 6 students to develop full-stack web applications',
    },
    {
        title: 'Pullscription',
        subtitle: 'Backend Software Engineering Intern',
        date: 'June 2023',
        icon: <WorkIcon />,
        content: 'Designed and developed a RESTful API in Node.js and Express.js and implemented endpoints with SQL queries',
    },
    {
        title: 'Global Alliance for Medical Innovation',
        subtitle: 'Software Engineering Intern',
        date: 'May 2023',
        icon: <FaGlobeAmericas />,
        content: 'Extracted and calculated gait features from pose estimation video data for use in neurodegenerative disease diagnosis',
    },
    {
        title: 'Association of Computing Machinery (ACM AI)',
        date: 'January 2023',
        icon: <FaBrain />,
        content: 'Developed a CNN to classify plant diseases into four different categories of severity, achieving 95% accuracy',
    },
    {
        title: 'CruX UCLA (Neurotech Organization)',
        date: 'September 2022',
        icon: <FaBrain />,
        content: 'Worked with brain-computer interface devices enabling people to interact directly with technology via brain wave signals',
    },
    {
        title: 'Began my journey at UCLA!',
        date: 'September 2022',
        icon: <SchoolIcon />,
    },
];