const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'WittGen Biotechnologies',
      period: 'Oct 2025 – Present',
      description: 'Constructing and redeveloping the company website using Next.js, TailwindCSS, and AWS deployment with CI/CD pipelines to improve user experience and modernize the technology stack.',
      achievements: [
        'Building modern, responsive website with Next.js and TailwindCSS',
        'Implementing AWS deployment infrastructure with CI/CD pipelines for automated deployment',
        'Collaborating with stakeholders to gather requirements and implement new features'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'HopeKCC',
      period: 'June 2025 – Sept 2025',
      description: 'Collaborated on an open-source, cross-platform music synchronization app enabling real-time display of ChordPro scores, developed by interns across web, mobile, backend, and QA teams under Agile workflows.',
      achievements: [
        'Contributed to responsive web admin dashboard for managing ChordPro-formatted music libraries using modern frameworks',
        'Integrated frontend features with backend APIs for seamless library management',
        'Assisted with GCP deployment of Flask services to Cloud Run, resolving containerization, IAM, and service routing issues in CI/CD pipeline'
      ]
    },
    {
      title: 'Web Development Associate',
      company: 'EthiCAL Apparel',
      period: 'Sept 2023 – Present',
      description: 'Managed online storefront operations and developed new features to enhance customer engagement and sales.',
      achievements: [
        'Revamped custom orders page, creating a streamlined and user-friendly ordering system',
        'Managed online storefront attracting 10,000+ unique visitors annually',
        'Developed and implemented new sales promotions, increasing customer engagement and sales'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Yale School of Medicine',
      period: 'Summer 2022',
      description: 'Supported international medical research study on capnography trace scoring during facemask ventilation.',
      achievements: [
        'Recruited 20+ physicians for international study on capnography trace scoring',
        'Collaborated with Dr. William Rosenblatt to expand field knowledge in medical research',
        'Contributed to data collection and physician engagement for the study'
      ]
    }
  ];

  const leadership = [
    {
      title: 'Internal Vice President',
      organization: 'Taiwanese American Student Association',
      period: 'Sept 2022 – Present',
      achievements: [
        'Led programming for 100+ members with biweekly events and logistics across 40+ person board',
        'Managed budgets and payments on CalLink/Venmo',
        'Grew club finances by 125% and standardized reimbursement processes'
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-br from-black via-jet to-black relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-12 text-center">
          Experience
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-davy_gray-900 mb-6">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-tiffany_blue/50 hover:border-tiffany_blue transition-all duration-300 hover:shadow-xl hover:shadow-tiffany_blue/30 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-davy_gray-900 group-hover:text-tiffany_blue transition-colors">{exp.title}</h3>
                    <p className="text-tiffany_blue text-lg font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-davy_gray-700 font-medium mt-2 md:mt-0 px-4 py-1 bg-tiffany_blue/20 rounded-full border border-tiffany_blue/30">{exp.period}</span>
                </div>

                <p className="text-davy_gray-800 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  <h4 className="text-tiffany_blue font-semibold">Key Achievements:</h4>
                  <ul className="list-none space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-davy_gray-800 flex items-start">
                        <span className="text-tiffany_blue mr-2 text-xl">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-davy_gray-900 mb-6">Leadership Experience</h3>
          <div className="space-y-8">
            {leadership.map((lead, index) => (
              <div
                key={index}
                className="bg-jet-400/50 backdrop-blur-sm p-8 rounded-lg border-2 border-non_photo_blue/50 hover:border-non_photo_blue transition-all duration-300 hover:shadow-xl hover:shadow-non_photo_blue/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-davy_gray-900">{lead.title}</h3>
                    <p className="text-non_photo_blue text-lg font-semibold">{lead.organization}</p>
                  </div>
                  <span className="text-davy_gray-700 font-medium mt-2 md:mt-0 px-4 py-1 bg-non_photo_blue/20 rounded-full border border-non_photo_blue/30">{lead.period}</span>
                </div>

                <div className="space-y-2">
                  <ul className="list-none space-y-1">
                    {lead.achievements.map((achievement, i) => (
                      <li key={i} className="text-davy_gray-800 flex items-start">
                        <span className="text-non_photo_blue mr-2 text-xl">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
