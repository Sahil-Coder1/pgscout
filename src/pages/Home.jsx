import React, { useState } from "react";
import {
  Search,
  MapPin,
  LogIn,
  Star,
  Home,
  Shield,
  Zap,
  IndianRupee,
  LayoutList,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function App() {
  const pgData = [
    {
      name: "Stanza Living - Osaka House",
      price: "₹12,500",
      location: "Near North Campus, Delhi",
      rating: 4.8,
      tags: ["Student Friendly", "Wifi"],
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Zolo Scholar - Premier",
      price: "₹10,200",
      location: "Koramanagala, Bangalore",
      rating: 4.5,
      tags: ["Food Included", "AC"],
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Your-Space Residency",
      price: "₹15,000",
      location: "Hauz Khas, New Delhi",
      rating: 4.9,
      tags: ["Verified", "Gym"],
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const router = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const url = `/search=${search}`;
    router(url);
  };

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location permission denied");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information unavailable");
            break;
          case error.TIMEOUT:
            alert("Location request timed out");
            break;
          default:
            alert("An unknown error occurred");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-indigo-100 selection:text-indigo-700">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>
      <Navbar />
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] bg-indigo-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-purple-200 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6">
            <Shield size={14} />
            TRUSTED BY 10,000+ STUDENTS
          </div> */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Smarter, transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              PG discovery for students
            </span>
          </h2>

          <div className="mt-10 p-2 bg-white rounded-2xl shadow-2xl shadow-indigo-100 border border-slate-100 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto group">
            <div className="flex items-center gap-3 flex-1 px-4 py-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
              <MapPin className="text-indigo-500" size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search PG, Hostel near College..."
                className="w-full bg-transparent outline-none text-slate-700 font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="flex items-center gap-2 px-2 py-1 w-full md:w-auto">
              <button
                onClick={getUserLocation}
                className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-sm hover:bg-slate-100 transition whitespace-nowrap"
              >
                Nearby
              </button>
              <button
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all"
                onClick={handleSearch}
              >
                <Search size={18} /> Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: IndianRupee,
            title: "Student-Friendly Pricing",
            desc: "Pay monthly, not in lakhs",
          },
          {
            icon: Zap,
            title: "Flexible Stays",
            desc: "Monthly and short-term options",
          },
          {
            icon: LayoutList,
            title: "Clear Amenities",
            desc: "Wi-Fi, food, rules clearly listed",
          },
        ].map((feat, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <feat.icon size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{feat.title}</h4>
              <p className="text-sm text-slate-500">{feat.desc}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Top Rated Near You
          </h3>
          <button className="text-sm font-bold text-indigo-600 hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pgData.map((pg, i) => (
            <div
              key={i}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pg.img}
                  alt={pg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {pg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-slate-800">
                    {pg.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {pg.name}
                </h4>
                <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                  <MapPin size={14} />
                  <span>{pg.location}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-slate-900">
                      {pg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-bold uppercase ml-1">
                      / Month
                    </span>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
