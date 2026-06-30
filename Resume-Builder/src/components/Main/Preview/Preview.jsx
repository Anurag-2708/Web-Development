import './Preview.css'

function Preview({ info }) {
    return <div className="preview">
        <h2>Live Preview</h2>
        <div className="a4-page">
            <PersonalInfoPreview info={info} />
            <div className="summary-preview"></div>
            <div className="education-preview"></div>
            <div className="experience-preview"></div>
            <div classNamPPreviewe="projects-preview"></div>
            <div className="skills-preview"></div>
        </div>
    </div>
}

function PersonalInfoPreview({ info }) {
    return <div className="personal-info-preview">
        <div className="full-name-preview">{info.fullName}</div>
        <div className="contact-info-preview">
            {info.phoneNumber} | {info.emailID} | <a href={info.linkedInLink}>{info.linkedInID}</a> | <a href={info.gitHubLink}>{info.gitHubID}</a>
        </div>
    </div>
}

export default Preview;