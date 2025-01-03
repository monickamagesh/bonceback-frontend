import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import RecommendationBar from "../../components/common/RecommendationBar";
import ProfileChip from "../../components/common/ProfileClip";
import TherapistSidebar from "../../components/common/TherapistSidebar";
import { useSelector } from "react-redux";

const Therapist = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <section className="flex flex-row  gap-4 items-start justify-start bg-[#F0F0F0]">
      <header className="fixed top-0 m-4 rounded-2xl bg-white p-4 z-40  w-[20%] h-screen">
        <TherapistSidebar />
        
      </header>
      <section className="lg:w-1/5 sm:w-2/5 h-screen w-ful mr-16"></section>
      <main className="my-4">
      
      <div className="mb-24">
      <RecommendationBar/>
      </div>
      <Outlet />
      </main>
    </section>
  );
};

export default Therapist;
