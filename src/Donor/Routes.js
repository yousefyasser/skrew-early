import React from "react";
import DonorDashboard from "./DonorDashboard";
import TeachingClasses from "./TeachingClasses";
import SearchRequests from "./SearchRequests";

import { Routes, Route } from "react-router-dom";
import ClinicVisits from "./ClinicVisits";
import LearnMore from "./LearnMore";
import WhatToDonate from "./WhatToDonate";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="Dashboard" element={<DonorDashboard />} />
      <Route path="Requests" element={<SearchRequests />} />
      <Route path="Requests/LearnMore/:id" Component={LearnMore} element={<LearnMore />} />
      <Route path="VolunteerActivity" element={<WhatToDonate />} />
      <Route path="VolunteerActivity/TeachingClasses" element={<TeachingClasses />} />
      <Route path="VolunteerActivity/ClinicVisits" element={<ClinicVisits />} />
    </Routes>
  );
};

export default DonorRoutes;
