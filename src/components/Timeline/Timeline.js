import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineElements } from "./TimelineElements"; 

const Timeline = () => {
  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{ 
            background: 'rgb(0, 0, 0, 0)', 
            color: '#fff' 
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
          date={element.date}
          iconStyle={{ 
            background: 'rgb(0, 0, 0)', 
            color: '#fff' 
          }}
          icon={element.icon}
        >
          <h3>{element.title}</h3>
          <h4>{element.subtitle}</h4>
          <p>{element.content}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default Timeline;
