import { Container } from '@radix-ui/themes';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <Container size="3">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Back to Top Link */}
          <div className="order-1 md:order-2 mb-4 md:mb-0 text-center md:text-right">
            <a href="#top" className="text-gray-400 hover:text-white">
              Back to Top
            </a>
          </div>

          {/* Navigation Links */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="/about" className="hover:underline">About</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="https://github.com/cmsato09/DQMonstersDB-React" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Repo</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
