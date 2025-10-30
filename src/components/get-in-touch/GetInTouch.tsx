import SectionTitle from "../section-title";
import SectionWrapper from "../section-wrapper";

const Contact = () => {
    return (
        <SectionWrapper id="contact">
            <SectionTitle title="Get In Touch" />
            <div className="flex items-center justify-center w-full">
                <form action="https://formsubmit.co/ayham10.aboajeb@gmail.com" method="POST" className="flex flex-col gap-[30px] max-w-[1000px] rounded-[6px] w-full p-3 bg-blue-100/10 backdrop-blur-md">

                    <input type="text" name="Name" placeholder="Name" className="bg-slate-800  py-2 pl-2 outline-none rounded-lg border-2 border-blue-500 focus:border-slate-200 duration-300 w-full" />
                    <input type="text" name="Email" placeholder="Email" className="py-2  bg-slate-800  pl-2 outline-none  rounded-lg border-2  border-blue-500 focus:border-slate-200 duration-300  w-full" />
                    <input type="text" name="_honey" className="hidden" />
                    <textarea name="_subject" required placeholder="Message..." className="py-1 pl-2 bg-slate-800  outline-none  rounded-lg border-2 h-60 border-blue-500 focus:border-slate-200 duration-300  w-full"></textarea>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="submitButton rounded-full border-2 duration-300 cursor-pointer text-blue-500 hover:bg-blue-500 hover:text-slate-200 border-blue-500 py-1 px-6 font-normal">Submit</button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    )
}

export default Contact