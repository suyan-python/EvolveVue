// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard()
{
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedApp, setSelectedApp] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");


    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    useEffect(() =>
    {
        const fetchApps = async () =>
        {
            if (!token) return;

            try
            {
                const res = await fetch(`${API_URL}/api/admin/applications`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setApplications(data);
            } catch (err)
            {
                console.error("Error fetching applications:", err);
            } finally
            {
                setLoading(false);
            }
        };

        fetchApps();
    }, [token]);

    const filteredApplications = applications.filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() =>
    {
        if (!token) navigate("/admin/login");
    }, [token]);

    const handleLogout = () =>
    {
        localStorage.removeItem("adminToken"); // Remove token
        navigate("/admin/login");              // Redirect to login
    };


    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 text-lg animate-pulse">
                    Loading applications...
                </p>
            </div>
        );

    return (
        <div className="min-h-screen bg-gray-100 p-6 py-32">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="header text-4xl font-bold text-gray-800 mb-4 md:mb-0">
                    Job Applications Dashboard
                </h1>

                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                    />
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-medium"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredApplications.map((app) => (
                    <div
                        key={app._id}
                        className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {app.name}
                                </h2>
                                <a
                                    href={`mailto:${app.email}`}
                                    className="text-indigo-600 hover:underline text-sm"
                                >
                                    {app.email}
                                </a>
                            </div>
                            <span className="text-gray-400 text-xs">
                                {new Date(app.appliedAt).toLocaleDateString()}
                            </span>
                        </div>

                        {/* Resume & Cover Letter */}
                        <div className="mt-4 space-y-2">
                            <a
                                href={`${API_URL}/${app.resumePath}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-green-600 font-medium underline hover:text-green-800"
                            >
                                View Resume
                            </a>
                            <button
                                onClick={() => setSelectedApp(app)}
                                className="w-full text-left px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all font-medium"
                            >
                                View Cover Letter
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Cover Letter */}
            {selectedApp && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Cover Letter – {selectedApp.name}
                        </h2>
                        <p className="text-gray-700 whitespace-pre-line max-h-96 overflow-y-auto">
                            {selectedApp.coverLetter || "No cover letter submitted."}
                        </p>
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                            onClick={() => setSelectedApp(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
