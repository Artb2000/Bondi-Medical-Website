export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  description2?: string;
};

export const siteConfig = {
  name: 'Bondi Medical Centre',
  shortName: 'Bondi Medical Centre',
  siteUrl: 'https://bondimedical.example.com',
  email: 'info@bondimedicalcentre.com.au',
  phoneDisplay: '(02) 9389 7667',
  phoneHref: '+61293897667',
  faxDisplay: '(02) 9386 4617',
  addressLine1: 'Suite 101A Level 1',
  addressLine2: '183-193 Oxford St',
  addressLine3: 'Bondi Junction NSW 2022',
  hoursSummary:
    'Monday to Friday, 9:00 am to 5:00 pm; closed Saturday and Sunday.',
  openingHours: [
    { day: 'Monday to Friday', hours: '9:00 am to 5:00 pm' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  mapEmbedUrl:
    'https://www.google.com/maps?q=Suite%20101A%2C%20Level%201%2C%20183-193%20Oxford%20St%2C%20Bondi%20Junction%20NSW%202022&output=embed',
  mapDirectionsUrl:
    'https://maps.google.com/?q=Suite+101A+Level+1+183-193+Oxford+St+Bondi+Junction+NSW+2022',
  hotdocEmbedUrl:
    import.meta.env.PUBLIC_HOTDOC_EMBED_URL ??
    'https://www.hotdoc.com.au/medical-centres',
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '',
  globalCta: {
    label: 'Book Now',
    href: '/fees#book-now',
    variant: 'primary'
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Team', href: '/doctors' },
    { label: 'Services', href: '/services' },
    { label: 'Fees', href: '/fees' },
    { label: 'Contact', href: '/contact' }
  ] as NavItem[]
};

export const services: ServiceItem[] = [
  {
    title: 'Skin checks and skin cancer care',
    description:
      'Regular skin checks are available in-house to help identify suspicious spots early, especially for patients with significant sun exposure. We also provide assessment and ongoing care for common skin cancer concerns.'
  },
  {
    title: 'Everyday GP care',
    description:
      'We provide routine GP care including blood pressure checks, medical certificates, referrals, fever assessment, and general consultations. Our clinic also offers advice and support for common day-to-day health concerns.'
  },
  {
    title: 'Men\'s, women\'s, and sexual health',
    description:
      'Our services include women\'s health, men\'s health, family planning, pregnancy planning, and STI assessment and treatment. Care is tailored to each patient\'s needs in a respectful and confidential setting.'
  },
  {
    title: 'Preventive and minor procedural care',
    description:
      'We offer preventive care focused on long-term health, including stop smoking support and routine health management. Minor procedures are also available where appropriate.'
  },
  {
    title: 'Travel health',
    description:
      'We provide travel health advice and pre-travel consultations to help you prepare for overseas trips. This may include destination-specific advice, recommended vaccinations, and general travel-related health planning.'
  },
  {
    title: 'Immunisation',
    description:
      'We offer immunisation services for children, adults, and older patients as part of preventive healthcare. We can advise on routine vaccinations, catch-up immunisations, and vaccines recommended for work, study, or travel.'
  }
];
