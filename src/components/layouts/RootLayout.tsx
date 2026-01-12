import { AnimatedBackground, Header, Loading } from "@/components"
import { Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <div className="relative min-h-screen text-white">
            <AnimatedBackground />
            <div className="flex flex-col min-h-dvh">
                <Loading className="z-40" />
                <Header />

                <Outlet />

            </div>
        </div>
    )
}
