import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  imageAlt?: string;
}

function ProjectCard({ title, description, image, link, imageAlt }: ProjectCardProps) {
  const cardContent = (
    <>
      <img src={image} className="zoom" alt={imageAlt || title}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );

  if (link) {
    return (
      <div className="project">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} className="zoom" alt={imageAlt || title}/>
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className="project">
      {cardContent}
    </div>
  );
}

export default ProjectCard;

