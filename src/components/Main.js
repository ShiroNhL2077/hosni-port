import About from "./About";
import Home from "./Home";
import Projects from "./Projects";

export default function Main () {
    return (
        <main className="bg-secondary">
            <Home />
            <About />
            <Projects />
        </main>
    )
}