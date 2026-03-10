export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export const siteConfig = {
  name: 'Bondi Medical Centre',
  shortName: 'Bondi Medical Centre',
  siteUrl: 'https://bondimedical.example.com',
  email: 'info@bondimedicalcentre.com.au',
  phoneDisplay: '(02) 9389 7667',
  phoneHref: '+61293897667',
  faxDisplay: '(02) 9386 4617',
  addressLine1: 'Suite 101A, Level 1, 183-193 Oxford Street,',
  addressLine2: 'Bondi Junction NSW 2022',
  hoursSummary:
    'Monday to Friday, 9:00 am to 5:00 pm; closed Saturday and Sunday.',
  openingHours: [
    { day: 'Monday to Friday', hours: '9:00 am to 5:00 pm' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  mapEmbedUrl:
    'https://www.google.com/maps?q=Suite%20101A%2C%20Level%201%2C%20183-193%20Oxford%20Street%2C%20Bondi%20Junction%20NSW%202022&output=embed',
  mapDirectionsUrl:
    'https://maps.google.com/?q=Suite+101A+Level+1+183-193+Oxford+Street+Bondi+Junction+NSW+2022',
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
      'Regular skin checks are available in-house to help identify concerns early, especially for patients spending time in the sun.'
  },
  {
    title: 'Everyday GP care',
    description:
      'The clinic provides blood pressure monitoring, medical certificates, referrals, fever assessment, flu vaccination advice, and routine consultations.'
  },
  {
    title: 'Men\'s, women\'s, and sexual health',
    description:
      'Current service listings include women\'s health, men\'s health, family planning, pregnancy planning, and STI or STD treatment.'
  },
  {
    title: 'Preventive and minor procedural care',
    description:
      'The clinic also offers stop smoking treatment, minor surgery, and support focused on prevention and long-term health management.'
  }
];
