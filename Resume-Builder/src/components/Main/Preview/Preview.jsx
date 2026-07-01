import './Preview.css'

import PersonalInfoPreview from './PersonalInfoPreview/PersonalInfoPreview';
import SummaryPreview from './SummaryPreview/SummaryPreview';
import EducationPreview from './EducationPreview/EducationPreview';

function Preview({ info, summary, education }) {
    return <div className="preview">
        <h2>Live Preview</h2>
        
        <div className="a4-page">
            <PersonalInfoPreview info={info} />
            <SummaryPreview summary={summary}/>
            <EducationPreview education={education} />
            <div className="experience-preview"></div>
            <div className="projects-preview"></div>
            <div className="skills-preview"></div>
        </div>
    </div>
}

export default Preview;