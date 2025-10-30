
import { IoRadio } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { type ProjectType } from "./projects-array";



const ProjectCard = ({ information }: { information: ProjectType }) => {
    return (
        <div className='projectCard duration-300 p-[3px] w-full grid max-[900px]:grid-cols-1 gap-4 grid-cols-2 items-center'>

            {information.left ?
                <>


                    <div >
                        <div className='w-fit rounded-xl'>
                            <img src={information.picture} loading='lazy' className='w-full aspect-16/8  rounded-[6px]' />
                        </div>
                    </div>






                    <div className='bg-gray-300/15  rounded-xl describeProject flex relative overflow-hidden flex-col gap-[15px] px-2.5 py-5'>


                        <h1 className={`${information.TitleColor} font-bold font-sans text-4xl`}>{information.NameOfProject}</h1>
                        <div className='w-fit rounded-[6px] p-3 bg-slate-400/20 text-slate-200  font-semibold text-[18px]'>
                            <h1>{information.ProjectType}</h1>
                            <div className='flex flex-wrap gap-2'>
                                {
                                    information.Technologies &&
                                    information.Technologies.map((element, i) => (
                                        <span className='' key={i}>{element}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <p className='text-[20px] font-light text-slate-200'>{information.Description}</p>
                        <div className='flex pl-1 flex-col gap-[15px] text-slate-200'>
                            {
                                information.Features &&
                                information.Features.map((element, i:number) => (
                                    <div key={`${information.NameOfProject}-feature-${i}`} className='flex gap-3 items-baseline text-[20px]'>
                                        <span className='text-blue-500 text-[20px]'>&#x2022;</span>
                                        <span className='font-light'>
                                            {element}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full flex gap-3 items-center'>
                            <a href={information.live} target='_blank' className='duration-300 text-[13px] hover:bg-violet-600 hover:text-slate-100 gap-1 border-2 rounded-lg font-semibold text-violet-600 border-violet-600 flex items-center px-[15px] py-1'>
                                Live
                                <IoRadio />
                            </a>
                            <a href={information.repo} target='_blank' className='duration-300 text-[13px] hover:bg-slate-300 hover:text-slate-800 text-slate-300 gap-1 border-2 rounded-lg font-semibold  flex items-center px-[15px] py-1'>
                                github
                                <FaGithubSquare />
                            </a>
                        </div>

                    </div>
                </>


                :


                <>
                    <div className='bg-gray-300/15 max-[900px]:order-2   rounded-xl describeProject flex relative overflow-hidden flex-col gap-[15px] px-2.5 py-5'>


                        <h1 className={`${information.TitleColor} font-bold font-sans text-4xl`}>{information.NameOfProject}</h1>
                        <div className='w-fit rounded-[6px] p-3 bg-slate-400/20 text-slate-200  font-semibold text-[18px]'>
                            <h1>{information.ProjectType}</h1>
                            <div className='flex gap-2 flex-wrap'>
                                {
                                    information.Technologies &&
                                    information.Technologies.map((element, i) => (
                                        <span className='' key={i}>{element}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <p className='text-[20px] font-light text-slate-200'>{information.Description}</p>
                        <div className='flex pl-1 flex-col gap-[15px] text-slate-200'>
                            {
                                information.Features &&
                                information.Features.map((element, i:number) => (
                                    <div key={`${information.NameOfProject}-feature-${i}`} className='flex gap-3 items-baseline text-[20px]'>
                                        <span className='text-blue-500 text-[20px]'>&#x2022;</span>
                                        <span className='font-light'>
                                            {element}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='w-full flex gap-3 items-center'>
                            <a href={information.live} target='_blank' className='duration-300 text-[13px] hover:bg-violet-600 hover:text-slate-100 gap-1 border-2 rounded-lg font-semibold text-violet-600 border-violet-600 flex items-center px-[15px] py-1'>
                                Live
                                <IoRadio />
                            </a>
                            <a href={information.repo} target='_blank' className='duration-300 text-[13px] hover:bg-slate-300 hover:text-slate-800 text-slate-300 gap-1 border-2 rounded-lg font-semibold  flex items-center px-[15px] py-1'>
                                github
                                <FaGithubSquare />
                            </a>
                        </div>

                    </div>

                    <div className="max-[900px]:order-1">
                        <div className='w-fit rounded-xl'>
                            <img src={information.picture} loading='lazy' className='w-full aspect-16/8  rounded-[6px]' />
                        </div>
                    </div>




                </>








            }




        </div>
    )
}

export default ProjectCard