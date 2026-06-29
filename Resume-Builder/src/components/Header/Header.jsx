import ResumeIcon from '../../assets/resume-icon.png'
import './Header.css'

function Header() {
    return <header>
        <img src={ResumeIcon} alt="Logo" width="50px"/>
        <div className="header-text">
            <div className="website-name">Resume Builder</div>
            <div className="website-motto">Build. Review. Impress.</div>
        </div>
    </header>
}

export default Header;