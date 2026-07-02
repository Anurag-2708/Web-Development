import './ProjectsEditor.css'

const placeholders = {
    title: "Resume Builder Web Application",
    startDate: "2026-06",
    endDate: "2026-07",
    description: "Built a Resume Builder Application using React State Variable\nImplemented sections for Personal Info, Education, Experience, Projects and Skills"
};

function Projects({ projects, setProjects }) {
    function addProjects() {
        setProjects(prev => [...prev,
        {
            id: crypto.randomUUID(),
            title: placeholders.title,
            startDate: placeholders.startDate,
            endDate: placeholders.endDate,
            description: placeholders.description
        }
        ]);
    }

    function removeProjects(id) {
        setProjects(prev => prev.filter(proj => proj.id !== id));
    }

    function updateProjects(id, field, value) {
        setProjects(prev => prev.map(proj => (proj.id === id) ? { ...proj, [field]: value } : proj));
    }

    return (
        <div className="editor projects-editor">
            <h2>Projects</h2>

            <div className="projects-editor-container">
                {projects.map(proj => (
                    <ProjectDetails
                        key={proj.id}
                        removeProjects={removeProjects}
                        updateProjects={updateProjects}
                        proj={proj}
                    />
                ))}
            </div>

            <button className="add-project-button" onClick={addProjects}>+ Add Project</button>
        </div>
    );
}

function ProjectDetails({ updateProjects, removeProjects, proj }) {
    return (
        <form>
            <div className="form-group full-width">
                <label htmlFor={`project-title-${proj.id}`}>Project Title:</label>
                <input
                    type="text"
                    id={`project-title-${proj.id}`}
                    value={proj.title}
                    onChange={e => updateProjects(proj.id, "title", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`start-date-${proj.id}`}>Start Date:</label>
                <input
                    type="month"
                    id={`start-date-${proj.id}`}
                    value={proj.startDate}
                    onChange={e => updateProjects(proj.id, "startDate", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`end-date-${proj.id}`}>End Date:</label>
                <input
                    type="month"
                    id={`end-date-${proj.id}`}
                    value={proj.endDate}
                    onChange={e => updateProjects(proj.id, "endDate", e.target.value)}
                />
            </div>

            <div className="form-group full-width">
                <label htmlFor={`description-${proj.id}`}>Description:</label>
                <textarea
                    id={`description-${proj.id}`}
                    value={proj.description}
                    onChange={e => updateProjects(proj.id, "description", e.target.value)}
                />
                <p>Enter a newline for new bullet point</p>
            </div>

            <button
                type="button"
                className="remove-project-button"
                onClick={() => removeProjects(proj.id)}
            >
                Remove Project
            </button>
        </form>
    );
}

export default Projects;