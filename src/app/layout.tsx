// layout.tsx
'use client'
import React, { useState, useEffect, useCallback } from 'react';
import LoadingPage from '@/app/component/LoadingPage';
import './globals.css';
import Head from './head'; // Import the head component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false); // This will hide the loading page
  }, []);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 7500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

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