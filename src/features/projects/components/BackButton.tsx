import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate("/")
        }
    }
    return (
        <button
            onClick={handleBack}
            className="
                group
                flex items-center gap-4
                text-2xl md:text-2xl font-bold
                text-white
                px-4 py-2
                rounded-xl
                border border-white/20
                hover:border-red-500
                hover:text-red-500
                transition-all duration-300
            "
        >
            <ArrowLeft
                size={36}
                className="transition-transform duration-300 group-hover:-translate-x-2"
            />
            Back
        </button>
    )
}
