export const siteCopy = {
  home: {
    title: 'Bondi Medical Centre | GP Care in Bondi Junction',
    description:
      'Bondi Medical Centre provides general practice care, skin checks, and convenient local access in Bondi Junction. Book online or call the clinic directly.',
    hero: {
      eyebrow: 'Bondi Medical Centre',
      heading: 'Trusted local GP care in Bondi Junction',
      intro:
        'Bondi Medical Centre provides comprehensive primary health care, with experienced doctors, convenient local access, and a strong focus on prevention and skin checks.',
      secondaryCta: 'Call (02) 9389 7667'
    },
    intro: {
      title: 'Local care, made simple',
      body:
        'The clinic is centrally located in Bondi Junction near specialist and diagnostic services, making it easy for patients to access care close to home. We take appointments and try to accommodate walk-in patients where possible.'
    },
    featuredServices: {
      title: 'Care for everyday health needs',
      cards: [
        {
          title: 'Skin checks',
          body:
            'The clinic offers in-house skin checks with doctors experienced in skin cancer screening and management.'
        },
        {
          title: 'General practice',
          body:
            'Patients can access routine consultations, referrals, blood pressure monitoring, medical certificates, and preventive care.'
        },
        {
          title: 'Family health',
          body:
            'Services listed on the current site include women\'s health, men\'s health, family planning, pregnancy planning, and STI or STD treatment.'
        }
      ]
    },
    locationTeaser: {
      title: 'Easy to find',
      body:
        'Bondi Medical Centre is located at Suite 101A, Level 1, 183-193 Oxford St, Bondi Junction, with access from Oxford St Mall or Spring St next to Sushi Train.',
      support:
        'Parking is available nearby at Westfield and Eastgate, and Bondi Junction train and bus terminal is only a short walk away.'
    },
    closingCta: {
      title: 'Book your appointment',
      body: 'Book online any time, or call the clinic directly if your appointment is urgent.'
    }
  },
  doctors: {
    title: 'Team | Bondi Medical Centre',
    description:
      'Meet the team at Bondi Medical Centre, including practitioners with extensive experience in general practice and skin cancer medicine.',
    hero: {
      heading: 'Our team',
      intro:
        'Our doctors provide general practice care with particular experience in skin cancer medicine, preventive health, and practical day-to-day treatment.'
    },
    roster: [
      {
        name: 'Dr Michael Davis',
        credentials:
          'MBBS, M.Med (Skin Cancer), plus additional qualifications listed on the current site.',
        bio: 'Dr Michael Davis has worked exclusively in skin cancer medicine for around 20 years and holds a Master of Medicine in Primary Care Skin Cancer from the University of Queensland.',
        image: '/images/dr_michael_davis.jpg'
      },
      {
        name: 'Dr Tony Zahra-Newman',
        credentials:
          'MBBS (Sydney), M.Med (Skin Cancer, Queensland), DPD (Cardiff)',
        bio: 'Dr Tony Zahra-Newman is a general practitioner with extensive experience in skin cancer checks, dermatology checks, and lesion excision under local anaesthesia, and he consults in English and Italian.',
        image: '/images/dr-tony-zahra.jpg'
      },
      {
        name: 'Dr Borris Trosman',
        credentials: 'General Practitioner',
        bio: 'Dr Borris Trosman is listed as another available doctor at Bondi Medical Centre.',
        image: '/images/reception.jpg'
      }
    ],
    philosophy: {
      title: 'Patient-centred care',
      body:
        'We focus on clear advice, thoughtful assessment, and continuity of care so patients feel supported from their first appointment onward.'
    },
    cta: {
      title: 'Make an appointment',
      body:
        'Book online or call (02) 9389 7667 to arrange an appointment with the clinic.'
    }
  },
  services: {
    title: 'Services | Bondi Medical Centre',
    description:
      'Explore medical services at Bondi Medical Centre, including skin checks, general practice care, preventive health, and routine consultations.',
    hero: {
      heading: 'Medical services',
      intro:
        'Bondi Medical Centre offers a wide range of general practice services, with a particular emphasis on skin checks, preventive care, and practical everyday treatment.'
    },
    cta: {
      title: 'Need to see a doctor?',
      body: 'Book online or call the clinic to arrange your appointment.'
    }
  },
  fees: {
    title: 'Fees | Bondi Medical Centre',
    description:
      'View appointments, opening hours, and current consultation fees at Bondi Medical Centre in Bondi Junction.',
    hero: {
      heading: 'Consultation Fees',
      intro:
        'Bondi Medical Centre is a mixed billing practice, and phone consultations are available for existing patients who have attended the clinic within the last 12 months. We offer booked appointments and aim to accommodate walk-in patients whenever possible.'
    },
    bookNow: {
      title: 'Book an appointment',
      body: 'Call (02) 9389 7667 or use the Book Now button to book online.'
    },
    standardFees: {
      title: 'Standard GP fees',
      body:
        'For Medicare-eligible patients, standard GP consultations have a $39 out-of-pocket cost. Full consultation fees and Medicare rebates are shown below.',
      table: {
        columns: [
          { key: 'consultationType', label: 'GP Consultation' },
          { key: 'yourCost', label: 'Your cost' },
          { key: 'feeDetails', label: 'Fee details' }
        ],
        rows: [
          {
            consultationType: 'Standard consultation',
            yourCost: '$39 gap',
            feeDetails: '$92.10 fee, Medicare rebate $53.10'
          },
          {
            consultationType: 'Long consultation',
            yourCost: '$39 gap',
            feeDetails: '$123.90 fee, Medicare rebate $84.90'
          },
          {
            consultationType: 'Prolonged consultation',
            yourCost: '$39 gap',
            feeDetails: '$164.10 fee, Medicare rebate $125.10'
          }
        ]
      }
    },
    skinFees: {
      title: 'Skin clinic fees',
      body:
        'For Medicare-eligible patients, skin consultations have a $65 out-of-pocket cost. Full consultation fees and Medicare rebates are shown below.',
      table: {
        columns: [
          { key: 'consultationType', label: 'Skin Consultation' },
          { key: 'yourCost', label: 'Your cost' },
          { key: 'feeDetails', label: 'Fee details' }
        ],
        rows: [
          {
            consultationType: 'Standard length consultation',
            yourCost: '$65 gap',
            feeDetails: '$108.90 fee, Medicare rebate $43.90'
          },
          {
            consultationType: 'Long consultation',
            yourCost: '$65 gap',
            feeDetails: '$149.99 fee, Medicare rebate $84.99'
          }
        ]
      }
    },
    additionalFees: {
      title: 'Fee notes',
      body:
        '*Medicare rebates apply only to eligible patients with a valid Medicare card.',
      support:
        '**Fees may vary for procedures, care plans, dressings, consumables, or other non-standard appointments.'
    },
    hours: {
      title: 'Trading hours',
      mondayToFriday: '9:00 am to 5:00 pm',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    cta: {
      title: 'Need help with booking?',
      body: 'Use Book Now for online booking, or call the clinic directly if your appointment is urgent.'
    }
  },
  contact: {
    title: 'Contact | Bondi Medical Centre',
    description:
      'Get directions, view parking and public transport information, and find Bondi Medical Centre in Bondi Junction.',
    hero: {
      heading: 'Contact',
      intro:
        'Bondi Medical Centre is located in the heart of Bondi Junction and is easy to reach by car or public transport.'
    },
    clinicDetails: {
      title: 'Clinic details'
    },
    whereToFindUs: {
      title: 'Where to find us',
      body:
        'The clinic is located directly opposite Easts Leagues Club on Spring St and sits on the first floor of The Bank Centre above Sushi Train, with Oxford St Plaza access near Priceline Pharmacy.',
      support: 'Patients can enter from:',
      entrances: [
        'Oxford St Mall, next to Priceline Pharmacy',
        'Spring St, next to Sushi Train.'
      ]
    },
    byCar: {
      title: 'By car',
      body:
        'Free two-hour parking is available nearby at Westfield, and parking is also available at Eastgate Shopping Centre.'
    },
    byPublicTransport: {
      title: 'By public transport',
      body: 'The clinic is about a one-minute walk from Bondi Junction train and bus terminal.'
    }
  }
} as const;
