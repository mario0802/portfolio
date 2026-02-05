import { Github } from "lucide-react"
import { TechTag } from "./TechTag"
import type { ProjectDetails } from "@/types"

interface Props {
    project: ProjectDetails
}

export const ProjectInfo = ({project} : Props) => {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl font-bold leading-tight mx-auto">
                <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                    {project.name}
                </span>
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed">
                {project.description}
            </p>

            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-3
                    px-6 py-3
                    rounded-lg
                    bg-white text-black
                    font-semibold
                    hover:bg-red-500 hover:text-white
                    transition-all duration-300
                    "
            >
                <Github />
                GitHub
            </a>
            <p>
                <span>&lt;/&gt; Technologies Used</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
                {project.technologies.map((tech) => (
                    <TechTag key={tech.name} label={tech.name} />
                ))}
            </div>

        </div>
    )
}
