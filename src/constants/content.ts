/**
 * Remote placeholder images only (no local / public assets).
 * Replace with real URLs or `/assets/...` when you upload media.
 */
export const PLACEHOLDERS = {
  og: "https://placehold.co/1200x630/e8e8e8/666666?text=Gemstone+Therapies",
  hero: "/assets/hero-image.webp",
  sectionWide: (label: string) =>
    `https://placehold.co/1400x788/e8e8e8/666666?text=${encodeURIComponent(label)}`,
  portrait: "/assets/profile.jpeg",
  square: "https://placehold.co/800x800/e8e8e8/666666?text=Photo",
  thermography: "https://placehold.co/600x800/404040/bdbdbd?text=Thermography",
  demoBanner: "/assets/demo-banner.mp4",
  exercises: [
    "/assets/excercise_1.mp4",
    "/assets/excercise_2.mp4",
    "/assets/excercise_3.mp4",
  ],
} as const;

export const SITE_CONTENT = {
  brand: {
    logo: "GEMSTONE 💎 THERAPIES",
    name: "Gemstone Therapies",
    tagline: "Pain Care Clinic | Advanced Stone Therapy & Homoeopathic Clinic",
    doctor: "Dr. Shahid Aqeel Rana",
    qualifications:
      "Certified Stone Therapist | Consultant HOMEO Physician | HOD Stone Therapy Department",
    phone: "0321-4014284",
    whatsapp: "923214014284",
  },
  announcement:
    "Book Your Free Consultation Today - Call or WhatsApp 0321-4014284 — click here >>>>",
  navigation: [
    { label: "HOME", href: "#home" },
    { label: "PRODUCTS", href: "#products" },
    { label: "TREATMENTS", href: "#details" },
    { label: "BENEFITS", href: "#benefits" },
    { label: "EXERCISES", href: "#exercises" },
    { label: "ABOUT", href: "#about" },
    { label: "FAQ", href: "#faq" },
    { label: "LOCATIONS", href: "#locations" },
  ],
  hero: {
    heading: "GEMSTONE THERAPIES (Pain Care Clinic)",
    urduHeading:
      "جدید مشینری اور جیڈ سٹون تھراپی کے ذریعے پاکستان میں پہلی مرتبہ مہروں کا علاج ممکن!",
    subtext:
      "For the first time in Pakistan, spinal disc problems (slip disc, disc bulge, back pain) are now being treated without surgery — using advanced machinery for stone therapy procedure.",
    badges: ["U.S FDA Approved", "No Surgery", "No Drugs", "No Side Effects"],
  },
  locations: [
    {
      name: "Gosha e Shifa Hospital",
      urduName: "گوشہ شفا ء ہسپتال",
      address: "Third Floor, 759 A Gulshan e Ravi, Lahore",
      timings: "9 AM to 2 PM",
      urduTimings: "صبح 9 تا 2 بجے",
      mapUrl: "https://maps.app.goo.gl/octqogTkKbNEnHDn9",
    },
    {
      name: "Gemstone Therapies Clinic",
      urduName: "جم سٹون تھراپی کلینک",
      address: "Moon Market, Near Hot Roast Restaurant, Gulshan e Ravi, Lahore",
      timings: "6 PM to 9 PM",
      urduTimings: "شام 6 تا 9بجے",
      mapUrl: "https://maps.app.goo.gl/fYbNHzrB2CycmZ3G8",
    },
  ],
  services: [
    "HOT STONE THERAPY",
    "COLD STONE THERAPY",
    "REFLEXOLOGY",
    "THERMAL MASSAGE",
    "HOMOEOPATHIC ALTERNATIVE MEDICINE (German method base)",
  ],
  conditions: [
    "Neck Pain",
    "Shoulder Pain",
    "Elbow Pain",
    "Wrist Pain",
    "Hip Pain",
    "Thigh Pain",
    "Knee Pain",
    "Ankle Pain",
    "Foot Pain",
    "Joint Pain",
    "Arthritis",
    "Carpal Tunnel",
    "Rotator Cuff Injury",
    "Achilles Tendinitis",
    "Plantar Fasciitis",
    "Soft Tissue Injuries",
    "Post Surgery Pain & Healing",
    "Slip Disc",
    "Disc Bulge",
    "Back Pain",
    "Sciatica",
    "Dorsal Arthritis",
  ],
  benefits: [
    "Relieve muscular stiffness and soreness",
    "Improve sleep",
    "Relax and soothes tired muscles",
    "Boost energy level and feeling of well-being",
    "Relieve mental stress",
  ],
  ladiesCare: {
    title: "Female Patient Care",
    subtitle: "Dedicated Female Staff Available",
    description:
      "At Gemstone Therapies, we prioritize the comfort and privacy of our female patients. We provide a dedicated female clinical staff for all therapy sessions, ensuring a professional and supportive environment for your healing journey.",
    image: "/assets/ladies-care.webp",
  },
  sections: [
    {
      id: "infrared",
      heading: "DEEP THERMAL & FAR INFRARED HEAT THERAPY",
      image: "/assets/infarad-image.webp",
      text: "The practice of using heat to promote healing, reduce pain, and improve overall well-being. Our therapy utilizes Far-infrared (FIR) rays, a type of electromagnetic radiation that penetrates deeply into the skin and muscle tissues without causing harm, delivering therapeutic warmth that promotes a range of health benefits.",
    },
    {
      id: "healing",
      heading: "HOW THERMAL THERAPY HEALS THE BODY",
      image: "/assets/thermal-image.webp",
      text: "Utilized for centuries, thermal therapy activates the body's natural healing mechanisms. By increasing blood flow to targeted areas, it delivers oxygen and essential nutrients to tissues, aiding in cellular repair and enhancing well-being across various cultures, both ancient and modern.",
    },
    {
      id: "technology",
      heading: "FAR INFRARED (FIR) HEAT TECHNOLOGY",
      image: "/assets/fir.webp",
      text: "Unlike surface-level heat, FIR technology warms tissues from within, stimulating circulation, cellular activity, and thermoregulation. This deep warmth helps relieve pain, reduce muscle tension, support detoxification, and maintain core body temperature balance.",
    },
  ],
  temperatureSections: [
    {
      id: "body-temp",
      heading: "THE IMPORTANCE OF HEAT THERAPY FOR CORE BODY TEMPERATURE",
      image: "/assets/core-body-temperature.webp",
      text: "Core Body Temperature is vital for health. A drop in core body temperature can lead to a significant decline in immune function and metabolic processes. Our therapy aims to maintain optimal warmth for your body's natural defense systems.",
    },
    {
      id: "immune-function",
      heading: "HOW CORE BODY TEMPERATURE AFFECTS IMMUNE FUNCTION",
      image: "/assets/heat-temperature.webp",
      text: "Raising core body temperature by just 1 degree can increase immune function by up to 5 times. Conversely, a 1-degree drop can lead to a 36% decline in immunity.",
    },
  ],
  mechanismSection: {
    heading: "HOW FAR-INFRARED (FIR) THERAPY WORKS",
    image: "/assets/infarad-image.webp",
    text: "FIR rays penetrate deep into the skin and muscle tissues, warming the body from the inside out and stimulating cellular activity and circulation.",
  },
  integratedTherapy: {
    heading: "INTEGRATING MODERN THERMAL THERAPY",
    image: "/assets/thermal-scan.jpg",
    text: "Combining advanced technology with traditional healing principles for a complete wellness solution.",
  },
  deviceFeatures: {
    heading: "CERAGEM INFRARED THERMAL THERAPY DEVICES",
    items: [
      { title: "Massage", image: "/assets/thermal-image.webp" },
      {
        title: "Acupressure",
        image: "/assets/thermal-image.webp",
      },
      { title: "Heat Therapy", image: "/assets/thermal-image.webp" },
      { title: "Stretching", image: "/assets/thermal-image.webp" },
    ],
  },
  numerousBenefits: {
    heading: "THE NUMEROUS BENEFITS OF CERAGEM INFRARED THERMAL THERAPY",
    image: "/assets/numerous-benefits.webp",
    text: "Experience holistic healing that addresses both physical pain and mental stress, promoting a balanced state of health.",
    categories: [
      {
        title: "Benefits for the Body",
        points: [
          "Promotes Physical Health: Supports overall well-being and bodily functions.",
          "Encourages Better Sleep: Facilitates deeper, more restorative sleep, leading to increased energy.",
          "Stimulates the Immune System: Boosts immune response, helping the body fight off illness.",
          "Detoxifies the Body: Offers a safe and effective way to remove toxins from the body.",
          "Improves Blood Circulation: Increases blood flow, promoting oxygen and nutrient delivery to tissues.",
          "Promotes Metabolism: Boosts metabolic activity and supports the body's natural maintenance of core body temperature.",
          "Digestive Health: Supports healthy digestion and can alleviate discomfort from various digestive issues.",
          "Improves Vitality: Increases overall energy levels and can help combat feelings of fatigue.",
          "Slows the Aging Process: Fosters cellular repair and regeneration, helping to slow the aging process.",
          "Pain Relief: Alleviates chronic back and joint pain through deep-penetrating thermal therapy.",
          "Muscle Relaxation: Reduces muscle tension and improves flexibility.",
          "Core Body Temperature Regulation: Helps the body naturally maintain a stable core temperature for better wellness.",
        ],
      },
      {
        title: "Benefits for Psychological and Emotional Health",
        points: [
          "Enhances Mental Well-being: Supports overall mental health and emotional stability.",
          "Promotes Relaxation: Alleviates fatigue and encourages feelings of calm.",
          "Reduces Stress and Tension: Effectively lowers stress levels, leading to a more balanced state.",
          "Improves Memory and Focus: Stimulates cognitive function, leading to better memory and mental clarity.",
          "Fosters Peace of Mind: Creates a sense of tranquility and emotional well-being.",
        ],
      },
      {
        title: "Benefits for Athletes",
        points: [
          "Enhances Athletic Performance: Improves overall performance through better recovery and flexibility.",
          "Relieves Muscle Discomfort: Soothes soreness and muscle fatigue after intense workouts.",
          "Improves Breathing: Boosts oxygen intake, through increased blood flow and circulation.",
          "Aids in Mineral Replenishment: Assists in the body's natural recovery and mineral replenishment after physical activity.",
        ],
      },
    ],
  },
  deviceProducts: [
    {
      title: "CERAGEM Master V4 — Thermal Massage Bed",
      description:
        "The CERAGEM Master V4 is a cutting-edge thermal massage bed that combines thermal therapy with spinal alignment massage. It's designed to simulate the effects of traditional spinal alignment therapies and uses FIR heat to enhance the benefits of traditional Oriental medicine response should help improve overall health.",
      image: "/assets/master-v4.webp",
    },
    {
      title: "CERAGEM Compact P390 — Portable Acupressure Thermal Massager",
      description:
        "The CERAGEM Compact P390 is a portable and easy-to-use thermal thermal massager designed for targeted pain relief and relaxation. Its compact design targets specific points on various parts of the body such as the neck, back, and joints, making it ideal for home use and for optimal comfort and targeted thermal treatment.",
      image: "/assets/compact-p390.webp",
    },
    {
      title:
        "CERAGEM Goodle Mat — Thermal Mat for Relaxation and Detoxification",
      description:
        "The CERAGEM Goodle Mat is a thermal mat that utilizes thermal therapy principles to provide relief from muscle tension and aid in detoxification. The mat uses Far Infrared heat and negative ions, which work together to promote relaxation and detoxification.",
      image: "/assets/goodle-mat.webp",
    },
  ],
  finalSummary: {
    title: "Final Thoughts",
    paragraphs: [
      "Far infrared therapy has been clinically shown to offer diverse health benefits across pain relief, cardiovascular support, and immune function, making it a valuable tool in modern wellness, including inflammation and aiding in cellular repair, supporting both relaxation and long-term vitality health. As part of a comprehensive approach to health, gemstone and FIR heat therapies are designed to naturally enhance your body's healing and wellness.",
    ],
  },
  doctor: {
    name: "Dr. Shahid Aqeel Rana",
    titles: [
      "Certified Stone Therapist",
      "Consultant HOMEO Physician",
      "HOD Stone Therapy Department",
    ],
    clinic: "GEMSTONE THERAPIES (Pain Care Clinic)",
    description:
      "Expert in Gemstone Heat Therapy and Homoeopathic Alternative Medicine (German method base). Providing non-invasive solutions for acute and chronic back pain under expert supervision.",
  },
  clinicalEvidence: {
    title: "FIR HEALTH BENEFITS & CLINICAL EVIDENCES",
    items: [
      {
        title: "Pain Relief and Muscle Relaxation",
        description:
          "FIR therapy has been shown to relieve pain, reduce muscle spasms, and improve flexibility. Its heat deeply penetrates muscle tissue, enhancing circulation and providing relief for sore or injured areas.",
        image: "/assets/pain-relief.webp",
        study:
          "Study: A study published in Clinical Rheumatology found that FIR therapy significantly reduced pain and stiffness in patients with rheumatoid arthritis and ankylosing spondylitis. Patients also reported a high level of comfort and relaxation during treatment, with no adverse effects observed.",
        ctaLabel: "Clinical study — pain relief",
      },
      {
        title: "Improved Cardiovascular Health",
        description:
          "FIR therapy can have positive effects on cardiovascular health by improving blood flow, lowering blood pressure, and supporting vascular function. It may be especially beneficial for individuals with chronic conditions like high blood pressure and congestive heart failure.",
        image: "/assets/cardiovascular.webp",
        study:
          "Study: A study in The Journal of the American College of Cardiology demonstrated that FIR therapy improved endothelial function (the health of blood vessel walls) in patients with coronary risk factors. Another study published in Circulation Journal showed that daily FIR therapy improved symptoms and increased exercise tolerance in patients with congestive heart failure.",
        ctaLabel: "Clinical study — circulation",
      },
      {
        title: "Detoxification",
        description:
          "FIR therapy promotes sweating, which helps remove toxins from the body. Sweating induced by FIR has been shown to help eliminate heavy metals, urea, and other potentially harmful substances stored in the body.",
        image: "/assets/detoxification.webp",
        study:
          "Study: Research published in The Journal of Environmental and Public Health reported that FIR therapy could support detoxification by enhancing the excretion of toxic heavy metals and chemicals through sweat, providing an effective method for reducing toxin load in the body.",
        ctaLabel: "Learn more",
      },
      {
        title: "Reduced Inflammation and Joint Pain",
        description:
          "By increasing circulation and reducing oxidative stress, FIR therapy may help reduce inflammation in joints and muscles, offering relief from pain associated with conditions like arthritis and other inflammatory disorders.",
        image: "/assets/inflammation.webp",
        study:
          "Study: A study published in Clinical Interventions in Aging observed that FIR therapy provided significant pain relief and reduced joint stiffness in elderly patients with degenerative arthritis and reduced levels of pro-inflammatory markers.",
        ctaLabel: "Clinical study — inflammation",
      },
      {
        title: "Enhanced Athletic Recovery",
        description:
          "FIR therapy is increasingly popular for athletic recovery, as it helps to reduce muscle soreness, speed up recovery times, and improve overall performance by promoting circulation and tissue healing.",
        image: "/assets/athletic-recovery.webp",
        study:
          "Study: In a study published in The Journal of Strength and Conditioning Research, athletes who used FIR therapy post-exercise reported reduced muscle soreness and faster recovery compared to those who didn't.",
        ctaLabel: "Clinical study — athletic recovery",
      },
      {
        title: "Support for Weight Loss and Metabolism",
        description:
          "FIR therapy supports weight loss by promoting sweating and increasing heart rate. The energy expenditure during a session is akin to light exercise, promoting caloric burn and stimulating metabolism.",
        image: "/assets/weight-loss.webp",
        study:
          "Study: A Binghamton University study found that participants regularly using FIR saunas experienced a greater loss in body fats; they observed that the higher the core body temperature reached, the larger the decrease in body fat.",
        ctaLabel: "Learn more",
      },
      {
        title: "Enhanced Nerve Function",
        description:
          "FIR therapy may positively influence nerve function and alleviate symptoms associated with diabetic peripheral neuropathy, offering a potential adjunctive treatment option for patients.",
        image: "/assets/nerve-function.webp",
        study:
          "Study: A clinical study published in the Journal of Diabetes Research (2015) found that patients who received FIR treatment for diabetic peripheral neuropathy showed significant improvements in pain levels and neuropathic symptoms.",
        ctaLabel: "Clinical study — nerve function",
      },
      {
        title: "Nerve Regeneration",
        description:
          "FIR radiation therapy may enhance nerve healing by reducing inflammation and promoting the structural integrity of nerves through increased myelin production. This highlights its potential for patients with nerve injuries or conditions such as sciatica.",
        image: "/assets/nerve-regeneration.webp",
        study:
          "Study: A study published in the Journal of Clinical Rehabilitation found that FIR therapy significantly reduced markers of inflammation and promoted the regeneration of nerve fibers, showing an increase in myelin sheath thickness and improved functional recovery.",
        ctaLabel: "Clinical study — nerve regeneration",
      },
      {
        title: "Enhances Cancer Care",
        description:
          "FIR therapy is explored as a holistic support option alongside conventional cancer treatments. It may help improve immune function by increasing white blood cell counts and activating natural killer (NK) cells, while alleviating side effects like fatigue and muscle pain.",
        image: "/assets/cancer-care.webp",
        study:
          "Study: According to 'Far Infrared Therapy: A Promising Approach for Breast Cancer Treatment', FIR uses gentle heat to penetrate skin, potentially providing relief from inflammation, enhancing relaxation, and promoting healing as a complementary approach.",
        ctaLabel: "Learn more",
      },
    ],
  },
  hypothermiaHeading: "Hypothermia is related to life",
  temperatureLevels: [
    {
      temp: "43.0 °C | 41.0 °C | 40.0 °C",
      effect:
        "Protein activation H.S.P / Bacteria/Virus/cancer are heat liable",
    },
    {
      temp: "37.0 °C | 36.5 °C",
      effect: "Body enzyme activation 3,000 types / Health",
    },
    {
      temp: "35.5 °C | 35.0 °C",
      effect:
        "Excretion disability / Allergic symptoms / Cancer cell activation",
    },
  ],
  immunityImpactPoints: [
    {
      title: "1. Immune System Activation",
      text: "Around 37.0°C, immune cells, such as white blood cells and antibodies, perform optimally, responding effectively to pathogens and supporting healing. Heat Shock Proteins (HSPs) at higher temperatures (40.0-43.0°C) help activate immune responses, helping protect against viral and bacterial infection.",
    },
    {
      title: "2. Impact of Lower Temp on Immunity",
      text: "Cooling below 37.0°C of temperature may increase immune deficiency, making the body more susceptible to bouts of illness, including colds and infections.",
    },
    {
      title: "3. Enzyme Activity and Immune Response",
      text: "Enzymes play a critical role in breaking down pathogens, producing antibodies, and eliminating toxins. They function best at about 37.0°C, supporting an efficient immune response.",
    },
    {
      title: "4. Hypothermia and Immune Suppression",
      text: "Hypothermia (below 35.0°C) is well-known for its effect on immune suppression, leaving the body vulnerable to illness through reduced defense mechanisms.",
    },
    {
      title: "5. Fever as a Defense Mechanism",
      text: "Fever Response: A mild fever (around 38.0-39.0°C) is a deliberate activity, enhancing the production of HSPs and acting as a trigger of the immune system to react to pathogens.",
    },
  ],
  firBenefitsList: [
    {
      title: "1. Deep Penetration",
      text: "Unlike conventional heating methods, FIR heat waves can penetrate up to 2-3 inches (5-8 cm) into body tissues, warming muscles, joints, and even bones. This deep penetration ensures warmth reaches deeper than the skin, reaching deep tissues to provide therapeutic benefits.",
    },
    {
      title: "2. Increased Circulation",
      text: "As FIR heat waves warm the body, it stimulates blood vessels to dilate, improving circulation. This increased blood flow delivers oxygen and nutrients more effectively while helping to remove toxins. This dilation of vessels helps maintain body temperature as warm blood is circulated stabilized throughout the system.",
    },
    {
      title: "3. Activation of Thermoregulation",
      text: "The heat absorbed in the body from FIR also stimulates the thermoregulation through the hypothalamus, the part of the brain that controls body temperature. By prompting the sensory regulatory mechanisms, FIR therapy can help the body maintain a stable core temperature.",
    },
    {
      title: "4. Enhanced Metabolic Activity",
      text: "FIR therapy can boost metabolic activity within cells, boosting the body's natural heat production. This cellular activity not only warms the body but also boosts overall energy levels and recovery processes, helping to maintain a stable core temperature and health clarity.",
    },
    {
      title: "5. Relaxation and De-stressing",
      text: "The gentle warmth from FIR therapy promotes relaxation, which can reduce stress-related tension and improve overall physiological harmony. By helping the body stay relaxed, it helps keep its balance intact, which can better support thermal regulation over time.",
    },
  ],
  urduServices: {
    conditionsTitle: "جدید مشینری اور جیڈ سٹون تھراپی کے ذریعے علاج",
    conditions: [
      "کمر درد کا علاج",
      "گردن کے درد کا علاج",
      "کندھوں کے درد کا علاج",
      "پاؤں کے درد کا علاج",
      "ہاتھوں کے درد کا علاج",
      "عرق النساء کا علاج",
      "جوڑوں کے درد کا علاج",
      "مہروں کا علاج",
      "گھٹنوں کے درد کا علاج",
      "روٹیٹر کف کا علاج",
      "سرجری کے بعد درد کا علاج",
    ],
  },
  faq: [
    {
      q: "What conditions can gemstone / stone therapy help with?",
      a: "We focus on non-invasive support for spine-related and musculoskeletal issues such as slip disc, disc bulge, back pain, sciatica, neck and shoulder pain, joint pain, sports soft-tissue injuries, and post-surgery discomfort — always under qualified supervision.",
    },
    {
      q: "Is the treatment surgical or drug-based?",
      a: "No. The approach is non-surgical and emphasizes external therapeutic modalities. Medication decisions are made only when clinically appropriate and discussed with your physician.",
    },
    {
      q: "Is therapy suitable for women?",
      a: "Yes. Female staff is available for ladies’ appointments where required. Please mention your preference when booking.",
    },
    {
      q: "What are your clinic timings and locations?",
      a: "Gosha e Shifa Hospital (Third Floor): 9 AM – 2 PM. Gemstone Therapies Clinic, Moon Market, Gulshan e Ravi: 6 PM – 9 PM. Call or WhatsApp 0321-4014284 to confirm before visiting.",
    },
    {
      q: "How do I book a consultation?",
      a: "Call or WhatsApp 0321-4014284. Your first consultation can be scheduled at the hospital or Moon Market location depending on availability.",
    },
  ],
};
