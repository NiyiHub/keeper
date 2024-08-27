import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Note";
import CreateArea from "./CreateArea";

function App() {
    return(
        <div className="html body">
            <Header />
            <CreateArea />
            <Entry key={1} title="Note title" content="Note content" />
            <Footer />
        </div>
    )
}

export default App;