import data from "./data";

export default function Projects() {
    return (
      <section id="projects">
            <h1 className="text-light text-center fw-bold display-2">Projects</h1>
            <div className="d-flex flex-wrap px-4">
                {data.map((proj) => {
                    const { id, nm, tech, live, rep } = proj;
                    return (
                      <div key={id} className="w-50 mb-5 rounded border py-5 text-light d-flex flex-column align-items-center">
                        <h2 className="fw-bold">Project name : {nm} </h2>
                        <h3 className="my-5">Techs used : {tech} </h3>
                        <div className="d-flex justify-content-evenly w-75">
                            <button className="btn btn-dark w-25 py-3">
                              <a
                                href={live}
                                target="_blank"
                                className="text-light text-decoration-none"
                              >
                                Live Preview
                              </a>
                            </button>
                            <button className="btn btn-dark w-25 py-3">
                              <a
                                href={rep}
                                target="_blank"
                                className="text-light text-decoration-none"
                              >
                                Github Repository
                              </a>
                            </button>
                        </div>
                      </div>
                    );
                })}
            </div>
      </section>
    );
}