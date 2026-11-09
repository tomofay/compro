export interface Dictionary {
  meta: {
    siteTitleSuffix: string;
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    portfolioTitle: string;
    portfolioDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
    ctaButton: string;
    switchLanguageLabel: string;
    openMenuLabel: string;
  };
  hero: {
    headlinePrefix: string;
    headlineAccent: string;
    headlineSuffix: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: {
      title: string;
      description: string;
    }[];
    galleryCaption: string;
  };
  problemSection: {
    eyebrow: string;
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
    imageCaption: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewDetailsLabel: string;
    inquireServiceLabel: string;
    viewAllLink: string;
    timelinePrefix: string;
    hostingPrefix: string;
  };
  comparisonSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    leftHeader: string;
    leftTag: string;
    leftItems: string[];
    rightHeader: string;
    rightTag: string;
    rightItems: string[];
    ctaLabel: string;
  };
  portfolioSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAllLink: string;
    searchPlaceholder: string;
    resetFilterTooltip: string;
    viewModeGridTooltip: string;
    viewModeTableTooltip: string;
    inspectTooltip: string;
    emptyState: string;
    categories: {
      all: string;
      compro: string;
      landing: string;
      store: string;
      software: string;
      mobile: string;
    };
    tableColumns: {
      project: string;
      sector: string;
      solution: string;
      metric: string;
      status: string;
      action: string;
    };
    dialog: {
      solutionLabel: string;
      sectorLabel: string;
      metricLabel: string;
      capabilitiesLabel: string;
      deliverablesLabel: string;
      closeLabel: string;
      inquireSimilar: string;
    };
  };
  processSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: string;
  };
  techStackSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  ctaBanner: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryButton: string;
    copyEmailTooltip: string;
    copiedTooltip: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deliverablesLabel: string;
    idealForLabel: string;
    timelineLabel: string;
    investmentLabel: string;
    hostingLabel: string;
    engagementTitle: string;
    engagementSubtitle: string;
    faqTitle: string;
    faqSubtitle: string;
  };
  portfolioPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    overviewTitle: string;
    overviewParagraphs: string[];
    principlesTitle: string;
    principles: {
      title: string;
      description: string;
    }[];
    legalTitle: string;
    legalSubtitle: string;
    legalNote: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    channelsTitle: string;
    copyTooltip: string;
    copiedTooltip: string;
    channels: {
      email: string;
      projectsEmail: string;
      whatsapp: string;
      phone: string;
      address: string;
      hours: string;
    };
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      budgetLabel: string;
      budgetPlaceholder: string;
      budgetOptions: string[];
      notesLabel: string;
      notesPlaceholder: string;
      submitButton: string;
      submittingButton: string;
      validationError: string;
      successTitle: string;
      successDescription: string;
      sendViaWhatsapp: string;
      sendViaEmail: string;
      copyBriefTooltip: string;
      resetForm: string;
    };
  };
  footer: {
    tagline: string;
    navigationTitle: string;
    servicesTitle: string;
    contactTitle: string;
    copyright: string;
    builtNote: string;
  };
}
