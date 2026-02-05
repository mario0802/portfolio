import { Github, Linkedin } from "lucide-react"
import logo from "@/assets/image/logo.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-gradient-to-r from-[#0b0f1a] to-[#0f1424]">
            <div className="mx-auto flex h-16 max-w-7xl items-center px-4">

                <Avatar className="h-10 w-10">
                    <AvatarImage src={logo} alt="Mario Ubilla" />
                    <AvatarFallback>MU</AvatarFallback>
                </Avatar>

                <p className="mx-auto text-xs md:text-sm text-gray-400">
                    © 2026 Mario Ubilla. Built with{" "}
                    <span className="text-red-500">♥</span> and{" "}
                    <span className="text-red-500">&lt;/&gt;</span>
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/tuusuario"
                        target="_blank"
                        className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/in/tuusuario"
                        target="_blank"
                        className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition"
                    >
                        <Linkedin size={18} />
                    </a>
                    
                </div>
            </div>
        </footer>
    )
}
