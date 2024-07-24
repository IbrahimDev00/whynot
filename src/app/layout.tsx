// layout.tsx
'use client'
import React, { useState, useEffect } from 'react';
import LoadingPage from '@/app/component/LoadingPage';
import './globals.css';
import Head from './head'; // Import the head component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 50000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false); // This will hide the loading page
  };

  return (
    <html lang="en">
      <head>
        <Head /> {/* Render the head component */}
      </head>
      <body style={{ fontFamily: "'Open Sans', sans-serif" }}>
        {loading ? <LoadingPage onComplete={handleLoadingComplete} /> : children}
      </body>
    </html>
  );
}
