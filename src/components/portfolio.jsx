import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioitem";
import Title from "./title";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <Title subtitle="Recent software projects and implementations.">
        Featured Projects
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            stack={project.stack}
            github={project.github}
            demo={project.demo}
            demoLabel={project.demoLabel}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
