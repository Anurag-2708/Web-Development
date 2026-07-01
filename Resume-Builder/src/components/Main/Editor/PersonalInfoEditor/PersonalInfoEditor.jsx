import './PersonalInfoEditor.css'

function Personalinfo({ infoSetters }) {
    return <div className="editor personal-info-editor">
        <h2>Personal Information</h2>
        <p>Add your basic Details</p>

        <form>
            <div className="form-group full-width">
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Smith"
                    onChange={e => infoSetters.setFullName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='1234567890'
                    onChange={e => infoSetters.setPhoneNumber(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email ID:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='youremail@exmaple.com'
                    onChange={e => infoSetters.setEmailID(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="LinkedInID">LinkedIn Username</label>
                <input
                    type="text"
                    id="LinkedInID"
                    name="LinkedInID"
                    placeholder='john-smith'
                    onChange={e => infoSetters.setLinkedInID(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="LinkedInLink">LinkedIn Profile Link</label>
                <input
                    type="text"
                    id="LinkedInLink"
                    name="LinkedInLink"
                    onChange={e => infoSetters.setLinkedInLink(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="GitHubID">GitHub Username</label>
                <input
                    type="text"
                    id="GitHubID"
                    name="GitHubID"
                    placeholder='john-smith-1999'
                    onChange={e => infoSetters.setGitHubID(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="GitHubLink">GitHub Profile Link</label>
                <input
                    type="text"
                    id="GitHubLink"
                    name="GitHubLink"
                    onChange={e => infoSetters.setGitHubLink(e.target.value)}
                />
            </div>
        </form>
    </div>;
}

export default Personalinfo;