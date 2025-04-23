// app/layout.tsx
"use client";

import { useState, useEffect } from "react";
import { LoadingSpinner } from "./admin_components/LoadingSpinner";
import LeftSidebar from "./admin_components/LeftSidebar";
import MobileHeader from "./admin_components/MobileHeader";
// ... other imports
import { PageTransition } from './admin_components/PageTransition';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {isLoading && <LoadingSpinner />}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <LeftSidebar />
      </div>

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto pt-16 lg:pt-0 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="p-6">
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </main>
    </div>
  );
}