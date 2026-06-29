import './Main.css'
import Sidebar from './Sidebar/sidebar';
import Editor from './Editor/Editor';
import Preview from './Preview/Preview';

import { useState } from 'react';

function Main () {
    const [selected, setSelected] = useState("Personal Info");

    return <main>
        <Sidebar selected={selected} setSelected={setSelected}></Sidebar>
        <Editor selected={selected}></Editor>
        <Preview></Preview>
    </main>;
}

export default Main;