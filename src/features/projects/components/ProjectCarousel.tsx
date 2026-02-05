import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ProjectCarouselProps {
    images: string[]
}

export const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

    const next = () => {
        setCurrent((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    if (!images.length) return null
    return (
        <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]">
            <img
                src={images[current]}
                alt={`Proyecto imagen ${current + 1}`}
                className="
                    w-full h-full
                    object-contain
                    rounded-xl
                    border border-white/10
                    bg-black
                    "
            />

            <button
                onClick={prev}
                className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    p-2 rounded-full
                    bg-black/60 text-white
                    hover:bg-red-500
                    transition
                    "
            >
                <ChevronLeft size={28} />
            </button>

            <button
                onClick={next}
                className="
                absolute right-4 top-1/2 -translate-y-1/2
                p-2 rounded-full
                bg-black/60 text-white
                hover:bg-red-500
                transition
                "
            >
                <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2.5 h-2.5 rounded-full transition ${index === current
                                ? "bg-red-500"
                                : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}