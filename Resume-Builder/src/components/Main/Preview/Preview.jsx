import './Preview.css'

import PersonalInfoPreview from './PersonalInfoPreview/PersonalInfoPreview';
import SummaryPreview from './SummaryPreview/SummaryPreview';
import EducationPreview from './EducationPreview/EducationPreview';
import ExperiencePreview from './ExperiencePreview/ExperiencePreview';
import ProjectsPreview from './ProjectsPreview/ProjectsPreview';

function Preview({ info, summary, education, experience, projects }) {
    return <div className="preview">
        <h2>Live Preview</h2>

        <div className="a4-page">
            <PersonalInfoPreview info={info} />
            <SummaryPreview summary={summary} />
            <EducationPreview education={education} />
            <ExperiencePreview experience={experience} />
            <ProjectsPreview projects={projects} />
            <div className="skills-preview"></div>
        </div>
    </div>
}

export default Preview;