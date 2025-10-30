import SectionTitle from "../section-title"
import SectionWrapper from "../section-wrapper"
import ProjectCard from "./projectCard"
import { projects, type ProjectType } from "./projects-array"
const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <SectionTitle title='Projects' />
            {
                projects.map((project: ProjectType, i) => (
                    <ProjectCard key={i} information={project} />
                ))
            }
        </SectionWrapper>

    )
}

export default Projects