import { FaReact, FaNodeJs, FaPython, FaApple, FaFigma } from "react-icons/fa";

const TechList = [
    {
        title: "- Frontend -",
        icon: <FaReact size={40}/>,
        description: "Experience with React.js and Vue.js",
    },
    {
        title: "- Backend -",
        icon: <FaNodeJs size={40}/>,
        description: "Experience with MongoDB, Node.js, Express.js, Flask, and SQL",
    },
    {
        title: "- Mobile Development -",
        icon: <FaApple size={40}/>,
        description: "Experience with IOS and Android development",
    },
    {
        title: "- Machine Learning -",
        icon: <FaPython size={40}/>,
        description: "Experience with Python Notebooks, ML Libraries, and Data Pipelines",
    },
    {
        title: "- UI/UX -",
        icon: <FaFigma size={40}/>,
        description: "Experience with design tools such as Figma",
    }
]

export default TechList;