import pose from "../../assets/pose.png";
import articleSummarizer from "../../assets/sumz.png";
import creator from "../../assets/creator.png";
import news from "../../assets/news.png";
import taskbruin from "../../assets/taskbruin.png";
import study from "../../assets/study.png";

const ProjectList = [
  {
    imgSrc: taskbruin,
    title: "TaskBruin",
    description:
      "TaskBruin is a web application for UCLA students that serves as a centralized hub where a service is listed in exchange for meal swipes. Possible services that can be uploaded include laundry services, arrangements for carpooling or sharing transportation, and food delivery from dining halls. Users are able to create and delete their own tasks, accept and un-accept tasks that other users have created, and view a list of tasks they have created and accepted.",
    stack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    view: "https://taskbruin.vercel.app/",
    code: "https://github.com/xalbd/taskbruin",
  },
  {
    imgSrc: news,
    title: "Sentiment News",
    description:
      "Sentiment News is a web app dedicated to exploring the relationship between financial news article sentiment and the price action of related stocks. The goal of this project was to quantify how positive or negative sentiment in news articles can influence stock price fluctuations. This app creates insights into this phenomenon by analyzing news article sentiment and correlating it with stock price changes.",
    stack: ["Next.js", "Fast API", "PostgreSQL"],
    view: "https://sentiment-news.vercel.app",
    code: "https://github.com/Marvin-Deng/Sentiment-News",
  },
  {
    imgSrc: pose,
    title: "GaitDiagnose",
    description:
      "As a member of the Global Alliance for Medical Innovation (GAMI), I collaborated closely with doctors and professors to cultivate ML models for diagnosing Parkinson's Disease through the analysis of patients' walking patterns. This app offers a cost effective and accessible solution to neurodegenerative disease diagnosis. By utilizing Google's ML library, Mediapipe, the app computes essential gait features from video data, enabling real-time diagnosis.",
    stack: ["Python", "Mediapipe", "Jupyter Notebook"],
    view: "https://github.com/mdeng376/Pose-Estimation",
    code: "https://github.com/mdeng376/Pose-Estimation",
  },
  {
    imgSrc: articleSummarizer,
    title: "Sumz",
    description:
      "Introducing Sumz: your AI-powered article summarizer, skillfully distilling lengthy articles into brief yet insightful summaries. Sumz creates these comprehensive summaries through the integration of Rapid API’s article summarizer API, powered by OpenAI’s ChatGPT 4. Users can effortlessly paste the article's web URL into the search bar, allowing the application to work its magic.",
    stack: ["React.js", "Tailwind CSS", "Redux"],
    view: "https://famous-torrone-676adb.netlify.app",
    code: "https://github.com/mdeng376/AI-Article-Summarizer",
  },
  {
    imgSrc: study,
    title: "StudyBuddy",
    description:
      "Many university students struggle with their classes but don't know who to ask. StudyBuddy is a web app that connects students to other students taking the same classes, allowing users to form study groups with other students. This would streamline the process of connecting struggling students with other students. The app allows students to join study groups, and search for other students, classes, and study groups",
    stack: ["React.js", "Bootstrap", "PostgreSQL"],
    view: "https://github.com/Marvin-Deng/StudyBuddy?tab=readme-ov-file",
    code: "https://github.com/Marvin-Deng/StudyBuddy?tab=readme-ov-file",
  },
  {
    imgSrc: creator,
    title: "Creatorverse",
    description:
      "CreatorVerse is a web application designed to empower users to showcase their favorite content creators. With its user-friendly interface, CreatorVerse makes it easy for users to create, edit, and delete profiles of their favorite content creators. By providing a platform for sharing and discovering talent, Creatorverse enhances the overall content consumption experience",
    stack: ["React.js", "Pico CSS", "PostgreSQL"],
    view: "https://github.com/mdeng376/Creatorverse",
    code: "https://github.com/mdeng376/Creatorverse",
  },
];

export default ProjectList;
