import "./TechCard.css";
import TechList from "./TechList";
import TechCard from "./TechCard";

const TechDisplay = () => {
    return (
        <div>
            <div className="card-container">
                {TechList.map((val, idx) => {
                    return (
                        <TechCard
                            key={idx}
                            title={val.title}
                            icon={val.icon}
                            description={val.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TechDisplay