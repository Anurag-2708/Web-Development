import { useState } from 'react';
import './EducationEditor.css'

const placeholders = {
    institute: "XYZ College",
    degree: "B.Tech in Electrical Engineering",
    startYear: 2024,
    endYear: 2028,
    marksObtained: "8.71",
    marksTotal: "10"
};

function Education({ education, setEducation }) {

    function addEducation() {
        setEducation(prev => [...prev,
        {
            id: crypto.randomUUID(),
            institute: placeholders.institute,
            degree: placeholders.degree,
            startYear: placeholders.startYear,
            endYear: placeholders.endYear,
            marksObtained: placeholders.marksObtained,
            marksTotal: placeholders.marksTotal
        }]);
    }

    function removeEducation(id) {
        setEducation(prev => prev.filter(edu => edu.id !== id));
    }

    function updateEducation(id, field, value) {
        setEducation(prev => prev.map(edu => (edu.id === id) ? { ...edu, [field]: value } : edu));
    }

    return (
        <div className="editor education-editor">
            <h2>Education</h2>

            <div className="education-editor-container">
                {education.map(edu => (
                    <EducationDetails
                        key={edu.id}
                        removeEducation={removeEducation}
                        updateEducation={updateEducation}
                        edu={edu}
                    />
                ))}
            </div>

            <button className="add-education-button" onClick={addEducation}>+ Add Education</button>
        </div>
    );
}

function EducationDetails({ updateEducation, removeEducation, edu }) {
    return (
        <form>
            <div className="form-group full-width">
                <label htmlFor={`institute-${edu.id}`}>Institute:</label>
                <input
                    type="text"
                    id={`institute-${edu.id}`}
                    value={edu.institute}
                    onChange={e => updateEducation(edu.id, "institute", e.target.value)}
                />
            </div>

            <div className="form-group full-width">
                <label htmlFor={`degree-${edu.id}`}>Degree:</label>
                <input
                    type="text"
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={e => updateEducation(edu.id, "degree", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`marks-obtained-${edu.id}`}>CGPA/Percentage:</label>
                <input
                    type="text"
                    id={`marks-obtained-${edu.id}`}
                    value={edu.marksObtained}
                    onChange={e => updateEducation(edu.id, "marksObtained", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`max-marks-${edu.id}`}>Max CGPA/Percentage:</label>
                <input
                    type="text"
                    id={`max-marks-${edu.id}`}
                    value={edu.marksTotal}
                    onChange={e => updateEducation(edu.id, "marksTotal", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`start-year-${edu.id}`}>Start Year:</label>
                <input
                    type="tel"
                    id={`start-year-${edu.id}`}
                    value={edu.startYear}
                    onChange={e => updateEducation(edu.id, "startYear", e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor={`end-year-${edu.id}`}>Expected Year of Graduation:</label>
                <input
                    type="tel"
                    id={`end-year-${edu.id}`}
                    value={edu.endYear}
                    onChange={e => updateEducation(edu.id, "endYear", e.target.value)}
                />
            </div>

            <button
                type="button"
                className="remove-education-button"
                onClick={() => removeEducation(edu.id)}
            >
                Remove Education
            </button>
        </form>
    );
}

export default Education;