import React from 'react';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div class="wrapper">
    <Header />
    <Dashboard />
    <Sidebar />
    <Footer />
    </div>
  );
}
