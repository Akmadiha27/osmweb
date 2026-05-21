export const INTERMEDIATE_COURSES = [
  {
    slug: 'mpc',
    level: 'intermediate',
    tag: 'Intermediate - Science',
    title: 'M.P.C.',
    body: 'Mathematics, Physics & Chemistry - the non-medical stream. Ideal for students aiming for engineering entrances like JEE and EAMCET.',
    detail: {
      intro:
        'One of the most popular and commonly pursued streams in senior secondary school is the non-medical stream. Also referred to as MPC subjects, this stream lets you dive into the non-medical side of science.',
      paragraphs: [
        'The MPC full form in intermediate studies is Mathematics, Physics and Chemistry, so it puts focus on these three core subjects with a deep conceptual approach.',
        'The stream offers strong preparation for engineering entrances like JEE and EAMCET, and opens pathways into architecture, data science, analytics, defence services and commercial pilot training.',
      ],
      highlights: ['Strong math and problem-solving foundation', 'Integrated coaching support available', 'Excellent for engineering and technology careers'],
    },
  },
  {
    slug: 'mpc-eamcet',
    level: 'intermediate',
    tag: 'Intermediate - Science + JEE/EAMCET',
    title: 'M.P.C. + EAMCET',
    body: 'MPC with integrated EAMCET coaching - a focused track for students targeting engineering seats in Telangana and Andhra Pradesh.',
    detail: {
      intro:
        'This programme combines the regular MPC curriculum with structured EAMCET-focused preparation so students can target top engineering seats with confidence.',
      paragraphs: [
        'Weekly test plans, exam-style practice, and dedicated doubt-clearing sessions are integrated into academic schedules.',
        'Faculty track individual progress and guide students on rank-improvement strategies for competitive exams.',
      ],
      highlights: ['EAMCET-oriented test plans', 'Separate revision sessions', 'Counselling support for engineering admissions'],
    },
  },
  {
    slug: 'bipc',
    level: 'intermediate',
    tag: 'Intermediate - Medical',
    title: 'Bi.P.C.',
    body: 'Biology, Physics & Chemistry - the medical stream chosen by students aspiring to become doctors, pharmacists, and healthcare professionals.',
    detail: {
      intro:
        'BiPC is designed for students who want to build a strong foundation in life sciences and pursue careers in medicine and healthcare.',
      paragraphs: [
        'The course balances conceptual understanding in Biology, Physics and Chemistry with practical exposure.',
        'It prepares students for medical and allied-health degree paths, including pharmacy, biotechnology and nursing.',
      ],
      highlights: ['Life-science focused curriculum', 'Practical and concept balance', 'Strong base for healthcare careers'],
    },
  },
  {
    slug: 'bipc-neet',
    level: 'intermediate',
    tag: 'Intermediate - Medical + NEET/EAMCET',
    title: 'Bi.P.C. + NEET',
    body: 'BiPC with focused NEET and EAMCET preparation - the complete package for students targeting MBBS and medical seats.',
    detail: {
      intro:
        'This stream is tailored for medical aspirants with BiPC academics plus targeted NEET and EAMCET coaching support.',
      paragraphs: [
        'Students get subject-wise test practice, exam analytics and periodic mentoring to strengthen weak areas.',
        'A disciplined revision framework helps improve speed and accuracy for medical entrance exams.',
      ],
      highlights: ['NEET-ready preparation model', 'Exam analytics and feedback', 'Focused support for MBBS aspirants'],
    },
  },
  {
    slug: 'mec',
    level: 'intermediate',
    tag: 'Intermediate - Commerce',
    title: 'M.E.C.',
    body: 'Mathematics, Economics & Commerce - ideal for students aiming for careers in finance, economics, accountancy and business.',
    detail: {
      intro:
        'MEC is ideal for students interested in finance, analytics and commerce-related higher education paths.',
      paragraphs: [
        'The stream combines logical thinking through Mathematics with business and market understanding through Economics and Commerce.',
        'It creates a strong foundation for degrees in commerce, management, economics and professional certifications.',
      ],
      highlights: ['Commerce with quantitative focus', 'Suitable for CA/CMA pathways', 'Strong base for business degrees'],
    },
  },
  {
    slug: 'cec',
    level: 'intermediate',
    tag: 'Intermediate - Arts/Commerce',
    title: 'C.E.C.',
    body: 'Commerce, Economics & Civics - opens doors to diverse arts and commerce fields with excellent career opportunities.',
    detail: {
      intro:
        'CEC is a balanced stream for students interested in commerce, social systems and public-policy awareness.',
      paragraphs: [
        'The programme builds understanding of business fundamentals, economic concepts and civic structures.',
        'It is a strong option for students aiming for management, law, public administration and commerce-based degree routes.',
      ],
      highlights: ['Balanced arts-commerce stream', 'Strong for management and law routes', 'Career-friendly academic flexibility'],
    },
  },
  {
    slug: 'aec',
    level: 'intermediate',
    tag: 'Intermediate - Commerce',
    title: 'A.E.C.',
    body: 'Accountancy, Economics & Commerce - a commerce-focused stream for students aiming at accounting, business and finance careers.',
    detail: {
      intro:
        'AEC is well suited for students who want a strong commerce foundation with emphasis on accountancy and business studies.',
      paragraphs: [
        'The stream covers accountancy principles, economic concepts and commercial studies without the heavy mathematics load of MEC.',
        'It opens pathways to B.Com, CA foundation, company secretary courses, banking and management programmes.',
      ],
      highlights: ['Accountancy and commerce focus', 'Ideal for CA/CMA and B.Com routes', 'Practical business-oriented curriculum'],
    },
  },
]

