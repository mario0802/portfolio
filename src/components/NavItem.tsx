import { useActiveSection } from "@/context/ActiveSection"
import { scrollToSection } from "@/utils"

interface NavItemProps {
    label: string
    section: "home" | "about" | "projects" | "contact"
}

export const NavItem = ({label, section }: NavItemProps) => {
    const { activeSection } = useActiveSection()

    const isActive = activeSection === section

    return (
        <button
            onClick={() => scrollToSection(section)}
            className={`bg-transparent underline-offset-8 transition-all ${isActive
                ? "text-red-500 underline"
                : "text-white hover:text-red-500"
                }`}
        >
            {label}
        </button>
    )
}

