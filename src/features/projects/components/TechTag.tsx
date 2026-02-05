import { Box } from "lucide-react"

interface Props {
    label: string
}

export const TechTag = ({ label }: Props) => {
    return (
        <span
            className="
                inline-flex items-center gap-2
                px-5 py-2
                rounded-full
                text-sm font-medium
                text-blue-200
                bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800
                border border-white/10
                shadow-[0_0_20px_rgba(99,102,241,0.15)]
                backdrop-blur
                hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]
                transition-all duration-300
            "
        >
            <Box />
            {label}
        </span>
    )
}
