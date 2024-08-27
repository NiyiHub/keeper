import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
    return(
        <div className="html body">
            <Header />
            <CreateArea />
            {notes.map((noteEntry) => (
                    <Entry 
                    key={noteEntry.key}
                    title={noteEntry.title}
                    content={noteEntry.content}
                    />
                ))}
            <Footer />
        </div>
    )
}

export default App;