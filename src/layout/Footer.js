import { Container } from '@radix-ui/themes';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <Container size="3">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Source</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
