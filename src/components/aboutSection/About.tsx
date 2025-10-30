import programmerGif from '../../assets/programmer.gif'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs'
import SectionWrapper from '../section-wrapper'
import SectionTitle from '../section-title'
const About = () => {
    return (
        <SectionWrapper id='about'>
            <SectionTitle title='About Me'/>
            <div className='flex max-[991px]:flex-col-reverse  h-full gap-4 items-center'>
                <div >
                    <img src={programmerGif} alt="programmer" className='rounded-xl w-[95%] max-w-[650px] blob' />
                </div>

                <div>

                    <div className='px-4 rounded-xl py-8 bg-slate-800 flex flex-col gap-6 w-full max-w-[800px]'>
                        <p className='leading-9'>
                            Hi, I'm Ayham Abo Ajeeb, a passionate and dedicated full stack web developer with a strong desire to create beautiful and user-friendly online experiences. Though my professional experience may be limited, I am excited to contribute to a company that values growth and innovation, as it will allow me to further refine my abilities and expand my skill set.
                        </p>
                        <div className='space-y-2'>

                            <div className='flex items-center gap-1'>
                                <MdEmail className='text-blue-400' /> :
                                ayham10.aboajeb@gmail.com
                            </div>
                            <div className='flex items-center gap-1'>
                                <MdPhone className='text-blue-400' /> :
                                +963-934255004
                            </div>



                            <div className='flex items-center gap-1'>
                                <MdEmail className='text-blue-400' /> :
                                ayham10.aboajeb@gmail.com
                            </div>
                            <div className='flex items-center gap-1'>
                                <FaGraduationCap className='text-blue-400' /> :
                                IT expected graduation-2028
                            </div>
                        </div>
                        <div className='flex w-full items-center gap-4'>
                            <span>My Accounts : </span>
                            <div className='flex gap-4 text-xl'>
                                <a href="https://sy.linkedin.com/in/ayham-abo-ajeeb-5b1788339" target='_blank' className='hover:text-blue-500'><BsLinkedin className='size-6' /></a>
                                <a href="https://github.com/Ayham-A4M" target='_blank' className='hover:text-gray-500'><BsGithub className='size-6' /></a>
                                <a href="https://t.me/Ayham_Abo_Ajeeb" target='_blank' className='hover:text-blue-400'><BsTelegram  className='size-6'/></a>
                            </div>
                        </div>

                    </div>



                </div>


            </div>
        </SectionWrapper>
    )
}

export default About