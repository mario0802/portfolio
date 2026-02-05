import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "@/assets/image/logo.jpg";
import { NavItem } from "@/components/NavItem";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

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
                <NavItem label="Home" section="home" />
                <NavItem label="About" section="about" />
                <NavItem label="Projects" section="projects" />
                <NavItem label="Contact" section="contact" />
            </div>

            <div className="ml-auto md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-white/10 transition">
                            <Menu className="h-6 w-6 text-white" />
                        </button>
                    </SheetTrigger>

                    <SheetContent
                        side="top"
                        className="
                            bg-gray-950 text-white
                            w-full
                            h-auto
                            border-b border-white/10
                        "
                    >
                        <SheetHeader className="hidden">
                                <SheetTitle>Menu</SheetTitle>
                                <SheetDescription>Description</SheetDescription>
                        </SheetHeader>

                        <div className="flex flex-col gap-6 py-6 ">
                            <NavItem label="Home" section="home" />
                            <NavItem label="About" section="about" />
                            <NavItem label="Projects" section="projects" />
                            <NavItem label="Contact" section="contact" />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
