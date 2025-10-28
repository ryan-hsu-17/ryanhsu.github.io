import { useState } from 'react';

const Education = () => {
  const [expandedDegree, setExpandedDegree] = useState(null);

  const education = [
    {
      degree: 'Bachelor of Arts - Data Science',
      school: 'University of California, Berkeley',
      period: '2022 - 2026',
      description: 'Comprehensive program covering data analysis, machine learning, and statistical methods.',
      relevantCourses: [
        'DATA C8: Foundations of Data Science',
        'UGBA 88: Data and Decisions',
        'COMPSCI 61A: Structure and Interpretation of Computer Programs',
        'COMPSCI 61B: Data Structures',
        'COMPSCI 70: Discrete Mathematics and Probability',
        'COMPSCI 188: Intro to Artificial Intelligence',
        'DATA C100: Principles & Techniques of Data Science',
        'DATA C101: Data Engineering',
        'DATA C104: Ethics of Data',
        'DATA C140: Probability for Data Science',
        'DATA 144: Data Mining and Analytics',
        'DIGHUM 100: Theory and Method in the Digital Humanities'
      ],
      otherCourses: [
        'MATH 1A: Calculus I',
        'MATH 1B: Calculus II',
        'MATH 54: Linear Algebra & Differential Equations',
        'PBHLTH 142: Introduction to Probability & Statistics'
      ]
    },
    {
      degree: 'Bachelor of Arts - Public Health',
      school: 'University of California, Berkeley',
      period: '2022 - 2026',
      description: 'Interdisciplinary program focusing on health policy, epidemiology, and community health.',
      activities: [
        'Taiwanese American Student Association (TASA)',
        'Volunteer Health Interpreters Organization (VHIO)',
        'EthiCAL Apparel',
        'Innovative Design',
        'Berkeley Residential Life'
      ],
      relevantCourses: [
        'PBHLTH 116: Seminar on Social, Political, and Ethical Issues in Health and Medicine',
        'PBHLTH 142: Introduction to Probability & Statistics',
        'PBHLTH 150A: Introduction to Epidemiology and Human Disease',
        'PBHLTH 150B: Human Health and Environment',
        'PBHLTH 150D: Introduction to Health Policy & Management',
        'PBHLTH C150E: Introduction to Community Health and Human Development',
        'PBHLTH 155A: Research Skills in Public Health and Medicine',
        'PBHLTH 198: Directed Group Study (Healthcare Interpreting)'
      ],
      otherCourses: [
        'CHEM 1A: General Chemistry',
        'CHEM 1AL: General Chemistry Lab',
        'BIOLOGY 1B: General Biology',
        'NUSCTX 10: Introduction to Human Nutrition',
        'PSYCH 1: General Psychology',
        'MUSIC 26AC: American Culture in Music',
        'SEASIAN R5B: Under Western Eyes (Reading & Composition)',
        'RHETOR R1A: Craft of Writing'
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified AI Practitioner', year: '2024', issuer: 'Amazon Web Services' }
  ];

  const toggleDegree = (index) => {
    setExpandedDegree(expandedDegree === index ? null : index);
  };

  return (
    <section id="education" className="min-h-screen py-20 bg-gradient-to-br from-jet via-black to-jet-200 relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-32 left-10 w-96 h-96 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-12 text-center">
          Education
        </h2>

        <div className="mb-12 space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-jet-400/50 backdrop-blur-sm rounded-lg border-2 border-non_photo_blue/50 hover:border-non_photo_blue transition-all duration-300 hover:shadow-xl hover:shadow-non_photo_blue/30"
            >
              <div
                className="p-8 cursor-pointer"
                onClick={() => toggleDegree(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-davy_gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-non_photo_blue text-lg font-semibold mb-2">{edu.school}</p>
                    <p className="text-davy_gray-700 font-medium mb-4 px-3 py-1 bg-non_photo_blue/20 rounded-full inline-block border border-non_photo_blue/30">{edu.period}</p>
                    <p className="text-davy_gray-800">{edu.description}</p>
                  </div>
                  <button className="ml-4 text-tiffany_blue hover:text-non_photo_blue transition-colors">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${expandedDegree === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {expandedDegree === index && (
                <div className="px-8 pb-8 space-y-6 animate-fade-in">
                  {edu.activities && (
                    <div>
                      <h4 className="text-lg font-semibold text-tiffany_blue mb-3">Activities & Societies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-tiffany_blue/20 text-davy_gray-800 rounded-full text-sm border border-tiffany_blue/30"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold text-non_photo_blue mb-3">Relevant Coursework:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.relevantCourses.map((course, i) => (
                        <li key={i} className="text-davy_gray-800 flex items-start text-sm">
                          <span className="text-non_photo_blue mr-2">▹</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-tiffany_blue mb-3">Other Coursework:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.otherCourses.map((course, i) => (
                        <li key={i} className="text-davy_gray-800 flex items-start text-sm">
                          <span className="text-tiffany_blue mr-2">▹</span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-tiffany_blue shadow-xl shadow-tiffany_blue/30 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-tiffany_blue to-non_photo_blue-400 p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <p className="text-black font-bold text-xl mb-2">{cert.name}</p>
                <p className="text-jet font-semibold">{cert.issuer}</p>
                <p className="text-jet font-medium text-sm mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
