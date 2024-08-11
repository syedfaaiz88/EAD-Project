import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";

function App() {

  return (

    <>
      <Router>
        <div className="flex flex-col h-screen overflow-hidden">
          <Navbar />
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;
