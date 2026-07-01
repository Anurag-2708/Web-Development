import './Main.css'
import Sidebar from './Sidebar/sidebar';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

import "@fontsource/inter";

import { useState } from 'react';

function Main() {
    const [selected, setSelected] = useState("Personal Info");

    const [fullName, setFullName] = useState("John Smith");
    const [phoneNumber, setPhoneNumber] = useState(1234567890);
    const [emailID, setEmailID] = useState("youremail@example.com");
    const [linkedInID, setLinkedInID] = useState("john-smith");
    const [linkedInLink, setLinkedInLink] = useState("");
    const [gitHubID, setGitHubID] = useState("john-smith-1999");
    const [gitHubLink, setGitHubLink] = useState("");

    const info = { fullName, phoneNumber, emailID, linkedInID, linkedInLink, gitHubID, gitHubLink };
    const infoSetters = { setFullName, setPhoneNumber, setEmailID, setLinkedInID, setLinkedInLink, setGitHubID, setGitHubLink };

    const summaryPlaceholder = "My name is John Smith. I am a final year Engineering student at XYZ College of Technology. I have a strong interest in full-stack development, data structures, and algorithms. I am seeking opportunities to apply my technical skills, collaborate with experienced professionals, and contribute to impactful software projects.";
    const [summary, setSummary] = useState(summaryPlaceholder);

    const [education, setEducation] = useState([
        {
            id: crypto.randomUUID(),
            institute: "Institute XYZ",
            degree: "B.Tech in Electrical Engineering",
            startYear: "2024",
            endYear: "2028",
            marksObtained: "8.71",
            marksTotal: "10"
        }
    ]);

    return <main>
        <Sidebar
            selected={selected}
            setSelected={setSelected}
        />

        <Editor
            selected={selected}
            infoSetters={infoSetters}
            setSummary={setSummary}
            summaryPlaceholder={summaryPlaceholder}
            education={education}
            setEducation={setEducation}
        />

        <Preview
            info={info}
            summary={summary}
            education={education}
        />
    </main>;
}

export default Main;