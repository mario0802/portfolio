import { Description } from "@/components"
import MarioImage from "@/assets/image/Mario.png";

export const Home = () => {
    return (
        <>
            <section className="min-h-[calc(100vh-4rem)] flex justify-center items-center py-10">
                <div className="w-full md:w-[95%] lg:w-[70%] px-4 h-full">
                    <div className="flex flex-col lg:flex-row h-full items-center">
                        <Description />
                        <div className="w-full h-full lg:w-[50%] hidden lg:flex justify-center items-center">
                            {/* <div className="h-full w-full bg-red-500"></div> */}
                            <img
                                src={MarioImage}
                                alt="Hero image"
                                className="
                                    w-full 
                                    rounded-full
                                    shadow-[0_0_40px_rgba(239,68,68,1)]
                                    object-contain
                                "
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>

    )

}

{/* <section id="home" className="w-full min-h-[calc(100vh-4rem)] items-center flex justify-center py-10">
                <div className="w-full md:w-[95%] lg:w-[70%] px-4 h-full">
                    <div className="flex flex-col lg:flex-row h-full">
                        <Description />
                        <div className="w-full lg:w-[40%] flex justify-center items-center">
                            <img
                                src={MarioImage}
                                alt="Hero image"
                                className="w-full max-w-sm lg:max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section> */}

