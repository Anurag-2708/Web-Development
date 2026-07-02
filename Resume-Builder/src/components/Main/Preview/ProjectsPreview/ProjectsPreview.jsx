import './ProjectsPreview.css'

function ProjectsPreview({ projects }) {
    if (projects.length === 0) return null;

    function ProjectEntry(proj) {
        const lines = proj.description.split(/\r\n|\r|\n/);

        return (
            <div className="project-entry" key={proj.id}>
                <div className="project-line">
                    <div className='project-title'>{proj.title}</div>
                    <div>{proj.startDate} to {proj.endDate}</div>
                </div>

                <div className="project-description">
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
        <div className="projects-preview">
            <div className="section-heading">Projects</div>

            {projects.map(exp => (ProjectEntry(exp)))}
        </div>
    );
}

export default ProjectsPreview;