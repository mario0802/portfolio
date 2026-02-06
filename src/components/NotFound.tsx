import marioOver from "@/assets/image/marioOver.png";

export const NotFound = () => {
    return (
        <div
            className="
            min-h-screen w-full
            flex flex-col items-center justify-center
            bg-black text-white
            text-center
            gap-6
        "
        >
            <h1
                className="
                text-5xl md:text-7xl lg:text-8xl
                font-bold
                tracking-widest
                font-['Press_Start_2P']
                "
            >
                GAME OVER
            </h1>

            <img
                src={marioOver}
                alt="Game Over"
                className="w-48 md:w-64 lg:w-72"
            />

            <p
                className="
                text-xl md:text-2xl
                font-['Press_Start_2P']
                tracking-wide
                "
            >
                404 Not Found
            </p>
        </div>
    )
}
