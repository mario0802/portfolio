import { createContext, useContext, useState, type ReactNode } from "react"

type SectionId = "home" | "about" | "projects" | "contact"

interface ActiveSectionContextType {
    activeSection: SectionId
    setActiveSection: (section: SectionId) => void
}

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(
    undefined
)

export const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
    const [activeSection, setActiveSection] = useState<SectionId>("home")

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection }}
        >
            {children}
        </ActiveSectionContext.Provider>)
}

export const useActiveSection = (): ActiveSectionContextType => {
    const context = useContext(ActiveSectionContext)
    if (!context) {
        throw new Error("useActiveSection must be used within ActiveSectionProvider")
    }
    return context
}