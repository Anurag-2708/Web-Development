import './sidebar.css'
import PersonalInfoIcon from '../../../assets/personal-info-icon.png'
import SummaryIcon from '../../../assets/summary-icon.png'
import EducationIcon from '../../../assets/education-icon.png'
import ExperienceIcon from '../../../assets/experience-icon.png'
import ProjectIcon from '../../../assets/project-icon.png'
import SkillsIcon from '../../../assets/skills-icon.png'


function Sidebar({ selected, setSelected }) {
    const sections = [
        { name: "Personal Info", icon: PersonalInfoIcon },
        { name: "Summary", icon: SummaryIcon },
        { name: "Education", icon: EducationIcon },
        { name: "Experience", icon: ExperienceIcon },
        { name: "Projects", icon: ProjectIcon },
        { name: "Skills", icon: SkillsIcon }
    ]

    return <aside className="sidebar">
        {sections.map(section => {
            return <button
                key={section.name}
                className={selected === section.name ? "active" : null}
                onClick={() => setSelected(section.name)}
            >
                <img src={section.icon} alt={`${section.name} icon`} />
                <div className="button-text">{section.name}</div>
            </button>
        })}
    </aside>
}

export default Sidebar;