import { AnimatedBackground, Loading } from "@/components"
import { ActiveSectionProvider } from "@/context/ActiveSection"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <ActiveSectionProvider>
            <div className="relative min-h-screen text-white">
                <AnimatedBackground />
                <div className="flex flex-col min-h-dvh">
                    <Loading className="z-40" />
                    <Outlet />
                </div>
            </div>
        </ActiveSectionProvider>
    )
}
