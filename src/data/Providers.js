const allTherapists = [
  {
    name: 'Ryne Evans',
    license: 'LMFT',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Childhood Trauma', 'Depression', 'LGBTQ+ Identities', 'Polyamory', 'Relaionships', 'Sexuality', 'Trauma'],
    topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Assessments'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence', 'UHC-Medicaid', 'UHC-Commercial'],
    location: ['Telehealth', 'U-District'],
    services: ['Assessments', 'Individual', 'Couples', 'Family'],
    gender: 'Male',
    acceptingClients: 'assessments only',
    about: 'Ryne Evans is a Licensed Marriage and Family Therapist (LMFT) with a passion for working with neurodivergent individuals and their families. He specializes in ADHD, Autism, and LGBTQ+ identities, providing a safe and affirming space for clients to explore their unique experiences. Ryne is particularly skilled in conducting assessments to help clients better understand their neurodivergent traits and how these impact their lives. He also has extensive experience in polyamory and relationship dynamics, making him a great fit for those navigating complex relationship structures.',
  },
  {
    name: 'McCall Evans',
    license: 'LMHCA',
    pronouns: 'he/him',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Parenting', 'PTSD', 'School Avoidance', 'Teens'],
    topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Teens'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth', 'U-District'],
    services: ['Individual'],
    gender: 'Male',
    acceptingClients: 'no',
    about: 'McCall Evans is a Licensed Mental Health Counselor Associate (LMHCA) who focuses on supporting neurodivergent teens and young adults. With a background in working with ADHD and Autism, McCall provides a compassionate and understanding approach to therapy. McCall is skilled in helping parents and families navigate school avoidance and other challenges faced by neurodivergent individuals. McCall is dedicated to creating a supportive environment where clients can feel safe to explore their thoughts and feelings.',
  },
  {
    name: 'Chandra Lindeman',
    license: 'LMHC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships'],
    topSpecialties: ['ADHD', 'Chronic Illness', 'LGBTQ+ Identities', 'Parenting'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Molina-Commercial', 'Premera', 'Private Pay', 'Regence', 'UHC-Commercial', 'UHC-Medicaid'],
    location: ['Telehealth'],
    services: ['Individual'],
    gender: 'Female',
    acceptingClients: 'no',
  },
  {
    name: 'Cheryl Snider',
    license: 'LSWAIC',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Chronic Illness', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Relationships'],
    topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Polyamory', 'Couples'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples'],
    gender: 'Female',
    acceptingClients: 'yes',
  },
  {
    name: 'Paige Butkey',
    license: 'LMFTA',
    pronouns: 'she/her',
    specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Parenting', 'Relationships', 'Teens'],
    topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Couples'],
    insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
    location: ['Telehealth'],
    services: ['Individual', 'Couples', 'Family'],
    gender: 'Female',
    acceptingClients: 'yes',
  },
    {
  name: 'Julian Macke',
  license: 'LMHCA',
  pronouns: 'he/they',
  specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Relationships', 'Teens'],
  topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Couples'],
  insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
  location: ['Telehealth'],
  services: ['Individual', 'Couples', 'Family'],
  gender: 'Non-Binary',
  acceptingClients: 'no',
},
  {
  name: 'Mary Baja',
  license: 'LMHCA',
  pronouns: 'she/her',
  specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'Life Transitions', 'PTSD', 'Relationships', 'Teens'],
  topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities', 'Couples'],
  insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
  location: ['Telehealth', 'U-District'],
  services: ['Individual', 'Assessments'],
  gender: 'Female',
  acceptingClients: 'yes',
},
  {
  name: 'Rachel Loch',
  license: 'LMHCA',
  pronouns: 'she/her',
  specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'PTSD'],
  topSpecialties: ['ADHD', 'Autism', 'LGBTQ+ Identities'],
  insurance: ['Aetna', 'BCBS', 'Cigna', 'Molina-Medicaid', 'Premera', 'Private Pay', 'Regence'],
  location: ['Telehealth', 'U-District'],
  services: ['Individual', 'Assessments'],
  gender: 'Female',
  acceptingClients: 'yes',
},
  {
  name: 'Emily Hawkins',
  license: 'Intern',
  pronouns: 'she/her',
  specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'PTSD', 'Relationships', 'Womens Issues'],
  topSpecialties: ['ADHD', 'Depression', 'LGBTQ+ Identities'],
  insurance: ['Molina-Medicaid', 'Private Pay'],
  location: ['Telehealth', 'U-District'],
  services: ['Individual'],
  gender: 'Female',
  acceptingClients: 'no',
},
  {
  name: 'Kate Guild',
  license: 'Intern',
  pronouns: 'she/her',
  specialties: ['ADHD', 'Anxiety', 'Autism', 'Depression', 'LGBTQ+ Identities', 'PTSD', 'Parenting', 'Relationships'],
  topSpecialties: ['ADHD', 'LGBTQ+ Identities', 'Couples'],
  insurance: ['Molina-Medicaid', 'Private Pay'],
  location: ['Telehealth', 'U-District'],
  services: ['Individual', 'Couples', 'Family'],
  gender: 'Female',
  acceptingClients: 'no',
},
  {
  name: 'Selina Rojas',
  license: 'Intern',
  pronouns: 'she/her',
  specialties: ['ADHD', 'Anxiety', 'Depression', 'LGBTQ+ Identities', 'PTSD', 'Self-Esteem'],
  topSpecialties: ['ADHD', 'LGBTQ+ Identities'],
  insurance: ['Molina-Medicaid', 'Private Pay'],
  location: ['Telehealth', 'U-District'],
  services: ['Individual'],
  gender: 'Female',
  acceptingClients: 'no',
},
]

export default allTherapists;
