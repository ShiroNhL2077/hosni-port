import data from "./data";

export default function Projects() {
    return (
      <section id="projects">
            <h1 className="text-light text-center fw-bold display-2">Projects</h1>
            <div className="d-flex flex-lg-wrap px-4 flex-column flex-lg-row align-items-center">
                {data.map((proj) => {
                    const { id, nm, tech, live, rep } = proj;
                    return (
                      <div
                        key={id}
                        className="w-lg-50 text-center w-75 mb-5 rounded border py-5 px-4 text-dark bg-light d-flex flex-column align-items-center"
                      >
                        <h2 className="fw-bold">
                          Project name : <span className="d-block">{nm}</span>{" "}
                        </h2>
                        <h3 className="my-5">Techs used : {tech} </h3>
                        <div className="d-flex flex-lg-nowrap flex-wrap justify-content-evenly w-75">
                          <button className="btn btn-dark w-75 w-lg-25 py-3 m-lg-0 mb-3">
                            <a
                              href={live}
                              target="_blank"
                              className="text-light text-decoration-none"
                            >
                              Live Preview
                            </a>
                          </button>
                          <button className="btn btn-dark w-75 w-lg-25 py-3">
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