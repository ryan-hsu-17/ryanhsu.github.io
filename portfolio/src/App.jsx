import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />

      {/* Footer */}
      <footer className="bg-black py-12 border-t-2 border-tiffany_blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent">
              Let's Connect!
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="https://linkedin.com/in/ryan-hsu-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-davy_gray-900 hover:text-tiffany_blue transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span className="text-davy_gray-600">•</span>
              <a
                href="https://github.com/ryanhsu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-davy_gray-900 hover:text-tiffany_blue transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="text-davy_gray-600">•</span>
              <a
                href="mailto:ryanhsu@berkeley.edu"
                className="text-davy_gray-900 hover:text-tiffany_blue transition-colors duration-300"
              >
                Email
              </a>
              <span className="text-davy_gray-600">•</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tiffany_blue hover:text-non_photo_blue transition-colors duration-300 font-semibold"
              >
                Résumé
              </a>
            </div>
            <p className="text-davy_gray-700 text-sm mt-4">
              &copy; 2025 Ryan Hsu. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
