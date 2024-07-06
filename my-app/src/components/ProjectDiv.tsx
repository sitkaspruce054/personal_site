import "../css/App.css"
interface projectDesc {
    name: string;
    githubLink: string;
    description: string
}
export type {projectDesc}
export function ProjectDiv(props: projectDesc) {
    return (
        <div className= "projectDiv">
            <div className="projectHeadWrapper">
                <div className="name">{props.name}</div>
                <div className="githubLink">{props.githubLink}</div>
            </div>
            <div className="projectText">
                <p>{props.description}</p>
            </div>
        </div>

    )
}