import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddAcademy from './Components/AddAcademy';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ViewAcademy from './Components/ViewAcademy';
import UdpdateAcademy from './Components/UdpdateAcademy';
import UpdateCourse from './Components/Courses/UpdateCourse'
import ViewCourses from './Components/Courses/ViewCourses';
import AddCourse from './Components/Courses/AddCourse';
import ViewStudents from './Components/Students/ViewStudents';
import UpdateStudent from './Components/Students/UpdateStudent';
import AddStudent from './Components/Students/AddStudent';
import ViewInstitutes from './Components/User/ViewInstitutes';
import UserCourses from './Components/User/UserCourses';
import UserStudents from './Components/User/UserStudents';
import AdminNavbar from './Components/AdminNavbar';





function App() {
  return (
    <BrowserRouter>
        <AdminNavbar/>
        <div className='App'>
          <Routes>


            <Route exact path="/" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/ViewAcademy" element={<ViewAcademy />}></Route>
            <Route exact path="/update/academy" element={<UdpdateAcademy />}></Route>
            <Route exact path="/addacademy" element={<AddAcademy />} ></Route>
            <Route exact path="/AdminNavbar" element={<AdminNavbar/>}></Route>
            <Route exact path="/viewCourses" element={<ViewCourses />}></Route>
            <Route exact path="/update/course" element={<UpdateCourse />}></Route>
            <Route exact path="/addCourse" element={<AddCourse />}></Route>
            <Route exact path="/ViewStudents" element={<ViewStudents />}></Route>
            <Route exact path="/update/student" element={<UpdateStudent />}></Route>
            <Route exact path="/addStudent" element={<AddStudent />}></Route>
            <Route exact path="/user/viewinstitutes" element={<ViewInstitutes />}></Route>
            <Route exact path="/user/courses" element={<UserCourses/>}></Route>
            <Route exact path="/user/students" element={<UserStudents/>}></Route>

            

          </Routes>
        </div>
   
    </BrowserRouter>
  );
}

export default App