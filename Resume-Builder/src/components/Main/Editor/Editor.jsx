import './Editor.css'
import Education from './EducationEditor/EducationEditor'
import PersonalInfo from './PersonalInfoEditor/PersonalInfoEditor'
import Summary from './SummaryEditor/SummaryEditor'

function Editor({ selected, infoSetters, setSummary, summaryPlaceholder, education, setEducation }) {
    if (selected === "Personal Info") {
        return <PersonalInfo
            infoSetters={infoSetters}
        />
    }
    else if (selected === "Summary") {
        return <Summary
            setSummary={setSummary}
            summaryPlaceholder={summaryPlaceholder}
        />
    }
    else if (selected === "Education") {
        return <Education
            education={education}
            setEducation={setEducation}
        />
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