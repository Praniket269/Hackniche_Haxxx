import './App.css';
import {MainPage} from './MyComponents/LandingPage/MainPage'
import {NewNav} from './MyComponents/HomePage/NewNav';
import FamilySupport from './MyComponents/FamilySupport';
import PensionScheme from './MyComponents/PensionScheme';


function App() {
  return (
    <>
    <NewNav/>
    <PensionScheme/>
    {/* <FamilySupport/> */}
      {/* <MainPage/> */}
    </>
  );
}

export default App;
