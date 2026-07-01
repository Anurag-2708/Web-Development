import './PersonalInfoPreview.css'

import PhoneIcon from '../../../../assets/phone-icon.png'
import EmailIcon from '../../../../assets/email-icon.png'
import GitHubIcon from '../../../../assets/github-icon.svg'
import LinkedInIcon from '../../../../assets/linkedin-icon.png'

function PersonalInfoPreview({ info }) {
    return (
        <div className="personal-info-preview">
            <div className="full-name-preview">{info.fullName}</div>
            
            <div className="contact-info-preview">
                <PhoneNumber phoneNumber={info.phoneNumber} />
                <Email email={info.emailID} />
                <LinkedIn linkedInID={info.linkedInID} linkedInLink={info.linkedInLink} />
                <GitHub gitHubID={info.gitHubID} gtiHubLink={info.gitHubLink} />
            </div>
        </div>
    )
}

function PhoneNumber({ phoneNumber }) {
    return phoneNumber && <>
        <img src={PhoneIcon} alt="Phone Icon" height="10mm" />
        {phoneNumber}
    </>
}

function Email({ email }) {
    return email && <>
        <img src={EmailIcon} alt="Email Icon" height="10mm" />
        {email}
    </>
}

function LinkedIn({ linkedInID, linkedInLink }) {
    if (linkedInID && linkedInLink) {
        return <>
            <img src={LinkedInIcon} alt="LinkedIn Icon" height="10mm" />
            <a href={linkedInLink}>{linkedInID}</a>
        </>
    }

    return linkedInID && <>
        <img src={LinkedInIcon} alt="GitHub Icon" height="10mm" />
        {linkedInID}
    </>
}

function GitHub({ gitHubID, gtiHubLink }) {
    if (gitHubID && gtiHubLink) {
        return <>
            <img src={GitHubIcon} alt="GitHub Icon" height="10mm" />
            <a href={gtiHubLink}>{gitHubID}</a>
        </>
    }

    return gitHubID && <>
        <img src={GitHubIcon} alt="GitHub Icon" height="10mm" />
        {gitHubID}
    </>
}

export default PersonalInfoPreview;