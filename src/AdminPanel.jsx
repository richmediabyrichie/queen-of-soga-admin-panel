import React from "react";
import { Home, Users, UserPlus, ClipboardList, BarChart, Printer, FileText, Settings, LogOut } from "lucide-react";

const Sidebar = () => (
  <div className="bg-purple-900 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
    <div>
      <div className="text-center mb-6">
        <div className="text-2xl font-bold tracking-wide">👑 Queen of SOGA</div>
        <div className="text-sm">Admin Panel 2025</div>
      </div>
      <nav className="space-y-4">
        <div className="flex items-center gap-2"><Home size={18}/> Dashboard Overview</div>
        <div className="flex items-center gap-2"><Users size={18}/> Judges Management</div>
        <div className="flex items-center gap-2"><UserPlus size={18}/> Candidates Management</div>
        <div className="flex items-center gap-2"><ClipboardList size={18}/> Criteria & Scoring</div>
        <div className="flex items-center gap-2"><BarChart size={18}/> View Results</div>
        <div className="flex items-center gap-2"><Printer size={18}/> Print / Export</div>
        <div className="flex items-center gap-2"><FileText size={18}/> Activity Log</div>
        <div className="flex items-center gap-2"><Settings size={18}/> Settings</div>
      </nav>
    </div>
    <div className="flex items-center gap-2 mt-10 cursor-pointer">
      <LogOut size={18}/> Logout
    </div>
  </div>
);

const AdminPanel = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Judges</h2>
            <p>4 Registered Judges</p>
            <button className="mt-2 border border-purple-900 text-purple-900 px-3 py-1 rounded">Manage Judges</button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Candidates</h2>
            <p>10 Active Candidates</p>
            <button className="mt-2 border border-purple-900 text-purple-900 px-3 py-1 rounded">Manage Candidates</button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Criteria</h2>
            <p>6 Active Criteria</p>
            <button className="mt-2 border border-purple-900 text-purple-900 px-3 py-1 rounded">Edit Criteria</button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Top 5</h2>
            <p>Top 5 Segment Criteria</p>
            <button className="mt-2 border border-purple-900 text-purple-900 px-3 py-1 rounded">Manage Top 5</button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">Final Q&A</h2>
            <p>Final Q&A Segment</p>
            <button className="mt-2 border border-purple-900 text-purple-900 px-3 py-1 rounded">Manage Q&A</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
