
import { useEffect, useState } from "react";
import marioGift from "@/assets/image/marioGift.gif";

export const Loading = () => {
    const [dots, setDots] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? "" : prev + "."))
        }, 500)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="
        fixed inset-0 z-50
        flex flex-col items-center justify-center
        bg-black
        text-white
        ">
            <img
                src={marioGift}
                alt="Loading"
                className="w-32 h-32 mb-6"
            />

            <p className="text-lg tracking-wide">
                Loading{dots}
            </p>
        </div>
    )
}