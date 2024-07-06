
import "../css/App.css"
const resume = require('../components/Resume.pdf')
export function Resume() {

    return (
        <div>
            <a href = {resume} target = "_blank">Here's my resume.</a>
            
        </div>
    )
}