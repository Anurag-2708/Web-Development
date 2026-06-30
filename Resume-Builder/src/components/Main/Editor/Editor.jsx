import './Editor.css'
import PersonalInfo from './PersonalInfo/PersonalInfo'

function Editor({ selected, infoSetters }) {
    if (selected === "Personal Info") {
        return <PersonalInfo infoSetters={infoSetters} />
    }
    else if (selected === "Summary") {
        return <div className="editor summary-editor">This is the Summary Editor</div>
    }
    else if (selected === "Education") {
        return <div className="editor education-editor">This is the Education Editor</div>
    }
    else if (selected === "Experience") {
        return <div className="editor experience-editor">This is the Experience Editor</div>
    }
    else if (selected === "Projects") {
        return <div className="editor projects-editor">This is the Projects Editor</div>
    }
    else {
        return <div className="editor skills-editor">This is the Skills Editor</div>
    }
}

export default Editor;