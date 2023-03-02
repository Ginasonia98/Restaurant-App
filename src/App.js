import React from "react";
import { Route,Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {Header, CreateContainer, MainContainer} from "./components";

function App() {
  return (
    <AnimatePresence mode='wait'>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>

      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 p-8 w-full">
        <Routes>
            <Route path="/*" element={<MainContainer/>}/>
            <Route path="/createItem" element={<CreateContainer/>}/>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
