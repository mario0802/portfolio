import { useEffect, useRef } from "react";
import jsLogo from "@/assets/image/logos/javascript.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Tool = {
    name: string;
    logo: string;
};

const tools: Tool[] = [
    { name: "JavaScript", logo: jsLogo },
    { name: "TypeScript", logo: jsLogo },
    { name: "React", logo: jsLogo },
    { name: "Node.js", logo: jsLogo },
    { name: "Python", logo: jsLogo },
    { name: "PostgreSQL", logo: jsLogo },
    { name: "Docker", logo: jsLogo },
];

export const ToolsCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<number | null>(null);

    const CARD_STEP = 244; // ancho card + gap
    const AUTOPLAY_MS = 2000;

    const scrollOne = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -CARD_STEP : CARD_STEP,
            behavior: "smooth",
        });

        restartAutoplay();
    };

    const startAutoplay = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;

            const maxScroll = el.scrollWidth - el.clientWidth;

            if (el.scrollLeft >= maxScroll - CARD_STEP) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: CARD_STEP, behavior: "smooth" });
            }
        }, AUTOPLAY_MS);
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const restartAutoplay = () => {
        stopAutoplay();
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        return stopAutoplay;
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div
                className="
                relative overflow-hidden
                w-full
                sm:max-w-[220px]
                md:max-w-[952px]
                "
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
            >
                {/* Flecha izquierda */}
                <button
                    onClick={() => scrollOne("left")}
                    className="
                    absolute left-2 top-1/2 -translate-y-1/2 z-10
                    bg-black/70 hover:bg-black text-white
                    p-2 rounded-full
                    "
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Carrusel */}
                <div
                    ref={scrollRef}
                    className="
                    flex gap-6 px-4 py-6
                    overflow-x-scroll
                    scroll-smooth
                    scrollbar-hide
                    select-none
                    cursor-grab active:cursor-grabbing
                    "
                >
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="
                            flex-shrink-0 w-[220px]
                            bg-zinc-900 rounded-2xl p-6
                            flex flex-col items-center gap-4
                            shadow-lg
                            hover:scale-105 transition-transform
                            "
                        >
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="h-30 w-30 object-contain"
                                draggable={false}
                            />
                            <span className="text-white font-medium text-center">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Flecha derecha */}
                <button
                    onClick={() => scrollOne("right")}
                    className="
                    absolute right-2 top-1/2 -translate-y-1/2 z-10
                    bg-black/70 hover:bg-black text-white
                    p-2 rounded-full
                    "
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};