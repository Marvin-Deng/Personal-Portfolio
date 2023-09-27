import pose from "../../assets/pose.png";
import articleSummarizer from "../../assets/sumz.png";
import creator from "../../assets/creator.png";

const ProjectList = [
    {
        imgSrc: pose,
        title: "GaitDiagnose",
        description: "As a member of the Global Alliance for Medical Innovation (GAMI), I collaborated closely with doctors and professors to cultivate ML models for diagnosing Parkinson's Disease through the analysis of patients' walking patterns. This app offers a cost effective and accessible solution to neurodegenerative disease diagnosis. By utilizing Google's ML library, Mediapipe, the app computes essential gait features from video data, enabling real-time diagnosis.",        
        stack: ["Mediapipe", "Jupyter Notebook", "SwiftUI"],
        view: "https://github.com/mdeng376/Pose-Estimation",
        code: "https://github.com/mdeng376/Pose-Estimation",
    },
    {
        imgSrc: articleSummarizer,
        title: "Sumz",
        description: "Introducing Sumz: your AI-powered article summarizer, skillfully distilling lengthy articles into brief yet insightful summaries. Sumz creates these comprehensive summaries through the integration of Rapid API’s article summarizer API, powered by OpenAI’s ChatGPT 4. Users can effortlessly paste the article's web URL into the search bar, allowing the application to work its magic.",
        stack: ["Vite.js", "Tailwind CSS", "Redux"],
        view: "https://famous-torrone-676adb.netlify.app",
        code: "https://github.com/mdeng376/AI-Article-Summarizer",
    },
    {
        imgSrc: creator,
        title: "Creatorverse",
        description: "CreatorVerse is a web application designed to empower users to showcase their favorite content creators. With its user-friendly interface, CreatorVerse makes it easy for users to create, edit, and delete profiles of their favorite content creators. By providing a platform for sharing and discovering talent, Creatorverse enhances the overall content consumption experience",
        stack: ['Vite.js', 'Postgres', 'Pico CSS'],
        view: "https://github.com/mdeng376/Creatorverse",
        code: "https://github.com/mdeng376/Creatorverse",
    }
]

export default ProjectList;