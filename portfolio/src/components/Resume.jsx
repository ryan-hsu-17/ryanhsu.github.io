const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 bg-gradient-to-br from-black via-jet to-black relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-12 text-center">
          Resume
        </h2>

        <div className="bg-jet-400/50 backdrop-blur-sm rounded-lg border-2 border-tiffany_blue shadow-xl shadow-tiffany_blue/30 p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-2xl font-bold text-davy_gray-900 mb-4">
              Download My Resume
            </h3>
            <p className="text-davy_gray-800 max-w-2xl mx-auto mb-8">
              Get a comprehensive overview of my experience, skills, and achievements
              in software engineering, AI/ML, and full-stack development.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black font-bold rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-tiffany_blue/50"
            >
              Download Resume (PDF)
            </a>

            <p className="text-davy_gray-700 text-sm">
              Last updated: October 2025
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-davy_gray-600">
            <h4 className="text-xl font-semibold text-davy_gray-900 mb-6">
              Quick Summary
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-jet-600/50 p-4 rounded-lg border-2 border-tiffany_blue/50 hover:border-tiffany_blue transition-all duration-300">
                <h5 className="text-tiffany_blue font-semibold mb-2">Education</h5>
                <p className="text-davy_gray-800">UC Berkeley<br/>Data Science & Public Health</p>
              </div>
              <div className="bg-jet-600/50 p-4 rounded-lg border-2 border-non_photo_blue/50 hover:border-non_photo_blue transition-all duration-300">
                <h5 className="text-non_photo_blue font-semibold mb-2">Projects</h5>
                <p className="text-davy_gray-800">AI/ML, Full-Stack<br/>3+ Major Projects</p>
              </div>
              <div className="bg-jet-600/50 p-4 rounded-lg border-2 border-tiffany_blue/50 hover:border-tiffany_blue transition-all duration-300">
                <h5 className="text-tiffany_blue font-semibold mb-2">Certification</h5>
                <p className="text-davy_gray-800">AWS Certified<br/>AI Practitioner</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl font-semibold text-davy_gray-900 mb-4">
              Let's Connect
            </h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://linkedin.com/in/ryan-hsu-t/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-jet-600 text-davy_gray-900 rounded-lg hover:bg-non_photo_blue hover:text-black transition-all duration-300 border border-non_photo_blue/50 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ryanhsu@berkeley.edu"
                className="px-6 py-2 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 font-semibold shadow-lg"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