export const DEGREE_COURSES = [
  {
    slug: 'bcom-general',
    level: 'degree',
    tag: 'Degree - Commerce',
    title: 'B.Com - General',
    body: 'A 3-year undergraduate programme offering 60 seats. Equips learners with a broad foundation in commerce, accounting and business management.',
    detail: {
      intro:
        'B.Com General offers a broad commerce foundation for students who want versatile careers in finance, accounting and business operations.',
      paragraphs: [
        'The three-year programme covers accounting, taxation, economics, business law and management fundamentals.',
        'It is suitable for students planning higher studies, competitive exams, or early-entry roles in commerce sectors.',
      ],
      highlights: ['Comprehensive commerce syllabus', 'Career-ready core subjects', 'Good base for M.Com/MBA pathways'],
    },
  },
  {
    slug: 'bcom-computer-applications',
    level: 'degree',
    tag: 'Degree - Commerce + Tech',
    title: 'B.Com - Computer Applications',
    body: 'A 3-year undergraduate course with 120 seats - combining commerce fundamentals with computer application skills for the digital economy.',
    detail: {
      intro:
        'This programme blends core commerce subjects with practical computer application skills for modern business environments.',
      paragraphs: [
        'Students learn accounting and business alongside software tools, databases and digital workflows.',
        'The course is designed for students who want commerce careers with a technology edge.',
      ],
      highlights: ['Commerce + digital skill blend', 'Industry-relevant software exposure', 'Ideal for tech-enabled finance roles'],
    },
  },
  {
    slug: 'bba',
    level: 'degree',
    subjectToPermission: true,
    tag: 'Degree - Management',
    title: 'B.B.A.',
    body: 'Bachelor of Business Administration - develops management skills, entrepreneurial thinking and leadership capabilities for business careers.',
    detail: {
      intro:
        'BBA focuses on management fundamentals and leadership development for students aiming at business and entrepreneurship careers.',
      paragraphs: [
        'The curriculum includes marketing, HR, finance, operations and communication skills.',
        'Students gain practical exposure through presentations, projects and business case discussions.',
      ],
      highlights: ['Leadership-oriented curriculum', 'Business and management core', 'Strong MBA preparation base'],
    },
  },
  {
    slug: 'bca',
    level: 'degree',
    subjectToPermission: true,
    tag: 'Degree - Computer Science',
    title: 'B.C.A.',
    body: 'Bachelor of Computer Applications - a technology-focused degree preparing students for software development and IT industry roles.',
    detail: {
      intro:
        'BCA is designed for students who want a strong practical pathway into software and IT careers.',
      paragraphs: [
        'The course introduces programming, databases, web technologies and software fundamentals in a structured progression.',
        'Students are supported with lab practice and project-based learning for real-world application.',
      ],
      highlights: ['Software-focused learning path', 'Programming + project exposure', 'Industry-relevant IT foundation'],
    },
  },
  {
    slug: 'bsc',
    level: 'degree',
    subjectToPermission: true,
    tag: 'Degree - Science',
    title: 'B.Sc.',
    body: 'Bachelor of Science - a rigorous science programme providing a strong foundation for postgraduate studies and research careers.',
    detail: {
      intro:
        'B.Sc. offers a rigorous science-based academic route for students interested in research and higher studies.',
      paragraphs: [
        'The programme emphasizes conceptual strength, practical sessions and analytical thinking across core science subjects.',
        'It is an excellent platform for postgraduate degrees and science-related professional careers.',
      ],
      highlights: ['Strong science fundamentals', 'Lab-oriented academic support', 'Excellent base for postgraduate studies'],
    },
  },
]

export const ALL_COURSES = [...INTERMEDIATE_COURSES, ...DEGREE_COURSES].map((course) => ({
  ...course,
  path: `/courses/${course.level}/${course.slug}`,
}))

export const COURSES_BY_PATH = Object.fromEntries(ALL_COURSES.map((course) => [course.path, course]))

