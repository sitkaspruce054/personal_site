import "../css/App.css"


export function NavBar(props: any) {

    


    

    return (

        <div className = "navWrapper">
            
            <div className = "items">
                <button className={"tabs" + (props.currentPage === "projects" ? " activeTab" : "")} onClick={() => props.selectPageCallback("projects")}>Projects</button>
                <button className={"tabs" + (props.currentPage === "about" ? " activeTab" : "")} onClick= {() => props.selectPageCallback("about")}>About</button>
                <button className={"tabs" + (props.currentPage === "resume" ? " activeTab" : "")} onClick ={() => props.selectPageCallback("resume")}>Resume</button>
            </div>
            <div className = "navLine"></div>
            
        </div>
        
    )
}