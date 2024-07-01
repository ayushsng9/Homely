const cities = [
  {
    capital: "Delhi",
    city: "Delhi",
    lat: "28.6100",
    lng: "77.2300",
    population: "32226000"
  },
  {
    capital: "Maharashtra",
    city: "Mumbai",
    lat: "19.0761",
    lng: "72.8775",
    population: "24973000"
  },
  {
    capital: "West Bengal",
    city: "Kolkata",
    lat: "22.5675",
    lng: "88.3700",
    population: "18502000"
  },
  {
    capital: "Karnataka",
    city: "Bangalore",
    lat: "12.9789",
    lng: "77.5917",
    population: "15386000"
  },
  {
    capital: "Tamil Nadu",
    city: "Chennai",
    lat: "13.0825",
    lng: "80.2750",
    population: "12395000"
  },
  {
    capital: "Telangana",
    city: "Hyderabad",
    lat: "17.3617",
    lng: "78.4747",
    population: "10494000"
  },
  {
    capital: "Maharashtra",
    city: "Pune",
    lat: "18.5203",
    lng: "73.8567",
    population: "8231000"
  },
  {
    capital: "Gujarat",
    city: "Ahmedabad",
    lat: "23.0225",
    lng: "72.5714",
    population: "8009000"
  },
  {
    capital: "Gujarat",
    city: "Sūrat",
    lat: "21.1702",
    lng: "72.8311",
    population: "6538000"
  },
  {
    capital: "Uttar Pradesh",
    city: "Lucknow",
    lat: "26.8500",
    lng: "80.9500",
    population: "3382000"
  },
  {
    capital: "Rajasthan",
    city: "Jaipur",
    lat: "26.9000",
    lng: "75.8000",
    population: "3073350"
  },
  {
    capital: "Uttar Pradesh",
    city: "Kanpur",
    lat: "26.4499",
    lng: "80.3319",
    population: "2701324"
  },
  {
    capital: "Uttar Pradesh",
    city: "Mirzapur",
    lat: "25.1460",
    lng: "82.5690",
    population: "2496970"
  },
  {
    capital: "Maharashtra",
    city: "Nagpur",
    lat: "21.1497",
    lng: "79.0806",
    population: "2405665"
  },
  {
    capital: "Uttar Pradesh",
    city: "Ghaziabad",
    lat: "28.6700",
    lng: "77.4200",
    population: "2375820"
  },
  {
    capital: "Bihar",
    city: "Supaul",
    lat: "26.1260",
    lng: "86.6050",
    population: "2229076"
  },
  {
    capital: "Gujarat",
    city: "Vadodara",
    lat: "22.3000",
    lng: "73.2000",
    population: "2065771"
  },
  {
    capital: "Gujarat",
    city: "Rajkot",
    lat: "22.3000",
    lng: "70.7833",
    population: "2043000"
  },
  {
    capital: "Andhra Pradesh",
    city: "Vishakhapatnam",
    lat: "17.7042",
    lng: "83.2978",
    population: "2035922"
  },
  {
    capital: "Madhya Pradesh",
    city: "Indore",
    lat: "22.7167",
    lng: "75.8472",
    population: "1994397"
  },
  {
    capital: "Maharashtra",
    city: "Thane",
    lat: "19.1972",
    lng: "72.9722",
    population: "1886941"
  },
  {
    capital: "Madhya Pradesh",
    city: "Bhopal",
    lat: "23.2599",
    lng: "77.4126",
    population: "1798218"
  },
  {
    capital: "Maharashtra",
    city: "Pimpri-Chinchwad",
    lat: "18.6186",
    lng: "73.8037",
    population: "1727692"
  },
  {
    capital: "Bihar",
    city: "Patna",
    lat: "25.5940",
    lng: "85.1376",
    population: "1684222"
  },
  {
    capital: "Chhattīsgarh",
    city: "Bilaspur",
    lat: "22.0900",
    lng: "82.1500",
    population: "1625502"
  },
  {
    capital: "Punjab",
    city: "Ludhiana",
    lat: "30.9100",
    lng: "75.8500",
    population: "1618879"
  },
  {
    capital: "Uttar Pradesh",
    city: "agra",
    lat: "27.1800",
    lng: "78.0200",
    population: "1585704"
  },
  {
    capital: "Tamil Nadu",
    city: "Madurai",
    lat: "9.9252",
    lng: "78.1198",
    population: "1561129"
  },
  {
    capital: "Jharkhand",
    city: "Jamshedpur",
    lat: "22.7925",
    lng: "86.1842",
    population: "1558000"
  },
  {
    capital: "Uttar Pradesh",
    city: "Prayagraj",
    lat: "25.4358",
    lng: "81.8464",
    population: "1536218"
  },
  {
    capital: "Maharashtra",
    city: "Nasik",
    lat: "19.9975",
    lng: "73.7898",
    population: "1486053"
  },
  {
    capital: "Haryana",
    city: "Farīdabad",
    lat: "28.4211",
    lng: "77.3078",
    population: "1414050"
  },
  {
    capital: "Uttar Pradesh",
    city: "Meerut",
    lat: "28.9800",
    lng: "77.7100",
    population: "1305429"
  },
  {
    capital: "Madhya Pradesh",
    city: "Jabalpur",
    lat: "23.1667",
    lng: "79.9333",
    population: "1267564"
  },
  {
    capital: "Maharashtra",
    city: "Kalyan",
    lat: "19.2502",
    lng: "73.1602",
    population: "1246381"
  },
  {
    capital: "Maharashtra",
    city: "Vasai-Virar",
    lat: "19.3607",
    lng: "72.7956",
    population: "1221233"
  },
  {
    capital: "Delhi",
    city: "Najafgarh",
    lat: "28.6092",
    lng: "76.9798",
    population: "1203180"
  },
  {
    capital: "Uttar Pradesh",
    city: "Varanasi",
    lat: "25.3189",
    lng: "83.0128",
    population: "1198491"
  },
  {
    capital: "Jammu and Kashmīr",
    city: "Srīnagar",
    lat: "34.0900",
    lng: "74.7900",
    population: "1180570"
  },
  {
    capital: "Maharashtra",
    city: "Aurangabad",
    lat: "19.8800",
    lng: "75.3200",
    population: "1175116"
  },
  {
    capital: "Jharkhand",
    city: "Dhanbad",
    lat: "23.7998",
    lng: "86.4305",
    population: "1162472"
  },
  {
    capital: "Punjab",
    city: "Amritsar",
    lat: "31.6400",
    lng: "74.8600",
    population: "1132383"
  },
  {
    capital: "Uttar Pradesh",
    city: "Alīgarh",
    lat: "27.8800",
    lng: "78.0800",
    population: "1131160"
  },
  {
    capital: "Assam",
    city: "Guwahati",
    lat: "26.1722",
    lng: "91.7458",
    population: "1116267"
  },
  {
    capital: "West Bengal",
    city: "Haora",
    lat: "22.5800",
    lng: "88.3294",
    population: "1077075"
  },
  {
    capital: "Jharkhand",
    city: "Ranchi",
    lat: "23.3600",
    lng: "85.3300",
    population: "1073440"
  },
  {
    capital: "Madhya Pradesh",
    city: "Gwalior",
    lat: "26.2124",
    lng: "78.1772",
    population: "1069276"
  },
  {
    capital: "Chandīgarh",
    city: "Chandīgarh",
    lat: "30.7500",
    lng: "76.7800",
    population: "1055450"
  },
  {
    capital: "Uttarakhand",
    city: "Haldwani",
    lat: "29.2200",
    lng: "79.5200",
    population: "1050000"
  },
  {
    capital: "Andhra Pradesh",
    city: "Vijayavada",
    lat: "16.5193",
    lng: "80.6305",
    population: "1048240"
  },
  {
    capital: "Rajasthan",
    city: "Jodhpur",
    lat: "26.2800",
    lng: "73.0200",
    population: "1033918"
  },
  {
    capital: "Chhattīsgarh",
    city: "Raipur",
    lat: "21.2444",
    lng: "81.6306",
    population: "1010087"
  },
  {
    capital: "Rajasthan",
    city: "Kota",
    lat: "25.1800",
    lng: "75.8300",
    population: "1001694"
  },
  {
    capital: "Maharashtra",
    city: "Bhayandar",
    lat: "19.2900",
    lng: "72.8500",
    population: "809378"
  },
  {
    capital: "Uttar Pradesh",
    city: "Loni",
    lat: "28.7500",
    lng: "77.2800",
    population: "516082"
  },
  {
    capital: "Tamil Nadu",
    city: "Ambattūr",
    lat: "13.1143",
    lng: "80.1548",
    population: "466205"
  },
  {
    capital: "West Bengal",
    city: "Salt Lake City",
    lat: "22.6100",
    lng: "88.4000",
    population: "403316"
  },
  {
    capital: "West Bengal",
    city: "Bhatpara",
    lat: "22.8700",
    lng: "88.4100",
    population: "386019"
  },
  {
    capital: "Telangana",
    city: "Kūkatpalli",
    lat: "17.4849",
    lng: "78.4138",
    population: "385821"
  },
  {
    capital: "Karnataka",
    city: "Dasarhalli",
    lat: "13.0465",
    lng: "77.5130",
    population: "349720"
  },
  {
    capital: "Bihar",
    city: "Muzaffarpur",
    lat: "26.1225",
    lng: "85.3906",
    population: "333200"
  },
  {
    capital: "Tamil Nadu",
    city: "Oulgaret",
    lat: "11.9570",
    lng: "79.7737",
    population: "300104"
  },
  {
    capital: "Delhi",
    city: "New Delhi",
    lat: "28.6139",
    lng: "77.2089",
    population: "249998"
  },
  {
    capital: "Tamil Nadu",
    city: "Tiruvottiyūr",
    lat: "13.1600",
    lng: "80.3000",
    population: "249446"
  },
  {
    capital: "Puducherry",
    city: "Puducherry",
    lat: "11.9167",
    lng: "79.8167",
    population: "244377"
  },
  {
    capital: "Karnataka",
    city: "Byatarayanpur",
    lat: "13.0659",
    lng: "77.5922",
    population: "239902"
  },
  {
    capital: "Tamil Nadu",
    city: "Pallavaram",
    lat: "12.9675",
    lng: "80.1491",
    population: "215417"
  },
  {
    capital: "Telangana",
    city: "Secunderabad",
    lat: "17.4399",
    lng: "78.4983",
    population: "213698"
  },
  {
    capital: "Himachal Pradesh",
    city: "Shimla",
    lat: "31.1033",
    lng: "77.1722",
    population: "206575"
  },
  {
    capital: "Odisha",
    city: "Puri",
    lat: "19.8000",
    lng: "85.8167",
    population: "201026"
  },
  {
    capital: "Uttar Pradesh",
    city: "Murtazabad",
    lat: "28.7111",
    lng: "77.2688",
    population: "189117"
  },
  {
    capital: "West Bengal",
    city: "Shrīrampur",
    lat: "22.7500",
    lng: "88.3400",
    population: "181842"
  },
  {
    capital: "West Bengal",
    city: "Chandannagar",
    lat: "22.8700",
    lng: "88.3800",
    population: "166867"
  },
  {
    capital: "Delhi",
    city: "Sultanpur Mazra",
    lat: "28.6981",
    lng: "77.0689",
    population: "163716"
  },
  {
    capital: "West Bengal",
    city: "Krishnanagar",
    lat: "23.4000",
    lng: "88.5000",
    population: "153062"
  },
  {
    capital: "West Bengal",
    city: "Barakpur",
    lat: "22.7600",
    lng: "88.3700",
    population: "152783"
  },
  {
    capital: "Delhi",
    city: "Bhalswa Jahangirpur",
    lat: "28.7354",
    lng: "77.1638",
    population: "151427"
  },
  {
    capital: "Delhi",
    city: "Nangloi Jat",
    lat: "28.6833",
    lng: "77.0667",
    population: "150371"
  },
  {
    capital: "Odisha",
    city: "Balasore",
    lat: "21.5033",
    lng: "86.9250",
    population: "144373"
  },
  {
    capital: "Delhi",
    city: "Dalūpura",
    lat: "28.6004",
    lng: "77.3194",
    population: "132628"
  },
  {
    capital: "Karnataka",
    city: "Yelahanka",
    lat: "13.1007",
    lng: "77.5963",
    population: "119891"
  },
  {
    capital: "West Bengal",
    city: "Titagarh",
    lat: "22.7400",
    lng: "88.3700",
    population: "116541"
  },
  {
    capital: "West Bengal",
    city: "Dam Dam",
    lat: "22.6200",
    lng: "88.4200",
    population: "114786"
  },
  {
    capital: "West Bengal",
    city: "Bansbaria",
    lat: "22.9700",
    lng: "88.4000",
    population: "103920"
  },
  {
    capital: "Tamil Nadu",
    city: "Madhavaram",
    lat: "13.1482",
    lng: "80.2314",
    population: "100442"
  },
  {
    capital: "Karnataka",
    city: "Abbigeri",
    lat: "13.0767",
    lng: "77.5250",
    population: "100000"
  },
  {
    capital: "West Bengal",
    city: "Baj Baj",
    lat: "22.4828",
    lng: "88.1818",
    population: "76837"
  },
  {
    capital: "Uttar Pradesh",
    city: "Garhi",
    lat: "28.6317",
    lng: "77.3186",
    population: "75544"
  },
  {
    capital: "Telangana",
    city: "Mīrpeta",
    lat: "17.3200",
    lng: "78.5200",
    population: "66982"
  },
  {
    capital: "Tamil Nadu",
    city: "Nerkunram",
    lat: "13.0619",
    lng: "80.2094",
    population: "52570"
  },
  {
    capital: "Odisha",
    city: "Kendraparha",
    lat: "20.5000",
    lng: "86.4200",
    population: "41404"
  },
  {
    capital: "Jharkhand",
    city: "Sijua",
    lat: "23.7762",
    lng: "86.3303",
    population: "39372"
  },
  {
    capital: "Tamil Nadu",
    city: "Manali",
    lat: "13.1667",
    lng: "80.2667",
    population: "37748"
  },
  {
    capital: "West Bengal",
    city: "Kankuria",
    lat: "24.6523",
    lng: "87.9604",
    population: "36925"
  },
  {
    capital: "West Bengal",
    city: "Chakapara",
    lat: "22.6300",
    lng: "88.3500",
    population: "35282"
  },
  {
    capital: "Tamil Nadu",
    city: "Pappakurichchi",
    lat: "10.8137",
    lng: "78.7481",
    population: "26889"
  },
  {
    capital: "Karnataka",
    city: "Herohalli",
    lat: "12.9911",
    lng: "77.4873",
    population: "23851"
  },
  {
    capital: "Tamil Nadu",
    city: "Madipakkam",
    lat: "12.9623",
    lng: "80.1986",
    population: "20523"
  },
  {
    capital: "Bihar",
    city: "Sabalpur",
    lat: "25.6053",
    lng: "85.1835",
    population: "18810"
  },
  {
    capital: "West Bengal",
    city: "Bauria",
    lat: "22.4521",
    lng: "88.1853",
    population: "16764"
  },
  {
    capital: "West Bengal",
    city: "Salua",
    lat: "22.6100",
    lng: "88.2700",
    population: "15171"
  },
  {
    capital: "Karnataka",
    city: "Chik Banavar",
    lat: "13.0846",
    lng: "77.5014",
    population: "14409"
  },
  {
    capital: "Karnataka",
    city: "Jalhalli",
    lat: "13.0333",
    lng: "77.5500",
    population: "13063"
  },
  {
    capital: "Tamil Nadu",
    city: "Chinnasekkadu",
    lat: "13.1609",
    lng: "80.2573",
    population: "12854"
  },
  {
    capital: "Bihar",
    city: "Jethuli",
    lat: "25.5378",
    lng: "85.2841",
    population: "11572"
  },
  {
    capital: "West Bengal",
    city: "Nagtala",
    lat: "22.4667",
    lng: "88.3833",
    population: "10419"
  },
  {
    capital: "Bihar",
    city: "Pakri",
    lat: "25.5876",
    lng: "85.1580",
    population: "9768"
  },
  {
    capital: "Karnataka",
    city: "Hunasamaranhalli",
    lat: "13.1435",
    lng: "77.6200",
    population: "9741"
  },
  {
    capital: "Karnataka",
    city: "Hesarghatta",
    lat: "13.1391",
    lng: "77.4783",
    population: "9485"
  },
  {
    capital: "Tamil Nadu",
    city: "Bommayapalaiyam",
    lat: "11.9922",
    lng: "79.8499",
    population: "8796"
  },
  {
    capital: "Tamil Nadu",
    city: "Gundūr",
    lat: "10.7339",
    lng: "78.7184",
    population: "8587"
  },
  {
    capital: "Bihar",
    city: "Punadih",
    lat: "25.5484",
    lng: "85.2649",
    population: "8273"
  },
  {
    capital: "Jharkhand",
    city: "Hariladih",
    lat: "23.7333",
    lng: "86.4000",
    population: "7917"
  },
  {
    capital: "Bihar",
    city: "Alawalpur",
    lat: "25.4958",
    lng: "85.2021",
    population: "7827"
  },
  {
    capital: "Karnataka",
    city: "Madnaikanhalli",
    lat: "13.0626",
    lng: "77.4642",
    population: "7805"
  },
  {
    capital: "Karnataka",
    city: "Bagalūr",
    lat: "13.1330",
    lng: "77.6660",
    population: "7519"
  },
  {
    capital: "Karnataka",
    city: "Kadiganahalli",
    lat: "13.1687",
    lng: "77.6283",
    population: "7225"
  },
  {
    capital: "Uttar Pradesh",
    city: "Khanpur Zabti",
    lat: "28.7103",
    lng: "77.2781",
    population: "6994"
  },
  {
    capital: "Bihar",
    city: "Mahuli",
    lat: "25.5430",
    lng: "85.2268",
    population: "6683"
  },
  {
    capital: "West Bengal",
    city: "Zeyadah Kot",
    lat: "22.4445",
    lng: "88.3345",
    population: "6457"
  },
  {
    capital: "Karnataka",
    city: "Arshakunti",
    lat: "13.0785",
    lng: "77.4225",
    population: "6262"
  },
  {
    capital: "Bihar",
    city: "Mirchi",
    lat: "25.5554",
    lng: "85.2139",
    population: "5710"
  },
  {
    capital: "Bihar",
    city: "Sonudih",
    lat: "25.1155",
    lng: "87.0214",
    population: "5658"
  },
  {
    capital: "Karnataka",
    city: "Bayandhalli",
    lat: "12.9779",
    lng: "77.5688",
    population: "5118"
  },
  {
    capital: "Karnataka",
    city: "Sondekoppa",
    lat: "13.0000",
    lng: "77.3667",
    population: "4866"
  },
  {
    capital: "Bihar",
    city: "Babura",
    lat: "25.0851",
    lng: "87.1092",
    population: "4755"
  },
  {
    capital: "Karnataka",
    city: "Madavar",
    lat: "13.0525",
    lng: "77.4732",
    population: "4678"
  },
  {
    capital: "Karnataka",
    city: "Kadabgeri",
    lat: "12.9965",
    lng: "77.4331",
    population: "4573"
  },
  {
    capital: "Tamil Nadu",
    city: "Nanmangalam",
    lat: "12.9381",
    lng: "80.1753",
    population: "4386"
  },
  {
    capital: "West Bengal",
    city: "Taliganja",
    lat: "22.5041",
    lng: "88.3598",
    population: "4278"
  },
  {
    capital: "Bihar",
    city: "Tarchha",
    lat: "25.1116",
    lng: "87.0964",
    population: "4198"
  },
  {
    capital: "West Bengal",
    city: "Belgharia",
    lat: "22.6581",
    lng: "88.3852",
    population: "4193"
  },
  {
    capital: "Karnataka",
    city: "Kammanhalli",
    lat: "13.0155",
    lng: "77.6381",
    population: "4144"
  },
  {
    capital: "Andhra Pradesh",
    city: "Ambapuram",
    lat: "16.5990",
    lng: "80.8938",
    population: "4110"
  },
  {
    capital: "Karnataka",
    city: "Sonnappanhalli",
    lat: "13.1557",
    lng: "77.6179",
    population: "3996"
  },
  {
    capital: "West Bengal",
    city: "Kedihati",
    lat: "22.6508",
    lng: "88.4608",
    population: "3910"
  },
  {
    capital: "Karnataka",
    city: "Doddajīvanhalli",
    lat: "13.0086",
    lng: "77.6143",
    population: "3792"
  },
  {
    capital: "Bihar",
    city: "Simli Murarpur",
    lat: "25.5792",
    lng: "85.2401",
    population: "3739"
  },
  {
    capital: "Bihar",
    city: "Sonawan",
    lat: "25.5445",
    lng: "85.2387",
    population: "3682"
  },
  {
    capital: "West Bengal",
    city: "Devanandapur",
    lat: "22.9326",
    lng: "88.3729",
    population: "3449"
  },
  {
    capital: "West Bengal",
    city: "Tribeni",
    lat: "22.9867",
    lng: "88.3987",
    population: "3305"
  },
  {
    capital: "Karnataka",
    city: "Huttanhalli",
    lat: "13.1651",
    lng: "77.6512",
    population: "3240"
  },
  {
    capital: "Bihar",
    city: "Nathupur",
    lat: "25.5163",
    lng: "85.2544",
    population: "3129"
  },
  {
    capital: "Bihar",
    city: "Bali",
    lat: "25.4810",
    lng: "85.2227",
    population: "3128"
  },
  {
    capital: "Karnataka",
    city: "Vajarhalli",
    lat: "13.1022",
    lng: "77.4111",
    population: "3009"
  },
  {
    capital: "Telangana",
    city: "Alija Kotla",
    lat: "17.2333",
    lng: "78.5500",
    population: "3000"
  },
  {
    capital: "Bihar",
    city: "Saino",
    lat: "25.1134",
    lng: "87.0108",
    population: "2987"
  },
  {
    capital: "Bihar",
    city: "Shekhpura",
    lat: "25.5725",
    lng: "85.1428",
    population: "2950"
  },
  {
    capital: "Karnataka",
    city: "Cachohalli",
    lat: "13.0010",
    lng: "77.4717",
    population: "2946"
  },
  {
    capital: "Maharashtra",
    city: "Andheri",
    lat: "19.2104",
    lng: "73.0464",
    population: "2937"
  },
  {
    capital: "Bihar",
    city: "Narayanpur Kola",
    lat: "25.1293",
    lng: "87.0076",
    population: "2919"
  },
  {
    capital: "Bihar",
    city: "Gyan Chak",
    lat: "25.5496",
    lng: "85.2423",
    population: "2855"
  },
  {
    capital: "Karnataka",
    city: "Kasgatpur",
    lat: "13.1101",
    lng: "77.5045",
    population: "2852"
  },
  {
    capital: "Karnataka",
    city: "Kitanelli",
    lat: "13.0095",
    lng: "77.4191",
    population: "2827"
  },
  {
    capital: "Bihar",
    city: "Harchandi",
    lat: "25.1000",
    lng: "87.0442",
    population: "2827"
  },
  {
    capital: "West Bengal",
    city: "Santoshpur",
    lat: "22.4650",
    lng: "88.2193",
    population: "2808"
  },
  {
    capital: "Karnataka",
    city: "Bendravadi",
    lat: "12.3636",
    lng: "76.9137",
    population: "2684"
  },
  {
    capital: "Karnataka",
    city: "Kodagihalli",
    lat: "12.9771",
    lng: "77.4651",
    population: "2585"
  },
  {
    capital: "Bihar",
    city: "Harna Buzurg",
    lat: "25.0981",
    lng: "87.0148",
    population: "2579"
  },
  {
    capital: "Karnataka",
    city: "Mailanhalli",
    lat: "13.1863",
    lng: "77.6963",
    population: "2543"
  },
  {
    capital: "Bihar",
    city: "Sultanpur",
    lat: "25.5248",
    lng: "85.2507",
    population: "2473"
  },
  {
    capital: "Karnataka",
    city: "Adakimaranhalli",
    lat: "13.0633",
    lng: "77.4417",
    population: "2453"
  }
];

module.exports = cities;