import { ProjectCard } from "@/components"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { projects } from "@/data/projects";

const ITEMS_PER_PAGE = 6

export const Projects = () => {
    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

    const visibleProjects = projects.slice(
        page * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )
    return (
        <>
            <section className="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center py-10">
                <div className="w-full md:w-[95%] lg:w-[70%] px-4 h-full flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mx-auto">
                        <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <div className="my-10 w-full h-full flex justify-center items-center">

                    </div>
                    {page > 0 && (
                        <Button variant="ghost"
                            className="absolute left-4 z-10"
                            onClick={() => setPage(page - 1)}>
                            <ChevronLeft size={32} />
                        </Button>
                    )}
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 md:grid-rows-2 max-w-6xl w-full px-6">
                        {visibleProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    {page < totalPages - 1 && (
                        <Button variant="ghost"
                            className="absolute right-4 z-10"
                            onClick={() => setPage(page + 1)}>
                            <ChevronRight size={32} />
                        </Button>
                    )}
                </div>
            </section>
        </>
    )
}
