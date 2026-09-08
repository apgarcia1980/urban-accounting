import type { ServicePageContent } from '../../core/models/service-page-content';
import type { PublishedServiceId } from '../../core/i18n/route-catalog';

export const enServicePages: Record<PublishedServiceId, ServicePageContent> = {
  accounting: {
    id: 'accounting',
    name: 'Accounting Services',
    seo: {
      title: 'Accounting Services for Businesses in Miami | Urban Accounting',
      description:
        'Bring clarity to your business finances with accounting services in Miami. Discuss your financial records and accounting needs with Urban Accounting.',
    },
    hero: {
      eyebrow: 'ACCOUNTING SERVICES · MIAMI, FLORIDA',
      title: 'Accounting Services for Businesses in Miami',
      description:
        'A clearer view of your business starts with carefully maintained financial records. Urban Accounting brings personal attention to your accounting needs.',
      primary: 'Discuss your accounting needs',
      secondary: 'Explore the service',
      note: 'For businesses and small business owners in Miami.',
      focus: ['Financial records', 'Business perspective', 'Personal attention'],
    },
    introduction: {
      eyebrow: 'THE BIGGER PICTURE',
      title: 'Understand the numbers\nbehind your business.',
      paragraphs: [
        'Running a business means making decisions with the information available to you. Well-organized accounting records provide a more useful starting point than disconnected figures.',
        'Urban Accounting offers accounting services with attention to detail and an approach tailored to your needs. The aim is to bring order to financial records and support a clearer understanding of your business finances.',
      ],
    },
    features: {
      eyebrow: 'HOW WE CAN HELP',
      title: 'A considered approach\nto your accounting.',
      description: 'Start with your business’s needs and discuss the right scope of support.',
      items: [
        {
          title: 'Carefully maintained records',
          description:
            'Attention to your financial records helps establish an organized foundation for your business.',
        },
        {
          title: 'A view of your financial position',
          description:
            'Accounting puts individual figures into a broader business context. Financial statements are also available as a separate service.',
        },
        {
          title: 'Support shaped around you',
          description:
            'Discuss your priorities with the team, whether you need accounting support or want to explore its relationship with other financial services.',
        },
      ],
    },
    benefits: {
      eyebrow: 'WHY ACCOUNTING MATTERS',
      title: 'More context.\nBetter-informed questions.',
      description:
        'Professional accounting helps you approach business finances with greater clarity.',
      items: [
        {
          title: 'An organized starting point',
          description:
            'Orderly financial information makes it easier to understand what your records tell you.',
        },
        {
          title: 'A broader perspective',
          description:
            'Seeing financial information in context can help you consider your business’s position and priorities.',
        },
        {
          title: 'A clearer conversation',
          description:
            'A sound set of records provides a useful basis for discussing financial statements and tax preparation needs.',
        },
      ],
    },
    process: {
      eyebrow: 'STARTING TOGETHER',
      title: 'Begin with your business.',
      description:
        'A guide to the initial conversation. The scope of work and next steps are agreed with you.',
      steps: [
        {
          title: 'Tell us what you need',
          description: 'Explain your business and the accounting questions you want to address.',
        },
        {
          title: 'Discuss your priorities',
          description:
            'Talk through your current financial information and the support you are looking for.',
        },
        {
          title: 'Agree on the next step',
          description: 'Discuss which services fit your situation and how to move forward.',
        },
      ],
    },
    local: {
      eyebrow: 'ACCOUNTING IN MIAMI',
      title: 'A local point of contact\nfor your business.',
      description:
        'Urban Accounting operates in Miami. Contact the team to discuss accounting services for your business and arrange a consultation before visiting.',
      addressLabel: 'MIAMI OFFICE',
      action: 'Contact Urban Accounting',
    },
    related: {
      eyebrow: 'CONNECTED SERVICES',
      title: 'See how the pieces fit.',
      description:
        'Bookkeeping, financial statements and tax services address different needs. Explore the service that is relevant to your situation.',
      ids: ['bookkeeping', 'financial-statements', 'tax-preparation', 'tax-planning'],
      action: 'Explore this service',
      overviewAction: 'View Home overview',
    },
    faq: {
      eyebrow: 'YOUR ACCOUNTING QUESTIONS',
      title: 'A little more clarity.',
      items: [
        {
          question: 'What accounting services does Urban Accounting provide?',
          answer:
            'Urban Accounting offers accounting support focused on careful financial records and your business’s needs. Bookkeeping, financial statements, tax preparation and tax planning are also available. Discuss the scope of each service during a consultation.',
        },
        {
          question: 'How can accounting services help a business?',
          answer:
            'Accounting gives financial information a broader context. Organized records can help a business owner understand their position and ask more informed questions about the business.',
        },
        {
          question: 'Do you provide accounting services in Miami?',
          answer:
            'Yes. Urban Accounting is based in Miami and offers accounting services for businesses. Contact the team to discuss your needs.',
        },
        {
          question: 'What is the difference between accounting and bookkeeping?',
          answer:
            'Bookkeeping focuses on keeping financial records organized and maintained. Accounting uses financial information to develop a broader view of a business. The services are related, but they serve different purposes.',
        },
        {
          question: 'Can accounting work together with tax preparation?',
          answer:
            'Organized accounting records can provide information relevant to tax preparation. Urban Accounting offers both services; speak with the team about what support your situation requires.',
        },
      ],
    },
    cta: {
      eyebrow: 'LET’S TALK ABOUT YOUR BUSINESS',
      title: 'Give your numbers\na clearer direction.',
      description: 'Discuss your accounting needs with Urban Accounting in Miami.',
      action: 'Schedule a Consultation',
      note: 'A conversation about your business comes first.',
    },
  },
  bookkeeping: {
    id: 'bookkeeping',
    name: 'Bookkeeping',
    seo: {
      title: 'Bookkeeping Services in Miami | Urban Accounting',
      description:
        'Keep your financial records organized with professional bookkeeping services in Miami. Talk to Urban Accounting about support for your business books.',
    },
    hero: {
      eyebrow: 'BOOKKEEPING · MIAMI, FLORIDA',
      title: 'Bookkeeping Services in Miami',
      description:
        'Bring order to your financial records and make your business’s day-to-day information easier to understand.',
      primary: 'Discuss your bookkeeping needs',
      secondary: 'Explore the service',
      note: 'Professional attention to your business books.',
      focus: ['Organized records', 'Financial information', 'Day-to-day clarity'],
    },
    introduction: {
      eyebrow: 'START WITH THE RECORDS',
      title: 'Good financial information\nbegins with orderly books.',
      paragraphs: [
        'Your business generates financial information day after day. When records are disorganized, it can be harder to see what that information means.',
        'Urban Accounting offers bookkeeping services to help keep your financial house in order and provide a clearer picture of your financial health. This service focuses on the records that underpin a wider understanding of your business.',
      ],
    },
    features: {
      eyebrow: 'THE FOCUS OF BOOKKEEPING',
      title: 'Order in the details.\nClarity in the everyday.',
      description: 'Talk to us about your records and the bookkeeping support you need.',
      items: [
        {
          title: 'Organized financial records',
          description:
            'Bring structure to business financial information so that the books offer a more useful point of reference.',
        },
        {
          title: 'Care in maintaining information',
          description:
            'Attention to detail is central to keeping records in order and making them easier to work with.',
        },
        {
          title: 'A clearer financial picture',
          description:
            'Well-maintained books support an understanding of day-to-day finances and can inform broader accounting conversations.',
        },
      ],
    },
    benefits: {
      eyebrow: 'WHY ORDER MATTERS',
      title: 'Make sense of\nyour financial information.',
      description: 'The value of bookkeeping begins with information that is easier to understand.',
      items: [
        {
          title: 'Less fragmented information',
          description: 'Organized records bring financial details into a more coherent picture.',
        },
        {
          title: 'A useful foundation',
          description:
            'Your books provide a starting point for discussing accounting and financial statements.',
        },
        {
          title: 'More focused conversations',
          description:
            'Clearer records help you explain your situation when discussing financial or tax questions.',
        },
      ],
    },
    process: {
      eyebrow: 'YOUR STARTING POINT',
      title: 'Let’s talk about your books.',
      description: 'These are starting points for a conversation, not a fixed service package.',
      steps: [
        {
          title: 'Describe your records',
          description: 'Tell us how your business currently keeps its financial information.',
        },
        {
          title: 'Identify what needs attention',
          description:
            'Discuss where you need more order or a clearer understanding of your books.',
        },
        {
          title: 'Define the support',
          description:
            'Agree on the scope of bookkeeping support and the next steps with the team.',
        },
      ],
    },
    local: {
      eyebrow: 'BOOKKEEPING IN MIAMI',
      title: 'Financial order,\nwith a Miami connection.',
      description:
        'Urban Accounting’s Miami office is a point of contact for your bookkeeping questions. Reach out to discuss your business records and arrange a consultation.',
      addressLabel: 'MIAMI OFFICE',
      action: 'Contact the team',
    },
    related: {
      eyebrow: 'BEYOND THE BOOKS',
      title: 'Build on a clear foundation.',
      description:
        'Explore the broader accounting picture or learn about financial statements and tax preparation.',
      ids: ['accounting', 'financial-statements', 'tax-preparation'],
      action: 'Explore this service',
      overviewAction: 'View Home overview',
    },
    faq: {
      eyebrow: 'YOUR BOOKKEEPING QUESTIONS',
      title: 'What would you like to know?',
      items: [
        {
          question: 'What does bookkeeping help a business manage?',
          answer:
            'Bookkeeping focuses on organizing and maintaining financial records. Those records help a business understand its financial information and provide a foundation for accounting.',
        },
        {
          question: 'Does Urban Accounting offer bookkeeping in Miami?',
          answer:
            'Yes. Bookkeeping is one of Urban Accounting’s services in Miami. Contact the team to discuss the state of your books and the support you need.',
        },
        {
          question: 'What is included in your bookkeeping service?',
          answer:
            'Urban Accounting offers bookkeeping to help keep financial records in order. The specific scope should be discussed with the team during your consultation, based on your business’s needs.',
        },
        {
          question: 'How is bookkeeping different from accounting?',
          answer:
            'Bookkeeping concentrates on the financial records themselves. Accounting considers financial information in a wider business context. You may have needs in one or both areas.',
        },
        {
          question: 'Can bookkeeping support financial statements and tax preparation?',
          answer:
            'Organized books can supply financial information used when preparing statements or taxes. Urban Accounting also offers those services; discuss them separately with the team to establish what you need.',
        },
      ],
    },
    cta: {
      eyebrow: 'A CLEARER START',
      title: 'Bring your books\ninto the conversation.',
      description: 'Talk to Urban Accounting about your financial records and bookkeeping needs.',
      action: 'Schedule a Consultation',
      note: 'Start with the information you have today.',
    },
  },
  'financial-statements': {
    id: 'financial-statements',
    name: 'Financial Statements',
    seo: {
      title: 'Financial Statement Services in Miami | Urban Accounting',
      description:
        'Financial statement services in Miami for businesses seeking clearer, organized financial information. Talk to Urban Accounting about your needs.',
    },
    hero: {
      eyebrow: 'FINANCIAL STATEMENTS · MIAMI, FLORIDA',
      title: 'Financial Statement Services in Miami',
      description:
        'Clear, organized financial information can help you better understand where your business stands.',
      primary: 'Discuss your financial statements',
      secondary: 'Explore the service',
      note: 'A clearer view of your business finances.',
      focus: ['Financial clarity', 'Organized information', 'Business perspective'],
    },
    introduction: {
      eyebrow: 'SEE THE FULLER PICTURE',
      title: 'Financial information\nwith more context.',
      paragraphs: [
        'Financial statements bring business information together into a clearer view of its financial position. They help turn individual records into information that is easier to review and discuss.',
        'Urban Accounting prepares financial statements tailored to your business needs. The goal is to provide a clear, comprehensive picture of your financial standing, grounded in organized financial information.',
      ],
    },
    features: {
      eyebrow: 'WHAT STATEMENTS CAN SUPPORT',
      title: 'A more understandable\nfinancial position.',
      description:
        'Discuss the financial information your business needs to understand more clearly.',
      items: [
        {
          title: 'A consolidated view',
          description:
            'Financial statements bring together information so it can be considered in a broader business context.',
        },
        {
          title: 'Clearer financial conversations',
          description:
            'Structured information provides a useful basis for discussing your business position and priorities.',
        },
        {
          title: 'A tailored service',
          description:
            'Urban Accounting prepares financial statements that speak to the needs of your business.',
        },
      ],
    },
    benefits: {
      eyebrow: 'THE VALUE OF CLARITY',
      title: 'Information that supports\nbetter understanding.',
      description:
        'Financial reporting is most useful when the underlying information is organized and clear.',
      items: [
        {
          title: 'A clearer position',
          description:
            'A structured view makes it easier to consider the financial information connected to your business.',
        },
        {
          title: 'Useful context for decisions',
          description:
            'Financial information can help you ask more informed questions as you consider business decisions.',
        },
        {
          title: 'Connected financial support',
          description:
            'Financial statements relate naturally to bookkeeping and accounting, which help keep the information behind them organized.',
        },
      ],
    },
    process: {
      eyebrow: 'START WITH YOUR INFORMATION',
      title: 'A practical conversation\nabout your business.',
      description:
        'The scope and next steps are discussed with you based on your financial information and needs.',
      steps: [
        {
          title: 'Discuss your needs',
          description: 'Tell us what you want to understand about your business finances.',
        },
        {
          title: 'Review the information',
          description:
            'Talk about the records and financial information that provide the starting point.',
        },
        {
          title: 'Agree on next steps',
          description: 'Discuss the service that fits your situation and how to proceed.',
        },
      ],
    },
    local: {
      eyebrow: 'FINANCIAL STATEMENTS IN MIAMI',
      title: 'A Miami point of contact\nfor financial clarity.',
      description:
        'Urban Accounting is based in Miami. Contact the team to discuss financial statements for your business and arrange a consultation.',
      addressLabel: 'MIAMI OFFICE',
      action: 'Contact Urban Accounting',
    },
    related: {
      eyebrow: 'CONNECTED SERVICES',
      title: 'Start with the information\nbehind the statement.',
      description:
        'Accounting and bookkeeping help organize the financial information that supports a clearer overall picture.',
      ids: ['accounting', 'bookkeeping'],
      action: 'Explore this service',
      overviewAction: 'View Home overview',
    },
    faq: {
      eyebrow: 'FINANCIAL STATEMENT QUESTIONS',
      title: 'A little more clarity.',
      items: [
        {
          question: 'What are financial statements used for?',
          answer:
            'Financial statements provide a structured view of financial information. They can help a business better understand its financial position and create a basis for more informed conversations.',
        },
        {
          question: 'Why are financial statements important for a business?',
          answer:
            'They bring financial information together in a clearer format, making it easier to consider the business’s position and priorities.',
        },
        {
          question: 'How do financial statements relate to bookkeeping?',
          answer:
            'Bookkeeping helps organize and maintain financial records. Those records can provide the underlying information needed to prepare financial statements.',
        },
        {
          question: 'Can Urban Accounting help businesses in Miami with financial statements?',
          answer:
            'Yes. Urban Accounting offers financial statement services in Miami. Contact the team to discuss your business’s needs.',
        },
        {
          question: 'How can financial information support business decisions?',
          answer:
            'Organized financial information can add context as you consider questions and decisions for your business. Its relevance depends on your individual situation.',
        },
      ],
    },
    cta: {
      eyebrow: 'LET’S LOOK AT THE BIGGER PICTURE',
      title: 'Bring more clarity\nto your financial information.',
      description: 'Talk with Urban Accounting about financial statements for your Miami business.',
      action: 'Schedule a Consultation',
      note: 'Start with the information your business has today.',
    },
  },
  'tax-preparation': {
    id: 'tax-preparation',
    name: 'Tax Preparation',
    seo: {
      title: 'Tax Preparation Services in Miami | Urban Accounting',
      description:
        'Professional tax preparation services in Miami. Talk to Urban Accounting about organizing the information needed to prepare your taxes.',
    },
    hero: {
      eyebrow: 'TAX PREPARATION · MIAMI, FLORIDA',
      title: 'Tax Preparation Services in Miami',
      description:
        'Professional support can make it easier to approach tax preparation with organized information and careful attention to detail.',
      primary: 'Discuss tax preparation',
      secondary: 'Explore the service',
      note: 'A considered approach to preparing your taxes.',
      focus: ['Organized information', 'Careful preparation', 'Professional support'],
    },
    introduction: {
      eyebrow: 'PREPARE WITH CLARITY',
      title: 'A more organized way\nto approach tax time.',
      paragraphs: [
        'Tax preparation begins with the information relevant to your situation. Bringing that information together can make the process easier to understand and discuss.',
        'Urban Accounting offers tax preparation services with professional attention to the details involved, so you can focus on your business or personal priorities.',
      ],
    },
    features: {
      eyebrow: 'HOW TAX PREPARATION HELPS',
      title: 'Focus on the information\nthat needs attention.',
      description: 'Discuss your situation with the team and establish the support you need.',
      items: [
        {
          title: 'Organize the conversation',
          description:
            'Start by discussing the financial and tax information relevant to your situation.',
        },
        {
          title: 'Careful preparation',
          description:
            'Professional attention helps address the details and complexities involved in preparing taxes.',
        },
        {
          title: 'Support connected to your records',
          description:
            'Accounting and bookkeeping can help keep financial information organized for related tax discussions.',
        },
      ],
    },
    benefits: {
      eyebrow: 'WHY PROFESSIONAL PREPARATION',
      title: 'A steadier approach\nto tax time.',
      description:
        'Tax questions often involve details that benefit from careful review and a clear conversation.',
      items: [
        {
          title: 'More organized information',
          description:
            'Bringing the relevant information together gives the preparation process a clearer starting point.',
        },
        {
          title: 'Attention to detail',
          description:
            'Professional support helps you work through the complexities of tax preparation with care.',
        },
        {
          title: 'A clearer next step',
          description:
            'Discussing your circumstances can help you understand how tax preparation relates to other available services.',
        },
      ],
    },
    process: {
      eyebrow: 'START WITH A CONVERSATION',
      title: 'Prepare with your\nsituation in mind.',
      description: 'This is a general way to begin; the relevant scope is discussed with you.',
      steps: [
        {
          title: 'Talk about your needs',
          description:
            'Share the tax preparation questions you have and the context you want to discuss.',
        },
        {
          title: 'Review the information',
          description:
            'Discuss the financial information that is relevant to preparing your taxes.',
        },
        {
          title: 'Agree on next steps',
          description: 'Determine the appropriate support and how to move forward.',
        },
      ],
    },
    local: {
      eyebrow: 'TAX PREPARATION IN MIAMI',
      title: 'Professional support\nin Miami.',
      description:
        'Urban Accounting operates in Miami. Contact the team to discuss tax preparation needs and arrange a consultation.',
      addressLabel: 'MIAMI OFFICE',
      action: 'Contact Urban Accounting',
    },
    related: {
      eyebrow: 'PREPARATION AND PLANNING',
      title: 'Different moments.\nConnected conversations.',
      description:
        'Tax preparation focuses on preparing obligations with the information at hand. Tax planning is a more forward-looking conversation about your tax situation. Accounting and bookkeeping can support both with organized information.',
      ids: ['tax-planning', 'bookkeeping', 'accounting'],
      action: 'Explore this service',
      overviewAction: 'View Home overview',
    },
    faq: {
      eyebrow: 'TAX PREPARATION QUESTIONS',
      title: 'A clear place to start.',
      items: [
        {
          question: 'What is tax preparation?',
          answer:
            'Tax preparation is the process of preparing the tax obligations relevant to your situation. The details and information needed depend on individual circumstances.',
        },
        {
          question: 'When should I contact a tax professional?',
          answer:
            'You can contact a professional when you want to discuss tax preparation needs or the information you have available. The team can help you start the conversation.',
        },
        {
          question: 'What is the difference between tax preparation and tax planning?',
          answer:
            'Tax preparation focuses on preparing tax obligations. Tax planning is more forward-looking and considers tax questions before preparation. They are related but distinct services.',
        },
        {
          question: 'Can Urban Accounting help with tax preparation in Miami?',
          answer:
            'Yes. Urban Accounting offers tax preparation services in Miami. Contact the team to discuss your needs.',
        },
        {
          question: 'Can bookkeeping make tax preparation easier?',
          answer:
            'Organized bookkeeping can help bring financial information into order, which may provide a useful starting point for tax preparation discussions.',
        },
      ],
    },
    cta: {
      eyebrow: 'TAX TIME, WITH MORE CLARITY',
      title: 'Start with a conversation\nabout your taxes.',
      description: 'Discuss your tax preparation needs with Urban Accounting in Miami.',
      action: 'Schedule a Consultation',
      note: 'The appropriate support begins with your situation.',
    },
  },
  'tax-planning': {
    id: 'tax-planning',
    name: 'Tax Planning',
    seo: {
      title: 'Tax Planning Services in Miami | Urban Accounting',
      description:
        'Tax planning services in Miami for a more proactive conversation about your tax situation. Talk to Urban Accounting about your needs.',
    },
    hero: {
      eyebrow: 'TAX PLANNING · MIAMI, FLORIDA',
      title: 'Tax Planning Services in Miami',
      description:
        'A forward-looking conversation about your tax situation can help you consider questions before tax preparation begins.',
      primary: 'Discuss tax planning',
      secondary: 'Explore the service',
      note: 'A more proactive perspective on tax questions.',
      focus: ['Forward-looking review', 'Organized information', 'Informed decisions'],
    },
    introduction: {
      eyebrow: 'LOOKING AHEAD',
      title: 'Make space for tax questions\nbefore preparation time.',
      paragraphs: [
        'Tax planning looks ahead. It creates an opportunity to discuss your tax situation and decisions with more time and context than a preparation-only conversation.',
        'Urban Accounting offers tax planning as part of its tax services. It is a forward-looking discussion, supported by attention to financial information and the circumstances you want to consider.',
      ],
    },
    features: {
      eyebrow: 'THE ROLE OF TAX PLANNING',
      title: 'A proactive conversation\nabout your tax situation.',
      description:
        'Planning does not replace preparation; it helps you consider tax questions earlier.',
      items: [
        {
          title: 'Look ahead',
          description:
            'Tax planning makes space to discuss tax considerations before it is time to prepare obligations.',
        },
        {
          title: 'Review your situation',
          description:
            'A conversation about your current financial and tax situation can provide more context for future decisions.',
        },
        {
          title: 'Connect the information',
          description:
            'Organized accounting and bookkeeping information can support a more informed planning conversation.',
        },
      ],
    },
    benefits: {
      eyebrow: 'WHY PLAN AHEAD',
      title: 'More time for\nmore informed questions.',
      description:
        'A forward-looking approach helps avoid leaving every tax question until preparation time.',
      items: [
        {
          title: 'Earlier conversations',
          description:
            'Discussing tax questions in advance gives you more time to understand what matters to your situation.',
        },
        {
          title: 'A more connected view',
          description:
            'Planning can bring accounting information and tax questions into the same conversation.',
        },
        {
          title: 'Fewer surprises',
          description:
            'Considering tax questions earlier may help you feel better prepared for later tax conversations; outcomes depend on your situation.',
        },
      ],
    },
    process: {
      eyebrow: 'A FORWARD-LOOKING START',
      title: 'Begin with what\nyou want to consider.',
      description:
        'The scope of tax planning is discussed with you and is not individual tax advice on this page.',
      steps: [
        {
          title: 'Share your questions',
          description: 'Tell us what tax considerations you want to discuss.',
        },
        {
          title: 'Review your information',
          description:
            'Discuss the financial information and current context relevant to your situation.',
        },
        {
          title: 'Plan the next conversation',
          description: 'Agree on the appropriate support and how planning relates to preparation.',
        },
      ],
    },
    local: {
      eyebrow: 'TAX PLANNING IN MIAMI',
      title: 'A Miami conversation\nabout looking ahead.',
      description:
        'Urban Accounting is based in Miami. Contact the team to discuss tax planning questions and arrange a consultation.',
      addressLabel: 'MIAMI OFFICE',
      action: 'Contact Urban Accounting',
    },
    related: {
      eyebrow: 'CONNECTED TAX SERVICES',
      title: 'Plan ahead.\nPrepare with context.',
      description:
        'Tax planning is forward-looking, while tax preparation focuses on preparing obligations. Accounting and bookkeeping can help keep the financial information behind both conversations organized.',
      ids: ['tax-preparation', 'accounting', 'bookkeeping'],
      action: 'Explore this service',
      overviewAction: 'View Home overview',
    },
    faq: {
      eyebrow: 'TAX PLANNING QUESTIONS',
      title: 'A more proactive perspective.',
      items: [
        {
          question: 'What is tax planning?',
          answer:
            'Tax planning is a forward-looking conversation about your tax situation and questions to consider before preparation. Its relevance and scope depend on individual circumstances.',
        },
        {
          question: 'How is tax planning different from tax preparation?',
          answer:
            'Tax planning looks ahead and considers tax questions in advance. Tax preparation focuses on preparing the tax obligations that apply to a situation. The services can work together.',
        },
        {
          question: 'When should tax planning begin?',
          answer:
            'You can contact Urban Accounting when you want to discuss tax questions before preparation time. The appropriate timing depends on your circumstances.',
        },
        {
          question: 'Why is year-round planning useful?',
          answer:
            'Considering tax questions before preparation can provide more time and context for a conversation. It does not guarantee a particular outcome.',
        },
        {
          question: 'Can accounting and bookkeeping support tax planning?',
          answer:
            'Organized accounting and bookkeeping information can offer useful context when discussing tax planning. Urban Accounting offers both services.',
        },
      ],
    },
    cta: {
      eyebrow: 'A MORE PROACTIVE START',
      title: 'Make room for tax questions\nbefore preparation time.',
      description: 'Talk to Urban Accounting about tax planning in Miami.',
      action: 'Schedule a Consultation',
      note: 'Start with the questions you want to consider.',
    },
  },
};
