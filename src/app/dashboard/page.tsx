// app/dashboard/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <Navbar />

            <div className="pt-28 pb-6 container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Main Card: Tanpa Shadow Orange, Border Tipis Minimalis */}
                    <div className="bg-zinc-900/40 backdrop-blur-md rounded-4xl p-10  border border-white/5 transition-colors duration-300 hover:border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-5xl font-bold mb-4 tracking-tight">
                                    Welcome to <br />
                                </h1>
                                    <span className="text-orange-500">Dashboard Pasir App</span>
                                <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                                    You’re all set! Experience your personalized dashboard with our clean
                                    <span className="text-orange-500 font-medium cursor-default"> Minimalist Dark</span> design.
                                </p>
                            <button className="px-8 py-3 mt-5 bg-white text-black font-bold rounded-xl transition-all hover:bg-orange-500 hover:text-white active:scale-95">
                                Get Started
                            </button>
                            {/* Tombol: Hover Solid, Tanpa Shadow Luar */}
                            </div>

                        </div>

                      
                    </div>
                    {/* Footer */}
                    <div className="h-6 mt-12 md:mt-20">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;