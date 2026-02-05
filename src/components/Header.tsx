import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <header className="
            fixed top-0 left-0 z-50 w-full flex justify-center
            bg-black/80 backdrop-blur">
            <Navbar />
        </header>
    )
}
