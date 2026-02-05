import { ContactForm } from "@/components"

export const Contact = () => {
    return (
        <section className="w-full min-h-[calc(100vh-4rem)] flex justify-center items-center py-10">
            <div className="w-full md:w-[95%] lg:w-[70%] px-4 h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mx-auto">
                    <span className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                        Contact Me
                    </span>
                </h1>
                <p className="my-10 max-w-3xl text-base md:text-lg text-gray-300 leading-relaxed text-center">
                    Do you have any questions? Let's work together!<br />Send me a message and let's talk.
                </p>
                <div className="w-full max-w-2xl flex justify-center  bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
