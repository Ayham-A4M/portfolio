import react from "../../assets/react.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import nodejs from "../../assets/nodejs.svg"
import tailwind from "../../assets/tailwind.svg"
import typescript from "../../assets/typescript.svg"
import javascript from "../../assets/javascript.svg"
import mongo from "../../assets/mongo.svg"
import git from "../../assets/gti.svg"
import express from "../../assets/express.svg";
import SectionWrapper from "../section-wrapper"
import SectionTitle from "../section-title"
const skills = [
    { name: "react", svg: react },
    { name: "html", svg: html },
    { name: "css", svg: css },
    { name: "nodejs", svg: nodejs },
    { name: "tailwindcss", svg: tailwind },
    { name: "typescript", svg: typescript },
    { name: "javascript", svg: javascript },
    { name: "mongo", svg: mongo },
    { name: "git", svg: git },
    { name: "express js", svg: express },
];
const Skills = () => {

    return (
        <SectionWrapper id="skills">
            <SectionTitle title='Skills'/>
            <div className="flex justify-evenly items-center flex-wrap gap-10 md:gap-14">

                {
                    skills.map((e, index) => (
                        <div key={`card-${index}`} className="w-fit relative skillCard bg-slate-800 space-y-6 p-3 rounded-xl ">
                            <img loading="lazy" src={e.svg} className="size-28" alt="" />
                            <h3 className="text-center capitalize">{e.name}</h3>
                        </div>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default Skills