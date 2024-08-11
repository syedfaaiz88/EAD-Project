import { Link } from "react-router-dom";
import React from "react";
function Navbar() {
    return (
        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to='/' className="text-white text-xl font-bold">
                            Student Interest System
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to='/student-list' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Student List</Link>
                        <Link to='/add-student' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Student</Link>
                        <Link to='/dashboard' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                    </div>
                </div>
            </div>
            <div className="md:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <Link to='/student-list' className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Student List</Link>
                    <Link to='/add-student' className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 mt-1">Add Student</Link>
                    <Link to='/dashboard' className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 mt-1">Dashboard</Link>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;


