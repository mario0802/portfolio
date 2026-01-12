import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "@/assets/image/logo.jpg";

export const Navbar = () => {
    return (
        <nav
            className="flex h-16 items-center
            w-full md:w-[95%] lg:w-[80%]
            px-4"
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={logo} alt="Mario Ubilla" />
                    <AvatarFallback>MU</AvatarFallback>
                </Avatar>

                <div className="text-sm md:text-base font-semibold tracking-wide whitespace-nowrap">
                    <span className="text-red-500">MARIO UBILLA</span>{" "}
                    <span className="text-white">- DEVELOPER</span>
                </div>
            </div>

            <div className="ml-auto hidden md:flex items-center gap-6">
                <a href="#home" className="text-white hover:text-red-500 transition-colors underline-offset-8">
                    Home
                </a>
                <a href="#about" className="text-white hover:text-red-500 transition-colors underline-offset-8">
                    About
                </a>
                <a href="#projects" className="text-white hover:text-red-500 transition-colors underline-offset-8">
                    Projects
                </a>
                <a href="#contact" className="text-white hover:text-red-500 transition-colors underline-offset-8">
                    Contact
                </a>
            </div>
        </nav>
    )
}
