import { useActiveSection } from "@/context/ActiveSection";
import { motion, useAnimation } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollSectionProps {
    id: "home" | "about" | "projects" | "contact"
    children: ReactNode
}

export function ScrollSection({ id, children }: ScrollSectionProps) {
    const controls = useAnimation()
    const { setActiveSection } = useActiveSection()
    return (
        <motion.section
            id={id}
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center"
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3 }}

            onViewportEnter={() => {
                controls.start({ opacity: 1, y: 0 })
                setActiveSection(id)
            }}
            onViewportLeave={() =>
                controls.start({ opacity: 0, y: -60 })
            }>
            {children}
        </motion.section>
    );
}
