import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs";
import MainNavigation from "./MainNavigation";
import NotFound from "./components/NotFound";
import QAPics from "./QAPics";

import { AppContext } from "./AppContext";
import { useState } from "react";


function App() {

  const [theme, setTheme] = useState("spring");

  return (
    <>
      <AppContext.Provider value={{ theme }}>
        <MainNavigation />
        <Routes>
          <Route path='/' element={<Blogs />} />
          {/* <Route path="/new-blog" element={<NewBlog />} /> */}
          {/* <Route path="/new" element={<NewBlog />} /> */}
          <Route path="/qa/pics/:id" element={<QAPics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </>
  )
}

export default App
