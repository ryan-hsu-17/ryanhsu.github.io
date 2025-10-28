const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-jet to-jet-200 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-davy_gray-900 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent">Ryan Hsu</span>
          </h1>
          <p className="text-xl md:text-2xl text-davy_gray-800 max-w-3xl mx-auto">
            Software Engineer | Data Science & Public Health @ UC Berkeley
          </p>
          <p className="text-lg text-davy_gray-700 max-w-2xl mx-auto">
            Building intelligent solutions with AI/ML and full-stack development
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-tiffany_blue to-non_photo_blue-400 text-black font-semibold rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-tiffany_blue/50"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-tiffany_blue text-tiffany_blue font-semibold rounded-lg hover:bg-tiffany_blue hover:text-black transition-all duration-300 shadow-lg shadow-tiffany_blue/30"
            >
              About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
