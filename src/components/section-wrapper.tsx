import type { PropsWithChildren } from "react"

const SectionWrapper: React.FC<PropsWithChildren<{id:string}>> = ({ children,id }) => {
    return (
        <div id={id} className='min-h-screen w-full pt-20 space-y-20  text-slate-100 font-bold'>
            {
                children &&
                children
            }
        </div>
    )
}

export default SectionWrapper