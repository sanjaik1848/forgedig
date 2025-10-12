export interface ServiceDetail {
  slug: string
  title: string
  description: string
  icon: string
  color: string
  image: string
  overview: string
  features: string[]
  technologies: string[]
  benefits: string[]
  process: { step: string; title: string; description: string }[]
  pricing: { plan: string; price: string; features: string[] }[]
  faqs: { question: string; answer: string }[]
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: 'Code',
    color: 'from-blue-500 to-cyan-500',
    image: '🌐',
    overview: 'We create stunning, high-performance web applications tailored to your business needs. Our team specializes in modern frameworks and best practices to deliver scalable, maintainable solutions that drive results.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Scalable Architecture'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'],
    benefits: [
      'Increased online presence and brand visibility',
      'Better user engagement and conversion rates',
      'Mobile-friendly responsive design',
      'Fast loading times and optimal performance',
      'Search engine optimization for better rankings',
      'Scalable architecture for future growth',
    ],
    process: [
      { step: '1', title: 'Requirements Analysis', description: 'We analyze your business needs and define project scope' },
      { step: '2', title: 'UI/UX Design', description: 'Create wireframes and design mockups for approval' },
      { step: '3', title: 'Development', description: 'Build your application using modern tech stack' },
      { step: '4', title: 'Testing', description: 'Comprehensive testing across devices and browsers' },
      { step: '5', title: 'Deployment', description: 'Launch your website on production servers' },
      { step: '6', title: 'Maintenance', description: 'Ongoing support and updates' },
    ],
    pricing: [
      { plan: 'Basic', price: '₹25,000', features: ['5 Pages', 'Responsive Design', 'Contact Form', '1 Month Support'] },
      { plan: 'Professional', price: '₹50,000', features: ['10 Pages', 'CMS Integration', 'SEO Setup', '3 Months Support', 'Analytics'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Unlimited Pages', 'Custom Features', 'API Integration', '12 Months Support', 'Priority Support'] },
    ],
    faqs: [
      { question: 'How long does it take to build a website?', answer: 'Typically 4-8 weeks depending on complexity and requirements.' },
      { question: 'Do you provide hosting services?', answer: 'Yes, we can set up and manage hosting on AWS, Vercel, or other platforms.' },
      { question: 'Can I update the website myself?', answer: 'Yes, we provide a CMS or admin panel for easy content management.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    icon: 'Smartphone',
    color: 'from-purple-500 to-pink-500',
    image: '📱',
    overview: 'Build powerful mobile applications for iOS and Android platforms. We use cutting-edge technologies like React Native and Flutter to create apps that deliver exceptional user experiences.',
    features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'REST APIs'],
    benefits: [
      'Reach millions of mobile users',
      'Cross-platform development saves time and cost',
      'Native performance and user experience',
      'Push notifications and real-time updates',
      'Offline functionality support',
      'App Store and Play Store optimization',
    ],
    process: [
      { step: '1', title: 'Concept & Planning', description: 'Define app features and user flows' },
      { step: '2', title: 'Design', description: 'Create intuitive UI/UX designs' },
      { step: '3', title: 'Development', description: 'Build app with chosen technology' },
      { step: '4', title: 'Testing', description: 'Test on multiple devices and OS versions' },
      { step: '5', title: 'Deployment', description: 'Submit to App Store and Play Store' },
      { step: '6', title: 'Updates', description: 'Regular updates and new features' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹75,000', features: ['Single Platform', 'Basic Features', 'Up to 5 Screens', '2 Months Support'] },
      { plan: 'Business', price: '₹1,50,000', features: ['iOS + Android', 'Advanced Features', 'Up to 15 Screens', '6 Months Support', 'Backend Integration'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Full Custom App', 'Complex Features', 'Unlimited Screens', '12 Months Support', 'Dedicated Team'] },
    ],
    faqs: [
      { question: 'React Native or Flutter?', answer: 'We recommend based on your specific needs. React Native for web integration, Flutter for complex animations.' },
      { question: 'How much does app maintenance cost?', answer: 'Typically 15-20% of development cost annually for updates and bug fixes.' },
      { question: 'Do you help with App Store submission?', answer: 'Yes, we handle the entire submission process for both stores.' },
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    description: 'Robust backend systems with databases and APIs',
    icon: 'Database',
    color: 'from-green-500 to-teal-500',
    image: '⚙️',
    overview: 'Create powerful backend systems that handle your business logic, data management, and API services. We build scalable, secure, and efficient server-side solutions.',
    features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Microservices'],
    technologies: ['Node.js', 'Python', 'Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    benefits: [
      'Scalable architecture for growing user base',
      'Secure data storage and management',
      'Fast API response times',
      'Microservices for modular development',
      'Real-time data processing',
      'Integration with third-party services',
    ],
    process: [
      { step: '1', title: 'Architecture Design', description: 'Plan database schema and API structure' },
      { step: '2', title: 'Database Setup', description: 'Configure databases and data models' },
      { step: '3', title: 'API Development', description: 'Build RESTful or GraphQL APIs' },
      { step: '4', title: 'Security Implementation', description: 'Add authentication and authorization' },
      { step: '5', title: 'Testing', description: 'Unit and integration testing' },
      { step: '6', title: 'Deployment', description: 'Deploy to cloud infrastructure' },
    ],
    pricing: [
      { plan: 'Basic API', price: '₹40,000', features: ['REST API', 'Basic CRUD', 'Database Setup', '1 Month Support'] },
      { plan: 'Advanced', price: '₹80,000', features: ['GraphQL API', 'Authentication', 'File Upload', '3 Months Support', 'Caching'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Microservices', 'Real-time Features', 'Advanced Security', '12 Months Support', 'Load Balancing'] },
    ],
    faqs: [
      { question: 'Which database should I use?', answer: 'Depends on your data structure. SQL for relational data, NoSQL for flexible schemas.' },
      { question: 'Do you provide API documentation?', answer: 'Yes, we provide comprehensive API documentation using Swagger or Postman.' },
      { question: 'Can you integrate with existing systems?', answer: 'Absolutely! We specialize in integrating with third-party APIs and legacy systems.' },
    ],
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup and management',
    icon: 'Cloud',
    color: 'from-orange-500 to-yellow-500',
    image: '☁️',
    overview: 'Migrate to the cloud and leverage the power of AWS, Azure, or Google Cloud. We help you set up, manage, and optimize your cloud infrastructure for maximum efficiency.',
    features: ['Cloud Migration', 'DevOps', 'CI/CD Pipeline', 'Auto Scaling'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
    benefits: [
      'Reduced infrastructure costs',
      'Automatic scaling based on demand',
      'High availability and reliability',
      'Disaster recovery and backups',
      'Global content delivery',
      'Pay only for what you use',
    ],
    process: [
      { step: '1', title: 'Assessment', description: 'Analyze current infrastructure and requirements' },
      { step: '2', title: 'Planning', description: 'Design cloud architecture and migration strategy' },
      { step: '3', title: 'Migration', description: 'Move applications and data to cloud' },
      { step: '4', title: 'Optimization', description: 'Configure auto-scaling and cost optimization' },
      { step: '5', title: 'Monitoring', description: 'Set up monitoring and alerts' },
      { step: '6', title: 'Support', description: 'Ongoing management and optimization' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹30,000', features: ['Basic Setup', 'Single Server', 'Monitoring', '1 Month Support'] },
      { plan: 'Business', price: '₹75,000', features: ['Multi-Server Setup', 'Load Balancing', 'CI/CD Pipeline', '6 Months Support', 'Auto Scaling'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Full Cloud Migration', 'Kubernetes', 'Multi-Region', '12 Months Support', 'Dedicated DevOps'] },
    ],
    faqs: [
      { question: 'Which cloud provider is best?', answer: 'AWS for comprehensive services, Azure for Microsoft integration, GCP for data analytics.' },
      { question: 'How long does cloud migration take?', answer: 'Typically 2-8 weeks depending on application complexity and data volume.' },
      { question: 'What about cloud costs?', answer: 'We optimize your infrastructure to minimize costs while maintaining performance.' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions',
    icon: 'Shield',
    color: 'from-red-500 to-pink-500',
    image: '🔒',
    overview: 'Protect your digital assets with our comprehensive cybersecurity services. We provide security audits, penetration testing, and ongoing protection against threats.',
    features: ['Security Audit', 'Penetration Testing', 'Data Encryption', 'Compliance'],
    technologies: ['OWASP', 'Burp Suite', 'Metasploit', 'SSL/TLS', 'OAuth', 'JWT', 'Firewall', 'IDS/IPS'],
    benefits: [
      'Protection against cyber threats',
      'Compliance with security standards',
      'Data encryption and privacy',
      'Regular security audits',
      'Incident response planning',
      'Employee security training',
    ],
    process: [
      { step: '1', title: 'Security Assessment', description: 'Identify vulnerabilities and risks' },
      { step: '2', title: 'Penetration Testing', description: 'Simulate attacks to find weaknesses' },
      { step: '3', title: 'Implementation', description: 'Deploy security measures and tools' },
      { step: '4', title: 'Monitoring', description: 'Continuous threat monitoring' },
      { step: '5', title: 'Training', description: 'Security awareness training' },
      { step: '6', title: 'Compliance', description: 'Ensure regulatory compliance' },
    ],
    pricing: [
      { plan: 'Basic Audit', price: '₹35,000', features: ['Security Assessment', 'Vulnerability Scan', 'Report', '1 Month Support'] },
      { plan: 'Advanced', price: '₹70,000', features: ['Penetration Testing', 'Security Implementation', 'Compliance Check', '3 Months Support', 'Training'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Full Security Suite', 'Ongoing Monitoring', 'Incident Response', '12 Months Support', 'Dedicated Team'] },
    ],
    faqs: [
      { question: 'How often should I do security audits?', answer: 'We recommend quarterly audits for critical systems and annual for others.' },
      { question: 'What is penetration testing?', answer: 'Ethical hacking to identify security vulnerabilities before malicious actors do.' },
      { question: 'Do you provide compliance certification?', answer: 'We help you achieve compliance with GDPR, ISO 27001, and other standards.' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'SEO, social media, and digital advertising',
    icon: 'TrendingUp',
    color: 'from-indigo-500 to-purple-500',
    image: '📈',
    overview: 'Grow your online presence with our digital marketing services. We help you reach your target audience through SEO, social media, content marketing, and paid advertising.',
    features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics'],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot'],
    benefits: [
      'Increased website traffic',
      'Higher search engine rankings',
      'Better brand awareness',
      'Improved conversion rates',
      'Targeted advertising campaigns',
      'Data-driven marketing decisions',
    ],
    process: [
      { step: '1', title: 'Strategy', description: 'Define goals and target audience' },
      { step: '2', title: 'SEO Audit', description: 'Analyze current SEO performance' },
      { step: '3', title: 'Content Creation', description: 'Create engaging content' },
      { step: '4', title: 'Campaign Launch', description: 'Launch marketing campaigns' },
      { step: '5', title: 'Monitoring', description: 'Track performance metrics' },
      { step: '6', title: 'Optimization', description: 'Continuously improve campaigns' },
    ],
    pricing: [
      { plan: 'Starter', price: '₹20,000/mo', features: ['Basic SEO', 'Social Media (2 platforms)', 'Monthly Report', '3 Months Minimum'] },
      { plan: 'Growth', price: '₹45,000/mo', features: ['Advanced SEO', 'Social Media (4 platforms)', 'Content Marketing', 'Google Ads', 'Weekly Reports'] },
      { plan: 'Enterprise', price: 'Custom', features: ['Full Digital Marketing', 'All Platforms', 'Dedicated Manager', 'Daily Reports', 'Custom Strategy'] },
    ],
    faqs: [
      { question: 'How long to see SEO results?', answer: 'Typically 3-6 months for significant improvements in rankings and traffic.' },
      { question: 'Do you manage social media accounts?', answer: 'Yes, we create content, post regularly, and engage with your audience.' },
      { question: 'What is your ROI guarantee?', answer: 'While we cannot guarantee specific ROI, we provide transparent reporting and continuous optimization.' },
    ],
  },
]
