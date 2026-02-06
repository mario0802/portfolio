import { AnimatedBackground, Loading } from "@/components"
import { ActiveSectionProvider } from "@/context/ActiveSection"
import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

export const RootLayout = () => {
    const location = useLocation()
    const isHome = location.pathname === "/"
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!isHome) {
            setLoading(false)
            return
        }
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [isHome])

    return (
        <ActiveSectionProvider>
            <div className="relative min-h-screen text-white">
                <AnimatedBackground />
                {loading && <Loading />}

                {!loading && (
                    <div className="flex flex-col min-h-dvh">
                        <Outlet />
                    </div>
                )}
            </div>
        </ActiveSectionProvider>
    )
}
