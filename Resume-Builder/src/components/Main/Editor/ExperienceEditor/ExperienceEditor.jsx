import './ExperienceEditor.css'

const placeholders = {
    companyName: "Meta",
    roleTitle: "Python Intern",
    startDate: "2025-05",
    endDate: "2025-07",
    description: "Worked as Python Intern\nPart of several real world projects"
};

function Experience({ experience, setExperience }) {
    function addExperience() {
        setExperience(prev => [...prev,
        {
            id: crypto.randomUUID(),
            companyName: placeholders.companyName,
            roleTitle: placeholders.roleTitle,
            startDate: placeholders.startDate,
            endDate: placeholders.endDate,
            description: placeholders.description
        }
        ]);
    }

    function removeExperience(id) {
        setExperience(prev => prev.filter(exp => exp.id !== id));
    }

    function updateExperience(id, field, value) {
        setExperience(prev => prev.map(exp => (exp.id === id) ? { ...exp, [field]: value } : exp));
    }

    return (
        <div className="editor experience-editor">
            <h2>Experience</h2>

            <div className="experience-editor-container">
                {experience.map(exp => (
                    <ExperienceDetails
                        key={exp.id}
                        removeExperience={removeExperience}
                        updateExperience={updateExperience}
                        exp={exp}
                    />
                ))}
            </div>

            <button className="add-experience-button" onClick={addExperience}>+ Add Experience</button>
        </div>
    );
}

function ExperienceDetails({ updateExperience, removeExperience, exp }) {
    return (
        <form>
            <div className="form-group full-width">
                <label htmlFor={`company-${exp.id}`}>Company Name:</label>
                <input
                    type="text"
                    id={`company-${exp.id}`}
                    value={exp.companyName}
                    onChange={e => updateExperience(exp.id, "companyName", e.target.value)}
                />
            </div>

            <div className="form-group full-width">
                <label htmlFor={`role-${exp.id}`}>Role Title:</label>
                <input
                    type="text"
                    id={`role-${exp.id}`}
                    value={exp.roleTitle}
                    onChange={e => updateExperience(exp.id, "roleTitle", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`start-date-${exp.id}`}>Start Date:</label>
                <input
                    type="month"
                    id={`start-date-${exp.id}`}
                    value={exp.startDate}
                    onChange={e => updateExperience(exp.id, "startDate", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`end-date-${exp.id}`}>End Date:</label>
                <input
                    type="month"
                    id={`end-date-${exp.id}`}
                    value={exp.endDate}
                    onChange={e => updateExperience(exp.id, "endDate", e.target.value)}
                />
            </div>

            <div className="form-group full-width">
                <label htmlFor={`description-${exp.id}`}>Description:</label>
                <textarea
                    id={`description-${exp.id}`}
                    value={exp.description}
                    onChange={e => updateExperience(exp.id, "description", e.target.value)}
                />
                <p>Enter a newline for new bullet point</p>
            </div>

            <button
                type="button"
                className="remove-experience-button"
                onClick={() => removeExperience(exp.id)}
            >
                Remove Experience
            </button>
        </form>
    );
}

export default Experience;