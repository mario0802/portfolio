import { ToolsCarousel } from "./components"
import jsLogo from "@/assets/image/logos/javascript.webp";
import netLogo from "@/assets/image/logos/netLogo.png";
import pythonLogo from "@/assets/image/logos/python.png";
import typescriptLogo from "@/assets/image/logos/tyescript.png";
import reactLogo from "@/assets/image/logos/reactLogo.png";
import nestLogo from "@/assets/image/logos/nestLogo.svg";
import postgresLogo from "@/assets/image/logos/postgresLogo.png";
import SqlLogo from "@/assets/image/logos/sqlServerLogo.svg";
import dockerLogo from "@/assets/image/logos/dockerLogo.png";
import type { Tool } from "@/types";

const tools: Tool[] = [
    { name: "JavaScript", logo: jsLogo },
    { name: ".Net", logo: netLogo },
    { name: "Python", logo: pythonLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: "React", logo: reactLogo },
    { name: "Nest.js", logo: nestLogo },
    { name: "PostgreSQL", logo: postgresLogo },
    { name: "SqlServer", logo: SqlLogo },
    { name: "Docker", logo: dockerLogo },
];

export const About = () => {
    return (
        <section className="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center py-10">
            <div className="w-full md:w-[95%] lg:w-[70%] px-4 h-full">
                <div className="flex flex-col h-full items-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mx-auto">
                        <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h1>
                    <p className="my-10 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed text-center">
                        Hello, I'm <span className="font-semibold text-white">Mario Ubilla</span>, an Information and Communication Technologies 
                        Engineer with over 4 years of professional experience. I’m passionate about creating effective, scalable solutions through 
                        technology and continuously improving my skills. I enjoy tackling complex problems, learning new tools every day, 
                        and turning ideas into reliable digital products. With a strong commitment to growth and innovation, I’m always looking for 
                        opportunities to add value, collaborate with teams, and build technology that makes a real impact.
                    </p>
                </div>
                <ToolsCarousel tools={tools}/>
            </div>
        </section>
    )
}
