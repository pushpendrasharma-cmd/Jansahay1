/**
 * JanSahay - Government Schemes Plain-Language Portal (Rajasthan)
 * Schemes dataset tailored exactly to the design mockup and requirements.
 * Provides both English and Hindi localization.
 */

export const schemesData = [
  {
    id: 1,
    slug: "rajasthan-scholarship-scheme",
    name: "Rajasthan Scholarship Scheme for Students",
    nameHi: "राजस्थान छात्रवृत्ति योजना (विद्यार्थी सहायता)",
    category: "Education",
    categoryHi: "शिक्षा",
    categoryClass: "cat-education",
    icon: "education",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    briefDescription: "Helps students by providing financial support for education.",
    briefDescriptionHi: "शिक्षा के लिए आर्थिक सहायता प्रदान करके विद्यार्थियों की मदद करती है।",
    bullets: [
      "Students studying in Rajasthan",
      "Meet income & academic criteria"
    ],
    bulletsHi: [
      "राजस्थान में अध्ययनरत विद्यार्थी",
      "आय एवं शैक्षणिक मापदंड पूरे करते हों"
    ],
    question: "Are you a student studying in Rajasthan?",
    questionHi: "क्या आप राजस्थान में अध्ययनरत विद्यार्थी हैं?",
    targetGroup: "Students",
    targetGroupHi: "विद्यार्थी",
    ageGroup: "15-25",
    state: "Rajasthan",
    audience: "Students",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://hte.rajasthan.gov.in/",
    sourceAuthority: "Department of College & Higher Education, Rajasthan",
    sourceAuthorityHi: "कॉलेज एवं उच्च शिक्षा विभाग, राजस्थान",
    benefits: "Up to ₹5,000 per academic year for college fees and books, deposited directly via DBT. Differently-abled students receive up to ₹10,000.",
    benefitsHi: "कॉलेज फीस और किताबों के लिए प्रति वर्ष ₹5,000 तक सीधे बैंक खाते में (डीबीटी)। दिव्यांग छात्रों को ₹10,000 प्रति वर्ष।",
    incomeLimit: "Under ₹2,50,000 / year",
    incomeLimitHi: "वार्षिक पारिवारिक आय ₹2,50,000 से कम",
    ageLimit: "Regular college students (16 - 25 years)",
    ageLimitHi: "नियमित कॉलेज छात्र (16 - 25 वर्ष)",
    eligibilityCriteria: [
      "Bonafide resident of Rajasthan with a valid Jan Aadhaar card.",
      "Scored minimum 60% marks in Class 12 from Rajasthan Board (RBSE) or recognized board.",
      "Enrolled as a regular undergraduate student in a recognized college or university in Rajasthan.",
      "Annual family income from all sources must not exceed ₹2.5 Lakh.",
      "Must not be drawing benefits from another government scholarship scheme concurrently."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का मूल निवासी होना तथा वैध जन आधार कार्ड होना अनिवार्य है।",
      "राजस्थान बोर्ड (RBSE) या मान्यता प्राप्त बोर्ड से 12वीं में न्यूनतम 60% अंक प्राप्त किए हों।",
      "राजस्थान के किसी मान्यता प्राप्त कॉलेज/विश्वविद्यालय में नियमित छात्र के रूप में अध्ययनरत हों।",
      "परिवार की सभी स्रोतों से वार्षिक आय ₹2.5 लाख से अधिक न हो।",
      "किसी अन्य सरकारी छात्रवृत्ति योजना का दोहरा लाभ न ले रहे हों।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Student Aadhaar Card (विद्यार्थी आधार कार्ड)", required: true },
      { name: "Class 10 & 12 Marksheets (10वीं एवं 12वीं की अंकतालिका)", required: true },
      { name: "College Regular Admission Fee Receipt (कॉलेज प्रवेश शुल्क रसीद)", required: true },
      { name: "Income Certificate (प्रमाणित आय प्रमाण पत्र)", required: true },
      { name: "Bank Account Linked to Jan Aadhaar (जन आधार लिंक बैंक पासबुक)", required: true }
    ],
    applicationProcess: [
      "Log into SSO Rajasthan (sso.rajasthan.gov.in) with your SSO ID.",
      "Select 'Scholarship (HTE / CE)' from Citizen Apps.",
      "Choose the student member using your Jan Aadhaar number.",
      "Enter current college enrollment details and upload your fee receipt & marksheets.",
      "Submit online. Your college principal verifies it, followed by district approval."
    ],
    applicationProcessHi: [
      "अपनी SSO ID से राजस्थान सिंगल साइन-ऑन (sso.rajasthan.gov.in) पर लॉगिन करें।",
      "Citizen Apps में 'Scholarship (HTE / CE)' ऐप चुनें।",
      "जन आधार नंबर डालकर छात्र का चयन करें।",
      "वर्तमान कॉलेज प्रवेश विवरण भरें और फीस रसीद व अंकतालिका अपलोड करें।",
      "ऑनलाइन जमा करें। कॉलेज प्राचार्य के सत्यापन के बाद जिला स्तर पर अनुमोदन होगा।"
    ],
    faqs: [
      {
        q: "Can private (non-collegiate) students apply?",
        a: "No, this scheme strictly requires regular enrollment in an accredited college.",
        qHi: "क्या प्राइवेट (गैर-कॉलेजिएट) छात्र आवेदन कर सकते हैं?",
        aHi: "नहीं, इसके लिए मान्यता प्राप्त कॉलेज में नियमित (रेगुलर) अध्ययनरत होना अनिवार्य है।"
      }
    ]
  },

  {
    id: 2,
    slug: "chiranjeevi-swasthya-bima",
    name: "Mukhyamantri Chiranjeevi Swasthya Bima Yojana",
    nameHi: "मुख्यमंत्री चिरंजीवी स्वास्थ्य बीमा योजना",
    category: "Healthcare",
    categoryHi: "स्वास्थ्य सेवा",
    categoryClass: "cat-healthcare",
    icon: "healthcare",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    briefDescription: "Provides health insurance cover for eligible families.",
    briefDescriptionHi: "पात्र परिवारों को स्वास्थ्य बीमा सुरक्षा प्रदान करती है।",
    bullets: [
      "Family resident of Rajasthan",
      "As per scheme income criteria"
    ],
    bulletsHi: [
      "राजस्थान का निवासी परिवार",
      "योजना के आय मापदंड अनुसार"
    ],
    question: "Is your family resident of Rajasthan?",
    questionHi: "क्या आपका परिवार राजस्थान का स्थायी निवासी है?",
    targetGroup: "Families",
    targetGroupHi: "परिवार",
    ageGroup: "All age groups",
    state: "Rajasthan",
    audience: "All audiences",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://health.rajasthan.gov.in/",
    sourceAuthority: "Rajasthan State Health Assurance Agency",
    sourceAuthorityHi: "राजस्थान स्टेट हेल्थ एश्योरेंस एजेंसी",
    benefits: "Cashless inpatient hospitalization cover up to ₹25 Lakh per family per year in empanelled government and private hospitals across Rajasthan.",
    benefitsHi: "राजस्थान के सभी सरकारी और सूचीबद्ध निजी अस्पतालों में प्रत्येक परिवार को प्रति वर्ष ₹25 लाख तक का कैशलेस इलाज।",
    incomeLimit: "Free for NFSA, BPL, small farmers; ₹850/yr premium for general families",
    incomeLimitHi: "खाद्य सुरक्षा (NFSA), बीपीएल, लघु किसानों हेतु निःशुल्क; सामान्य हेतु ₹850 वार्षिक",
    ageLimit: "No age limit (covers entire registered family)",
    ageLimitHi: "कोई आयु सीमा नहीं (पूरा परिवार कवर)",
    eligibilityCriteria: [
      "Permanent resident family of Rajasthan holding a valid Jan Aadhaar Card.",
      "Automatically free for NFSA ration card holders, SECC 2011 families, small/marginal farmers, and contract workers.",
      "Other families can easily register by paying a nominal annual subscription of ₹850 per family.",
      "Covers treatment in recognized government and empanelled private hospitals for listed medical packages."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का स्थायी निवासी परिवार जिसके पास जन आधार कार्ड हो।",
      "खाद्य सुरक्षा (NFSA) कार्डधारकों, SECC 2011 परिवारों व लघु किसानों के लिए स्वतः निःशुल्क।",
      "अन्य परिवार प्रति वर्ष केवल ₹850 का प्रीमियम देकर आसानी से शामिल हो सकते हैं।",
      "सूचीबद्ध सरकारी और निजी अस्पतालों में पैकेज के अनुसार कैशलेस उपचार।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card / Enrolment Receipt (जन आधार कार्ड / रसीद)", required: true },
      { name: "Aadhaar Card of the patient (मरीज का आधार कार्ड)", required: true },
      { name: "Hospital Doctor's Admission Slip (अस्पताल भर्ती पर्ची)", required: true },
      { name: "Ration Card (for NFSA beneficiaries) (राशन कार्ड)", required: false }
    ],
    applicationProcess: [
      "Check your eligibility on the health portal using your Jan Aadhaar number.",
      "If in free category, your coverage is automatically active.",
      "If paying the ₹850 premium, visit any e-Mitra kiosk or use the online SSO portal.",
      "At the hospital, present your Jan Aadhaar at the Chiranjeevi helpdesk counter."
    ],
    applicationProcessHi: [
      "स्वास्थ्य पोर्टल पर जन आधार नंबर दर्ज करके अपनी पात्रता जांचें।",
      "निःशुल्क श्रेणी में होने पर बीमा स्वतः सक्रिय रहता है।",
      "सशुल्क श्रेणी में होने पर ई-मित्र या SSO से ₹850 का वार्षिक शुल्क जमा करें।",
      "अस्पताल पहुंचने पर चिरंजीवी काउंटर पर जन आधार कार्ड दिखाएं और कैशलेस दाखिला लें।"
    ],
    faqs: [
      {
        q: "Are pre-existing illnesses like heart conditions covered?",
        a: "Yes, all pre-existing illnesses are covered from day one of enrollment.",
        qHi: "क्या पुरानी बीमारियाँ जैसे दिल की बीमारी शामिल हैं?",
        aHi: "हाँ, पुरानी बीमारियाँ पहले दिन से ही पूरी तरह से कवर होती हैं।"
      }
    ]
  },

  {
    id: 3,
    slug: "pm-awas-yojana-gramin",
    name: "Pradhan Mantri Awas Yojana (PMAY-G)",
    nameHi: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    category: "Housing",
    categoryHi: "आवास",
    categoryClass: "cat-housing",
    icon: "housing",
    iconBg: "#ffedd5",
    iconColor: "#ea580c",
    briefDescription: "Supports construction of pucca house for eligible rural families.",
    briefDescriptionHi: "पात्र ग्रामीण परिवारों के लिए पक्के मकान के निर्माण में सहायता देती है।",
    bullets: [
      "Rural family in Rajasthan",
      "As per SECC & scheme criteria"
    ],
    bulletsHi: [
      "राजस्थान का ग्रामीण परिवार",
      "SECC एवं योजना मापदंड अनुसार"
    ],
    question: "Do you live in a rural area?",
    questionHi: "क्या आप ग्रामीण क्षेत्र में रहते हैं?",
    targetGroup: "Rural Families",
    targetGroupHi: "ग्रामीण परिवार",
    ageGroup: "18-59",
    state: "Rajasthan",
    audience: "Rural Families",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://rhreporting.nic.in/",
    sourceAuthority: "Rural Development & Panchayati Raj Dept., Rajasthan",
    sourceAuthorityHi: "ग्रामीण विकास एवं पंचायती राज विभाग, राजस्थान",
    benefits: "Direct financial grant of ₹1,20,000 (plains) or ₹1,30,000 (hilly/tribal areas) in 3 stages, plus 90 days MGNREGA wages and ₹12,000 for toilet construction.",
    benefitsHi: "तीन किस्तों में ₹1,20,000 (मैदानी) या ₹1,30,000 (जनजातीय) का नकद अनुदान, साथ ही 90 दिन की मनरेगा मजदूरी और ₹12,000 शौचालय निर्माण हेतु।",
    incomeLimit: "BPL / Kutcha house dwellers under SECC priority",
    incomeLimitHi: "कच्चे मकान में रहने वाले बीपीएल / SECC प्राथमिकता परिवार",
    ageLimit: "18 years and above (Head of Household)",
    ageLimitHi: "18 वर्ष या अधिक (परिवार का मुखिया)",
    eligibilityCriteria: [
      "Resident of a rural Gram Panchayat in Rajasthan.",
      "Family must live in a kutcha (mud/thatch) temporary house and own no pucca house anywhere in India.",
      "Name must be enlisted in the Gram Panchayat SECC-2011 list or Awas+ priority survey.",
      "Family should not have a government employee, tax-payer, or motorized 4-wheeler."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान की किसी ग्रामीण ग्राम पंचायत का निवासी होना।",
      "परिवार कच्चे मकान में रहता हो और पूरे देश में कोई पक्का मकान न हो।",
      "ग्राम पंचायत की SECC-2011 या आवास प्लस प्राथमिकता सूची में नाम दर्ज हो।",
      "परिवार में सरकारी कर्मचारी, आयकरदाता या चार पहिया वाहन न हो।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar & Aadhaar Card (जन आधार व आधार कार्ड)", required: true },
      { name: "Bank Passbook linked with Aadhaar (आधार लिंक बैंक पासबुक)", required: true },
      { name: "MGNREGA Job Card (मनरेगा जॉब कार्ड)", required: true },
      { name: "Residential Land Patta / Land Rights (आवासीय पट्टा)", required: true },
      { name: "Photo of Existing Kutcha House (कच्चे मकान का फोटो)", required: true }
    ],
    applicationProcess: [
      "Check your name in the Gram Panchayat Awas+ permanent waitlist.",
      "Submit land patta and Jan Aadhaar details to your Gram Vikas Adhikari (VDO).",
      "Block officials inspect and take geo-tagged mobile photos of your current kutcha structure.",
      "First installment is credited to your bank account to initiate foundation work.",
      "Subsequent installments are disbursed after verification of plinth and roof completion."
    ],
    applicationProcessHi: [
      "ग्राम पंचायत कार्यालय में आवास प्लस प्रतीक्षा सूची में अपना नाम देखें।",
      "जमीन का पट्टा और जन आधार विवरण ग्राम विकास अधिकारी (VDO) को दें।",
      "अधिकारी द्वारा वर्तमान कच्चे मकान की जियो-टैग फोटो ली जाएगी।",
      "नींव निर्माण के लिए पहली किस्त सीधे बैंक खाते में भेजी जाएगी।",
      "दीवार और छत बनने पर फोटो सत्यापन के बाद शेष किस्तों का भुगतान होगा।"
    ],
    faqs: [
      {
        q: "How many installments is the money paid in?",
        a: "The grant is disbursed in 3 direct bank transfer installments tied to foundation, lintel, and roof completion.",
        qHi: "राशि कितनी किस्तों में मिलती है?",
        aHi: "यह राशि नींव, खिड़की स्तर और छत स्तर के फोटो सत्यापन के बाद 3 किस्तों में बैंक खाते में भेजी जाती है।"
      }
    ]
  },

  {
    id: 4,
    slug: "rajasthan-yuva-kaushal-vikas",
    name: "Rajasthan Yuva Kaushal Vikas Yojana",
    nameHi: "राजस्थान युवा कौशल विकास योजना (युवा संबल)",
    category: "Employment",
    categoryHi: "रोजगार व कौशल",
    categoryClass: "cat-employment",
    icon: "employment",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    briefDescription: "Skill training and support for youth to improve employability.",
    briefDescriptionHi: "रोजगार क्षमता बढ़ाने के लिए युवाओं को कौशल प्रशिक्षण और वित्तीय सहायता।",
    bullets: [
      "Youth of Rajasthan",
      "As per age & scheme criteria"
    ],
    bulletsHi: [
      "राजस्थान के युवा",
      "आयु एवं योजना मापदंड अनुसार"
    ],
    question: "Are you looking for skill training or a job?",
    questionHi: "क्या आप कौशल प्रशिक्षण या नौकरी की तलाश में हैं?",
    targetGroup: "Youth & Job Seekers",
    targetGroupHi: "युवा एवं बेरोजगार",
    ageGroup: "18-35",
    state: "Rajasthan",
    audience: "Students",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://employment.livelihoods.rajasthan.gov.in/",
    sourceAuthority: "Skill, Employment & Entrepreneurship Dept., Rajasthan",
    sourceAuthorityHi: "कौशल, नियोजन एवं उद्यमिता विभाग, राजस्थान",
    benefits: "Monthly unemployment allowance of ₹4,000 for men and ₹4,500 for women/disabled graduates, paired with free certified vocational skill training.",
    benefitsHi: "स्नातक बेरोजगार युवाओं को प्रतिमाह ₹4,000 (पुरुष) व ₹4,500 (महिला/दिव्यांग) का भत्ता तथा निःशुल्क व्यावसायिक कौशल प्रशिक्षण।",
    incomeLimit: "Family income under ₹2,00,000 / year",
    incomeLimitHi: "पारिवारिक वार्षिक आय ₹2,00,000 से कम",
    ageLimit: "General: Up to 30 years; SC/ST/Women: Up to 35 years",
    ageLimitHi: "सामान्य: अधिकतम 30 वर्ष; आरक्षित वर्ग/महिला: अधिकतम 35 वर्ष",
    eligibilityCriteria: [
      "Bonafide resident of Rajasthan.",
      "Possess a graduate degree from a recognized university.",
      "Registered on the Rajasthan Employment Exchange portal.",
      "Must not be engaged in any full-time government or private employment or regular postgraduate studies.",
      "Willing to complete a 3-month skill course and attend a 4-hour daily internship in allotted public offices."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का मूल निवासी होना अनिवार्य है।",
      "मान्यता प्राप्त विश्वविद्यालय से स्नातक (ग्रेजुएशन) उत्तीर्ण हों।",
      "राजस्थान रोजगार कार्यालय पोर्टल पर पंजीकृत हों।",
      "किसी सरकारी/निजी नौकरी या नियमित उच्च अध्ययन में संलग्न न हों।",
      "3 माह का कौशल प्रशिक्षण और 4 घंटे दैनिक इंटर्नशिप करने के इच्छुक हों।"
    ],
    requiredDocuments: [
      { name: "Graduation Degree Marksheet (स्नातक डिग्री / अंकतालिका)", required: true },
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Domicile Certificate (मूल निवास प्रमाण पत्र)", required: true },
      { name: "Income Certificate (आय प्रमाण पत्र)", required: true },
      { name: "Self-declaration of Unemployment (बेरोजगारी का स्व-घोषणा पत्र)", required: true }
    ],
    applicationProcess: [
      "Register your profile on the Rajasthan Employment Exchange portal via SSO.",
      "Fill the online application for Yuva Sambal / Kaushal Vikas.",
      "Upload graduation certificate, domicile, and income declaration.",
      "Agree to the mandatory 4-hour departmental internship and skill program.",
      "The monthly allowance is disbursed directly to your bank account."
    ],
    applicationProcessHi: [
      "SSO के माध्यम से राजस्थान रोजगार कार्यालय पोर्टल पर प्रोफाइल बनाएं।",
      "युवा संबल / कौशल विकास योजना का ऑनलाइन फॉर्म भरें।",
      "स्नातक डिग्री, मूल निवास और आय प्रमाण पत्र अपलोड करें।",
      "दैनिक 4 घंटे की इंटर्नशिप और कौशल कोर्स की सहमति दें।",
      "मंजूरी के बाद प्रतिमाह भत्ता सीधे बैंक खाते में जमा होगा।"
    ],
    faqs: [
      {
        q: "For how long is this monthly allowance provided?",
        a: "The allowance is provided for a maximum duration of 2 years or until you secure employment.",
        qHi: "यह भत्ता अधिकतम कितने समय तक मिलता है?",
        aHi: "यह भत्ता अधिकतम 2 वर्ष तक अथवा रोजगार मिलने तक प्रदान किया जाता है।"
      }
    ]
  },

  {
    id: 5,
    slug: "mukhyamantri-kisan-sambal",
    name: "Mukhyamantri Kisan Sambal Yojana",
    nameHi: "मुख्यमंत्री किसान संबल योजना (कृषि सहायता)",
    category: "Agriculture",
    categoryHi: "कृषि",
    categoryClass: "cat-agriculture",
    icon: "agriculture",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    briefDescription: "Support for farmers for inputs and agricultural activities.",
    briefDescriptionHi: "कृषि आदानों और कृषि गतिविधियों के लिए किसानों को आर्थिक संबल।",
    bullets: [
      "Farmer of Rajasthan",
      "As per landholding criteria"
    ],
    bulletsHi: [
      "राजस्थान के किसान",
      "भूमि स्वामित्व मापदंड अनुसार"
    ],
    question: "Do you do farming as your main work?",
    questionHi: "क्या आपका मुख्य कार्य खेती-किसानी है?",
    targetGroup: "Farmers",
    targetGroupHi: "किसान",
    ageGroup: "18-59",
    state: "Rajasthan",
    audience: "Farmers",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://krishi.rajasthan.gov.in/",
    sourceAuthority: "Department of Agriculture & Energy, Rajasthan",
    sourceAuthorityHi: "कृषि एवं ऊर्जा विभाग, राजस्थान सरकार",
    benefits: "Electricity bill subsidy up to ₹1,000/month (₹12,000/year) on agricultural meters, plus seed minikit subsidies and solar pump assistance.",
    benefitsHi: "मीटरयुक्त कृषि कनेक्शन पर ₹1,000 प्रतिमाह (₹12,000 वार्षिक) तक की बिजली सब्सिडी, साथ ही बीज किट व सोलर पंप अनुदान।",
    incomeLimit: "All farmers with agricultural landholding (Excluding Income Tax Payers)",
    incomeLimitHi: "कृषि भूमि धारक सभी किसान (आयकरदाताओं को छोड़कर)",
    ageLimit: "18 years and above",
    ageLimitHi: "18 वर्ष या अधिक",
    eligibilityCriteria: [
      "Farmer residing in Rajasthan owning cultivable agricultural land.",
      "Holding an active metered agricultural power connection or registered on the RajKisan portal.",
      "Connection linked with Jan Aadhaar and Aadhaar.",
      "Not an institutional landholder or government gazetted officer."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का निवासी किसान जिसके नाम कृषि योग्य भूमि हो।",
      "मीटरयुक्त कृषि बिजली कनेक्शन धारक हों या राजकिसान पोर्टल पर पंजीकृत हों।",
      "बिजली कनेक्शन का जन आधार से लिंक होना अनिवार्य है।",
      "सरकारी राजपत्रित अधिकारी या आयकरदाता न हों।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Land Jamabandi / Revenue Record (जमाबंदी / खतौनी नकल)", required: true },
      { name: "Electricity K-Number / Connection Bill (बिजली बिल K-नंबर)", required: true },
      { name: "Bank Account Details (बैंक खाता विवरण)", required: true }
    ],
    applicationProcess: [
      "Link your agricultural electricity K-number with Jan Aadhaar via e-Mitra or SSO.",
      "Register on the RajKisan Sathi portal for seed and agricultural tool subsidies.",
      "DISCOM automatically deducts up to ₹1,000 subsidy on each monthly electricity bill.",
      "Check bill discount under 'Rajasthan Govt Subsidy'."
    ],
    applicationProcessHi: [
      "ई-मित्र या SSO से अपने कृषि कनेक्शन के K-नंबर को जन आधार से लिंक कराएं।",
      "बीज और कृषि उपकरण सब्सिडी के लिए राजकिसान साथी पोर्टल पर पंजीकरण करें।",
      "बिजली विभाग हर महीने के बिल में ₹1,000 तक की छूट स्वतः काटकर भेजेगा।",
      "बिजली बिल में 'राज्य सरकार सब्सिडी' कॉलम में छूट का विवरण देख सकते हैं।"
    ],
    faqs: [
      {
        q: "What if my monthly agricultural bill is less than ₹1,000?",
        a: "If the bill is under ₹1,000, your payable bill becomes ₹0 and remaining balance carries forward.",
        qHi: "यदि मेरा कृषि बिल ₹1,000 से कम आता है तो क्या होगा?",
        aHi: "यदि बिल ₹1,000 से कम आता है, तो आपका बिल ₹0 हो जाएगा और बची हुई सब्सिडी अगले माह में जुड़ जाएगी।"
      }
    ]
  },

  {
    id: 6,
    slug: "mukhyamantri-mahila-suraksha",
    name: "Mukhyamantri Mahila Suraksha Yojana",
    nameHi: "मुख्यमंत्री महिला सुरक्षा एवं संबल योजना",
    category: "Women & Child",
    categoryHi: "महिला एवं बाल विकास",
    categoryClass: "cat-women",
    icon: "women",
    iconBg: "#fce7f3",
    iconColor: "#db2777",
    briefDescription: "Provides support for safety, empowerment and well-being of women.",
    briefDescriptionHi: "महिलाओं की सुरक्षा, सशक्तिकरण और कल्याण के लिए सहायता प्रदान करती है।",
    bullets: [
      "Women resident of Rajasthan",
      "As per scheme conditions"
    ],
    bulletsHi: [
      "राजस्थान की निवासी महिलाएं",
      "योजना की शर्तों अनुसार"
    ],
    question: "Are you a woman resident of Rajasthan?",
    questionHi: "क्या आप राजस्थान की निवासी महिला हैं?",
    targetGroup: "Women & Girls",
    targetGroupHi: "महिलाएं एवं बालिकाएं",
    ageGroup: "All age groups",
    state: "Rajasthan",
    audience: "Women",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://wcd.rajasthan.gov.in/",
    sourceAuthority: "Women & Child Development Department, Rajasthan",
    sourceAuthorityHi: "महिला एवं बाल विकास विभाग, राजस्थान सरकार",
    benefits: "Direct financial support up to ₹50,000 across life milestones for girl child, free sanitary napkins (Udaan), self-defense workshops, and dedicated Aparajita counseling centers.",
    benefitsHi: "बालिकाओं को शिक्षा व पोषण हेतु ₹50,000 की सहायता, उड़ान योजना में निःशुल्क सेनेटरी नैपकिन, आत्मरक्षा प्रशिक्षण और अपराजिता केंद्रों पर विधिक सहायता।",
    incomeLimit: "All Rajasthan Jan Aadhaar holding families",
    incomeLimitHi: "सभी जन आधार कार्ड धारक परिवार",
    ageLimit: "All women and girls",
    ageLimitHi: "सभी आयु वर्ग की महिलाएं एवं बालिकाएं",
    eligibilityCriteria: [
      "Woman or girl child who is a resident of Rajasthan.",
      "Holds a valid Jan Aadhaar Card with active female head of family mapping.",
      "For institutional delivery & educational milestones: born in empanelled hospitals and studying in government schools.",
      "Destitute, widowed, or abandoned women are granted immediate priority relief."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान की मूल निवासी महिला या बालिका।",
      "वैध जन आधार कार्ड होना अनिवार्य है जिसमें महिला मुखिया दर्ज हो।",
      "संस्थागत प्रसव एवं स्कूली प्रोत्साहन हेतु सरकारी अस्पताल व स्कूल में पंजीयन।",
      "निराश्रित, विधवा या संकटग्रस्त महिलाओं को विशेष प्राथमिकता सहायता।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Aadhaar Card (आधार कार्ड)", required: true },
      { name: "Hospital Delivery Slip / Birth Record (if applying for child) (प्रसव पर्ची)", required: false },
      { name: "Bank Passbook linked to Jan Aadhaar (बैंक खाता पासबुक)", required: true }
    ],
    applicationProcess: [
      "Visit your local Anganwadi center or register on the WCD Rajasthan portal.",
      "For financial aid: Applications are processed via Jan Aadhaar and PCTS portal.",
      "For emergency help or legal counseling: Contact toll-free Women Helpline 1090 or CM Helpline 181.",
      "Eligible monetary benefits are credited directly to the woman's savings bank account."
    ],
    applicationProcessHi: [
      "अपने नजदीकी आंगनवाड़ी केंद्र से संपर्क करें या WCD पोर्टल पर जाएं।",
      "वित्तीय संबल के लिए आवेदन जन आधार एवं PCTS पोर्टल के जरिए स्वतः प्रोसेस होता है।",
      "आपातकालीन सहायता या कानूनी सलाह के लिए महिला हेल्पलाइन 1090 या 181 पर कॉल करें।",
      "पात्र सहायता राशि सीधे महिला के जन आधार लिंक बैंक खाते में भेजी जाती है।"
    ],
    faqs: [
      {
        q: "What is the toll-free emergency helpline for women in Rajasthan?",
        a: "You can dial 1090 (Women Helpline) or 181 (Rajasthan Sampark) 24/7 for immediate assistance.",
        qHi: "राजस्थान में महिलाओं के लिए आपातकालीन हेल्पलाइन क्या है?",
        aHi: "आप किसी भी समय 1090 (महिला हेल्पलाइन) या 181 (राजस्थान संपर्क) पर निःशुल्क कॉल कर सकती हैं।"
      }
    ]
  },

  {
    id: 7,
    slug: "rajasthan-sahayata-yojana",
    name: "Rajasthan Sahayata Yojana",
    nameHi: "राजस्थान सहायता योजना (वित्तीय राहत)",
    category: "Financial Support",
    categoryHi: "वित्तीय सहायता",
    categoryClass: "cat-financial",
    icon: "financial",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    briefDescription: "Financial assistance for families in need during difficult times.",
    briefDescriptionHi: "कठिन समय में जरूरतमंद परिवारों के लिए आपातकालीन वित्तीय सहायता।",
    bullets: [
      "Resident of Rajasthan",
      "As per income & need criteria"
    ],
    bulletsHi: [
      "राजस्थान का निवासी",
      "आय एवं आवश्यकता मापदंड अनुसार"
    ],
    question: "Does your family need financial assistance?",
    questionHi: "क्या आपके परिवार को आर्थिक सहायता की आवश्यकता है?",
    targetGroup: "Needy Families",
    targetGroupHi: "जरूरतमंद परिवार",
    ageGroup: "All age groups",
    state: "Rajasthan",
    audience: "All audiences",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://sjed.rajasthan.gov.in/",
    sourceAuthority: "Chief Minister Relief Fund / Social Justice Dept.",
    sourceAuthorityHi: "मुख्यमंत्री सहायता कोष / सामाजिक न्याय एवं अधिकारिता विभाग",
    benefits: "Direct financial emergency relief from ₹10,000 up to ₹1,00,000 for families facing acute distress, medical crisis, accidental loss of breadwinner, or natural calamity.",
    benefitsHi: "परिवार के मुखिया की आकस्मिक मृत्यु, गंभीर बीमारी या प्राकृतिक आपदा के समय ₹10,000 से लेकर ₹1,00,000 तक की त्वरित आर्थिक राहत सहायता।",
    incomeLimit: "BPL, Antyodaya, or annual family income under ₹1,50,000",
    incomeLimitHi: "बीपीएल, अंत्योदय या पारिवारिक वार्षिक आय ₹1,50,000 से कम",
    ageLimit: "Any age",
    ageLimitHi: "कोई आयु सीमा नहीं",
    eligibilityCriteria: [
      "Bonafide resident of Rajasthan.",
      "Family facing acute financial emergency due to death of earning member, disability, natural disaster, or serious uninsurable illness.",
      "Must not have received similar compensation from other government statutory funds for the same event.",
      "Recommended by District Collector or Sub-Divisional Magistrate (SDM)."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का मूल निवासी होना अनिवार्य है।",
      "कमाने वाले सदस्य की मृत्यु, गंभीर दुर्घटना या प्राकृतिक आपदा के कारण संकटग्रस्त परिवार।",
      "उसी घटना के लिए किसी अन्य सरकारी मुआवजे का लाभ न लिया हो।",
      "जिला कलेक्टर अथवा उपखंड अधिकारी (SDM) की अनुशंसा पर देय।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Aadhaar Card of Applicant (आधार कार्ड)", required: true },
      { name: "Death / Medical / Incident Certificate (मृत्यु / मेडिकल प्रमाण पत्र / एफआईआर)", required: true },
      { name: "Income Certificate (प्रमाणित आय प्रमाण पत्र)", required: true },
      { name: "Bank Passbook copy (बैंक खाता विवरण)", required: true }
    ],
    applicationProcess: [
      "Submit an application to the District Collector office or online via the CM Relief Fund module on SSO.",
      "Enclose medical discharge, death certificate, or incident report along with Jan Aadhaar.",
      "Tehsildar / District team verifies the circumstances within 7 to 10 days.",
      "Sanctioned relief amount is transferred directly to the beneficiary's bank account via DBT."
    ],
    applicationProcessHi: [
      "जिला कलेक्टर कार्यालय में आवेदन दें अथवा SSO पर मुख्यमंत्री सहायता कोष मॉड्यूल से ऑनलाइन अप्लाई करें।",
      "जन आधार कार्ड के साथ मेडिकल पर्चा, मृत्यु प्रमाण पत्र या घटना रिपोर्ट संलग्न करें।",
      "तहसीलदार/प्रशासनिक टीम द्वारा 7 से 10 दिनों में सत्यापन किया जाता है।",
      "स्वीकृति के बाद राशि सीधे लाभार्थी के बैंक खाते में ट्रांसफर कर दी जाती है।"
    ],
    faqs: [
      {
        q: "Who approves applications under the Chief Minister Relief Fund?",
        a: "The District Collector and Department of Social Justice review and authorize grants based on field verification.",
        qHi: "मुख्यमंत्री सहायता कोष के तहत आवेदन कौन स्वीकृत करता है?",
        aHi: "जिला कलेक्टर एवं सामाजिक न्याय विभाग मौके की जांच रिपोर्ट के आधार पर सहायता स्वीकृत करते हैं।"
      }
    ]
  },

  {
    id: 8,
    slug: "divyangjan-sahayata-yojana",
    name: "Divyangjan Sahayata Yojana",
    nameHi: "दिव्यांगजन सहायता योजना (विशेष योग्यजन पेंशन व उपकरण)",
    category: "Disability Support",
    categoryHi: "दिव्यांग सहायता",
    categoryClass: "cat-disability",
    icon: "disability",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    briefDescription: "Support for persons with disabilities for a better and independent life.",
    briefDescriptionHi: "दिव्यांग व्यक्तियों को बेहतर और आत्मनिर्भर जीवन के लिए आर्थिक व उपकरण सहायता।",
    bullets: [
      "Person with disability",
      "As per disability certification"
    ],
    bulletsHi: [
      "दिव्यांग व्यक्ति",
      "दिव्यांगता प्रमाण पत्र अनुसार"
    ],
    question: "Do you have a disability certificate?",
    questionHi: "क्या आपके पास दिव्यांगता प्रमाण पत्र (UDID कार्ड) है?",
    targetGroup: "Persons with Disabilities",
    targetGroupHi: "विशेष योग्यजन",
    ageGroup: "All age groups",
    state: "Rajasthan",
    audience: "Divyangjan",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://ssp.rajasthan.gov.in/",
    sourceAuthority: "Social Justice & Empowerment Department, Rajasthan",
    sourceAuthorityHi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान",
    benefits: "Monthly pension of ₹1,000 to ₹1,500+ with 15% annual increment, free motorized tricycles, hearing aids, artificial limbs, and bus travel concession.",
    benefitsHi: "प्रतिमाह ₹1,000 से ₹1,500+ की नियमित पेंशन (15% वार्षिक वृद्धि सहित), मुफ्त मोटराइज्ड ट्राइसाइकिल, श्रवण यंत्र, कृत्रिम अंग एवं रोडवेज बसों में निःशुल्क यात्रा।",
    incomeLimit: "Family income under ₹60,000/year (No limit for dwarfism or intellectual disability)",
    incomeLimitHi: "वार्षिक पारिवारिक आय ₹60,000 से कम (बौनेपन व मानसिक दिव्यांगता में आय सीमा नहीं)",
    ageLimit: "Any age",
    ageLimitHi: "कोई आयु सीमा नहीं",
    eligibilityCriteria: [
      "Resident of Rajasthan with Jan Aadhaar Card.",
      "Possess a medical disability certificate or UDID card verifying at least 40% permanent disability.",
      "Persons with dwarfism (height below 3 feet 6 inches) are eligible regardless of income.",
      "Not drawing another regular government retirement pension."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का मूल निवासी तथा जन आधार कार्ड धारक।",
      "सक्षम मेडिकल बोर्ड द्वारा जारी 40% या अधिक का दिव्यांगता प्रमाण पत्र या UDID कार्ड हो।",
      "बौनापन (वयस्क होने पर 3 फीट 6 इंच से कम ऊंचाई) वाले व्यक्ति बिना आय सीमा के पात्र।",
      "सरकार से अन्य कोई नियमित सेवानिवृत्ति पेंशन न ले रहे हों।"
    ],
    requiredDocuments: [
      { name: "Disability Certificate / UDID Card (दिव्यांगता प्रमाण पत्र / UDID कार्ड)", required: true },
      { name: "Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Aadhaar Card (आधार कार्ड)", required: true },
      { name: "Income Certificate (आय प्रमाण पत्र)", required: true },
      { name: "Bank Account Details (बैंक पासबुक)", required: true }
    ],
    applicationProcess: [
      "Visit any e-Mitra kiosk or apply through RAJSSP portal on SSO Rajasthan.",
      "Provide your UDID card number and Jan Aadhaar details.",
      "Upload disability certificate and income verification.",
      "The Sub-Divisional Officer (SDO) sanctions the pension order digitally.",
      "Pension is credited directly to your bank account every month on the 1st."
    ],
    applicationProcessHi: [
      "नजदीकी ई-मित्र पर जाएं या SSO पोर्टल पर RAJSSP विकल्प से ऑनलाइन आवेदन करें।",
      "अपना UDID कार्ड नंबर और जन आधार संख्या दर्ज करें।",
      "दिव्यांगता प्रमाण पत्र और आय घोषणा अपलोड करें।",
      "उपखंड अधिकारी (SDO) द्वारा पेंशन डिजिटल रूप से स्वीकृत की जाती है।",
      "हर महीने की पहली तारीख को पेंशन सीधे बैंक खाते में जमा होती है।"
    ],
    faqs: [
      {
        q: "How to get free motorized tricycles or assistive devices?",
        a: "Register on the SJED equipment portal or participate in district Divyang camps held by the district administration.",
        qHi: "मुफ्त मोटराइज्ड ट्राइसाइकिल या उपकरण कैसे प्राप्त करें?",
        aHi: "सामाजिक न्याय विभाग के उपकरण पोर्टल पर आवेदन करें अथवा जिला प्रशासन द्वारा आयोजित दिव्यांग शिविरों में भाग लें।"
      }
    ]
  },

  {
    id: 9,
    slug: "varishth-nagrik-sahyog-yojana",
    name: "Varishth Nagrik Sahyog Yojana",
    nameHi: "वरिष्ठ नागरिक सहयोग योजना (वृद्धजन पेंशन व तीर्थ यात्रा)",
    category: "Senior Citizens",
    categoryHi: "वरिष्ठ नागरिक",
    categoryClass: "cat-senior",
    icon: "senior",
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    briefDescription: "Assistance and support services for senior citizens.",
    briefDescriptionHi: "वरिष्ठ नागरिकों के लिए सम्मानजनक पेंशन, स्वास्थ्य और तीर्थ यात्रा सहायता सेवाएं।",
    bullets: [
      "60 years or above",
      "Resident of Rajasthan"
    ],
    bulletsHi: [
      "60 वर्ष या उससे अधिक",
      "राजस्थान के निवासी"
    ],
    question: "Are you 60 years or above?",
    questionHi: "क्या आपकी आयु 60 वर्ष या उससे अधिक है?",
    targetGroup: "Senior Citizens",
    targetGroupHi: "वरिष्ठ नागरिक",
    ageGroup: "60+",
    state: "Rajasthan",
    audience: "Senior Citizens",
    popular: true,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://ssp.rajasthan.gov.in/",
    sourceAuthority: "Social Justice & Devasthan Department, Rajasthan",
    sourceAuthorityHi: "सामाजिक न्याय एवं देवस्थान विभाग, राजस्थान सरकार",
    benefits: "Guaranteed monthly social pension starting at ₹1,000/month (with statutory annual 15% increase), free AC train/flight pilgrimage under Devasthan Teerth Yatra, and priority healthcare.",
    benefitsHi: "प्रतिमाह ₹1,000 की सुनिश्चित सामाजिक सुरक्षा पेंशन (वार्षिक 15% वृद्धि सहित), वरिष्ठ नागरिक तीर्थ यात्रा योजना के तहत मुफ्त एसी ट्रेन/विमान यात्रा एवं प्राथमिकता स्वास्थ्य सेवा।",
    incomeLimit: "Family income under ₹48,000 / year for pension; Teerth Yatra open to all seniors",
    incomeLimitHi: "पेंशन हेतु पारिवारिक आय ₹48,000 से कम; तीर्थ यात्रा हेतु सभी बुजुर्ग पात्र",
    ageLimit: "Women: 55+ years; Men: 58+ years (Pilgrimage: 60+ years)",
    ageLimitHi: "महिला: 55+ वर्ष; पुरुष: 58+ वर्ष (तीर्थ यात्रा: 60+ वर्ष)",
    eligibilityCriteria: [
      "Bonafide permanent resident of Rajasthan.",
      "Age proof verifying minimum age (Jan Aadhaar / Voter ID / 10th certificate).",
      "For pension: Family annual income under ₹48,000 (relaxed for destitute elderly living alone).",
      "Must not be drawing any other regular pension from Central/State Government."
    ],
    eligibilityCriteriaHi: [
      "राजस्थान का स्थायी मूल निवासी होना अनिवार्य है।",
      "निर्धारित न्यूनतम आयु का प्रमाण पत्र (जन आधार / वोटर आईडी / जन्म प्रमाण पत्र)।",
      "पेंशन हेतु पारिवारिक वार्षिक आय ₹48,000 से कम (अकेले रहने वाले निराश्रितों हेतु छूट)।",
      "केंद्र या राज्य सरकार से कोई अन्य नियमित पेंशन न मिल रही हो।"
    ],
    requiredDocuments: [
      { name: "Jan Aadhaar Card with DOB (जन आधार कार्ड)", required: true },
      { name: "Aadhaar Card (आधार कार्ड)", required: true },
      { name: "Age Certificate / Voter ID Card (आयु प्रमाण पत्र / मतदाता पहचान पत्र)", required: true },
      { name: "Income Certificate (आय प्रमाण पत्र)", required: true },
      { name: "Bank Passbook (बैंक पासबुक)", required: true }
    ],
    applicationProcess: [
      "Visit any e-Mitra counter or apply online on RAJSSP portal.",
      "Provide Jan Aadhaar number; system validates your age automatically.",
      "Upload income self-declaration and bank details.",
      "Tehsildar / SDO issues digital pension sanction.",
      "Disbursement occurs directly into the savings account on the 1st of every month."
    ],
    applicationProcessHi: [
      "ई-मित्र पर जाएं अथवा RAJSSP पोर्टल पर ऑनलाइन आवेदन करें।",
      "जन आधार संख्या दर्ज करें; सिस्टम आयु का सत्यापन स्वतः कर लेता है।",
      "आय घोषणा और बैंक पासबुक विवरण अपलोड करें।",
      "तहसीलदार/SDO द्वारा पेंशन स्वीकृति आदेश जारी किया जाता है।",
      "हर महीने की पहली तारीख को पेंशन सीधे खाते में ट्रांसफर होती है।"
    ],
    faqs: [
      {
        q: "What is the Devasthan Senior Citizen Pilgrimage scheme?",
        a: "Eligible citizens aged 60+ can travel for free to famous pilgrimage sites (Rameshwaram, Tirupati, Vaishno Devi, Nepal) by deluxe train or airplane.",
        qHi: "वरिष्ठ नागरिक तीर्थ यात्रा योजना क्या है?",
        aHi: "60 वर्ष से अधिक उम्र के बुजुर्ग देवस्थान विभाग द्वारा रामेश्वरम, तिरुपति, वैष्णो देवी आदि तीर्थों की एसी ट्रेन या हवाई यात्रा मुफ्त कर सकते हैं।"
      }
    ]
  },

  {
    id: 10,
    slug: "palanhar-yojana",
    name: "Palanhar Yojana (Foster Care Support)",
    nameHi: "पालनहार योजना (बाल कल्याण एवं शिक्षा)",
    category: "Women & Child",
    categoryHi: "महिला एवं बाल विकास",
    categoryClass: "cat-women",
    icon: "women",
    iconBg: "#fce7f3",
    iconColor: "#db2777",
    briefDescription: "Monthly foster assistance and educational support for orphaned and destitute children.",
    briefDescriptionHi: "अनाथ व निराश्रित बच्चों के पालन-पोषण एवं शिक्षा हेतु मासिक आर्थिक सहायता।",
    bullets: [
      "Children 0-18 years of age",
      "Enrolled in school or anganwadi"
    ],
    bulletsHi: [
      "0 से 18 वर्ष तक के बच्चे",
      "स्कूल या आंगनवाड़ी में अध्ययनरत"
    ],
    question: "Are you taking care of an orphan or destitute child in Rajasthan?",
    questionHi: "क्या आप राजस्थान में किसी अनाथ या निराश्रित बच्चे का पालन-पोषण कर रहे हैं?",
    targetGroup: "Children & Foster Guardians",
    targetGroupHi: "अनाथ बच्चे व पालनहार",
    ageGroup: "0-18",
    state: "Rajasthan",
    audience: "Women",
    popular: false,
    lastChecked: "05 May 2024",
    lastCheckedHi: "05 मई 2024",
    verified: true,
    officialLink: "https://sjed.rajasthan.gov.in/",
    sourceAuthority: "Social Justice and Empowerment Department, Rajasthan",
    sourceAuthorityHi: "सामाजिक न्याय एवं अधिकारिता विभाग, राजस्थान",
    benefits: "Monthly assistance of ₹1,500 to ₹2,500 per child plus ₹2,000 annual grant for school clothes and shoes.",
    benefitsHi: "प्रति बच्चा ₹1,500 से ₹2,500 प्रतिमाह सहायता तथा कपड़े व जूते हेतु ₹2,000 अतिरिक्त वार्षिक अनुदान।",
    incomeLimit: "Foster family income under ₹1,20,000 / year (No limit for orphans)",
    incomeLimitHi: "पालनहार परिवार की वार्षिक आय ₹1,20,000 से कम (पूर्ण अनाथ बच्चों हेतु कोई आय सीमा नहीं)",
    ageLimit: "0 to 18 years",
    ageLimitHi: "0 से 18 वर्ष",
    eligibilityCriteria: [
      "Child and foster guardian must be residents of Rajasthan.",
      "Eligible: Orphans, children of widowed/destitute mothers, parents serving life terms, or silicosis affected.",
      "Child must be attending an Anganwadi (2-6 years) or regular recognized school (6-18 years)."
    ],
    eligibilityCriteriaHi: [
      "बच्चा और पालनहार दोनों राजस्थान के निवासी हों।",
      "पात्र: अनाथ बच्चे, विधवा/निराश्रित माताओं के बच्चे या गंभीर रोग से पीड़ित माता-पिता के बच्चे।",
      "बच्चे का आंगनवाड़ी (2-6 वर्ष) अथवा मान्यता प्राप्त स्कूल (6-18 वर्ष) में पढ़ना अनिवार्य है।"
    ],
    requiredDocuments: [
      { name: "Child & Guardian Jan Aadhaar Card (जन आधार कार्ड)", required: true },
      { name: "Death / Destitute Certificate (मृत्यु प्रमाण पत्र / पात्रता आदेश)", required: true },
      { name: "Current School Study Certificate (स्कूल अध्ययन प्रमाण पत्र)", required: true },
      { name: "Foster Guardian Bank Passbook (पालनहार का बैंक खाता)", required: true }
    ],
    applicationProcess: [
      "Obtain an active student study certificate from the child's school.",
      "Apply online on the Palanhar portal via SSO or visit any e-Mitra kiosk.",
      "Upload eligibility certificates and school certificate.",
      "Approved monthly allowance is directly credited to guardian's bank account."
    ],
    applicationProcessHi: [
      "बच्चे के स्कूल या आंगनवाड़ी केंद्र से चालू सत्र का अध्ययन प्रमाण पत्र लें।",
      "SSO या ई-मित्र के माध्यम से पालनहार पोर्टल पर ऑनलाइन आवेदन करें।",
      "संबंधित प्रमाण पत्र और स्कूल प्रमाण पत्र अपलोड करें।",
      "स्वीकृति के पश्चात प्रतिमाह राशि सीधे पालनहार के बैंक खाते में आएगी।"
    ],
    faqs: [
      {
        q: "Is annual renewal required?",
        a: "Yes, submit the fresh school enrollment certificate every year in July/August to continue benefits.",
        qHi: "क्या हर साल नवीनीकरण जरूरी है?",
        aHi: "हाँ, लाभ जारी रखने के लिए प्रतिवर्ष जुलाई-अगस्त में स्कूल का नया अध्ययन प्रमाण पत्र जमा करना होता है।"
      }
    ]
  }
];
