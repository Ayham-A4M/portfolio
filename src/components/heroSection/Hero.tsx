import { DiMongodb } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { GrReactjs } from "react-icons/gr"
import { SiExpress } from "react-icons/si"
import Particles from "../Particles"
import SplitText from "../SplitText"



const Hero = () => {
    return (
        <div className='px-5 md:px-20 h-screen relative bg-linear-to-br from-slate-950 to-blue-950  w-full flex items-center justify-center'>
            <Particles
                className="w-full h-screen"
                particleColors={['#ffffff', '#ffffff']}
                particleCount={1000}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
            <div className='flex flex-col md:gap-6 gap-4 text-center md:text-5xl text-[2.5rem]'>
                <SplitText
                    text="Hey, There!"
                    className="text-5xl font-bold text-slate-100"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    tag="h1"

                /><SplitText
                    text="I`m Ayham"
                    className="text-5xl font-bold text-slate-100"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    tag="h1"

                />

                <h1 className='text-slate-100 font-bold'>
                    <span className='text-green-400 Mern'>M </span>
                    <span className='text-amber-800 Mern'>E </span>
                    <span className='text-blue-400 Mern'>R </span>
                    <span className='text-green-700 Mern'>N </span>
                    Stack Developer
                </h1>
                <div className="flex items-center gap-[1.23rem] text-3xl justify-center md:justify-start">
                    <DiMongodb className="text-green-400 mernIcon" />
                    <SiExpress className="text-amber-800 mernIcon" />
                    <GrReactjs className="text-blue-400 mernIcon" />
                    <FaNodeJs className="text-green-700 mernIcon" />
                </div>

            </div>
        </div>
    )
}

export default Hero