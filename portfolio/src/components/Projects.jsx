const Projects = () => {
  const projects = [
    {
      title: 'Save Dinos: A Visa Wallet',
      description: 'Built a Next.js and MongoDB student wallet that turns budgeting into gameplay, with goals that hatch and evolve dinosaurs, social streaks and badges, and a clean Tailwind UI to drive engagement.',
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Visa Developer Platform'],
      github: '#',
      demo: 'https://calhacks-viego.vercel.app',
      achievements: [
        'Integrated Visa Developer Platform with mutual TLS and MCC-based spend controls',
        'Executed 100+ end-to-end Visa sandbox interactions',
        'Separated payment flows from app data for security and scale'
      ]
    },
    {
      title: 'Pacman AI Game',
      description: 'Implemented classic and informed search algorithms, multi-agent controllers, and reinforcement learning agents to solve maze navigation and increase win rate 8x (10% to 80%) against baselines.',
      technologies: ['Python', 'AI/ML', 'Q-Learning', 'Bayes Nets', 'HMM'],
      github: '#',
      demo: '#',
      achievements: [
        'Implemented DFS, BFS, Uniform Cost, A* with admissible/consistent heuristics',
        'Developed Minimax and Expectimax with alpha–beta pruning',
        'Trained Q-learning agents and built probabilistic inference pipelines'
      ]
    },
    {
      title: 'Hume AI Poker Bot',
      description: 'Created a bot that utilizes Hume AI\'s Expression Management API to detect key emotions that can dictate poker performance and skill level, integrated with ChatGPT API for game advice.',
      technologies: ['Hume AI API', 'ChatGPT API', 'Python', 'Emotion Detection'],
      github: '#',
      demo: 'https://calhacks-hume-poker.vercel.app',
      achievements: [
        'Integrated Hume AI Expression Management API for emotion detection',
        'Utilized ChatGPT API to advise players using probability and game state',
        'Combined emotion analysis with strategic poker advice for new players'
      ]
    },
    {
      title: 'Deep Learning with PyTorch',
      description: 'Implemented neural network architectures including MLPs, CNNs, and RNNs with attention mechanisms, achieving high accuracy on digit classification and language identification tasks through systematic hyperparameter tuning.',
      technologies: ['PyTorch', 'Deep Learning', 'CNNs', 'RNNs', 'Attention Mechanisms', 'Python'],
      github: '#',
      demo: '#',
      achievements: [
        'Built MNIST digit classifier achieving 97-98% validation accuracy with 2-layer MLP, improved to 98-99% with CNN',
        'Developed character-level language identifier with custom RNN block reaching 81-89% accuracy',
        'Implemented scaled dot-product attention mechanism with hyperparameter ablation studies',
        'Tracked performance metrics including ROC-AUC, F1-score, and model calibration',
        'Optimized training with batching, early stopping, and documented loss curves for analysis'
      ]
    },
    {
      title: 'Titanic Survival Prediction',
      description: 'Developed ensemble machine learning models to predict passenger survival in the Titanic disaster, achieving top 20% ranking in DATA 144 class competition through advanced feature engineering and model optimization.',
      technologies: ['Python', 'XGBoost', 'Random Forests', 'scikit-learn', 'Pandas', 'Ensemble Methods'],
      github: '#',
      demo: '#',
      achievements: [
        'Achieved top 20% ranking in competitive class-wide Kaggle-style competition',
        'Engineered features from passenger demographics, family relationships, and socioeconomic indicators',
        'Built ensemble model combining XGBoost, Random Forests, and Logistic Regression',
        'Performed extensive hyperparameter tuning and cross-validation for model optimization',
        'Analyzed feature importance to identify key survival predictors (gender, class, age, fare)'
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-black via-jet to-black relative overflow-hidden">
      {/* Blue accent circles */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-tiffany_blue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-non_photo_blue opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-tiffany_blue to-non_photo_blue bg-clip-text text-transparent mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-jet-400/50 backdrop-blur-sm rounded-lg border-2 border-tiffany_blue/50 overflow-hidden hover:border-tiffany_blue transition-all duration-300 hover:shadow-xl hover:shadow-tiffany_blue/30 group"
            >
              <div className="p-6">
                  <h3 className="text-2xl font-bold text-davy_gray-900 mb-3">{project.title}</h3>
                  <p className="text-davy_gray-800 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-tiffany_blue font-semibold mb-2">Key Features:</h4>
                    <ul className="list-none space-y-1 mb-4">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-davy_gray-800 flex items-start text-sm">
                          <span className="text-tiffany_blue mr-2">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-tiffany_blue/20 text-tiffany_blue rounded-full text-sm border border-tiffany_blue/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-gradient-to-r from-tiffany_blue to-non_photo_blue text-black text-center rounded-lg hover:from-tiffany_blue-400 hover:to-non_photo_blue-500 transition-all duration-300 font-semibold shadow-lg shadow-tiffany_blue/30"
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
