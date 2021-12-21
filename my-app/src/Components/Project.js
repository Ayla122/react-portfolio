// titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import React from "react";

function Project(props) {
    return (
        <div>
            {props.projects.map((project) => (
                <div>
                    <div>
                        <figure>
                            <a href={project.live} target="_blank" rel="noreferrer">
                                <img className="img"src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                            </a>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left"></div>
                            <div className="media-content">
                                <p className="title is-4" key={project.id}>
                                    {project.title}
                                </p>
                            </div>
                        </div>

                        <div className="content has-text-left">
                            {project.description}
                            <br />
                            <br />
                            <div className="card">
                                <footer className="card-footer">
                                    <a
                                        href={project.repo}
                                        className="card-footer-item"
                                        target="_blank" rel="noreferrer"
                                    >
                                        Repo
                                    </a>
                                    <br />
                                    <a
                                        href={project.live}
                                        className="card-footer-item"
                                        target="_blank" rel="noreferrer"
                                    >
                                        Live Site
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default Project;
