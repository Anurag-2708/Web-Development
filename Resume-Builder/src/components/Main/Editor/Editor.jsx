import './Editor.css'

import Education from './EducationEditor/EducationEditor'
import PersonalInfo from './PersonalInfoEditor/PersonalInfoEditor'
import Summary from './SummaryEditor/SummaryEditor'
import Experience from './ExperienceEditor/ExperienceEditor'
import Projects from './ProjectsEditor/ProjectsEditor'

function Editor({ selected, infoSetters, setSummary, summaryPlaceholder, education, setEducation, experience, setExperience, projects, setProjects }) {
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
        return <Experience
            experience={experience}
            setExperience={setExperience}
        />
    }
    else if (selected === "Projects") {
        return <Projects
            projects={projects}
            setProjects={setProjects}
        />
    }
    else {
        return <div className="editor skills-editor">This is the Skills Editor</div>
    }
}

export default Editor;