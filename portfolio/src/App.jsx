import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';

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
      <Resume />

      {/* Footer */}
      <footer className="bg-black py-12 border-t-2 border-tiffany_blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com/in/ryan-hsu-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-jet-600 text-davy_gray-900 rounded-lg hover:bg-non_photo_blue hover:text-black transition-all duration-300 border border-non_photo_blue/50 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ryanhsu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-jet-600 text-davy_gray-900 rounded-lg hover:bg-tiffany_blue hover:text-black transition-all duration-300 border border-tiffany_blue/50 font-medium"
              >
                GitHub
              </a>
              <a
                href="mailto:ryanhsu@berkeley.edu"
                className="px-6 py-2 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 font-semibold shadow-lg"
              >
                Email
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
