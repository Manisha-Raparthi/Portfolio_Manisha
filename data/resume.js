const data = {
  name: 'MANISHA RAPARTHI',
  title: 'Software Developer',
  email: 'raparthimanisha7@gmail.com',
  phone: '+1 (413) 337-1765',
  linkedin: 'https://www.linkedin.com/in/r-manisha-86b8b4390',
  github: 'https://github.com/Manisha-Raparthi',
  summary: 'Highly skilled Software Developer with 7+ years building scalable web and enterprise apps. Strong in Java, Spring Boot, Hibernate, REST APIs, React, SQL/NoSQL, microservices, Docker/Kubernetes, CI/CD, and AWS/Azure.',
  skills: {
    programming: ['C','Java','Python','SQL'],
    web: ['Java','HTML','CSS','React'],
    databases: ['MySQL'],
    architectures: ['EJB','JDBC','CI/CD'],
    services: ['REST / RESTful APIs'],
    frameworks: ['Spring','Spring Boot','Hibernate'],
    cloud: ['AWS (EC2, S3, RDS)','Azure (basic)'],
    tools: ['IntelliJ IDEA','VS Code','Postman','Jenkins','Docker','Swagger','CloudWatch'],
    methods: ['Agile/Scrum','CI/CD']
  },
  experience: [
    {
      role:'Senior Software Developer',
      company:'Fresenius Medical Care',
      dates:'Oct 2023 – Present',
      project:'Healthcare platform (patients, doctors, admins, insurers) with teleconsultations, HIPAA-aligned data handling, microservices + CI/CD.',
      bullets:[
              'Role-based dashboards with React Context/Redux.',
              'WebRTC/video for teleconsultations; real-time updates.',
              'JWT/OAuth, audit trails; AWS deploys with auto-scaling.'
            ],
            environment:'Java 8, Spring Boot, Hibernate, MySQL, Kafka/RabbitMQ, Jenkins/GitHub Actions, AWS EC2/RDS, CloudWatch'
    },


    {
      role:'Software Developer',
      company:'Infosys',
      dates:'May 2022 – Sep 2023',
      project:'Modernized a legacy core banking system into a cloud-based microservices architecture; React.js front-ends; Spring Boot REST APIs; MySQL schemas; AWS deploy; CI/CD.',

      bullets:[
              'Built responsive portals in React with routing, forms, validation.',
              'Integrated REST APIs for balances, transfers, and profile management.',
              'Developed Spring Boot microservices with JWT RBAC.',
              'Deployed on AWS with Jenkins CI/CD and CloudWatch monitoring.'
            ],
            environment:'React.js, Spring Boot, MySQL (JDBC), Maven, Jenkins, AWS EC2/RDS/Elastic Beanstalk, Docker, Swagger'
    },
    {
      role:'Software Developer',
      company:'Shell Oil Company',
      dates:'Dec 2020 – Apr 2022',
      project:'HR system automating records, payroll, leave, attendance, and reporting with React + Spring Boot + MySQL.',
      bullets:[
        'Dashboards & forms with charts and exports.',
        'REST APIs for CRUD, payroll, approvals; JWT/OAuth.',
        'AWS deployment with CI/CD; microservice-ready design.'
      ],
      environment:'React.js, Spring Boot, Hibernate, MySQL, REST, JWT/OAuth, AWS, Jenkins, Postman'
    },
    {
      role:'Software Engineer',
      company:'Lister Technologies (India)',
      dates:'Oct 2018 – Aug 2020',
      project:'E-commerce platform with catalog, orders, payments, multi-role dashboards, JWT auth, AWS hosting.',
      bullets:[
        'Product listings, filters, cart/checkout, order tracking.',
        'Spring Boot microservices for products, orders, payments, users.',
        'CI/CD and CloudWatch for reliability.'
      ],
      environment:'React.js, Spring Boot, MySQL, REST, JWT, AWS EC2/RDS, Jenkins/GitHub Actions, CloudWatch'
    }
  ],
  education:[
    'Masters in Data Science – University at Albany, NY',
    'B.E. in Electronics & Communication – MRECW, Hyderabad'
  ]
}
export default data;
