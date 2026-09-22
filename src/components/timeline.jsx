import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./timelineitem";
import Title from "./title";

function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <Title subtitle="Academic degrees and coursework in Computer Science.">
        Education Timeline
      </Title>

      <div className="mt-6 ml-2">
        <ol className="relative border-l border-white/[0.1] ml-2">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
