import { Error, Register, LandingPage } from "./pages/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddJob, AllJobs, Profile, Stats, SharedLayout } from './pages/Dashboard'
import ProtectedRoute from "./pages/ProtectedRoute"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>}>
            <Route path='addJob' element={<AddJob />} />
            <Route path='allJobs' element={<AllJobs />} />
            <Route path='profile' element={<Profile />} />
            <Route index element={<Stats />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<LandingPage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
