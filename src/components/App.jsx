import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import CreateArea from "./CreateArea";

function App() {
    function addNote(note) {}

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