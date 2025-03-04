import React, { useState } from 'react';
import { Code, Terminal, Cpu, Book, Users, MessageSquare, Bell, Search, Menu, BookOpen, Award, GitBranch, Monitor, Star, User, Calendar, ChevronRight, BarChart, Zap, Layout, HardDrive } from 'lucide-react';

const GeeksCollegeUI = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Code className="h-6 w-6 text-green-400 mr-2" />
              <div className="font-bold text-xl">GeeksCollege</div>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-gray-300 text-sm ml-8">
              <span className="px-3 py-1 rounded hover:bg-slate-700 cursor-pointer">Learn</span>
              <span className="px-3 py-1 rounded hover:bg-slate-700 cursor-pointer">Courses</span>
              <span className="px-3 py-1 rounded hover:bg-slate-700 cursor-pointer">Projects</span>
              <span className="px-3 py-1 rounded hover:bg-slate-700 cursor-pointer">Community</span>
              <span className="px-3 py-1 rounded hover:bg-slate-700 cursor-pointer">Hackathons</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for courses, tech stacks, mentors..."
                className="bg-slate-700 text-white placeholder-gray-400 rounded-full py-1 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative cursor-pointer p-1 rounded-full hover:bg-slate-700">
                <Bell size={20} />
                <span className="absolute top-0 right-0 bg-green-500 rounded-full w-2 h-2"></span>
              </div>
              <div className="cursor-pointer p-1 rounded-full hover:bg-slate-700">
                <MessageSquare size={20} />
              </div>
              <div className="cursor-pointer hidden md:block">
                <div className="flex items-center space-x-1 bg-slate-700 rounded-full px-3 py-1">
                  <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold text-slate-800">TG</div>
                  <span className="text-sm">Dev42</span>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden cursor-pointer">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 text-gray-300 px-4 py-2">
          <div className="flex flex-col space-y-2">
            <span className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">Learn</span>
            <span className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">Courses</span>
            <span className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">Projects</span>
            <span className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">Community</span>
            <span className="px-3 py-2 rounded hover:bg-slate-700 cursor-pointer">Hackathons</span>
          </div>
          <div className="relative mt-3 mb-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-700 text-white placeholder-gray-400 rounded-full py-1 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Tech Stacks */}
        <div className="hidden md:block w-60 bg-slate-900 text-gray-300 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                <User className="h-5 w-5 text-slate-800" />
              </div>
              <div>
                <div className="font-medium text-white">Dev42</div>
                <div className="text-xs text-gray-400">Full Stack Developer</div>
              </div>
            </div>
            
            <div className="space-y-1 mb-6">
              <div className="font-medium text-sm text-gray-400 mb-2">MY LEARNING</div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-slate-800 text-white">
                <Book size={18} />
                <span>My Courses</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <GitBranch size={18} />
                <span>My Projects</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <Calendar size={18} />
                <span>Schedule</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <Award size={18} />
                <span>Achievements</span>
              </div>
            </div>
            
            <div className="space-y-1 mb-6">
              <div className="font-medium text-sm text-gray-400 mb-2">TECH STACKS</div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <div className="text-blue-400"><Cpu size={18} /></div>
                <span>Python</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <div className="text-yellow-400"><Zap size={18} /></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <div className="text-green-400"><BarChart size={18} /></div>
                <span>Data Science</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <div className="text-pink-400"><Layout size={18} /></div>
                <span>Web Development</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <div className="text-purple-400"><HardDrive size={18} /></div>
                <span>DevOps</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="font-medium text-sm text-gray-400 mb-2">COMMUNITY</div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <Users size={18} />
                <span>Study Groups</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <MessageSquare size={18} />
                <span>Forums</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-800">
                <Terminal size={18} />
                <span>Hackathons</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome to Geeks College</h1>
              <p className="mb-6 text-gray-300">Level up your tech skills with our community-driven learning platform.</p>
              
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <button className="bg-green-500 hover:bg-green-600 text-slate-900 font-medium px-6 py-3 rounded-lg">
                  Explore Courses
                </button>
                <button className="bg-slate-700 border border-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-600">
                  Join a Hackathon
                </button>
              </div>
            </div>
          </div>
          
          {/* Content sections */}
          <div className="container mx-auto px-4 py-8">
            {/* Continue Learning section */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Continue Learning</h2>
                <a href="#" className="text-green-600 text-sm hover:underline">View all</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/api/placeholder/640/320" alt="Python Data Structures" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex justify-between items-end">
                        <span className="text-white font-medium">Python Data Structures</span>
                        <span className="text-xs bg-green-500 text-slate-900 px-2 py-1 rounded font-bold">65% complete</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800">SK</div>
                      <span className="text-sm text-gray-600">by Sarah Kim</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">Next: Advanced List Comprehensions</div>
                      <button className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200">
                        <Book size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Course Card 2 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/api/placeholder/640/320" alt="React Fundamentals" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex justify-between items-end">
                        <span className="text-white font-medium">React Fundamentals</span>
                        <span className="text-xs bg-green-500 text-slate-900 px-2 py-1 rounded font-bold">32% complete</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-800">JR</div>
                      <span className="text-sm text-gray-600">by Jason Rivera</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">Next: State Management</div>
                      <button className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200">
                        <Book size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Project Card */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/api/placeholder/640/320" alt="Full Stack Project" className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex justify-between items-end">
                        <span className="text-white font-medium">E-Commerce API</span>
                        <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">Project</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-xs font-bold text-red-800 border-2 border-white">A</div>
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800 border-2 border-white">B</div>
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-800 border-2 border-white">C</div>
                      </div>
                      <span className="text-sm text-gray-600">3 collaborators</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">Due in 5 days</div>
                      <button className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200">
                        <GitBranch size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Live Coding Sessions */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Upcoming Live Sessions</h2>
                <a href="#" className="text-green-600 text-sm hover:underline">See all</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Session Card 1 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs rounded mb-2 font-medium">LIVE CODING</span>
                        <h3 className="font-medium">Building a REST API with Node.js</h3>
                      </div>
                      <div className="bg-green-100 text-green-700 p-2 rounded-full">
                        <Calendar size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-800">MJ</div>
                        <div>
                          <div className="text-sm font-medium">Mark Johnson</div>
                          <div className="text-xs text-gray-500">Senior Backend Developer</div>
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">Free</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Today, 7:00 PM - 8:30 PM</div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-medium">Join Session</button>
                  </div>
                </div>
                
                {/* Session Card 2 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded mb-2 font-medium">WORKSHOP</span>
                        <h3 className="font-medium">Data Visualization with D3.js</h3>
                      </div>
                      <div className="bg-green-100 text-green-700 p-2 rounded-full">
                        <Calendar size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-800">LP</div>
                        <div>
                          <div className="text-sm font-medium">Lisa Park</div>
                          <div className="text-xs text-gray-500">Data Visualization Expert</div>
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">$19.99</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Tomorrow, 6:00 PM - 8:00 PM</div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-medium">Reserve Spot</button>
                  </div>
                </div>
                
                {/* Session Card 3 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded mb-2 font-medium">CODE REVIEW</span>
                        <h3 className="font-medium">Portfolio Project Reviews</h3>
                      </div>
                      <div className="bg-green-100 text-green-700 p-2 rounded-full">
                        <Calendar size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-800 border-2 border-white">AT</div>
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-800 border-2 border-white">RB</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Industry Experts</div>
                          <div className="text-xs text-gray-500">2 reviewers</div>
                        </div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">Free</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">Friday, 5:00 PM - 7:00 PM</div>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 font-medium">Submit Project</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hot Tech Stacks */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Popular Tech Stacks</h2>
                <a href="#" className="text-green-600 text-sm hover:underline">Explore all</a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Tech Stack Card - JavaScript */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Zap size={32} className="text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">JavaScript</h3>
                    <p className="text-gray-600 text-sm mb-4">Frontend, Backend, Mobile</p>
                    <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} />
                    </div>
                    <div className="text-sm text-gray-600 mb-4">4,236 active learners</div>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2 font-medium">Join Stack</button>
                  </div>
                </div>
                
                {/* Tech Stack Card - Python */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Cpu size={32} className="text-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Python</h3>
                    <p className="text-gray-600 text-sm mb-4">Data Science, AI, Backend</p>
                    <div className="flex items-center space-x-1 text-blue-500 mb-4">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <div className="text-sm text-gray-600 mb-4">5,129 active learners</div>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 font-medium">Join Stack</button>
                  </div>
                </div>
                
                {/* Tech Stack Card - Web Dev */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <Layout size={32} className="text-pink-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">Web Dev</h3>
                    <p className="text-gray-600 text-sm mb-4">HTML, CSS, UI Frameworks</p>
                    <div className="flex items-center space-x-1 text-pink-500 mb-4">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} />
                    </div>
                    <div className="text-sm text-gray-600 mb-4">3,872 active learners</div>
                    <button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-2 font-medium">Join Stack</button>
                  </div>
                </div>
                
                {/* Tech Stack Card - DevOps */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <HardDrive size={32} className="text-purple-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">DevOps</h3>
                    <p className="text-gray-600 text-sm mb-4">Cloud, CI/CD, Containers</p>
                    <div className="flex items-center space-x-1 text-purple-500 mb-4">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} />
                      <Star size={16} />
                    </div>
                    <div className="text-sm text-gray-600 mb-4">2,451 active learners</div>
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-lg py-2 font-medium">Join Stack</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Current Hackathon */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">Current Hackathon</h2>
                <a href="#" className="text-green-600 text-sm hover:underline">View all hackathons</a>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="relative h-48 bg-slate-800">
                  <div className="absolute inset-0">
                    <img src="/api/placeholder/1200/400" alt="Hackathon Banner" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30 flex items-center">
                    <div className="px-6">
                      <div className="text-green-400 font-bold mb-2">ACTIVE HACKATHON</div>
                      <h3 className="text-white text-2xl font-bold mb-2">Spring CodeFest 2025</h3>
                      <p className="text-gray-200">Build innovative solutions for real-world problems</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">Feb 25 - Mar 5, 2025</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Participants</div>
                      <div className="font-medium">1,245 coders</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Prize Pool</div>
                      <div className="font-medium">$25,000</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                    <button className="bg-green-500 hover:bg-green-600 text-slate-900 font-medium px-6 py-3 rounded-lg">
                      Join Hackathon
                    </button>
                    <button className="bg-slate-700 border border-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-slate-600">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="bg-slate-800 text-gray-300 py-8 mt-auto">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="h-6 w-6 text-green-400" />
                    <div className="font-bold text-xl">GeeksCollege</div>
                  </div>
                  <p className="text-sm">Empowering the next generation of tech innovators.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3">Learn</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-green-400">Courses</a></li>
                    <li><a href="#" className="hover:text-green-400">Projects</a></li>
                    <li><a href="#" className="hover:text-green-400">Tech Stacks</a></li>
                    <li><a href="#" className="hover:text-green-400">Live Sessions</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3">Community</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-green-400">Forums</a></li>
                    <li><a href="#" className="hover:text-green-400">Study Groups</a></li>
                    <li><a href="#" className="hover:text-green-400">Hackathons</a></li>
                    <li><a href="#" className="hover:text-green-400">Mentors</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3">Connect</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-green-400">Twitter</a></li>
                    <li><a href="#" className="hover:text-green-400">Discord</a></li>
                    <li><a href="#" className="hover:text-green-400">GitHub</a></li>
                    <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-center">
                © 2025 GeeksCollege. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default GeeksCollegeUI;
