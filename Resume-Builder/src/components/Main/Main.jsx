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
        },
        {
            id: crypto.randomUUID(),
            institute: "ABCD School",
            degree: "Higher Secondary Certificate",
            startYear: "2008",
            endYear: "2024",
            marksObtained: "97.2%",
            marksTotal: ""
        }
    ]);

    const [experience, setExperience] = useState([
        {
            id: crypto.randomUUID(),
            companyName: "Meta",
            roleTitle: "Python Intern",
            startDate: "2025-05",
            endDate: "2025-07",
            description: "Worked as Python Intern\nPart of several real world projects"
        },
        {
            id: crypto.randomUUID(),
            companyName: "The Flower Company",
            roleTitle: "Flower Admirer",
            startDate: "2024-05",
            endDate: "2025-02",
            description: "Admired Flowers all day long\nLearnt about 74 different types of flowers\nDeveloped a new pink dye using an artifically synthesized flower"
        },
        {
            id: crypto.randomUUID(),
            companyName: "Green Goblin Smashers",
            roleTitle: "Goblin General",
            startDate: "2023-05",
            endDate: "2023-12",
            description: "Commanded over 7 thousand goblin troops as a Goblin General\nWon 5 Great Wars and Ended the Goblin Tyrant's Rule\nHailed as the Greatest Goblin to Ever Live"
        }
    ])

    const [projects, setProjects] = useState([
        {
            id: crypto.randomUUID(),
            title: "Resume Builder Web Application",
            startDate: "2026-06",
            endDate: "2026-07",
            description: "Built a Resume Builder Application using React State Variable\nImplemented sections for Personal Info, Education, Experience and Projects"
        },
        {
            id: crypto.randomUUID(),
            title: "Alpaca Racing Sim",
            startDate: "2022-01",
            endDate: "2022-03",
            description: "Developed an Alpaca Racing Game\nOver 100k downloads in Google Play\nUsed Unreal Engine\nForced Cute Alpacas to race for their lives"
        }
    ])

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
            experience={experience}
            setExperience={setExperience}
            projects={projects}
            setProjects={setProjects}
        />

        <Preview
            info={info}
            summary={summary}
            education={education}
            experience={experience}
            projects={projects}
        />
    </main>;
}

export default Main;