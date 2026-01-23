import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioitem";
import Title from "./title";

function Portfolio() {
  return (
    <div className="text-center my-8">
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center mx-2">
        <div className={`grid gap-4 ${
          portfolio.length === 1 
            ? "grid-cols-1 place-items-center w-full max-w-sm" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
        }`}>
          {portfolio.map((project, index) => (
            <div key={index} className="w-full max-w-sm">
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                alt={project.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;