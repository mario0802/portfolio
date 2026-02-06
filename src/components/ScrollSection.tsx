import { useActiveSection } from "@/context/ActiveSection";
import { motion, useAnimation } from "framer-motion";
import { useEffect, type ReactNode } from "react";

interface ScrollSectionProps {
    id: "home" | "about" | "projects" | "contact"
    children: ReactNode,
    animate?: boolean
}

export function ScrollSection({ id, children}: ScrollSectionProps) {
    const controls = useAnimation()
    const { setActiveSection } = useActiveSection()

    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 768

    useEffect(() => {
        if (isMobile) {
            controls.set({ opacity: 1, y: 0 })
        } else {
            controls.set({ opacity: 0, y: 60 })
        }
    }, [isMobile, controls])

    return (
        <motion.section
            id={id}
            className={`
        w-full py-20
        ${isMobile ? "min-h-screen flex items-center justify-center" : ""}
      `}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}
            onViewportEnter={() => {
                if (!isMobile) {
                    controls.start({ opacity: 1, y: 0 })
                }
                setActiveSection(id)
            }}
            onViewportLeave={() => {
                if (!isMobile) {
                    controls.start({ opacity: 0, y: -60 })
                }
            }}
        >
            {children}
        </motion.section>
    )
}
