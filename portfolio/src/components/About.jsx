const About = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'SQL', 'R', 'Scheme'] },
    { category: 'AI/ML & Data', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'XGBoost'] },
    { category: 'Web & Cloud', items: ['Flask', 'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'GCP', 'AWS', 'Vercel'] },
    { category: 'Tools & APIs', items: ['Git', 'Docker', 'GitHub Actions', 'REST/JSON', 'OpenAI API', 'Hume AI', 'Visa Developer Platform'] }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-jet via-black to-jet-200 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-tiffany_blue/50 hover:border-tiffany_blue shadow-lg shadow-tiffany_blue/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-davy_gray-900 mb-4">Who I Am</h3>
              <p className="text-davy_gray-800 leading-relaxed">
                I'm a Data Science and Public Health student at UC Berkeley with a passion for
                building intelligent, user-centric applications. I combine technical expertise in
                AI/ML with a deep understanding of human-centered design to create solutions that
                make a real impact.
              </p>
            </div>

            <div className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-non_photo_blue/50 hover:border-non_photo_blue shadow-lg shadow-non_photo_blue/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-davy_gray-900 mb-4">What I Do</h3>
              <p className="text-davy_gray-800 leading-relaxed">
                I specialize in full-stack development and machine learning, with experience building
                scalable web applications, training AI models, and deploying cloud infrastructure.
                From building budgeting apps to poker bots, I love turning creative ideas into reality.
              </p>
            </div>
          </div>

          <div className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-tiffany_blue shadow-xl shadow-tiffany_blue/30">
            <h3 className="text-2xl font-semibold text-davy_gray-900 mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-tiffany_blue mb-3">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-tiffany_blue to-non_photo_blue-400 text-black rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-jet-400/50 backdrop-blur-sm p-6 rounded-lg border-2 border-non_photo_blue/50 inline-block">
            <h3 className="text-xl font-semibold text-davy_gray-900 mb-3">Multilingual</h3>
            <p className="text-davy_gray-800">
              English • Mandarin Chinese (healthcare interpreting) • Spanish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
