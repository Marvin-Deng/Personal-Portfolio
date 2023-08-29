import pose from "../../assets/pose.png";
import articleSummarizer from "../../assets/sumz.png";

const ProjectList = [
    {
        imgSrc: pose,
        title: "GaitDiagnose",
        description: "As a member of the Global Alliance for Medical Innovation (GAMI), I collaborated closely with doctors and professors to cultivate machine learning models aimed at detecting Parkinson's Disease through the analysis of patients' walking patterns. GaitDiagnose is an iOS application which offers a cost effective and accessible alternative to neurodegenerative disease diagnosis. The app leverages Google’s computer vision library, Mediapipe, to extract essential gait features from video data, enabling real-time diagnosis.",
        stack: ["XCode", "Jupyter Notebook", "SwiftUI"],
        view: "https://github.com/mdeng376/Pose-Estimation",
        code: "https://github.com/mdeng376/Pose-Estimation",
    },
    {
        imgSrc: articleSummarizer,
        title: "Sumz",
        description: "Introducing Sumz: your AI-powered article summarizer, skillfully distilling lengthy articles into brief yet insightful summaries. Sumz creates these comprehensive summaries through the integration of Rapid API’s article summarizer API, powered by OpenAI’s ChatGPT 4. Users can effortlessly paste the article's web URL into the search bar, allowing the application to work its magic. Sumz also maintains a complete history of all previously summarized articles, increasing accessibility and convenience.",
        stack: ["Vite.js", "Tailwind CSS", "Redux"],
        view: "https://famous-torrone-676adb.netlify.app",
        code: "https://github.com/mdeng376/AI-Article-Summarizer",
    },
    {
        imgSrc: articleSummarizer,
        title: "Creatorverse",
        description: "CreatorVerse is a web application designed to empower users to showcase and curate their favorite content creators from various online platforms. With its user-friendly interface, CreatorVerse makes it easy for users to create, edit, and delete profiles of their favorite content creators. Users can create detailed profiles for their favorite content creators, which include name, bio, profile picture, and social media links. Users can easily edit existing profiles to keep information up-to-date or delete profiles if their preferences change. By providing a platform for sharing and discovering talent, Creatorverse enhances the overall content consumption experience and helps creators gain more recognition for their work.",
        stack: ['Vite.js', 'Supabase', 'Pico CSS'],
        view: "https://github.com/mdeng376/Creatorverse",
        code: "https://github.com/mdeng376/Creatorverse",
    }
]

export default ProjectList;