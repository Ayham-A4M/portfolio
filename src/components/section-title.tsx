import SplitText from "./SplitText"
const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="text-center">
            <SplitText
                text={title}
                className="text-5xl font-bold  text-slate-100"
                delay={100}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
            />
        </div>

    )
}

export default SectionTitle