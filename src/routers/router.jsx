import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Patient from "../pages/patient/Patient";
import Therapist from "../pages/therapist/Therapist";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import TherapistProfile from "../pages/patient/profile/TherapistProfile";
import TopTherapist from "../pages/patient/selection/TopTherapist";
import ByPain from "../pages/patient/selection/ByPain";
import BySpecialization from "../pages/patient/selection/BySpecialization";
import HealthAssessment from "../pages/patient/form/HealthAssessment";
import Onboard from "../pages/patient/onboarding/Onboard";
import ResLibrary from "../pages/patient/nav-items/ResLibrary";
import Analytic from "../pages/patient/nav-items/Analytic";
import Notification from "../pages/patient/nav-items/Notification";
import Chat from "../pages/patient/nav-items/Chat";
import Progress from "../pages/patient/nav-items/Progress";
import PatientProfile from "../pages/patient/profile/PatientProfile";
import SpHealthAssessment from "../pages/patient/form/SpHealthAssessment";
import PrivateRoute from "./PrivateRoute";
import Admin from "../pages/admin/Admin";
import SelectRole from "../components/common/SelectRole";
import Home from "../pages/landing/Home";
import Regimens from "../pages/therapist/Regiments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/role", element: <SelectRole /> },
      { path: "/register/:role", element: <Register /> },
      {
        path: "/patient",
        element: <Patient />,
        children: [
          // patient routes
          //selection
          { path: "", element: <ByPain /> },
          { path: "pain", element: <ByPain /> },
          { path: "specialization", element: <BySpecialization /> },
          { path: "top-therapist", element: <TopTherapist /> },

          //profile
          { path: "therapist-profile", element: <TherapistProfile /> },
          { path: "patient-profile", element: <PatientProfile /> },

          //Navbar items
          { path: "progress", element: <Progress /> },
          { path: "chat", element: <Chat /> },
          { path: "notification", element: <Notification /> },
          { path: "resource-library", element: <ResLibrary /> },
          { path: "analytic", element: <Analytic /> },

          //forms
          { path: "health-assessment", element: <HealthAssessment /> },
          { path: "sphealth-assessment", element: <SpHealthAssessment /> },
        ],
      },
      {
        path: "/therapist",
        element: (
          <PrivateRoute role="therapist">
            <Therapist />
          </PrivateRoute>
        ),
        children: [
          //selection
          { path: "", element: <ByPain /> },
          { path: "pain", element: <ByPain /> },
          { path: "specialization", element: <BySpecialization /> },
          { path: "top-therapist", element: <TopTherapist /> },

          //profile
          { path: "therapist-profile", element: <TherapistProfile /> },
          { path: "patient-profile", element: <PatientProfile /> },

          // Therapist routes
          { path: "patient-analytic", element: <Analytic /> },
          { path: "patients", element: <div>Patients</div> },
          { path: "regimens", element: <Regimens />},
          { path: "chat", element: <Chat />},
          { path: "notification", element: <Notification /> },
          { path: "resource-library", element: <ResLibrary />  },
        ],
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute role="admin">
            <Admin />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
