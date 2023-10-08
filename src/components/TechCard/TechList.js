import { FaReact, FaNodeJs, FaPython, FaApple} from "react-icons/fa";

const TechList = [
    {
        title: "- Frontend -",
        icon: <FaReact size={40}/>,
        description: 'Experience with frontend frameworks and CSS libraries / design tools',
    },
    {
        title: "- Backend -",
        icon: <FaNodeJs size={40}/>,
        description: 'Experience with various backend arcitectures and servers'
    },
    {
        title: "- Mobile Development -",
        icon: <FaApple size={40}/>,
        description: 'Experience with IOS and Android development',
    },
    {
        title: "- Machine Learning -",
        icon: <FaPython size={40}/>,
        description: 'Experience with building neural networks, machien learning models, and hyperparamter tuning',
    }
]

export default TechList;