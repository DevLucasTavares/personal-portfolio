import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, AboutPage, ExperiencesPage, ProjectsPage } from '../pages'
import { Header, Footer } from "../components";

export const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/exp" element={<ExperiencesPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}