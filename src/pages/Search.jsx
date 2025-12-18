import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  LogIn,
  Star,
  Home,
  ChevronLeft,
  Wifi,
  Wind,
  Coffee,
  LayoutGrid,
  Map as MapIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const navigate = useNavigate();
  const [view, setView] = useState("list");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Single Room",
    "Double Sharing",
    "Girls Only",
    "Boys Only",
    "With Food",
  ];

  const searchResults = [
    {
      id: 1,
      name: "Stanza Living - Osaka House",
      price: "₹12,500",
      type: "Professional/Student",
      location: "North Campus, Delhi",
      dist: "0.5 km from Metro",
      rating: 4.8,
      reviews: 124,
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Zolo Scholar - Premier",
      price: "₹10,200",
      type: "Student Only",
      location: "Kamla Nagar, Delhi",
      dist: "1.2 km from Metro",
      rating: 4.5,
      reviews: 89,
      img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Your-Space Residency",
      price: "₹15,000",
      type: "Luxury PG",
      location: "GTB Nagar, Delhi",
      dist: "0.2 km from Metro",
      rating: 4.9,
      reviews: 210,
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Housr Co-living",
      price: "₹18,500",
      type: "Working Professionals",
      location: "Civil Lines, Delhi",
      dist: "0.8 km from Metro",
      rating: 4.7,
      reviews: 56,
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-6 font-sans">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-slate-100 rounded-full transition text-slate-500"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex-1 flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-200">
            <Search className="text-slate-400" size={18} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider leading-none">
                Location
              </span>
              <span className="text-sm font-bold text-slate-800">
                {location}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                activeFilter === f
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">
              {searchResults.length * 32} PGs found
            </h2>
            <p className="text-xs font-medium text-slate-500">
              Showing results for "{location}"
            </p>
          </div>
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg transition ${
                view === "list"
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-400"
              }`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setView("map")}
              className={`p-2 rounded-lg transition ${
                view === "map"
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-400"
              }`}
            >
              <MapIcon size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {searchResults.map((pg) => (
            <div
              key={pg.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full sm:w-64 h-52 sm:h-auto overflow-hidden">
                <img
                  src={pg.img}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={pg.name}
                />
                <button className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur rounded-xl shadow-sm text-slate-800">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                </button>
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest">
                    {pg.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-900">
                      {pg.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
                  {pg.name}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-500 mb-4">
                  <MapPin size={14} className="text-slate-400" />
                  <span className="text-xs font-semibold">
                    {pg.location} •{" "}
                    <span className="text-indigo-500">{pg.dist}</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-auto text-slate-400">
                  <Wifi size={14} />
                  <Wind size={14} />
                  <Coffee size={14} />
                </div>
                <div className="h-[1px] bg-slate-100 w-full my-4"></div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-slate-900 leading-none">
                      {pg.price}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase mt-1">
                      Starting price
                    </span>
                  </div>
                  <button className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
