import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Homepage from './pages/students/Homepage'
import CourseList from './pages/students/CourseList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import MyCourse from './pages/educator/MyCourse'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import AddCourse from './pages/educator/AddCourse'
import Navbar from './components/students/Navbar'

const App = () => {

  const isEducatorRoute = useMatch('/educator/*')

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course/:id' element={<CourseDetails />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/player/:courseId' element={<Player />} />
        <Route path='/loading/:path' element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
            <Route path='educator' element={<Dashboard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-course' element={<MyCourse />} />
            <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
