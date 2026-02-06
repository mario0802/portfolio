import { useParams } from "react-router-dom"
import { BackButton, ProjectCarousel, ProjectInfo } from "./components"
import { ToolsCarousel } from "../about/components";
import { Footer, NotFound } from "@/components";
import type { ProjectDetails } from "@/types";
import { projects } from "@/data/projects";

export const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>()
    const project: ProjectDetails | undefined = projects.find(
        (p) => p.id === Number(projectId)
    )
    if (!project) {
        return (
            <NotFound/>
        )
    }

    return (
        <section className="min-h-screen flex flex-col justify-center items-center">
            <div className="w-full md:w-[95%] lg:w-[70%] px-4 mt-10">
                <BackButton />
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ProjectInfo project={project} />
                    <ProjectCarousel images={project.images} />
                </div>
                <div className="mt-15 text-center">
                    <ToolsCarousel tools={project.technologies} />
                </div>
            </div>
            <div className="mt-auto w-full">
                <Footer />
            </div>
        </section>
    )
}
