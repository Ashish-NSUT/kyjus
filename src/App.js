import "./App.css";
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import ContactUs from "./components/ContactUs";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Profile from "./components/dashboard/Profile";
import Setting from "./components/dashboard/Setting";
import PrivateRoute from "./components/auth/PrivateRoute";
import { useSelector } from "react-redux";
import EnrolledCourses from "./components/dashboard/EnrolledCourses";
import WishList from "./components/dashboard/Cart/WishList";

function App() {
  const {user} = useSelector(state => state.profile);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="verify-email" element={<VerifyEmail/>}/>
          <Route path="Forgot-password" element={<ForgotPassword/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
          <Route path="update-password/:id" element={<UpdatePassword/>}/>
          <Route 
          element={ 
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }>
            <Route path="dashboard/my-profile" element={<Profile/>}/>
            <Route path="dashboard/setting" element={<Setting/>}/>

            {
              (user?.accountType === "Student" ) && (
                <>
                  <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
                  <Route path="dashboard/cart" element={<WishList/>}/>
                </>
              )
            }
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  );
}

export default App;
