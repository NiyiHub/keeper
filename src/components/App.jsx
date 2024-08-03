import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import notes from "../notes";

const createEntry = noteEntry => {
    return(
        <Entry 
        key={noteEntry.id}
        title={noteEntry.title}
        content={noteEntry.content}
        />
    )
}

function App() {
    return(
        <div className="html body">
            <Header />
            {notes.map(createEntry)}
            <Footer />
        </div>
    )
}

export default App;