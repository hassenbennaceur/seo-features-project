'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Menu , Search, Settings, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: "Jun 10", value: 8 },
  { date: "Jun 11", value: 8.5 },
  { date: "Jun 12", value: 9 },
  { date: "Jun 13", value: 9.2 },
  { date: "Jun 14", value: 10 },
  { date: "Jun 15", value: 9.8 },
  { date: "Jun 16", value: 10.15 },
];



export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Title + Button */}
      <div className="text-center mb-12">
        <div className="mb-4 inline-flex items-center gap-2 bg-purple-900/30 text-purple-300 text-xs px-3 py-1 rounded-full">
          <span className="uppercase tracking-wide">New</span> Latest integration just arrived
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Boost your <span className="text-purple-500">rankings</span> with AI.
        </h1>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Start for free
        </button>
      </div>

      {/* Dashboard Card */}
      <div className="relative w-full max-w-5xl rounded-2xl p-1 bg-gradient-to-br from-purple-700/50 via-purple-800/30 to-purple-900/20 shadow-[0_0_60px_10px_rgba(128,0,255,0.3)]">
        <div className="rounded-2xl bg-[#0e0e10] p-8">
          {/* Your dashboard content here */}
          <div className="flex min-h-screen bg-gradient-to-b from-black via-[#1a0b2e] to-[#250c4c] text-white">
                
                {/* Sidebar */}
                <aside className="w-64 bg-[#0a0a0a] p-6 hidden md:block">
                  <div className="text-2xl font-bold mb-8">Site Overview</div>
                  <nav className="flex flex-col gap-4 text-muted-foreground">
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                      <Menu className="h-4 w-4" /> Site Overview
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:text-white">
                      <Menu className="h-4 w-4" /> Analytics
                    </a>
                    {/* Add more sidebar items... */}
                  </nav>
                </aside>
          
                {/* Main content */}
                <div className="flex-1 p-6 flex flex-col gap-6">
                  
                  {/* Topbar */}
                  <div className="flex items-center justify-between gap-4">
                    <Input placeholder="Search..." className="max-w-xs bg-[#121212] text-white border-none" />
                    <Button variant="ghost">
                      <Settings className="h-5 w-5" />
                    </Button>
                  </div>
          
                  {/* Date Range */}
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="text-purple-400 border-purple-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Jun 24 → Today
                    </Button>
                  </div>
          
                  {/* Cards and Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Visibility Card */}
                    <Card className="bg-[#121212] border-none">
                      <CardHeader>
                        <CardTitle className="text-lg">Visibility</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold">10.15% <span className="text-green-400 text-xl">+5.6%</span></div>
                        <ResponsiveContainer width="100%" height={200}>
                          <LineChart data={data}>
                            <XAxis dataKey="date" hide />
                            <YAxis hide />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={2} dot={false} />
                          </LineChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
          
                    {/* Organic Keywords Card */}
                    <Card className="bg-[#121212] border-none">
                      <CardHeader>
                        <CardTitle className="text-lg">Organic Keywords</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-4xl font-bold">35.6K <span className="text-red-400 text-xl">-2.5%</span></div>
                        <ul className="mt-6 space-y-2 text-muted-foreground text-sm">
                          <li>• online payment processing</li>
                          <li>• secure transactions</li>
                          <li>• online transaction platform</li>
                          <li>• online shopping payments</li>
                          {/* Add more keywords */}
                        </ul>
                      </CardContent>
                    </Card>
          
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
