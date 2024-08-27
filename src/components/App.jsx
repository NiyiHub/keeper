import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
           return [...prevNotes, newNote];
        })
    }

    return(
        <div className="html body">
            <Header />
            <CreateArea onAdd={addNote} />
            <Entry key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    )
}

export default App;