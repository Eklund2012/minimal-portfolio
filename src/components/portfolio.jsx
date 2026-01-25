import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioitem";
import Title from "./title";

function Portfolio() {
  return (
    <div className="text-center my-8 px-4">
      <Title>Projects</Title>
      <div className="flex justify-center">
        <div className={`grid gap-4 ${
          portfolio.length === 1 
            ? "grid-cols-1 w-full max-w-sm" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}>
          {portfolio.map((project, index) => (
            <PortfolioItem
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;