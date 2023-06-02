import PageSelect from "./pageSelect/PageSelect";
import "./Main.css"
import { Route, Routes } from "react-router-dom";
import AboutMe from "./content/aboutMe/AboutMe";
import Projects from "./content/projects/Projects";
import Contact from "./content/contact/Contact";

function Main() {
  return (
    <div className="flex w-full justify-center py-0 sm:py-8 md:w-py-9 lg:py-10 xl:py-11">
        <div className="flex flex-col items-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12">
            <div className="Banner w-full h-44 bg-green-400 rounded-t-lg">
                <video src="/video/banner_bg.mp4" autoPlay loop muted className="opacity-50"></video>
            </div>

            <div className="w-full relative flex flex-col bg-stone-800 rounded-b-lg">
                <div className="ProfileImage">
                    <img src="/img/profile.jpg" alt="" className="w-full h-full rounded-full object-cover"/>
                </div>

                <div className="TopContent w-full mt-20 flex flex-col">
                    <div className="w-full px-4 sm:px-20 py-4 flex flex-col items-center sm:items-start">
                        <h1>Kevin Geertjens</h1>
                        <h4 className="text-neutral-400">Software Engineering/AI Student</h4>
                    </div>
                    <PageSelect/>
                    <div className="Divider bg-neutral-600"></div>
                </div>

                <div className="MainContent w-full px-20 pt-4 pb-10 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<AboutMe/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;