export const siteCopy = {
  home: {
    title: 'Bondi Medical Centre | GP Care in Bondi Junction',
    description:
      'Bondi Medical Centre provides general practice care, skin checks, and convenient local access in Bondi Junction. Book online or call the clinic directly.',
    hero: {
      eyebrow: 'Bondi Junction medical centre.',
      heading: 'Trusted local GP care in Bondi Junction.',
      intro:
        'Bondi Medical Centre provides comprehensive primary health care, with experienced doctors, convenient local access, and a strong focus on prevention and skin checks.',
      secondaryCta: 'Call (02) 9389 7667'
    },
    intro: {
      title: 'Local care, made simple.',
      body:
        'The clinic is centrally located in Bondi Junction near specialist and diagnostic services, making it easy for patients to access care close to home. We take appointments and try to accommodate walk-in patients where possible.'
    },
    featuredServices: {
      title: 'Care for everyday health needs.',
      cards: [
        {
          title: 'Skin checks.',
          body:
            'The clinic offers in-house skin checks with doctors experienced in skin cancer screening and management.'
        },
        {
          title: 'General practice.',
          body:
            'Patients can access routine consultations, referrals, blood pressure monitoring, medical certificates, and preventive care.'
        },
        {
          title: 'Family health.',
          body:
            'Services listed on the current site include women\'s health, men\'s health, family planning, pregnancy planning, and STI or STD treatment.'
        }
      ]
    },
    locationTeaser: {
      title: 'Easy to find.',
      body:
        'Bondi Medical Centre is located at Suite 101A, Level 1, 183-193 Oxford Street, Bondi Junction, with access from Oxford Street Mall or Spring Street next to Sushi Train.',
      support:
        'Parking is available nearby at Westfield and Eastgate, and Bondi Junction train and bus terminal is only a short walk away.'
    },
    closingCta: {
      title: 'Book your appointment.',
      body: 'Book online any time, or call the clinic directly if your appointment is urgent.'
    }
  },
  doctors: {
    title: 'Team | Bondi Medical Centre',
    description:
      'Meet the team at Bondi Medical Centre, including practitioners with extensive experience in general practice and skin cancer medicine.',
    hero: {
      heading: 'Team at Bondi Medical Centre',
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
      title: 'Patient-centred care.',
      body:
        'We focus on clear advice, thoughtful assessment, and continuity of care so patients feel supported from their first appointment onward.'
    },
    cta: {
      title: 'Make an appointment.',
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
      'View appointments, opening hours, after-hours care, and current consultation fees at Bondi Medical Centre in Bondi Junction.',
    hero: {
      heading: 'Fees',
      intro:
        'Bondi Medical Centre is a mixed billing practice, and phone consultations are available for existing patients who have attended the clinic within the last 12 months. We offer booked appointments and aim to accommodate walk-in patients whenever possible.'
    },
    bookNow: {
      title: 'Book an appointment.',
      body: 'Call (02) 9389 7667 or use the Book Now button to book online.'
    },
    standardFees: {
      title: 'Standard GP fees.',
      body: 'The following fees apply Monday to Friday where bulk billing is not applicable.',
      table: {
        columns: [
          { key: 'consultationType', label: 'Consultation type' },
          { key: 'item', label: 'Item' },
          { key: 'feeCharged', label: 'Fee charged' },
          { key: 'medicareRebate', label: 'Medicare rebate' },
          { key: 'outOfPocket', label: 'Out-of-pocket' }
        ],
        rows: [
          {
            consultationType: 'Standard consultation',
            item: '23',
            feeCharged: '$92.10',
            medicareRebate: '$53.10',
            outOfPocket: '$39'
          },
          {
            consultationType: 'Long consultation',
            item: '36',
            feeCharged: '$123.90',
            medicareRebate: '$84.90',
            outOfPocket: '$39'
          },
          {
            consultationType: 'Prolonged consultation',
            item: '44',
            feeCharged: '$164.10',
            medicareRebate: '$125.10',
            outOfPocket: '$39'
          }
        ]
      }
    },
    skinFees: {
      title: 'Skin clinic fees.',
      body:
        'Skin clinic consultations have a standard out-of-pocket gap for non-concession card holders.',
      table: {
        columns: [
          { key: 'consultationType', label: 'Consultation type' },
          { key: 'fee', label: 'Fee' }
        ],
        rows: [
          {
            consultationType: 'Non-concession card holders',
            fee: '$65 out-of-pocket gap fee'
          },
          {
            consultationType: 'Standard length consultation',
            fee: '$108.90, including a $65 gap after a Medicare rebate of $31.40'
          },
          {
            consultationType: 'Long consultation',
            fee: '$149.99, including a $65 gap after a Medicare rebate of $70.10'
          }
        ]
      }
    },
    additionalFees: {
      title: 'Additional fees.',
      body:
        'An additional fee may apply for certain procedures, including biopsies, excisions, and some consumables.',
      support:
        'Fees are subject to change, so patients should call the clinic if they would like to confirm the cost of a specific appointment.'
    },
    hours: {
      title: 'Trading hours.',
      mondayToFriday: '9:00 am to 5:00 pm',
      saturday: 'Closed',
      sunday: 'Closed'
    },
    afterHours: {
      title: 'After-hours care.',
      body:
        'After-hours care is provided through Eastern Suburbs Medical Service, a specialist provider of after-hours and home-visit care.'
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
      title: 'Clinic details.'
    },
    whereToFindUs: {
      title: 'Where to find us.',
      body:
        'The clinic is located directly opposite Easts Leagues Club on Spring Street and sits on the first floor of The Bank Centre above Sushi Train, with Oxford Street Plaza access near HSBC.',
      support:
        'Patients can enter from Oxford Street Mall or from Spring Street next to Sushi Train.'
    },
    byCar: {
      title: 'By car.',
      body:
        'Free two-hour parking is available nearby at Westfield, and parking is also available at Eastgate Shopping Centre.'
    },
    byPublicTransport: {
      title: 'By public transport.',
      body: 'The clinic is about a one-minute walk from Bondi Junction train and bus terminal.'
    },
    cta: {
      title: 'Need an appointment?',
      body: 'Use the Book Now button to book online, or call the clinic directly if your matter is urgent.'
    }
  }
} as const;
