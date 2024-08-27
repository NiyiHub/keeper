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

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return(
        <div className="html body">
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem) => {
                return (
                    <Entry 
                        title={noteItem.title} 
                        content={noteItem.content} 
                        onDelete={deleteNote} 
                    />)
            })}
            <Footer />
        </div>
    )
}

export default App;