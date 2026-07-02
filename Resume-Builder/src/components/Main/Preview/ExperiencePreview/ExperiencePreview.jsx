import './ExperiencePreview.css'

function ExperiencePreview({ experience }) {
    if (experience.length === 0) return null;

    function ExperienceEntry(exp) {
        const lines = exp.description.split(/\r\n|\r|\n/);

        return (
            <div className="experience-entry" key={exp.id}>
                <div className="experience-line">
                    <div className='company-name'>{exp.companyName}</div>
                    <div>{exp.startDate} to {exp.endDate}</div>
                </div>

                <div className="role-title">{exp.roleTitle}</div>

                <div className="experience-description">
                    <ul>
                        {lines.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

    return (
        <div className="experience-preview">
            <div className="section-heading">Experience</div>

            {experience.map(exp => (ExperienceEntry(exp)))}
        </div>
    );
}

export default ExperiencePreview;