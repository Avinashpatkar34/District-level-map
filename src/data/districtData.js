// District data for Maharashtra - dummy data for now, will be replaced with API later
// Each district has intern statistics and a position for the blinking dot on the SVG map

const districtData = {
  mumbai_city: {
    name: "Mumbai City",
    totalIntern: 8920,
    hsc: 1850,
    itiDiploma: 1230,
    graduatePostGraduate: 5840,
    totalEmployer: 680,
    governmentEmployer: 120,
    privateEmployer: 560,
    dotPosition: { x: 145, y: 520 }
  },
  mumbai_suburban: {
    name: "Mumbai Suburban",
    totalIntern: 7650,
    hsc: 1520,
    itiDiploma: 1080,
    graduatePostGraduate: 5050,
    totalEmployer: 590,
    governmentEmployer: 98,
    privateEmployer: 492,
    dotPosition: { x: 148, y: 500 }
  },
  thane: {
    name: "Thane",
    totalIntern: 5430,
    hsc: 1120,
    itiDiploma: 890,
    graduatePostGraduate: 3420,
    totalEmployer: 410,
    governmentEmployer: 85,
    privateEmployer: 325,
    dotPosition: { x: 175, y: 470 }
  },
  palghar: {
    name: "Palghar",
    totalIntern: 2180,
    hsc: 520,
    itiDiploma: 380,
    graduatePostGraduate: 1280,
    totalEmployer: 165,
    governmentEmployer: 42,
    privateEmployer: 123,
    dotPosition: { x: 140, y: 430 }
  },
  raigad: {
    name: "Raigad",
    totalIntern: 3210,
    hsc: 680,
    itiDiploma: 520,
    graduatePostGraduate: 2010,
    totalEmployer: 240,
    governmentEmployer: 55,
    privateEmployer: 185,
    dotPosition: { x: 170, y: 545 }
  },
  ratnagiri: {
    name: "Ratnagiri",
    totalIntern: 1890,
    hsc: 420,
    itiDiploma: 310,
    graduatePostGraduate: 1160,
    totalEmployer: 145,
    governmentEmployer: 38,
    privateEmployer: 107,
    dotPosition: { x: 165, y: 610 }
  },
  sindhudurg: {
    name: "Sindhudurg",
    totalIntern: 1240,
    hsc: 280,
    itiDiploma: 190,
    graduatePostGraduate: 770,
    totalEmployer: 98,
    governmentEmployer: 25,
    privateEmployer: 73,
    dotPosition: { x: 175, y: 680 }
  },
  nashik: {
    name: "Nashik",
    totalIntern: 4560,
    hsc: 950,
    itiDiploma: 720,
    graduatePostGraduate: 2890,
    totalEmployer: 345,
    governmentEmployer: 72,
    privateEmployer: 273,
    dotPosition: { x: 205, y: 390 }
  },
  dhule: {
    name: "Dhule",
    totalIntern: 3589,
    hsc: 737,
    itiDiploma: 471,
    graduatePostGraduate: 2381,
    totalEmployer: 271,
    governmentEmployer: 78,
    privateEmployer: 193,
    dotPosition: { x: 210, y: 320 }
  },
  nandurbar: {
    name: "Nandurbar",
    totalIntern: 1560,
    hsc: 340,
    itiDiploma: 250,
    graduatePostGraduate: 970,
    totalEmployer: 120,
    governmentEmployer: 32,
    privateEmployer: 88,
    dotPosition: { x: 175, y: 290 }
  },
  jalgaon: {
    name: "Jalgaon",
    totalIntern: 3780,
    hsc: 790,
    itiDiploma: 610,
    graduatePostGraduate: 2380,
    totalEmployer: 285,
    governmentEmployer: 62,
    privateEmployer: 223,
    dotPosition: { x: 265, y: 310 }
  },
  ahmednagar: {
    name: "Ahmednagar",
    totalIntern: 4120,
    hsc: 860,
    itiDiploma: 670,
    graduatePostGraduate: 2590,
    totalEmployer: 310,
    governmentEmployer: 68,
    privateEmployer: 242,
    dotPosition: { x: 265, y: 440 }
  },
  pune: {
    name: "Pune",
    totalIntern: 9870,
    hsc: 2050,
    itiDiploma: 1380,
    graduatePostGraduate: 6440,
    totalEmployer: 750,
    governmentEmployer: 135,
    privateEmployer: 615,
    dotPosition: { x: 220, y: 510 }
  },
  solapur: {
    name: "Solapur",
    totalIntern: 3450,
    hsc: 720,
    itiDiploma: 560,
    graduatePostGraduate: 2170,
    totalEmployer: 260,
    governmentEmployer: 58,
    privateEmployer: 202,
    dotPosition: { x: 310, y: 540 }
  },
  satara: {
    name: "Satara",
    totalIntern: 2980,
    hsc: 620,
    itiDiploma: 480,
    graduatePostGraduate: 1880,
    totalEmployer: 225,
    governmentEmployer: 50,
    privateEmployer: 175,
    dotPosition: { x: 230, y: 580 }
  },
  sangli: {
    name: "Sangli",
    totalIntern: 2650,
    hsc: 550,
    itiDiploma: 430,
    graduatePostGraduate: 1670,
    totalEmployer: 200,
    governmentEmployer: 45,
    privateEmployer: 155,
    dotPosition: { x: 260, y: 630 }
  },
  kolhapur: {
    name: "Kolhapur",
    totalIntern: 3120,
    hsc: 650,
    itiDiploma: 510,
    graduatePostGraduate: 1960,
    totalEmployer: 235,
    governmentEmployer: 52,
    privateEmployer: 183,
    dotPosition: { x: 225, y: 665 }
  },
  aurangabad: {
    name: "Chhatrapati Sambhajinagar",
    totalIntern: 4890,
    hsc: 1020,
    itiDiploma: 790,
    graduatePostGraduate: 3080,
    totalEmployer: 370,
    governmentEmployer: 78,
    privateEmployer: 292,
    dotPosition: { x: 330, y: 410 }
  },
  jalna: {
    name: "Jalna",
    totalIntern: 2340,
    hsc: 490,
    itiDiploma: 380,
    graduatePostGraduate: 1470,
    totalEmployer: 175,
    governmentEmployer: 40,
    privateEmployer: 135,
    dotPosition: { x: 375, y: 410 }
  },
  parbhani: {
    name: "Parbhani",
    totalIntern: 2010,
    hsc: 420,
    itiDiploma: 330,
    graduatePostGraduate: 1260,
    totalEmployer: 155,
    governmentEmployer: 35,
    privateEmployer: 120,
    dotPosition: { x: 420, y: 410 }
  },
  hingoli: {
    name: "Hingoli",
    totalIntern: 1450,
    hsc: 310,
    itiDiploma: 230,
    graduatePostGraduate: 910,
    totalEmployer: 110,
    governmentEmployer: 28,
    privateEmployer: 82,
    dotPosition: { x: 445, y: 380 }
  },
  nanded: {
    name: "Nanded",
    totalIntern: 2780,
    hsc: 580,
    itiDiploma: 450,
    graduatePostGraduate: 1750,
    totalEmployer: 210,
    governmentEmployer: 48,
    privateEmployer: 162,
    dotPosition: { x: 480, y: 420 }
  },
  beed: {
    name: "Beed",
    totalIntern: 2150,
    hsc: 450,
    itiDiploma: 350,
    graduatePostGraduate: 1350,
    totalEmployer: 165,
    governmentEmployer: 38,
    privateEmployer: 127,
    dotPosition: { x: 370, y: 470 }
  },
  latur: {
    name: "Latur",
    totalIntern: 2560,
    hsc: 530,
    itiDiploma: 420,
    graduatePostGraduate: 1610,
    totalEmployer: 195,
    governmentEmployer: 43,
    privateEmployer: 152,
    dotPosition: { x: 420, y: 510 }
  },
  osmanabad: {
    name: "Dharashiv",
    totalIntern: 1980,
    hsc: 410,
    itiDiploma: 320,
    graduatePostGraduate: 1250,
    totalEmployer: 150,
    governmentEmployer: 34,
    privateEmployer: 116,
    dotPosition: { x: 370, y: 540 }
  },
  buldhana: {
    name: "Buldhana",
    totalIntern: 2430,
    hsc: 510,
    itiDiploma: 390,
    graduatePostGraduate: 1530,
    totalEmployer: 185,
    governmentEmployer: 42,
    privateEmployer: 143,
    dotPosition: { x: 320, y: 340 }
  },
  akola: {
    name: "Akola",
    totalIntern: 2670,
    hsc: 560,
    itiDiploma: 430,
    graduatePostGraduate: 1680,
    totalEmployer: 200,
    governmentEmployer: 45,
    privateEmployer: 155,
    dotPosition: { x: 370, y: 330 }
  },
  washim: {
    name: "Washim",
    totalIntern: 1680,
    hsc: 350,
    itiDiploma: 270,
    graduatePostGraduate: 1060,
    totalEmployer: 130,
    governmentEmployer: 30,
    privateEmployer: 100,
    dotPosition: { x: 405, y: 350 }
  },
  amravati: {
    name: "Amravati",
    totalIntern: 3240,
    hsc: 680,
    itiDiploma: 520,
    graduatePostGraduate: 2040,
    totalEmployer: 245,
    governmentEmployer: 55,
    privateEmployer: 190,
    dotPosition: { x: 425, y: 310 }
  },
  yavatmal: {
    name: "Yavatmal",
    totalIntern: 2350,
    hsc: 490,
    itiDiploma: 380,
    graduatePostGraduate: 1480,
    totalEmployer: 180,
    governmentEmployer: 40,
    privateEmployer: 140,
    dotPosition: { x: 460, y: 350 }
  },
  wardha: {
    name: "Wardha",
    totalIntern: 1920,
    hsc: 400,
    itiDiploma: 310,
    graduatePostGraduate: 1210,
    totalEmployer: 148,
    governmentEmployer: 33,
    privateEmployer: 115,
    dotPosition: { x: 490, y: 320 }
  },
  nagpur: {
    name: "Nagpur",
    totalIntern: 6540,
    hsc: 1360,
    itiDiploma: 1050,
    graduatePostGraduate: 4130,
    totalEmployer: 495,
    governmentEmployer: 105,
    privateEmployer: 390,
    dotPosition: { x: 530, y: 300 }
  },
  bhandara: {
    name: "Bhandara",
    totalIntern: 1750,
    hsc: 370,
    itiDiploma: 280,
    graduatePostGraduate: 1100,
    totalEmployer: 135,
    governmentEmployer: 30,
    privateEmployer: 105,
    dotPosition: { x: 560, y: 280 }
  },
  gondia: {
    name: "Gondia",
    totalIntern: 1580,
    hsc: 330,
    itiDiploma: 260,
    graduatePostGraduate: 990,
    totalEmployer: 120,
    governmentEmployer: 28,
    privateEmployer: 92,
    dotPosition: { x: 590, y: 265 }
  },
  chandrapur: {
    name: "Chandrapur",
    totalIntern: 2450,
    hsc: 510,
    itiDiploma: 400,
    graduatePostGraduate: 1540,
    totalEmployer: 185,
    governmentEmployer: 42,
    privateEmployer: 143,
    dotPosition: { x: 550, y: 350 }
  },
  gadchiroli: {
    name: "Gadchiroli",
    totalIntern: 1120,
    hsc: 240,
    itiDiploma: 180,
    graduatePostGraduate: 700,
    totalEmployer: 88,
    governmentEmployer: 22,
    privateEmployer: 66,
    dotPosition: { x: 600, y: 340 }
  }
};

export default districtData;
