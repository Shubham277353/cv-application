import PersonalLife from "./components/personalLife";
import Education from "./components/educationDetails";
import Experience from "./components/experience";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <div id="root-cv">
        <PersonalLife />
        <Education />
        <Experience />
      </div>
    </>
  );
}

export default App;
