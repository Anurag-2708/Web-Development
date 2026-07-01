import './EducationPreview.css'

function EducationPreview({ education }) {
    if (education.length === 0) return null;

    function EducationEntry(edu) {
        return (
            <div className="education-entry">
                <div className="education-line">
                    <div>{edu.institute}</div>
                    <div className="year">{edu.startYear} - {edu.endYear}</div>
                </div>
                <div className="education-line">
                    <div>{edu.degree}</div>
                    {(edu.marksTotal === "")? <div>GRade: {edu.marksObtained}</div> : <div>Grade: {edu.marksObtained} / {edu.marksTotal}</div>}
                </div>
            </div>
        );
    }

    return (
        <div className="education-preview">
            <div className="section-heading">Education</div>

            {education.map(edu => (EducationEntry(edu)))}
        </div>
    );
}

export default EducationPreview;