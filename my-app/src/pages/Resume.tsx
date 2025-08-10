import "../css/App.css"
const resume = require('../components/Resume.pdf')
export function Resume() {

    return (
        <div className="aboutFadeIn">
            <p>
                <a href = {resume}>Here's my resume.</a>
            </p>
        </div>
    )
}