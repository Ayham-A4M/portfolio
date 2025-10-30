import { useState } from "react"
const aClass = "px-3 py-0.5 rounded-md hover:bg-slate-100 hover:text-slate-900"
const Nav = () => {
    const [activeLink, setActiveLink] = useState<"contact" | "about" | "skills" | "projects" | null>(null);
    return (
        <div className="w-full py-4 px-5 md:px-20 z-40 flex items-center justify-center text-slate-200 bg-slate-800 fixed top-0">
            <div className="flex items-center gap-3 md:gap-7">
                <a href="#about" className={`${aClass} ${activeLink === "about" ? "bg-slate-100 text-slate-900" : ""}`} onClick={() => setActiveLink("about")}>About</a>
                <a href="#skills" className={`${aClass} ${activeLink === "skills" ? "bg-slate-100 text-slate-900" : ""}`} onClick={() => setActiveLink("skills")}>Skills</a>
                <a href="#projects" className={`${aClass} ${activeLink === "projects" ? "bg-slate-100 text-slate-900" : ""}`} onClick={() => setActiveLink("projects")}>Projects</a>
                <a href="#contact" className={`${aClass} ${activeLink === "contact" ? "bg-slate-100 text-slate-900" : ""}`} onClick={() => setActiveLink("contact")}>Contact</a>
            </div>
        </div>
    )
}

export default Nav