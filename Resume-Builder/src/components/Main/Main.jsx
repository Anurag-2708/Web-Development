import './Main.css'
import Sidebar from './Sidebar/sidebar';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

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

    const info = {fullName, phoneNumber, emailID, linkedInID, linkedInLink, gitHubID, gitHubLink};
    const infoSetters = {setFullName, setPhoneNumber, setEmailID, setLinkedInID, setLinkedInLink, setGitHubID, setGitHubLink};

    return <main>
        <Sidebar selected={selected} setSelected={setSelected} />
        <Editor selected={selected} infoSetters={infoSetters} />
        <Preview info={info} />
    </main>;
}

export default Main;