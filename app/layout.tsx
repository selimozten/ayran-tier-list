// app/layout.tsx
import './globals.css';
import { FC, ReactNode } from 'react';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Ayran Tier List Extravaganza</title>
      </head>
      <body className="bg-gradient-to-br from-green-50 to-purple-50 min-h-screen flex flex-col">
        <header className="bg-yellow-100 text-center p-6">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Ayran Tier List Extravaganza 🥤
          </h1>
          <p className="text-gray-700">
            The most definitive Ayran rankings in the universe!
          </p>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-yellow-100 text-center p-4">
          <p>Made with love and way too much Ayran.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
