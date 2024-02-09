import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar2 from "./Components/NavBar2";
import MainHome from "./Pages/MainHome";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Blogs from "./Components/Blogs";
import ContactUs from "./Components/ContactUs";
import SeeBlog from "./Components/SeeBlog";
import Dashboard from "./Components/Dashboard";
import CreateAccount from "./Components/CreateAccount";
import LogIn from "./Components/LogIn";
import ShowPackages from "./Components/ShowPackages";
import ForgotPassword from "./Components/ForgotPassword";
import BronzePackage from "./Components/BronzePackage";
import OurPackages from "./Components/OurPackages";
import MyCourses from "./Components/MyCourses";
import Checkout from "./Components/Checkout";
import MyCoursesExplore from "./Components/MyCoursesExplore";
import Certificates from "./Components/Certificates";
import MyPayments from "./Components/MyPayments";
import DashboardContextProvider from "./Context/DashboardContextProvider";
import CodeTest from "./Components/CodeTest";
import AllCourses from "./Components/AllCourses";
import PaymentPage from "./Components/PaymentPage";
import AfterPaymentPage from "./Components/AfterPaymentPage";
import AdminPaymentVarificationPage from "./Components/AdminPaymentVarificationPage";
import RequireUser from "./RequereUser";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";
const App = () => {
    const { isLoggedIn, user } = useSelector((state) => state.auth);

    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (
            location.pathname == "/dummy" ||
            location.pathname == "/showCourses" ||
            location.pathname == "/signup" ||
            location.pathname == "/login" ||
            location.pathname == "/setNewPassword"
        ) {
            return setShowNavbar(false);
        } else {
            return setShowNavbar(true);
        }
    }, [location.pathname]);
    return (
        <div
            className={`${
                location.pathname == "/contactus"
                    ? "bg-gradient-to-b from-[#4B006E] to-[#FF6584]"
                    : "bg-[#000000]"
            } `}
        >
            <DashboardContextProvider>
                {showNavbar && <NavBar2 />}
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<MainHome />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/blog" element={<Blogs />} />
                    <Route path="/seeblog" element={<SeeBlog />} />
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/signup" element={<CreateAccount />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/all-courses" element={<AllCourses />} />
                    <Route
                        path="/setNewPassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="ourpackages" element={<OurPackages />} />

                    {/* --##-- */}

                    {/* Private Routes */}
                    <Route element={<RequireUser isLoggedIn={isLoggedIn} />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/course" element={<MyCourses />} />
                        <Route path="/check/:courseId" element={<Checkout />} />
                        <Route path="/showCourse/:courseId" element={<ShowPackages />} />
                        <Route
                            path="/exploreCourse"
                            element={<MyCoursesExplore />}
                        />
                        <Route path="/certificate" element={<Certificates />} />
                        <Route
                            path="/viewpackage/:courseId"
                            element={<BronzePackage />}
                        />
                        <Route path="/payments" element={<MyPayments />} />
                        <Route
                            path="/achievers/:courseId/payment/:id"
                            element={<PaymentPage />}
                        />
                        <Route
                            path="/achievers/payment/varification/pending"
                            element={<AfterPaymentPage />}
                        />
                        <Route
                            path="/achievers/admin/payment/varification"
                            element={<AdminPaymentVarificationPage />}
                        />
                    </Route>
                <Route path="*" element={<NotFound />} />

                    {/* --##-- */}
                </Routes>
            </DashboardContextProvider>

            {/* <CodeTest/> */}
            {location.pathname === "/signup" ||
            location.pathname === "/login" ||
            location.pathname === "/contactus" ||
            location.pathname === "/dashboard" ? null : (
                <Footer />
            )}
        </div>
    );
};

export default App;
