import { Route, Routes } from "react-router-dom";

import Login from "./features/auth/login/login"
import Signup from "./features/auth/signup/signup"
import UnauthPage from "./features/auth/unauthpage";
import NotFound from "./features/auth/notfoundpage";
import CheckAuth from "./features/common/checkauth"
import MainUserLayout from "./features/user/MainUserLayou";
import CourseListing from "./features/user/courses/course_listing/CourseListing";
import AuthLayout from "./features/auth/authlayout";




function App() {
  const authenticated = false;
  const user = { id:"sds", name: "ravi", role: "user" }
  
  return (
    <div>
      <Routes>

        <Route
          path="/"
          element={
            <CheckAuth
              isAuthenticated={authenticated}
              user={user}></CheckAuth>
          }
        />

        <Route path="/auth"
           element={
            <CheckAuth
              isAuthenticated={authenticated}
              user={user}>
                <AuthLayout/>
              </CheckAuth>
          }
        >    
           <Route path="login" element={<Login/>}  />
           <Route path="signup" element={<Signup/>}  />
        </Route>

        <Route path="/shop"
            element={
               
            <CheckAuth
              isAuthenticated={authenticated}
              user={user}> 
              <MainUserLayout/>
            </CheckAuth>
          }
        >
           <Route path="dashboard" element={
            <CourseListing/>
            }  />
        </Route>

        <Route path="/admin"
              element={
            <CheckAuth
              isAuthenticated={authenticated}
              user={user}></CheckAuth>
          }     
        >
        </Route>

        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
 
      </Routes>   
    </div>
  )
}

export default App
