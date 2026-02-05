import type { ProjectDetails } from "@/types";
import { useNavigate } from "react-router-dom";

type Props = {
    project: ProjectDetails;
};

export const ProjectCard = ({ project }: Props) => {
    const navigate = useNavigate()
    return (
        <div
            key={project.id}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="
                bg-black
                cursor-pointer
                rounded-2xl
                overflow-hidden
                flex flex-col
                shadow-[0_0_18px_rgba(239,68,68,1)]
                transition-transform duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_28px_rgba(239,68,68,1)]">
            <img
                src={project.mainImage}
                alt={project.name}
                className="h-40 w-full object-contain object-center rounded-lg"
            />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white">
                    {project.name}
                </h3>
                <p className="text-sm text-neutral-400">
                    {project.description}
                </p>
            </div>
        </div>
    )
}
