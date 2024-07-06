import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Resume } from "../pages/Resume";
export function PageRenderer(props: any) {
    console.log(props);
    if (props.page === "about") {
        return <About/>
    } else if (props.page === "projects") {
        return <Projects/>
    } else if (props.page === "resume") {
        return <Resume/>
    } else {
        return (
            <div className="art"></div>
        )
    }

    
}