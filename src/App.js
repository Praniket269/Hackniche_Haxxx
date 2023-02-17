import "./App.css";
import JobPage from "./MyComponents/HomePage/JobPage";
import { Navbar } from "./MyComponents/HomePage/Navbar";
import { MainPage } from "./MyComponents/LandingPage/MainPage";
import {NewNav} from "./MyComponents/HomePage/NewNav";

function App() {
  return (
    <>
      {/* <MainPage /> */}
      {/* <Navbar/> */}
      <NewNav />
      <JobPage />
    </>
  );
}

export default App;
