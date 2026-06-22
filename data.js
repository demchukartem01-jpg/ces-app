// CES Tests — GMDSS + BCM + CSM
// For personal use only

const TEST_SECTIONS = [
  {
    "title": "GMDSS 1-100",
    "questions": [
      {
        "question": "In a distress-situation a MF/HF-DSC transmission is used in the 8MHz frequency. In this case always:",
        "options": [
          "Turn on the right frequency",
          "Put in the MMSI number of the coastguard on the DSC",
          "Indicate on what frequency communication will be continued",
          "Ask the RCC for the frequency"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The person charged with radio distress traffic must be referred to in:",
        "options": [
          "The manual",
          "MERSAR book",
          "Safety certificate",
          "The ship's radio log book"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "What are the NAVTEX messages categories which cannot be suppressed ?",
        "options": [
          "A, B, D",
          "Satnav messages",
          "A, B, C",
          "Weather forecasts"
        ],
        "correctIndex": 0,
        "image": "images/image20.jpg"
      },
      {
        "question": "Which word will precede a safety message ?",
        "options": [
          "SAFETY",
          "SECURITE",
          "PAN PAN",
          "URGENT"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Satellite communication is usually provided by :",
        "options": [
          "Space wave",
          "Ground wave",
          "none of the mentioned",
          "Sky wave"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Messages sent via INMARSAT C are charged:",
        "options": [
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the basis of a three minute minimum charge with one minute incremental steps",
          "On the number of kilobits of information transmitted per block of 256 bits",
          "On the number of kilobits of information transmitted per block of 1024 bits"
        ],
        "correctIndex": 2,
        "image": "images/image12.jpg"
      },
      {
        "question": "You want to send a DSC-call in connection with a shore telephone-call. You must choose:",
        "options": [
          "Safety",
          "Urgency",
          "Distress",
          "Routine"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A distress alert has accidentally been sent with the Inmarsat-C installation. One should now:",
        "options": [
          "Turn off the transmitter",
          "Call the manager",
          "Make contact with an RCC",
          "Wait until an RCC reports"
        ],
        "correctIndex": 2,
        "image": "images/image12.jpg"
      },
      {
        "question": "VHF channel 15 is:",
        "options": [
          "Inter-ship channel",
          "Distress channel",
          "Public traffic channel",
          "Contra-ship channel"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "How many maintenance methods must be provided by ships sailing in area A1 and A2",
        "options": [
          "4",
          "1",
          "2",
          "3"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The battery of a SART:",
        "options": [
          "Charged condition must be checked weekly",
          "Must be replaced before the expiry date is exceeded",
          "Replaced monthly",
          "Must be re-charged weekly"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "The MID is:",
        "options": [
          "A number which indicates the nationality of the ship",
          "A ship accounting code",
          "An INMARSAT mobile number",
          "A number which indicates in which area the ship can operate"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "On a MF/HF-transmitter-receiver there is a volume control. Another name for this is:",
        "options": [
          "HF-gain",
          "LF-gain",
          "RC-gain",
          "Sensitivity"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What does the abbreviation VHF mean?",
        "options": [
          "Variable Hertz Frequency",
          "Visual High Frequency",
          "Very High Frequency",
          "Variable High Frequency"
        ],
        "correctIndex": 2,
        "image": "images/image23.jpg"
      },
      {
        "question": "When a character in the NAVTEX message sent is not received in the proper way:",
        "options": [
          "Any other character will be printed",
          "Nothing or a special character will be printed",
          "A closely resembling character will be printed",
          "the message will not be printed at all until, with repeated transmission, it can be automatically compared and corrected"
        ],
        "correctIndex": 1,
        "image": "images/image20.jpg"
      },
      {
        "question": "A satellite receives the transmissions of the 406 MHz Cospas-Sarsat EPIRB. The transmissions of the EPIRB will be:",
        "options": [
          "Passed when the satellite in passing the equator",
          "Always passed on to a LUT",
          "Exclusively passed on to a LUT only between 70 degrees N and 70 degrees S",
          "Exclusively passed on to a LUT if the satellite sees both the EPIRB and the LUT"
        ],
        "correctIndex": 1,
        "image": "images/image22.jpg"
      },
      {
        "question": "What is the first function of GMDSS?",
        "options": [
          "Transmission of ship to shore alerts",
          "Transmission and reception of on scene communication",
          "Transmission and reception of signals for locating",
          "Reception of shore to ship distress alerts"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "A distress-call, onboard via RCC, may only be given Receipt if:",
        "options": [
          "The captain orders",
          "OSC from the RCC concerned invites the vessels",
          "The manager orders",
          "The O.O.W deems it necessary"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "What statement is correct with frequency modulation?",
        "options": [
          "The amplitude remain constant",
          "The amplitude fluctuating an LF-rhythm",
          "Frequency modulation is often applied in the maritime VHF-range (band)",
          "The frequency is constant"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "The word SATCOM is spelled conform the international phonetic alphabet:",
        "options": [
          "Sierra, Able, Tango, Cornelies, Oslo, Man",
          "Sierra, Alfa, Tango, Charlie, Oscar, Mike",
          "Sierra, Able, Tripoli, Charlie, Oscar, Mike",
          "Sierra, Anna, Tango, Cornelies, Oslo, Mike"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "MUF stands for:",
        "options": [
          "Highest possible frequency that will be reflected by the ionosphere",
          "Most effective frequency , to make a connection with an HF-transmitter",
          "Most utilised frequency",
          "Highest possible frequency that can be made with an HF-transmitter on board"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "When may a call for radio medical advice be preceded by the urgency-signal:",
        "options": [
          "Never",
          "In urgent cases",
          "Always",
          "When you have a doctor on board"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Dish aerials are used with:",
        "options": [
          "Inmarsat - B and –M",
          "Inmarsat –A and –C",
          "None of the mentioned",
          "Inmarsat –C and –M"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "You receive a distress alert on HF Radio. What should you do?",
        "options": [
          "Relay the message immediately on 2182 kHz.",
          "No response is necessary providing the vessel is more than 24 hours away.",
          "Wait three minutes and if no acknowledgement is heard from a coast station you should relay the alert.",
          "Acknowledge receipt."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following is a INMARSAT C Mobile Earth Station Identification Number (IMN)?",
        "options": [
          "122700",
          "227530000",
          "422753810",
          "322753810"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The typical \"daylight-frequencies\" for long distance transmission are located in the:",
        "options": [
          "VHF-band",
          "16 or 22 MHz-band",
          "8 or 12 MHz-band",
          "4 or 6 MHz-band"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which equipment will detect a signal from a SART transponder?",
        "options": [
          "S band radar",
          "X band radar",
          "DSC receiver",
          "Radio Direction Finder"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "The word RADIO is spelled conform the international phonetic alphabet:",
        "options": [
          "Radio, Alfa, Delta, India, Oscar",
          "Romeo, Atlanta, Delta, India, October",
          "Romeo, Alpha, Delta, India, October",
          "Romeo, Alfa, Delta, India, Oscar"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The names and addresses of accounting authorities can be found in :",
        "options": [
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Coast Stations",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Ship Stations"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of INMARSAT Epirbs",
          "The use of VHF DSC",
          "The use of MF DSC",
          "The use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 2,
        "image": "images/image24.jpg"
      },
      {
        "question": "According to the rules of GMDSS vessels one must be able to receive MSI with the aid of:",
        "options": [
          "Emergency portable radio",
          "EPIRB and SART",
          "NAVTEX and EGC-receiver",
          "HF and VHF DSC-encoder"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following is a ship MMSI ?",
        "options": [
          "1227200",
          "2275300",
          "227530000",
          "22753000"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the acronym FR 01 ?",
        "options": [
          "MMSI",
          "Call sign",
          "MSI",
          "AAIC"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "\"Fading\" can partially be compensated by:",
        "options": [
          "Clarifier",
          "Pre-selector tuning",
          "Automatic gain control",
          "Dimmer"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "By FleetNET communication is understood:",
        "options": [
          "An urgent message for all ships in a particular area",
          "An EGC-message destined for ships with the same group call number",
          "A HF-NBDP -message destined for ships in a certain geographical area",
          "A MSI-message destined for ships in specific geographical area"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The transmitting range of an HF transmitter is mainly determined by:",
        "options": [
          "The time of the day in relation to propagation",
          "The length of the transmitting antenna",
          "The transmitting power",
          "The height of the transmitting antenna"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The recommended connection between antenna and VHF is:",
        "options": [
          "Electric cable",
          "Coaxial cable",
          "Band cable",
          "Three vein cable"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "By the degree of selectivity of a receiver is meant:",
        "options": [
          "Abilit to receive all signals",
          "Ability to distinguish weak stations from adjacent stronger stations",
          "Ability to prevent variations in the strength of radio frequency signal received",
          "Ability to make weak stations audible"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The different layers in the ionosphere, important for radio propagation, are effected by:",
        "options": [
          "The weather-conditions",
          "The distance between the transmitter and the receiver",
          "Direction of the antenna",
          "The Sun"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "The receipt of a distress alert is to be pronounced as followed:",
        "options": [
          "Mayday (1x), call-sign of ship in distress (3x) / this is / own call-sign (3x) / received mayday",
          "Mayday (1x) / this is / own call-sign (3x) received mayday",
          "Mayday (1x) / distress aleert / own ship call sign",
          "Mayday (3x) / this is / own call-sign (1x) / received mayday / call-sign of ship in distress (1x)"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "Which of the following watches must a vessel maintain when sailing in Sea Area A1?",
        "options": [
          "A continuous DSC watch on Channel 70",
          "A continuous DSC watch on 8414.5 Khz plus one other HF DSC frequency",
          "A continuous DSC watch on 2187.5 kHz.",
          "A continuous DSC watch on Channel 16."
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "During duplex mode you are able to:",
        "options": [
          "Interrupt after releasing the PTT-switch",
          "Interrupt",
          "Not to interrupt",
          "Talk to two stations simultaneously"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Public correspondance VHF communications should normally be operated :",
        "options": [
          "In J3E mode – on simplex basis",
          "In G3E mode – on simplex basis",
          "In J3E mode – on duplex basis",
          "In G3E mode – on duplex basis"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "How often must inspection of proper working of the EPIRB 's and SART 's take place on board? Once per:",
        "options": [
          "14 days",
          "Month",
          "Week",
          "Every day"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "To get priority with radio-communication, one must notify the coast-station that the call is:",
        "options": [
          "A collect call",
          "A personal call",
          "A priority calll",
          "An urgent call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "A frequency of 150 MHz has a wavelength of :",
        "options": [
          "200m",
          "20m",
          "2000m",
          "2m"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "When a message is sent by the Inmarsat—C installation to an Internet e-mail address, the land charge is:",
        "options": [
          "Dependent on the type of terminal used",
          "Dependent on the destination",
          "Independent of the destination",
          "Dependent on the 'chargeband'"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of the following is a Accounting Authority Identification Code?",
        "options": [
          "F1B",
          "227990850",
          "2187.5",
          "FR01"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The compulsory testing of a prescribed EPIRB is to be done:",
        "options": [
          "Once a week",
          "Once a month",
          "Once a year",
          "Once in 4 years"
        ],
        "correctIndex": 1,
        "image": "images/image15.jpg"
      },
      {
        "question": "What is the proper term used to describe a coast radio station that primarily handles chargeable ship-to-shore message traffic of a routine nature?",
        "options": [
          "Network Coordination Station.",
          "Mobile Radio Service.",
          "Public Correspondence Station.",
          "Accounting authority."
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "The Satellite orbit in the Cospas-Sarsat system is:",
        "options": [
          "Polar",
          "helio-synchronous",
          "Semi-geostationary",
          "Geostationary"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain medical advice ?",
        "options": [
          "42",
          "38",
          "26",
          "32"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A DSC-message of the \"safety\" category is received from another vessel on VHF channel 70. Conforming to the GMDSS rules, for the continuation of the safety traffic, you must change to VHF-channel:",
        "options": [
          "16",
          "70",
          "07",
          "85"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "To prevent overload of the MF/HF transmitter;",
        "options": [
          "Clean the dust filter of the fan regularly",
          "Switch over to low power intermitently",
          "Do not leave the transmitter on stand-by for too long, if not required",
          "Do not transmit too long at full power"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A SART is used by a vessel in distress. This SART is seen on the screen of a:",
        "options": [
          "Both 3 Cm and 10 Cm radar",
          "10 Cm radar",
          "Special radar",
          "3 Cm radar"
        ],
        "correctIndex": 3,
        "image": "images/image5.jpg"
      },
      {
        "question": "A Cospas-Sarsat EPIRB can be used in:",
        "options": [
          "Only in the sea-areas A1, A2 and A3",
          "Only in sea-area A4",
          "All sea-areas (A1 to A4)",
          "Only in the sea-areas A2 and A3"
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "A vessel is equipped for all sea areas. In the middle of the Indian Ocean the EGC-receiver appears out of order. Is it still possible to receive MSI-messages?",
        "options": [
          "Yes, with the MF/HF-DSC",
          "NO",
          "Yes with VHF DSC",
          "Yes, with the MF/HF-radio telex"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "You have an important navigational or meteorological warning to transmit. What call should proceed this message when made on the radio telephone?",
        "options": [
          "Pan Pan  (3 times)",
          "Mayday Mayday  (3 times)",
          "Victor Victor (3 times)",
          "Securite Securite (3 times)"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "Vessels communicating directly with each other by VHF, work:",
        "options": [
          "Always simplex",
          "Always duplex",
          "Always semi-duplex",
          "Dependent on the set on board, either simplex or duplex"
        ],
        "correctIndex": 0,
        "image": "images/image30.jpg"
      },
      {
        "question": "The time indication 121310z means in maritime radio communication:",
        "options": [
          "12th month, 13th day, 1000 hours UTC",
          "12th month, 13th day, 1000 hour Local time",
          "12th day, 1310 hours UTC",
          "12th day, 1310 hours local time"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "In Which publication will you find the working frequencies of coast stations?",
        "options": [
          "The ITU List of coast stations",
          "The ITU List of Ship Stations",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Call signs and Numerical Identities of Stations used by the maritime mobile and maritime mobile-satellite services"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of the following regions lies outside Sea Areas A1, A2, and A3?",
        "options": [
          "Sea Areas only apply to INMARSAT footprint areas",
          "There are no additional Sea Areas.",
          "Sea Area A3-I (INMARSAT coverage) and Sea Area A3-S (HF SITORcoverage).",
          "Sea Area A4"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "MF communication is usually provided by :",
        "options": [
          "None of the mentioned",
          "Sky wave",
          "Space wave",
          "Ground wave"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "On the radio telephony 2182 kHz frequency when are the \"silence periods\"?",
        "options": [
          "For 6 minutes starting at quarter past and 45 minutes past.",
          "For 3 minutes starting at quarter past and 45 minutes past.",
          "For 6 minutes starting on the hour and half hour.",
          "For 3 minutes starting on the hour and half hour."
        ],
        "correctIndex": 3,
        "image": "images/image37.jpg"
      },
      {
        "question": "Acoustic feedback can arise:",
        "options": [
          "Because outside noise is amplified by the loudspeaker in the microphone",
          "Because the speaker is kept in an open area",
          "Because the loudspeaker works as a microphone",
          "Because the volume adjustment of the speaker is too high"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The sensitivity of a communication receiver can be adjusted with:",
        "options": [
          "RF-Gain",
          "Squelch",
          "AF-Gain",
          "Clarifier"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship sighting another ship in distress which is not itself in position to transmit a distress alert ?",
        "options": [
          "Safety call",
          "Urgent call",
          "Distress call",
          "Distress relay call"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "What is the travelling speed of radioelectric waves?",
        "options": [
          "The speed of sound",
          "The speed of light",
          "9800 km/h",
          "1670 Km/h"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The wavelength of a radio-signal reflected against the F-layer may be:",
        "options": [
          "15 cm",
          "15 m",
          "1.5 m",
          "150 m"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The MERSAR is:",
        "options": [
          "A survey of vessels favourably located for possible rescue during SAR operations",
          "A book of directions for search and rescue at sea",
          "A fully automated system for mutual assistance and rescue of persons at sea",
          "A book for communication regulations at sea"
        ],
        "correctIndex": 1,
        "image": "images/image27.jpg"
      },
      {
        "question": "A coast radio station for sea area A2 has at least the following frequencies at its disposal",
        "options": [
          "2187.5 KHz",
          "2174 Khz",
          "2187.5, 2182 and 2174.5 KHz",
          "2187.5 KHz and 2182 Khz"
        ],
        "correctIndex": 3,
        "image": "images/image18.jpg"
      },
      {
        "question": "Which International Convention introduced the GMDSS ?",
        "options": [
          "GMDSS",
          "MERSAR",
          "SOLAS",
          "STCW"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "On board they want to make a DSC-call with a foreign coast-station. It is an urgent call. Preferably choose:",
        "options": [
          "The national DSC-call frequecies of the coast-station concerned",
          "The international DSC-call frequency",
          "The international DSC-urgent frequency",
          "The international DSC-distress frequencies"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which class of emission is used for VHF DSC transmissions ?",
        "options": [
          "G2B",
          "J2B",
          "G3E",
          "J3E"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "On board they want to send a safety-call to other vessels. The DSC safety-call:",
        "options": [
          "May not contain a work-frequency",
          "Has to contain a work-frequency",
          "Will automatically send the correct working frequency",
          "May contain a work-frequency"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What transmission-mode must be used with NBDP?",
        "options": [
          "G3E",
          "J2B / F1B",
          "E mail",
          "J3E"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The wave length is:",
        "options": [
          "Independent of the frequency",
          "Inversely proportional to the frequency",
          "Proportional to the frequency",
          "Equal to the frequency"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following is the correct minimum carriage requirement for a ship of more than 300 gross tons and operating in area A1:",
        "options": [
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable - 1 EPIRB",
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable",
          "1 VHF RT – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –",
          "1 MF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The safety message announces that a station:",
        "options": [
          "Is in serious and imminent danger and needs immediate assistance",
          "Is going to be under repairs",
          "Will relay a message concerning an important navigational or meteorological warning",
          "Has an very urgent message concerning the safety of a vessel, a plane or another means of conveyance"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "A MF/HF-DSC multi-frequency call attempt may:",
        "options": [
          "Be repeated after 3.5 to 4.5 minutes",
          "Be repeated after 15 minutes",
          "Not be repeated",
          "Be repeated after 1 to 1.5 minutes"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "For a DSC-connection (no 'distress alert') with another vessel the following frequencies are used:",
        "options": [
          "TX: 2189.5 kHz RX: 2189.5 kHz",
          "Tx: 2187.5 kHz RX: 2182.0 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "At present the MF/HF transmitter often has an automatic aerial turning unit. Should this fail:",
        "options": [
          "The transmitter will automatically keep operating on the MF and HF distress frequencies",
          "You can transmit but can not receive",
          "No distress frequencies can be used at all",
          "Its always possible to put the turning unit in a fixed position, so the MF distress frequencies can still be used"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "When sending an OBS (weather report) with Inmarsat one should use Service Code '41'. With this address the weather report will always be transmitted to:",
        "options": [
          "The meteorological office of the ship's flag state",
          "KNMI in Holland",
          "The meteorological station connected with the CES used",
          "MET office Washington, this office will take care of further dispatch of the weather reports"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "You wish to carry out a test transmission on your radio equipment. What precautions should be taken if any?",
        "options": [
          "Listen out to ensure that no safety/distress traffic is in progress.",
          "Test transmission should be kept to a minimum.",
          "All of the items in the other alternatives should be done.",
          "Test transmission should be carried out on artificial aerials and/or reduced power."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The usual range of a VHF radio-set from ship to ship at sea is:",
        "options": [
          "200 Nautical Miles",
          "2 Nautical Miles",
          "20 Nautical Miles",
          "10 Nautical Miles"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "Operator connected R/T calls are charged",
        "options": [
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the basis of a one minute minimum charge with one minute incremental steps",
          "On the basis of a three minute minimum charge with one minute incremental steps",
          "On the basis of a six second minimum charge with one second incremental steps"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "The hydrostatic release of an EPIRB should be changed",
        "options": [
          "Every four years",
          "Every three years",
          "Every two years",
          "Yearly"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "The whip-antenna of the MF transceiver was lost in bad weather. The MF-transceiver can be used again:",
        "options": [
          "Only if the whip antenna is replaced by another whip-antenna of the same length",
          "If the whip-antenna is replaced by an antenna of about the same length as the original one",
          "If instead of the whip-antenna, another whip-antenna such as the spare VHF antenna is connected",
          "If the whip-antenna is replaced by a Sat C antenna"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The word NAVTEX is spelled conform the international phonetic alphabet:",
        "options": [
          "November, Able, Valencia, Tripoli, Echo, Xantippe",
          "November, Alfa, Victor, Tango, Echo, X-ray",
          "November, Anna, Victor, Tango, Eduard, X-ray",
          "November, Apple, Victoria, Tango, Echo, X-mas"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Radio signals in the HF channels propagate mainly:",
        "options": [
          "In a straight line",
          "Along the curvature of the earth",
          "Between the earth and satellites",
          "Through hops between the ionised layers and the earth"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which action do you perform when you log in to a satellite ocean region?",
        "options": [
          "You select the CES through which you wish to send a message.",
          "You adjust the antenna.",
          "You update the ship's position",
          "You inform the NCS that the SES is available for comunications."
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship sighting containers adrift in vicinity of her position ? (No message about this problem was previously transmitted via NAVTEX or INMARSAT C SAFETYNET)",
        "options": [
          "Distress relay call",
          "Distress call",
          "Urgent call",
          "Safety call"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "Where should the VHF survival craft transceivers be located during normal operation of the ship ?",
        "options": [
          "On the bridge",
          "Near the liferaft",
          "Near the gangway",
          "In the lifeboats"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "If on low-power, VHF channels 15 and 17 may be used for:",
        "options": [
          "Intership radio traffic",
          "Commercial radio traffic",
          "Coastal traffic",
          "On board communication (intera-ship traffic)"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "What mode is used for broadcast an MF/HF-DSC message:",
        "options": [
          "G3E",
          "H3E",
          "J2B / F1B",
          "J3E"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which word will precede an urgency message ?",
        "options": [
          "MAYDAY",
          "PAN",
          "URGENCE",
          "PAN PAN"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is SELFEC:",
        "options": [
          "A Navtex-transmission",
          "A one-sided transmission meant for all vessels",
          "A fascimile transmission",
          "A one-sided transmission meant for one vessel"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "One wishes to have a telephone conversation with a person whose name is known. This is what is called:",
        "options": [
          "A direct call",
          "A personal call",
          "A collect call",
          "A call to a known person"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "On which frequencies do most satellite EPIRBs operate?",
        "options": [
          "121.5Khz",
          "500Khz",
          "2182Khz",
          "121.5/406MHz"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "Which class of emission is used for HF radio telephony transmissions ?",
        "options": [
          "G2B",
          "J3E",
          "G3E",
          "F1B"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      }
    ]
  },
  {
    "title": "GMDSS 101-200",
    "questions": [
      {
        "question": "What does the abbreviation DSC means?",
        "options": [
          "Digital Safety Call",
          "Digital Selective Call",
          "Distress Selective Call",
          "Distress and safety call"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "With what system is a NAVTEX-message transmitted?",
        "options": [
          "JRC",
          "ARQ",
          "SELFEC",
          "FEC"
        ],
        "correctIndex": 3,
        "image": "images/image20.jpg"
      },
      {
        "question": "At sea there is a container adrift which can be a danger for navigation. The call starts with:",
        "options": [
          "SECURITE (3x)",
          "URGENT (3x)",
          "MAYDAY (3x)",
          "PAN PAN (3x)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "The word SHIP is spelled conform the international phonetic alphabet:",
        "options": [
          "Sugar, Hotel, Italia, Peter",
          "Singapore, Hotel, India, Paris",
          "Sierra, Hotel, India, Papa",
          "Sierra, Hotel, Item, Papa"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which VHF channel should be used for intership navigation safety communications?",
        "options": [
          "Ch.06",
          "Ch.12",
          "Ch.16",
          "Ch.13"
        ],
        "correctIndex": 3,
        "image": "images/image23.jpg"
      },
      {
        "question": "What is the most important factor influencing the VHF range?",
        "options": [
          "The height of the antenna",
          "The channel used",
          "The type of message sent.",
          "The size of the antenna"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "On which frequency must a ship maintain a continuous watch when sailing in area A2?",
        "options": [
          "8414.5 kHz",
          "2187.5 kHz",
          "2182 kHz",
          "4207.5 kHz"
        ],
        "correctIndex": 1,
        "image": "images/image32.jpg"
      },
      {
        "question": "By wave length is understood:",
        "options": [
          "The length of a single spike in a wave",
          "The propagation speed of a radio vibration in free space",
          "The propagation direction of a radio vibration",
          "The distance travelled by a radio vibration in a period"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Command of radio-traffic between vessels and coast-stations lies:",
        "options": [
          "Always with the coast station",
          "With coast guard",
          "With the station that calls",
          "With the station called"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "In the Inmarsat Maritime Communications Handbook one can find information about:",
        "options": [
          "Numbers of fax subscribers",
          "Radio telex commands",
          "Ship's Inmarsat Id's",
          "2 digit code telex services"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "In maritime communication two international treaties are primarily involved. They are:",
        "options": [
          "The IMO at London and the ITU at Geneva",
          "Solas and the international treaty for messaging",
          "Gmdss hand book and Mersar",
          "The Solas and its rules"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following frequency bands would most likely provide reliable communications between two stations that are 15 miles apart?",
        "options": [
          "The Low Frequency (LF) band",
          "The Very High Frequency (VHF) band",
          "The High Frequency (HF) band.",
          "The Medium Frequency (MF) band."
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "In what HF-band is long distance transmission possible when both stations are located in Darkness:",
        "options": [
          "8 MHz",
          "4 MHz",
          "22 MHz",
          "16 MHz"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The MMSI is:",
        "options": [
          "A ship accounting code",
          "An INMARSAT mobile number",
          "A vessel position reporting system",
          "A ship identity number"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "When a coastguard-station wants to send a gale-warning by DSC it will happen in the category:",
        "options": [
          "Urgency",
          "Routine",
          "Security",
          "Safety"
        ],
        "correctIndex": 3,
        "image": "images/image11.jpg"
      },
      {
        "question": "The log-in of an Inmarsat-C installation is important:",
        "options": [
          "To inform the LES, that one is available for messages offered",
          "To inform the addressee, that one is available for messages offered",
          "To keep watch on Sat-C for safety messages",
          "To inform the NCS that one is available for messages offered"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "On board an accident happened. Urgent radio-medical advice is needed. We choose the category:",
        "options": [
          "Safety",
          "Distress",
          "Routine",
          "Urgency"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "MMSI is short form of:",
        "options": [
          "Merchant Mariners Signal Identity",
          "Mobile Maritime Safety Information",
          "Maritime Mobile Service Identity",
          "Merchant Marine Ship identity"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "What is the purpose of the « SQUELCH » on a VHF transmitter/receiver?",
        "options": [
          "Increase the range of the transmitter",
          "Increase the sound signal of the receiver",
          "Reduce the \"noise\" in the background",
          "Switch to another channel"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "The authority to order the use of distress signal or distress alerts is:",
        "options": [
          "The person designated to maintain communication during distress situations",
          "Only with the master",
          "Company safety officer",
          "The first person to discover the distress situation"
        ],
        "correctIndex": 1,
        "image": "images/image25.jpg"
      },
      {
        "question": "MF radio signals propagate mainly:",
        "options": [
          "Along the curvature of the earth",
          "Through hops between ionised layers and the earth",
          "Between the earth and satellites",
          "In a straight line"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Of the AM-signal:",
        "options": [
          "Is not dependent on the frequency and amplitude",
          "Amplitude and frequency of the carrier wave are constant",
          "Amplitude is variable and frquency of the carrier wave is constant",
          "Both amplitude and frequency of the carrier wave are variable"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which one of the listed items has to be included in a distress message?",
        "options": [
          "Destination.",
          "Identification of the ship.",
          "Last port of call.",
          "Weather in immediate vincinity."
        ],
        "correctIndex": 1,
        "image": "images/image7.jpg"
      },
      {
        "question": "What are the GMDSS sea areas?",
        "options": [
          "Atlantic East, Atlantic West, Indian and Pacific areas",
          "A1,A2,A3 and A4",
          "AA,AB,AC and AD",
          "Near coastal, National and International"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "By the term \"Stand by\" the operator of a coast-station means that one should:",
        "options": [
          "Wait until the coast-station calls again",
          "Wait on this channel for one hour",
          "Give the position of the ship",
          "Switch back to the calling channel"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "What is the most important factor influencing the HF range?",
        "options": [
          "The frequency used",
          "The size of the antenna",
          "The power of the transmitter",
          "The channel used"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "One of the sailors needs urgent medical assistance. The VHF-call starts with:",
        "options": [
          "PAN PAN (3x)",
          "Urgent (3x)",
          "MAYDAY (3x)",
          "SOS (3x)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "DSC uses for automatic identification the MMSI. The identification 002442000 is assigned to:",
        "options": [
          "A type of vessel's",
          "A vessel",
          "A group of vessels",
          "A coast-station or coast guard-station"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the purpose of the radiotelephony two tone alarm?",
        "options": [
          "Alert COSPAS/SARSAT satellites",
          "Activate bridge watchkeeping receivers.",
          "Activate bridge watchkeeping receivers and attract the attention of the person on watch.",
          "Attract the attention of the person on watch."
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "The following information must be given on the SART:",
        "options": [
          "The name of the operator",
          "Date of replacement of the batteries",
          "The date of replacement of the hydrostatic release unit",
          "The MMSI number sent"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "A proper working of the 406 MHz Cospas-Sarsat EPIRB can be tested with:",
        "options": [
          "The testing function of the device",
          "Test transmissions from Cospas-Sarsat satellites",
          "Regulation monthly test transmissions from RCC 's",
          "Requesting RCC for the test"
        ],
        "correctIndex": 0,
        "image": "images/image9.jpg"
      },
      {
        "question": "The portable walkie talkies required to be carried by GMDSS regulations should have which channels as a minimum?",
        "options": [
          "Channels 13 & 16",
          "Channels 6, 13 & 16",
          "Channel 16 only",
          "Channels 6 & 16"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "The transmitting receiving method, when both stations can transmit and receive at the same time is called:",
        "options": [
          "Simplex",
          "Semi-duplex",
          "Duplex",
          "None of the mentioned"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Your vessel is acting as the on scene commander during a distress rescue. Various vessels are interfering the distress traffic on the VHF. What message would you use to stop them interfering with this traffic?",
        "options": [
          "Seelonce distress",
          "Seelonce mayday",
          "Seelonce securite",
          "Seelonce pan"
        ],
        "correctIndex": 1,
        "image": "images/image14.jpg"
      },
      {
        "question": "The ID of an Inmarsat M station on board starts with:",
        "options": [
          "6",
          "4",
          "1",
          "3"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The proper operation of an Inmarsat C-terminal can be tested by:",
        "options": [
          "Requesting a \"self test\"",
          "Doing a \"recommissioning test\"",
          "Doing a \"link test\"",
          "Sending a message to MF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to the rules of GMDSS vessels are equipped with certain radio-communication devices depending on:",
        "options": [
          "Their tonnage",
          "The trading sea areas",
          "Flag state",
          "Type of vessel"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which word will precede a routine message ?",
        "options": [
          "ROUTINE",
          "PAN PAN",
          "MAYDAY",
          "No specific word will precede a routine message"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "The capacity of a battery is expressed in:",
        "options": [
          "ampere x hours",
          "volt x ampere",
          "Watt x hours",
          "volt x hours"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The ideal aerial length depends on:",
        "options": [
          "The modulation form chosen",
          "The class of transmission",
          "The frequency chosen",
          "The weather conditions"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "A distress alert from an Inmarsat-EPIRB, is received in the coverage area of a satellite by ground station within:",
        "options": [
          "Two minutes",
          "30 to 60 minutes",
          "24 hrs",
          "60 to 90 minutes"
        ],
        "correctIndex": 0,
        "image": "images/image35.jpg"
      },
      {
        "question": "A distress call has been sent accidentally on your MF DSC equipment. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Make broadcast on 2182 kHz \"\"Mayday all stations...\"\" and cancel the false distress alert.\"",
          "Send a selective distress priority MF DSC call to the nearest MRCC– Inform it that a false distress alert has been transmited",
          "Switch off the transmitter",
          "Send a all stations urgent priority MF DSC call"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "The traffic list of a coast-station is a list of:",
        "options": [
          "Name of ship's scheduled for berthing",
          "Names of ships which, on behalf of safety at sea, are being routed by a traffic control system",
          "Call-signs of ships for which a radio-telephone call, a telegram or another call is intended",
          "Pertinent navigational -and weather information"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "In daytime, as a result of sunlight, the number of layers of ionisation will:",
        "options": [
          "Not change",
          "Increase",
          "Keep fluctuating",
          "Decrease"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "At sea red rocket signals are seen. This is not reported by radio. You have to begin the distress alert procedure via VHF with the term:",
        "options": [
          "MAYDAY RELAY",
          "MAYDAY RECU",
          "Distress alert",
          "MAYDAY"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "The responsibility for the transmitting equipment lies with the:",
        "options": [
          "Duty officer",
          "Master",
          "User of the installation",
          "Shipping company (owner)"
        ],
        "correctIndex": 1,
        "image": "images/image33.jpg"
      },
      {
        "question": "What is the action that a GMDSS Radio Operator should take when a DSC distress alert is received?",
        "options": [
          "The Operator should immediately set continuous watch on VHF channel 70.",
          "The Operator should immediately set continuous watch on the NBDP frequency that is associated with frequency band on which the distress alert was received.",
          "The Operator should immediately set continuous watch on the radiotelephone frequency that is associated with frquency band on which the distress alert was received.",
          "No action is necessary, as the DSC control will automatically switch to the NBDP follow-on communications frequency."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "On board you have to switch from transmitting to receiving and vice versa. The shore station can transmit and receive simultaneously. You are working with two different frequencies. This method is called:",
        "options": [
          "Simplex",
          "Semi-simplex",
          "Duplex",
          "Semi-duplex"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Define the class of emission F3E :",
        "options": [
          "Radiotelephony - Frequency modulation",
          "Single side band suppressed carrier",
          "Radiotelex and DSC - Frequency shift keying of sub-carrier with error correction",
          "Radiotelephony - Single sideband full carrier"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "\" What is the meaning of the abbreviation \"\"RQ\"\" at the end of a DSC sequence?\"",
        "options": [
          "End of sequence",
          "Problem of transmission",
          "Acknowledgement request",
          "Acknowledgment broadcast"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "At what minimum height above sea level must a SART transponder be mounted?",
        "options": [
          "1 metre",
          "0.5 metre",
          "The proper function of a SART transponder doesn't depend on the height above sea level",
          "2 metres"
        ],
        "correctIndex": 0,
        "image": "images/image3.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs",
          "the use of INMARSAT Epirbs",
          "the use of VHF DSC"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "A received DSC 'distress alert' contains the following information: \"UNDESIGNATED DISTRESS\" Of this distress case:",
        "options": [
          "The nature of distress is unknown",
          "Number of person at risk is unknown",
          "Time is unknown",
          "The position is unknown"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "You have received the nine digit MMSI of a ship on your DSC equipment. In which publication will you find the name of the ship?",
        "options": [
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Coast Stations",
          "The ITU List of Ship Stations",
          "The ITU List of Radiodetermination and Special Services"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "What is the main purpose of a radio transmitting installation onboard:",
        "options": [
          "To enhance the safety of lives at sea",
          "Safe navigation and internal communication",
          "Public traffic",
          "To talk to friends"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "In radio telephony what is the \"URGENCY CALL\" which should be used to indicate that you have a very urgent message to transmit concerning the safety of another vessel or person?",
        "options": [
          "Victor Victor (3 times)",
          "Pan Pan  (3 times)",
          "Securite Securite (3 times)",
          "Mayday Mayday  (3 times)"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "VHF communication is usually provided by :",
        "options": [
          "Space wave",
          "Ground wave",
          "None of the mentioned",
          "Sky wave"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "With maintenance of batteries it is of primary importance that:",
        "options": [
          "There is proper relative humidity in the space where the batteries are stored",
          "The space where the batteries are stored is properly ventilated",
          "The space is not oily",
          "There is an absolute free access to the battery space"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The signal of an Inmarsat EPIRB:",
        "options": [
          "Will immediately be detected within the coverage-area by the satellite's concerned",
          "Can only be detected when a LUT within the range of the satellite",
          "Will be detected within 1 ½ hours by a passing satellite",
          "Will be detected immediately by the coast station"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "The presence of a VHF-installation is primarily intended to:",
        "options": [
          "Take part in public traffic",
          "Enhance the safety of lives at sea",
          "Take part in harbour traffic",
          "Take part in intra ship communication"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "Which of the following services is not provided by INMARSAT C:",
        "options": [
          "Telex",
          "Telephone",
          "Safetynet",
          "Fleetnet"
        ],
        "correctIndex": 1,
        "image": "images/image12.jpg"
      },
      {
        "question": "The word CHANNEL is spelled conform the international phonetic alphabet:",
        "options": [
          "Charlie, Hotel, Alfa, November, November, Echo, Lima",
          "Cornelies, Hotel, Apple, November, November, Echo, Land",
          "Cornelies, Hotel, Alfa, November, November, Echo, Lima",
          "Charlie, Hotel, Able, November, November, Echo, Liverpool"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The prescribed test of EPIRB, SART and portable VHF radio set must be entered in:",
        "options": [
          "Maintenance manual",
          "Ship's radio log",
          "Equipment survey",
          "Radio equipment manual"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The MF/HF-transceiver on board is tuned to the assigned frequency of a station. To make this connection the following mode is used:",
        "options": [
          "H3E",
          "J3E",
          "J2B",
          "G3E"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following is a coast station MMSI ?",
        "options": [
          "227530000",
          "227005300",
          "22753000",
          "2275300"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "One can check the functioning of the SART by:",
        "options": [
          "Lowering SART in to the sea",
          "Actvating the SART and checking the effect on the radar screen",
          "Activating it by extracting the antenna",
          "Removing it from the holder and turning the SART upside down"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "Which of the following frequencies is used by the NAVTEX system ?",
        "options": [
          "121,5 MHz",
          "156,8 MHz",
          "2182 Khz",
          "518 Khz"
        ],
        "correctIndex": 3,
        "image": "images/image20.jpg"
      },
      {
        "question": "The display of a radiotelephone-installation shows the following selections: Transmitting mode: H3E Transmitting frequency: 2187,5 kHz The transmitting mode indicator is \"flashing\". This can mean that:",
        "options": [
          "You are ready to press the send buuton",
          "The transmitting mode is not compatible with the chosen frequency",
          "The \"H3E\"mode is to be selected before transmitting on the 2187,5 kHz band",
          "The radiotelephone-alarm signal must be transmitted now"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is understood by carrier frequency:",
        "options": [
          "The frequency actually used by transmitter and receiver",
          "Frequency of the carrier wave",
          "Frequency of single side band",
          "The frequency of upper side band (UBS)"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "An EPIRB has been activated accidentally. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Send a distress priority VHF DSC call and make broadcast to all stations",
          "Call the nearest coast station and inform it that a false distress alert has been transmited",
          "Call a LUT and inform it",
          "Make broadcast to all stations on VHF 16"
        ],
        "correctIndex": 1,
        "image": "images/image2.jpg"
      },
      {
        "question": "What is the emergency frequency on M.F. (Medium frequency) radio?",
        "options": [
          "1616 Hz",
          "2182 Hz",
          "2617 Hz",
          "1718 Hz"
        ],
        "correctIndex": 1,
        "image": "images/image21.jpg"
      },
      {
        "question": "The type-indication of the radio set is mentioned in:",
        "options": [
          "The equipment appendix",
          "Registry certificate",
          "The safety certificate",
          "The survey of equipment"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Define the class of emission J3E :",
        "options": [
          "Radiotelephony - Single sideband suppressed carrier",
          "Radiotelephony - Phase modulation",
          "Radiotelex and DSC - Phase modulation",
          "Radiotelephony - Single sideband full carrier"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The impedance of a coax cable for the VHF-set depends on:",
        "options": [
          "The way in which the feed line is controlled",
          "The temprature of the cable",
          "The length of the coax cable",
          "The structure dimensions and the material of the coax cable"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "For calling a coast-station by VHF one should preferably use:",
        "options": [
          "Channel 70",
          "A special calling channel of that coast-station",
          "Channel 16",
          "A working channel of the nearest shore-station of that coast-station"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The position that is determined by built in GPS-receiver in an Inmarsat-EPIRB has an accuracy of about:",
        "options": [
          "200 meters",
          "2200 meters",
          "1200 meters",
          "4200 meters"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "The position of a 406 MHz Cospas-Sarsat EPIRB is:",
        "options": [
          "Passed on by the EPIRB to the satellite",
          "Measured by the \"dopler\" shift in the signals",
          "Determined by satellites by means of directional aerials",
          "Transmitted by the ship"
        ],
        "correctIndex": 1,
        "image": "images/image22.jpg"
      },
      {
        "question": "Fleetnet communication via the Inmarsat-system is an EGC among other things intended for all:",
        "options": [
          "Vessels coordinating in the rescue operations",
          "Vessels",
          "Vessels of a certain shipping-company",
          "Vessels in a certain geographical area"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which class of emission is used for ARQ NBDP transmissions ?",
        "options": [
          "F1B",
          "G3E",
          "G2B",
          "J3E"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A radio-wave travels in the air at a speed of:",
        "options": [
          "300.000 Kilometers per second",
          "30.000 Kilometers per hour",
          "300.000 Kilometers per hour",
          "300.000 Metres per second"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "A wire antenna of 12 metres in length is probably:",
        "options": [
          "An Inmarsat-antenna",
          "A MF/HF-antenna",
          "A VHF-antenna",
          "A Sat-C antenna"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is SITREP an abbreviation for?",
        "options": [
          "Survivor Indication Transponder Equipment.",
          "Situation Report.",
          "Ship Transit Emergency Radio.",
          "Ship Indication Transmission Equipment."
        ],
        "correctIndex": 1,
        "image": "images/image21.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship adrift and needing the assistance of a tug ? (The weather is not bad and the ship will be aground 24 hours later)",
        "options": [
          "Distress call",
          "Safety call",
          "Urgent call",
          "Distress relay call"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "Each ship fitted with a radiotelephone station shall listen on the distress frequency during navigation, for how many hours a day according to the regulations?",
        "options": [
          "8 hours",
          "12 hours",
          "24 hours",
          "16 hours"
        ],
        "correctIndex": 2,
        "image": "images/image34.jpg"
      },
      {
        "question": "The variation in strength of the received signal is called:",
        "options": [
          "Fading",
          "Selectivity",
          "Oscillation",
          "Sensitivity"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Pledge of secrecy applies:",
        "options": [
          "For everybody",
          "For 2nd officer only",
          "Only for those who want to send and/or receive a message",
          "Only to certificate holders"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission when making a radiotelephone call:",
        "options": [
          "H3E",
          "G3E",
          "F1B/J2B",
          "J3E"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Under GMDSS rules the trading area A3 can be considered to be:",
        "options": [
          "Within MF range.",
          "Polar region.",
          "Within VHF range.",
          "Within coverage of the INMARSAT system."
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Satellites which receive the 406 MHz Cospas-Sarsat EPIRB are:",
        "options": [
          "Capable to determine position only in day time",
          "Only capable to determine the position of the EPIRB in certain curcumstances",
          "Not capable to determine the position of the EPIRB",
          "Capable to determine the position of the EPIRB"
        ],
        "correctIndex": 3,
        "image": "images/image9.jpg"
      },
      {
        "question": "A personal call means that:",
        "options": [
          "The applicant on board request the coast-station to personally guard the conversation with the shore subscriber",
          "The applicant wants the call to be charged to some other person",
          "The applicant on board request the coastal station to bring about a conversation with a shore subscriber by means of a scrambler",
          "The applicant on board wishes to have a conversation with a person whose name is known"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The emergency battery of a GMDDS portophone:",
        "options": [
          "Must be replaced before the expiry date is exceeded",
          "Must be charged after expiry date",
          "Cannot be replaced",
          "Must be tested once a week"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The call sign of a vessel is meant to:",
        "options": [
          "Give others the possibility to identify the vessel",
          "Gain a quicker transit at bridges and locks",
          "To use short name in transmissions to reduce cost",
          "Provide the certificate holder with unique identification"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "A MMSI number consist of:",
        "options": [
          "The call sign followed by 4 digits",
          "6 digits",
          "10 digits",
          "9 digits"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Sea area A3 is in maritime radio traffic a sea area:",
        "options": [
          "With the exception of the sea areas A1 and A2, in which a reliable HF connections exist by DSC with one or more coast radio stations",
          "From about 200 miles from shore a reliable DSC connection exists with one or more coastal stations",
          "Where communication is not possisble",
          "With the exception of the areas A1 and A2 within the range of a geostationary satellite of Inmarsat in which an uninterupted alerting is possible"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What do you do after receiving a VHF DSC DISTRESS call ?",
        "options": [
          "You set watch on VHF channel 16",
          "You send immediately a DSC DISTRESS ACKNOWLEDGEMENT call",
          "You send immediatly a DSC DISTRESS RELAY call",
          "You set watch on channel 13"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "Inmarsat is short for:",
        "options": [
          "International Maritime Satellite System",
          "International Maritime Satellite Organisation",
          "Internal Marine Safety Organisation",
          "International Maritime Safety Organisation"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which class of emission is used for VHF radio telephony transmissions ?",
        "options": [
          "H3E",
          "G3E",
          "J2B",
          "G2B"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following are exclusively intership RT channels :",
        "options": [
          "Channels 05, 06, and 13",
          "Channels 06, 08, 72 and 77",
          "Channels 06, 16, and 70",
          "Channels 11 and 74"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "1 GHz is equivalent to :",
        "options": [
          "10000 000 000 Hz",
          "1000 000 Hz",
          "1000 000 000 Hz",
          "100 000 Hz"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "When a DSC-message of the 'distress' category is received, in order to start distress alert communication in so far as not indicated in the alert, you will switch to VHF channel:",
        "options": [
          "67",
          "85",
          "16",
          "13"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      }
    ]
  },
  {
    "title": "GMDSS 201-300",
    "questions": [
      {
        "question": "According to the rules of GMDSS vessels equipped for all sea areas have to be provided with:",
        "options": [
          "1.6 GHz Inmarsat/DSC EPIRB",
          "121.5/243.0 MHz VHF EPIRB",
          "406.0 MHz Cospas-Sarsat EPIRB",
          "156.3 KHz EPIRB"
        ],
        "correctIndex": 2,
        "image": "images/image9.jpg"
      },
      {
        "question": "After confirmation that there is no other radio-traffic, we call on a VHF working channel of a coast-station. When you don't get any reply:",
        "options": [
          "You must wait 5 minutes before repeating the call",
          "You can repeat your call immediately",
          "You must wait 1 minute minimum before repeating your call",
          "You must wait 3 minute minimum before repeating your call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "To announce an important navigational –or meteorological warning via the VHF-installation, one should use the:",
        "options": [
          "Urgency call",
          "Distress call",
          "Individual call",
          "Safety call"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of VHF DSC and VHF Epirbs",
          "The use of MF DSC and INMARSAT Epirbs",
          "The use of HF DSC and INMARSAT Epirbs",
          "The use of HF DSC and COSPAS SARSAT Epirbs"
        ],
        "correctIndex": 3,
        "image": "images/image39.jpg"
      },
      {
        "question": "With an Inmarsat-C terminal the option 'PSTN' for addressing is available. This option:",
        "options": [
          "Delivers a message as a telegram",
          "Have the operator read the message by phone",
          "Is to deliver a message by telephone via a modem on the computer of the suscriber",
          "Delivers the message as a fax"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "If requested by a coastal radio station to participate in a rescue operation, what is the most important information you may give?",
        "options": [
          "Your vessel's own cargo owner",
          "Your vessel's destination",
          "Your crews nationality",
          "Your vessel's position, name, call sign and speed"
        ],
        "correctIndex": 3,
        "image": "images/image27.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: TX call:Selectiveto: 02114200 Category:RoutineUSB:telephony DSC Tx  2189.5 kHzsave>send<  This DSC-message must be transmitted in the mode:",
        "options": [
          "F1B",
          "J3E",
          "G3E",
          "H3E"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The altitude effect of the reflection of radio waves in the ionosphere on the transmission range also depends on:",
        "options": [
          "The equipment used",
          "The day/night situation",
          "The position of the pre-selector tuning-button",
          "The sensitivity of the receiver"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The relay of a distress-call by an RCC for coast-station begins with:",
        "options": [
          "Distress (3X)",
          "MAYDAY RELAY (3x)",
          "MAYDAY (3x)",
          "PAN PAN (3x)"
        ],
        "correctIndex": 1,
        "image": "images/image18.jpg"
      },
      {
        "question": "Which means of communication is used by the NAVTEX system ?",
        "options": [
          "VHF",
          "E mail",
          "MF",
          "Satellite"
        ],
        "correctIndex": 2,
        "image": "images/image20.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC",
          "The use of SARSAT COSPAS Epirbs",
          "The use of MF DSC",
          "The use of SART transponders"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "Under GMDSS rules the trading area A1 can be considered to be:",
        "options": [
          "Within the coverage of INMARSAT.",
          "Polar region.",
          "Within range of VHF coast radio stations.",
          "Within range of MF coast radio stations."
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following frequency bands would most likely provide reliable communications between two stations that are 100 miles apart?",
        "options": [
          "The High Frequency (HF) band.",
          "The Very High Frequency (VHF) band.",
          "The Low Frequency (LF) band.",
          "The Medium Frequency (MF) band"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "By non-reduced transmitting power in VHF is meant in a power between:",
        "options": [
          "25 - 50 watt",
          "1 – 6 watt",
          "6 - 25 watt",
          "5 – 10 watt"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "When during transmitting the display of a radiotelephone-installation shows a decrease in transmitting power it is:",
        "options": [
          "An indication of aerial problem",
          "An automatic adjustment of the chosen transmitting mode",
          "An adjustment of the semi-duplex transmitting power",
          "An indication of chosing a wrong channel"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "On the MF/HF transmitter-receiver there is a sensitivity control. Another name for this is:",
        "options": [
          "RF-gain",
          "AF-gain",
          "AGC-gain",
          "LF-gain"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A frequency is measured in :",
        "options": [
          "Micro-seconds",
          "Metres",
          "Hertz",
          "Seconds"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Your vessel is not in distress and not taking part in a distress operation. How would you impose radio silence on vessels which are interfering the distress traffic?",
        "options": [
          "Seelonce Mayday",
          "Seelonce Pan",
          "Seelonce Securite",
          "Seelonce Distress"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "Define the class of emission H3E :",
        "options": [
          "Radiotelephony - Single sideband full carrier",
          "Radiotelex and DSC - Frequency shift keying of sub-carrier with error correction",
          "Radiotelex and DSC - Frequency shift keying of carrier with error correction",
          "Radiotelephony - Frequency modulation"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which class of emission is used for MF radio telephony transmissions ?",
        "options": [
          "G3E",
          "F3E",
          "J3E",
          "H3E"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "In accordance with GMDSS rules, the frequency 2187.5 kHz is used for:",
        "options": [
          "Distress alerting",
          "Distress traffic",
          "On scene communication",
          "Routine message"
        ],
        "correctIndex": 0,
        "image": "images/image32.jpg"
      },
      {
        "question": "Which wave length applies to a frequency of 2000 kHz?",
        "options": [
          "150 mtr",
          "15 mtr",
          "1500 mtr",
          "15000 mtr"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Notices to all vessels of a certain shipping-company are sent via the Inmarsat by an EGC-service. This EGC-service is called:",
        "options": [
          "FleetNet",
          "Satnet",
          "SafetyNet",
          "ShipNet"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The Inmarsat-satellites are located:",
        "options": [
          "In a geostationary orbit at approximally 1000 km. Altitude",
          "Above the equator",
          "Between Lat 70 degree N and 70 degree S",
          "Alternatively above the poles and the equator"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The type of Inmarsat station A,B,C,M is recognized by",
        "options": [
          "Last digit of the identification",
          "The first two digits of the identification",
          "The first four digits of the identification",
          "The first digit of the identification"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The squelch on the control panel of a VHF-sat serves to:",
        "options": [
          "Adjust the receivers volume",
          "Adjust the sound level of the signal received",
          "Adjust the proportion of atmospheric noise in receiving the spoken word",
          "Adjust the threshold level for admitting signals and refusing noise"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "Code signals concerning requests and general information on medical matters normally consist of:",
        "options": [
          "Letter M plus two other letters.",
          "Letter D plus two other letters.",
          "Letter P plus two other letters.",
          "Letter H plus two other letters."
        ],
        "correctIndex": 0,
        "image": "images/image16.jpg"
      },
      {
        "question": "Regular 'updating' of a ships' position in an Inmarsat-C installation is necessary",
        "options": [
          "To have the correct position in case of accidents",
          "To inform the satellite of ships position",
          "To keep to the correct Inmarsat-region",
          "To enter the correct data to the disk antenna"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "Automatic amplifier regulation is used for the following reasons:",
        "options": [
          "With strong incoming signals distortion is reduced",
          "With absence of incoming signals noise is reduced",
          "With weak incoming signals distortion is reduced",
          "With bad weather the signal is amplified"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Every vessel equipped according to the rules of GMDSS must be provided with:",
        "options": [
          "HF radio telephony installation",
          "MF radio telephony-installation",
          "Navtex-receiver",
          "DSC listening watch receiver for 2187.5 Hz"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "An Inmarsat-C terminal is suitable for:",
        "options": [
          "Store and forward message",
          "Telephony, telex, fax and data",
          "Telex only",
          "Telephony, fax and data"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "If one wants to transmit a weather report with an Inmarsat-C terminal one should use the following address:",
        "options": [
          "Sitrep",
          "Meteorological Center",
          "OBS +",
          "41"
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "Long distance communication in the HF-bands depends on:",
        "options": [
          "Satellites",
          "Weather conditions",
          "Ground wave",
          "Ionisation layers"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "The use of SART transponders",
          "The use of MF DSC",
          "The use of VHF DSC",
          "The use of MF and/or VHF R/T"
        ],
        "correctIndex": 3,
        "image": "images/image19.jpg"
      },
      {
        "question": "What is the fundamental purpose of a coast radio station?",
        "options": [
          "To automatically connect a vessel placing an INMARSAT call with the station being called.",
          "To provide continuous DSC coverage",
          "To provide a delivery service for ships with routine, safety, urgency or distress message traffic",
          "To coordinate search and rescue communications."
        ],
        "correctIndex": 1,
        "image": "images/image19.jpg"
      },
      {
        "question": "The identification of a coast station is composed as follows:",
        "options": [
          "00 followed by an MID-number",
          "33 Followed by the MID number",
          "00 followed by an MMSI-number",
          "00 followed by an MID-number and station number"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the required number of hours that a SART's battery must be able to operate the unit in the standby mode?",
        "options": [
          "Eight (8) hours",
          "Forty-eight (48) hours",
          "Four (4) days",
          "Three (3) days"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "The aerial system of an Inmarsat-C terminal consist of:",
        "options": [
          "A rod aerial",
          "An omni-directional aerial",
          "A dish aerial",
          "A flexible wire aerial"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to the rules of GMDSS all vessels have to be equipped with:",
        "options": [
          "At least three VHF radios",
          "A possibility to receive MSI",
          "A VHF in captains cabin",
          "On both sides an EPIRB"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "A VHF transmission range is mainly determined by:",
        "options": [
          "The height of the aerial",
          "The transmission power, propagation and the quality of the receiver",
          "Whether it is radio-telephony, radio-telex or DSC",
          "The ocean region"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The effect of reflection of the radio waves in the ionosphere on the range depends on:",
        "options": [
          "The correct adjustment of the clarifier",
          "The correct adjustment of the dimmer",
          "The amount of ionisation",
          "The correct adjustment of the button band width"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "With help of DSC a ship wants to contact a coast-station to have a question for telephone call. One has to choose from the following DSC-frequencies",
        "options": [
          "TX: 8415.0 kHz RX: 8415.0 kHz",
          "Tx: 8414.5 kHz RX: 8414.5 kHz",
          "TX: 8436.5 kHz RX: 8436.5 kHz",
          "TX: 8415.0 kHz RX: 8436.5 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "You receive via the 8 MHz a DSC distress alert. The received DSC message is however distorted. The MMSI as well as the position are illegible. After listening at the 8 MHz telephone distress frequency, nothing is heard. This is because:",
        "options": [
          "You should have listened on VHF",
          "Telephone signals in the same frequency band are generally weaker than DSC signals",
          "You should have listened on the 2182 kHz",
          "First an acknowledgement of a coastguard station must be received via the 8MHz"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The DSC-controller displays the following: DOO:    246321000 CH16 ; S distress       flooding After receiving this DSC message nothing more is received. Sending receipt on channel 16 does not give any response. One should first:",
        "options": [
          "Send a DSC acknowledgement",
          "Send a DSC distress alert relay",
          "Listen out on VHF channel 67",
          "Inform the safety officer"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Define the acronym GMDSS.",
        "options": [
          "Global Mundial Direct System Safe",
          "General Mundial Distress and Safety System",
          "General Maritime Directories for Safety and Search",
          "Global Maritime Distress and Safety System"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "All designated SAR aircraft and civil aircraft carry equipment operating on the international aeronautical distress frequencies (amplitude modulation). The aeronautical distress frequencies are?",
        "options": [
          "243.1 MHz and/or 486.2 MHz",
          "121.5 MHz and/or 243.0 MHz",
          "123.8 MHz and/or 247.6 MHz",
          "127.8 MHz and/or 349.6 MHz"
        ],
        "correctIndex": 1,
        "image": "images/image29.jpg"
      },
      {
        "question": "A message is send by the Inmarset C-set. The land earth station will:",
        "options": [
          "Automatically send a positive delivery notification (PDN) to the sender",
          "Only send a positive delivery notification (PDN) to the sender if the sender requested, so in the send menu",
          "The sender has to confirm delivery by sending another separate message",
          "Never send a positive delivery notification (PDN) to the sender. The addressed will have to confirm the message through the ground-station and request for further information, if desired"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The batteries must be placed in a well ventilated place, so that:",
        "options": [
          "The person can work in the compartment",
          "The detonating gas can be discharged",
          "There is sufficient oxygen available for optimum working of the batteries",
          "The production of detonating gas can be prevented"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "When onboard channel 16 is used for a shore radio-connection, you always work:",
        "options": [
          "Simplex",
          "Semi-duplex",
          "Duplex",
          "On low power"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The PTT-switch must be:",
        "options": [
          "Pressed in during speaking only to work duplex",
          "Pressed in constantly to work simplex",
          "Pressed in during speaking only to work semi-duplex",
          "Pressed to listen"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "A wire aerial for an MF/HF –transmitter must be suspended between isolators:",
        "options": [
          "To prevent contact with earth",
          "To make the way for aerial currents as long as possible",
          "To save energy",
          "To prevent burns when touching the aerial"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Define the class of emission F1B :",
        "options": [
          "Radiotelex and DSC - Frequency shift keying of sub-carrier with error correction",
          "Radiotelex - Frequency modulation",
          "Radiotelephony - Phase modulation",
          "Radiotelex and DSC - Frequency shift keying of carrier with error correction"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What HF-band is generally suitable for long distance transmission if one of two stations is Located in twilight",
        "options": [
          "16 MHz",
          "12 MHz",
          "22 MHz",
          "4 MHz"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The exact position of a 406 MHz Cospas-Sarsat EPIRB is eventually calculated by:",
        "options": [
          "The EPIRB",
          "LUT",
          "Ship Manager",
          "The satellite"
        ],
        "correctIndex": 1,
        "image": "images/image15.jpg"
      },
      {
        "question": "Identification of a ship station is amongst others done by an:",
        "options": [
          "MID-number, followed by the call sign",
          "Ship's code number",
          "MMSI-number",
          "MID-number"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "By frequency is meant:",
        "options": [
          "Wave length of a loop",
          "Time lapse of vibrations",
          "Number of vibrations",
          "Number of vibrations per unit of time"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "The propagation of radio-signals in the VHF-band is:",
        "options": [
          "Almost rectilinear",
          "Dependent on the power emitted and the temperature of the atmosphere",
          "Straight",
          "Dependent on the hour of transmission (day or night)"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Onboard the following message is received on the DSC controller: DOO:  245329000 CH16 ; S distress   ack    244123000 What station sent the distress acknowledgement?",
        "options": [
          "002453290",
          "244123000",
          "245329000",
          "None of the given"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "If one requires medical advice by means of an Inmarsat-C terminal one should use the following address:",
        "options": [
          "MED +",
          "Sick Seaman",
          "Radiomedical",
          "32"
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "At the entrance to the space where batteries are stored on board the following notice must be fitted:",
        "options": [
          "Crew only",
          "No entry with naked light and/or flame",
          "Electrician only",
          "Keep access free"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "A distress alert sent by Inmarsat to an RCC is sent via:",
        "options": [
          "The managers office",
          "NCS",
          "LUT",
          "LES"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "If a ship in the MF-band wants to have a DSC-connection with a coast-station (no 'distress alert' or a test alert) the following frequencies are chosen:",
        "options": [
          "TX: 2177.0 kHz RX: 2189.5 kHz",
          "TX: 2189.5 kHz RX: 2177.0 kHz",
          "Tx: 2187.5 KHz RX: 2182 KHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '31' can be used:",
        "options": [
          "When the coast-station is disfunctional",
          "To ask for medical assistance",
          "To ask for maritime inquiries",
          "When technical problems are experienced with the Inmarsat terminal"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The transmitting power of the VHF is adjusted by setting:",
        "options": [
          "Squelch",
          "Dual watch",
          "High/Low power",
          "PTT"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "According to the rule of GMDSS, channel 70 is used for:",
        "options": [
          "Alerting",
          "Distress and urgency traffic",
          "Urgent communications",
          "Distress traffic"
        ],
        "correctIndex": 0,
        "image": "images/image23.jpg"
      },
      {
        "question": "What is the emergency channel on VHF?",
        "options": [
          "Channel 69",
          "Channel 16",
          "Channel 09",
          "Channel 21"
        ],
        "correctIndex": 1,
        "image": "images/image21.jpg"
      },
      {
        "question": "Distress MF communications should normally be operated :",
        "options": [
          "In J3E mode – on duplex basis",
          "In G3E mode – on simplex basis",
          "In J3E mode – on simplex basis",
          "In G3E mode – on duplex basis"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "With an Inmarsat-C installation there is the addressing-option \"special\". Via this option:",
        "options": [
          "You can send a message by express delivery",
          "You can plan a message to be delivered at a special time",
          "Give one of Inmarsat's \"special access codes\"",
          "You can deliver a message via a special telegram"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain maritime assistance ?",
        "options": [
          "38",
          "39",
          "37",
          "32"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "When a satellite receives a \"distress alert\" from a Cospas-Sarsat EPIRB, the relay of the \"distress alert\" can be delayed because the satellite cannot immediately contact a:",
        "options": [
          "LES before the satellite is actually seen by this ground station",
          "Coast station",
          "LUT before the satellite is actually seen by this ground station",
          "NCS before the satellite is actually seen by this ground station"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "For a \"distress alert\" via the DSC, the MF-band is used in the frequencies:",
        "options": [
          "TX: 500.0 KHz RX: 518.0 KHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz",
          "TX: 2189.5 kHz RX: 2189.5 kHz"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The obligation to identify oneself when using VHF is:",
        "options": [
          "Only when sailing in a block area",
          "Always",
          "Only when sailing in restricted visibility",
          "Only when navigating by radar"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The nationality of a ship can be determined by means of:",
        "options": [
          "Ships name, followed by the AAIC",
          "MMSI",
          "Call sign",
          "AAIC"
        ],
        "correctIndex": 2,
        "image": "images/image36.jpg"
      },
      {
        "question": "For how long time should a COSPAS-SARSAT epirb be able to operate on its batteries ?",
        "options": [
          "96 hours",
          "24 hours",
          "12 hours",
          "48 hours"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "How will you start a cancelling message after you send by mistake a distress call on your VHF DSC equipment",
        "options": [
          "\" SECURITE - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "MAYDAY - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "\" All Stations - This is \"\"SAINT-ROMAIN\"\"\"\"",
          "\" PAN PAN - All Stations - This is \"\"SAINT-ROMAIN\"\"\""
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "To inform ship of coast-stations messages, coast-stations give at fixed times:",
        "options": [
          "A list of all the messages for each vessel",
          "A list of the official identification numbers, for example the Maritime Mobile Service Indentity (MMSI).",
          "A list with the names of the ships involved spoken alphabetical numerical sequence.",
          "A traffic list with the call-sign of the ships involved in alphabetical numerical sequence"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Radio waves used in satellite communication are not affected by ionosphere because:",
        "options": [
          "The frequency of the radio waves is too high",
          "A disc aerial is used",
          "Their power is too high",
          "TDM-signals are used"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "HF communication is usually provided by :",
        "options": [
          "Ground wave",
          "Space wave",
          "Sky wave",
          "None of the above"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "the use of HF/MF and/or VHF R/T",
          "the use of MF and/or HF R/T",
          "the use of HF DSC",
          "the use of SARSAT COSPAS Epirb"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "If messages are received which aren't intended for own ship:",
        "options": [
          "They must be noted in the radio log book",
          "They must only be passed to the master",
          "They must be forwarded to the company",
          "They must not be used for any purpose"
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "The prescribed periodic tests of the radio set must be entered in:",
        "options": [
          "Radio Log",
          "Manual maritime radio communication",
          "Equipment manual",
          "Ship's deck log"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The accuracy of an Inmarsat-E positioning-system is:",
        "options": [
          "200 meters",
          "5 miles",
          "20 meters",
          "20 miles"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "To receive distress alerting and MSI via an Inmarsat-C set vessels must have:",
        "options": [
          "Suitable for 518 kHz NAVTEX receiver",
          "MF/HF radio telex scanner with printer",
          "A radio officer on board",
          "SES or an EGC receiver"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: RX: 002442000  ; Ch87 ; D Sellcall  Routine  We're asked to listen on:",
        "options": [
          "VHF- channel 87",
          "VHF- channel 16",
          "Radio telephony-channel 7 in the 8 MHz band",
          "Channel Delta of the coast station"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The correct functioning of a DSC-modem can be checked by means of:",
        "options": [
          "The testing-mode of the ever present VHF-DSC-EPIRB",
          "Tester provided with the equipment",
          "The obligatory monthly transmission from the RCC's",
          "The built-in test facility in the modem"
        ],
        "correctIndex": 3,
        "image": "images/image17.jpg"
      },
      {
        "question": "When discussing VHF, \"reduced transmitting power\" means power between:",
        "options": [
          "6 – 25 watt",
          "5 – 10 watt",
          "100 - 150 watt",
          "0,5 – 1 watt"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "Which radio frequency/channels are reserved for emergency communication?",
        "options": [
          "2182 kHz/VHF channel 16",
          "2128 kHz/VHF channel 16",
          "2182 kHz/VHF channel 6",
          "2188 kHz/VHF channel 8"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "The receiver of the Inmarsat-C installation, if the log-in procedure has been carried out, is turned on:",
        "options": [
          "NCC information channel",
          "RCC common channel",
          "NCS common channel",
          "LES message channel"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A distress-call received via RCC should:",
        "options": [
          "Be given receipt, even when indubitably too distant from the distress case",
          "Always be given receipt",
          "Only be given receipt, if the master has confirmed that assistance indeed can be given",
          "Always be relayed"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "You wish to send an e-mail using the Inmarsat-C installation. The message has to be composed in:",
        "options": [
          "X25",
          "National language of the LES",
          "ASCII",
          "The 400 protocol"
        ],
        "correctIndex": 2,
        "image": "images/image12.jpg"
      },
      {
        "question": "On board they want to have a dial-phone call via Inmarsat with the Apollogracht. In the guides the following ID's are found for the Apollogracht:344320000, 424432010, 424432020, 1300210, 36715. What ID should be chosen:",
        "options": [
          "344320000",
          "424432020",
          "1300210",
          "424432010"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "In the Maritime Radio Traffic the order of priority is:",
        "options": [
          "Urgency traffic, safety traffic, routine traffic",
          "Safety traffic, distress traffic, urgency traffic",
          "Distress traffic, urgency traffic, safety traffic",
          "Urgency traffic, distress traffic, safety traffic"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "If a ship according to the rules of GMDSS is equipped with an MF/HF radio set a DSC listening watch must be kept on:",
        "options": [
          "2182 KHz and channel 70",
          "2187.5 kHz, 8414.5 kHz and for instance 12577.0 kHz",
          "All DSC distress frequencies",
          "8414.5 kHz and on at least one of the following DSC frequencies: 4207.5 kHz, 6312.0 kHz, 12577.0 kHz or 16804.5 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image38.jpg"
      },
      {
        "question": "The good operation in any location, whether the NAVTEX is working properly or not, can be checked using:",
        "options": [
          "A compulsory built-in alarm for defects",
          "A testing program built in for this purpose",
          "A company test procedure",
          "Test transmissions specially broadcast for this purpose once a week"
        ],
        "correctIndex": 1,
        "image": "images/image20.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of VHF DSC",
          "the use of MF DSC",
          "the use of SART transponders"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Define the class of emission G3E :",
        "options": [
          "Radiotelephony - Phase modulation",
          "Radiotelephony - Frequency modulation",
          "Radiotelex and DSC - Frequency shift keying of carrier with error correction",
          "Radiotelex and DSC - Frequency shift keying of sub-carrier with error correction"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "How are the NAVTEX areas identified ?",
        "options": [
          "By one lettre and one digit",
          "By two letters",
          "By one letter",
          "By one digit"
        ],
        "correctIndex": 1,
        "image": "images/image20.jpg"
      },
      {
        "question": "Under GMDSS which VHF channel is used for Digital Selective Calling (DSC)?",
        "options": [
          "Ch.16",
          "Ch.70",
          "Ch. 13",
          "Ch.06"
        ],
        "correctIndex": 1,
        "image": "images/image17.jpg"
      },
      {
        "question": "On area A3 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs",
          "the use of MF DSC",
          "the use of HF DSC"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "For how long time should a VHF survival craft transceiver be able to operate on its batteries ?",
        "options": [
          "8 hours",
          "12 hours",
          "6 hours",
          "24 hours"
        ],
        "correctIndex": 0,
        "image": "images/image26.jpg"
      }
    ]
  },
  {
    "title": "GMDSS 301-382",
    "questions": [
      {
        "question": "By a 'geographical area call' in the DSC system is meant:",
        "options": [
          "A DSC- message for all vessels within a certain area from a position in the DSC message, and the degrees are given in northerly and westerly direction",
          "A DSC- message for all ships heading towards a certain geographical area",
          "A DSC- message for all ships in a particular ocean region",
          "A DSC- message for all vessels within a certain area marked by a reference position, given in the DSC message and the degrees are given in southerly and easterly direction"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The rule for having a radio transmitter license is internationally laid down in:",
        "options": [
          "Radio Regulations",
          "SOLAS",
          "SRT certificate",
          "Search and rescue treaty of Hamburg"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of HF DSC",
          "The use of VHF DSC",
          "The use of SART transponders",
          "The use of portable VHF"
        ],
        "correctIndex": 1,
        "image": "images/image10.jpg"
      },
      {
        "question": "If a coast-station doesn't answer a call on VHF working channel or doesn't send a reply signal:",
        "options": [
          "You must call on another working channel",
          "You can repeat your call after 2 minutes",
          "You can repeat your call immediately when convinced that no other radio traffic is interfered with",
          "You must call on distress channel"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "With an EPIRB:",
        "options": [
          "You must check the working of the charger and check the loaded condition of the battery",
          "You must check the manufacturer of the battery",
          "You must check if it is attached properly to a railing with the required line",
          "You must check the date the battery must be replaced"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "How many total frequencies are available for DSC distress alerting?",
        "options": [
          "One (1).",
          "Five (5).",
          "Seven (7).",
          "Two (2)."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Silencing by a station, not in charge of the distress-traffic, is done as follows:",
        "options": [
          "\"SILENCE DISTRESS\" followed by call sign of the ship in distress",
          "\"SEELONCE MAYDAY\" followed by the silencing station's call-sign",
          "\"SEELONCE MAYDAY\" followed by the call-sign of the ship in distress",
          "\"SEELONCE DISTRESS\" followed by the silencing station's call-sign"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "VHF channel 6 is:",
        "options": [
          "Inter-ship channel",
          "Safety channel",
          "Intra-ship channel",
          "Public traffic channel"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "In making VHF communication or test transmission you must:",
        "options": [
          "First tap on the mike several times, but not more than 10 times",
          "Warn all ships in the vicinity",
          "Identify yourself with your call sign and/or ship's name",
          "With DSC use, first broadcast the carrier wave for at least three seconds"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "What is the meaning of AAIC?",
        "options": [
          "Automatic Alert Identification Code",
          "Automatic alert Inmarsat Call",
          "Accounting Authority Identification Code",
          "Atlantic Area Information Centre"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "The satellite of the Inmarsat-EPIRB system have:",
        "options": [
          "Polar orbits",
          "Geostationary orbits",
          "Geopolary orbits",
          "Equatorial orbit"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "A ship in distress should transmit the appropriate alarm signal followed by the distress call and message on one or all of the international distress frequencies. Which of frequencies is in accordance with the present recommendations?",
        "options": [
          "550 kHz, 2182 kHz and 121.5 MHz",
          "500 kHz, 2367 kHz and 243 MHz",
          "550 kHz, 2367 kHz and 121.5 MHz",
          "500 kHz, 2182 kHz and 156.8 MHz"
        ],
        "correctIndex": 3,
        "image": "images/image7.jpg"
      },
      {
        "question": "A lead battery of 200 Ah, in accordance with the DIN-standard, must be able to supply:",
        "options": [
          "200 ampere during 1 hour",
          "1 ampere during 200 hours",
          "6 ampere during 20 hours",
          "10 ampere during 20 hours"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "On board one can use the reflections in the ionosphere by the right choice of:",
        "options": [
          "The length of the aerial",
          "The type of equipment",
          "The mode of transmission",
          "The time of transmission"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "You wish to send a DSC-message because of a m.o.b. situation and assistance by other ships is required. You have to choose the category:",
        "options": [
          "Safety",
          "Individual",
          "Distress",
          "Urgency"
        ],
        "correctIndex": 2,
        "image": "images/image10.jpg"
      },
      {
        "question": "A polarisation of a radio wave is determined by:",
        "options": [
          "Position of the aerial",
          "Length of the aerial",
          "Height of the aerial",
          "Condition of the aerial"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "To get proper conversation discipline in maritime radio traffic:",
        "options": [
          "Only necessary radio conversations are made in a concise and businesslike way",
          "Only after permission by captain, to send and/or receive on a VHF-channel pointed out the master",
          "Every available VHF-channel should always be used",
          "Communication should be done only as per company's prescribed schedule"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "For how long time should a SART transponder be able to operate in the active mode ?",
        "options": [
          "96 hours",
          "24 hours",
          "6 hours",
          "8 hours"
        ],
        "correctIndex": 3,
        "image": "images/image3.jpg"
      },
      {
        "question": "A \"Standard Format for Search and Rescue Situation Reports\" (SITREPs) should be used by vessels in distress. The SITREP can be compiled as a short form (urgent essential details). Which of the following information shall be included when using the \"short form\"?",
        "options": [
          "Weather on-scene.",
          "Oil spill possibility.",
          "Cargo information.",
          "Position."
        ],
        "correctIndex": 0,
        "image": "images/image27.jpg"
      },
      {
        "question": "Polarisation of a radio wave means:",
        "options": [
          "The beam-angle of a transmitting aerial",
          "The speed of the signal in polar regions",
          "The propagation speed of the signal",
          "The direction of the electrical field"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "DSC-test transmissions may:",
        "options": [
          "Only be sent with MF/HF-installation on other frequencies than the DSC-distress frequencies, if the tele-command 'test' is used",
          "Only be sent on an MF-installation on frequencies other then the DSC-distress frequency",
          "Be sent by any installation",
          "Be sent by an MF-installation on the DSC-distress frequency"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A DSC-notice should be sent on VHF-channel:",
        "options": [
          "13",
          "70",
          "67",
          "16"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "To guarantee optimal reception of VHF-DSC-calls, every:",
        "options": [
          "DSC-symbol is sent twice and checked extra by Error Check Character",
          "DSC-symbol is checked on the right amount of 10, and then checked on the correct relation by Error Checked Character",
          "DSC-report is sent twice, at least every second call is compared with the earlier received call",
          "DSC-calls are repeated untill received"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship in danger of capsizing and needing assistance from all vessels in her vicinity ?",
        "options": [
          "Distress call",
          "Distress relay call",
          "Urgent call",
          "Safety call"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "EGC is short for:",
        "options": [
          "Emergency general ship call",
          "Exchange Geographic Call",
          "Exchange Group Call",
          "Enhanced Group Call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "A DSC distress alert single frequency call attempt is awaiting acknowledgement:",
        "options": [
          "Automatically repeated after 3 and a half to 4 and a half minutes",
          "Not repeated automatically",
          "Repeated manually when required",
          "Automatically repeated after 1 to 1 and a half minutes"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Non distress calls on 2182 kHz and VHF channel 16 should not exceed:",
        "options": [
          "Three minutes.",
          "Five minutes.",
          "One minute.",
          "Two minutes."
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "SART is short for:",
        "options": [
          "Search and Rescue radar transmitter",
          "Safety and radio telephony",
          "Search and rescue radar transponder",
          "Safety and Rescue radar transmitter"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "Via Inmarsat-C a message is sent to an Inmarsat-C mailbox with a positive delivery notification (PDN). The ground station will:",
        "options": [
          "Send a PDN, if the message has arrived in the mailbox",
          "Send a PDN, as soon as the message is collected from the mailbox",
          "Not send any PDN for this message",
          "Send no PDN's with messages intended for the mailbox"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The prescribed test of an approved portable VHF radio set (portophone) must be done once a:",
        "options": [
          "Year",
          "Month",
          "Week",
          "Quarter"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "What is EPIRB an abbreviation for?",
        "options": [
          "Emergency Position Indication Radio Buoy.",
          "Electronic Purpose If Rescue Begins.",
          "Emergency Position Indicating Radio Beacon.",
          "Electronic Pressure Indication Radar Buoy."
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "Modulation is:",
        "options": [
          "Detecting frequency",
          "To enhance the side bands in relation to the carrier wave",
          "Deleting carrier wave",
          "Blending LF & HF signals"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "The number of oscillations of a wave per seconds is called :",
        "options": [
          "Class of emission",
          "Period",
          "Frequency",
          "Wavelength"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "In maritime radio traffic sea area A1 is considered a sea area which:",
        "options": [
          "Is not covered by any coast station",
          "With the exception of sea area A3-A4 and within range of a HF radio station where continuous alarm is available",
          "With the exception of sea area A2-A3 within the range of a Cospas-Sarsat satellite where continuous alarm is available",
          "Is within radio traffic range of at least one VHF- coast station where continuous DSC-alerting is available"
        ],
        "correctIndex": 3,
        "image": "images/image23.jpg"
      },
      {
        "question": "The number of frequencies on which a MF/HF-DSC distress alert multi-frequency call attempt can be transmitted is:",
        "options": [
          "6",
          "5",
          "2",
          "3"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "1MHz is equivalent to :",
        "options": [
          "100 000 Hz",
          "1000 000 Hz",
          "10 000 Hz",
          "10 000 000 Hz"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "By \"collect call\" is meant:",
        "options": [
          "A call for account of the receiver",
          "An urgent call",
          "A call to collect the charges in office",
          "A group call"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "Reflection of radio waves in the ionosphere depends on:",
        "options": [
          "Sunspots",
          "The speed of the waves",
          "The propagation speed of propagation",
          "The chosen mode of transmission"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The mode J2B is used:",
        "options": [
          "For telephone traffic in the MF/HF bands between ship and shore stations",
          "For urgent message transmitting and receiving",
          "For radiotelex-traffic in the MF/HF band between the ship and shore stations",
          "In public broadcasting"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Inter-ship traffic at sea should preferably take place on:",
        "options": [
          "VHF channel 70",
          "VHF channel 77 or 72",
          "VHF channel 10 or 13",
          "VHF channel 06 or 08"
        ],
        "correctIndex": 3,
        "image": "images/image23.jpg"
      },
      {
        "question": "The ship-shore HF-telephone-channel 2228 consists of the frequencies 22081.0 kHz and 22777.0 kHz. In case of manual operation, one should tune the receiver on:",
        "options": [
          "22777.0 KHz",
          "2228 KHz",
          "22081.0 KHz",
          "The common receiving frequency for the 22 mHz band"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The category of a DSC-call determines:",
        "options": [
          "For whom the message is destined",
          "How to conduct search and rescue",
          "How the rest of the call is to be composed",
          "The degree of priority"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is MERSAR an abbreviation for?",
        "options": [
          "Merchant Radio Signal and Receiver.",
          "Maritime Emergency Radio Signal and Response.",
          "Merchant Ship Safety and Rescue.",
          "Merchant Ship Search and Rescue Manual."
        ],
        "correctIndex": 3,
        "image": "images/image27.jpg"
      },
      {
        "question": "The DSC-controller display the following: DOO:   244562000  CH16 ; S distress      sinking After receiving this DSC message the following is done immediately:",
        "options": [
          "Give a \"DSC-acknowledgement\"",
          "Call the Chief officer",
          "Listen out on VHF channel 16",
          "Send a \"distress alert relay\""
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A battery of 24 Volt supplies during 10 hours a current of 6 ampere. What is the capacity supplied:",
        "options": [
          "60 Ah",
          "144 Ah",
          "48 Ah",
          "240 Ah"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "On board a DSC-call is to be made in case of an OBS. Choose the category:",
        "options": [
          "Routine",
          "Urgency",
          "Safety",
          "Ship's business"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "The distress message is used when the vessel is threatened by a serious and imminent danger and is in need of immediate assistance. What is the telephony distress signal?",
        "options": [
          "SECURITE",
          "PAN-PAN",
          "RESCUE-RESCUE",
          "MAYDAY"
        ],
        "correctIndex": 3,
        "image": "images/image28.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs",
          "The use of MF DSC",
          "The use of HF DSC"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The frequency 121,5 MHz is used for :",
        "options": [
          "DSS VHF calls",
          "INMARSAT E EPIRBS",
          "COSPAS-SARSAT EPIRBS",
          "SART transponder"
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "The HF-band is in the frequency range:",
        "options": [
          "3  -  30 KHz",
          "3  -  30 GHz",
          "30 - 300 GHz",
          "3  -  30 MHz"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission, when transmitting a telex-message:",
        "options": [
          "H3E",
          "F1B/J2B",
          "G3E",
          "J3E"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "A distress alert on board may only be transmitted on explicit order of:",
        "options": [
          "The captain",
          "The navigating officer on duty",
          "The safety officer",
          "The radio officer"
        ],
        "correctIndex": 0,
        "image": "images/image14.jpg"
      },
      {
        "question": "By DUAL WATCH in maritime VHF-communication is understood:",
        "options": [
          "To keep a listening watch on two channels more or less simultaneously",
          "The possibility to keep radio-contact with two or more stations simultaneously",
          "Automatically reduction of transmitting power",
          "Talking to two station at the same time"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "To choose the HF-band, the time difference between 2 stations:",
        "options": [
          "Is important",
          "Is hardly relevant",
          "Is irrelevent",
          "Is multiplied by the hour at the transmitting station"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following channels and modes should be used when initiating a distress alert transmission?",
        "options": [
          "Channel 6 Radiotelephony.",
          "Channel 70 DSC",
          "Channel 13 Radiotelephony and channel 16 DSC.",
          "Channel 6 DSC"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What document gives permission to have the on board transmitting equipment?",
        "options": [
          "Safety certificate",
          "A Ship station license",
          "General operator license",
          "Operating certificate"
        ],
        "correctIndex": 1,
        "image": "images/image31.jpg"
      },
      {
        "question": "The Urgency Message from a ship is used to notify other traffic of a situation where the ship is not in imminent danger, but where the development of the situation is uncertain and may need assistance in the near future. What is the telephony urgency message like?",
        "options": [
          "RESCUE-RESCUE",
          "PAN-PAN",
          "SECURITE",
          "MAYDAY"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Moored in a harbour, transmitting with a VHF is:",
        "options": [
          "Not allowed",
          "Allowed in emergency only",
          "Always allowed",
          "Allowed in consultation with harbour master"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Testing a SART is permitted:",
        "options": [
          "Only at sea, outside territorial waters",
          "At sea, outside territorial waters, and in port or harbour",
          "Only in a port or harbour",
          "Only in the workshop"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "The Inmarsat Maritime Communications Manual contains tables of:",
        "options": [
          "Inmarsat SES-id's",
          "Telephone country codes",
          "Company telephone numbers",
          "Radio telex frequencies of coast stations"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Sea area A4 is in maritime radio traffic sea area:",
        "options": [
          "Outside the sea areas A1, A2 and A3",
          "Upto 12 miles of land",
          "Within VHF-radiotelephony-range of a coast station, where continuous DSC-alarm is available",
          "With the exception of sea areas A1,A2 and A3, within the range of Inmarsat-satellites, where continuous alarm is available"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The International Organisation which has developed GMDSS is :",
        "options": [
          "INMARSAT",
          "SARSAT-COSPAS",
          "IMO",
          "ITU"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "When on HF band a DSC distress alert is received, you have to listen to:",
        "options": [
          "8414.5 kHz (DSC distress frequency in 8 MHz)",
          "The radio-telex distress frequency in the band in which the DSC distress alert was received",
          "2182 KHz",
          "The radio telephony distress frequency in the band in which the DSC distress alert was received"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The normal mode of operation for each coast station shall be indicated in:",
        "options": [
          "The ITU List of Call signs and numerical identities of station used by the maritime mobile and maritime mobile-satellite services",
          "The ITU List of Coast Station",
          "The ITU List of Ship Stations",
          "The ITU List of Radiodetermination and Special Services"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "An area within the radiotelephone coverage of at least one VHF coast station in which continuous DSC alerting is available is called:",
        "options": [
          "A1",
          "ASN1",
          "coastal area",
          "A2"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The sound level of the telephone in the tele-microphone is adjusted on the panel of i.g. an MF/HF radiotelephony installation with:",
        "options": [
          "RF-Gain",
          "Volume control",
          "Can not be adjusted, this is set by the manufacturer",
          "AF-Gain"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Secrecy in maritime radio traffic means that:",
        "options": [
          "The speaker of the VHF is to be surged off during private conversations",
          "Received messages which aren't intended for own ship are not used",
          "Received messages are not to be disclosed to other seafarers",
          "The VHF may only be operated by certificate holders who have signed a statement of secrecy"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "A SART must, when the vessel sinks:",
        "options": [
          "Automatically released and then automatically activated",
          "Automatically be released from the vessel and be turned on by equipment onboard the SART-units",
          "Be taken by the crew to the rescue-boat and turned on manually",
          "Should be left on board"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "The first time you send a DSC distress alert via the HF-band, you prefer the?",
        "options": [
          "16 MHz band",
          "8 MHz band",
          "22 MHz band",
          "12 MHz band"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '33' can be used:",
        "options": [
          "When technical problems are experienced with the Inmarsat-terminal",
          "When the coast-station is disfunctional",
          "To ask for 'maritime enquiries",
          "To ask for radio medical advice"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "If one wishes to make a collect call from a vessel to a shore subscriber, one must:",
        "options": [
          "Request for telephone message stating name, address and telephone number",
          "Request for a collect call",
          "Inform the telephone number on whom to charge the call",
          "Request for a personal call"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "A message is sent to a fax-machine. However the message cannot be delivered by the land earth station. The land earth station will:",
        "options": [
          "Call the sender on telephone and inform",
          "Automatically send a non-delivery notification (NDN) to the sender",
          "Will only send a non-delivery notification (NDN) to the sender if so requested by him",
          "Never send a non-delivery notification (NDN) message to the sender. The sender to verify if the message was received"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "On what wave band does the search and rescue radar transponder operate?",
        "options": [
          "8 GHz",
          "9 GHz",
          "2182kHz",
          "6 GHz"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "A ship equipped to sail in sea area A2 has at least:",
        "options": [
          "A HF radio telephony installation",
          "A MF radiotelex installation",
          "A MF radiotelephony installation",
          "A MF radio telephony installation and MF radiotelex installation"
        ],
        "correctIndex": 2,
        "image": "images/image30.jpg"
      },
      {
        "question": "Which media are used to receive MSI?",
        "options": [
          "SafetyNET.",
          "All of the mentioned alternatives",
          "NAVTEX",
          "HF NBDP."
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "A SART must be visible on the ship's radar from a distance of at least:",
        "options": [
          "30 miles",
          "10 miles",
          "5 miles",
          "50 miles"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "A « MRCC » is :",
        "options": [
          "A coast station",
          "The master of a merchant ship who coordinates on scene search and rescue operations",
          "A search and rescue coodination centre",
          "The master of a SAR unit which coordinates on search and rescue"
        ],
        "correctIndex": 2,
        "image": "images/image19.jpg"
      },
      {
        "question": "The frequency 156,8 MHz is used for :",
        "options": [
          "SARSAT COSPAS EPIRBs",
          "VHF channel 16",
          "NAVTEX",
          "DSC calls"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "On which channel must a ship maintain a continuous watch when sailing in area A1?",
        "options": [
          "2187.5",
          "70",
          "13",
          "2182"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "\"RECEIVED MAYDAY\" is used in a:",
        "options": [
          "Receipt of a distress alert",
          "Supplementary receipt on a distress alert",
          "When received a weather report",
          "Distress alert"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "What ships does GMDSS apply to?",
        "options": [
          "All ships covered by Chapter IV of SOLAS I.e. all cargo ships of 300GRT and above and all passenger ships on International voyages",
          "Applies to tankers of 1599grt and above and all passenger ships trading either coastwise or internationally",
          "All vessels above 800GRT on International voyages",
          "All vessels trading beyond national waters"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "On area A3 the function \"Reception of shore to ship distress alerts\" is mainly based on:",
        "options": [
          "The use of MF DSC and INMARSAT C SAFETYNET",
          "The use of SARSAT COSPAS Epirbs and NAVTEX",
          "The use of VHF DSC and NAVTEX",
          "The use of HF DSC and INMARSAT C SAFETYNET"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 1-100",
    "questions": [
      {
        "question": "You are in an area of restricted visibility and hear this signal. It is repeated at two minute intervals. What does it indicate?",
        "options": [
          "That there is another vessel nearby, that is underway and making way through the water",
          "That there is another vessel nearby, that is at anchor",
          "That there is another vessel in the vicinity that has just altered course to port",
          "That there is another vessel nearby, that is underway, but stopped and making no way through the water"
        ],
        "correctIndex": 3,
        "image": "images/image489.jpg"
      },
      {
        "question": "Which plan shows the position of the vertical and longitudinal centres of gravity for each cargo compartment of a Bulk Carrier?",
        "options": [
          "Line drawing",
          "Shell expansion",
          "Capacity Plan",
          "Vessel stability book"
        ],
        "correctIndex": 3,
        "image": "images/image834.jpg"
      },
      {
        "question": "Which class of emission is used for VHF DSC transmissions ?",
        "options": [
          "J3E",
          "G3E",
          "G2B",
          "J2B"
        ],
        "correctIndex": 2,
        "image": "images/image10.jpg"
      },
      {
        "question": "What is most important for crew members when preparing for emergencies?",
        "options": [
          "That people listen to orders given",
          "That people know where to muster",
          "That people know where to find designated equipment",
          "That people are well trained"
        ],
        "correctIndex": 3,
        "image": "images/image54.jpg"
      },
      {
        "question": "What is essential to ensure that efficient stripping of ballast tanks on a Bulk Carrier can be achieved?",
        "options": [
          "A trim by the bow is required",
          "A good stern trim is maintained during de- ballasting operations",
          "The trim of the vessel is not important",
          "The vessel must be maintained at an even keel"
        ],
        "correctIndex": 1,
        "image": "images/image829.jpg"
      },
      {
        "question": "\" On area A4 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "The use of SARSAT COSPAS Epirbs",
          "The use of SART transponders",
          "The use of MF DSC",
          "The use of HF DSC"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The PTT-switch must be:",
        "options": [
          "Pressed in constantly to work simplex",
          "Pressed in during speaking only to work semi-duplex",
          "Pressed to listen",
          "Pressed in during speaking only to work duplex"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "When a character in the NAVTEX message sent is not received in the proper way:",
        "options": [
          "Nothing or a special character will be printed",
          "the message will not be printed at all until, with repeated transmission, it can be automatically compared and corrected",
          "Any other character will be printed",
          "A closely resembling character will be printed"
        ],
        "correctIndex": 0,
        "image": "images/image20.jpg"
      },
      {
        "question": "How is a vessel's navigational safety maintained when sailing between ports?",
        "options": [
          "Using an ECDIS as the main source of navigation",
          "Having an effective passage plan followed by the bridge team",
          "Having the vessel guided by a VTS operation",
          "Only using traditional navigational techniques"
        ],
        "correctIndex": 1,
        "image": "images/image535.jpg"
      },
      {
        "question": "What is the main theme of modern safety practice?",
        "options": [
          "Health & Safety at Work Act",
          "Use the same practice that has been in place for some time",
          "Making use of Risk Assessment as a means to improving safety",
          "Consult the chief officer before commencing work"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "Who is the leader of the lifeboat drill (abandon ship drill)?",
        "options": [
          "The appointed lifeboat commander.",
          "Sen.Off.Deck.",
          "The first member of the crew arriving at the survival craft.",
          "Sen.Off.Engine."
        ],
        "correctIndex": 0,
        "image": "images/image120.jpg"
      },
      {
        "question": "The steps of the embarkation ladder used must be proportioned as it follows:",
        "options": [
          "length = 480 mm, breadth = 115 mm, depth = 25 mm",
          "length = 380 mm, breadth = 145 mm, depth = 20 mm",
          "length = 280 mm, breadth = 85 mm, depth = 10 mm",
          "length = 580 mm, breadth = 165 mm, depth = 30 mm"
        ],
        "correctIndex": 0,
        "image": "images/image65.jpg"
      },
      {
        "question": "Why is it important to have good relationship on-board a vessel?",
        "options": [
          "It encourages crew to extend their contract",
          "Crew comes to know each others problems",
          "It will prevent accidents from happening",
          "It leads to better work performance and positive atmosphere among the crew"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which organisation verifies the computational results and stored ship data used by the stability program loaded on a vessel's computer?",
        "options": [
          "The engineer attending the installation and initial on-site testing.",
          "The master.",
          "The manufacturer.",
          "The Classification Society."
        ],
        "correctIndex": 3,
        "image": "images/image545.jpg"
      },
      {
        "question": "What type of dynamic forces may cause indent in plating on forecastle deck and main deck in way of pillars inside forecastle?",
        "options": [
          "Forces created by waves on the forecastle",
          "Impact pressure forces in way of abrupt or flared bow",
          "Pressure forces caused by green water on deck",
          "Slamming in way of flat bottom forward of light draught"
        ],
        "correctIndex": 2,
        "image": "images/image247.jpg"
      },
      {
        "question": "What is the minimum number of portable two way VHF walkie talkies for use in survival craft, that should be carried onboard vessels which comply with GMDSS regulations?",
        "options": [
          "3 sets",
          "There is no requirement to carry them.",
          "2 sets",
          "1 set"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "A heavy metal concentrate bulk cargo has a moisture content of 16 and a transportable moisture limit of 18, what should the Master do?",
        "options": [
          "Seek advice from charterers and owners",
          "Request additional moisture tests to be done",
          "Load the cargo as the moisture content is within acceptable limits",
          "Refuse to load the cargo as the moisture content is outside acceptable limits"
        ],
        "correctIndex": 2,
        "image": "images/image835.jpg"
      },
      {
        "question": "What is the purpose of a draught survey before and after loading on a Bulk Carrier?",
        "options": [
          "To calculate the deadweight of the vessel",
          "The calculate the stability of the vessel",
          "To calculate light displacement of the vessel",
          "To ascertain the actual weight of cargo loaded"
        ],
        "correctIndex": 3,
        "image": "images/image659.jpg"
      },
      {
        "question": "Your watchkeeper has just informed you that the vessel has collided with a sailing vessel. What action should be taken?",
        "options": [
          "Tell the watchkeeper to sort out the problem",
          "Alarm the rescue centre and commence searching for survivors",
          "Call the company, explain the situation and ask for instructions",
          "Tell the watchkeeper to proceed on passage"
        ],
        "correctIndex": 1,
        "image": "images/image295.jpg"
      },
      {
        "question": "The high level water ingress alarm in number 1 hold of a Bulk Carrier activates in bad weather at sea; what would be the actions of a prudent Master?",
        "options": [
          "Assess all spaces for signs of damage if weather conditions permit",
          "Investigate when the weather improves",
          "Sound general alarm, muster ships crew and transmit a Mayday call and message.",
          "The alarms could be faulty and should be ignored"
        ],
        "correctIndex": 2,
        "image": "images/image831.jpg"
      },
      {
        "question": "What is the best way to avoid pollution from small oil-spills aboard a ship?",
        "options": [
          "Contain any oil-spill onboard the ship",
          "Have dispersing chemicals ready for use in case of oil-spill",
          "Have sawdust ready for use",
          "Rig an oil boom around the ship"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "The receiver of the Inmarsat-C installation, if the log-in procedure has been carried out, is turned on:",
        "options": [
          "NCC information channel",
          "NCS common channel",
          "RCC common channel",
          "LES message channel"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "If for some reason a vessel does not comply with a Classification Society's requirements, what can a surveyor issue to the vessel enabling it to sail to the next port or for a period of time?",
        "options": [
          "A Notification of Detention.",
          "A Condition of Class.",
          "A Notification of Deficiency.",
          "A revised Class Notation."
        ],
        "correctIndex": 1,
        "image": "images/image543.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship sighting another ship in distress which is not itself in position to transmit a distress alert ?",
        "options": [
          "Distress call",
          "Distress relay call",
          "Safety call",
          "Urgent call"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "The portable walkie talkies required to be carried by GMDSS regulations should have which channels as a minimum?",
        "options": [
          "Channels 6 & 16",
          "Channels 13 & 16",
          "Channel 16 only",
          "Channels 6, 13 & 16"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "Why should a Ground Stabilised True Motion radar display not be used for anti-collision purposes?",
        "options": [
          "Because this display is only ever used for navigation",
          "The 'aspect' of the target is confused, so the Regulations for Preventing Collisions cannot be accurately applied",
          "True motion does not provide the collision risk of targets as only true vectors are available",
          "The true vector can never give an indication of collision risk with another ship"
        ],
        "correctIndex": 1,
        "image": "images/image487.jpg"
      },
      {
        "question": "The vessel is instructed to load alternate holds when chartered to carry a high density cargo. What reasons could be given by the master to refuse to do this?",
        "options": [
          "Cargo space cleaning after discharge will be excessive.",
          "IMO do not recommend alternate loading of cargo holds with high density cargoes.",
          "The trim of the vessel will not be satisfactory.",
          "The summer deadweight will not be achieved."
        ],
        "correctIndex": 1,
        "image": "images/image828.jpg"
      },
      {
        "question": "Which of these statements about drug smugglers modes of operating is true?",
        "options": [
          "Drugs hidden by individual entrepreneurs are usually difficult to detect.",
          "\"Drugs smuggled by an organized conspiracy are usually concealed in a primary ship system such as the engine room or in a tank, void or compartment.\"",
          "An organized conspiracy usually smuggles a small amount of drugs.",
          "Individual entrepreneurs usually smuggle large quantities of drugs."
        ],
        "correctIndex": 1,
        "image": "images/image138.jpg"
      },
      {
        "question": "Which of the following items must be included in each fire drill?",
        "options": [
          "Checking fireman's outfits and other personal rescue equipment",
          "Starting a fire pump using at least two required jets of water to show that the system is in proper working order",
          "Reporting to stations and preparing for the duties described in the muster list",
          "All the items mentioned"
        ],
        "correctIndex": 3,
        "image": "images/image249.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "The use of SART transponders",
          "The use of VHF DSC",
          "The use of MF and/or VHF R/T",
          "The use of MF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image19.jpg"
      },
      {
        "question": "On a ship involved in a collision, what should happen immediately after the accident has taken place?",
        "options": [
          "The other ship should be contacted",
          "The master should be called",
          "Crew should follow an emergency procedure",
          "The bridge team should devise a plan of action"
        ],
        "correctIndex": 2,
        "image": "images/image577.jpg"
      },
      {
        "question": "How is a Safety Management Certificate obtained?",
        "options": [
          "Vessel is surveyed by MCA and certificate issued",
          "Ship owner is authorised to carry out internal audits and issue SMC",
          "Ship owner has Document of Compliance issued, and vessel is assessed and holds all statutory certificates",
          "RSS issue SMC with Register"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "Which of the following requirements to ships stability for normal operation corresponds to present regulations? (NSCL 4/12.2)",
        "options": [
          "Unless otherwise stated in the approved stability calculation, the total weight of the deck cargo shall not exceed 50 metric tons.",
          "Centre of gravity shall be calculated with accuracy better than 5 percent.",
          "In waters with the danger of icing, loading of deck cargo must be approved by competent authority.",
          "The ship is loaded in such a manner that adequate stability is achieved in all loading condition."
        ],
        "correctIndex": 3,
        "image": "images/image180.jpg"
      },
      {
        "question": "As per IMDG Code, the main criteria for drawing up classes for safe handling of hazardous substancesis on the basis of:",
        "options": [
          "Chronological order in which they have been assessed.",
          "The type of hazard they present.",
          "Alphabetical order.",
          "Selective laboratory tests commissioned by the Committee."
        ],
        "correctIndex": 1,
        "image": "images/image513.jpg"
      },
      {
        "question": "Your vessel is involved in a collision with another vessel. What should you as Master tell the Master on the other vessel?",
        "options": [
          "That their actions were totally wrong and it is their fault",
          "Explain your actions prior to the collision and request details of actions taken by the other vessel which resulted in the collision",
          "Name of vessel; IMO number; Port of registry; Port of destination of your vessel",
          "There should be no communication with the other vessel"
        ],
        "correctIndex": 2,
        "image": "images/image295.jpg"
      },
      {
        "question": "A bulk cargo is loaded and the cargo stow has been left with an excessive peak height; what could be the result of this situation?",
        "options": [
          "Excessive stresses on transverse bulkheads",
          "Excessive cargo sweat",
          "Damage to hatch covers",
          "Excessive stresses on tank top"
        ],
        "correctIndex": 3,
        "image": "images/image834.jpg"
      },
      {
        "question": "*As far as human factor is concerned, which of the following actions should be considered as an efficient one?",
        "options": [
          "All the listed answers",
          "To establish inner rules to perform work of a special risk",
          "To train the fire brigade",
          "To equip them with better communication systems"
        ],
        "correctIndex": 0,
        "image": "images/image55.jpg"
      },
      {
        "question": "When planning to cross an ocean, is it always best to use great circle sailing?",
        "options": [
          "No - because a Mercator course is more efficient, less distance and easier to follow",
          "No - because there could be environmental or regulatory restrictions",
          "Yes - because it is the easiest sailing to compute and then follow",
          "Yes - because an ECDIS in track control will do the computation and steer the route"
        ],
        "correctIndex": 1,
        "image": "images/image247.jpg"
      },
      {
        "question": "The majority of convensions adopted under the auspices of IMO fall into which of the three main categories:",
        "options": [
          "Maritime Safety, Prevention of Marine pollution, Liability and compensation",
          "Safety, Terrorism, ILO",
          "There are no conentions that fall under IMO",
          "Maritime Safety, STCW, Maritime Security"
        ],
        "correctIndex": 0,
        "image": "images/image161.jpg"
      },
      {
        "question": "A tug is connected to the bow of a vessel. Will the force exerted by it be the same at any ahead speed?",
        "options": [
          "No, when the ahead speed of the ship increases the force exerted by the tug will also increase",
          "Yes, because when moving ahead a tug can use indirect towing methods",
          "No, on the bow the tug uses power to run with the vessel, which reduces the available power on the towline",
          "Yes, the force would normally be expected to be the same at any speed of the ship"
        ],
        "correctIndex": 2,
        "image": "images/image546.jpg"
      },
      {
        "question": "What action should be taken by the Officer of the Watch if someone reports a fire to them?",
        "options": [
          "Call the Master",
          "Sound the Fire Alarm",
          "Stop engines and inform the engine room",
          "Send the bridge look-out down to investigate"
        ],
        "correctIndex": 1,
        "image": "images/image590.jpg"
      },
      {
        "question": "Which of the following is a warning sign of a faulty hydraulic hatch cover system on a Bulk Carrier?",
        "options": [
          "Dry greasing points",
          "The presence of dust and cargo particles around the piston gland",
          "Noisy hatch cover operations",
          "A fall in the hydraulic header tank level"
        ],
        "correctIndex": 3,
        "image": "images/image835.jpg"
      },
      {
        "question": "What is the maximum period between the sampling/testing of the moisture content of a solid bulk cargo and the loading of that cargo into a bulk carrier?",
        "options": [
          "A test is not required each time of loading",
          "Testing must be carried out on a random sampling basis.",
          "It must always be conducted immediately before loading",
          "A maximum for seven (7) days, when there has been no change in the moisture content due to rain or snow"
        ],
        "correctIndex": 3,
        "image": "images/image835.jpg"
      },
      {
        "question": "By \"collect call\" is meant:",
        "options": [
          "A call to collect the charges in office",
          "A group call",
          "A call for account of the receiver",
          "An urgent call"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Distress MF communications should normally be operated :",
        "options": [
          "In J3E mode – on duplex basis",
          "In J3E mode – on simplex basis",
          "In G3E mode – on simplex basis",
          "In G3E mode – on duplex basis"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "On board a DSC-call is to be made in case of an OBS. Choose the category:",
        "options": [
          "Ship's business",
          "Routine",
          "Safety",
          "Urgency"
        ],
        "correctIndex": 1,
        "image": "images/image10.jpg"
      },
      {
        "question": "How should mild steel slabs be loaded in a bulk carrier?",
        "options": [
          "Interlocked up to the hopper tank plating with the longitudinal axes fore and aft",
          "Interlocked across the entire cargo hold with the longitudinal axes fore and aft",
          "Interlocked across the entire cargo hold with the longitudinal axes athwartships",
          "Interlocked up to the hopper tank plating with the longitudinal axes athwartships"
        ],
        "correctIndex": 2,
        "image": "images/image815.jpg"
      },
      {
        "question": "The compensation payment by the charterer that is due when a vessel is unable to load / discharge her cargo within the allowed and contracted time is referred to as:",
        "options": [
          "Deferment.",
          "Demurrage.",
          "Discretion.",
          "Contractual penalty discount."
        ],
        "correctIndex": 1,
        "image": "images/image36.jpg"
      },
      {
        "question": "Which option best describes what target fusion is on an ECDIS?",
        "options": [
          "The discrepancy between radar and AIS displayed positions.",
          "Bringing together a displayed radar return and AIS target",
          "When a target's AIS signal has a large error on it",
          "When two adjacent AIS targets come together"
        ],
        "correctIndex": 1
      },
      {
        "question": "What must be ensured, prior to receiving a bulk cargo of iron ore on a Bulk Carrier?",
        "options": [
          "Cargo hold paintwork must be intact",
          "Cargo hold bilge suctions must be satisfactorily tested",
          "Cargo hold tank tops must be pressure-tested",
          "Cargo hold ventilation systems must be satisfactorily tested"
        ],
        "correctIndex": 1,
        "image": "images/image836.jpg"
      },
      {
        "question": "Why do bulk cargo carriers need to carry oxygen analysis and gas detection equipment?",
        "options": [
          "Because of enclosed or confined space entry requirements",
          "Because it is good practice to have this equipment on board",
          "Because the equipment is required under the International Maritime Solid Bulk Cargoes (IMSBC) Code",
          "Because the equipment is required under MARPOL"
        ],
        "correctIndex": 0,
        "image": "images/image826.jpg"
      },
      {
        "question": "How many square metres does the IAMSAR Volume 3 manual suggest may be calmed by releasing 200 litres of lubricating oil slowly through a rubber hose with the outlet maintained just above the surface while the ship proceeds at slow speed?",
        "options": [
          "Approx 5,000 square metres",
          "Approx 500 square metres",
          "Approx 50,000 square metres",
          "Approx 50 square metres"
        ],
        "correctIndex": 0,
        "image": "images/image524.jpg"
      },
      {
        "question": "If the shipper wishes to ensure that a vessel or her operators will not be held responsible for any damage that may arise from the carrier issuing a clean Bill of Lading, even though the Mate's receipt is marked as \"unclean\", such a document is called the:",
        "options": [
          "An absolution clause in the shipping documents.",
          "A Letter of Indemnity.",
          "A Letter of Credit.",
          "An addendum to the Bill of Lading."
        ],
        "correctIndex": 1,
        "image": "images/image574.jpg"
      },
      {
        "question": "Which word will precede a routine message ?",
        "options": [
          "MAYDAY",
          "ROUTINE",
          "PAN PAN",
          "No specific word will precede a routine message"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "In the Inmarsat Maritime Communications Handbook one can find information about:",
        "options": [
          "Numbers of fax subscribers",
          "Ship's Inmarsat Id's",
          "Radio telex commands",
          "2 digit code telex services"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "For a search to be effective it must be:",
        "options": [
          "Centrally controlled.",
          "Organized haphazardly.",
          "Conducted by personnel with limited knowledge of the ship's layout.",
          "Inclusive of all personnel."
        ],
        "correctIndex": 0,
        "image": "images/image59.jpg"
      },
      {
        "question": "For which of the following ships, is the MARPOL convention applicable?",
        "options": [
          "For all vessels except passenger vessels.",
          "For all listed vessels.",
          "For all vessels except those engaged in coastal trade.",
          "For tankers and other vessels carrying persistent oil as cargo."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "When manoeuvring a conventional ship, if the engine is stopped with the rudder hard over what happens to the rudder turning force?",
        "options": [
          "It stays the same as the rudder angle is unchanged",
          "It may increase due to a better laminar flow on the rudder",
          "Anything might happen as it depends upon the type of specialised rudder fitted",
          "It is reduced because of the reduced water acting on the rudder"
        ],
        "correctIndex": 3,
        "image": "images/image520.jpg"
      },
      {
        "question": "How frequently should reports from protection and environmental work be sent to shore based management?",
        "options": [
          "Annually.",
          "Not mandatory to send reports.",
          "Biannually.",
          "Every three years."
        ],
        "correctIndex": 0,
        "image": "images/image157.jpg"
      },
      {
        "question": "A bulk cargo has a stowage factor (S.F) of 1.50 cubic metres per metric tonne (m3/mt). If 1000 tonnes are to be loaded what volume will this cargo occupy?",
        "options": [
          "1000 cubic metres",
          "15000 cubic metres (m3)",
          "1500 cubic metres ( m3)",
          "3000 tonnes"
        ],
        "correctIndex": 2,
        "image": "images/image835.jpg"
      },
      {
        "question": "As per the IMDG Code, 'Marine Pollutant' is defined as:\"",
        "options": [
          "Any substance which is deemed hazardous to the marine environment.",
          "A substance which is subject to the provisions of Chapter V of SOLAS 1974, as amended.",
          "A substance which is subject to the provisions of Annex III of MARPOL.",
          "A substance which, because of its tendency to degrade in seafood, or because of its hazard potential to the aquatic environment is subject to the provisions of Annex I of MARPOL, as amended, and carried by sea accordingly."
        ],
        "correctIndex": 2,
        "image": "images/image542.jpg"
      },
      {
        "question": "A rocket parachute flare reaches an altitude of",
        "options": [
          "not less than 300m",
          "not less than 40m",
          "not less than 450m",
          "not less than 180m"
        ],
        "correctIndex": 0,
        "image": "images/image236.jpg"
      },
      {
        "question": "Which of the following would normally only be found in cargo holds which can also be used for ballast on a Bulk Carrier?",
        "options": [
          "Bilges systems fitted with two way valves",
          "Permanently fitted dunnage",
          "Light reflective paint coatings and fixed lighting systems",
          "Sacrificial anodes and water resistant expoxy paint coatings"
        ],
        "correctIndex": 3,
        "image": "images/image835.jpg"
      },
      {
        "question": "How often should the lifeboat wire falls be turned and renewed?",
        "options": [
          "Turned every 30 months and needs only to be renewed if the wire is in poor condition",
          "Turned every 2 years and renewed every 4 years",
          "Turned at intervals of not more than 30 months and renewed every 5 years",
          "Renewed every three years"
        ],
        "correctIndex": 2,
        "image": "images/image79.jpg"
      },
      {
        "question": "You wish to send a DSC-message because of a m.o.b. situation and assistance by other ships is required. You have to choose the category:",
        "options": [
          "Distress",
          "Individual",
          "Urgency",
          "Safety"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "The good operation in any location, whether the NAVTEX is working properly or not, can be checked using:",
        "options": [
          "A company test procedure",
          "A testing program built in for this purpose",
          "Test transmissions specially broadcast for this purpose once a week",
          "A compulsory built-in alarm for defects"
        ],
        "correctIndex": 1,
        "image": "images/image20.jpg"
      },
      {
        "question": "Is there any special area under MARPOL where it is forbidden to pump out any sludge or oil residues?",
        "options": [
          "There are special areas where it is forbidden to pump out any sludge or oil residues",
          "There are 4 special areas: the Baltic Sea, Mediterranean Sea, Red Sea and Black Sea where it is forbidden to pump out any sludge or oil residues",
          "There isn't any special area where it is forbidden to pump out any sludge or oil residues",
          "There are 3 special areas: the Baltic Sea, Mediterranean Sea, and Black Sea where it is forbidden to pump out any sludge or oil residues"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "You are on a power-driven vessel underway in open water. You sight these lights on the port bow, on a steady bearing. The distance is closing. What are you looking at and what action will you take in compliance with the International Regulations for Preventing Collision at Sea?",
        "options": [
          "This is a power-driven vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres and the tow, both being restricted in their ability to manoeuvre, seen from the starboard side. Under rule 18, I am required to keep clear and will take appropriate avoiding action",
          "This is a power-driven vessel engaged in towing, more than 50 metres in length or less than 50 metres in length and showing a second masthead light and the tow, the combined length of which is under 200 metres. The towing vessel is restricted in her ability to manoeuvre. I am seeing their starboard sides. The bearing is steady and risk of collision therefore exists. I will maintain my course and speed under rule 17",
          "This is a power-driven vessel engaged in towing, more than 50 metres in length or less than 50 metres in length and showing a second masthead light, length of tow 200 metres or more, not under command. I will keep clear under rule 27",
          "This is a power-driven vessel, more than 50 metres in length or less than 50 metres in length and showing a second masthead light, restricted in her ability to manoeuvre. The sidelight of a second vessel can be seen beyond her. Under rule 18, I am obliged to keep clear of the first vessel and will therefore take appropriate avoiding action"
        ],
        "correctIndex": 0,
        "image": "images/image549.jpg"
      },
      {
        "question": "A bulk cargo of Coal is to be loaded in Australia for Europe; the coal is declared as having a high moisture content (but less than the transportable moisture Limit (TML)); what must the Master ensure?",
        "options": [
          "The bilges must be pumped out regularly",
          "The bilges must not be pumped out",
          "All cargo hold bilges are sounded daily and the amount of water logged; the bilges can then be pumped out.",
          "The bilges should have been sealed prior to loading"
        ],
        "correctIndex": 2,
        "image": "images/image832.jpg"
      },
      {
        "question": "A cargo hatch cover seal on a Bulk Carrier is known to be damaged and not weather tight prior to sailing; what is the legal significance of this situation?",
        "options": [
          "There are no legal concerns over this",
          "The vessel may well be judged to be un-seaworthy; this could invalidate some certification and hull and machinery insurance",
          "The vessel may have its classification affected",
          "The vessel is still seaworthy but repairs must be carried out at next port"
        ],
        "correctIndex": 1,
        "image": "images/image830.jpg"
      },
      {
        "question": "When onboard channel 16 is used for a shore radio-connection, you always work:",
        "options": [
          "Duplex",
          "Semi-duplex",
          "Simplex",
          "On low power"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "In what language/languages must the fire control plans or booklets (or copies of these) be written?",
        "options": [
          "In the Flag State official language with copies in English or French",
          "In the Flag State official language",
          "In the English language",
          "In a national language where company head office is located"
        ],
        "correctIndex": 0,
        "image": "images/image55.jpg"
      },
      {
        "question": "To maintain good relationship among the crew on board a vessel, one must be:",
        "options": [
          "Give authority to others",
          "Understanding, Co-operative, and have respect from both sides",
          "Strict and authoritative while giving orders",
          "Polite and diplomatic while talking to crew members"
        ],
        "correctIndex": 1,
        "image": "images/image239.jpg"
      },
      {
        "question": "A battery of 24 Volt supplies during 10 hours a current of 6 ampere. What is the capacity supplied:",
        "options": [
          "144 Ah",
          "240 Ah",
          "60 Ah",
          "48 Ah"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "You are a Senior Officer of the Watch on vessel \"A\" and are passing through the Straits of Gibraltar. The vessel's speed is 18 knots and your vessel is overtaking several other vessels, when the visibility reduces down to about 2 nm. What aspects would you consider when establishing a \"safe speed\" for your vessel?",
        "options": [
          "Deciding safe speed consider: 2 miles visibility; traffic density; manoeuvrability of vessel; effectiveness of navigational equipment (ARPA etc); state of sea and currents and navigational hazards.",
          "A safe speed is where a vessel can take proper and effective action to avoid collision and be stopped within an appropriate distance",
          "Safe speed should be where the vessel can come to a stop within the visible range",
          "Adjust my track to follow Route 1 or 2 illustrated and reduce speed down to half speed, approximately 8 knots"
        ],
        "correctIndex": 0,
        "image": "images/image526.jpg"
      },
      {
        "question": "What do you understand by the term \"Risk Assessment\", and how would this be carried out on board?",
        "options": [
          "Identify the hazards, quantify the risks, put control measures in place, monitor the work activity and review",
          "Requires a great deal of preparation and involves recording everything on paper",
          "States than when work has a degree of risk that the work is not carried out",
          "Identify the hazards and specify the personal protective equipment that would be required to complete the work"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "A SART is used by a vessel in distress. This SART is seen on the screen of a:",
        "options": [
          "Both 3 Cm and 10 Cm radar",
          "10 Cm radar",
          "3 Cm radar",
          "Special radar"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "What device can be used by a tug to get a line aboard a disabled vessel in bad weather, when it is dangerous for the tug to get too close?",
        "options": [
          "A rocket line",
          "A missile line",
          "A cannon line",
          "A heaving line"
        ],
        "correctIndex": 0,
        "image": "images/image199.jpg"
      },
      {
        "question": "How often must the Emergency Steering Gear be tested, and how is this information recorded in the OLB?",
        "options": [
          "Monthly, with signature of Chief Engineer and witness.",
          "Monthly with signature of person carrying out test",
          "Fortnightly, with signature of Chief Engineer and witness",
          "Every three months. Details of test with signatures of Master and witness"
        ],
        "correctIndex": 3,
        "image": "images/image52.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of portable VHF",
          "The use of VHF DSC",
          "The use of SART transponders",
          "The use of HF DSC"
        ],
        "correctIndex": 1,
        "image": "images/image10.jpg"
      },
      {
        "question": "On board they want to send a safety-call to other vessels. The DSC safety-call:",
        "options": [
          "May contain a work-frequency",
          "May not contain a work-frequency",
          "Has to contain a work-frequency",
          "Will automatically send the correct working frequency"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "At what calendar interval is a class renewal/Special Survey required?",
        "options": [
          "Annually.",
          "5 years.",
          "At 20 years and every five years thereafter.",
          "Every 2 1/2 years."
        ],
        "correctIndex": 1,
        "image": "images/image541.jpg"
      },
      {
        "question": "The pyrotechnics used to transmit visual signals to other vessels, boats or aircrafts are of the following type",
        "options": [
          "All of the below mentioned",
          "Buoyant smoke signal",
          "Rocket parachute flare",
          "Hand flare"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision and has developed a list. After sounding the general alarm and informing others of the situation, what other immediate steps should be taken?",
        "options": [
          "Prepare for abandoning ship keeping all parties informed of the situation",
          "All of the options",
          "Assess the compartments flooded to determine the remaining stability",
          "Start discharging water using all available means. Monitor water ingress and any increase of draft or list to determine if the situation has stabilised"
        ],
        "correctIndex": 1,
        "image": "images/image34.jpg"
      },
      {
        "question": "What governs the disposal of dry bulk cargo residues at sea?",
        "options": [
          "Convention on the Prevention of Marine Pollution by Dumping of Wastes and Other Matter",
          "MARPOL regulations",
          "The Code of Safe Practice for Solid Bulk Cargoes",
          "SOLAS 74/88 regulations"
        ],
        "correctIndex": 1,
        "image": "images/image816.jpg"
      },
      {
        "question": "The MF/HF-transceiver on board is tuned to the assigned frequency of a station. To make this connection the following mode is used:",
        "options": [
          "J2B",
          "G3E",
          "H3E",
          "J3E"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "After discharging a high density cargo a serious crack is found in an upper ballast tank amidships of a Bulk Carrier; what must the Master do?",
        "options": [
          "Inform Designated Person Ashore (DPA) and call in Classification Society",
          "Note the dimensions of the crack and measure regularly",
          "Proceed on ballast voyage without ballast in this tank",
          "Repair with cement box or temporary welded patch until next drydock"
        ],
        "correctIndex": 0,
        "image": "images/image802.jpg"
      },
      {
        "question": "Dish aerials are used with:",
        "options": [
          "Inmarsat - B and –M",
          "None of the mentioned",
          "Inmarsat –C and –M",
          "Inmarsat –A and –C"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of these covers the rules and regulations for General Average on a Bulk Carrier?",
        "options": [
          "The York Antwerp rules",
          "The Hague Visby rules",
          "The Hamburg rules",
          "The Hague rules"
        ],
        "correctIndex": 0,
        "image": "images/image802.jpg"
      },
      {
        "question": "When conducting a risk assessment for a shipboard work activity, the two elements to be considered are:",
        "options": [
          "The chance of an incident re-occurring and the potential effects of an loss.",
          "The time available to complete the task and the resources to hand.",
          "The available manpower and their experience in this type of work.",
          "The potential severity of harm and the likelihood that harm will occur."
        ],
        "correctIndex": 3,
        "image": "images/image299.jpg"
      },
      {
        "question": "What height of water above the inner bottom will activate the cargo hold high level alarm on a Bulk Carrier",
        "options": [
          "Any more than 2.5m",
          "Any more than 2.2m",
          "Any more than 2.8m",
          "Any height above 2.0m"
        ],
        "correctIndex": 3,
        "image": "images/image826.jpg"
      },
      {
        "question": "In a single side skin bulk carrier of 180m in length constructed in 2001 and carrying cargo of density 1,780 kg/m3, or above, which cargo hold is strengthened to withstand flooding?",
        "options": [
          "The ballast hold",
          "The foremost cargo hold",
          "The aftermost cargo hold",
          "The midships cargo hold"
        ],
        "correctIndex": 1,
        "image": "images/image826.jpg"
      },
      {
        "question": "Master of every ship must provide:",
        "options": [
          "the training during crews working hours only",
          "Facilities to conduct training whenever required by the training officer",
          "A link between the shipboard training officer and the company training officer ashore",
          "Proper rest to the crew after each training programme"
        ],
        "correctIndex": 2,
        "image": "images/image254.jpg"
      },
      {
        "question": "Your vessel is towing an unmanned barge and restricted in its ability to manoeuvre. The total length of the tow is 800 metres. What daylight signals are required by the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "Three shapes shall be displayed forward on the tug, in a vertical line, the upper and lower being balls and the middle one a diamond",
          "A diamond shape, where it can best be seen, on the tug only. Three shapes shall also be displayed, being three balls in a vertical line",
          "A diamond shape, where it can best be seen shall be displayed on the tug and the tow. Three shapes shall also be displayed in a vertical line, the upper and lower being balls and the middle one a diamond",
          "Three shapes shall be displayed on the tug, where they can best be seen, in a vertical line, the upper and lower being balls and the middle one a cylinder. The signal flag \"T\" shall also be flown on the tug. A diamond shall be displayed aft on the tow"
        ],
        "correctIndex": 2,
        "image": "images/image588.jpg"
      },
      {
        "question": "What is the name of the reference manual, jointly produced by the International Maritime Organization and the International Civil Aviation Authority, which currently outlines the organization and management of search and rescue activities at sea?",
        "options": [
          "The Internation Maritime Search and Rescue (IMARSAR) Manual",
          "The Search and Rescue (IMOSAR) Manual",
          "The International Aeronautical and Maritime Search and Rescue (IAMSAR) Manual",
          "The Merchant Ship Search and Rescue (MERSAR) Manual"
        ],
        "correctIndex": 2,
        "image": "images/image527.jpg"
      },
      {
        "question": "When should a master agree to accept a bulk cargo of concentrates?",
        "options": [
          "When he is fully satisfied that the actual moisture content of the cargo is less than the Transportable Moisture Limit (TML)",
          "After a laboratory analysis of the cargo has been carried out",
          "Once the actual moisture content of the cargo has been declared by the shipper",
          "As soon as the cargo holds have been passed for loading"
        ],
        "correctIndex": 0,
        "image": "images/image844.jpg"
      },
      {
        "question": "Poster or signs shall be provided on or in the vicinity of survival craft and their launching controls. Which one of the following requirements has to be included?",
        "options": [
          "Give information on survival craft speed and seaworthiness",
          "Give an overview of location of all lifesaving appliances",
          "Give relevant instructions and warnings",
          "Give information on survival craft capacity"
        ],
        "correctIndex": 2,
        "image": "images/image50.jpg"
      },
      {
        "question": "What factors should influence the speed set on a vessel when connecting up a tug?",
        "options": [
          "It is best to stop the vessel completely before connecting, so there should be no speed",
          "The type of tug and the size of its towline",
          "The type of tug and its desired position on the vessel",
          "The location of the vessel and the type of fairleads that it has"
        ],
        "correctIndex": 2,
        "image": "images/image555.jpg"
      },
      {
        "question": "Only search vehicle compartments where you suspect objects may be hidden.",
        "options": [
          "FALSE",
          "TRUE",
          ".",
          "."
        ],
        "correctIndex": 0,
        "image": "images/image75.jpg"
      },
      {
        "question": "What is the period of validity of the Safety Management Certificate",
        "options": [
          "1 Year",
          "6 months",
          "2 years",
          "5 years"
        ],
        "correctIndex": 3,
        "image": "images/image52.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 101-200",
    "questions": [
      {
        "question": "A bulk coal cargo is to be loaded and the moisture content is declared as 19 ; the transportable moisture limit of the cargo is declared as 15, what should the Master do?",
        "options": [
          "Refuse to load the cargo unless the vessel is specially designed for the carriage of cargo which may liquefy",
          "Load the cargo as the moisture limits are within acceptable limits",
          "Load part cargo only",
          "Load cargo and ventilate on passage to remove water"
        ],
        "correctIndex": 0,
        "image": "images/image833.jpg"
      },
      {
        "question": "New MARPOL regulations came into effect from July 93 stating that the oily water separator which was previously certified for 100 ppm be changed to:",
        "options": [
          "10 ppm",
          "50 ppm",
          "15 ppm",
          "25 ppm"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "What allowances should be applied to an echo sounder reading, to compare the depth of water with the depth shown on a chart?",
        "options": [
          "The distance between the pulse Transmitter and Receiver, if different",
          "Shallow water effects causing ground interaction",
          "A correction that should be applied to the charted depth value shown on the chart",
          "Position of transducer below the water surface and the height of tide"
        ],
        "correctIndex": 3,
        "image": "images/image487.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding life-saving appliances corresponds to present regulations?",
        "options": [
          "All prescribed life-saving appliances shall be fitted with the manufacturers name and Logo",
          "All prescribed life-saving appliances shall be of such a colour that they are in contrast to the surrounding colour",
          "All prescribed life-saving appliances shall have marking in red colour",
          "All prescribed life-saving appliances shall be made of non-combustible or fire retardant material"
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "Your vessel has been involved in a minor collision. What will your actions be following the collision?",
        "options": [
          "All of the answers are correct",
          "Call the Company DPO and the local state if close to the coast",
          "Make sure your vessel + crew are safe and then offer your assistance to the other vessel",
          "Continue the voyage to your destination monitoring for water ingress"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "MARPOL - Annex IV. Your ship has in operation an approved sewage treatment plant certified by the Administration. During discharge, while vessel is awaiting pilot off Cape Henry, USA, the surrounding water is discoloured. What kind of action would be appropriate to take?",
        "options": [
          "Continue discharge since the treatment plant is of an approved type.",
          "Stop discharge.",
          "Continue discharge since Annex IV of MARPOL is internationally not yet in force.",
          "Reduce discharge rate in order to have less discolouration of surrounding water."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "OPA-90 is referring to a Qualified Individual (QI)",
        "options": [
          "QI is representing the USCG",
          "QI is the owner's contingency leader",
          "QI is an authorised individual, situated in the US, and contracted by the owner or operator of the vessel",
          "An individual certified by USCG to handle oil spills"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "If one wants to transmit a weather report with an Inmarsat-C terminal one should use the following address:",
        "options": [
          "41",
          "OBS +",
          "Meteorological Center",
          "Sitrep"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "What percentage of the baggage is required to be checked at Security Level 1?",
        "options": [
          "100% of the baggage is required to be checked at Security Level 1.",
          "The percentage is not specified.",
          "25-50% of the baggage is required to be checked at Security Level 1.",
          "5-15% of the baggage is required to be checked at Security Level 1."
        ],
        "correctIndex": 1,
        "image": "images/image165.jpg"
      },
      {
        "question": "Who needs to be trained in the use of oxygen analysis and gas detection equipment?",
        "options": [
          "The Master and Chief Engineer",
          "The Master",
          "Cargo watch-keeping officers",
          "The entire ship's crew"
        ],
        "correctIndex": 3,
        "image": "images/image842.jpg"
      },
      {
        "question": "What actions should be taken by the Officer of the Watch if the ship's steering system totally fails?",
        "options": [
          "Call the Master and advise them of the situation",
          "Display the NUC signal and stop the engine(s)",
          "All of the suggested answers",
          "Request the engine room to check the steering system"
        ],
        "correctIndex": 2,
        "image": "images/image356.jpg"
      },
      {
        "question": "The word NAVTEX is spelled conform the international phonetic alphabet:",
        "options": [
          "November, Able, Valencia, Tripoli, Echo, Xantippe",
          "November, Anna, Victor, Tango, Eduard, X-ray",
          "November, Alfa, Victor, Tango, Echo, X-ray",
          "November, Apple, Victoria, Tango, Echo, X-mas"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of the following would be considered pollution, when discharged overboard, under the US water pollution laws?",
        "options": [
          "Oil",
          "Garbage",
          "All of the mentioned",
          "Hazardous substances"
        ],
        "correctIndex": 2,
        "image": "images/image57.jpg"
      },
      {
        "question": "The mandatory color of a hand flare is:",
        "options": [
          "Yellow",
          "Green",
          "White",
          "Red"
        ],
        "correctIndex": 3,
        "image": "images/image44.jpg"
      },
      {
        "question": "Which special regulations cover transportation of grain on a Bulk Carrier?",
        "options": [
          "IMO Grain Rules?",
          "Classification Society Rules?",
          "Statutory Regulations?",
          "Port State Regulations?"
        ],
        "correctIndex": 0,
        "image": "images/image837.jpg"
      },
      {
        "question": "What is the world-wide system operated by the US Coast Guard exclusively in support of search and rescue operations?",
        "options": [
          "The U.S. Command and Control Rescue (USCOMR) Service",
          "The Automated Mutual-Assistance Vessel Rescue (AMVER) System",
          "The International Search and Rescue Coordination System",
          "The Worldwide Maritime Mutual Assistance Programme (WMMAP)"
        ],
        "correctIndex": 1,
        "image": "images/image502.jpg"
      },
      {
        "question": "What must be specified when ordering gas detection equipment when used in association with bulk carriers?",
        "options": [
          "That the instrument can measure methane and hydrogen when used in low-oxygen atmospheres",
          "That the instrument is suited for its purpose of application",
          "That the instrument can measure flammable atmospheres",
          "That the instrument complies with international regulations"
        ],
        "correctIndex": 1,
        "image": "images/image835.jpg"
      },
      {
        "question": "What factors cause a vessel to squat when it is moving through water?",
        "options": [
          "There is a decrease in the water velocity and an increase of water pressure around the vessel's hull",
          "There is an increased effect of gravity due to closeness of the sea-bed",
          "There is a positive pressure field created ahead of the vessel and a negative one astern",
          "There is an increase in the water velocity and a decrease of water pressure around certain parts of the vessel's hull"
        ],
        "correctIndex": 3,
        "image": "images/image540.jpg"
      },
      {
        "question": "What are the extra benefits of sailing in an area with a well managed Vessel Traffic Services (VTS)?",
        "options": [
          "An increase in efficiency for ships participating in the VTS scheme",
          "An increase in the safety of all ships and the protection of the local environment",
          "Improve the scheduling and traffic movement in the area.",
          "Provide local information to all vessels navigating in the area"
        ],
        "correctIndex": 1,
        "image": "images/image505.jpg"
      },
      {
        "question": "Before a solid bulk cargo is loaded, the Master and shore representative must agree a loading plan which covers which of the following aspects?",
        "options": [
          "Sequence of loading",
          "All of the items specified in the possible answers",
          "Quantity and rate of loading the cargo",
          "Maximum permissible forces and moments on the ship"
        ],
        "correctIndex": 1,
        "image": "images/image826.jpg"
      },
      {
        "question": "For how long time should a COSPAS-SARSAT epirb be able to operate on its batteries ?",
        "options": [
          "96 hours",
          "48 hours",
          "12 hours",
          "24 hours"
        ],
        "correctIndex": 1,
        "image": "images/image15.jpg"
      },
      {
        "question": "How will you start a cancelling message after you send by mistake a distress call on your VHF DSC equipment",
        "options": [
          "\" PAN PAN - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "MAYDAY - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "\" All Stations - This is \"\"SAINT-ROMAIN\"\"\"\"",
          "\" SECURITE - All Stations - This is \"\"SAINT-ROMAIN\"\"\""
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "How many maintenance methods must be provided by ships sailing in area A1 and A2",
        "options": [
          "1",
          "3",
          "4",
          "2"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "This vessel is encountered at the mouth of a river. According to the International Regulations for Preventing Collisions and the illustrated shapes, what type of vessel is it?",
        "options": [
          "This is a vessel engaged in dredging or underwater operations. The two balls in a vertical line indicate the side on which it is safe to pass; the two diamonds in a vertical line indicate the side on which an obstruction exists; the ball / diamond / ball indicate that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged in mine-clearance opetrations. The two balls in a vertical line indicate that it has a sweep mechanism deployed; the two diamonds in a vertical line indicate that the vessel should be given a clearance of at least 1000 metres; the ball / diamond / ball indicate that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged on port security duties. The two balls in a vertical line indicate that the port is closed; the two diamonds in a vertical line indicate that the port is engaged in mine-clearance operations; the ball / diamond / ball in a vertical line indicate that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged in dredging or underwater operations. The two balls in a vertical line indicate the side on which an obstruction exists; the two diamonds in a vertical line indicate the side on which it is safe to pass; the ball / diamond / /ball in a vertical line indiacte that the vessel is restricted in her ability to manoeuvre"
        ],
        "correctIndex": 3,
        "image": "images/image564.jpg"
      },
      {
        "question": "With a Relative Motion radar Display, what would an echo of a target with no trail indicate? Note that this is a target trail, not a vector",
        "options": [
          "The target is on the same course and speed as own ship",
          "The target is on a collision course with own ship",
          "The target is on a constant bearing and getting closer to own ship",
          "The target is stopped and making no way through the water"
        ],
        "correctIndex": 0,
        "image": "images/image490.jpg"
      },
      {
        "question": "How often under SOLAS, is the performance test of a Voyage Data Recorder required by an approved testing or servicing facility?",
        "options": [
          "Annually.",
          "When the battery is replaced.",
          "At the Intermediate Safety Equipment Survey.",
          "When the data media is downloaded."
        ],
        "correctIndex": 0,
        "image": "images/image529.jpg"
      },
      {
        "question": "Where do you find minimum drill requirements?",
        "options": [
          "In manager's instructions",
          "In the SOLAS convention and its annex",
          "In classification society rules",
          "In owner's instruction"
        ],
        "correctIndex": 1,
        "image": "images/image80.jpg"
      },
      {
        "question": "The time indication 121310z means in maritime radio communication:",
        "options": [
          "12th month, 13th day, 1000 hour Local time",
          "12th day, 1310 hours UTC",
          "12th day, 1310 hours local time",
          "12th month, 13th day, 1000 hours UTC"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "The transmitting power of the VHF is adjusted by setting:",
        "options": [
          "Dual watch",
          "Squelch",
          "PTT",
          "High/Low power"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "If W = Displacement, L = length, B = Breadth, D = depth of vessel, Cb = Block Coefficient, Cw = Coefficient of Waterplane, RD = Relative Density, then:",
        "options": [
          "W = L x B x D x CB / RD",
          "W = L x B x D x RD",
          "W = L x B x D x CB",
          "W = L x B x D x CW"
        ],
        "correctIndex": 0,
        "image": "images/image510.jpg"
      },
      {
        "question": "Where on the hull is the theoretical position of the hydrodynamic pivot point, when going astern and turning?",
        "options": [
          "Between 1/4 of the ship's length from the stern and the rudder post",
          "Amidships",
          "Between amidships and 1/4 of the vessel's length from the bow",
          "1/3 of the vessel's length from the bow"
        ],
        "correctIndex": 0,
        "image": "images/image503.jpg"
      },
      {
        "question": "With a davit launched lifeboat, what weight is required by SOLAS regulations to be used for the 5 yearly test of the davit and brake system?",
        "options": [
          "1.25 times the total weight of the lifeboat when loaded with its full complement of persons and equipment.",
          "1.1 times the total weight of the lifeboat when loaded with its full complement of persons and equipment.",
          "The equivalent to the total weight of the lifeboat when loaded with its full complement of persons and equipment.",
          "0.8 times the total weight of the lifeboat when loaded with its full complement of persons, equipment and stores."
        ],
        "correctIndex": 1,
        "image": "images/image573.jpg"
      },
      {
        "question": "Under most circumstances, how will communication be carried out between a ship and a SAR helicopter?",
        "options": [
          "On VHF Ch 70",
          "On 410 KHz",
          "On VHF Ch 16",
          "On 121.5 MHz"
        ],
        "correctIndex": 2,
        "image": "images/image501.jpg"
      },
      {
        "question": "What are the advantages of ballasting double bottom ballast tanks by gravity filling on a Bulk Carrier?",
        "options": [
          "Free surface effect is eliminated",
          "Ballasting is done more quickly",
          "There is minimum pressure head on the tank top and pumps are not required",
          "Ballasting can be done without any supervision"
        ],
        "correctIndex": 2,
        "image": "images/image833.jpg"
      },
      {
        "question": "Which plan shows the position of the vertical and longitudinal centres of gravity for each cargo compartment on a Bulk Carrier?",
        "options": [
          "Line drawing",
          "Capacity Plan",
          "Vessel stability book",
          "Shell expansion"
        ],
        "correctIndex": 2,
        "image": "images/image843.jpg"
      },
      {
        "question": "As per the IMDG Code, 'Proper Shipping Name' is defined as:",
        "options": [
          "The name under which a dangerous material, substance or article is described for export purposes in the country of loading.",
          "The name to be used in any documentation relating to the transportation of the dangerous substance, material or article, such as on forms, labels and placards.",
          "The correct chemical name of a potentially hazardous material, as identified from the Chemical Cargo List.",
          "The name assigned by the manufacturer to a material, substance or article for the purposes of shipment."
        ],
        "correctIndex": 1,
        "image": "images/image523.jpg"
      },
      {
        "question": "For how long time should a SART transponder be able to operate in the active mode ?",
        "options": [
          "24 hours",
          "96 hours",
          "6 hours",
          "8 hours"
        ],
        "correctIndex": 3,
        "image": "images/image3.jpg"
      },
      {
        "question": "Which special regulations cover transportation of solid Bulk cargoes?",
        "options": [
          "Classification Society Rules",
          "IMO Bulk Cargoes Code (BC) and the IMO International Maritime Solid Bulk Cargo Code( IMSBC)",
          "The cargo securing manual",
          "The timber deck cargo code published by IMO"
        ],
        "correctIndex": 1,
        "image": "images/image840.jpg"
      },
      {
        "question": "What is a Continuous Synopsis Record?",
        "options": [
          "A record of the vessels history",
          "A record of all security incidents",
          "A plan for continuous maintenance of security equipment",
          "A plan including all security measures onboard"
        ],
        "correctIndex": 0,
        "image": "images/image167.jpg"
      },
      {
        "question": "Where are cargo hold water level detectors required to be fitted on bulk carriers?",
        "options": [
          "At the forward end of each cargo hold",
          "At the port and starboard midship sections of each cargo hold",
          "At the after end of each cargo hold",
          "In cargo hold bilges"
        ],
        "correctIndex": 2,
        "image": "images/image826.jpg"
      },
      {
        "question": "For how long time must the printout from the Oil Discharge Monitoring Equipment (ODME) be retained onboard?",
        "options": [
          "Six months",
          "Three years",
          "Two years",
          "Four years"
        ],
        "correctIndex": 1,
        "image": "images/image41.jpg"
      },
      {
        "question": "Which word will precede a safety message ?",
        "options": [
          "SECURITE",
          "PAN PAN",
          "SAFETY",
          "URGENT"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "What colour flare is used to signal a safe landing place for small boats ?",
        "options": [
          "Green",
          "White",
          "Blue",
          "Yellow"
        ],
        "correctIndex": 0,
        "image": "images/image121.jpg"
      },
      {
        "question": "Who is responsible for maintaining the vessel's structural strength?",
        "options": [
          "The master.",
          "The flag state administration.",
          "The management company.",
          "The classification society."
        ],
        "correctIndex": 0,
        "image": "images/image199.jpg"
      },
      {
        "question": "By FleetNET communication is understood:",
        "options": [
          "An urgent message for all ships in a particular area",
          "A HF-NBDP -message destined for ships in a certain geographical area",
          "An EGC-message destined for ships with the same group call number",
          "A MSI-message destined for ships in specific geographical area"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "With an Inmarsat-C installation there is the addressing-option \"special\". Via this option:",
        "options": [
          "Give one of Inmarsat's \"special access codes\"",
          "You can deliver a message via a special telegram",
          "You can plan a message to be delivered at a special time",
          "You can send a message by express delivery"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "In open water, you see a collision between two other ships. What immediate action should you take?",
        "options": [
          "Slow down and standby to see if any assistance is required",
          "Send out a distress relay message",
          "Nothing, proceed on passage unless they are in distress",
          "Contact one or both vessels involved in the incident and offer assistance"
        ],
        "correctIndex": 2,
        "image": "images/image93.jpg"
      },
      {
        "question": "What is the possible concern if fuel tanks on a Bulk Carrier, which are close to cargo spaces containing grain, are excessively heated?",
        "options": [
          "No damage should occur",
          "The grain cargo may be heated and damaged",
          "The cargo may liquefy",
          "The grain cargo may produce methane gas"
        ],
        "correctIndex": 1,
        "image": "images/image845.jpg"
      },
      {
        "question": "After confirmation that there is no other radio-traffic, we call on a VHF working channel of a coast-station. When you don't get any reply:",
        "options": [
          "You can repeat your call immediately",
          "You must wait 3 minute minimum before repeating your call",
          "You must wait 1 minute minimum before repeating your call",
          "You must wait 5 minutes before repeating the call"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "A DSC-message of the \"safety\" category is received from another vessel on VHF channel 70. Conforming to the GMDSS rules, for the continuation of the safety traffic, you must change to VHF-channel:",
        "options": [
          "70",
          "85",
          "07",
          "16"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "A bulk cargo of steel coils is loaded and a number of the coils are noted by the Chief Officer to be rusted; what must the Master ensure?",
        "options": [
          "Clause the Bill of Lading with the reference numbers of the rusty coils and so make the Bill of Lading a \"dirty\" Bill.",
          "Cargo temperatures measured on voyage",
          "Steel coils to be discharged",
          "No action needs to be taken."
        ],
        "correctIndex": 0,
        "image": "images/image819.jpg"
      },
      {
        "question": "The compulsory testing of a prescribed EPIRB is to be done:",
        "options": [
          "Once a week",
          "Once in 4 years",
          "Once a month",
          "Once a year"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "During test and/or maintenance work of the CO2 system affecting the release system, precautions to ensure that the gas is not released into the engine room due to a mistake are to be ensured. What precautions should be taken?",
        "options": [
          "Check the main valve for a potential leakage.",
          "No special precautions necessary.",
          "The main supply line to be blanked off prior to the work.",
          "Arrange a watchman in the CO2 central."
        ],
        "correctIndex": 2,
        "image": "images/image169.jpg"
      },
      {
        "question": "What effect does shallow water have on a normal commercial vessel's turning circle?",
        "options": [
          "Turning circle will stay the same as they are a function of the hull length only",
          "The effect totally depends upon the shape of the hull, a lot of hulls are not effected",
          "Turning circle will stay the same as they are a function of the rudder angle only",
          "Turning circles will be of a greater diameter for the same rudder angle"
        ],
        "correctIndex": 3,
        "image": "images/image520.jpg"
      },
      {
        "question": "A bulk vessel loads a full cargo to summer marks of a high density bulk cargo such as iron ore concentrate; what would be the possible stability conditions produced?",
        "options": [
          "The vessel will normally have a large intact metacentric height (GM) and have a fast roll period",
          "The vessel may have a list",
          "The vessel will be tender and have a poor curve of righting levers.",
          "The vessel will normally have a small intact metacentric height (GM) and have a slow roll period"
        ],
        "correctIndex": 0,
        "image": "images/image844.jpg"
      },
      {
        "question": "When a Master takes the leadership in approaching a problem, Must his first action be a decision that will directly solve the problem?",
        "options": [
          "Not necessary, he shall use all available resources. He should resist the temptation to step in and do it all by himself",
          "No, he should observ the situation, and let the other senior officers solve the situation.",
          "Yes, take full controll. Do not delegate to other officers, to avoid mistake.",
          "Yes, with his experience, it is most likely that he has the best solution."
        ],
        "correctIndex": 0,
        "image": "images/image71.jpg"
      },
      {
        "question": "\" On area A4 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "the use of SARSAT COSPAS Epirb",
          "the use of HF DSC",
          "the use of MF and/or VHF R/T",
          "the use of MF and/or HF R/T"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "To announce an important navigational –or meteorological warning via the VHF-installation, one should use the:",
        "options": [
          "Urgency call",
          "Safety call",
          "Individual call",
          "Distress call"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is the primary hazard associated with the carriage of a bulk cargo of salt on a Bulk Carrier?",
        "options": [
          "The cargo may be liable to self heat.",
          "This cargo maybe liable to spontaneous combustion",
          "The only possible hazard is associated with ingress of water into the hold and a loss of stability",
          "There are no special hazards associated with this cargo"
        ],
        "correctIndex": 2,
        "image": "images/image840.jpg"
      },
      {
        "question": "Which statement(s) is true of a gasoline spill?",
        "options": [
          "It does little harm to marine life",
          "It is not covered by the pollution law",
          "It is visible for a shorter time than a fuel oil spill",
          "It will sink more rapidly than crude oil"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "What radar device assists in the detection and location of a survival craft?",
        "options": [
          "SART beacon",
          "EPIRB beacon",
          "AIS beacon",
          "A personal locator beacon"
        ],
        "correctIndex": 0,
        "image": "images/image150.jpg"
      },
      {
        "question": "What immediate action should be taken if a ship unexpectedly runs aground and stops?",
        "options": [
          "Ring full astern",
          "Hoist two black balls",
          "Sound the General Alarm",
          "Stop engine(s)"
        ],
        "correctIndex": 3,
        "image": "images/image514.jpg"
      },
      {
        "question": "\"A contractor is hired to install new navigation equipment onboard your ship while it's berthed. For a period of time he's left unsupervised and photographs schematics of the ship that he finds rolled up and stored in the corner of a nearby office. Later, from home, he hacks into the network and prints off information about the ship's security procedures. Which of these information security measures would have prevented his unauthorized access?\"",
        "options": [
          "\"Secure area, passwords, a firewall and protective markings.\"",
          "\"Firewall, protective markings, vetting and a secure network.\"",
          "\"Secure area, passwords, a firewall and a secure network.\"",
          "\"Protective markings, reference checks, and passwords.\""
        ],
        "correctIndex": 2,
        "image": "images/image63.jpg"
      },
      {
        "question": "MARPOL - Annex IV. Prevention of Pollution by Sewage from ships. What do you understand by the word \"Sewage\"?",
        "options": [
          "Drainage/waste from toilets/urinals.",
          "Waste from synthetic materials.",
          "Waste from galley.",
          "Mixture of sea water/oil."
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "What could happen if a bulk vessel failed to display placards notifying the crew of the disposal of garbage within and outside Special Areas?",
        "options": [
          "The ship owner could be penalized by the P. & I. Club concerned",
          "The vessel could be detained by port state control authorities",
          "The vessel could be detained by its flag Administration",
          "The classification society concerned could suspend the vessel's International Oil Pollution Prevention (IOPP) Certificate"
        ],
        "correctIndex": 1,
        "image": "images/image837.jpg"
      },
      {
        "question": "In relation to OPA 90, Which of the following statements is correct?",
        "options": [
          "OPA-90 specify all oil cargo related rules and regulations",
          "OPA-90 specify rules and regulations for all COTP-zones",
          "COTP-zones may have additional rules and regulations",
          "After implementation of OPA-90 there are no area specific rules andregulations"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "What would a cracked cross-deck plating found during a loaded passage on a bulk carrier indicate?",
        "options": [
          "That shear forces have been exceeded",
          "That bulkhead failure is imminent",
          "That failure of the shell plating is imminent",
          "That the vessel is due for survey"
        ],
        "correctIndex": 0,
        "image": "images/image841.jpg"
      },
      {
        "question": "By the degree of selectivity of a receiver is meant:",
        "options": [
          "Ability to prevent variations in the strength of radio frequency signal received",
          "Abilit to receive all signals",
          "Ability to make weak stations audible",
          "Ability to distinguish weak stations from adjacent stronger stations"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "With respect to the ISM, what training in addition to lifeboat and fire drills must be carried out?",
        "options": [
          "Familiarization, and other drills identified as necessary by the ship",
          "Mooring operations",
          "The boat drill and fire drill should be adequate to meet your needs",
          "Bridge Team Management"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "What extent of hatch cover spares should be available on board a Bulk Carrier at all times?",
        "options": [
          "Rubber packing and hatch cleat washers for two panel sections",
          "Rubber packing and hatch cleat washers for one panel section",
          "Rubber packing hatch cleat washers and glue for two panel sections",
          "Specimen fittings shown in the hatch cover manufacturer's manual"
        ],
        "correctIndex": 3,
        "image": "images/image847.jpg"
      },
      {
        "question": "When a pilot is in attendance for navigation in a compulsory pilotage area, should the Master discuss the vessel's passage plan with them?",
        "options": [
          "No - often there is not enough time and the pilot will be experienced",
          "No - because an authorised pilot does not need to be shown a passage plan",
          "Yes - as the pilot will not bring their own passage plan",
          "Yes - this is very much part of the Master/Pilot information exchange"
        ],
        "correctIndex": 3,
        "image": "images/image508.jpg"
      },
      {
        "question": "You are on a power-driven vessel underway in open water. This vessel is sighted directly ahead. The distance is closing slowly. What action will you take under the International Collision Regulations and why?",
        "options": [
          "I will maintain my course and speed.  The other vessel is being overtaken and is therefore obliged to keep out of the way by rule 13",
          "The vessel is on a steady bearing and the distance is closing. I will therefore take avoiding action, altering course to starboard and sounding one short blast under rules 14 and 16",
          "I will keep out of her way. I am the overtaking vessel and am obliged to keep clear under rule 13",
          "This is a vessel engaged in towing and I am seeing the stern light of the tow. The tug is not however showing any lights indicating she is restricted in her ability to manoeuvre. I will however display good seamanship and keep out of her way"
        ],
        "correctIndex": 2,
        "image": "images/image565.jpg"
      },
      {
        "question": "What is the probable cause of an error in the position shown on a GPS receiver set into '2D' fixing?",
        "options": [
          "Incorrect height of the antenna set into the receiver",
          "The limit set on the HDOP figure is too great",
          "The receiver has defaulted to '3D' fixing and there is no overhead satellite",
          "the limit set on the VDOP figure is too small"
        ],
        "correctIndex": 0,
        "image": "images/image487.jpg"
      },
      {
        "question": "Once the Safety Management System is verified and working effectively, what document is issued to the ship?",
        "options": [
          "The I.S.M. Certificate",
          "The Document of Compliance",
          "The Safety Management Certificate",
          "The Document of Conformance"
        ],
        "correctIndex": 2,
        "image": "images/image230.jpg"
      },
      {
        "question": "What type of search pattern is recommended in the IAMSAR Manual as most effective for a single vessel, when the location of the search object is known within relatively close limits?",
        "options": [
          "Expanding Square Search",
          "Parallel Sweep Search",
          "Track Line Search",
          "Sector Search"
        ],
        "correctIndex": 0,
        "image": "images/image530.jpg"
      },
      {
        "question": "As per IMDG Code, the term 'separated from\" can be defined as:",
        "options": [
          "With an intervening compartment, being both a vertical and horizontal separation. Provided an intervening deck is resistant to liquid and fire, a vertical separation of 6 metres is acceptable.  For \"on deck\" stowage, this segregation means a distance of at least 12 metres irrespective of compartment divisions.",
          "In different compartments or holds when stowed \"under deck\". Provided an intervening deck is resistant to fire and liquid, a vertical separation may be accepted as equivalent. For \"on deck\" stowage, this segregation means a distance of at least 6 metres.",
          "Either in a vertical or horizontal separation: if the intervening decks are not resistant to fire and liquid, then only in a longitudinal separation is acceptable. For \"on deck\" stowage, this means a distance of at least 12 metres. This distance also applies to one package stowed \"on deck\" and another in an upper compartment.",
          "Effectively segregated so that the incompatible goods cannot interact dangerously in the event of an accident, but may be transported in the same compartment or hold or on deck, provided a horizontal separation, projected vertically, of 3 metres is obtained."
        ],
        "correctIndex": 1,
        "image": "images/image499.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding service and maintenance of life-saving appliances correspond to present regulations?",
        "options": [
          "At least one member of the crew shall hold a repairman certificate for life-saving equipment",
          "Maintenance and repair of all life saving equipments shall be carried out by the certified ship staff only",
          "Maintenance and repair of all the life-saving equipments will be carried out ashore in work shop only",
          "Instructions for onboard maintenance of life-saving appliances in accordance with the regulations shall be provided"
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "What is a contingency plan for ships?",
        "options": [
          "Loading plan for general cargo",
          "Plan for maintenance and repair",
          "Plan for next voyage",
          "Plan for safety preparedness"
        ],
        "correctIndex": 3,
        "image": "images/image43.jpg"
      },
      {
        "question": "When should a crew member joining a ship for the first time be given some training and instructions in the use of the ship's fire-fighting appliances ?",
        "options": [
          "As soon as possible but not later than 2 weeks after he joins the ship",
          "As soon as possible but not later than 2 days after he joins the ship",
          "As soon as possible but not later than 24 hours after he joins the ship",
          "As soon as possible"
        ],
        "correctIndex": 0,
        "image": "images/image119.jpg"
      },
      {
        "question": "In a single side skin bulk carrier of 155m in length constructed in 2000 and carrying cargo of density 1010 kg/cu.m., which cargo hold should be able to withstand flooding?",
        "options": [
          "The midships cargo hold",
          "The foremost cargo hold",
          "The aftermost cargo hold",
          "Any cargo hold"
        ],
        "correctIndex": 3,
        "image": "images/image826.jpg"
      },
      {
        "question": "Why does a ship with ahead or astern speed, have a small lateral or sideways movement when turning.",
        "options": [
          "The ship moves laterally because of all the external forces on the vessel hull caused by the environment and possibly a tug",
          "Because the rudder is positioned at the stern of the vessel",
          "The ship moves laterally because it has a single hull",
          "The hydrodynamics of the hull cause a drift angle to be produced, which is not in the fore and aft line of the vessel"
        ],
        "correctIndex": 3,
        "image": "images/image503.jpg"
      },
      {
        "question": "The number of frequencies on which a MF/HF-DSC distress alert multi-frequency call attempt can be transmitted is:",
        "options": [
          "5",
          "6",
          "2",
          "3"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is usually the effect on G when the ship is damaged with water ingress?",
        "options": [
          "It lowers",
          "It is unchanged",
          "It first rises then lowers",
          "It rises"
        ],
        "correctIndex": 0,
        "image": "images/image160.jpg"
      },
      {
        "question": "The vessel is 20 miles off the coast and disabled because of engine failure, which will require at least 24 hours to repair. What initial actions should be taken to ensure the safety of the vessel?",
        "options": [
          "Steer away from danger until the vessel looses way, then if possible drop the anchor",
          "Display NUC lights and send out a PAN warning on the hour using a VHF radio",
          "Display NUC lights and inform the nearest Coast Guard of you predicament",
          "Contact the designated person ashore and request that a tug is arranged"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The following information must be given on the SART:",
        "options": [
          "Date of replacement of the batteries",
          "The name of the operator",
          "The MMSI number sent",
          "The date of replacement of the hydrostatic release unit"
        ],
        "correctIndex": 0,
        "image": "images/image5.jpg"
      },
      {
        "question": "The training manual shall contain instructions and information in easily understood terms and illustrated wherever possible. Which of the following objects have to be explained in detail in the manual according to present regulations?",
        "options": [
          "Starting of Main Engine",
          "Donning of lifejackets and immersion suits",
          "Handling of stowaways",
          "Donning of fire protection clothing"
        ],
        "correctIndex": 1,
        "image": "images/image83.jpg"
      },
      {
        "question": "\"If drugs or suspected drugs are found onboard your ship, follow the five C's. Confirm, Clear, Cordon, Control and:\"",
        "options": [
          "Chuck",
          "Check",
          "Cheer",
          "Change"
        ],
        "correctIndex": 1,
        "image": "images/image75.jpg"
      },
      {
        "question": "Why do structural steel products often shift or collapse in a bulk carrier's cargo holds?",
        "options": [
          "Because of dunnage, provided at every tier of the cargo, not having been aligned",
          "Because the irregular shape of the cargo holds results in void spaces",
          "Because of using inadequately sized lasing wires",
          "Because of inadequate dunnage placed over the tank top"
        ],
        "correctIndex": 1,
        "image": "images/image815.jpg"
      },
      {
        "question": "When using an echo sounder in fresh water, the sounding indicated has a small error, what is the cause of this?",
        "options": [
          "The water temperature is probably higher",
          "There should be no error with a properly working echo sounder",
          "The density of the water",
          "The occurrence of weed and fish in fresh water"
        ],
        "correctIndex": 2,
        "image": "images/image585.jpg"
      },
      {
        "question": "What can lead to \"Unlimited responsibility\" (OPA-90)",
        "options": [
          "Wilful misconduct, gross negligence and violation of Federal Safety",
          "Wilful misconduct and gross negligence",
          "Only wilful misconduct",
          "Only gross negligence"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "\"Door to door\" shipment is covered under:",
        "options": [
          "A Through Bill of Lading.",
          "A Multi-Phase Bill of Lading.",
          "An Ocean Bill of Lading.",
          "A Destination Bill of Lading."
        ],
        "correctIndex": 0,
        "image": "images/image518.jpg"
      },
      {
        "question": "If a master initially responds to a distress but then, in special circumstances, decides not to proceed, who must they tell?",
        "options": [
          "If possible, inform the casualty of their decision and communicate the reason",
          "Contact all the other units in the SAR operation informing them of the decision to break off",
          "Inform the vessel owners of their decision and resume passage at the earliest opportunity",
          "Inform the Search and Rescue Mission Coordinator(SMC) of their decision and enter the reason in the vessel's logbook"
        ],
        "correctIndex": 3,
        "image": "images/image60.jpg"
      },
      {
        "question": "Which personnel must undergo familiarization training on board",
        "options": [
          "Everyone",
          "Only the deck officers",
          "Only the ratings",
          "Only catering staff"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "You are on a vessel 10 nautical miles off the coast of Algeria, in the Mediterranean Sea. Are you allowed to dump food waste overboard?",
        "options": [
          "Yes, all kind of food waste can be dumped overboard",
          "Yes, the food waste can be dumped if it is ground so that the resulting particles can pass through a screen with 50 mm openings",
          "Yes, the food waste can be dumped if it is ground so that the resulting particles can pass through a screen with 25 mm openings",
          "No, food waste can not be dumped overboard"
        ],
        "correctIndex": 3,
        "image": "images/image260.jpg"
      },
      {
        "question": "The prescribed periodic tests of the radio set must be entered in:",
        "options": [
          "Equipment manual",
          "Manual maritime radio communication",
          "Ship's deck log",
          "Radio Log"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "During helicopter evacuation of an injured man, what course should the ship steer?",
        "options": [
          "With the wind astern so that the effect of the wind is reduced as much as possible",
          "As instructed by the helicopter pilot",
          "With the wind fine on the bow opposite to the helicopter operating area",
          "Directly into the wind"
        ],
        "correctIndex": 1,
        "image": "images/image134.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "the use of VHF DSC",
          "the use of INMARSAT Epirbs",
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "What spheroidal datum should the GPS receiver be set into, to enable its readout position to be plotted on a paper chart?",
        "options": [
          "Set the datum of the country or area that the vessel is in",
          "Select WGS84 datum, then when plotting, apply any corrections shown on the chart",
          "Select the European datum as this is similar to the WGS84 datum",
          "Select the same datum that the paper chart has"
        ],
        "correctIndex": 1,
        "image": "images/image493.jpg"
      },
      {
        "question": "On a hold inspection of a Bulk Carrier it is noted that a number of transverse frame beam knees are slightly distorted; what is the significance of this?",
        "options": [
          "This indicates the vessel is suffering racking stress and is potentially serious",
          "The distorted areas should be painted",
          "This is an indication of excessive bending moment stress",
          "There are no concerns with this observation"
        ],
        "correctIndex": 0,
        "image": "images/image820.jpg"
      },
      {
        "question": "EGC is short for:",
        "options": [
          "Exchange Geographic Call",
          "Emergency general ship call",
          "Enhanced Group Call",
          "Exchange Group Call"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 201-300",
    "questions": [
      {
        "question": "How often shall crew members participate in fire drills?",
        "options": [
          "Once every 6 months",
          "Once every year",
          "Once every week",
          "Once every month"
        ],
        "correctIndex": 3,
        "image": "images/image89.jpg"
      },
      {
        "question": "The operating mode of a pyrotechnic signal depends essentially on:",
        "options": [
          "The weather conditions of the moment",
          "A definite standard process",
          "The fact that the user is on board a liferaft, a lifeboat or ship",
          "Instructions or diagrams printed on its casing by the manufacturer"
        ],
        "correctIndex": 3,
        "image": "images/image170.jpg"
      },
      {
        "question": "A bulk cargo is loaded and the shore cargo figure is 10 000 tonnes; the chief officer calculates 9 500 tonnes have been loaded; what should the Master do?",
        "options": [
          "Inform Designated Person Ashore( DPA)",
          "No action to be taken",
          "Bills of Lading to be signed \"Clean\" by Master.",
          "Ask for a draft survey to be carried in the presence of P& I Club representative"
        ],
        "correctIndex": 3,
        "image": "images/image835.jpg"
      },
      {
        "question": "The position that is determined by built in GPS-receiver in an Inmarsat-EPIRB has an accuracy of about:",
        "options": [
          "1200 meters",
          "2200 meters",
          "200 meters",
          "4200 meters"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "When a satellite receives a \"distress alert\" from a Cospas-Sarsat EPIRB, the relay of the \"distress alert\" can be delayed because the satellite cannot immediately contact a:",
        "options": [
          "LES before the satellite is actually seen by this ground station",
          "NCS before the satellite is actually seen by this ground station",
          "LUT before the satellite is actually seen by this ground station",
          "Coast station"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which ships does the ISM code apply to",
        "options": [
          "All craft above 300GRT",
          "Only passenger vessels",
          "All passenger ships, all cargo ships of 500GRT or above",
          "Only tankers and Ro-ros"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "When loading a bulk cargo of cement the specific gravity and flow characteristics are dependant on what criteria?",
        "options": [
          "The volume of water in the cargo",
          "The volume of air in the cargo",
          "They are fixed and the cargo has a stowage factor of 0.5 cubic metres/tonne",
          "The bulk density is standard at 900 kg/cubic metre"
        ],
        "correctIndex": 1,
        "image": "images/image828.jpg"
      },
      {
        "question": "What is the acronym FR 01 ?",
        "options": [
          "MSI",
          "MMSI",
          "Call sign",
          "AAIC"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "You are on a vessel 10 nautical miles off the coast of Nigeria, West Africa. Are you allowed to dump empty glass bottles overboard ?",
        "options": [
          "Yes, the bottles can be dumped if they are ground so that the resulting particles can pass through a screen with 50 mm openings",
          "No, glass bottles can not be dumped overboard",
          "Yes, glass bottles can be dumped overboard",
          "Yes, the bottles can be dumped if they are ground so that the resulting particles can pass through a screen with 25 mm openings"
        ],
        "correctIndex": 1,
        "image": "images/image251.jpg"
      },
      {
        "question": "During a pre-loading survey prior to loading grain on a Bulk Carrier, very small amount of the previous grain cargo is found in a cargo hold; what is the significance of this situation?",
        "options": [
          "The vessel may fail the pre-load survey and be declared off-hire",
          "The affected cargo hold should be left empty",
          "The remaining cargo from the previous voyage can be ignored",
          "The cargo hold can be cleaned while other holds are loaded"
        ],
        "correctIndex": 0,
        "image": "images/image838.jpg"
      },
      {
        "question": "Which SOLAS certificate carried onboard has details of a vessel's bulkhead fire ratings?",
        "options": [
          "The MODU Safety Certificate.",
          "The Cargo Ship Safety Equipment Certificate.",
          "The Cargo Ship Safety Construction Certificate.",
          "The Safety Management Certificate."
        ],
        "correctIndex": 2,
        "image": "images/image572.jpg"
      },
      {
        "question": "How are cargoes on self-unloading bulk carriers fed to the vessel's conveyor belts during discharge?",
        "options": [
          "Via hydraulically-operated hopper gates at the bottom of each hold",
          "Via mechanically-operated hopper gates at the bottom of each hold",
          "By gravity through mechanical hopper gates at the bottom of each hold",
          "Via remote-controlled hopper gates at the bottom of each hold"
        ],
        "correctIndex": 0,
        "image": "images/image835.jpg"
      },
      {
        "question": "If whistles are fitted on a vessel at a distance apart of more than 100 metres, will manoeuvring and warning signals, as defined by rule 34 of the International regulations for Preventing Collisions at Sea, be given on one or both whistles?",
        "options": [
          "Manoeuvring signals will be given only on the forward whistle; warning signals will be given on both whistles simultaneously",
          "They shall first be given on the forward whistle, followed by the after whistle, with a 5 second inetrval in between",
          "They shall be given on both whistles simultaneously",
          "They shall be given on one whistle only"
        ],
        "correctIndex": 3,
        "image": "images/image486.jpg"
      },
      {
        "question": "A satellite receives the transmissions of the 406 MHz Cospas-Sarsat EPIRB. The transmissions of the EPIRB will be:",
        "options": [
          "Always passed on to a LUT",
          "Passed when the satellite in passing the equator",
          "Exclusively passed on to a LUT only between 70 degrees N and 70 degrees S",
          "Exclusively passed on to a LUT if the satellite sees both the EPIRB and the LUT"
        ],
        "correctIndex": 0,
        "image": "images/image22.jpg"
      },
      {
        "question": "Assign men to search men and women to search women unless a device such as a metal detector is used.",
        "options": [
          "FALSE",
          "TRUE",
          ".",
          "."
        ],
        "correctIndex": 1,
        "image": "images/image151.jpg"
      },
      {
        "question": "As per the the IMDG Code, an \"article\" is referred to as:",
        "options": [
          "A form that contains important information about a hazardous substance.",
          "A device that contains a dangerous substance or mixture of substances.",
          "A device that is responsible for initiating a dangerous reaction.",
          "Something that is packed within a freight container."
        ],
        "correctIndex": 1,
        "image": "images/image513.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Line throwing appliance",
          "Rocket parachute flares",
          "Parachute landing area",
          "Survival craft distress pyrotechnic signals"
        ],
        "correctIndex": 0,
        "image": "images/image252.jpg"
      },
      {
        "question": "In a distress-situation a MF/HF-DSC transmission is used in the 8MHz frequency. In this case always:",
        "options": [
          "Put in the MMSI number of the coastguard on the DSC",
          "Ask the RCC for the frequency",
          "Turn on the right frequency",
          "Indicate on what frequency communication will be continued"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Why is air draught an important consideration when loading bulk cargoes on Bulk Carriers?",
        "options": [
          "Because of the vessel's movement whilst berthing or unberthing",
          "Because of variations in under keel clearances whilst alongside the berth",
          "Because the vessel may pass under a bridge(s) whilst approaching or leaving the berth",
          "Because of movement of the bulk cargo loader or unloaders"
        ],
        "correctIndex": 3,
        "image": "images/image833.jpg"
      },
      {
        "question": "What possible reason could there be for the identification mark associated with a Racon not being visible on the radar screen?",
        "options": [
          "The transmitted radar frequency may not trigger the Racon transmitter.",
          "All of the suggested answers.",
          "The racon may not be transmitting a pulse.",
          "The radar may be suppressing the mark with application of the Interference Rejection control."
        ],
        "correctIndex": 1,
        "image": "images/image487.jpg"
      },
      {
        "question": "How can an ARPA best assist the bridge team to steer a suitable course to make good the entrance to a channel?",
        "options": [
          "Acquire a buoy at the entrance to the channel and alter course to make the relative vector of the buoy point at own-ship",
          "Alter course so that own-ships water stabilised true vector passes through the entrance to the channel",
          "Use the mapping facility provided by the ARPA, create a map of the channel then display it for entry",
          "Alter course so that own-ships ground stabilised true vector passes through the entrance to the channel"
        ],
        "correctIndex": 3,
        "image": "images/image586.jpg"
      },
      {
        "question": "If a DSC distress alert is received on board your ship, what is the first action that should be taken?",
        "options": [
          "Determine how close your vessel is to the distressed vessel.",
          "Immediately answer the distress message on the correct radio frequency",
          "Listen for a distress message on the appropriate radio frequency for five minutes",
          "Contact SAR Authorities via nearest coast Radio station"
        ],
        "correctIndex": 2,
        "image": "images/image239.jpg"
      },
      {
        "question": "What are the three volumes of the IAMSAR Manual?",
        "options": [
          "I Organization II Communications III Rescue Procedures",
          "I Planning and Preparation II Rescue Control  III Reference",
          "I Organization and Management II Mission Co-ordination III Mobile Facilities",
          "A Command and Control  B Communications  C Rescue Procedures"
        ],
        "correctIndex": 2,
        "image": "images/image576.jpg"
      },
      {
        "question": "What specific data must be displayed on the loading instruments carried on bulk carriers of 150m or more in length?",
        "options": [
          "The permeability of the cargo carried in the cargo holds",
          "The ultimate strength of main deck plating",
          "The shear forces exerted on the hull structure associated with the entered loaded weight distribution",
          "The segregation requirements of the cargoes carried."
        ],
        "correctIndex": 2,
        "image": "images/image826.jpg"
      },
      {
        "question": "The bridge wheelman has not reported for duty and there is a suspected \"Man Overboard\" situation on your vessel. The ship has been searched and there is one seaman missing? The vessel turns round and retraces the course back, calling for assistance from other vessels in the vicinity. What should be the focal point for any search pattern to be established?",
        "options": [
          "Determine when the seaman was last sighted and concentrate the search round the course line between the last sighting and present position, taking into account any prevailing current.",
          "Determine the drift and leeway of own ship and take this deviation from track into account on the return course. The search should focus around this return track back to the last sighted position",
          "The last sighted position should be the focal point of any search pattern and all ships should keep a good lookout in that vicinity, moving outwards to the present position.",
          "The focus of the search should be from the present position as he probably went overboard when proceeding to the bridge for his watch."
        ],
        "correctIndex": 0,
        "image": "images/image552.jpg"
      },
      {
        "question": "A lead battery of 200 Ah, in accordance with the DIN-standard, must be able to supply:",
        "options": [
          "10 ampere during 20 hours",
          "6 ampere during 20 hours",
          "1 ampere during 200 hours",
          "200 ampere during 1 hour"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The distress message is used when the vessel is threatened by a serious and imminent danger and is in need of immediate assistance. What is the telephony distress signal?",
        "options": [
          "PAN-PAN",
          "MAYDAY",
          "SECURITE",
          "RESCUE-RESCUE"
        ],
        "correctIndex": 1,
        "image": "images/image28.jpg"
      },
      {
        "question": "Which of these tasks are performed as part of the SSA?",
        "options": [
          "Train shipboard personnel in their security duties.",
          "Assess the likelihood and potential consequences of security incidents.",
          "Implement measures to address weaknesses in ship security.",
          "Assign security duties to ship personnel."
        ],
        "correctIndex": 1,
        "image": "images/image64.jpg"
      },
      {
        "question": "The battery of a SART:",
        "options": [
          "Replaced monthly",
          "Must be replaced before the expiry date is exceeded",
          "Must be re-charged weekly",
          "Charged condition must be checked weekly"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "The capacity of a battery is expressed in:",
        "options": [
          "Watt x hours",
          "volt x hours",
          "ampere x hours",
          "volt x ampere"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A hand flare must have a burning period of at least",
        "options": [
          "5 Min",
          "30 Sec",
          "1 Min",
          "10 Min"
        ],
        "correctIndex": 2,
        "image": "images/image170.jpg"
      },
      {
        "question": "The ship-shore HF-telephone-channel 2228 consists of the frequencies 22081.0 kHz and 22777.0 kHz. In case of manual operation, one should tune the receiver on:",
        "options": [
          "22777.0 KHz",
          "The common receiving frequency for the 22 mHz band",
          "2228 KHz",
          "22081.0 KHz"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "DSC-test transmissions may:",
        "options": [
          "Only be sent on an MF-installation on frequencies other then the DSC-distress frequency",
          "Be sent by an MF-installation on the DSC-distress frequency",
          "Only be sent with MF/HF-installation on other frequencies than the DSC-distress frequencies, if the tele-command 'test' is used",
          "Be sent by any installation"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Do the bridge team have to create a passage plan for transiting a canal or river where there will be an authorised pilot onboard?",
        "options": [
          "A passage plan is required for all deep sea passages, but not for transiting a canal under pilotage",
          "A passage plan is required only when there is no pilot on board",
          "A passage plan is only required up to the destination pilot station",
          "A passage plan is always required, even with an authorised pilot"
        ],
        "correctIndex": 3,
        "image": "images/image508.jpg"
      },
      {
        "question": "The relay of a distress-call by an RCC for coast-station begins with:",
        "options": [
          "MAYDAY RELAY (3x)",
          "Distress (3X)",
          "MAYDAY (3x)",
          "PAN PAN (3x)"
        ],
        "correctIndex": 0,
        "image": "images/image18.jpg"
      },
      {
        "question": "The frequency 121,5 MHz is used for :",
        "options": [
          "INMARSAT E EPIRBS",
          "DSS VHF calls",
          "SART transponder",
          "COSPAS-SARSAT EPIRBS"
        ],
        "correctIndex": 3,
        "image": "images/image22.jpg"
      },
      {
        "question": "On board passenger ships an abandon ship drill must be performed:",
        "options": [
          "Every week",
          "Every three months",
          "Every month",
          "Every two weeks"
        ],
        "correctIndex": 0,
        "image": "images/image77.jpg"
      },
      {
        "question": "Which international organization is preparing conventions and rules for seafaring nations?",
        "options": [
          "International Ocean Safety Organization (IOSO)",
          "International Maritime Organization (IMO)",
          "International Marine Association (IMA)",
          "International Labor Organization (ILO)"
        ],
        "correctIndex": 1,
        "image": "images/image161.jpg"
      },
      {
        "question": "According to rule 12 of the International Regulations for Preventing Collisions, in the situation illustrated, which sailing vessel (A or B) must keep out of the way of the other?",
        "options": [
          "The upwind sailing vessel must keep out of the way of the downwind sailing vessel.",
          "Both sailing vessels are required to take avoiding action.",
          "Sailing vessel A must keep out of the way of sailing vessel B.",
          "Sailing vessel B must keep out of the way of sailing vessel A."
        ],
        "correctIndex": 2,
        "image": "images/image488.jpg"
      },
      {
        "question": "A loaded bulk carrier experiences heavy ice accretion on deck forward, what are the major concerns of the changes in stability?",
        "options": [
          "Increase in metacentric height (GM)",
          "Excessive trim by the stern",
          "Reduction of metacentric height (GM) and loss of freeboard forward",
          "Reduction of speed and additional fuel consumption"
        ],
        "correctIndex": 2,
        "image": "images/image843.jpg"
      },
      {
        "question": "What are the effects of a bulk vessel loading a high density cargo resulting in a large metacentric height (GM)?",
        "options": [
          "Suffer torsional stresses and have small righting levers",
          "Have a fast roll period and possibly suffer racking stresses",
          "Have a slow roll and very small righting levers",
          "Have a slow roll and large righting levers"
        ],
        "correctIndex": 1,
        "image": "images/image848.jpg"
      },
      {
        "question": "Who can contact the Designated Person with their safety concerns?",
        "options": [
          "All crewmembers",
          "The company's shore staff only",
          "Senior officers only",
          "The Master only"
        ],
        "correctIndex": 0,
        "image": "images/image230.jpg"
      },
      {
        "question": "On board they want to make a DSC-call with a foreign coast-station. It is an urgent call. Preferably choose:",
        "options": [
          "The international DSC-call frequency",
          "The national DSC-call frequecies of the coast-station concerned",
          "The international DSC-urgent frequency",
          "The international DSC-distress frequencies"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Under international regulations for a Bulk Carrier, who needs to be trained in the use of oxygen analysis and gas detection equipment?",
        "options": [
          "All cargo watch-keeping officers",
          "The ship's crew",
          "The master and chief engineer",
          "The master"
        ],
        "correctIndex": 1,
        "image": "images/image835.jpg"
      },
      {
        "question": "Under what convention is the master to ensure that a ship is seaworthy and in a fit state to safely carry a shipper's cargo?",
        "options": [
          "The Antwerp Convention.",
          "The Paris Memorandum.",
          "The Nassau Protocol.",
          "The Hague-Visby Rules."
        ],
        "correctIndex": 3,
        "image": "images/image511.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is this?",
        "options": [
          "This vessel is restricted in its ability to manoeuvre and is stopped in the water. I am seeing it from astern",
          "This vessel is aground and is seen from directly ahead",
          "This is a fishing vessel, not making way through the water, with its nets fast upon an obstruction, seen from astern",
          "This vessel is not under command and is not making way through the water"
        ],
        "correctIndex": 3,
        "image": "images/image517.jpg"
      },
      {
        "question": "The muster list shall show the duties assigned to the different members of the crew. Which of the given duties necessarily have to be included in the muster list?",
        "options": [
          "Preparation and starting of emergency generator",
          "Clearing escape routes",
          "Preparation and launching of survival crafts",
          "Type of fires that can be encountered on board"
        ],
        "correctIndex": 2,
        "image": "images/image85.jpg"
      },
      {
        "question": "Referring to the SOLAS convention, how often should a crew member on a cargo ship participate in one abandon ship drill and one fire drill?",
        "options": [
          "Weekly",
          "Every second week",
          "Monthly",
          "This is only required when he joins the ship"
        ],
        "correctIndex": 2,
        "image": "images/image47.jpg"
      },
      {
        "question": "Who should inspect the rigging of a pilot ladder and accompany a pilot on deck at embarkation/disembarkation?",
        "options": [
          "The Sen.Off.Deck only",
          "The Bosun",
          "An experienced AB",
          "A responsible Officer"
        ],
        "correctIndex": 3,
        "image": "images/image539.jpg"
      },
      {
        "question": "Which information should be included in your search plan?",
        "options": [
          "Areas to be searched.",
          "Areas to be searched and personnel to be involved in the search.",
          "Personnel to be involved in the search.",
          "Known hiding spots to be searched."
        ],
        "correctIndex": 1,
        "image": "images/image131.jpg"
      },
      {
        "question": "Every inflatable liferaft , inflatable lifejacket and hydrostatic release units shall be serviced:",
        "options": [
          "Every 18 months.",
          "Every 24 months.",
          "Every 12 months.",
          "Every 36 months."
        ],
        "correctIndex": 2,
        "image": "images/image48.jpg"
      },
      {
        "question": "During an audit, adherence to the company cargo handling procedures can best be demonstrated:",
        "options": [
          "By being able to provide comprehensive and verifiable documentary records of cargo operations.",
          "By requesting that an audit takes place during cargo operations.",
          "By providing a summary of incident and lost time figures for the auditor that reflects a successful and trouble-free system on board.",
          "By providing a summary of out-turn figures for the auditor."
        ],
        "correctIndex": 0,
        "image": "images/image497.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft distress pyrotechnic signals",
          "EPIRB",
          "Survival craft portable radio",
          "Rocket parachute flare"
        ],
        "correctIndex": 1,
        "image": "images/image233.jpg"
      },
      {
        "question": "In US waters \"Oil Pollution Act of 1990\" was activated in August 1993. What is the main issue for the introduction of the act?",
        "options": [
          "To prevent oil spills in US waters?",
          "To enforce owners to use equipment of higher standards that those of today?",
          "To encourage owners to build double hull vessels for trading US waters?",
          "To improve safety measures onboard?"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "By the term \"Stand by\" the operator of a coast-station means that one should:",
        "options": [
          "Switch back to the calling channel",
          "Give the position of the ship",
          "Wait on this channel for one hour",
          "Wait until the coast-station calls again"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "EPIRB",
          "Rocket parachute flares",
          "Survival craft distress pyrotechnic signals",
          "Survival craft portable radio"
        ],
        "correctIndex": 3,
        "image": "images/image232.jpg"
      },
      {
        "question": "Which of the following requirements regarding life-buoys correspond to present regulations? (SOLAS III/7.1)",
        "options": [
          "At least four life-buoys on each side of the ship shall be fitted with buoyant lifelines",
          "All the life-buoys shall be placed in holders with quick-release arrangement",
          "Not less than half the total number of lifebuoys shall be provided with self-ignighting lights",
          "At least one lifebuoy with self-activating smoke shall be placed within the vicinity of the stern"
        ],
        "correctIndex": 2,
        "image": "images/image150.jpg"
      },
      {
        "question": "In what format will an On-Scene Co-ordinator report such information as on-scene weather and operation progress to other parties?",
        "options": [
          "OSCREP",
          "POSREP",
          "SITREP",
          "SARREP"
        ],
        "correctIndex": 2,
        "image": "images/image575.jpg"
      },
      {
        "question": "Who is responsible for completing the DoS on behalf of the ship?",
        "options": [
          "Company Security Officer",
          "Chief Engineer",
          "Ship Security Officer",
          "Chief Officer"
        ],
        "correctIndex": 2,
        "image": "images/image152.jpg"
      },
      {
        "question": "A distress call has been sent accidentally on your MF DSC equipment. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Switch off the transmitter",
          "Make broadcast on 2182 kHz \"\"Mayday all stations...\"\" and cancel the false distress alert.\"",
          "Send a all stations urgent priority MF DSC call",
          "Send a selective distress priority MF DSC call to the nearest MRCC– Inform it that a false distress alert has been transmited"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "You wish to send an e-mail using the Inmarsat-C installation. The message has to be composed in:",
        "options": [
          "X25",
          "The 400 protocol",
          "National language of the LES",
          "ASCII"
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "Which one of the given requirements regarding survival craft muster and embarkation arrangements corresponds to the present SOLAS regulations?",
        "options": [
          "Muster and embarkation stations are to be arranged separately to improve working conditions.",
          "Davit-launched survival craft muster and embarkation stations shall be arranged to enable stretchers to be placed in survival craft.",
          "Searchlights to be provided at the launching station.",
          "Muster and embarkation stations shall be readily accessible from accommondation and work areas."
        ],
        "correctIndex": 3,
        "image": "images/image79.jpg"
      },
      {
        "question": "You are proceeding along a coastal route when you hear this signal. The visibility is severely restricted. What does the signal mean?",
        "options": [
          "There is a vessel aground in the vicinity. She is more than 100 metres in length. She is sounding an additional warning to approaching vessels that they are \"running into danger\"",
          "There is a vessel at anchor in the vicinity. She is less than 100 metres in length. She is sounding an additional warning to approaching vessels that they are \"running into danger\"",
          "There is a vessel at anchor in the vicinity. She is more than 100 metres in length. She is sounding an additional warning signal to approaching vessels, directing them to \"keep clear\"",
          "There is a vessel aground in the vicinity. She is less than 100 metres in length. She is sounding an additional warning to approaching vessels to \"navigate with extreme caution\""
        ],
        "correctIndex": 0,
        "image": "images/image489.jpg"
      },
      {
        "question": "Under the IMO ECDIS requirements, what are the three minimum inputs required?",
        "options": [
          "Log speed, distance run and position information",
          "Position fixing, heading and speed information",
          "Gyro heading, compass heading and position information",
          "Position fixing, radar over-lay and log value"
        ],
        "correctIndex": 1
      },
      {
        "question": "For a ship operating or calling in US waters, COTP can request (OPA-90)",
        "options": [
          "Maximum two drills a year",
          "Unannounced drills at any time",
          "Maximum one drill a year",
          "Participation in all announced drills"
        ],
        "correctIndex": 1,
        "image": "images/image40.jpg"
      },
      {
        "question": "The Urgency Message from a ship is used to notify other traffic of a situation where the ship is not in imminent danger, but where the development of the situation is uncertain and may need assistance in the near future. What is the telephony urgency message like?",
        "options": [
          "RESCUE-RESCUE",
          "MAYDAY",
          "SECURITE",
          "PAN-PAN"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission, when transmitting a telex-message:",
        "options": [
          "J3E",
          "G3E",
          "H3E",
          "F1B/J2B"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "A distress-call, onboard via RCC, may only be given Receipt if:",
        "options": [
          "OSC from the RCC concerned invites the vessels",
          "The captain orders",
          "The manager orders",
          "The O.O.W deems it necessary"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "What is the result of a \"high metacentric height\"?",
        "options": [
          "The vessel will roll slowly or be unstable?",
          "The vessel will roll violently?",
          "The vessel will have a great bending moment?",
          "The vessel's tweendeck heights is too high?"
        ],
        "correctIndex": 1,
        "image": "images/image199.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft distress pyrotechnic signals",
          "Radar transponder",
          "Epierb",
          "Rocket parachute flares"
        ],
        "correctIndex": 3,
        "image": "images/image231.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission when making a radiotelephone call:",
        "options": [
          "F1B/J2B",
          "H3E",
          "G3E",
          "J3E"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What hazards are associated with the carriage of wood pellets in bulk?",
        "options": [
          "Possible dust explosion due to excessive ventilation",
          "Oxygen depletion and generation of carbon monoxide in cargo and communicating spaces",
          "Possible liquefaction of cargo, en route",
          "Spontaneous combustion and self-heating"
        ],
        "correctIndex": 1,
        "image": "images/image834.jpg"
      },
      {
        "question": "Which of the statements best describes what happens to the sounding figures on an ECDIS chart display, when the safety depth figure is set?",
        "options": [
          "'There will be alarms activated to let the operator know the depth under keel'",
          "'The whole sea area below that depth turns dark blue'",
          "'Figures less than the safety depth are highlighted in bold'",
          "'The display looks the same as it did before and is unchanged'"
        ],
        "correctIndex": 2
      },
      {
        "question": "According to the International Labour Organisation, how often should lifting appliances be re-tested?",
        "options": [
          "Annually.",
          "2 years.",
          "5 years.",
          "2 1/2 years."
        ],
        "correctIndex": 2,
        "image": "images/image507.jpg"
      },
      {
        "question": "What publication must be carried on a vessel carrying dry bulk cargoes?",
        "options": [
          "Charters' Solid Bulk Cargoes Code?",
          "International Tankers and Terminal Code?",
          "Classification Society Grain Rules?",
          "IMO Solid Bulk cargo Code or IMO Solid Bulk?"
        ],
        "correctIndex": 3,
        "image": "images/image831.jpg"
      },
      {
        "question": "One particular group of hazardous goods that is highlighted by the IMDG Code as potentially being the most dangerous for carriage is:",
        "options": [
          "Toxic substances.",
          "Liquefied gases.",
          "Infectious substances.",
          "Organic peroxides."
        ],
        "correctIndex": 3,
        "image": "images/image500.jpg"
      },
      {
        "question": "When on HF band a DSC distress alert is received, you have to listen to:",
        "options": [
          "The radio-telex distress frequency in the band in which the DSC distress alert was received",
          "2182 KHz",
          "8414.5 kHz (DSC distress frequency in 8 MHz)",
          "The radio telephony distress frequency in the band in which the DSC distress alert was received"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A bulk cargo declaration shows that the iron ore to be loaded has an angle of repose of 45 degrees; what does this indicate?",
        "options": [
          "The cargo pile will be very unstable",
          "The cargo may self-heat",
          "The cargo pile is stable and unlikely to shift",
          "The cargo should not be accepted to load"
        ],
        "correctIndex": 2,
        "image": "images/image835.jpg"
      },
      {
        "question": "Which option best completes the following statement? 'The version of the IHO presentation library on the ECDIS is important because...",
        "options": [
          "...it allows ECDIS to decide on the scale setting of the chart",
          "...if it is not the latest version, the ECDIS will not be compliant",
          "...it influences the colours on the display",
          "...it is where the files for maintenance of the system software are stored"
        ],
        "correctIndex": 1
      },
      {
        "question": "According to the International Labour Organisation, how often should lifting appliances and items of loose gear be thoroughly inspected by a competent person?",
        "options": [
          "Annually.",
          "Biannually.",
          "Every 6 months.",
          "Every 5 years."
        ],
        "correctIndex": 0,
        "image": "images/image507.jpg"
      },
      {
        "question": "Small oil spills on deck can be kept from going overboard by doing what?",
        "options": [
          "Closing the lids on the vents",
          "Plugging the scuppers",
          "Plugging the sounding pipes",
          "Driving wooden plugs into the vents"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "A large vessel is proceeding under its own power in a narrow channel, assisted by a tug. Where should the tug be connected to best assist the ship maintain steerageway?",
        "options": [
          "Standing-by - ready for use anywhere, as required",
          "Made fast on a line through the centre lead forward",
          "Made fast on a line through the centre lead aft",
          "Pushing alongside - either side"
        ],
        "correctIndex": 2,
        "image": "images/image562.jpg"
      },
      {
        "question": "Information about your ship's security arrangements and procedures is stored electronically. Which of these measures will help safeguard it from potential threats?",
        "options": [
          "Passwords",
          "Encoded email messages",
          "Work history verification",
          "Protective markings"
        ],
        "correctIndex": 0,
        "image": "images/image92.jpg"
      },
      {
        "question": "When considering how to deal with cargo residues during hatch cleaning at sea on a Bulk Carrier, what is the most careful consideration?",
        "options": [
          "Check procedures and Arrangements manual",
          "Consult MARPOL handbook and the vessels Safety Management System (SMS) for guidance",
          "There are no restrictions on discharge of cargo residues to sea",
          "Follow actions of previous crews"
        ],
        "correctIndex": 1,
        "image": "images/image839.jpg"
      },
      {
        "question": "Satellites which receive the 406 MHz Cospas-Sarsat EPIRB are:",
        "options": [
          "Capable to determine the position of the EPIRB",
          "Only capable to determine the position of the EPIRB in certain curcumstances",
          "Not capable to determine the position of the EPIRB",
          "Capable to determine position only in day time"
        ],
        "correctIndex": 0,
        "image": "images/image9.jpg"
      },
      {
        "question": "What is the purpose of the « SQUELCH » on a VHF transmitter/receiver?",
        "options": [
          "Increase the range of the transmitter",
          "Increase the sound signal of the receiver",
          "Reduce the \"noise\" in the background",
          "Switch to another channel"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "The type-indication of the radio set is mentioned in:",
        "options": [
          "Registry certificate",
          "The survey of equipment",
          "The equipment appendix",
          "The safety certificate"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "The ship is navigating in dense fog where the visibility is less than one mile. The Arpa radar is set on a range 12 miles on a course of 314 degrees and own ship has a vector as shown. What is the vector mode selected on the Arpa?",
        "options": [
          "Relative vectors.",
          "True vectors",
          "Relative vectors, ground stabilised",
          "Relative vectors, sea stabilised"
        ],
        "correctIndex": 1,
        "image": "images/image579.jpg"
      },
      {
        "question": "Ships of 10.000 tons gross tonnage and more, shall be fitted with oil filtering equipment, complying with Reg.14 (7) of MARPOL for the control of machinery space bilges. What would be the maximum oil content of oily-water mixture to pass through the filter?",
        "options": [
          "30 ppm",
          "100 ppm",
          "60 ppm/n.m",
          "15 ppm"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "The safety message announces that a station:",
        "options": [
          "Is in serious and imminent danger and needs immediate assistance",
          "Will relay a message concerning an important navigational or meteorological warning",
          "Has an very urgent message concerning the safety of a vessel, a plane or another means of conveyance",
          "Is going to be under repairs"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "You can reduce the need for security guards in certain areas by installing:",
        "options": [
          "Water cannons",
          "Metal detectors",
          "Vapour detectors",
          "Anti-intruder devices"
        ],
        "correctIndex": 3,
        "image": "images/image88.jpg"
      },
      {
        "question": "What do you do after receiving a VHF DSC DISTRESS call ?",
        "options": [
          "You send immediately a DSC DISTRESS ACKNOWLEDGEMENT call",
          "You set watch on VHF channel 16",
          "You set watch on channel 13",
          "You send immediatly a DSC DISTRESS RELAY call"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Which of the following information shall be specified by the muster list?",
        "options": [
          "The abandon ship signal consisting of two long blasts",
          "Action to be taken by crew and passengers",
          "The specific duties assigned to passengers that are in charge of a group of others",
          "The muster list has been prepared and approved by the administration before the ship proceeds to sea"
        ],
        "correctIndex": 1,
        "image": "images/image61.jpg"
      },
      {
        "question": "Why do the cargo holds of a self-unloading bulk carrier have a \"W\" shaped cross section?",
        "options": [
          "To reduce the extent of tank top damages when discharging cargo",
          "So that during discharge the cargo will automatically fall onto the underlying conveyor belts",
          "So that cargoes are self-trimming during loading",
          "To make it easier for cargo to be discharged by grabs"
        ],
        "correctIndex": 1,
        "image": "images/image835.jpg"
      },
      {
        "question": "The most effective way to combat the threat of drug smuggling is to?",
        "options": [
          "\"Combining routine, but irregular searches of the ship with spontaneous targeted searches.\"",
          "Organize crew into pairs and conduct weekly searches of the ship.",
          "\"Perform routine, but irregular searches using teams of two or more personnel from the same department.\"",
          "Perform spontaneous targeted searches using teams of two or more personnel from the same department."
        ],
        "correctIndex": 0,
        "image": "images/image75.jpg"
      },
      {
        "question": "The mode J2B is used:",
        "options": [
          "For telephone traffic in the MF/HF bands between ship and shore stations",
          "In public broadcasting",
          "For radiotelex-traffic in the MF/HF band between the ship and shore stations",
          "For urgent message transmitting and receiving"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "During abandon ship exercise, what life-saving equipment must be demonstrated?",
        "options": [
          "Lifeboat radio",
          "How to communicate using the hand-held radios",
          "Wearing and fastening of lifejackets and associated equipment",
          "Location of immersion suits and thermal protective aids"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "A proper working of the 406 MHz Cospas-Sarsat EPIRB can be tested with:",
        "options": [
          "Requesting RCC for the test",
          "The testing function of the device",
          "Regulation monthly test transmissions from RCC 's",
          "Test transmissions from Cospas-Sarsat satellites"
        ],
        "correctIndex": 1,
        "image": "images/image9.jpg"
      },
      {
        "question": "*Which of the following detailed explanations should be mentioned in the Training Manual ?",
        "options": [
          "How to recover survival craft and rescue boats including stowage and securing",
          "How to use navigational equipment for survival crafts",
          "How to use surface to air visual signals to be used by survivors",
          "How to use escape routes and other escape methods"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "When loading a bulk cargo of Coal the ship must be fitted with appropriate instruments to measure the concentration of what gases within the cargo space?",
        "options": [
          "The concentration of Methane only",
          "The concentration of Carbon Monoxide only",
          "The gases specified in all of these answers",
          "The concentration of Oxygen only"
        ],
        "correctIndex": 2,
        "image": "images/image833.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 301-400",
    "questions": [
      {
        "question": "In the situation illustrated, what should be the power distribution of the tugs to maintain the ship sideways motion with only minor changes in the ship's heading?",
        "options": [
          "Full power on the forward tug and the after tug ceases to push, but continuously monitor the ship's gyro heading",
          "Considerably more power on the forward tug than the after tug, while monitoring the ship's gyro heading",
          "Equal power on both tugs while monitoring the ship's gyro heading",
          "Considerably more power on the aft tug than the forward tug, while monitoring the ship's gyro heading"
        ],
        "correctIndex": 3,
        "image": "images/image558.jpg"
      },
      {
        "question": "On a conventional rudder, how much lift force remains if the rudder-angle is decreased to 20 degrees, from an initial 35 degrees?",
        "options": [
          "About 80 %",
          "About 50 %",
          "About 10 %",
          "About 30 %"
        ],
        "correctIndex": 0,
        "image": "images/image532.jpg"
      },
      {
        "question": "Which of the following statements is the most accurate in relation to the safety depth contour setting on an ECDIS?",
        "options": [
          "'The safety depth contour value has no effect on ECDIS operation'",
          "'The safety depth contour has to be set at a value to reflect the vessel's draught'",
          "'The safety depth contour value is best set at a low value'",
          "'The safety depth contour value is best set at a high value'"
        ],
        "correctIndex": 1
      },
      {
        "question": "How often are \"abandon ship\" drills required to be held on cargo vessels according to SOLAS?",
        "options": [
          "Once every week.",
          "Once every year.",
          "Once every month.",
          "Once every 6 months."
        ],
        "correctIndex": 2,
        "image": "images/image56.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is this and from what direction is it viewed?",
        "options": [
          "This is a vessel engaged in fishing other than trawling, making way through the water, with outlying gear extending more than 150 metres in the direction of the all-round red light. Looking at it from astern",
          "This is a vessel engaged in pilotage duties at anchor. Looking at its port side",
          "This is a vessel engaged in fishing other than trawling, making way through the water, with outlying gear extending more than 150m in the direction of the all-round white light. Looking at its port side",
          "This is a vessel engaged in pilotage operations, deploying or recovering a pilot. Looking at its port side"
        ],
        "correctIndex": 2,
        "image": "images/image509.jpg"
      },
      {
        "question": "What does the term DISCHARGE mean, as used in the Oil Pollution Regulations?",
        "options": [
          "All the other alternatives",
          "Leaking",
          "Spilling",
          "Dumping"
        ],
        "correctIndex": 0,
        "image": "images/image57.jpg"
      },
      {
        "question": "Whilst sailing through a narrow coastal passage, an ECDIS alarm indicates that number 1 GPS HDOP value is outside set limits. What should happen on the bridge?",
        "options": [
          "Number 2 GPS should be selected as the primary receiver and the number 1 GPS switched off",
          "The ECDIS should be switched off as it will now be in DR mode and misleading to the bridge team",
          "The receiver should be checked and the vessel's position confirmed by other means",
          "The watchkeeper should call the master and then adjust the limit so that the alarm is removed"
        ],
        "correctIndex": 2,
        "image": "images/image295.jpg"
      },
      {
        "question": "Which option best describes what is meant by the Consistent Common Reference Point on a vessel.",
        "options": [
          "It is a point on the vessel common to all position related sensors",
          "It is a position that the radar scanner is in",
          "It is a term associated the ECDIS time constant",
          "It is a position that the GPS aerial is in"
        ],
        "correctIndex": 0
      },
      {
        "question": "Your vessel is not in distress and not taking part in a distress operation. How would you impose radio silence on vessels which are interfering the distress traffic?",
        "options": [
          "Seelonce Securite",
          "Seelonce Distress",
          "Seelonce Mayday",
          "Seelonce Pan"
        ],
        "correctIndex": 1,
        "image": "images/image14.jpg"
      },
      {
        "question": "What does the abbreviation SOLAS mean?",
        "options": [
          "International Agreement for Security of Load and Ships",
          "International Rules for Safe Ocean Lines and Sailingroutes",
          "International Convention for the Safety of Lives at Sea",
          "International Conference for Security of Loads aboard Ships"
        ],
        "correctIndex": 2,
        "image": "images/image58.jpg"
      },
      {
        "question": "For a \"distress alert\" via the DSC, the MF-band is used in the frequencies:",
        "options": [
          "TX: 2189.5 kHz RX: 2189.5 kHz",
          "TX: 500.0 KHz RX: 518.0 KHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The word RADIO is spelled conform the international phonetic alphabet:",
        "options": [
          "Radio, Alfa, Delta, India, Oscar",
          "Romeo, Atlanta, Delta, India, October",
          "Romeo, Alpha, Delta, India, October",
          "Romeo, Alfa, Delta, India, Oscar"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Are there any exceptions from OPA-90",
        "options": [
          "Yes, close to any US naval base",
          "No exceptions",
          "Yes, transit passage through US waters to a non US port",
          "Yes, if the vessel calls a US port for only a short stop"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship sighting containers adrift in vicinity of her position ? (No message about this problem was previously transmitted via NAVTEX or INMARSAT C SAFETYNET)",
        "options": [
          "Distress call",
          "Distress relay call",
          "Urgent call",
          "Safety call"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "The reporting of incidents involving harmful substances and / or marine pollutants is regulated under:",
        "options": [
          "The UN Convention on the Reporting of Accidents and Incidents which Present a Hazard to the Marine Environment 2004.",
          "Appendix B of the Supplement to the IMDG Code.",
          "Annex II to SOLAS 1974.",
          "Protocol I of MARPOL."
        ],
        "correctIndex": 3,
        "image": "images/image522.jpg"
      },
      {
        "question": "Which of the following is the correct minimum carriage requirement for a ship of more than 300 gross tons and operating in area A1:",
        "options": [
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable - 1 EPIRB",
          "1 MF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –",
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable",
          "1 VHF RT – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "At what minimum height above sea level must a SART transponder be mounted?",
        "options": [
          "1 metre",
          "0.5 metre",
          "The proper function of a SART transponder doesn't depend on the height above sea level",
          "2 metres"
        ],
        "correctIndex": 0,
        "image": "images/image3.jpg"
      },
      {
        "question": "If all indications are that a cargo has been received without damages, irregularities or short shipment and the phrase \"apparent good order and condition\" is entered on the Bill of Lading, then this Bill is this said to be:",
        "options": [
          "A Bill of Lading completed for shipment.",
          "A clean Bill of Lading.",
          "A Due Title Bill of Lading.",
          "An endorsed Bill of Lading."
        ],
        "correctIndex": 1,
        "image": "images/image518.jpg"
      },
      {
        "question": "What sound signal can be made when nearing a bend in a river, with the view around the bend obscured by an intervening obstruction?",
        "options": [
          "Two short blasts",
          "One short blast",
          "Two prolonged blasts",
          "One prolonged blast"
        ],
        "correctIndex": 3,
        "image": "images/image536.jpg"
      },
      {
        "question": "When using an ENC chart to passage planning, why should a scale at or near its compilation scale always be used?",
        "options": [
          "It is only at this scale that route validation is possible",
          "That is incorrect, as any ENC can be zoomed in or out for passage planning",
          "The chart detail is correct for its usage band",
          "It is only at this scale that a route can be plotted"
        ],
        "correctIndex": 2,
        "image": "images/image487.jpg"
      },
      {
        "question": "The hydrostatic release of an EPIRB should be changed",
        "options": [
          "Every three years",
          "Yearly",
          "Every four years",
          "Every two years"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "With what system is a NAVTEX-message transmitted?",
        "options": [
          "SELFEC",
          "ARQ",
          "JRC",
          "FEC"
        ],
        "correctIndex": 3,
        "image": "images/image20.jpg"
      },
      {
        "question": "What should you do with the ashes from your vessels incinerator which had burned garbage containing plastics?",
        "options": [
          "Discharge at sea providing you are more than 12 miles offshore",
          "Discharge at sea providing you are more than 25 miles offshore",
          "Discharge at sea providing you are not in any river or estuary",
          "Discharge to a shore facility only"
        ],
        "correctIndex": 3,
        "image": "images/image237.jpg"
      },
      {
        "question": "What are the main advantages to the Navstar, Glonas and Galileo satellite navigation systems?",
        "options": [
          "Satellite navigation systems also give information about weather and wave conditions",
          "If a vessel uses any one of them, there is no need to practice other forms of navigation",
          "These satellite systems give world-wide coverage 24 hours a day",
          "They are all made specifically for ships and marine operations"
        ],
        "correctIndex": 2,
        "image": "images/image493.jpg"
      },
      {
        "question": "What measures should be taken in order to avoid flammable gases forming on top of coal cargoes on a Bulk Carrier?",
        "options": [
          "Cargo to be ventilated by opening hatch covers at sea?",
          "Ventilation to be carried out as indicated in the IMO solid Bulk Cargo Code",
          "Cargo not to be ventilated?",
          "Ventilation to be continuous?"
        ],
        "correctIndex": 1,
        "image": "images/image846.jpg"
      },
      {
        "question": "Whilst on passage, what type of position monitoring is conventionally considered to be the most suitable?",
        "options": [
          "Traditional forms of position fixing that are more trustworthy that satellite",
          "A satellite system plotted on ECDIS or a paper chart",
          "One that employs more than one position fixing system",
          "Gyro compass bearings from two lighthouses or fixed marks"
        ],
        "correctIndex": 2,
        "image": "images/image247.jpg"
      },
      {
        "question": "*The correct order of actions to be taken in a fire emergency, should be...",
        "options": [
          "Evaluation of the situation, rescue and life-saving, confinement of fire, extinction, then feed back on the emergency",
          "Evaluation of the situation, confinement of fire, rescue and life-saving, extinction",
          "Extinction, evaluation of the situation, confinement of fire, rescue and life-saving",
          "Extinction, confinement of fire, feed back on the emergency, rescue and life-saving, then evaluation of the situation"
        ],
        "correctIndex": 0,
        "image": "images/image51.jpg"
      },
      {
        "question": "All designated SAR aircraft and civil aircraft carry equipment operating on the international aeronautical distress frequencies (amplitude modulation). The aeronautical distress frequencies are?",
        "options": [
          "127.8 MHz and/or 349.6 MHz",
          "121.5 MHz and/or 243.0 MHz",
          "123.8 MHz and/or 247.6 MHz",
          "243.1 MHz and/or 486.2 MHz"
        ],
        "correctIndex": 1,
        "image": "images/image29.jpg"
      },
      {
        "question": "Your vessel is close to the entrance of a port in thick fog. You hear the following signal. What does it mean?",
        "options": [
          "That there is a vessel at anchor in the vicinity. It is more than 100 metres in length",
          "That the port is closed",
          "That there is a vessel aground in the vicinity",
          "That there is a vessel at anchor in the vicinity. It is less than 100 metres in length"
        ],
        "correctIndex": 3,
        "image": "images/image489.jpg"
      },
      {
        "question": "For a DSC-connection (no 'distress alert') with another vessel the following frequencies are used:",
        "options": [
          "Tx: 2187.5 kHz RX: 2182.0 kHz",
          "TX: 2189.5 kHz RX: 2189.5 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "It is the Master's responsibility to ensure that:",
        "options": [
          "All personnel participate in the training at the same time",
          "safety equipment is not used during the training",
          "All information reagrding the onboard training is given to the ship manager",
          "concerned personnel carry out the on-board traing progamme effectively"
        ],
        "correctIndex": 3,
        "image": "images/image53.jpg"
      },
      {
        "question": "A ship in distress should transmit the appropriate alarm signal followed by the distress call and message on one or all of the international distress frequencies. Which of frequencies is in accordance with the present recommendations?",
        "options": [
          "550 kHz, 2182 kHz and 121.5 MHz",
          "500 kHz, 2182 kHz and 156.8 MHz",
          "550 kHz, 2367 kHz and 121.5 MHz",
          "500 kHz, 2367 kHz and 243 MHz"
        ],
        "correctIndex": 1,
        "image": "images/image7.jpg"
      },
      {
        "question": "Buoyant smoke signals shall be so designed as to burn or emit smoke:",
        "options": [
          "Only when not in the water",
          "Continuously after having been immersed for a period of 10 seconds under 100 mm of water when underwater",
          "Continuously after having been immersed for a period of 1 minute under 1m of water",
          "When under water"
        ],
        "correctIndex": 1,
        "image": "images/image248.jpg"
      },
      {
        "question": "MARPOL - Annex V. Disposal of garbage. Your vessel is in the Red Sea (Special Area) and the Chief Cook is requesting to have some food waste burned in the incinerator. Due to problems with incinerator, you decide to have the waste ground in the Grinder (Lump size max. 25 mm) and disposed off into the sea. Is this prohibited, if not, how far from nearest land is this legal?",
        "options": [
          "25 miles",
          "3 miles",
          "This is prohibited",
          "12 miles"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "Your vessel is progressing within a Traffic Separation Scheme and receives a navigational warning of another vessel progressing the wrong way within the scheme. What actions should be taken on the bridge, if any?",
        "options": [
          "Slow down your vessel and proceed with caution, posting extra lookouts",
          "Proceed on passage and monitor the rogue vessel",
          "Move into the inshore traffic zone",
          "Call the rogue vessel and point out its position"
        ],
        "correctIndex": 1,
        "image": "images/image315.jpg"
      },
      {
        "question": "A Bulk Vessel is to load a cargo of grain; pre loading calculations show that IMO stability criteria cannot be achieved; the vessel should do which of the following?",
        "options": [
          "The cargo can still be loaded",
          "The vessel will be unable to load the cargo",
          "An exemption certificate must be applied for",
          "The grain surfaces in some or all of the cargo spaces must be secured"
        ],
        "correctIndex": 3,
        "image": "images/image837.jpg"
      },
      {
        "question": "Which of the following duties shall be included in the \"muster list\" as being assigned to crewmembers in relation to passengers?",
        "options": [
          "Ensuring that every passenger is provided with an immersion suit or a thermal protective aid",
          "Clearing the escape routes",
          "Assembling passengers at muster station",
          "Ensuring that extra food and water is taken to the survival craft"
        ],
        "correctIndex": 2,
        "image": "images/image153.jpg"
      },
      {
        "question": "For the same vessel and the same rudder angle, is the diameter of the turning circle completed at full ahead smaller than one completed at half ahead?",
        "options": [
          "No, it will be much larger turning circle at half ahead.",
          "Yes, there would be a change of shape of the turning circle; it would have an increase in the transfer, but not the advance.",
          "Yes, it would be a much smaller turning circle at half ahead",
          "No, the diameter of the turning circle would be almost the same."
        ],
        "correctIndex": 3,
        "image": "images/image551.jpg"
      },
      {
        "question": "What must be done if the Oil Discharge Monitoring Equipment (ODME) should fail during a ballast voyage?",
        "options": [
          "The failure must be repaired",
          "The failure must be noted in the Oil Record Book",
          "If the failure cannot be repaired onboard, the ODME must be repaired before the ship commences its next voyage",
          "All of the mentioned must be performed"
        ],
        "correctIndex": 3,
        "image": "images/image259.jpg"
      },
      {
        "question": "How often must inspection of proper working of the EPIRB 's and SART 's take place on board? Once per:",
        "options": [
          "Week",
          "Every day",
          "Month",
          "14 days"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain maritime assistance ?",
        "options": [
          "38",
          "32",
          "39",
          "37"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '33' can be used:",
        "options": [
          "When technical problems are experienced with the Inmarsat-terminal",
          "To ask for 'maritime enquiries",
          "When the coast-station is disfunctional",
          "To ask for radio medical advice"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A deep draught vessel sailing in a very narrow channel can develop a sudden sheer as it slows down. What could be the cause of this?",
        "options": [
          "The hydrodynamic interaction effects from the banks of the shallow water channel acts on the stern causing the vessel to sheer strongly",
          "The large volume of water dragged behind the vessel continues to move forward and cause a strong turning moment on the stern of the vessel",
          "The vessel stopping shifts the pivot point forward and creates a turning moment and results in the ship swinging towards the bank.",
          "The shallow water reduces the effectiveness of the rudder and when the vessel stops any applied rudder will become suddenly more effective."
        ],
        "correctIndex": 1,
        "image": "images/image531.jpg"
      },
      {
        "question": "The emergency battery of a GMDDS portophone:",
        "options": [
          "Must be replaced before the expiry date is exceeded",
          "Must be charged after expiry date",
          "Must be tested once a week",
          "Cannot be replaced"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of following items shall be included in an abandon ship drill?",
        "options": [
          "Checking passenger's immersion suits",
          "instruction in the use of radio life-saving appliances",
          "Checking the lifeboat provisions and supplies",
          "Checking the distress signal rockets and other distress signals"
        ],
        "correctIndex": 1,
        "image": "images/image80.jpg"
      },
      {
        "question": "How often shall each member of the crew participate in an \"abandon ship\"-drill?",
        "options": [
          "Once a year",
          "Once every month",
          "Once every week",
          "Once every 6 months"
        ],
        "correctIndex": 1,
        "image": "images/image49.jpg"
      },
      {
        "question": "What does STCW deal with?",
        "options": [
          "STCW deals with recommendation for training centre and schools and type of education for seafarers",
          "STCW deals with minimum recommendation for training centre and schools",
          "STCW deals with minimum recommendation of education for seafarers and minimum standards for training centre and schools",
          "STCW deals with training centre and schools and standards for watch keepers"
        ],
        "correctIndex": 2,
        "image": "images/image84.jpg"
      },
      {
        "question": "You receive a distress alert on HF Radio. What should you do?",
        "options": [
          "Acknowledge receipt.",
          "Relay the message immediately on 2182 kHz.",
          "Wait three minutes and if no acknowledgement is heard from a coast station you should relay the alert.",
          "No response is necessary providing the vessel is more than 24 hours away."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "If one wishes to make a collect call from a vessel to a shore subscriber, one must:",
        "options": [
          "Request for telephone message stating name, address and telephone number",
          "Request for a personal call",
          "Request for a collect call",
          "Inform the telephone number on whom to charge the call"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "The prescribed test of an approved portable VHF radio set (portophone) must be done once a:",
        "options": [
          "Year",
          "Month",
          "Quarter",
          "Week"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "For security purposes, the IMDG Code should be read in conjunction with the:",
        "options": [
          "IMO NVIC 24 and 46 CFR 2.05.",
          "Chapter XI-2 of SOLAS and Part A of the ISPS Code.",
          "Part B of the ISPS Code and Chapter II of the Maritime Transport and Offshore Facilities Act.",
          "Chapter V of SOLAS and Annex II of MARPOL."
        ],
        "correctIndex": 1,
        "image": "images/image513.jpg"
      },
      {
        "question": "For which ships is the SOLAS convention applicable?",
        "options": [
          "For passenger vessels only.",
          "For all vessels except passenger vessels.",
          "For all vessels.",
          "For tankers and other vessels carrying persistent oil as cargo."
        ],
        "correctIndex": 2,
        "image": "images/image58.jpg"
      },
      {
        "question": "Hand flares and buoyant smoke signals can continue to burn or emit smoke after having been immersed for a period of 10s",
        "options": [
          "Right if the immersion depth is smaller than 100 mm",
          "Wrong",
          "Right",
          "Right if the immersion depth is more than 1m"
        ],
        "correctIndex": 0,
        "image": "images/image242.jpg"
      },
      {
        "question": "What is SITREP an abbreviation for?",
        "options": [
          "Situation Report.",
          "Ship Indication Transmission Equipment.",
          "Ship Transit Emergency Radio.",
          "Survivor Indication Transponder Equipment."
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "When a vessel violates the oil pollution laws, who may be held responsible?",
        "options": [
          "Any one involved in the operation",
          "Officers only",
          "Shipowners only",
          "Captain only"
        ],
        "correctIndex": 0,
        "image": "images/image57.jpg"
      },
      {
        "question": "Where would you find the document relating to the \"Condition of Freeboard Assignment\" onboard?",
        "options": [
          "With the Structural Survey File.",
          "With the Safety Construction Certificate.",
          "With the Loadline Certificate.",
          "With the Classification Records."
        ],
        "correctIndex": 2,
        "image": "images/image498.jpg"
      },
      {
        "question": "Most minor oilspills are caused by:",
        "options": [
          "Equipment failure",
          "Major casualties",
          "Unforeseeable circumstances",
          "Human error"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "With help of DSC a ship wants to contact a coast-station to have a question for telephone call. One has to choose from the following DSC-frequencies",
        "options": [
          "TX: 8415.0 kHz RX: 8436.5 kHz",
          "TX: 8415.0 kHz RX: 8415.0 kHz",
          "Tx: 8414.5 kHz RX: 8414.5 kHz",
          "TX: 8436.5 kHz RX: 8436.5 kHz"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "The use of MF and/or VHF R/T",
          "The use of HF DSC",
          "The use of MF and/or HF R/T",
          "The use of DSC and/or INMARSAT C"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "A distress-call received via RCC should:",
        "options": [
          "Only be given receipt, if the master has confirmed that assistance indeed can be given",
          "Be given receipt, even when indubitably too distant from the distress case",
          "Always be relayed",
          "Always be given receipt"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "You are on a sailing vessel, underway in open water. This vessel is sighted on the starboard bow, on a steady bearing and the distance is closing. By the International Regulations for the Preventing Collisions at Sea, what action will you follow?",
        "options": [
          "This vessel is clearly a power-driven vessel and I anticipate that the bearing will therefore close and she will pass ahead at a safe distance",
          "Risk of collision is deemed to exist and, as the other vessel is on a steady bearing on my starboard side, I will maintain my course and speed",
          "By Rule 18, a power-driven vessel underway shall keep out of the way of a sailing vessel. I will maintain my course and speed, but will continue to monitor situation to ensure the other vessel takes avoiding action",
          "Risk of collision is deemed to exist and, as the other vessel is on a steady bearing on my starboard side, I am required to keep out of the way. I will make a broad alteration of course to starboard"
        ],
        "correctIndex": 2,
        "image": "images/image563.jpg"
      },
      {
        "question": "On all UMS operated vessels and also on most other vessels the engine room is equipped with fire detectors. What requirements of testing and checking of the detectors are to be observed?",
        "options": [
          "Check that the actual detector is giving appropriate signals to the central control unit and that all electric connections are in good order.",
          "When testing detectors by suitable equipment (smoke and heat) check that the sensors self controlling system, e.g. a flashing control light etc. is functioning.",
          "All the mentioned alternatives.",
          "Check the detector with heat and/or smoke (in accordance with instructions in its manual)"
        ],
        "correctIndex": 2,
        "image": "images/image86.jpg"
      },
      {
        "question": "On the MF/HF transmitter-receiver there is a sensitivity control. Another name for this is:",
        "options": [
          "AGC-gain",
          "LF-gain",
          "AF-gain",
          "RF-gain"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A message is sent to a fax-machine. However the message cannot be delivered by the land earth station. The land earth station will:",
        "options": [
          "Never send a non-delivery notification (NDN) message to the sender. The sender to verify if the message was received",
          "Call the sender on telephone and inform",
          "Will only send a non-delivery notification (NDN) to the sender if so requested by him",
          "Automatically send a non-delivery notification (NDN) to the sender"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Why is it important to make weekly/routine rounds in the accomodation areas?",
        "options": [
          "To search for any contraband goods hidden on board",
          "It is a requirement as per flag state",
          "To ensure that cabins and common spaces are maintained in a clean, safe and hygienic condition",
          "To check for alcohol in cabins"
        ],
        "correctIndex": 2,
        "image": "images/image240.jpg"
      },
      {
        "question": "Your vessel is power-driven and making way in open water. This vessel is sighted wide on the port bow. It's bearing is opening, but its distance is closing rapidly. Which of the following is a correct assessment of the situation and the action to be taken?",
        "options": [
          "Risk of collision is a possibility. I will maintain my course and speed for now, but be prepared for an alteration of course to port if the CPA seems to be less than 0.2nm as we draw closer",
          "Risk of collision is deemed to exist and I will make a broad alteration of course to starboard, sounding one short blast. I will re-assess the situation when the alteration is carried out",
          "Risk of collision is deemed not to exist and I will maintain my course and speed. I will continue to monitor the situation",
          "Risk of collision is deemed not to to exist. However, to be sure of a safe passing distance, I will reduce my speed to allow the other vessel to pass ahead"
        ],
        "correctIndex": 2,
        "image": "images/image494.jpg"
      },
      {
        "question": "\" What is the meaning of the abbreviation \"\"RQ\"\" at the end of a DSC sequence?\"",
        "options": [
          "Problem of transmission",
          "End of sequence",
          "Acknowledgement request",
          "Acknowledgment broadcast"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "A \"Standard Format for Search and Rescue Situation Reports\" (SITREPs) should be used by vessels in distress. The SITREP can be compiled as a short form (urgent essential details). Which of the following information shall be included when using the \"short form\"?",
        "options": [
          "Oil spill possibility.",
          "Cargo information.",
          "Position.",
          "Weather on-scene."
        ],
        "correctIndex": 3,
        "image": "images/image27.jpg"
      },
      {
        "question": "The emergency fire pump is in accordance with good seamanship and precautionary routines run and tested weekly. Routine checks and maintenance are normally carried out by dedicated personnel. To ensure safe and appropriate operation of the pump, would you consider it beneficial that the same dedicated personnel operate the pump in emergencies?",
        "options": [
          "Only senior engineers should operate the emergency pump.",
          "To ensure safe operation of the emergency pump,only dedicated personnel must be permitted to operate the pump.",
          "In case of accidents, it is important that a wide range of personnel must be permitted and trained to operate the pump.",
          "Only senior deck officers should operate the emergency pump."
        ],
        "correctIndex": 2,
        "image": "images/image243.jpg"
      },
      {
        "question": "A bulk cargo vessel is found to be 4.0 centimetres over her maximum loadline draft after loading; what should be the actions of the master?",
        "options": [
          "Inform the port authorities and sail",
          "Order the pumping out of fresh water or ballast until the maximum allowed loadline is achieved.",
          "Record a lower draught and sail",
          "There is not a problem as over loading is permitted"
        ],
        "correctIndex": 1,
        "image": "images/image461.jpg"
      },
      {
        "question": "On a MF/HF-transmitter-receiver there is a volume control. Another name for this is:",
        "options": [
          "Sensitivity",
          "LF-gain",
          "HF-gain",
          "RC-gain"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "How are the effects of squat seen on a moving vessel?",
        "options": [
          "There will be a reduction of the vessel's underkeel clearance and a possible change of trim.",
          "There will be a change of draught and a reduction in the speed.",
          "Heel can result on a vessel with a large block coefficient and a speed reduction",
          "There will be an increase in the vessels draught while moving through the water"
        ],
        "correctIndex": 0,
        "image": "images/image547.jpg"
      },
      {
        "question": "With maintenance of batteries it is of primary importance that:",
        "options": [
          "There is an absolute free access to the battery space",
          "The space where the batteries are stored is properly ventilated",
          "There is proper relative humidity in the space where the batteries are stored",
          "The space is not oily"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following prevention actions offers the guarantee of an efficient intervention in an emergency",
        "options": [
          "All the listed answers",
          "The installation of protective measures",
          "Planning of the emergency",
          "Training of the crew"
        ],
        "correctIndex": 0,
        "image": "images/image55.jpg"
      },
      {
        "question": "What is the colour and characteristic of a \"towing light\", as defined in the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "Yellow, fixed, seen over an arc of 135 degrees and so arranged as to display 67.5 degrees from right aft on each side of the vessel",
          "Amber, all-round, flashing, where it can best be seen",
          "One of two all-round amber, alternate flashing lights, displayed where they can best be seen",
          "White, fixed, displayed as an additional light on the foremast over an arc of 225 degrees, from right ahead to 22.5 degrees abaft the beam on each side of the vessel"
        ],
        "correctIndex": 0,
        "image": "images/image557.jpg"
      },
      {
        "question": "A bulk carrier is to carry a full deck cargo of packaged timber; to what regulations must the vessel comply?",
        "options": [
          "Marine Pollution Regulations",
          "International Code for the carriage of Dangerous Goods",
          "IMO Code of Practice for the carriage of Timber Deck cargoes",
          "Grain Regulations"
        ],
        "correctIndex": 2,
        "image": "images/image843.jpg"
      },
      {
        "question": "To receive distress alerting and MSI via an Inmarsat-C set vessels must have:",
        "options": [
          "MF/HF radio telex scanner with printer",
          "SES or an EGC receiver",
          "Suitable for 518 kHz NAVTEX receiver",
          "A radio officer on board"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The receipt of a distress alert is to be pronounced as followed:",
        "options": [
          "Mayday (1x) / distress aleert / own ship call sign",
          "Mayday (1x) / this is / own call-sign (3x) received mayday",
          "Mayday (1x), call-sign of ship in distress (3x) / this is / own call-sign (3x) / received mayday",
          "Mayday (3x) / this is / own call-sign (1x) / received mayday / call-sign of ship in distress (1x)"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "Which international convention deals with pollution prevention?",
        "options": [
          "ISGOTT.",
          "SOLAS.",
          "STCW.",
          "MARPOL."
        ],
        "correctIndex": 3,
        "image": "images/image81.jpg"
      },
      {
        "question": "Which of the following is a ship MMSI ?",
        "options": [
          "227530000",
          "1227200",
          "22753000",
          "2275300"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Large bulk carriers are more likely to suffer from cracks in structure in which of the following parts of the vessel?",
        "options": [
          "On bottom plating in the after part of the vessel",
          "In number 1 and number 2 holds",
          "Around hatch corners and upper ballast tanks amidships",
          "In after peak area"
        ],
        "correctIndex": 2,
        "image": "images/image802.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of MF DSC",
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs",
          "The use of VHF DSC"
        ],
        "correctIndex": 3,
        "image": "images/image10.jpg"
      },
      {
        "question": "A vessel is equipped for all sea areas. In the middle of the Indian Ocean the EGC-receiver appears out of order. Is it still possible to receive MSI-messages?",
        "options": [
          "NO",
          "Yes, with the MF/HF-radio telex",
          "Yes with VHF DSC",
          "Yes, with the MF/HF-DSC"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "How is a 'sidelight' described in rule 21 of the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "A green light on the starboard side and red light on the port side, showing an unbroken light over an arc of 112.5 degree, from right ahead to 22.5 degrees abaft the beam on the respective side",
          "A red light or a green light, with a minimum range, in a vessel of 50 metres or more, of 3 miles. In a vessel of 10 metres or more but less than 50 metres in length, a range of 1 mile",
          "A red, green or yellow lantern, showing an unbroken light over an arc of 112.5 degrees",
          "A green light on the starboard side and red light on the port side, showing an unbroken light over an arc of 135 degrees, from right ahead to 22.5 degrees abaft the beam on the respective side"
        ],
        "correctIndex": 0,
        "image": "images/image554.jpg"
      },
      {
        "question": "One of the sailors needs urgent medical assistance. The VHF-call starts with:",
        "options": [
          "MAYDAY (3x)",
          "PAN PAN (3x)",
          "Urgent (3x)",
          "SOS (3x)"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "A passage plan should indicate ways to fix position, and include which of the following methods?",
        "options": [
          "Radar ranges with parallel indexing",
          "Visual navigation using land marks or celestial bodies",
          "Position information from electronic systems",
          "All of these suggested answers"
        ],
        "correctIndex": 3,
        "image": "images/image487.jpg"
      },
      {
        "question": "Which word will precede an urgency message ?",
        "options": [
          "MAYDAY",
          "PAN",
          "PAN PAN",
          "URGENCE"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "On board they want to have a dial-phone call via Inmarsat with the Apollogracht. In the guides the following ID's are found for the Apollogracht:344320000, 424432010, 424432020, 1300210, 36715. What ID should be chosen:",
        "options": [
          "344320000",
          "1300210",
          "424432010",
          "424432020"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "With an EPIRB:",
        "options": [
          "You must check the working of the charger and check the loaded condition of the battery",
          "You must check the date the battery must be replaced",
          "You must check if it is attached properly to a railing with the required line",
          "You must check the manufacturer of the battery"
        ],
        "correctIndex": 1,
        "image": "images/image15.jpg"
      },
      {
        "question": "DG placards shall be located on a freight container:",
        "options": [
          "One of the back end and one on any of the sides (only).",
          "One on each end and one on each side.",
          "One on each end (only).",
          "One on each side (only)."
        ],
        "correctIndex": 1,
        "image": "images/image538.jpg"
      },
      {
        "question": "Would the indicated ground speed be suitable when berthing a large vessel?",
        "options": [
          "The speed requirements are decided by the pilot and should not be the concern of the OOW.",
          "The indicated speed would be a normal speed approaching a berth.",
          "The approach speed is essential to maintain steerage when coming alongside",
          "The approach speed is way too fast, even for a vessel in ballast."
        ],
        "correctIndex": 3,
        "image": "images/image528.jpg"
      },
      {
        "question": "What differences in design are there between a standard cargo hold and a cargo hold which can also be used for ballast on a Bulk Carrier?",
        "options": [
          "The coamings are much lower on the ballast hold",
          "There is no differences in design",
          "This hold does not have ventilators",
          "The ballast hold hatch cover must be fitted with additional securing devices"
        ],
        "correctIndex": 3,
        "image": "images/image835.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding abandon ship drills corresponds to present SOLAS regulation?",
        "options": [
          "Drills shall be conducted when the ship is in a harbour",
          "On ships on short international voyages, each lifeboat shall be launched and maneuvered in the water at least every six months",
          "Each lifeboat shall be launched, and maneuvered in the water with its assigned crew at least once every three months during an abandon ship drill",
          "All lifeboats shall be lowered during drills"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "Where should the placard you are shown be located, according to U.S. Coast Guard regulations ? (Title 33-Navigation and Navigable waters, § 155.440 )",
        "options": [
          "In a conspicuous place in each machinery space",
          "In a conspicuous place at the bilge and ballast pump control station",
          "In the wheelhouse",
          "Both in a conspicuous place in each machinery space and in a conspicuous place at the bilge and ballast pump control station"
        ],
        "correctIndex": 3,
        "image": "images/image176.jpg"
      },
      {
        "question": "Non distress calls on 2182 kHz and VHF channel 16 should not exceed:",
        "options": [
          "Five minutes.",
          "One minute.",
          "Three minutes.",
          "Two minutes."
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft distress pyrotechnic signals",
          "Epierb",
          "Rocket parachute flares",
          "Radar transponder"
        ],
        "correctIndex": 3,
        "image": "images/image253.jpg"
      },
      {
        "question": "The whip-antenna of the MF transceiver was lost in bad weather. The MF-transceiver can be used again:",
        "options": [
          "If instead of the whip-antenna, another whip-antenna such as the spare VHF antenna is connected",
          "Only if the whip antenna is replaced by another whip-antenna of the same length",
          "If the whip-antenna is replaced by an antenna of about the same length as the original one",
          "If the whip-antenna is replaced by a Sat C antenna"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "An EPIRB has been activated accidentally. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Send a distress priority VHF DSC call and make broadcast to all stations",
          "Call a LUT and inform it",
          "Make broadcast to all stations on VHF 16",
          "Call the nearest coast station and inform it that a false distress alert has been transmited"
        ],
        "correctIndex": 3,
        "image": "images/image2.jpg"
      },
      {
        "question": "Messages sent via INMARSAT C are charged:",
        "options": [
          "On the basis of a three minute minimum charge with one minute incremental steps",
          "On the number of kilobits of information transmitted per block of 256 bits",
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the number of kilobits of information transmitted per block of 1024 bits"
        ],
        "correctIndex": 1,
        "image": "images/image12.jpg"
      },
      {
        "question": "The names and addresses of accounting authorities can be found in :",
        "options": [
          "The ITU List of Coast Stations",
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Ship Stations",
          "The ITU List of Radiodetermination and Special Services"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 401-500",
    "questions": [
      {
        "question": "Which IMO convention takes care of the human safety at sea ?",
        "options": [
          "the STCW 78/95",
          "the MARPOL convention",
          "The SOLAS convention",
          "there isn't any conventions that take care of the human safety at sea"
        ],
        "correctIndex": 2,
        "image": "images/image159.jpg"
      },
      {
        "question": "On an oil tanker, are there any restrictions as to the maximum amount of treated water that originates from cargo spaces that has passed through a bilge water separator that can be discharged?",
        "options": [
          "There isn't any restrictions of pumping sludge from ships outside special areas",
          "Maximum is 60 litre pr nautical mile and total is 1/30000 part of full cargo on the ballast voyage.",
          "Maximum is 30 litre pr nautical mile and total is 1/10000 part of full cargo on the ballast voyage.",
          "Maximum is 30 litre pr nautical mile and total is 1/30000 part of full cargo on the ballast voyage."
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "The Training Manual shall contain instructions and information on the life-saving appliances and the best method of survival. The training manual shall contain detailed explanations of crew duties in relation to emergency situations. Which of the following tasks or duties shall be included in the manual according to present regulations?",
        "options": [
          "The use of surface to air visual signals to be used by survivors.",
          "The use of escape routes and other escape methodes.",
          "The use of the ship's line throwing apparatus.",
          "The use of navigational equipment for survival crafts."
        ],
        "correctIndex": 2,
        "image": "images/image83.jpg"
      },
      {
        "question": "When sending an OBS (weather report) with Inmarsat one should use Service Code '41'. With this address the weather report will always be transmitted to:",
        "options": [
          "MET office Washington, this office will take care of further dispatch of the weather reports",
          "The meteorological office of the ship's flag state",
          "The meteorological station connected with the CES used",
          "KNMI in Holland"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "You have an important navigational or meteorological warning to transmit. What call should proceed this message when made on the radio telephone?",
        "options": [
          "Mayday Mayday  (3 times)",
          "Victor Victor (3 times)",
          "Securite Securite (3 times)",
          "Pan Pan  (3 times)"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "As per SOLAS regulations, the general emergency alarm system must be tested:",
        "options": [
          "Every 2 weeks",
          "Every month",
          "Every week",
          "Every 3 weeks"
        ],
        "correctIndex": 2,
        "image": "images/image174.jpg"
      },
      {
        "question": "Testing a SART is permitted:",
        "options": [
          "Only in a port or harbour",
          "Only in the workshop",
          "Only at sea, outside territorial waters",
          "At sea, outside territorial waters, and in port or harbour"
        ],
        "correctIndex": 3,
        "image": "images/image5.jpg"
      },
      {
        "question": "Who is responsible for the vessel's radio station and mandatory radio routines?",
        "options": [
          "The radio officer.",
          "The owners.",
          "The master.",
          "Statutory authorities."
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "Which statement best describes how an ENC chart gives advice on sounding data quality?",
        "options": [
          "'the chart has a Zone of Calculation function'",
          "'The chart has text on it that describes the sea floor type'",
          "'There are source data diagrams on the chart that can be read'",
          "'The chart has a Zone of Confidence function'"
        ],
        "correctIndex": 3
      },
      {
        "question": "A distress alert on board may only be transmitted on explicit order of:",
        "options": [
          "The captain",
          "The navigating officer on duty",
          "The radio officer",
          "The safety officer"
        ],
        "correctIndex": 0,
        "image": "images/image14.jpg"
      },
      {
        "question": "Which equipment will detect a signal from a SART transponder?",
        "options": [
          "X band radar",
          "Radio Direction Finder",
          "S band radar",
          "DSC receiver"
        ],
        "correctIndex": 0,
        "image": "images/image5.jpg"
      },
      {
        "question": "The correct functioning of a DSC-modem can be checked by means of:",
        "options": [
          "The obligatory monthly transmission from the RCC's",
          "Tester provided with the equipment",
          "The testing-mode of the ever present VHF-DSC-EPIRB",
          "The built-in test facility in the modem"
        ],
        "correctIndex": 3,
        "image": "images/image17.jpg"
      },
      {
        "question": "By a 'geographical area call' in the DSC system is meant:",
        "options": [
          "A DSC- message for all ships heading towards a certain geographical area",
          "A DSC- message for all vessels within a certain area marked by a reference position, given in the DSC message and the degrees are given in southerly and easterly direction",
          "A DSC- message for all vessels within a certain area from a position in the DSC message, and the degrees are given in northerly and westerly direction",
          "A DSC- message for all ships in a particular ocean region"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "\"Which of these precautionary measures can reduce the threat of piracy, if implemented?\"",
        "options": [
          "Turn off all of the ship's lights at night.",
          "Stay at least 15nm away from the shore.",
          "Sail at full speed.",
          "Plan to arrive at port at night."
        ],
        "correctIndex": 2,
        "image": "images/image69.jpg"
      },
      {
        "question": "Which method illustrated is the proven way to get two vessels in open water safely alongside each other for a ship to ship transfer operation? Note that not all the vessels are moving.",
        "options": [
          "When both vessels are making way, fig. 1",
          "When the larger vessel is at anchor, fig. 2",
          "When the smaller vessel is at anchor, fig. 3",
          "When the larger vessel is stopped and drifting in the water, fig. 4"
        ],
        "correctIndex": 0,
        "image": "images/image548.jpg"
      },
      {
        "question": "'Own-ship' is to leave a crowded anchorage heading in the 'way out' direction as illustrated. The ship has a right-handed propeller and conventional rudder. What would be the safest manoeuvre?",
        "options": [
          "Back out dead slow then full astern, transverse thrust should cant the bow to starboard. If the ship steers astern use port rudder",
          "Full ahead, rudder hard to port",
          "Full ahead, rudder hard to starboard",
          "Rudder hard to starboard, full ahead. Rudder hard to port, full astern. Repeating this manoeuvre until the turn has been made."
        ],
        "correctIndex": 0,
        "image": "images/image515.jpg"
      },
      {
        "question": "A vessel has been in involved in a collision. Which procedure should happen immediately?",
        "options": [
          "There is assessment of the damage stability",
          "Communicate with the other ship",
          "Determine is there is any evidence of pollution",
          "Determine any injuries of persons on board"
        ],
        "correctIndex": 0,
        "image": "images/image578.jpg"
      },
      {
        "question": "A personal call means that:",
        "options": [
          "The applicant on board request the coastal station to bring about a conversation with a shore subscriber by means of a scrambler",
          "The applicant wants the call to be charged to some other person",
          "The applicant on board wishes to have a conversation with a person whose name is known",
          "The applicant on board request the coast-station to personally guard the conversation with the shore subscriber"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "The vessel with the illustrated lights is sighted ahead and slightly to port. What do the lights tell you about the status of the other vessel, and what should happen on your vessel?",
        "options": [
          "This vessel is aground. My vessel should be navigated with extreme caution given the nature of the hazard",
          "This is a vessel not under command at anchor",
          "This is a vessel engaged in fishing vessel, with her nets fast on an obstruction. My vessel should keep out of the way by rule 18 of the International Collision Regulations",
          "This is a vessel aground. She appears to have been headed to starboard of my track and my vessel should alter course to port, passing under her stern"
        ],
        "correctIndex": 0,
        "image": "images/image566.jpg"
      },
      {
        "question": "Which statement best describes how land moves, if at all, on an ECDIS set in North-up, relative-motion mode?",
        "options": [
          "The land is always in the middle of the screen",
          "Land on the chart screen moves relative to the ship symbol",
          "This is a feature only seen on radar displays",
          "Land is stopped with the vessel symbol moving across the sea floor"
        ],
        "correctIndex": 1
      },
      {
        "question": "What is definition on clean ballast as per MARPOL Annex 1?",
        "options": [
          "Ballast with an oil content of less than 15 ppm",
          "Ballast with an oil content of less than 45 ppm",
          "Ballast with an oil content of less than 1 %",
          "There isn't any definition on clean ballast"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "What are the conditions that influence the efforts for organising the fire fighting?",
        "options": [
          "Where the fire break out, how many fire teams are available, what is burning, distance to the fire station",
          "Where the fire breaks out, how many fire teams are available, the strength of the fire, the ships mobility, what is burning and communication",
          "Distance to the fire station and the size of the fire brigade, what is burning, possibility to get water",
          "Where the fire break out, the ships mobility, distance to the fire station and the size of the fire brigade"
        ],
        "correctIndex": 1,
        "image": "images/image25.jpg"
      },
      {
        "question": "As a result of being in collision with your vessel, the other vessel involved is on fire? What are your responsibilities to it?",
        "options": [
          "Your vessel should manoeuvre close to the other vessel and aid the fire fighting operation",
          "There is no statutory requirement to provide assistance as the actions of that vessel were the primary cause of the collision",
          "The other vessel is in distress and if possible I will render assistance",
          "You should continue on with the voyage if your damage is not serious"
        ],
        "correctIndex": 2,
        "image": "images/image506.jpg"
      },
      {
        "question": "Which statement best describes what happens to the vessel symbol on an ECDIS set in North-up, true motion mode?",
        "options": [
          "'This is a feature only seen on a radar display'",
          "'Vessel is stopped on the screen, land moves relative'",
          "Vessel symbol shows the heading fixed vertically on the screen'",
          "'Vessel symbol moves across the screen'"
        ],
        "correctIndex": 3
      },
      {
        "question": "An Oil Record Book, Part 1,shall be provided to every ship of 400 tons gross tonnage and above to record machinery space operations.Out of below mentioned operations, it is compulsory to record:",
        "options": [
          "Transfer of oil from settling - to daytank.",
          "Purification of HFO.",
          "Bunkering of bulk lubricating oil.",
          "Discharge of water from Aft, Peak Tank."
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "The first time you send a DSC distress alert via the HF-band, you prefer the?",
        "options": [
          "8 MHz band",
          "16 MHz band",
          "12 MHz band",
          "22 MHz band"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of MF DSC",
          "the use of SART transponders",
          "the use of HF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of this information must be included in a piracy attack alert?",
        "options": [
          "The number of pirates/highjackers.",
          "The number of crew onboard.",
          "The type of weapons being carried by the pirates/highjackers.",
          "Your ship's name and call sign."
        ],
        "correctIndex": 3,
        "image": "images/image69.jpg"
      },
      {
        "question": "Operator connected R/T calls are charged",
        "options": [
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the basis of a six second minimum charge with one second incremental steps",
          "On the basis of a one minute minimum charge with one minute incremental steps",
          "On the basis of a three minute minimum charge with one minute incremental steps"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "A small vessel with a right handed propeller and no thruster is approaching a berth with an onshore wind. What is the best way to have a controlled berthing?",
        "options": [
          "Reduce speed by going full astern on the engines",
          "Dredge a forward anchor, working the engine and rudder against it to keep the stern up",
          "Stop the engine and let the vessel momentum and the wind drop the vessel onto the berth",
          "Full starboard rudder and stop engines"
        ],
        "correctIndex": 1,
        "image": "images/image521.jpg"
      },
      {
        "question": "The transmitting receiving method, when both stations can transmit and receive at the same time is called:",
        "options": [
          "None of the mentioned",
          "Semi-duplex",
          "Duplex",
          "Simplex"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "At present the MF/HF transmitter often has an automatic aerial turning unit. Should this fail:",
        "options": [
          "No distress frequencies can be used at all",
          "Its always possible to put the turning unit in a fixed position, so the MF distress frequencies can still be used",
          "The transmitter will automatically keep operating on the MF and HF distress frequencies",
          "You can transmit but can not receive"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the correct setting of the \"Anti sea clutter\" control on the radar?",
        "options": [
          "A few sea returns remaining around the own-ship position",
          "A removal of all the sea returns up to about three miles from own-ship",
          "All of the suggested answers",
          "No sea returns left on the screen so that a small target will be seen"
        ],
        "correctIndex": 0,
        "image": "images/image490.jpg"
      },
      {
        "question": "As a minimum, how often shall life boats be launched with their assigned operating crew aboard and manoeuvred in the water according to SOLAS?",
        "options": [
          "Every month.",
          "Every three months.",
          "Every week.",
          "Every two weeks."
        ],
        "correctIndex": 1,
        "image": "images/image120.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision, and at first opportunity a lot of people from outsides parties are asking questions. What shall you tell them?",
        "options": [
          "Do not tell anybody anything, except representatives from the main newspapers, radio and TV. Remember, the people have the right to know.",
          "You shall only tell them the truth and nothing but the truth.",
          "Do not reply to any questions from outside parties, except the Solicitor appointed by your company.",
          "To make sure that all parties are informed about the facts, show them the extracts of the log-book."
        ],
        "correctIndex": 2,
        "image": "images/image93.jpg"
      },
      {
        "question": "In which of these circumstances can your ship request a DoS?",
        "options": [
          "There is a heightened security risk for your ship and a port facility.",
          "Your ship is conducting activities with a port or ship that is not required to implement an approved security plan.",
          "Your ship is operating at a lower security level than the ship or port it is interfacing with.",
          "Your ship has added a new port to its list of ports of call."
        ],
        "correctIndex": 1,
        "image": "images/image66.jpg"
      },
      {
        "question": "According to the IAMSAR Manual, what is the expected survival time for a person in water of temperature over 20 degrees Celsius?",
        "options": [
          "Between 18 - 24 hours depending upon their size",
          "Indefinite, depending on fatigue state",
          "Less than 24 hours because of hypothermia",
          "Less than 12 hours if they have little body fat"
        ],
        "correctIndex": 1,
        "image": "images/image533.jpg"
      },
      {
        "question": "The word SHIP is spelled conform the international phonetic alphabet:",
        "options": [
          "Sugar, Hotel, Italia, Peter",
          "Sierra, Hotel, Item, Papa",
          "Singapore, Hotel, India, Paris",
          "Sierra, Hotel, India, Papa"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Regular 'updating' of a ships' position in an Inmarsat-C installation is necessary",
        "options": [
          "To inform the satellite of ships position",
          "To enter the correct data to the disk antenna",
          "To keep to the correct Inmarsat-region",
          "To have the correct position in case of accidents"
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "During the survey of Long Range Identification and Tracking (LRIT) equipment, which document must be available to the surveyor to demonstrate compliance with SOLAS?",
        "options": [
          "A Statement of Installation and and Testing by the Application Service Provider in compliance with SOLAS V/26-4.",
          "The Certificate of Compliance with SOLAS V/19-1, bearing the serial number of the equipment installation.",
          "A report giving the result of the Conformance Test issued by an Application Service Provider on behalf of an Administration",
          "A report giving the result of the Performance Test, issued by the manufacturer in compliance with the Flag State Authority requirements."
        ],
        "correctIndex": 2,
        "image": "images/image512.jpg"
      },
      {
        "question": "Which action do you perform when you log in to a satellite ocean region?",
        "options": [
          "You update the ship's position",
          "You adjust the antenna.",
          "You inform the NCS that the SES is available for comunications.",
          "You select the CES through which you wish to send a message."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What type of vessel would show the illustrated lights?",
        "options": [
          "A sailing vessel, seen from astern, where the edges of her sidelights are both visible",
          "A sailing vessel less than 20 metres in length, displaying the optional combined lantern in lieu of standard sailing lights, seen head-on",
          "A sailing vessel, at anchor",
          "A sailing vessel of less than 10 metres in length, displaying the mandatory combined lantern inlieu of sailing lights, seen head-on"
        ],
        "correctIndex": 1,
        "image": "images/image492.jpg"
      },
      {
        "question": "If you use chemicals for cleaning up an oil-spill on the water, what would the chemicals do?",
        "options": [
          "Disperse or dissolve the oil into the water",
          "Contain the oil within a small area",
          "Absorb the oil for easy removal",
          "Remove the oil from the water"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "What is EPIRB an abbreviation for?",
        "options": [
          "Emergency Position Indication Radio Buoy.",
          "Electronic Purpose If Rescue Begins.",
          "Emergency Position Indicating Radio Beacon.",
          "Electronic Pressure Indication Radar Buoy."
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "Who is responsible for the regular security inspections of the ship?",
        "options": [
          "The Port Facility Security Officer",
          "The Company Security Officer",
          "The Ship Security Officer",
          "The Classification Society."
        ],
        "correctIndex": 2,
        "image": "images/image60.jpg"
      },
      {
        "question": "Under GMDSS which VHF channel is used for Digital Selective Calling (DSC)?",
        "options": [
          "Ch.16",
          "Ch. 13",
          "Ch.70",
          "Ch.06"
        ],
        "correctIndex": 2,
        "image": "images/image17.jpg"
      },
      {
        "question": "Who is responsible for keeping the required official publications onboard?",
        "options": [
          "The owner.",
          "The radio officer.",
          "The authorities.",
          "The master."
        ],
        "correctIndex": 3,
        "image": "images/image74.jpg"
      },
      {
        "question": "Your vessel is acting as the on scene commander during a distress rescue. Various vessels are interfering the distress traffic on the VHF. What message would you use to stop them interfering with this traffic?",
        "options": [
          "Seelonce mayday",
          "Seelonce pan",
          "Seelonce distress",
          "Seelonce securite"
        ],
        "correctIndex": 0,
        "image": "images/image14.jpg"
      },
      {
        "question": "Which radio frequency/channels are reserved for emergency communication?",
        "options": [
          "2188 kHz/VHF channel 8",
          "2182 kHz/VHF channel 16",
          "2128 kHz/VHF channel 16",
          "2182 kHz/VHF channel 6"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "When may a call for radio medical advice be preceded by the urgency-signal:",
        "options": [
          "When you have a doctor on board",
          "Never",
          "In urgent cases",
          "Always"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "New MARPOL regulations came into effect from July 93 stating that the previous instantaneous rate of discharge of oil content (60 litters per nautical mile) was changed to:",
        "options": [
          "10 litters per nautical mile",
          "30 litters per nautical mile",
          "25 litters per nautical mile",
          "20 litters per nautical mile"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "One of the categories of information that must be included in your SSP is:",
        "options": [
          "Weaknesses in security measures",
          "Threat scenarios",
          "Security arrangements",
          "Ship security survey"
        ],
        "correctIndex": 2,
        "image": "images/image91.jpg"
      },
      {
        "question": "A member of the bridge team has just seen a person fall overboard. Which of the following manoeuvres is the most appropriate to assist with a rescue?",
        "options": [
          "Evinrude Turn",
          "Williamson turn",
          "Direct Turn",
          "Scharnow Turn"
        ],
        "correctIndex": 2,
        "image": "images/image553.jpg"
      },
      {
        "question": "You wish to carry out a test transmission on your radio equipment. What precautions should be taken if any?",
        "options": [
          "All of the items in the other alternatives should be done.",
          "Test transmission should be carried out on artificial aerials and/or reduced power.",
          "Listen out to ensure that no safety/distress traffic is in progress.",
          "Test transmission should be kept to a minimum."
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "In case of pollution in US waters, do you always have to notify the National Response Center (OPA-90)",
        "options": [
          "Yes, within thirty (30) minutes",
          "No, only the shipowner can notify NRC",
          "No, not if the local US State Authority is correctly notified",
          "Yes, within three (3) days"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "If the wind speed on a vessel doubles, by approximately how much will the force from it rise?",
        "options": [
          "The force will be Quadrupled",
          "The force will be Quintupled",
          "The force will be Doubled",
          "The force will be Tripled"
        ],
        "correctIndex": 0,
        "image": "images/image582.jpg"
      },
      {
        "question": "A distress alert sent by Inmarsat to an RCC is sent via:",
        "options": [
          "The managers office",
          "LES",
          "NCS",
          "LUT"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Your vessel is approaching a port in restricted visibility and you hear this signal. What kind of vessel is it and what is it doing?",
        "options": [
          "It comes from a vessel engaged in pilotage duties at anchor, over 100 metres in length",
          "It comes from a vessel engaged in pilotage duties and it is making way through the water",
          "It comes from a vessel at anchor, less than 100 metres in length",
          "It comes from a vessel restricted in her ability to manoeuvre"
        ],
        "correctIndex": 1,
        "image": "images/image519.jpg"
      },
      {
        "question": "When a vessel berths with a beam current, what happens to the force exerted by the current if the underkeel clearance is very much reduced?",
        "options": [
          "It will remain unchanged because the force is a function of the current speed",
          "It will remain unchanged because the force is a function of the length of the vessel",
          "It reduces because the hull acts to block the flow of current",
          "It rises very considerably because of the shallow water under the hull"
        ],
        "correctIndex": 3,
        "image": "images/image544.jpg"
      },
      {
        "question": "What has the most influence on the turning effect from an attached tug?",
        "options": [
          "Having a tug attached to the bow on a tug line",
          "Having a tug attached to the stern centre lead on a tug line",
          "The position of the applied tug force relative to the ship's pivot point",
          "Having a tug attached to a fairlead close to the pivot point"
        ],
        "correctIndex": 2,
        "image": "images/image534.jpg"
      },
      {
        "question": "The normal mode of operation for each coast station shall be indicated in:",
        "options": [
          "The ITU List of Ship Stations",
          "The ITU List of Call signs and numerical identities of station used by the maritime mobile and maritime mobile-satellite services",
          "The ITU List of Coast Station",
          "The ITU List of Radiodetermination and Special Services"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "What is meant by bulk Grain cargoes have a low angle of repose?",
        "options": [
          "Liable to shift",
          "Unlikely to shift",
          "Always stable",
          "Likely to produce toxic gas"
        ],
        "correctIndex": 0,
        "image": "images/image835.jpg"
      },
      {
        "question": "A SART must, when the vessel sinks:",
        "options": [
          "Automatically be released from the vessel and be turned on by equipment onboard the SART-units",
          "Should be left on board",
          "Be taken by the crew to the rescue-boat and turned on manually",
          "Automatically released and then automatically activated"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "The muster list must be prepared:",
        "options": [
          "At any moment before the ship proceeds to sea",
          "at least 2 hours before the ship proceeds to sea",
          "at least 2 hours after the ship has proceeded to sea",
          "at least 1 hour before the ship proceeds to sea"
        ],
        "correctIndex": 0,
        "image": "images/image73.jpg"
      },
      {
        "question": "Where is the Safety Certificates for ships to be kept?",
        "options": [
          "In the Captain's office",
          "In the Owner's office",
          "Posted up in a prominent place onboard the ship",
          "In the Captain's safe"
        ],
        "correctIndex": 0,
        "image": "images/image114.jpg"
      },
      {
        "question": "Which one of the following items has to be included in an abandon ship drill according to SOLAS regulations?",
        "options": [
          "Manoeuvring the lifeboat in the water.",
          "Starting and operating radio life-saving appliances.",
          "Launching and recovery of a survival craft.",
          "Checking that life-jackets are correctly donned."
        ],
        "correctIndex": 3,
        "image": "images/image56.jpg"
      },
      {
        "question": "One can check the functioning of the SART by:",
        "options": [
          "Removing it from the holder and turning the SART upside down",
          "Lowering SART in to the sea",
          "Activating it by extracting the antenna",
          "Actvating the SART and checking the effect on the radar screen"
        ],
        "correctIndex": 3,
        "image": "images/image5.jpg"
      },
      {
        "question": "Which of these measures would you implement to prevent drugs from being smuggled onboard your ship while it's berthed?",
        "options": [
          "Maintain restricted areas.",
          "\"Search some of the packages, spares and stores received.\"",
          "Check a portion of the bags and packages brought onboard.",
          "Eliminate fore and aft deck watch at night."
        ],
        "correctIndex": 0,
        "image": "images/image175.jpg"
      },
      {
        "question": "What does ISM stand for?",
        "options": [
          "The International Management Code for the Safe Operation of Ships and for Pollution Prevention",
          "International Ship Measurement and Pollution Control",
          "International Safe Manning Certification",
          "Internal Ship Safety Management"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "What is the purpose of the O.D.M.E. (Oil Discharge Monitoring Equipment) printer ?",
        "options": [
          "To prove that the O.D.M.E. system has been used",
          "None of the mentioned",
          "To prove fault conditions in the O.D.M.E",
          "To prove that oil has been pumped overboard according to regulations"
        ],
        "correctIndex": 3,
        "image": "images/image235.jpg"
      },
      {
        "question": "What must by carefully checked when loading a bulk carrier to maximum draft",
        "options": [
          "The minimum bow height must be maintained",
          "the vessel should have a stern trim of 2.0 metres by stern.",
          "The vessel is trimmed by the head on completion",
          "The vessel is trimmed by the stern on completion,"
        ],
        "correctIndex": 0,
        "image": "images/image832.jpg"
      },
      {
        "question": "\"Your ship security plan must include procedures for responding to security threats, auditing security activities and interfacing with the port facility.\"",
        "options": [
          ".",
          ".",
          "TRUE",
          "FALSE"
        ],
        "correctIndex": 2,
        "image": "images/image67.jpg"
      },
      {
        "question": "Which option best describes how an operator establishes what an isolated danger symbol represents, when seen on the chart display of an ECDIS?",
        "options": [
          "Interrogate it and ask for a pick or information report",
          "Check the chart symbols catalogue to ascertain the meaning",
          "Check with a senior officer",
          "Check the surrounding area for any clues on the sea floor"
        ],
        "correctIndex": 0
      },
      {
        "question": "\" On area A4 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC and VHF Epirbs",
          "The use of HF DSC and COSPAS SARSAT Epirbs",
          "The use of HF DSC and INMARSAT Epirbs",
          "The use of MF DSC and INMARSAT Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image39.jpg"
      },
      {
        "question": "A received DSC 'distress alert' contains the following information: \"UNDESIGNATED DISTRESS\" Of this distress case:",
        "options": [
          "Time is unknown",
          "The position is unknown",
          "The nature of distress is unknown",
          "Number of person at risk is unknown"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What signal may be given by sound and by light to indicate that a vessel fails to understand the intentions or actions of another vessel, or is in doubt that sufficient action is being taken by the other to avoid collision?",
        "options": [
          "One prolonged blast (flash), followed by five or more short and rapid blasts (flashes)",
          "Three short and rapid blasts (flashes)",
          "Five prolonged blasts (flashes)",
          "Five short and rapid blasts (flashes)"
        ],
        "correctIndex": 3,
        "image": "images/image581.jpg"
      },
      {
        "question": "Which of the following channels and modes should be used when initiating a distress alert transmission?",
        "options": [
          "Channel 13 Radiotelephony and channel 16 DSC.",
          "Channel 6 Radiotelephony.",
          "Channel 70 DSC",
          "Channel 6 DSC"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What would be the preferred colour to use when maintaining the paint on shell, plating, structure and bottom/tanktopp in the engine room?",
        "options": [
          "White or light grey to ensure all minor spills and leakages are noticed and dealt with.",
          "The same colour as machinery and equipment.",
          "Whatever paint is available.",
          "Dark brown/red colour to camuflage any minor leakages and oil spills."
        ],
        "correctIndex": 0,
        "image": "images/image78.jpg"
      },
      {
        "question": "In which areas is plastic material accepted for overboard disposal?",
        "options": [
          "100 n.m. from shore line.",
          "Not permissible any where.",
          "In specially designated areas (ref. MARPOL).",
          "In coastal waters."
        ],
        "correctIndex": 1,
        "image": "images/image117.jpg"
      },
      {
        "question": "In a distress situation, how many times or for how long should the emergency alarm signal be sounded?",
        "options": [
          "Until the signal \"risk is over\" or the order \"abandon ship\" is given",
          "3 times",
          "Until all crew members and passengers have reported to their respective muster stations",
          "3 minutes"
        ],
        "correctIndex": 2,
        "image": "images/image56.jpg"
      },
      {
        "question": "Which of these actions should you take it your ship is successfully boarded by armed pirates?",
        "options": [
          "Scream in fear and refuse to cooperate.",
          "Keep quiet and ignore any questions you're asked.",
          "Fight back.",
          "Assure your captors that you're not planning an attack to overthrow them."
        ],
        "correctIndex": 3,
        "image": "images/image241.jpg"
      },
      {
        "question": "What is meant by saying that a vessel hull is directionally unstable?",
        "options": [
          "When free running it will shear to one side or the other if not controlled",
          "It has been intentionally created with the centre of underwater pressure aft of amidships",
          "When the rudder is kept amidships, the ship will continue on a straight course",
          "The ship will only require small amounts of helm to maintain its course when stearing in a heavy seaway"
        ],
        "correctIndex": 0,
        "image": "images/image504.jpg"
      },
      {
        "question": "The traffic list of a coast-station is a list of:",
        "options": [
          "Call-signs of ships for which a radio-telephone call, a telegram or another call is intended",
          "Pertinent navigational -and weather information",
          "Names of ships which, on behalf of safety at sea, are being routed by a traffic control system",
          "Name of ship's scheduled for berthing"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "What would happen if, when a ship is under-going a Port State Inspection, certificates were invalid or missing",
        "options": [
          "The ship would be allowed to sail to the next port and rectification would take place then",
          "Rectification would be required before sailing",
          "The ship would be detained indefinitely",
          "The deficiencies would be recorded in the ship's register and the ship allowed to sail"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "What is the status of the rules of the SOLAS convention?",
        "options": [
          "Must be regarded as guidelines.",
          "Mandatory.",
          "Supplementary to classification rules.",
          "Should be consulted when the vessel is in distress."
        ],
        "correctIndex": 1,
        "image": "images/image58.jpg"
      },
      {
        "question": "A DSC distress alert single frequency call attempt is awaiting acknowledgement:",
        "options": [
          "Repeated manually when required",
          "Not repeated automatically",
          "Automatically repeated after 3 and a half to 4 and a half minutes",
          "Automatically repeated after 1 to 1 and a half minutes"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "When reasonable and practicable, how often shall rescue boats be launched with their assigned crew aboard and manoeuvred in the water?",
        "options": [
          "Every month",
          "Every week",
          "Every two weeks",
          "Every six months"
        ],
        "correctIndex": 0,
        "image": "images/image115.jpg"
      },
      {
        "question": "Which of the below structures of bulk carriers are considered critical?",
        "options": [
          "Longitudinal deck plating outside hatches",
          "Upper and lower connection of main side frames",
          "The girders",
          "Forecastle deck"
        ],
        "correctIndex": 1,
        "image": "images/image842.jpg"
      },
      {
        "question": "The proper operation of an Inmarsat C-terminal can be tested by:",
        "options": [
          "Sending a message to MF DSC",
          "Doing a \"link test\"",
          "Requesting a \"self test\"",
          "Doing a \"recommissioning test\""
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions, these displayed lights indicate that this is one of two types of vessel. What are the two options?",
        "options": [
          "A power-driven vessel engaged in towing, more than 50 metres in length, or less than 50 metres in length and showing a second masthead light, length of tow under 200 metres, seen head-on OR a power-driven vessel underway. Less than 50 metres in length and displaying the second all-round white masthead light, seen head-on",
          "A vessel engaged in fishing, restricted in her ability to manoeuvre, shooting nets OR a vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres, towing vessel restricted in her ability to manoeuvre, seen head-on",
          "A vessel engaged on pilotage duty, engaged in deploying or recovering a pilot, seen head-on or a power-driven vessel underway, lmore than 50 metres in length or less than 50 metres in length and showing the second masthead light, seen head-on",
          "A power-driven vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres, towing vessel and tow restricted in their ability to manoeuvre, seen head-on OR a power-driven vessel underway, more than 50 metres in length, or less than 50 metres in length and showing a second masthead light, restricted in her ability to manoeuvre, seen head-on"
        ],
        "correctIndex": 3,
        "image": "images/image584.jpg"
      },
      {
        "question": "Any ship of 10.000 tons gross tonnage and above shall be fitted with oily-water separating equipment for the control of machinery space bilges.What kind of equipment is required in this connection?",
        "options": [
          "Oily-water separating equipment only.",
          "Either Oil filtering equipment , or Oily-water separating equipment , or combination of both.",
          "Oil filtering equipment only.",
          "Sludge separating tank."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "How many annexes do we find in MARPOL and what is the content of annex 1?",
        "options": [
          "We find 6 annexes in MARPOL and annex 1 is the regulations for the prevention of pollution by oil",
          "We find 1 annexes in MARPOL and annex 1 regulations for the prevention of pollution by chemicals.",
          "We find 5 annexes in MARPOL and annex 1 is the regulations for the prevention of pollution by sewage",
          "We find 4 annexes in MARPOL and annex 1 regulations for the prevention of pollution by garbage"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "The best way to prevent stowaways from boarding your ship is to:",
        "options": [
          "\"Seal spaces that are not in use while in port, and perform a search of the ship before leaving.\"",
          "Conduct a Nominated Officers search.",
          "\"Conduct routine, but irregular searches of the ship.\"",
          "Search the ship when you arrive at port and again just after leaving."
        ],
        "correctIndex": 0,
        "image": "images/image132.jpg"
      },
      {
        "question": "What manoeuvre should be carried out in case of a fire onboard a ship?",
        "options": [
          "Reduce speed and, if possible, keep the fire zone to the leeward of the ship",
          "Let the ship follow the wind in order to reduce the oxygen supply",
          "Continue on course and speed",
          "Keep the stem up against the wind if possible"
        ],
        "correctIndex": 0,
        "image": "images/image68.jpg"
      },
      {
        "question": "When a DSC-message of the 'distress' category is received, in order to start distress alert communication in so far as not indicated in the alert, you will switch to VHF channel:",
        "options": [
          "13",
          "67",
          "16",
          "85"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "To inform ship of coast-stations messages, coast-stations give at fixed times:",
        "options": [
          "A traffic list with the call-sign of the ships involved in alphabetical numerical sequence",
          "A list with the names of the ships involved spoken alphabetical numerical sequence.",
          "A list of all the messages for each vessel",
          "A list of the official identification numbers, for example the Maritime Mobile Service Indentity (MMSI)."
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The first step in completing an SSA is to:",
        "options": [
          "List the existing security measures.",
          "\"Identify the key shipboard operations, systems, areas and personnel that are critical to protect.\"",
          "Develop an onboard security survey checklist",
          "Create a list of potential motives for security incidents against your ship."
        ],
        "correctIndex": 3,
        "image": "images/image82.jpg"
      },
      {
        "question": "Via Inmarsat-C a message is sent to an Inmarsat-C mailbox with a positive delivery notification (PDN). The ground station will:",
        "options": [
          "Send no PDN's with messages intended for the mailbox",
          "Send a PDN, as soon as the message is collected from the mailbox",
          "Send a PDN, if the message has arrived in the mailbox",
          "Not send any PDN for this message"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following items shall be included in an \"abandon ship\"-drill?",
        "options": [
          "Checking that all crew and passenger moral is high",
          "Checking the distress signal rockets and other distress signals",
          "Checking the lifeboat provisions and supplies",
          "Checking that passengers and crew are suitably dressed and lifejackets correctly donned"
        ],
        "correctIndex": 3,
        "image": "images/image49.jpg"
      },
      {
        "question": "In the situation illustrated with a vessel turning a bend in a narrow river, what outside forces effect the handling of the vessel?",
        "options": [
          "None, as the river flow will be fairly uniform guiding the vessel",
          "The only force from the outside on the vessel will be bottom effect, because the river is likely to be quite shallow",
          "Bow and stern attraction/rejection force caused by the closeness of the river sides",
          "The only likely outside force effecting the vessel will be from wind and river flow"
        ],
        "correctIndex": 2,
        "image": "images/image561.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 501-600",
    "questions": [
      {
        "question": "How many total frequencies are available for DSC distress alerting?",
        "options": [
          "Two (2).",
          "Seven (7).",
          "One (1).",
          "Five (5)."
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The OPA-90 notification requirement is:",
        "options": [
          "Notify as soon as you have knowledge of any spill, or threat of a spill",
          "Notify only if you mean that own vessel might be tracked and charged",
          "Notify as soon as you have knowledge of a spill exceeding 10 gallons of oil",
          "Notify only if you mean that own vessel might be responsible"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding the stowage of lifeboats and life-rafts corresponds to present SOLAS regulations?",
        "options": [
          "Lifeboats shall be stowed attached to launching appliances.",
          "Davit-launched life-rafts shall be stowed on starboard side of the ship.",
          "Life-rafts intended for throw-overboard launching shall be stowed midships secured to means for transfer to either side.",
          "Life-rafts shall be stowed close to the stern of the vessel"
        ],
        "correctIndex": 0,
        "image": "images/image79.jpg"
      },
      {
        "question": "When during transmitting the display of a radiotelephone-installation shows a decrease in transmitting power it is:",
        "options": [
          "An automatic adjustment of the chosen transmitting mode",
          "An indication of chosing a wrong channel",
          "An adjustment of the semi-duplex transmitting power",
          "An indication of aerial problem"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "When a coastguard-station wants to send a gale-warning by DSC it will happen in the category:",
        "options": [
          "Urgency",
          "Security",
          "Routine",
          "Safety"
        ],
        "correctIndex": 3,
        "image": "images/image11.jpg"
      },
      {
        "question": "Your vessel is in restricted visibility and you hear this signal. What type of vessel does it come from and what additional information does the signal provide?",
        "options": [
          "A vessel aground, more than 100 metres in length. The additional signal indicates which side the clear water lies on",
          "A vessel at anchor, more than 100 metres in length. The additional signal indicates that her cable extends at least 25 metres from her bow",
          "A vessel at anchor, more than 100 metres in length. She is sounding the additional signal to give warning of her position",
          "A vessel at anchor, less than 100 metres in length. She is sounding the additional signal top give warning of her position"
        ],
        "correctIndex": 2,
        "image": "images/image519.jpg"
      },
      {
        "question": "In Which publication will you find the working frequencies of coast stations?",
        "options": [
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Call signs and Numerical Identities of Stations used by the maritime mobile and maritime mobile-satellite services",
          "The ITU List of coast stations",
          "The ITU List of Ship Stations"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of these conventions is The International Ship and Port Facility Security (ISPS) Code a part of?",
        "options": [
          "SOLAS",
          "The Anti Terrorist International Agreement",
          "MARPOL",
          "STCW - 95"
        ],
        "correctIndex": 0,
        "image": "images/image168.jpg"
      },
      {
        "question": "Which international convention deals with fire-fighting equipment etc.",
        "options": [
          "SOLAS",
          "Load Line convention",
          "CRISTAL",
          "MARPOL"
        ],
        "correctIndex": 0,
        "image": "images/image119.jpg"
      },
      {
        "question": "Who is responsible for the development of the Ship Security Plan?",
        "options": [
          "The Classification Society.",
          "The Port Facility Security Officer",
          "The Ship Security Officer",
          "The Company Security Officer"
        ],
        "correctIndex": 3,
        "image": "images/image131.jpg"
      },
      {
        "question": "In a distress situation and immediately after the distress signal has been sounded, what is the next action to be taken by the Chief Officer on duty?",
        "options": [
          "Use the intercom to inform crew and passengers of the reason for the alarm",
          "Call the nearest coastal radio station",
          "Use the VHF-radio telephone to ask ships in the vicinity to stand by",
          "Send distress signals to call for help"
        ],
        "correctIndex": 0,
        "image": "images/image166.jpg"
      },
      {
        "question": "What is the purpose of the radiotelephony two tone alarm?",
        "options": [
          "Alert COSPAS/SARSAT satellites",
          "Activate bridge watchkeeping receivers and attract the attention of the person on watch.",
          "Attract the attention of the person on watch.",
          "Activate bridge watchkeeping receivers."
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is the minimum number of channels required for the portable two-way VHF's for survival craft?",
        "options": [
          "Channels 6, 13 & 16",
          "Channel 16 only",
          "Channels 6, 12 & 16",
          "Channels 16 & 12"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "Where is OPA-90 applicable?",
        "options": [
          "200 nm off coast of California",
          "200 nm off US coast",
          "Within US waters",
          "Within 200 nm of US waters including Guam, Hawaii, Alaska and San Juan"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "Records relating to breaches of security and changes in security level must be secured against unauthorized access and available for review by contracting governments.",
        "options": [
          ".",
          "TRUE",
          "FALSE",
          "."
        ],
        "correctIndex": 1,
        "image": "images/image92.jpg"
      },
      {
        "question": "The accuracy of an Inmarsat-E positioning-system is:",
        "options": [
          "5 miles",
          "200 meters",
          "20 miles",
          "20 meters"
        ],
        "correctIndex": 1,
        "image": "images/image15.jpg"
      },
      {
        "question": "What does the IMSBC Code emphasise with reference to the exposure of personal to the dust created when carrying some bulk cargoes?",
        "options": [
          "The responsibility of the Master to ensure that staff are wearing the correct clothing",
          "The code does not make any reference to this hazard",
          "A high standard of personal hygiene",
          "The restricted loading of certain cargoes which may be excessively dusty"
        ],
        "correctIndex": 2,
        "image": "images/image826.jpg"
      },
      {
        "question": "A wire antenna of 12 metres in length is probably:",
        "options": [
          "A Sat-C antenna",
          "A VHF-antenna",
          "An Inmarsat-antenna",
          "A MF/HF-antenna"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Line throwing appliance",
          "Lifeboat hand flare",
          "Survival craft distress pyrotechnic signals",
          "Rocket parachute flares"
        ],
        "correctIndex": 2,
        "image": "images/image122.jpg"
      },
      {
        "question": "Your vessel is in an area of restricted visibility. You hear this sound signal. What does it mean?",
        "options": [
          "That there is a vessel engaged in underwater operations in the vicinity with divers down",
          "That there is a vessel at anchor in the vicinity",
          "That there is a vessel in distress nearby",
          "That there is a vessel aground in the vicinity"
        ],
        "correctIndex": 2,
        "image": "images/image489.jpg"
      },
      {
        "question": "The ship is approaching shallow water where the Under Keel Clearance will reduce to about 0.25 of the ship's draught. Which of the following answers most accurately summarizes the aspects to be considered when deciding a suitable speed?",
        "options": [
          "A reduced ability to stop the vessel and maintain steerage",
          "A further reduction of underkeel clearance and possible changes of the ship's trim",
          "All of the suggested answers",
          "Touching the bottom if there is any swell and causing damage due to the wake or wash of the vessel"
        ],
        "correctIndex": 2,
        "image": "images/image516.jpg"
      },
      {
        "question": "What mode is used for broadcast an MF/HF-DSC message:",
        "options": [
          "J2B / F1B",
          "J3E",
          "H3E",
          "G3E"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The aerial system of an Inmarsat-C terminal consist of:",
        "options": [
          "A rod aerial",
          "An omni-directional aerial",
          "A dish aerial",
          "A flexible wire aerial"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Under ISM, what is a \"non-conformity\"?",
        "options": [
          "The wearing of non-standard Personal protective equipment",
          "An observed situation where objective evidence indicates the non-fulfilment of a specified requirement",
          "A safety officer not being nominated for the vessel",
          "Official log book entries not being completed correctly"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "The ship is in a shallow water starboard turn and the fore and aft Doppler log sensors show a sideways motion to port. Where would the theoretical pivot point be located?",
        "options": [
          "At a position outside and forward of the hull",
          "At a position aft of amidships",
          "At a position outside and aft of the hull",
          "At a position on the centreline, about 1/6 of the ship's length forward of the rudder post"
        ],
        "correctIndex": 0,
        "image": "images/image560.jpg"
      },
      {
        "question": "At the entrance to the space where batteries are stored on board the following notice must be fitted:",
        "options": [
          "Electrician only",
          "No entry with naked light and/or flame",
          "Crew only",
          "Keep access free"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions, when a ship is being overtaken by another while proceeding along a river. What should be the required procedure?",
        "options": [
          "The overtaking vessel can overtake but must allow sufficient space to reduce the interaction between the two vessels",
          "The overtaking vessel should request permission from the other ship by sounding two prolonged blasts followed by two short blasts on the whistle or by direct VHF contact",
          "There should be no overtaking in these confined waters",
          "The overtaking vessel should request permission to overtake from the Port Control VTS"
        ],
        "correctIndex": 1,
        "image": "images/image591.jpg"
      },
      {
        "question": "Which of the following is a coast station MMSI ?",
        "options": [
          "22753000",
          "002275300",
          "227005300",
          "227530000"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "HEL-H is the abbreviation of a heavy helicopter radius of action for rescue purposes. What do you think the radius and evacuating capacity of the helicopter is?",
        "options": [
          "500 nm and capacity for evacuating more than 25 persons.",
          "100 nm and capacity for evacuating more than 10 persons.",
          "200 nm and capacity for evacuating more then 15 persons.",
          "150 nm and capacity for evacuating more than 12 persons."
        ],
        "correctIndex": 2,
        "image": "images/image134.jpg"
      },
      {
        "question": "What is a Declaration of Security?",
        "options": [
          "A document stating the ship's security level",
          "A checklist jointly completed by the ship and shore security representatives",
          "A checklist jointly completed by the Ship Security Officer and the U.S. Coast Guard",
          "A document between the port and the cargo owner stating security"
        ],
        "correctIndex": 1,
        "image": "images/image87.jpg"
      },
      {
        "question": "What is the alcohol content in the blood permissible under US legislation before it is defined as intoxication?",
        "options": [
          "0,01 %",
          "0,07 %",
          "0,04 %",
          "0,1 %"
        ],
        "correctIndex": 2,
        "image": "images/image143.jpg"
      },
      {
        "question": "Silencing by a station, not in charge of the distress-traffic, is done as follows:",
        "options": [
          "\"SEELONCE MAYDAY\" followed by the call-sign of the ship in distress",
          "\"SEELONCE DISTRESS\" followed by the silencing station's call-sign",
          "\"SILENCE DISTRESS\" followed by call sign of the ship in distress",
          "\"SEELONCE MAYDAY\" followed by the silencing station's call-sign"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "A vessel is coming alongside a pier with two tugs assisting and there is little wind or current. How is it best to use the tugs?",
        "options": [
          "As shown in 'C', but only one tug made fast forward for pulling and the other pushing aft",
          "As shown in 'A', pushing on ship's side, but not made fast to allow the tug to move to another position if needed",
          "As shown in 'A', pushing but also made fast to check the vessel's movement towards the berth with a pull off",
          "As shown in 'B', made fast forward and aft using the centre leads to enable the ship to be positioned"
        ],
        "correctIndex": 2,
        "image": "images/image550.jpg"
      },
      {
        "question": "The Muster List shall show the duties assigned to members of the crew. Which of the following duties shall be included according to present regulations?",
        "options": [
          "Special duties assigned with respect to the use of pyrotechnics",
          "Manning of fire parties assigned to deal with fires.",
          "Preparation of immersion suits for passengers.",
          "Operation of the vessel's propulsion system."
        ],
        "correctIndex": 1,
        "image": "images/image85.jpg"
      },
      {
        "question": "When a vessel is undertaking a long canal transit with locks and lots of activity, what management issues should the Master consider?",
        "options": [
          "Fully manned engine room throughout the canal transit",
          "Suitable crew available for lock transits",
          "Lack of sleep and fatigue of bridge officers",
          "All of these answers"
        ],
        "correctIndex": 3,
        "image": "images/image537.jpg"
      },
      {
        "question": "According to Rule 24 of the International Regulations for Preventing Collisions and the illustrated lights, how long is the tow likely to be?",
        "options": [
          "It is less than 200 metres",
          "It is more than 50 metres but less than 200 metres",
          "At least 100 metres",
          "It exceeds 200 metres"
        ],
        "correctIndex": 3,
        "image": "images/image580.jpg"
      },
      {
        "question": "On what wave band does the search and rescue radar transponder operate?",
        "options": [
          "8 GHz",
          "2182kHz",
          "9 GHz",
          "6 GHz"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "Which class of emission is used for ARQ NBDP transmissions ?",
        "options": [
          "F1B",
          "G3E",
          "G2B",
          "J3E"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "To get proper conversation discipline in maritime radio traffic:",
        "options": [
          "Only after permission by captain, to send and/or receive on a VHF-channel pointed out the master",
          "Communication should be done only as per company's prescribed schedule",
          "Every available VHF-channel should always be used",
          "Only necessary radio conversations are made in a concise and businesslike way"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Your vessel is power-driven and making way in open water. This vessel is on the port bow with a steady bearing. What kind of vessel is it and what will your action be?",
        "options": [
          "This is a sailing vessel underway. I am the stand-on vessel and will maintain my course and speed under rule 17",
          "This is a sailing vessel not making way through the water. There is no risk of collision and I will maintain my course and speed",
          "This is a sailing vessel underway, seen head-on. It is my responsibility to keep clear under rule 18 and I will take appropriate avoiding action",
          "This is a vessel engaged in fishing. It is my responsibility to keep clear under rule 18 and I will alter course to starboard, sounding one short blast"
        ],
        "correctIndex": 2,
        "image": "images/image496.jpg"
      },
      {
        "question": "The International Convention for the Safety of Life at Sea (SOLAS) regulations, Chapter 5, deals with the Safety of Navigation and applies to which vessels?",
        "options": [
          "To vessels with deadweight over 10 000 tons",
          "To vessels over a certain size",
          "To ALL vessels that go to sea",
          "To all vessels and all voyages with exceptions"
        ],
        "correctIndex": 3,
        "image": "images/image34.jpg"
      },
      {
        "question": "A Cargo Ship Equipment Certificate will be issued for:",
        "options": [
          "5 years with control every 12 months",
          "2 years with control every 6 months",
          "4 years",
          "3 years"
        ],
        "correctIndex": 0,
        "image": "images/image114.jpg"
      },
      {
        "question": "What is the priority for the ship's management team when fire breaks out?",
        "options": [
          "The ship's management team must call the nearest fire brigade and police station",
          "The ship's management team and the crew must evacuate the ship",
          "The ship's management team must organise the fire teams and then the teams have to rescue missing personnel",
          "The ship's management team must fight the fire and then call the fire teams"
        ],
        "correctIndex": 2,
        "image": "images/image25.jpg"
      },
      {
        "question": "A wire aerial for an MF/HF –transmitter must be suspended between isolators:",
        "options": [
          "To make the way for aerial currents as long as possible",
          "To save energy",
          "To prevent contact with earth",
          "To prevent burns when touching the aerial"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "When a message is sent by the Inmarsat—C installation to an Internet e-mail address, the land charge is:",
        "options": [
          "Independent of the destination",
          "Dependent on the destination",
          "Dependent on the 'chargeband'",
          "Dependent on the type of terminal used"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The ID of an Inmarsat M station on board starts with:",
        "options": [
          "3",
          "6",
          "1",
          "4"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which one of the listed items has to be included in a distress message?",
        "options": [
          "Weather in immediate vincinity.",
          "Last port of call.",
          "Destination.",
          "Identification of the ship."
        ],
        "correctIndex": 3,
        "image": "images/image7.jpg"
      },
      {
        "question": "MARPOL - Annex I. Your vessel sailed from Bahrain heading for Singapore. 2 days after departure, you would like to empty your machinery space bilges. What will be the correct procedures in this connection?",
        "options": [
          "Wait till after darkness and discharge in most convenient way.",
          "Discharge overboard through oily-water separating and filtering equipment without calling the bridge.",
          "Call the bridge and request for position and permission to discharge directly overboard.",
          "Call the bridge and request for position and permission to discharge overboard through oily water separating and filtering equipment."
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '31' can be used:",
        "options": [
          "When the coast-station is disfunctional",
          "When technical problems are experienced with the Inmarsat terminal",
          "To ask for maritime inquiries",
          "To ask for medical assistance"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Is it necessary to be certified to be a lifeboat-commander?",
        "options": [
          "No",
          "Yes, you must attend to a course held by certified personnel, and provide evidence of having maintained the required standards of competence every five years.",
          "Yes, you must attend a one week course at a approved course center.",
          "No, the only thing you need is one hour instruction from a deck officer."
        ],
        "correctIndex": 1,
        "image": "images/image177.jpg"
      },
      {
        "question": "If pollution takes place, what would you do immediately?",
        "options": [
          "Inform the manager.",
          "Report to relevant authorities.",
          "Inform the vessel's agent.",
          "Start clean-up operations."
        ],
        "correctIndex": 1,
        "image": "images/image178.jpg"
      },
      {
        "question": "What does the abbreviation STCW stand for?",
        "options": [
          "The International Shipowners, Transport and Cargo Work Convention",
          "The International Convention of Ship's Trading, Chartering and Waybills",
          "The International Convention on Standards of Training, Certification and Watchkeeping of Seafarers",
          "Seafarer's Training and Competence of Watchkeepers"
        ],
        "correctIndex": 2,
        "image": "images/image84.jpg"
      },
      {
        "question": "In the situation illustrated with a ship on even keel, how should the tug power be set to enable the vessel to be pushed sideways without changing its heading?",
        "options": [
          "It would be very difficult to predict which tug needs greater or lesser power, it would have to be trial and error",
          "Usually there would be greater power on the forward tug than on the after tug",
          "Equal power required by both tugs as they are the same distance from bow and stern",
          "Usually there would be greater power on the aft tug than on the forward tug"
        ],
        "correctIndex": 1,
        "image": "images/image559.jpg"
      },
      {
        "question": "You receive via the 8 MHz a DSC distress alert. The received DSC message is however distorted. The MMSI as well as the position are illegible. After listening at the 8 MHz telephone distress frequency, nothing is heard. This is because:",
        "options": [
          "Telephone signals in the same frequency band are generally weaker than DSC signals",
          "You should have listened on the 2182 kHz",
          "First an acknowledgement of a coastguard station must be received via the 8MHz",
          "You should have listened on VHF"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of VHF DSC",
          "the use of MF DSC",
          "the use of SART transponders"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The purpose of profiling is to?",
        "options": [
          "Identify different personality types.",
          "Categorize people based on their nationality and ethnicity.",
          "Get beneath the outer shell of an individual to obtain a more complete picture.",
          "Make judgements about people based on heir appearance."
        ],
        "correctIndex": 2,
        "image": "images/image158.jpg"
      },
      {
        "question": "\"RECEIVED MAYDAY\" is used in a:",
        "options": [
          "Supplementary receipt on a distress alert",
          "When received a weather report",
          "Distress alert",
          "Receipt of a distress alert"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "How does the International Regulations for Preventing Collisions define a 'vessel restricted in her ability to manoeuvre'?",
        "options": [
          "A vessel which through some exceptional circumstance is unable to manoeuvre as required by the Rules and is therefore unable to keep out of the way of another vessel",
          "A vessel engaged in underwater work, such as the laying, picking up or servicing of a pipeline, or which is in support of diving operations, performing dredging and mine-clearance or is deploying or recovering a pilot",
          "A vessel which from the nature of her work is restricted in her ability to manoeuvre as required by the Rules and is therefore unable to keep out of the way of another vessel",
          "A vessel which because of her draught in relation to the available depth of navigable water is restricted in her ability to deviate from her course and keep out of the way of another vessel"
        ],
        "correctIndex": 2,
        "image": "images/image525.jpg"
      },
      {
        "question": "A DSC-notice should be sent on VHF-channel:",
        "options": [
          "13",
          "16",
          "67",
          "70"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the required number of hours that a SART's battery must be able to operate the unit in the standby mode?",
        "options": [
          "Forty-eight (48) hours",
          "Eight (8) hours",
          "Four (4) days",
          "Three (3) days"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "Why shall a duly qualified officer supervise any potential polluting operation?",
        "options": [
          "To restrict pollution.",
          "To avoid pollution.",
          "To inform the authorities.",
          "To relieve the master."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "Who are responsible for safe working conditions onboard?",
        "options": [
          "Master, Chief Engineer & Chief Officer.",
          "The officer of the watch.",
          "The individual person.",
          "The safety officer."
        ],
        "correctIndex": 0,
        "image": "images/image250.jpg"
      },
      {
        "question": "The Declaration of Security:",
        "options": [
          "Identifies the security responsibilities of shipboard personnel.",
          "States the reporting procedures to government contact points.",
          "Details a ship's security measures.",
          "Addresses the security requirements shared between ships or between a port facility and a ship."
        ],
        "correctIndex": 3,
        "image": "images/image87.jpg"
      },
      {
        "question": "The word CHANNEL is spelled conform the international phonetic alphabet:",
        "options": [
          "Cornelies, Hotel, Apple, November, November, Echo, Land",
          "Charlie, Hotel, Alfa, November, November, Echo, Lima",
          "Charlie, Hotel, Able, November, November, Echo, Liverpool",
          "Cornelies, Hotel, Alfa, November, November, Echo, Lima"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "To get priority with radio-communication, one must notify the coast-station that the call is:",
        "options": [
          "A personal call",
          "A collect call",
          "An urgent call",
          "A priority calll"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "One wishes to have a telephone conversation with a person whose name is known. This is what is called:",
        "options": [
          "A call to a known person",
          "A personal call",
          "A direct call",
          "A collect call"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Who is responsible that regulatory working hours are not exceeded?",
        "options": [
          "The individual person.",
          "The bosun and the second engineer.",
          "The master and department heads.",
          "The safety officer."
        ],
        "correctIndex": 2,
        "image": "images/image60.jpg"
      },
      {
        "question": "Who is responsible for ensuring your ship completes a security assessment?",
        "options": [
          "Company Security Officer",
          "Ship Security Officer",
          "Recognized Security Organization",
          "Flag State Administration"
        ],
        "correctIndex": 0,
        "image": "images/image131.jpg"
      },
      {
        "question": "You have received the nine digit MMSI of a ship on your DSC equipment. In which publication will you find the name of the ship?",
        "options": [
          "The ITU List of Coast Stations",
          "The ITU List of Ship Stations",
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Radiodetermination and Special Services"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "You are taking fuel on your vessel in the US when you notice oil on the water around your vessel. You are to stop taking fuel and:",
        "options": [
          "Leave the area",
          "Begin clean up operations",
          "Notify the Corps of Engineers",
          "Notify the US Coast Guard"
        ],
        "correctIndex": 3,
        "image": "images/image262.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain medical advice ?",
        "options": [
          "26",
          "42",
          "32",
          "38"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "For what period of time is the protection and environment committee elected?",
        "options": [
          "5 - 6 years.",
          "3 - 4 years.",
          "1 - 2 years.",
          "8 years."
        ],
        "correctIndex": 2,
        "image": "images/image89.jpg"
      },
      {
        "question": "Where on the hull is the theoretical position of the hydrodynamic pivot point, when going ahead and turning?",
        "options": [
          "Amidships",
          "1/4 of vessel's length from the stern",
          "1/3 of the vessel's length from the bow.",
          "Normally varies dependant on the speed ahead"
        ],
        "correctIndex": 2,
        "image": "images/image503.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Rocket parachute flare",
          "EPIRB",
          "Survival craft distress pyrotechnic signals",
          "Survival craft portable radio"
        ],
        "correctIndex": 0,
        "image": "images/image231.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship adrift and needing the assistance of a tug ? (The weather is not bad and the ship will be aground 24 hours later)",
        "options": [
          "Safety call",
          "Distress call",
          "Urgent call",
          "Distress relay call"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "According to Rule 26 of the International Regulations for Preventing Collisions and the illustrated lights, what type of vessels are they?",
        "options": [
          "These are two vessels engaged in fishing, using purse-seine gear. The searchlights are simply working lights",
          "This is a vessel engaged in towing a disabled tow, restricted in its ability to manoeuvre, with a searchlight used to highlight the location of the tow",
          "These are two vessels engaged in fishing (pair trawling), showing the additional volutary signals for hauling nets",
          "These are two vessels engaged in fishing (pair trawling), showing the additional voluntary signals for shooting nets"
        ],
        "correctIndex": 2,
        "image": "images/image587.jpg"
      },
      {
        "question": "Where should the VHF survival craft transceivers be located during normal operation of the ship ?",
        "options": [
          "In the lifeboats",
          "Near the liferaft",
          "Near the gangway",
          "On the bridge"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "What percentage of the ship's stores are required to be inspected at Security Level 3?",
        "options": [
          "100% of the ship's stores are required to be inspected at Security Level 3.",
          "25-50% of the ship's stores are required to be inspected at Security Level 3.",
          "50-80% of the ship's stores are required to be inspected at Security Level 3.",
          "5-20% of the ship's stores are required to be inspected at Security Level 3."
        ],
        "correctIndex": 0,
        "image": "images/image256.jpg"
      },
      {
        "question": "What is the action that a GMDSS Radio Operator should take when a DSC distress alert is received?",
        "options": [
          "The Operator should immediately set continuous watch on VHF channel 70.",
          "No action is necessary, as the DSC control will automatically switch to the NBDP follow-on communications frequency.",
          "The Operator should immediately set continuous watch on the radiotelephone frequency that is associated with frquency band on which the distress alert was received.",
          "The Operator should immediately set continuous watch on the NBDP frequency that is associated with frequency band on which the distress alert was received."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following is a Accounting Authority Identification Code?",
        "options": [
          "F1B",
          "227990850",
          "FR01",
          "2187.5"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "A message is send by the Inmarset C-set. The land earth station will:",
        "options": [
          "Automatically send a positive delivery notification (PDN) to the sender",
          "Never send a positive delivery notification (PDN) to the sender. The addressed will have to confirm the message through the ground-station and request for further information, if desired",
          "Only send a positive delivery notification (PDN) to the sender if the sender requested, so in the send menu",
          "The sender has to confirm delivery by sending another separate message"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Why does a vessel slow down in shallow water even though the engine revolutions stay the same?",
        "options": [
          "The propeller thrust is reduced because of the increased water density",
          "Because the vessel's hull starts to interact with the sea floor",
          "Because there is increased wave action",
          "It does not, it stays at the same speed"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which type of call will be sent by a ship in danger of capsizing and needing assistance from all vessels in her vicinity ?",
        "options": [
          "Safety call",
          "Distress relay call",
          "Urgent call",
          "Distress call"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "In making VHF communication or test transmission you must:",
        "options": [
          "Identify yourself with your call sign and/or ship's name",
          "With DSC use, first broadcast the carrier wave for at least three seconds",
          "Warn all ships in the vicinity",
          "First tap on the mike several times, but not more than 10 times"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "What type of vessel is identified by the displayed shapes?",
        "options": [
          "A vessel that is constrained by draught",
          "A vessel restricted in its ability to manoeuvre",
          "A vessel that is engaged in towing",
          "A vessel not under command"
        ],
        "correctIndex": 3,
        "image": "images/image495.jpg"
      },
      {
        "question": "Who is responsible for ensuring that your ship's security plan meets the requirements of the ISPS Code?",
        "options": [
          "Ship Security Officer",
          "Flag State Administration",
          "Recognized Security Organization",
          "Company Security Officer"
        ],
        "correctIndex": 3,
        "image": "images/image131.jpg"
      },
      {
        "question": "*You are on board a cargo ship. The ship is heavily listing to starboard, making impossible the launching of the survival craft stowed on this side. Lifeboats and liferafts are equally distributed on each side of the vessel. What should be the total number of persons that can be accommodated in the remaining survival craft stowed on the port side ? (*) N is the total number of persons that vessel is permitted to carry.",
        "options": [
          "at least 100 % N (lifeboat capacity: 50 % N; liferaft capacity: 50 % N) (*)",
          "at least 150 % N (lifeboat capacity: 50 % N; liferaft capacity: 100 % N) (*)",
          "at least 150 % N (lifeboat capacity: 100 % N; liferaft capacity: 50 % N) (*)",
          "at least 200 % N (lifeboat capacity: 100 % N; liferaft capacity: 100 % N) (*)"
        ],
        "correctIndex": 3,
        "image": "images/image48.jpg"
      },
      {
        "question": "What is a \"passenger\" according to SOLAS regulations?",
        "options": [
          "Everyone who travels with a passenger ship",
          "Every person other than the Captain and the members of the crew or other persons employed or engaged onboard the ship in the business of that ship.",
          "Any person holding a ticket and travelling with a passenger ship",
          "Any person paying their voyage regardless of ship type"
        ],
        "correctIndex": 1,
        "image": "images/image159.jpg"
      },
      {
        "question": "On-board training in the use of davit-launched liferafts (including inflation and lowering whenever practicable) must take place",
        "options": [
          "every 3 months",
          "every month",
          "every 2 months",
          "every 4 months"
        ],
        "correctIndex": 3,
        "image": "images/image61.jpg"
      },
      {
        "question": "Check the items that can be a possible threat",
        "options": [
          "Bombing and Sabotage",
          "Cargo tampering and Stowaways",
          "\"Piracy, Hijacking and Smuggling\"",
          "All alternatives"
        ],
        "correctIndex": 3,
        "image": "images/image179.jpg"
      },
      {
        "question": "Which of following are security duties?",
        "options": [
          "Calibration of security equipment",
          "Checking ID of visitors onboard",
          "All alternatives",
          "Monitoring of restricted areas"
        ],
        "correctIndex": 2,
        "image": "images/image118.jpg"
      },
      {
        "question": "At sea red rocket signals are seen. This is not reported by radio. You have to begin the distress alert procedure via VHF with the term:",
        "options": [
          "MAYDAY",
          "MAYDAY RECU",
          "Distress alert",
          "MAYDAY RELAY"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is the disadvantage of using chemicals on an oil-spill on the water?",
        "options": [
          "The chemicals make it difficult to remove the oil from the water",
          "The water gets a white colour, which makes it easy to detect the oil-spill",
          "It is difficult to apply the chemicals if the oil drifts away from the ship's side",
          "It is difficult to apply chemicals if there is any wind"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "What is the emergency frequency on M.F. (Medium frequency) radio?",
        "options": [
          "2182 Hz",
          "2617 Hz",
          "1718 Hz",
          "1616 Hz"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "When a SOLAS vessel is required to have an emergency tow, what would be the best way to connect a tug?",
        "options": [
          "With the towline turned up on a set of bits on the forecastle deck",
          "With the towline led around the base of the windlass pedestal and shackled off",
          "Using the vessel's emergency towing arrangement",
          "Using a bridle made up from the vessel's anchor chains"
        ],
        "correctIndex": 2,
        "image": "images/image583.jpg"
      },
      {
        "question": "The word SATCOM is spelled conform the international phonetic alphabet:",
        "options": [
          "Sierra, Anna, Tango, Cornelies, Oslo, Mike",
          "Sierra, Able, Tango, Cornelies, Oslo, Man",
          "Sierra, Alfa, Tango, Charlie, Oscar, Mike",
          "Sierra, Able, Tripoli, Charlie, Oscar, Mike"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "According to rule 13 of the International Regulations for Preventing Collisions at Sea, what is the definition of \"an overtaking vessel\"?",
        "options": [
          "When coming up with another vessel from a direction more than 45 degrees abaft its beam",
          "When the vessel is detected as a radar target or sighted visually in a position directly astern",
          "When coming up with another vessel from any direction abaft its beam",
          "When coming up with another vessel from a direction more than 22.5 degrees abaft its beam"
        ],
        "correctIndex": 3,
        "image": "images/image556.jpg"
      },
      {
        "question": "The Master is responsible that all crew participate in monthly emergency drills. If 25% of the crew - or more - has not participated in such drill during the last month, what is the time limit to conduct such a drill after the vessel has left a port?",
        "options": [
          "Within 30 hrs",
          "Within 24 hrs",
          "Within 48 hrs",
          "Within 12 hrs"
        ],
        "correctIndex": 1,
        "image": "images/image53.jpg"
      },
      {
        "question": "What is the emergency channel on VHF?",
        "options": [
          "Channel 16",
          "Channel 21",
          "Channel 09",
          "Channel 69"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "According to Rule 35 of the International Regulations for Preventing Collisions what sound signal is made by a vessel not under command when in or near an area of restricted visibility?",
        "options": [
          "One prolonged blast, followed by two short blasts, at intervals of not more than one minute",
          "One prolonged blast at intervals at not more than two minutes",
          "One prolonged blast, followed by two short blasts, at intervals of not more than two minutes",
          "Two prolonged blasts, followed by one short blast, at intervals of not more than two minutes"
        ],
        "correctIndex": 2,
        "image": "images/image589.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 601-700",
    "questions": [
      {
        "question": "For calling a coast-station by VHF one should preferably use:",
        "options": [
          "A special calling channel of that coast-station",
          "Channel 16",
          "Channel 70",
          "A working channel of the nearest shore-station of that coast-station"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding the stowage of a survival craft corresponds to present SOLAS regulations? Each survival craft shall be stowed:",
        "options": [
          "Wherever space is available.",
          "In a secure and sheltered position and protected from damage by fire or explosion.",
          "On the starboard side of the ship.",
          "In a state of readiness so that two crew-members can prepare for embarkation and launching in less than 15 minutes."
        ],
        "correctIndex": 1,
        "image": "images/image79.jpg"
      },
      {
        "question": "*Which one of the given requirements regarding manning and supervision of survival craft corresponds to the SOLAS regulation?",
        "options": [
          "There shall be at least 5 trained persons on board, mustering and assisting untrained persons",
          "Every lifeboat required to carry radio telegraph installation shall have a deck officer capable of operating the equipment assigned",
          "A deck officer or certificated person shall be placed in charge of each survival craft to be used",
          "Every motorised survival craft shall have a certificated engineer assigned"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "Eavesdropping and phone taps are examples of which threat to information security?",
        "options": [
          "Sabotage",
          "Terrorism",
          "Espionage",
          "Subversion"
        ],
        "correctIndex": 2,
        "image": "images/image138.jpg"
      },
      {
        "question": "Who is responsible for issuing an ISPS certificate?",
        "options": [
          "The Flag State",
          "US Coast Guard",
          "The insurance company",
          "The Port State"
        ],
        "correctIndex": 0,
        "image": "images/image133.jpg"
      },
      {
        "question": "A MF/HF-DSC multi-frequency call attempt may:",
        "options": [
          "Be repeated after 1 to 1.5 minutes",
          "Not be repeated",
          "Be repeated after 15 minutes",
          "Be repeated after 3.5 to 4.5 minutes"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which VHF channel should be used for intership navigation safety communications?",
        "options": [
          "Ch.06",
          "Ch.12",
          "Ch.13",
          "Ch.16"
        ],
        "correctIndex": 2,
        "image": "images/image23.jpg"
      },
      {
        "question": "The batteries must be placed in a well ventilated place, so that:",
        "options": [
          "The person can work in the compartment",
          "There is sufficient oxygen available for optimum working of the batteries",
          "The detonating gas can be discharged",
          "The production of detonating gas can be prevented"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "With an Inmarsat-C terminal the option 'PSTN' for addressing is available. This option:",
        "options": [
          "Delivers a message as a telegram",
          "Delivers the message as a fax",
          "Have the operator read the message by phone",
          "Is to deliver a message by telephone via a modem on the computer of the suscriber"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "If drugs are discovered onboard your ship....",
        "options": [
          "Notify the authorities after you arrive at the next port of call.",
          "Disembark crew and passengers as quickly as possible at the next port of call so the authorities can conduct their investigation.",
          "Ensure the witness to the discovery signs your incident report.",
          "Write a report a few days after the event and describe everything that occurred."
        ],
        "correctIndex": 2,
        "image": "images/image137.jpg"
      },
      {
        "question": "To prevent overload of the MF/HF transmitter;",
        "options": [
          "Switch over to low power intermitently",
          "Do not transmit too long at full power",
          "Do not leave the transmitter on stand-by for too long, if not required",
          "Clean the dust filter of the fan regularly"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A distress alert has accidentally been sent with the Inmarsat-C installation. One should now:",
        "options": [
          "Call the manager",
          "Make contact with an RCC",
          "Turn off the transmitter",
          "Wait until an RCC reports"
        ],
        "correctIndex": 1,
        "image": "images/image12.jpg"
      },
      {
        "question": "How many Radar Transponders (SART) are required to be carried onboard a ship for use in survival crafts?",
        "options": [
          "2, one of which being capable of floating free if the ship sinks",
          "Two on each side of the ship",
          "One in each lifeboat",
          "One on each side of the ship"
        ],
        "correctIndex": 3,
        "image": "images/image3.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of HF DSC and INMARSAT C SAFETYNET",
          "The use of VHF DSC and NAVTEX",
          "The use of SARSAT COSPAS Epirbs and NAVTEX",
          "The use of MF DSC and INMARSAT C SAFETYNET"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Code signals concerning requests and general information on medical matters normally consist of:",
        "options": [
          "Letter M plus two other letters.",
          "Letter D plus two other letters.",
          "Letter P plus two other letters.",
          "Letter H plus two other letters."
        ],
        "correctIndex": 0,
        "image": "images/image16.jpg"
      },
      {
        "question": "Which of the following duties shall be included in the \"muster list\" as being assigned to members of the crew ?",
        "options": [
          "Preparation of immersion suits for the ship's passengers",
          "Preparation of manoeuvres intended to ease launching of the survival craft",
          "Preparation and launching of the survival craft",
          "Operation of the vessel's propulsion system"
        ],
        "correctIndex": 2,
        "image": "images/image80.jpg"
      },
      {
        "question": "If requested by a coastal radio station to participate in a rescue operation, what is the most important information you may give?",
        "options": [
          "Your crews nationality",
          "Your vessel's destination",
          "Your vessel's own cargo owner",
          "Your vessel's position, name, call sign and speed"
        ],
        "correctIndex": 3,
        "image": "images/image27.jpg"
      },
      {
        "question": "On an oil tanker outside a special area, what is the maximum instantaneous rate of discharge of oil content per nautical mile?",
        "options": [
          "30 litres per nautical mile",
          "60 litres per nautical mile.",
          "20 litres per nautical mile.",
          "40 litres per nautical mile."
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "Which of the connections you are shown, are the dedicated shore connection (MARPOL-connection) for discharging of sewage ?",
        "options": [
          "3",
          "1",
          "4",
          "2"
        ],
        "correctIndex": 2,
        "image": "images/image45.jpg"
      },
      {
        "question": "What rules and regulations are regulating the watch keeping routines in the engine room?",
        "options": [
          "International Standard for Training and Watch keeping (STCW)",
          "Both STCW and Class rules",
          "SOLAS",
          "Class Rules"
        ],
        "correctIndex": 1,
        "image": "images/image62.jpg"
      },
      {
        "question": "Which statement about the use of profiling onboard a ship is true?",
        "options": [
          "Profilers need at least half an hour to gather the information they need.",
          "Only visitors can be profiled.",
          "A random selection process must be established.",
          "Detection equipment can be used in place of profiling."
        ],
        "correctIndex": 2,
        "image": "images/image173.jpg"
      },
      {
        "question": "Which type of profiling is used to obtain information about rival companies and their employees?",
        "options": [
          "Commercial",
          "Criminal",
          "General",
          "Industrial"
        ],
        "correctIndex": 3,
        "image": "images/image158.jpg"
      },
      {
        "question": "In case of a pollution in US waters, who shall notify the cleaning up contractor (OPA-90)",
        "options": [
          "Qualified Individual",
          "The Master",
          "The shipowner",
          "Emergency response team"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "To guarantee optimal reception of VHF-DSC-calls, every:",
        "options": [
          "DSC-report is sent twice, at least every second call is compared with the earlier received call",
          "DSC-symbol is checked on the right amount of 10, and then checked on the correct relation by Error Checked Character",
          "DSC-calls are repeated untill received",
          "DSC-symbol is sent twice and checked extra by Error Check Character"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC",
          "The use of MF DSC",
          "The use of SARSAT COSPAS Epirbs",
          "The use of INMARSAT Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image24.jpg"
      },
      {
        "question": "The International Maritime Bureau Piracy Reporting Centre attributes the increased numbers of hijackings to:",
        "options": [
          "Easy access to military weapons.",
          "The greater involvement in piracy of well-organized and armed crime networks.",
          "Higher crime rates around the world.",
          "More crew involvement."
        ],
        "correctIndex": 1,
        "image": "images/image72.jpg"
      },
      {
        "question": "The log-in of an Inmarsat-C installation is important:",
        "options": [
          "To inform the NCS that one is available for messages offered",
          "To keep watch on Sat-C for safety messages",
          "To inform the addressee, that one is available for messages offered",
          "To inform the LES, that one is available for messages offered"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "If one requires medical advice by means of an Inmarsat-C terminal one should use the following address:",
        "options": [
          "Sick Seaman",
          "MED +",
          "32",
          "Radiomedical"
        ],
        "correctIndex": 2,
        "image": "images/image12.jpg"
      },
      {
        "question": "Where on a vessel moving ahead through the water, is the most dangerous place for a tug to manoeuvre?",
        "options": [
          "The most dangerous position is where the tug approaches the bow, rounding the shoulder to pass a line",
          "The most dangerous position is where the tug approaches the stern of the larger vessel and enters into its associated positive pressure field",
          "There is no one position more dangerous than another, hydrodynamic effects are the same all around the hull",
          "The most dangerous position is when the tug is alongside the amidships section passing a line"
        ],
        "correctIndex": 0,
        "image": "images/image534.jpg"
      },
      {
        "question": "Which organization or administration is responsible for surveys and inspections of ships, and the issue of Safety Certificates?",
        "options": [
          "Government Authorities of the Flag State",
          "International Maritime Organization (IMO)",
          "Ships Classification Associations (Lloyd's, American Bureau of Shipping, The Norwegian Veritas, Germanische Lloyd's, etc.)",
          "International Labor Organization (ILO)"
        ],
        "correctIndex": 0,
        "image": "images/image161.jpg"
      },
      {
        "question": "At sea there is a container adrift which can be a danger for navigation. The call starts with:",
        "options": [
          "SECURITE (3x)",
          "PAN PAN (3x)",
          "URGENT (3x)",
          "MAYDAY (3x)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "If a ship in the MF-band wants to have a DSC-connection with a coast-station (no 'distress alert' or a test alert) the following frequencies are chosen:",
        "options": [
          "TX: 2177.0 kHz RX: 2177.0 kHz",
          "Tx: 2187.5 KHz RX: 2182 KHz",
          "TX: 2177.0 kHz RX: 2189.5 kHz",
          "TX: 2189.5 kHz RX: 2177.0 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is SOPEP?",
        "options": [
          "A Shipboard Oil Pollution Exemption Procedure",
          "A Seafarer's Offical Pension and Employment Payment scheme",
          "A Ship-Owners Permitted Entry Plan",
          "A Shipboard Oil Pollution Emergency Plan"
        ],
        "correctIndex": 3,
        "image": "images/image52.jpg"
      },
      {
        "question": "You are onboard a vessel off the West African coast. You want to dump a mixture of food waste, glass bottles and floating packing materials. Is this allowed? and if so, how far off the coast would you have to be?",
        "options": [
          "25 nautical miles off the coast",
          "12 nautical miles off the coast",
          "3 nautical miles off the coast",
          "This is prohibited"
        ],
        "correctIndex": 3,
        "image": "images/image117.jpg"
      },
      {
        "question": "A Cospas-Sarsat EPIRB can be used in:",
        "options": [
          "Only in the sea-areas A2 and A3",
          "Only in the sea-areas A1, A2 and A3",
          "All sea-areas (A1 to A4)",
          "Only in sea-area A4"
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "The display of a radiotelephone-installation shows the following selections: Transmitting mode: H3E Transmitting frequency: 2187,5 kHz The transmitting mode indicator is \"flashing\". This can mean that:",
        "options": [
          "The transmitting mode is not compatible with the chosen frequency",
          "The \"H3E\"mode is to be selected before transmitting on the 2187,5 kHz band",
          "The radiotelephone-alarm signal must be transmitted now",
          "You are ready to press the send buuton"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The prescribed test of EPIRB, SART and portable VHF radio set must be entered in:",
        "options": [
          "Radio equipment manual",
          "Equipment survey",
          "Maintenance manual",
          "Ship's radio log"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "A MMSI number consist of:",
        "options": [
          "6 digits",
          "10 digits",
          "9 digits",
          "The call sign followed by 4 digits"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "For how long time should a VHF survival craft transceiver be able to operate on its batteries ?",
        "options": [
          "8 hours",
          "24 hours",
          "12 hours",
          "6 hours"
        ],
        "correctIndex": 0,
        "image": "images/image26.jpg"
      },
      {
        "question": "What is full form of VRP (OPA-90)",
        "options": [
          "Vessel Reporting Procedures",
          "Vessel Report Plan",
          "Vessel Response Procurement",
          "Vessel Response Plan"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "You want to send a DSC-call in connection with a shore telephone-call. You must choose:",
        "options": [
          "Distress",
          "Safety",
          "Routine",
          "Urgency"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which PPM is allowed for discharging of \"Bilge Water\" overboard?",
        "options": [
          "0 PPM",
          "15 PPM",
          "100 PPM",
          "50 PPM"
        ],
        "correctIndex": 1,
        "image": "images/image81.jpg"
      },
      {
        "question": "Your vessel is proceeding along a narrow channel in front of another one. You hear this signal from the vessel behind you. What does it mean?",
        "options": [
          "I intend to overtake you on your port side",
          "I am operating astern propulsion",
          "I am faster than you. Get out of the way",
          "I intend to overtake you on your starboard side"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Searches are often triggered by:",
        "options": [
          "An increase in security level by the Flag State.",
          "Lost baggage.",
          "News stories of stowaways.",
          "The receipt of a shipment of damaged stores."
        ],
        "correctIndex": 0,
        "image": "images/image137.jpg"
      },
      {
        "question": "You are in open water and clear conditions. You are approaching the pilot station when you hear this signal from a vessel ahead of you. What does it signify?",
        "options": [
          "That the vessel is starting its engine and resuming its passage",
          "That the vessel is picking up its pilot",
          "That the vessel is altering its course to starboard",
          "That the vessel is operating astern propulsion"
        ],
        "correctIndex": 3,
        "image": "images/image581.jpg"
      },
      {
        "question": "If the speed of a vessel through the water is HALVED, how will this effect squat?",
        "options": [
          "The squat effect will also be halved",
          "The squat effect will be reduced to approximately a quarter of its original value",
          "There will be very little change to the effects of squat",
          "There will be a significant change in the reduction of underkeel clearance, but the amount varies from ship to ship"
        ],
        "correctIndex": 1,
        "image": "images/image547.jpg"
      },
      {
        "question": "Who will have the authority to take charge and make appropriate decisions in the event of a vessel emergency when transiting the Panama Canal?",
        "options": [
          "The Master and Pilot will agree the best course of action to be taken to resolve the emergency situation.",
          "The Panama Canal Authority",
          "The ship's company",
          "The ship's Master"
        ],
        "correctIndex": 1,
        "image": "images/image537.jpg"
      },
      {
        "question": "What IMO conventions take care of the human safety at sea?",
        "options": [
          "There isn't any conventions that take care of the human safety at sea",
          "It is the SOLAS conventions that take care of the human safety at sea",
          "It is the MARPOL conventions that take care of the human safety at sea",
          "It is the STCW 78/95 that take care of the human safety at sea"
        ],
        "correctIndex": 1,
        "image": "images/image76.jpg"
      },
      {
        "question": "What is the top priority if an incident occurs in US waters (OPA-90)",
        "options": [
          "Prevention of oil pollution",
          "Protection of the environment",
          "Any immediate action to prevent loss of time",
          "Safety of ship and crew"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "Which of these statements about profiling is correct?",
        "options": [
          "Verify that answers to questions match up with what's already known about the person being questioned.",
          "Use only open-ended questions.",
          "Check the ID of all visitors and some crew prior to boarding.",
          "Pay less attention to body language and behaviour and more attention to answers to questions."
        ],
        "correctIndex": 0,
        "image": "images/image63.jpg"
      },
      {
        "question": "You are proceeding along a narrow channel behind another vessel. You have a higher speed and have signalled your intention to the vessel ahead that you intend to overtake it on its port side. The vessel responds with this sound signal. What does it mean?",
        "options": [
          "This is a signal intended for another vessel or shore station. It is nothing to do with our vessel",
          "That the vessel is indicating its agreement with my proposed manoeuvre",
          "That the vessel does not agree with my proposed manoeuvre",
          "That the vessel suggests I overtake on the starboard side instead"
        ],
        "correctIndex": 1,
        "image": "images/image486.jpg"
      },
      {
        "question": "For how long is the health certificate valid for a seafarer above the age of 18?",
        "options": [
          "Three months.",
          "No time limit.",
          "Two years.",
          "One year."
        ],
        "correctIndex": 2,
        "image": "images/image116.jpg"
      },
      {
        "question": "DSC uses for automatic identification the MMSI. The identification 002442000 is assigned to:",
        "options": [
          "A vessel",
          "A type of vessel's",
          "A group of vessels",
          "A coast-station or coast guard-station"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "On board an accident happened. Urgent radio-medical advice is needed. We choose the category:",
        "options": [
          "Safety",
          "Distress",
          "Urgency",
          "Routine"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "If a coast-station doesn't answer a call on VHF working channel or doesn't send a reply signal:",
        "options": [
          "You can repeat your call immediately when convinced that no other radio traffic is interfered with",
          "You must call on distress channel",
          "You must call on another working channel",
          "You can repeat your call after 2 minutes"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "When a pollution incident occurs there is a plan for actions to be undertaken. State which of following priority sequences to be considered:",
        "options": [
          "Report - stop pumps -  clean up?",
          "Stop pumps - report - clean up?",
          "Clean up - report - stop pumps?",
          "Stop pumps - clean up - report?"
        ],
        "correctIndex": 1,
        "image": "images/image121.jpg"
      },
      {
        "question": "Which two persons check the Declaration of Security? Select the correct pairing.",
        "options": [
          "The Company Security Officer and the Ship Security Officer",
          "The Port Facility Security Officer and the Ship Security Officer",
          "The Company Security Officer and the Port Facility Security Officer",
          "The Local Coast Guard Officer and the Port Facility Security Officer"
        ],
        "correctIndex": 1,
        "image": "images/image87.jpg"
      },
      {
        "question": "The recommended connection between antenna and VHF is:",
        "options": [
          "Three vein cable",
          "Electric cable",
          "Band cable",
          "Coaxial cable"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of these statements about drug smuggling is true?",
        "options": [
          "\"Drug smuggling is only a problem in certain ports, so only ships sailing in those ports need to implement preventative measures.\"",
          "The risks to ships are not restricted to specific areas or trading routes.",
          "\"The preventative measures you incorporate into your ship's security plan should be exhaustive, regardless of the level of threat identified by your ship's security assessment.\"",
          "Drugs are difficult to conceal onboard a ship."
        ],
        "correctIndex": 1,
        "image": "images/image69.jpg"
      },
      {
        "question": "Notification logging procedures .(OPA-90)",
        "options": [
          "Only initial reports to be logged",
          "Only communication with USCG",
          "Every report or message must be logged including time and date",
          "Only verbal reports for documentation"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "MARPOL - Annex V. Disposal of garbage outside \"Special Areas\". After unpacking spares, you are left with a limited amount of packing materials. Is this prohibited, if not, what will be the nearest distance to land for disposal into the sea of these materials?",
        "options": [
          "3 miles",
          "25 miles",
          "This is prohibited",
          "12 miles"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "What type of bomb search should you conduct to avoid panic when the credibility of the threat is in doubt and you don't want to disrupt ship business?",
        "options": [
          "External search team",
          "Nominated officers search",
          "Known hiding spot search",
          "Crew search"
        ],
        "correctIndex": 1,
        "image": "images/image59.jpg"
      },
      {
        "question": "The best way to ensure you get the equipment you need is to:",
        "options": [
          "Buy what everyone else is buying.",
          "Determine your needs and do some research.",
          "Buy the most expensive equipment on the market.",
          "Buy the newest models."
        ],
        "correctIndex": 1,
        "image": "images/image70.jpg"
      },
      {
        "question": "The authority to order the use of distress signal or distress alerts is:",
        "options": [
          "The person designated to maintain communication during distress situations",
          "The first person to discover the distress situation",
          "Company safety officer",
          "Only with the master"
        ],
        "correctIndex": 3,
        "image": "images/image25.jpg"
      },
      {
        "question": "Which of the options best describes how a \"Balanced Rudder\" is constructed?",
        "options": [
          "Part of the rudder area is forward of the turning axis, therefore reducing the load on the steering motor.",
          "There is equal rudder area forward and aft of the turning axis, the turning axis being at the geometrical centre of the rudder area",
          "The rudder has an additional flap attached to the trailing edge to improve rudder efficiency",
          "The rudder is operated by two steering motors providing equal amounts of power to the rudder"
        ],
        "correctIndex": 0,
        "image": "images/image504.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is it?",
        "options": [
          "This vessel is not under command, but is making way through the water",
          "This vessel is aground",
          "This vessel is not under command and stopped in the water",
          "This is a vessel constrained by her draft"
        ],
        "correctIndex": 0,
        "image": "images/image491.jpg"
      },
      {
        "question": "What are the functions of a flag state administration?",
        "options": [
          "They have responsibility for ensuring that ships are properly registered",
          "They have responsibility for setting, monitoring and enforcing standards of safety and pollution prevention on vessels flying the countries flag",
          "The maintain a record of all ship and their crews, and produce statistics involving ships from their country.",
          "The have responsibility for ensuring that ships are correctly manned and that crews' terms and conditions of employment are met satisfactorily"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "The analyses of the smoke produced by a fire, may give an interpretation of that fire. Which are the factors we should take into account?",
        "options": [
          "There is no possible interpretation of a fire according to the smoke",
          "Opacity, amount and colour",
          "Amount and opacity only",
          "Colour only"
        ],
        "correctIndex": 1,
        "image": "images/image55.jpg"
      },
      {
        "question": "The DoS addresses the responsibility for the security of the water around the ship and the verification of increased threat levels.",
        "options": [
          ".",
          "FALSE",
          ".",
          "TRUE"
        ],
        "correctIndex": 3,
        "image": "images/image87.jpg"
      },
      {
        "question": "What does the term OIL mean, as used in the Oil Pollution Regulations?",
        "options": [
          "Sludge",
          "All of the mentioned",
          "Fuel oil",
          "Oil refuse"
        ],
        "correctIndex": 1,
        "image": "images/image57.jpg"
      },
      {
        "question": "Shipboard Emergency Drills must be carried out at least (OPA-90):",
        "options": [
          "Once every six months",
          "Once a week",
          "Once a month",
          "Once a year"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "A Ship Security Assessment is integral to the creation of your ship's security plan.",
        "options": [
          "FALSE",
          "TRUE",
          ".",
          "."
        ],
        "correctIndex": 1,
        "image": "images/image91.jpg"
      },
      {
        "question": "\"Part way through a profiling interview with a supplier, the package the individual is carrying arouses your suspicion. What do you do?\"",
        "options": [
          "Confront the individual and demand that he open the package.",
          "Discreetly inform someone of your suspicions so he or she can get assistance.",
          "Take the package and open it.",
          "Call for help on the radio."
        ],
        "correctIndex": 1,
        "image": "images/image46.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision, which has resulted in a heavy oil leakage. Who should be called to handle pollution claims and damages?",
        "options": [
          "The P & I Club's nearest representative.",
          "The Classification Society's representative.",
          "Flag state representative.",
          "The Leading Hull Underwriter's nearest Average Agent."
        ],
        "correctIndex": 0,
        "image": "images/image163.jpg"
      },
      {
        "question": "The steps of the embarkation ladder used must be spaced apart by a distance of:",
        "options": [
          "200 mm",
          "300 mm",
          "Equally spaced and not less than 300 mm or more than 380 mm",
          "equally spaced, not less than 200 mm or more than 280 mm"
        ],
        "correctIndex": 2,
        "image": "images/image65.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of VHF DSC and VHF Epirbs",
          "The use of HF DSC and COSPAS SARSAT Epirbs",
          "The use of HF DSC and INMARSAT Epirbs",
          "The use of MF DSC and INMARSAT Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image39.jpg"
      },
      {
        "question": "On area A3 the function \"Reception of shore to ship distress alerts\" is mainly based on:",
        "options": [
          "The use of HF DSC and INMARSAT C SAFETYNET",
          "The use of SARSAT COSPAS Epirbs and NAVTEX",
          "The use of MF DSC and INMARSAT C SAFETYNET",
          "The use of VHF DSC and NAVTEX"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "On area A3 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "the use of MF DSC",
          "the use of HF DSC",
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "The use of HF DSC",
          "The use of MF DSC",
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "the use of HF DSC",
          "the use of HF/MF and/or VHF R/T",
          "the use of SARSAT COSPAS Epirb",
          "the use of MF and/or HF R/T"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Why is it important to have good a relationship between the crew on board a vessel?",
        "options": [
          "It encourages crew to extend their contract",
          "It leads to better work performance and positive atmosphere among the crew",
          "Crew comes to know each others problems",
          "It will prevent accidents from happening"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Onboard training should be organised in such a way that:",
        "options": [
          "Each crew member is trained individually",
          "none of the above",
          "It does not contravene with the rest hours of the crew and each crew member is trained individually",
          "It is an integral part of the overall training plan and does not contravene with the rest hours of the crew"
        ],
        "correctIndex": 3,
        "image": "images/image84.jpg"
      },
      {
        "question": "Which personnel must undergo familiarization training on board?",
        "options": [
          "Only catering staff",
          "Only the deck officers",
          "Everyone",
          "Only the ratings"
        ],
        "correctIndex": 2,
        "image": "images/image246.jpg"
      },
      {
        "question": "In area A1 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of SART transponders",
          "the use of INMARSAT Epirbs",
          "the use of VHF DSC"
        ],
        "correctIndex": 1,
        "image": "images/image70.jpg"
      },
      {
        "question": "In area A1 the function \"Reception of shore to ship distress alerts\" is mainly based on:",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of SART transponders",
          "the use of MF DSC",
          "the use of VHF DSC"
        ],
        "correctIndex": 3,
        "image": "images/image330.jpg"
      },
      {
        "question": "In area A2, the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of INMARSAT Epirbs",
          "The use of MF DSC",
          "The use of VHF DSC",
          "The use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image536.jpg"
      },
      {
        "question": "Whether or not the NAVTEX is functioning properly, can be checked using:",
        "options": [
          "A company test procedure",
          "A compulsory built-in alarm for defects",
          "Test transmissions specially broadcast for this purpose once a week",
          "A testing program built in for this purpose"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "That the 406 MHz Cospas-Sarsat EPIRB is in proper working order can be tested with:",
        "options": [
          "Regulation monthly test transmissions from RCC 's",
          "Requesting RCC for the test",
          "The testing function of the device",
          "Test transmissions from Cospas-Sarsat satellites"
        ],
        "correctIndex": 2,
        "image": "images/image412.jpg"
      },
      {
        "question": "Substances, materials and articles shall be stowed as indicated in the Dangerous Goods List of the IMDG Code, in accordance with a series of stowage categories, which are designated as:",
        "options": [
          "10 categories, numbered 1-10.",
          "10 categories, labelled A-K (excluding I).",
          "Three categories, numbered I, II and III.",
          "5 categories, labelled A-E."
        ],
        "correctIndex": 3,
        "image": "images/image499.jpg"
      },
      {
        "question": "In area A1 the function \"Reception of shore to ship distress alerts\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC",
          "The use of MF DSC",
          "The use of SARSAT COSPAS Epirbs",
          "The use of SART transponders"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "Which of the following requirements regarding on board stability data corresponds to present regulations? (NSCL 4/12.1)",
        "options": [
          "A calculation example showing the use of \"KG\" limitation curves.",
          "A calculation example showing use of \"GM\" limitation curves.",
          "Stability data produced by stability calculation instruments.",
          "Drawings and caculations documenting the stability of the ship, both in intact and all possible damage condition."
        ],
        "correctIndex": 0,
        "image": "images/image180.jpg"
      },
      {
        "question": "In area A2, the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "The use of MF and/or VHF R/T",
          "The use of SART transponders",
          "The use of VHF DSC",
          "The use of MF DSC"
        ],
        "correctIndex": 0,
        "image": "images/image487.jpg"
      },
      {
        "question": "Onboard the following message is received on the DSC controller: DOO: 245329000 CH16 ; S distress ack 244123000 What station sent the distress acknowledgement?",
        "options": [
          "None of the given",
          "244123000",
          "245329000",
          "002453290"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The emergency battery of a GMDSS portable radio:",
        "options": [
          "Must be replaced before the expiry date is exceeded",
          "Must be tested once a week",
          "Cannot be replaced",
          "Must be charged after expiry date"
        ],
        "correctIndex": 0,
        "image": "images/image16.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: RX: 002442000 ; Ch87 ; D Sellcall Routine  We're asked to listen on:",
        "options": [
          "VHF- channel 87",
          "Channel Delta of the coast station",
          "Radio telephony-channel 7 in the 8 MHz band",
          "VHF- channel 16"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The DSC-controller displays the following: DOO: 246321000 CH16 ; S distress flooding After receiving this DSC message nothing more is received. Sending receipt on channel 16 does not give any response. One should first:",
        "options": [
          "Send a DSC distress alert relay",
          "Inform the safety officer",
          "Send a DSC acknowledgement",
          "Listen out on VHF channel 67"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "In radio telephony what is the \"URGENCY CALL\" which should be used to indicate that you have a very urgent message to transmit concerning the safety of another vessel or person?",
        "options": [
          "Pan Pan (3 times)",
          "Victor Victor (3 times)",
          "Securite (3 times)",
          "Mayday (3 times)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: TX call:Selectiveto: 02114200 Category:RoutineUSB:telephony DSC Tx 2189.5 kHzsave>send<  This DSC-message must be transmitted in the mode:",
        "options": [
          "J3E",
          "G3E",
          "H3E",
          "F1B"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "On area A3 the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "The use of MF and/or HF R/T",
          "The use of DSC and/or INMARSAT C",
          "The use of HF/MF and/or VHF R/T and/or INMARSAT C",
          "The use of HF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "Where several rescue units are engaged in a search and rescue operation, one of them may be designated as the On-Scene Coordinator(OSC). Which of the following descibes how this appointment will be made?",
        "options": [
          "The OSC will always be designated by the Search and Rescue Mission Coordinator",
          "The role of OSC is only taken by a naval ship close to the area",
          "An aircraft is usually appointed as the OSC because of their speed",
          "The coastguard will appoint the OSC using their vessel database to assess suitability"
        ],
        "correctIndex": 0,
        "image": "images/image239.jpg"
      }
    ]
  },
  {
    "title": "Bulk Carrier 701-710",
    "questions": [
      {
        "question": "The DSC-controller display the following: DOO: 244562000 CH16 ; S distress sinking After receiving this DSC message the following is done immediately:",
        "options": [
          "Call the Chief officer",
          "Give a \"DSC-acknowledgement\"",
          "Listen out on VHF channel 16",
          "Send a \"distress alert relay\""
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "An Inmarsat-C terminal is suitable for:",
        "options": [
          "Telephony, telex, fax and data",
          "Telephony, fax and data",
          "Telex only",
          "E-mail, SMS, telex, chart and weather updates."
        ],
        "correctIndex": 3,
        "image": "images/image12.jpg"
      },
      {
        "question": "What should you do with the ashes from your vessels incinerator if you have incinerated garbage containing plastics?",
        "options": [
          "Discharge at sea providing you are more than 12 miles offshore",
          "Discharge at sea providing you are not in any river or estuary",
          "Discharge at sea providing you are more than 25 miles offshore",
          "MARPOL demands discharge to a shore facility, regardless of content"
        ],
        "correctIndex": 3,
        "image": "images/image230.jpg"
      },
      {
        "question": "From the list below, which is among the recommended actions for a vessel to take, on entering an area known for pirate activity?",
        "options": [
          "To transit at night time only",
          "To confine all ship's personnel to one room onboard",
          "To transit with maximum safe speed",
          "To turn off all lights"
        ],
        "correctIndex": 2,
        "image": "images/image72.jpg"
      },
      {
        "question": "What is the result of an \"unusually large metacentric height\"?",
        "options": [
          "The vessel's tweendeck heights is too high",
          "The vessel will roll slowly or be unstable",
          "The vessel will roll violently",
          "The vessel will have a great bending moment"
        ],
        "correctIndex": 2,
        "image": "images/image1000.jpg"
      },
      {
        "question": "In area A1 the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of portable VHF",
          "The use of VHF DSC",
          "The use of HF DSC",
          "The use of SART transponders"
        ],
        "correctIndex": 1,
        "image": "images/image295.jpg"
      },
      {
        "question": "As far as possible, all engines in lifeboats and rescue boats should be run",
        "options": [
          "for a total period of not less than 3 minutes every month",
          "for a total period of not less than 10 minutes every week",
          "for a total period of not less than 3 minutes every week",
          "for a total period of not less than 5 minutes every month"
        ],
        "correctIndex": 2,
        "image": "images/image1000.jpg"
      },
      {
        "question": "What is usually the effect on G when the ship is damaged below the waterline, with water ingress?",
        "options": [
          "It is unchanged",
          "It rises",
          "It lowers",
          "It first rises then lowers"
        ],
        "correctIndex": 2,
        "image": "images/image1000.jpg"
      },
      {
        "question": "A contractor is hired to install new navigation equipment onboard your ship while it's berthed. For a period of time he's left unsupervised and photographs schematics of the ship that he finds rolled up and stored in the corner of a nearby office. Later, from home, he hacks into the network and prints off information about the ship's security procedures. Which of these information security measures would have prevented his unauthorized access?",
        "options": [
          "Secure area, passwords, a firewall and a secure network.",
          "Firewall, protective markings, vetting and a secure network.",
          "Protective markings, reference checks, and passwords.",
          "Secure area, passwords, a firewall and protective markings."
        ],
        "correctIndex": 0,
        "image": "images/image63.jpg"
      },
      {
        "question": "When moving into an Emission Control Area for Sulphur, which of these is most important?",
        "options": [
          "That low Sulphur fuel is actually being burned before entry into the ECA",
          "That the change-over to low Sulphur fuel was started before entry into the ECA",
          "That the change-over to low Sulphur fuel is complete before arrival in port",
          "That the change-over to low Sulphur fuel is started before arrival in port"
        ],
        "correctIndex": 0,
        "image": "images/image90.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 1-100",
    "questions": [
      {
        "question": "The most effective method of dealing with an under-deck cargo space fire on board a container ship, is to:",
        "options": [
          "Turn the vessel off the wind to reduce the relative wind strength.",
          "Deploy the fixed firefighting system.",
          "Boundary cool the cargo hold from the deck.",
          "Tackle the fire locally with fire hoses."
        ],
        "correctIndex": 1,
        "image": "images/image965.jpg"
      },
      {
        "question": "An inspection in the amidships area of the weather deck of a Panamax container vessel has revealed cracks in the hatch coamings. It is extremely important to urgently inspect the:",
        "options": [
          "Transverse bulkhead immediately aft of the engine room.",
          "Stiffening in the forepeak tank at approximately water line level.",
          "Transverse bulkhead beneath the bridge front.",
          "Longitudinals in the double bottom tanks in the amidships half length of the vessel."
        ],
        "correctIndex": 3,
        "image": "images/image961.jpg"
      },
      {
        "question": "EGC is short for:",
        "options": [
          "Exchange Group Call",
          "Exchange Geographic Call",
          "Emergency general ship call",
          "Enhanced Group Call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "What contributes to wear-down of twistlocks on a container vessel?",
        "options": [
          "Improper greasing procedures.",
          "The continuous action of longitudinal forces.",
          "Continuous use with containers exceeding 40' in length.",
          "Careless handling by stevedores."
        ],
        "correctIndex": 1,
        "image": "images/image964.jpg"
      },
      {
        "question": "One particular group of hazardous goods that is highlighted by the IMDG Code as potentially being the most dangerous for carriage is:",
        "options": [
          "Liquefied gases.",
          "Infectious substances.",
          "Toxic substances.",
          "Organic peroxides."
        ],
        "correctIndex": 3,
        "image": "images/image500.jpg"
      },
      {
        "question": "What should you do with the ashes from your vessels incinerator which had burned garbage containing plastics?",
        "options": [
          "Discharge at sea providing you are more than 25 miles offshore",
          "Discharge at sea providing you are more than 12 miles offshore",
          "Discharge at sea providing you are not in any river or estuary",
          "Discharge to a shore facility only"
        ],
        "correctIndex": 3,
        "image": "images/image237.jpg"
      },
      {
        "question": "If a DSC distress alert is received on board your ship, what is the first action that should be taken?",
        "options": [
          "Determine how close your vessel is to the distressed vessel.",
          "Contact SAR Authorities via nearest coast Radio station",
          "Listen for a distress message on the appropriate radio frequency for five minutes",
          "Immediately answer the distress message on the correct radio frequency"
        ],
        "correctIndex": 2,
        "image": "images/image239.jpg"
      },
      {
        "question": "What type of dynamic forces may cause indent in plating on forecastle deck and main deck in way of pillars inside forecastle?",
        "options": [
          "Forces created by waves on the forecastle",
          "Slamming in way of flat bottom forward of light draught",
          "Impact pressure forces in way of abrupt or flared bow",
          "Pressure forces caused by green water on deck"
        ],
        "correctIndex": 3,
        "image": "images/image247.jpg"
      },
      {
        "question": "What possible reason could there be for the identification mark associated with a Racon not being visible on the radar screen?",
        "options": [
          "The racon may not be transmitting a pulse.",
          "The transmitted radar frequency may not trigger the Racon transmitter.",
          "The radar may be suppressing the mark with application of the Interference Rejection control.",
          "All of the suggested answers."
        ],
        "correctIndex": 3,
        "image": "images/image487.jpg"
      },
      {
        "question": "With help of DSC a ship wants to contact a coast-station to have a question for telephone call. One has to choose from the following DSC-frequencies",
        "options": [
          "TX: 8436.5 kHz RX: 8436.5 kHz",
          "TX: 8415.0 kHz RX: 8415.0 kHz",
          "Tx: 8414.5 kHz RX: 8414.5 kHz",
          "TX: 8415.0 kHz RX: 8436.5 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Where on the hull is the theoretical position of the hydrodynamic pivot point, when going ahead and turning?",
        "options": [
          "Amidships",
          "1/4 of vessel's length from the stern",
          "1/3 of the vessel's length from the bow.",
          "Normally varies dependant on the speed ahead"
        ],
        "correctIndex": 2,
        "image": "images/image503.jpg"
      },
      {
        "question": "Your vessel is approaching a port in restricted visibility and you hear this signal. What kind of vessel is it and what is it doing?",
        "options": [
          "It comes from a vessel at anchor, less than 100 metres in length",
          "It comes from a vessel restricted in her ability to manoeuvre",
          "It comes from a vessel engaged in pilotage duties and it is making way through the water",
          "It comes from a vessel engaged in pilotage duties at anchor, over 100 metres in length"
        ],
        "correctIndex": 2,
        "image": "images/image519.jpg"
      },
      {
        "question": "The most important consideration, in terms of stress, when planning stowage of containers on a container vessel would be:",
        "options": [
          "The vessel's draft and trim.",
          "Weight of the containers only.",
          "Distribution and weight of the containers.",
          "Distribution of the containers only."
        ],
        "correctIndex": 2,
        "image": "images/image969.jpg"
      },
      {
        "question": "It is the Master's responsibility to ensure that:",
        "options": [
          "concerned personnel carry out the on-board traing progamme effectively",
          "safety equipment is not used during the training",
          "All personnel participate in the training at the same time",
          "All information reagrding the onboard training is given to the ship manager"
        ],
        "correctIndex": 0,
        "image": "images/image53.jpg"
      },
      {
        "question": "You receive via the 8 MHz a DSC distress alert. The received DSC message is however distorted. The MMSI as well as the position are illegible. After listening at the 8 MHz telephone distress frequency, nothing is heard. This is because:",
        "options": [
          "Telephone signals in the same frequency band are generally weaker than DSC signals",
          "You should have listened on the 2182 kHz",
          "First an acknowledgement of a coastguard station must be received via the 8MHz",
          "You should have listened on VHF"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "What would indicate the onset of Parametric Rolling?",
        "options": [
          "When twice the wave encounter period approaches the natural roll period of the ship",
          "When wave heights experienced from the bows exceed 6 meters",
          "When wave heights experienced from either quarter exceed 6 meters",
          "When the wave encounter period approaches the natural roll period of the ship"
        ],
        "correctIndex": 3,
        "image": "images/image966.jpg"
      },
      {
        "question": "As per IMDG Code, the main criteria for drawing up classes for safe handling of hazardous substancesis on the basis of:",
        "options": [
          "The type of hazard they present.",
          "Alphabetical order.",
          "Selective laboratory tests commissioned by the Committee.",
          "Chronological order in which they have been assessed."
        ],
        "correctIndex": 0,
        "image": "images/image513.jpg"
      },
      {
        "question": "The type-indication of the radio set is mentioned in:",
        "options": [
          "The survey of equipment",
          "The equipment appendix",
          "The safety certificate",
          "Registry certificate"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "The following information must be given on the SART:",
        "options": [
          "The date of replacement of the hydrostatic release unit",
          "The MMSI number sent",
          "Date of replacement of the batteries",
          "The name of the operator"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is this?",
        "options": [
          "This vessel is restricted in its ability to manoeuvre and is stopped in the water. I am seeing it from astern",
          "This vessel is not under command and is not making way through the water",
          "This is a fishing vessel, not making way through the water, with its nets fast upon an obstruction, seen from astern",
          "This vessel is aground and is seen from directly ahead"
        ],
        "correctIndex": 1,
        "image": "images/image517.jpg"
      },
      {
        "question": "The most appropriate way of dealing with twist-locks suffering from excessive wear and tear is to:",
        "options": [
          "Isolate them from use and dispose them appropriately.",
          "Land them ashore for repair.",
          "Repair them in the ships workshop, and then re-use.",
          "Get them surveyed by Class prior re-use."
        ],
        "correctIndex": 0,
        "image": "images/image962.jpg"
      },
      {
        "question": "What is the master's position if he is asked to load a container that is incorrectly manifested, but which is believed to contain dangerous goods, about which insufficient information is supplied?",
        "options": [
          "If it it approved by the operations department, he can assume all safety checks have been carried out and should load it.",
          "He must load it, but immediately advise his operations department and request full information.",
          "He must load it, but ensure it is placed in a safe loaction, to which there is immediate access in the event of an emergency.",
          "He has the authority to refuse it."
        ],
        "correctIndex": 3,
        "image": "images/image963.jpg"
      },
      {
        "question": "What does heaving result in?",
        "options": [
          "Tipping of containers",
          "Vertical accelerations acting along container corner posts",
          "Longitudinal accelerations acting on hatch pontoons",
          "Shearing of container twistlocks"
        ],
        "correctIndex": 1,
        "image": "images/image966.jpg"
      },
      {
        "question": "Why is it important to have good relationship on-board a vessel?",
        "options": [
          "It leads to better work performance and positive atmosphere among the crew",
          "It encourages crew to extend their contract",
          "Crew comes to know each others problems",
          "It will prevent accidents from happening"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The Code of Safe Practice for Cargo Stowage and Securing was prepared to give guidance for:",
        "options": [
          "Securing of deck cargoes.",
          "Port State Control Officers when carrying out ship inspections.",
          "Preparation and content of the Cargo Securing Manual.",
          "Securing of cargoes in hazardous ocean areas."
        ],
        "correctIndex": 2,
        "image": "images/image802.jpg"
      },
      {
        "question": "If the speed of a vessel through the water is HALVED, how will this effect squat?",
        "options": [
          "There will be very little change to the effects of squat",
          "There will be a significant change in the reduction of underkeel clearance, but the amount varies from ship to ship",
          "The squat effect will also be halved",
          "The squat effect will be reduced to approximately a quarter of its original value"
        ],
        "correctIndex": 3,
        "image": "images/image547.jpg"
      },
      {
        "question": "When a satellite receives a \"distress alert\" from a Cospas-Sarsat EPIRB, the relay of the \"distress alert\" can be delayed because the satellite cannot immediately contact a:",
        "options": [
          "LUT before the satellite is actually seen by this ground station",
          "LES before the satellite is actually seen by this ground station",
          "Coast station",
          "NCS before the satellite is actually seen by this ground station"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "What colour flare is used to signal a safe landing place for small boats ?",
        "options": [
          "Blue",
          "Yellow",
          "White",
          "Green"
        ],
        "correctIndex": 3,
        "image": "images/image121.jpg"
      },
      {
        "question": "By the term \"Stand by\" the operator of a coast-station means that one should:",
        "options": [
          "Give the position of the ship",
          "Wait on this channel for one hour",
          "Wait until the coast-station calls again",
          "Switch back to the calling channel"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "For how long time should a SART transponder be able to operate in the active mode ?",
        "options": [
          "24 hours",
          "6 hours",
          "96 hours",
          "8 hours"
        ],
        "correctIndex": 3,
        "image": "images/image3.jpg"
      },
      {
        "question": "The International Maritime Bureau Piracy Reporting Centre attributes the increased numbers of hijackings to:",
        "options": [
          "More crew involvement.",
          "Easy access to military weapons.",
          "The greater involvement in piracy of well-organized and armed crime networks.",
          "Higher crime rates around the world."
        ],
        "correctIndex": 2,
        "image": "images/image72.jpg"
      },
      {
        "question": "A vessel has lost several containers overboard during a voyage. Upon arrival into port, she is being inspected by the attending surveyors. The most important item to be checked during this inspection would be:",
        "options": [
          "The vessel's Safety Construction certificate.",
          "The on-board cargo lashing inventory.",
          "The vessel's Class certificate.",
          "Certificates of approval related to lashing equipment used to secure those containers."
        ],
        "correctIndex": 3,
        "image": "images/image961.jpg"
      },
      {
        "question": "Best location to stow containers loaded with Calcium Hypochlorite would be:",
        "options": [
          "On deck, away from sources of heat.",
          "Abaft the accommodation.",
          "Away from reefer units, below deck.",
          "Under deck, away from sources of heat."
        ],
        "correctIndex": 0,
        "image": "images/image810.jpg"
      },
      {
        "question": "Bulk liquid cargoes carried in flexi-tank containers are considered dangerous:",
        "options": [
          "When declared as a non-hazardous chemical.",
          "When the shipper instructs that the container be carried on-deck only.",
          "When the associated material safety data sheet shows a constituent(s) listed in the IMDG Code.",
          "When declared as bulk liquid foodstuff."
        ],
        "correctIndex": 2,
        "image": "images/image810.jpg"
      },
      {
        "question": "Which class of emission is used for VHF DSC transmissions ?",
        "options": [
          "G2B",
          "J3E",
          "J2B",
          "G3E"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "You are a Senior Officer of the Watch on vessel \"A\" and are passing through the Straits of Gibraltar. The vessel's speed is 18 knots and your vessel is overtaking several other vessels, when the visibility reduces down to about 2 nm. What aspects would you consider when establishing a \"safe speed\" for your vessel?",
        "options": [
          "Safe speed should be where the vessel can come to a stop within the visible range",
          "Deciding safe speed consider: 2 miles visibility; traffic density; manoeuvrability of vessel; effectiveness of navigational equipment (ARPA etc); state of sea and currents and navigational hazards.",
          "Adjust my track to follow Route 1 or 2 illustrated and reduce speed down to half speed, approximately 8 knots",
          "A safe speed is where a vessel can take proper and effective action to avoid collision and be stopped within an appropriate distance"
        ],
        "correctIndex": 1,
        "image": "images/image526.jpg"
      },
      {
        "question": "What roll amplitude is generally used by classification societies in calculating rolling forces?",
        "options": [
          "18 - 24 degrees",
          "30 - 36 degrees",
          "37 - 42 degrees",
          "24 - 30 degrees"
        ],
        "correctIndex": 3,
        "image": "images/image966.jpg"
      },
      {
        "question": "What are the three volumes of the IAMSAR Manual?",
        "options": [
          "I Organization II Communications III Rescue Procedures",
          "I Organization and Management II Mission Co-ordination III Mobile Facilities",
          "I Planning and Preparation II Rescue Control  III Reference",
          "A Command and Control  B Communications  C Rescue Procedures"
        ],
        "correctIndex": 1,
        "image": "images/image576.jpg"
      },
      {
        "question": "Which of the following is a Accounting Authority Identification Code?",
        "options": [
          "FR01",
          "2187.5",
          "F1B",
          "227990850"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which ships does the ISM code apply to",
        "options": [
          "All passenger ships, all cargo ships of 500GRT or above",
          "All craft above 300GRT",
          "Only passenger vessels",
          "Only tankers and Ro-ros"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "How many total frequencies are available for DSC distress alerting?",
        "options": [
          "Seven (7).",
          "Five (5).",
          "Two (2).",
          "One (1)."
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to the International Labour Organisation, how often should lifting appliances be re-tested?",
        "options": [
          "5 years.",
          "Annually.",
          "2 1/2 years.",
          "2 years."
        ],
        "correctIndex": 0,
        "image": "images/image507.jpg"
      },
      {
        "question": "Where do you find minimum drill requirements?",
        "options": [
          "In owner's instruction",
          "In the SOLAS convention and its annex",
          "In classification society rules",
          "In manager's instructions"
        ],
        "correctIndex": 1,
        "image": "images/image80.jpg"
      },
      {
        "question": "What type of bomb search should you conduct to avoid panic when the credibility of the threat is in doubt and you don't want to disrupt ship business?",
        "options": [
          "Known hiding spot search",
          "Nominated officers search",
          "Crew search",
          "External search team"
        ],
        "correctIndex": 1,
        "image": "images/image59.jpg"
      },
      {
        "question": "What actions should be taken by the Officer of the Watch if the ship's steering system totally fails?",
        "options": [
          "Display the NUC signal and stop the engine(s)",
          "Call the Master and advise them of the situation",
          "All of the suggested answers",
          "Request the engine room to check the steering system"
        ],
        "correctIndex": 2,
        "image": "images/image356.jpg"
      },
      {
        "question": "During an audit, adherence to the company cargo handling procedures can best be demonstrated:",
        "options": [
          "By being able to provide comprehensive and verifiable documentary records of cargo operations.",
          "By providing a summary of incident and lost time figures for the auditor that reflects a successful and trouble-free system on board.",
          "By providing a summary of out-turn figures for the auditor.",
          "By requesting that an audit takes place during cargo operations."
        ],
        "correctIndex": 0,
        "image": "images/image497.jpg"
      },
      {
        "question": "What is the probable cause of an error in the position shown on a GPS receiver set into '2D' fixing?",
        "options": [
          "Incorrect height of the antenna set into the receiver",
          "the limit set on the VDOP figure is too small",
          "The limit set on the HDOP figure is too great",
          "The receiver has defaulted to '3D' fixing and there is no overhead satellite"
        ],
        "correctIndex": 0,
        "image": "images/image487.jpg"
      },
      {
        "question": "If for some reason a vessel does not comply with a Classification Society's requirements, what can a surveyor issue to the vessel enabling it to sail to the next port or for a period of time?",
        "options": [
          "A Notification of Detention.",
          "A Condition of Class.",
          "A Notification of Deficiency.",
          "A revised Class Notation."
        ],
        "correctIndex": 1,
        "image": "images/image543.jpg"
      },
      {
        "question": "When sending an OBS (weather report) with Inmarsat one should use Service Code '41'. With this address the weather report will always be transmitted to:",
        "options": [
          "The meteorological office of the ship's flag state",
          "KNMI in Holland",
          "MET office Washington, this office will take care of further dispatch of the weather reports",
          "The meteorological station connected with the CES used"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "As per SOLAS regulations, the general emergency alarm system must be tested:",
        "options": [
          "Every month",
          "Every 2 weeks",
          "Every week",
          "Every 3 weeks"
        ],
        "correctIndex": 2,
        "image": "images/image174.jpg"
      },
      {
        "question": "How frequently should reports from protection and environmental work be sent to shore based management?",
        "options": [
          "Not mandatory to send reports.",
          "Biannually.",
          "Annually.",
          "Every three years."
        ],
        "correctIndex": 2,
        "image": "images/image157.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of HF DSC",
          "The use of SART transponders",
          "The use of portable VHF",
          "The use of VHF DSC"
        ],
        "correctIndex": 3,
        "image": "images/image10.jpg"
      },
      {
        "question": "When a pilot is in attendance for navigation in a compulsory pilotage area, should the Master discuss the vessel's passage plan with them?",
        "options": [
          "Yes - as the pilot will not bring their own passage plan",
          "No - often there is not enough time and the pilot will be experienced",
          "No - because an authorised pilot does not need to be shown a passage plan",
          "Yes - this is very much part of the Master/Pilot information exchange"
        ],
        "correctIndex": 3,
        "image": "images/image508.jpg"
      },
      {
        "question": "In a distress-situation a MF/HF-DSC transmission is used in the 8MHz frequency. In this case always:",
        "options": [
          "Indicate on what frequency communication will be continued",
          "Put in the MMSI number of the coastguard on the DSC",
          "Ask the RCC for the frequency",
          "Turn on the right frequency"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision and has developed a list. After sounding the general alarm and informing others of the situation, what other immediate steps should be taken?",
        "options": [
          "All of the options",
          "Prepare for abandoning ship keeping all parties informed of the situation",
          "Start discharging water using all available means. Monitor water ingress and any increase of draft or list to determine if the situation has stabilised",
          "Assess the compartments flooded to determine the remaining stability"
        ],
        "correctIndex": 0,
        "image": "images/image34.jpg"
      },
      {
        "question": "The frequency 121,5 MHz is used for :",
        "options": [
          "INMARSAT E EPIRBS",
          "SART transponder",
          "COSPAS-SARSAT EPIRBS",
          "DSS VHF calls"
        ],
        "correctIndex": 2,
        "image": "images/image22.jpg"
      },
      {
        "question": "What would happen if, when a ship is under-going a Port State Inspection, certificates were invalid or missing",
        "options": [
          "The ship would be allowed to sail to the next port and rectification would take place then",
          "The ship would be detained indefinitely",
          "Rectification would be required before sailing",
          "The deficiencies would be recorded in the ship's register and the ship allowed to sail"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "During test and/or maintenance work of the CO2 system affecting the release system, precautions to ensure that the gas is not released into the engine room due to a mistake are to be ensured. What precautions should be taken?",
        "options": [
          "Check the main valve for a potential leakage.",
          "The main supply line to be blanked off prior to the work.",
          "No special precautions necessary.",
          "Arrange a watchman in the CO2 central."
        ],
        "correctIndex": 1,
        "image": "images/image169.jpg"
      },
      {
        "question": "What is the best way to avoid pollution from small oil-spills aboard a ship?",
        "options": [
          "Have dispersing chemicals ready for use in case of oil-spill",
          "Contain any oil-spill onboard the ship",
          "Have sawdust ready for use",
          "Rig an oil boom around the ship"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "Under most circumstances, how will communication be carried out between a ship and a SAR helicopter?",
        "options": [
          "On 410 KHz",
          "On VHF Ch 16",
          "On 121.5 MHz",
          "On VHF Ch 70"
        ],
        "correctIndex": 1,
        "image": "images/image501.jpg"
      },
      {
        "question": "With regards to carriage of Calcium Hypochlorite in containers, as per IMDG Code it is not allowed to:",
        "options": [
          "Carry the cargo transport units under deck.",
          "Ship in open top half containers on deck.",
          "Pack and ship the cargo in bags.",
          "Ship in Intermediate Bulk Containers (IBCs)."
        ],
        "correctIndex": 2,
        "image": "images/image810.jpg"
      },
      {
        "question": "In open water, you see a collision between two other ships. What immediate action should you take?",
        "options": [
          "Send out a distress relay message",
          "Slow down and standby to see if any assistance is required",
          "Nothing, proceed on passage unless they are in distress",
          "Contact one or both vessels involved in the incident and offer assistance"
        ],
        "correctIndex": 2,
        "image": "images/image93.jpg"
      },
      {
        "question": "Stack allowable weights on a container vessel should not be exceeded because this can cause:",
        "options": [
          "Torsional effects on the hull.",
          "The lashings to be overloaded.",
          "Failure of the corner posts of the containers stowed at the bottom of the stack.",
          "The GM tov become excessive leading to high roll accelerations."
        ],
        "correctIndex": 2,
        "image": "images/image960.jpg"
      },
      {
        "question": "Referring to the SOLAS convention, how often should a crew member on a cargo ship participate in one abandon ship drill and one fire drill?",
        "options": [
          "Every second week",
          "Monthly",
          "This is only required when he joins the ship",
          "Weekly"
        ],
        "correctIndex": 1,
        "image": "images/image47.jpg"
      },
      {
        "question": "The Muster List shall show the duties assigned to members of the crew. Which of the following duties shall be included according to present regulations?",
        "options": [
          "Preparation of immersion suits for passengers.",
          "Manning of fire parties assigned to deal with fires.",
          "Operation of the vessel's propulsion system.",
          "Special duties assigned with respect to the use of pyrotechnics"
        ],
        "correctIndex": 1,
        "image": "images/image85.jpg"
      },
      {
        "question": "Exposure to moderate concentrations of ammonia may cause:",
        "options": [
          "Instant unconsciousness.",
          "Instant death.",
          "Loss of memory.",
          "Choking and possible loss of eyesight."
        ],
        "correctIndex": 3,
        "image": "images/image810.jpg"
      },
      {
        "question": "What does ISM stand for?",
        "options": [
          "International Safe Manning Certification",
          "The International Management Code for the Safe Operation of Ships and for Pollution Prevention",
          "International Ship Measurement and Pollution Control",
          "Internal Ship Safety Management"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "\"Door to door\" shipment is covered under:",
        "options": [
          "A Destination Bill of Lading.",
          "A Multi-Phase Bill of Lading.",
          "A Through Bill of Lading.",
          "An Ocean Bill of Lading."
        ],
        "correctIndex": 2,
        "image": "images/image518.jpg"
      },
      {
        "question": "Buoyant smoke signals shall be so designed as to burn or emit smoke:",
        "options": [
          "Only when not in the water",
          "Continuously after having been immersed for a period of 10 seconds under 100 mm of water when underwater",
          "When under water",
          "Continuously after having been immersed for a period of 1 minute under 1m of water"
        ],
        "correctIndex": 1,
        "image": "images/image248.jpg"
      },
      {
        "question": "The training manual shall contain instructions and information in easily understood terms and illustrated wherever possible. Which of the following objects have to be explained in detail in the manual according to present regulations?",
        "options": [
          "Donning of lifejackets and immersion suits",
          "Handling of stowaways",
          "Starting of Main Engine",
          "Donning of fire protection clothing"
        ],
        "correctIndex": 0,
        "image": "images/image83.jpg"
      },
      {
        "question": "Which option best completes the following statement? 'The version of the IHO presentation library on the ECDIS is important because...",
        "options": [
          "...if it is not the latest version, the ECDIS will not be compliant",
          "...it influences the colours on the display",
          "...it is where the files for maintenance of the system software are stored",
          "...it allows ECDIS to decide on the scale setting of the chart"
        ],
        "correctIndex": 0,
        "image": "images/image1000.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "the use of MF DSC",
          "the use of SART transponders",
          "the use of HF DSC",
          "the use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "A vessel has been in involved in a collision. Which procedure should happen immediately?",
        "options": [
          "Communicate with the other ship",
          "Determine any injuries of persons on board",
          "There is assessment of the damage stability",
          "Determine is there is any evidence of pollution"
        ],
        "correctIndex": 2,
        "image": "images/image578.jpg"
      },
      {
        "question": "Why shall a duly qualified officer supervise any potential polluting operation?",
        "options": [
          "To avoid pollution.",
          "To inform the authorities.",
          "To restrict pollution.",
          "To relieve the master."
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "Who should inspect the rigging of a pilot ladder and accompany a pilot on deck at embarkation/disembarkation?",
        "options": [
          "The Bosun",
          "An experienced AB",
          "A responsible Officer",
          "The Sen.Off.Deck only"
        ],
        "correctIndex": 2,
        "image": "images/image539.jpg"
      },
      {
        "question": "When a message is sent by the Inmarsat—C installation to an Internet e-mail address, the land charge is:",
        "options": [
          "Dependent on the type of terminal used",
          "Dependent on the destination",
          "Dependent on the 'chargeband'",
          "Independent of the destination"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "During a loaded winter passage across the North Atlantic, the master of a container vessel would be most concerned with:",
        "options": [
          "Hull form of the vessel.",
          "Metacentric height of the vessel.",
          "Transverse distribution of container stack weights.",
          "Current wave conditions."
        ],
        "correctIndex": 1,
        "image": "images/image964.jpg"
      },
      {
        "question": "For which ships is the SOLAS convention applicable?",
        "options": [
          "For tankers and other vessels carrying persistent oil as cargo.",
          "For passenger vessels only.",
          "For all vessels.",
          "For all vessels except passenger vessels."
        ],
        "correctIndex": 2,
        "image": "images/image58.jpg"
      },
      {
        "question": "A received DSC 'distress alert' contains the following information: \"UNDESIGNATED DISTRESS\" Of this distress case:",
        "options": [
          "Time is unknown",
          "Number of person at risk is unknown",
          "The position is unknown",
          "The nature of distress is unknown"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "One of the sailors needs urgent medical assistance. The VHF-call starts with:",
        "options": [
          "SOS (3x)",
          "Urgent (3x)",
          "MAYDAY (3x)",
          "PAN PAN (3x)"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "Your vessel is in an area of restricted visibility. You hear this sound signal. What does it mean?",
        "options": [
          "That there is a vessel engaged in underwater operations in the vicinity with divers down",
          "That there is a vessel aground in the vicinity",
          "That there is a vessel in distress nearby",
          "That there is a vessel at anchor in the vicinity"
        ],
        "correctIndex": 2,
        "image": "images/image489.jpg"
      },
      {
        "question": "A vessel is equipped for all sea areas. In the middle of the Indian Ocean the EGC-receiver appears out of order. Is it still possible to receive MSI-messages?",
        "options": [
          "NO",
          "Yes, with the MF/HF-radio telex",
          "Yes with VHF DSC",
          "Yes, with the MF/HF-DSC"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The most important function of a buttress fitting on a container vessel is:",
        "options": [
          "To ensure an even distribution of weight throughout the stack.",
          "To transfer forces from the container stow to the ships structure.",
          "To avoid excess load placed on the tank top.",
          "To maintain a uniform level stow across the tier of containers."
        ],
        "correctIndex": 1,
        "image": "images/image967.jpg"
      },
      {
        "question": "Testing a SART is permitted:",
        "options": [
          "Only at sea, outside territorial waters",
          "Only in the workshop",
          "Only in a port or harbour",
          "At sea, outside territorial waters, and in port or harbour"
        ],
        "correctIndex": 3,
        "image": "images/image5.jpg"
      },
      {
        "question": "How are ship's stability characteristics affected by Parametric Rolling?",
        "options": [
          "By the development of a negative GM",
          "By an increase in the angle of pitch",
          "By the virtual loss of GM",
          "By the constant change of underwater hull geometry as waves travel past the ship"
        ],
        "correctIndex": 3,
        "image": "images/image966.jpg"
      },
      {
        "question": "Containerised scrap metal fire is best extinguished by:",
        "options": [
          "Dousing with seawater.",
          "Smothering.",
          "Cooling with freshwater.",
          "Allowing cargo to smoulder."
        ],
        "correctIndex": 1,
        "image": "images/image967.jpg"
      },
      {
        "question": "Your vessel is in restricted visibility and you hear this signal. What type of vessel does it come from and what additional information does the signal provide?",
        "options": [
          "A vessel at anchor, less than 100 metres in length. She is sounding the additional signal top give warning of her position",
          "A vessel aground, more than 100 metres in length. The additional signal indicates which side the clear water lies on",
          "A vessel at anchor, more than 100 metres in length. The additional signal indicates that her cable extends at least 25 metres from her bow",
          "A vessel at anchor, more than 100 metres in length. She is sounding the additional signal to give warning of her position"
        ],
        "correctIndex": 3,
        "image": "images/image519.jpg"
      },
      {
        "question": "DG placards shall be located on a freight container:",
        "options": [
          "One on each side (only).",
          "One on each end and one on each side.",
          "One of the back end and one on any of the sides (only).",
          "One on each end (only)."
        ],
        "correctIndex": 1,
        "image": "images/image538.jpg"
      },
      {
        "question": "Small oil spills on deck can be kept from going overboard by doing what?",
        "options": [
          "Plugging the sounding pipes",
          "Driving wooden plugs into the vents",
          "Plugging the scuppers",
          "Closing the lids on the vents"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "*Which of the following detailed explanations should be mentioned in the Training Manual ?",
        "options": [
          "How to use escape routes and other escape methods",
          "How to use surface to air visual signals to be used by survivors",
          "How to recover survival craft and rescue boats including stowage and securing",
          "How to use navigational equipment for survival crafts"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "If a tank container of liquid ammonia is engulfed in fire, it is recommended:",
        "options": [
          "To restrict ventilation.",
          "Not to use water to cool the container.",
          "To allow ventilation.",
          "Not to use dry chemical to extinguish the fire."
        ],
        "correctIndex": 2,
        "image": "images/image810.jpg"
      },
      {
        "question": "How often under SOLAS, is the performance test of a Voyage Data Recorder required by an approved testing or servicing facility?",
        "options": [
          "Annually.",
          "When the battery is replaced.",
          "When the data media is downloaded.",
          "At the Intermediate Safety Equipment Survey."
        ],
        "correctIndex": 0,
        "image": "images/image529.jpg"
      },
      {
        "question": "You wish to send an e-mail using the Inmarsat-C installation. The message has to be composed in:",
        "options": [
          "ASCII",
          "The 400 protocol",
          "X25",
          "National language of the LES"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "At what calendar interval is a class renewal/Special Survey required?",
        "options": [
          "Annually.",
          "5 years.",
          "Every 2 1/2 years.",
          "At 20 years and every five years thereafter."
        ],
        "correctIndex": 1,
        "image": "images/image541.jpg"
      },
      {
        "question": "Which option best describes how an operator establishes what an isolated danger symbol represents, when seen on the chart display of an ECDIS?",
        "options": [
          "Check the surrounding area for any clues on the sea floor",
          "Interrogate it and ask for a pick or information report",
          "Check with a senior officer",
          "Check the chart symbols catalogue to ascertain the meaning"
        ],
        "correctIndex": 1,
        "image": "images/image1000.jpg"
      },
      {
        "question": "With respect to the ISM, what training in addition to lifeboat and fire drills must be carried out?",
        "options": [
          "Familiarization, and other drills identified as necessary by the ship",
          "Mooring operations",
          "The boat drill and fire drill should be adequate to meet your needs",
          "Bridge Team Management"
        ],
        "correctIndex": 0,
        "image": "images/image52.jpg"
      },
      {
        "question": "The dangers associated with carriage of empty tank containers is that:",
        "options": [
          "They may contain flammable cargo residue.",
          "They may not be declared as being empty.",
          "They could explode if their vents are closed.",
          "They are prone to collapse."
        ],
        "correctIndex": 0,
        "image": "images/image964.jpg"
      },
      {
        "question": "Who is the leader of the lifeboat drill (abandon ship drill)?",
        "options": [
          "The first member of the crew arriving at the survival craft.",
          "Sen.Off.Engine.",
          "The appointed lifeboat commander.",
          "Sen.Off.Deck."
        ],
        "correctIndex": 2,
        "image": "images/image120.jpg"
      },
      {
        "question": "A proper working of the 406 MHz Cospas-Sarsat EPIRB can be tested with:",
        "options": [
          "Requesting RCC for the test",
          "Regulation monthly test transmissions from RCC 's",
          "The testing function of the device",
          "Test transmissions from Cospas-Sarsat satellites"
        ],
        "correctIndex": 2,
        "image": "images/image9.jpg"
      },
      {
        "question": "Which one of the listed items has to be included in a distress message?",
        "options": [
          "Identification of the ship.",
          "Last port of call.",
          "Weather in immediate vincinity.",
          "Destination."
        ],
        "correctIndex": 0,
        "image": "images/image7.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 101-200",
    "questions": [
      {
        "question": "A container full of scrap metal is being loaded, and you sight water dripping from it. You should:",
        "options": [
          "Load the container and note protest.",
          "Ensure that the container is stowed below deck.",
          "Reject the container.",
          "Ensure that the container is stowed on deck."
        ],
        "correctIndex": 2,
        "image": "images/image971.jpg"
      },
      {
        "question": "To maintain good relationship among the crew on board a vessel, one must be:",
        "options": [
          "Understanding, Co-operative, and have respect from both sides",
          "Give authority to others",
          "Polite and diplomatic while talking to crew members",
          "Strict and authoritative while giving orders"
        ],
        "correctIndex": 0,
        "image": "images/image239.jpg"
      },
      {
        "question": "A tug is connected to the bow of a vessel. Will the force exerted by it be the same at any ahead speed?",
        "options": [
          "No, when the ahead speed of the ship increases the force exerted by the tug will also increase",
          "No, on the bow the tug uses power to run with the vessel, which reduces the available power on the towline",
          "Yes, the force would normally be expected to be the same at any speed of the ship",
          "Yes, because when moving ahead a tug can use indirect towing methods"
        ],
        "correctIndex": 1,
        "image": "images/image546.jpg"
      },
      {
        "question": "For guidance on lashing arrangement of containers on-board the vessel, the most important document to refer is:",
        "options": [
          "The company's ISM handbook.",
          "The Code for the Safe Practice for Cargo Stowage and Securing.",
          "The Cargo Securing Manual.",
          "The Stability Manual."
        ],
        "correctIndex": 2,
        "image": "images/image966.jpg"
      },
      {
        "question": "The batteries must be placed in a well ventilated place, so that:",
        "options": [
          "The detonating gas can be discharged",
          "The production of detonating gas can be prevented",
          "The person can work in the compartment",
          "There is sufficient oxygen available for optimum working of the batteries"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following requirements regarding life-buoys correspond to present regulations? (SOLAS III/7.1)",
        "options": [
          "Not less than half the total number of lifebuoys shall be provided with self-ignighting lights",
          "At least one lifebuoy with self-activating smoke shall be placed within the vicinity of the stern",
          "All the life-buoys shall be placed in holders with quick-release arrangement",
          "At least four life-buoys on each side of the ship shall be fitted with buoyant lifelines"
        ],
        "correctIndex": 0,
        "image": "images/image150.jpg"
      },
      {
        "question": "*As far as human factor is concerned, which of the following actions should be considered as an efficient one?",
        "options": [
          "To establish inner rules to perform work of a special risk",
          "To equip them with better communication systems",
          "All the listed answers",
          "To train the fire brigade"
        ],
        "correctIndex": 2,
        "image": "images/image55.jpg"
      },
      {
        "question": "Who is responsible for maintaining the vessel's structural strength?",
        "options": [
          "The master.",
          "The flag state administration.",
          "The classification society.",
          "The management company."
        ],
        "correctIndex": 0,
        "image": "images/image199.jpg"
      },
      {
        "question": "The correct weight of a wrongly declared container may be best indicated by:",
        "options": [
          "The tare weight stamped on the container.",
          "Strain gauges fitted to the shore gantry cranes.",
          "The container CSC plate.",
          "The ship's loading computer."
        ],
        "correctIndex": 1,
        "image": "images/image965.jpg"
      },
      {
        "question": "A member of the bridge team has just seen a person fall overboard. Which of the following manoeuvres is the most appropriate to assist with a rescue?",
        "options": [
          "Evinrude Turn",
          "Williamson turn",
          "Direct Turn",
          "Scharnow Turn"
        ],
        "correctIndex": 2,
        "image": "images/image553.jpg"
      },
      {
        "question": "Are there any exceptions from OPA-90",
        "options": [
          "No exceptions",
          "Yes, transit passage through US waters to a non US port",
          "Yes, close to any US naval base",
          "Yes, if the vessel calls a US port for only a short stop"
        ],
        "correctIndex": 1,
        "image": "images/image40.jpg"
      },
      {
        "question": "The most dangerous consequence of the corrosion and wear down of container stools on weather deck/hatch tops of a container vessel would be:",
        "options": [
          "Collapse of the deck stool, leading to lashings becoming slack.",
          "Twist locks not being able to be removed after discharge.",
          "Uneven loading of the container on the deck.",
          "Twist locks not being able to be fully closed."
        ],
        "correctIndex": 0,
        "image": "images/image960.jpg"
      },
      {
        "question": "The word RADIO is spelled conform the international phonetic alphabet:",
        "options": [
          "Romeo, Alpha, Delta, India, October",
          "Radio, Alfa, Delta, India, Oscar",
          "Romeo, Atlanta, Delta, India, October",
          "Romeo, Alfa, Delta, India, Oscar"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which two persons check the Declaration of Security? Select the correct pairing.",
        "options": [
          "The Company Security Officer and the Port Facility Security Officer",
          "The Local Coast Guard Officer and the Port Facility Security Officer",
          "The Company Security Officer and the Ship Security Officer",
          "The Port Facility Security Officer and the Ship Security Officer"
        ],
        "correctIndex": 3,
        "image": "images/image87.jpg"
      },
      {
        "question": "A rocket parachute flare reaches an altitude of",
        "options": [
          "not less than 300m",
          "not less than 40m",
          "not less than 450m",
          "not less than 180m"
        ],
        "correctIndex": 0,
        "image": "images/image236.jpg"
      },
      {
        "question": "Which type of profiling is used to obtain information about rival companies and their employees?",
        "options": [
          "General",
          "Commercial",
          "Industrial",
          "Criminal"
        ],
        "correctIndex": 2,
        "image": "images/image158.jpg"
      },
      {
        "question": "What allowances should be applied to an echo sounder reading, to compare the depth of water with the depth shown on a chart?",
        "options": [
          "Position of transducer below the water surface and the height of tide",
          "The distance between the pulse Transmitter and Receiver, if different",
          "A correction that should be applied to the charted depth value shown on the chart",
          "Shallow water effects causing ground interaction"
        ],
        "correctIndex": 0,
        "image": "images/image487.jpg"
      },
      {
        "question": "What is the main theme of modern safety practice?",
        "options": [
          "Consult the chief officer before commencing work",
          "Making use of Risk Assessment as a means to improving safety",
          "Use the same practice that has been in place for some time",
          "Health & Safety at Work Act"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding life-saving appliances corresponds to present regulations?",
        "options": [
          "All prescribed life-saving appliances shall be of such a colour that they are in contrast to the surrounding colour",
          "All prescribed life-saving appliances shall have marking in red colour",
          "All prescribed life-saving appliances shall be fitted with the manufacturers name and Logo",
          "All prescribed life-saving appliances shall be made of non-combustible or fire retardant material"
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "The most appropriate method for adjusting the trim on a container vessel would be:",
        "options": [
          "By internal shift of fuel oil.",
          "By internal shift of ballast.",
          "By internal shift of cargo containers.",
          "By jettisoning of containers."
        ],
        "correctIndex": 1,
        "image": "images/image961.jpg"
      },
      {
        "question": "Silencing by a station, not in charge of the distress-traffic, is done as follows:",
        "options": [
          "\"SEELONCE MAYDAY\" followed by the call-sign of the ship in distress",
          "\"SILENCE DISTRESS\" followed by call sign of the ship in distress",
          "\"SEELONCE MAYDAY\" followed by the silencing station's call-sign",
          "\"SEELONCE DISTRESS\" followed by the silencing station's call-sign"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "On a ship involved in a collision, what should happen immediately after the accident has taken place?",
        "options": [
          "The other ship should be contacted",
          "The bridge team should devise a plan of action",
          "The master should be called",
          "Crew should follow an emergency procedure"
        ],
        "correctIndex": 3,
        "image": "images/image577.jpg"
      },
      {
        "question": "What is the minimum number of channels required for the portable two-way VHF's for survival craft?",
        "options": [
          "Channels 6, 12 & 16",
          "Channel 16 only",
          "Channels 16 & 12",
          "Channels 6, 13 & 16"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "Which of the following items must be included in each fire drill?",
        "options": [
          "All the items mentioned",
          "Reporting to stations and preparing for the duties described in the muster list",
          "Checking fireman's outfits and other personal rescue equipment",
          "Starting a fire pump using at least two required jets of water to show that the system is in proper working order"
        ],
        "correctIndex": 0,
        "image": "images/image249.jpg"
      },
      {
        "question": "How often must the Emergency Steering Gear be tested, and how is this information recorded in the OLB?",
        "options": [
          "Monthly with signature of person carrying out test",
          "Fortnightly, with signature of Chief Engineer and witness",
          "Every three months. Details of test with signatures of Master and witness",
          "Monthly, with signature of Chief Engineer and witness."
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "Your vessel has been involved in a minor collision. What will your actions be following the collision?",
        "options": [
          "All of the answers are correct",
          "Make sure your vessel + crew are safe and then offer your assistance to the other vessel",
          "Call the Company DPO and the local state if close to the coast",
          "Continue the voyage to your destination monitoring for water ingress"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The Declaration of Security:",
        "options": [
          "States the reporting procedures to government contact points.",
          "Details a ship's security measures.",
          "Identifies the security responsibilities of shipboard personnel.",
          "Addresses the security requirements shared between ships or between a port facility and a ship."
        ],
        "correctIndex": 3,
        "image": "images/image87.jpg"
      },
      {
        "question": "What is the purpose of the radiotelephony two tone alarm?",
        "options": [
          "Attract the attention of the person on watch.",
          "Activate bridge watchkeeping receivers and attract the attention of the person on watch.",
          "Activate bridge watchkeeping receivers.",
          "Alert COSPAS/SARSAT satellites"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "For a ships loading computer to be safely used for loading planning and stress calculations, it must be approved by:",
        "options": [
          "Hull and Machinery Insurers of the vessel.",
          "The Port State where vessel is currently loading.",
          "IT Department of Ship owner.",
          "A Classification Society."
        ],
        "correctIndex": 3,
        "image": "images/image968.jpg"
      },
      {
        "question": "The recommended connection between antenna and VHF is:",
        "options": [
          "Three vein cable",
          "Electric cable",
          "Coaxial cable",
          "Band cable"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What does the abbreviation SOLAS mean?",
        "options": [
          "International Agreement for Security of Load and Ships",
          "International Rules for Safe Ocean Lines and Sailingroutes",
          "International Convention for the Safety of Lives at Sea",
          "International Conference for Security of Loads aboard Ships"
        ],
        "correctIndex": 2,
        "image": "images/image58.jpg"
      },
      {
        "question": "According to rule 12 of the International Regulations for Preventing Collisions, in the situation illustrated, which sailing vessel (A or B) must keep out of the way of the other?",
        "options": [
          "Sailing vessel A must keep out of the way of sailing vessel B.",
          "Both sailing vessels are required to take avoiding action.",
          "Sailing vessel B must keep out of the way of sailing vessel A.",
          "The upwind sailing vessel must keep out of the way of the downwind sailing vessel."
        ],
        "correctIndex": 0,
        "image": "images/image488.jpg"
      },
      {
        "question": "What do you do after receiving a VHF DSC DISTRESS call ?",
        "options": [
          "You set watch on channel 13",
          "You send immediately a DSC DISTRESS ACKNOWLEDGEMENT call",
          "You send immediatly a DSC DISTRESS RELAY call",
          "You set watch on VHF channel 16"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "In Which publication will you find the working frequencies of coast stations?",
        "options": [
          "The ITU List of Call signs and Numerical Identities of Stations used by the maritime mobile and maritime mobile-satellite services",
          "The ITU List of coast stations",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Ship Stations"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "During the survey of Long Range Identification and Tracking (LRIT) equipment, which document must be available to the surveyor to demonstrate compliance with SOLAS?",
        "options": [
          "A report giving the result of the Performance Test, issued by the manufacturer in compliance with the Flag State Authority requirements.",
          "A Statement of Installation and and Testing by the Application Service Provider in compliance with SOLAS V/26-4.",
          "The Certificate of Compliance with SOLAS V/19-1, bearing the serial number of the equipment installation.",
          "A report giving the result of the Conformance Test issued by an Application Service Provider on behalf of an Administration"
        ],
        "correctIndex": 3,
        "image": "images/image512.jpg"
      },
      {
        "question": "Which statement best describes how land moves, if at all, on an ECDIS set in North-up, relative-motion mode?",
        "options": [
          "Land on the chart screen moves relative to the ship symbol",
          "This is a feature only seen on radar displays",
          "The land is always in the middle of the screen",
          "Land is stopped with the vessel symbol moving across the sea floor"
        ],
        "correctIndex": 0
      },
      {
        "question": "By a 'geographical area call' in the DSC system is meant:",
        "options": [
          "A DSC- message for all ships in a particular ocean region",
          "A DSC- message for all vessels within a certain area marked by a reference position, given in the DSC message and the degrees are given in southerly and easterly direction",
          "A DSC- message for all ships heading towards a certain geographical area",
          "A DSC- message for all vessels within a certain area from a position in the DSC message, and the degrees are given in northerly and westerly direction"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The muster list must be prepared:",
        "options": [
          "At any moment before the ship proceeds to sea",
          "at least 2 hours after the ship has proceeded to sea",
          "at least 1 hour before the ship proceeds to sea",
          "at least 2 hours before the ship proceeds to sea"
        ],
        "correctIndex": 0,
        "image": "images/image73.jpg"
      },
      {
        "question": "Where is the Safety Certificates for ships to be kept?",
        "options": [
          "In the Captain's safe",
          "In the Captain's office",
          "Posted up in a prominent place onboard the ship",
          "In the Owner's office"
        ],
        "correctIndex": 1,
        "image": "images/image114.jpg"
      },
      {
        "question": "As per the IMDG Code, 'Marine Pollutant' is defined as:\"",
        "options": [
          "A substance which is subject to the provisions of Annex III of MARPOL.",
          "A substance which, because of its tendency to degrade in seafood, or because of its hazard potential to the aquatic environment is subject to the provisions of Annex I of MARPOL, as amended, and carried by sea accordingly.",
          "Any substance which is deemed hazardous to the marine environment.",
          "A substance which is subject to the provisions of Chapter V of SOLAS 1974, as amended."
        ],
        "correctIndex": 0,
        "image": "images/image542.jpg"
      },
      {
        "question": "When does wind force cause heeling moments on a container ship?",
        "options": [
          "When the on-deck containers present a certain profile to the wind direction",
          "Whenever wind speeds exceed 70 knots",
          "Whenever wind speeds exceed 60 knots",
          "When on-deck containers are block-stowed"
        ],
        "correctIndex": 0,
        "image": "images/image966.jpg"
      },
      {
        "question": "\" On area A4 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "the use of MF and/or HF R/T",
          "the use of SARSAT COSPAS Epirb",
          "the use of MF and/or VHF R/T",
          "the use of HF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC and NAVTEX",
          "The use of SARSAT COSPAS Epirbs and NAVTEX",
          "The use of MF DSC and INMARSAT C SAFETYNET",
          "The use of HF DSC and INMARSAT C SAFETYNET"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "What spheroidal datum should the GPS receiver be set into, to enable its readout position to be plotted on a paper chart?",
        "options": [
          "Select the same datum that the paper chart has",
          "Select WGS84 datum, then when plotting, apply any corrections shown on the chart",
          "Select the European datum as this is similar to the WGS84 datum",
          "Set the datum of the country or area that the vessel is in"
        ],
        "correctIndex": 1,
        "image": "images/image493.jpg"
      },
      {
        "question": "A container vessel has lost several dangerous goods containers overboard. The master must report this loss of container incident to:",
        "options": [
          "Vessels in the immediate vicinity.",
          "The nearest Coastal state.",
          "The ship owner.",
          "The Flag state."
        ],
        "correctIndex": 1,
        "image": "images/image968.jpg"
      },
      {
        "question": "The vessel is 20 miles off the coast and disabled because of engine failure, which will require at least 24 hours to repair. What initial actions should be taken to ensure the safety of the vessel?",
        "options": [
          "Display NUC lights and send out a PAN warning on the hour using a VHF radio",
          "Steer away from danger until the vessel looses way, then if possible drop the anchor",
          "Display NUC lights and inform the nearest Coast Guard of you predicament",
          "Contact the designated person ashore and request that a tug is arranged"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "With what system is a NAVTEX-message transmitted?",
        "options": [
          "FEC",
          "ARQ",
          "JRC",
          "SELFEC"
        ],
        "correctIndex": 0,
        "image": "images/image20.jpg"
      },
      {
        "question": "When planning the loading of containers, the planning officer must refer to:",
        "options": [
          "The Cargo Stowage and Security (CSS) Code.",
          "The Cargo Securing Manual (CSM).",
          "The Safety of Life at Sea Convention (SOLAS).",
          "MARPOL 73/78 Annex IV."
        ],
        "correctIndex": 1,
        "image": "images/image754.jpg"
      },
      {
        "question": "As per IMDG Code, the term 'separated from\" can be defined as:",
        "options": [
          "With an intervening compartment, being both a vertical and horizontal separation. Provided an intervening deck is resistant to liquid and fire, a vertical separation of 6 metres is acceptable.  For \"on deck\" stowage, this segregation means a distance of at least 12 metres irrespective of compartment divisions.",
          "In different compartments or holds when stowed \"under deck\". Provided an intervening deck is resistant to fire and liquid, a vertical separation may be accepted as equivalent. For \"on deck\" stowage, this segregation means a distance of at least 6 metres.",
          "Either in a vertical or horizontal separation: if the intervening decks are not resistant to fire and liquid, then only in a longitudinal separation is acceptable. For \"on deck\" stowage, this means a distance of at least 12 metres. This distance also applies to one package stowed \"on deck\" and another in an upper compartment.",
          "Effectively segregated so that the incompatible goods cannot interact dangerously in the event of an accident, but may be transported in the same compartment or hold or on deck, provided a horizontal separation, projected vertically, of 3 metres is obtained."
        ],
        "correctIndex": 1,
        "image": "images/image499.jpg"
      },
      {
        "question": "On board passenger ships an abandon ship drill must be performed:",
        "options": [
          "Every three months",
          "Every two weeks",
          "Every month",
          "Every week"
        ],
        "correctIndex": 3,
        "image": "images/image77.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft portable radio",
          "Rocket parachute flares",
          "EPIRB",
          "Survival craft distress pyrotechnic signals"
        ],
        "correctIndex": 0,
        "image": "images/image232.jpg"
      },
      {
        "question": "Under what convention is the master to ensure that a ship is seaworthy and in a fit state to safely carry a shipper's cargo?",
        "options": [
          "The Nassau Protocol.",
          "The Antwerp Convention.",
          "The Hague-Visby Rules.",
          "The Paris Memorandum."
        ],
        "correctIndex": 2,
        "image": "images/image511.jpg"
      },
      {
        "question": "What action should be taken by the Officer of the Watch if someone reports a fire to them?",
        "options": [
          "Call the Master",
          "Stop engines and inform the engine room",
          "Send the bridge look-out down to investigate",
          "Sound the Fire Alarm"
        ],
        "correctIndex": 3,
        "image": "images/image590.jpg"
      },
      {
        "question": "A SART must, when the vessel sinks:",
        "options": [
          "Should be left on board",
          "Be taken by the crew to the rescue-boat and turned on manually",
          "Automatically be released from the vessel and be turned on by equipment onboard the SART-units",
          "Automatically released and then automatically activated"
        ],
        "correctIndex": 1,
        "image": "images/image5.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '31' can be used:",
        "options": [
          "To ask for medical assistance",
          "To ask for maritime inquiries",
          "When technical problems are experienced with the Inmarsat terminal",
          "When the coast-station is disfunctional"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which method illustrated is the proven way to get two vessels in open water safely alongside each other for a ship to ship transfer operation? Note that not all the vessels are moving.",
        "options": [
          "When the smaller vessel is at anchor, fig. 3",
          "When both vessels are making way, fig. 1",
          "When the larger vessel is at anchor, fig. 2",
          "When the larger vessel is stopped and drifting in the water, fig. 4"
        ],
        "correctIndex": 1,
        "image": "images/image548.jpg"
      },
      {
        "question": "On board an accident happened. Urgent radio-medical advice is needed. We choose the category:",
        "options": [
          "Routine",
          "Distress",
          "Urgency",
          "Safety"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What type of search pattern is recommended in the IAMSAR Manual as most effective for a single vessel, when the location of the search object is known within relatively close limits?",
        "options": [
          "Sector Search",
          "Track Line Search",
          "Expanding Square Search",
          "Parallel Sweep Search"
        ],
        "correctIndex": 2,
        "image": "images/image530.jpg"
      },
      {
        "question": "For how long time must the printout from the Oil Discharge Monitoring Equipment (ODME) be retained onboard?",
        "options": [
          "Two years",
          "Three years",
          "Six months",
          "Four years"
        ],
        "correctIndex": 1,
        "image": "images/image41.jpg"
      },
      {
        "question": "When taking action to deal with under-deck cargo spillage on container ships, reference must be made to:",
        "options": [
          "The ship's Contingency plan.",
          "SOLAS Chapter V – Safety of navigtaion.",
          "The EmS Guide.",
          "The ISPS Code."
        ],
        "correctIndex": 2,
        "image": "images/image810.jpg"
      },
      {
        "question": "Besides normal loads, the lashings of the containers stowed at the outboard part of the deck stow are additionally subjected to:",
        "options": [
          "Transverse accelerating load condition, leading to loss of GM.",
          "Lack of support from adjacent columns of containers.",
          "The effect of green seas breaking over the containers.",
          "The effect of wind on the containers."
        ],
        "correctIndex": 3,
        "image": "images/image962.jpg"
      },
      {
        "question": "At present the MF/HF transmitter often has an automatic aerial turning unit. Should this fail:",
        "options": [
          "The transmitter will automatically keep operating on the MF and HF distress frequencies",
          "Its always possible to put the turning unit in a fixed position, so the MF distress frequencies can still be used",
          "You can transmit but can not receive",
          "No distress frequencies can be used at all"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft distress pyrotechnic signals",
          "Radar transponder",
          "Epierb",
          "Rocket parachute flares"
        ],
        "correctIndex": 1,
        "image": "images/image253.jpg"
      },
      {
        "question": "What is the name of the reference manual, jointly produced by the International Maritime Organization and the International Civil Aviation Authority, which currently outlines the organization and management of search and rescue activities at sea?",
        "options": [
          "The Merchant Ship Search and Rescue (MERSAR) Manual",
          "The International Aeronautical and Maritime Search and Rescue (IAMSAR) Manual",
          "The Internation Maritime Search and Rescue (IMARSAR) Manual",
          "The Search and Rescue (IMOSAR) Manual"
        ],
        "correctIndex": 1,
        "image": "images/image527.jpg"
      },
      {
        "question": "Fire in a container carrying chemicals is difficult to extinguish, because:",
        "options": [
          "Such containers containing chemicals are always inaccessible.",
          "Water, if used, will always cause a chemical fire to flare up.",
          "Chemical fires always spread instantaneously to other containers.",
          "Heat is often produced due to chemical reactions within the cargo."
        ],
        "correctIndex": 3,
        "image": "images/image964.jpg"
      },
      {
        "question": "DSC-test transmissions may:",
        "options": [
          "Be sent by any installation",
          "Be sent by an MF-installation on the DSC-distress frequency",
          "Only be sent on an MF-installation on frequencies other then the DSC-distress frequency",
          "Only be sent with MF/HF-installation on other frequencies than the DSC-distress frequencies, if the tele-command 'test' is used"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which statement best describes how an ENC chart gives advice on sounding data quality?",
        "options": [
          "'The chart has text on it that describes the sea floor type'",
          "'the chart has a Zone of Calculation function'",
          "'The chart has a Zone of Confidence function'",
          "'There are source data diagrams on the chart that can be read'"
        ],
        "correctIndex": 2
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is it?",
        "options": [
          "This vessel is not under command and stopped in the water",
          "This vessel is aground",
          "This is a vessel constrained by her draft",
          "This vessel is not under command, but is making way through the water"
        ],
        "correctIndex": 3,
        "image": "images/image491.jpg"
      },
      {
        "question": "If all indications are that a cargo has been received without damages, irregularities or short shipment and the phrase \"apparent good order and condition\" is entered on the Bill of Lading, then this Bill is this said to be:",
        "options": [
          "An endorsed Bill of Lading.",
          "A Due Title Bill of Lading.",
          "A clean Bill of Lading.",
          "A Bill of Lading completed for shipment."
        ],
        "correctIndex": 2,
        "image": "images/image518.jpg"
      },
      {
        "question": "The majority of convensions adopted under the auspices of IMO fall into which of the three main categories:",
        "options": [
          "There are no conentions that fall under IMO",
          "Maritime Safety, STCW, Maritime Security",
          "Safety, Terrorism, ILO",
          "Maritime Safety, Prevention of Marine pollution, Liability and compensation"
        ],
        "correctIndex": 3,
        "image": "images/image161.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding the stowage of lifeboats and life-rafts corresponds to present SOLAS regulations?",
        "options": [
          "Davit-launched life-rafts shall be stowed on starboard side of the ship.",
          "Life-rafts intended for throw-overboard launching shall be stowed midships secured to means for transfer to either side.",
          "Life-rafts shall be stowed close to the stern of the vessel",
          "Lifeboats shall be stowed attached to launching appliances."
        ],
        "correctIndex": 3,
        "image": "images/image79.jpg"
      },
      {
        "question": "\"Which of these precautionary measures can reduce the threat of piracy, if implemented?\"",
        "options": [
          "Plan to arrive at port at night.",
          "Turn off all of the ship's lights at night.",
          "Sail at full speed.",
          "Stay at least 15nm away from the shore."
        ],
        "correctIndex": 2,
        "image": "images/image69.jpg"
      },
      {
        "question": "What is the period of validity of the Safety Management Certificate",
        "options": [
          "6 months",
          "5 years",
          "2 years",
          "1 Year"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "What radar device assists in the detection and location of a survival craft?",
        "options": [
          "SART beacon",
          "A personal locator beacon",
          "AIS beacon",
          "EPIRB beacon"
        ],
        "correctIndex": 0,
        "image": "images/image150.jpg"
      },
      {
        "question": "The receiver of the Inmarsat-C installation, if the log-in procedure has been carried out, is turned on:",
        "options": [
          "RCC common channel",
          "NCS common channel",
          "LES message channel",
          "NCC information channel"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Your vessel is progressing within a Traffic Separation Scheme and receives a navigational warning of another vessel progressing the wrong way within the scheme. What actions should be taken on the bridge, if any?",
        "options": [
          "Slow down your vessel and proceed with caution, posting extra lookouts",
          "Move into the inshore traffic zone",
          "Proceed on passage and monitor the rogue vessel",
          "Call the rogue vessel and point out its position"
        ],
        "correctIndex": 2,
        "image": "images/image315.jpg"
      },
      {
        "question": "As per the IMDG Code, 'Proper Shipping Name' is defined as:",
        "options": [
          "The name under which a dangerous material, substance or article is described for export purposes in the country of loading.",
          "The name assigned by the manufacturer to a material, substance or article for the purposes of shipment.",
          "The name to be used in any documentation relating to the transportation of the dangerous substance, material or article, such as on forms, labels and placards.",
          "The correct chemical name of a potentially hazardous material, as identified from the Chemical Cargo List."
        ],
        "correctIndex": 2,
        "image": "images/image523.jpg"
      },
      {
        "question": "To prevent overload of the MF/HF transmitter;",
        "options": [
          "Switch over to low power intermitently",
          "Do not transmit too long at full power",
          "Clean the dust filter of the fan regularly",
          "Do not leave the transmitter on stand-by for too long, if not required"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Shipboard Emergency Drills must be carried out at least (OPA-90):",
        "options": [
          "Once a month",
          "Once every six months",
          "Once a year",
          "Once a week"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "What is usually the effect on G when the ship is damaged with water ingress?",
        "options": [
          "It rises",
          "It is unchanged",
          "It lowers",
          "It first rises then lowers"
        ],
        "correctIndex": 2,
        "image": "images/image160.jpg"
      },
      {
        "question": "The DSC-controller display the following: DOO:   244562000  CH16 ; S distress      sinking After receiving this DSC message the following is done immediately:",
        "options": [
          "Send a \"distress alert relay\"",
          "Give a \"DSC-acknowledgement\"",
          "Listen out on VHF channel 16",
          "Call the Chief officer"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision, which has resulted in a heavy oil leakage. Who should be called to handle pollution claims and damages?",
        "options": [
          "The P & I Club's nearest representative.",
          "Flag state representative.",
          "The Classification Society's representative.",
          "The Leading Hull Underwriter's nearest Average Agent."
        ],
        "correctIndex": 0,
        "image": "images/image163.jpg"
      },
      {
        "question": "As a minimum, how often shall life boats be launched with their assigned operating crew aboard and manoeuvred in the water according to SOLAS?",
        "options": [
          "Every month.",
          "Every two weeks.",
          "Every week.",
          "Every three months."
        ],
        "correctIndex": 3,
        "image": "images/image120.jpg"
      },
      {
        "question": "How is a Safety Management Certificate obtained?",
        "options": [
          "RSS issue SMC with Register",
          "Ship owner has Document of Compliance issued, and vessel is assessed and holds all statutory certificates",
          "Ship owner is authorised to carry out internal audits and issue SMC",
          "Vessel is surveyed by MCA and certificate issued"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "For how long time should a VHF survival craft transceiver be able to operate on its batteries ?",
        "options": [
          "8 hours",
          "12 hours",
          "6 hours",
          "24 hours"
        ],
        "correctIndex": 0,
        "image": "images/image26.jpg"
      },
      {
        "question": "Which information should be included in your search plan?",
        "options": [
          "Known hiding spots to be searched.",
          "Areas to be searched.",
          "Areas to be searched and personnel to be involved in the search.",
          "Personnel to be involved in the search."
        ],
        "correctIndex": 2,
        "image": "images/image131.jpg"
      },
      {
        "question": "Every inflatable liferaft , inflatable lifejacket and hydrostatic release units shall be serviced:",
        "options": [
          "Every 18 months.",
          "Every 12 months.",
          "Every 36 months.",
          "Every 24 months."
        ],
        "correctIndex": 1,
        "image": "images/image48.jpg"
      },
      {
        "question": "Which of the following statements is the most accurate in relation to the safety depth contour setting on an ECDIS?",
        "options": [
          "'The safety depth contour value is best set at a low value'",
          "'The safety depth contour value has no effect on ECDIS operation'",
          "'The safety depth contour value is best set at a high value'",
          "'The safety depth contour has to be set at a value to reflect the vessel's draught'"
        ],
        "correctIndex": 3
      },
      {
        "question": "What mode is used for broadcast an MF/HF-DSC message:",
        "options": [
          "H3E",
          "J2B / F1B",
          "G3E",
          "J3E"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "One can check the functioning of the SART by:",
        "options": [
          "Activating it by extracting the antenna",
          "Removing it from the holder and turning the SART upside down",
          "Actvating the SART and checking the effect on the radar screen",
          "Lowering SART in to the sea"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "What sound signal can be made when nearing a bend in a river, with the view around the bend obscured by an intervening obstruction?",
        "options": [
          "Two prolonged blasts",
          "Two short blasts",
          "One short blast",
          "One prolonged blast"
        ],
        "correctIndex": 3,
        "image": "images/image536.jpg"
      },
      {
        "question": "When planning to cross an ocean, is it always best to use great circle sailing?",
        "options": [
          "Yes - because it is the easiest sailing to compute and then follow",
          "No - because a Mercator course is more efficient, less distance and easier to follow",
          "No - because there could be environmental or regulatory restrictions",
          "Yes - because an ECDIS in track control will do the computation and steer the route"
        ],
        "correctIndex": 2,
        "image": "images/image247.jpg"
      },
      {
        "question": "Where on the hull is the theoretical position of the hydrodynamic pivot point, when going astern and turning?",
        "options": [
          "1/3 of the vessel's length from the bow",
          "Between amidships and 1/4 of the vessel's length from the bow",
          "Amidships",
          "Between 1/4 of the ship's length from the stern and the rudder post"
        ],
        "correctIndex": 3,
        "image": "images/image503.jpg"
      },
      {
        "question": "How often should the lifeboat wire falls be turned and renewed?",
        "options": [
          "Turned every 2 years and renewed every 4 years",
          "Turned at intervals of not more than 30 months and renewed every 5 years",
          "Turned every 30 months and needs only to be renewed if the wire is in poor condition",
          "Renewed every three years"
        ],
        "correctIndex": 1,
        "image": "images/image79.jpg"
      },
      {
        "question": "The compensation payment by the charterer that is due when a vessel is unable to load / discharge her cargo within the allowed and contracted time is referred to as:",
        "options": [
          "Deferment.",
          "Discretion.",
          "Demurrage.",
          "Contractual penalty discount."
        ],
        "correctIndex": 2,
        "image": "images/image36.jpg"
      },
      {
        "question": "The most appropriate measure to reduce the build-up of ice on containers during a sea passage is to:",
        "options": [
          "Increase speed, whilst maintaining course.",
          "Have the crew remove the ice.",
          "Reduce speed, whilst maintaining course.",
          "Heave to and wait for ambient temperature to rise to safe levels."
        ],
        "correctIndex": 2,
        "image": "images/image802.jpg"
      },
      {
        "question": "The word NAVTEX is spelled conform the international phonetic alphabet:",
        "options": [
          "November, Apple, Victoria, Tango, Echo, X-mas",
          "November, Anna, Victor, Tango, Eduard, X-ray",
          "November, Able, Valencia, Tripoli, Echo, Xantippe",
          "November, Alfa, Victor, Tango, Echo, X-ray"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which equipment will detect a signal from a SART transponder?",
        "options": [
          "DSC receiver",
          "S band radar",
          "X band radar",
          "Radio Direction Finder"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "Shock loads in a container lashing system are generally caused by:",
        "options": [
          "Loose cargo lashings.",
          "Ship torsion.",
          "Resonant rolling.",
          "Ship vibrations."
        ],
        "correctIndex": 0,
        "image": "images/image754.jpg"
      },
      {
        "question": "The pyrotechnics used to transmit visual signals to other vessels, boats or aircrafts are of the following type",
        "options": [
          "All of the below mentioned",
          "Hand flare",
          "Buoyant smoke signal",
          "Rocket parachute flare"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 201-300",
    "questions": [
      {
        "question": "What is the primary cause of fatigue damage to the hull girder?",
        "options": [
          "Repeated plastic deformation of the hull",
          "The number of repeated stress cycles",
          "Resonant rolling",
          "Panting stresses"
        ],
        "correctIndex": 1,
        "image": "images/image966.jpg"
      },
      {
        "question": "With a davit launched lifeboat, what weight is required by SOLAS regulations to be used for the 5 yearly test of the davit and brake system?",
        "options": [
          "1.25 times the total weight of the lifeboat when loaded with its full complement of persons and equipment.",
          "0.8 times the total weight of the lifeboat when loaded with its full complement of persons, equipment and stores.",
          "1.1 times the total weight of the lifeboat when loaded with its full complement of persons and equipment.",
          "The equivalent to the total weight of the lifeboat when loaded with its full complement of persons and equipment."
        ],
        "correctIndex": 2,
        "image": "images/image573.jpg"
      },
      {
        "question": "Which action do you perform when you log in to a satellite ocean region?",
        "options": [
          "You update the ship's position",
          "You select the CES through which you wish to send a message.",
          "You inform the NCS that the SES is available for comunications.",
          "You adjust the antenna."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A Cospas-Sarsat EPIRB can be used in:",
        "options": [
          "Only in the sea-areas A1, A2 and A3",
          "All sea-areas (A1 to A4)",
          "Only in sea-area A4",
          "Only in the sea-areas A2 and A3"
        ],
        "correctIndex": 1,
        "image": "images/image22.jpg"
      },
      {
        "question": "If pollution takes place, what would you do immediately?",
        "options": [
          "Inform the manager.",
          "Start clean-up operations.",
          "Inform the vessel's agent.",
          "Report to relevant authorities."
        ],
        "correctIndex": 3,
        "image": "images/image178.jpg"
      },
      {
        "question": "On a container vessel, flexitanks are used for:",
        "options": [
          "The carriage of non-hazardous liquids, in bulk.",
          "The carriage of liquid cargoes of a particular specific gravity.",
          "The carriage of hazardous liquids, in bulk.",
          "The carriage of liquid cargoes that do not have a Proper Shipping Name."
        ],
        "correctIndex": 0,
        "image": "images/image964.jpg"
      },
      {
        "question": "The ship-shore HF-telephone-channel 2228 consists of the frequencies 22081.0 kHz and 22777.0 kHz. In case of manual operation, one should tune the receiver on:",
        "options": [
          "22777.0 KHz",
          "22081.0 KHz",
          "2228 KHz",
          "The common receiving frequency for the 22 mHz band"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "You wish to send a DSC-message because of a m.o.b. situation and assistance by other ships is required. You have to choose the category:",
        "options": [
          "Safety",
          "Distress",
          "Urgency",
          "Individual"
        ],
        "correctIndex": 1,
        "image": "images/image10.jpg"
      },
      {
        "question": "What immediate action should be taken if a ship unexpectedly runs aground and stops?",
        "options": [
          "Sound the General Alarm",
          "Stop engine(s)",
          "Ring full astern",
          "Hoist two black balls"
        ],
        "correctIndex": 1,
        "image": "images/image514.jpg"
      },
      {
        "question": "During a loaded winter passage across the North Atlantic, the master of a container vessel would be most concerned with:",
        "options": [
          "The added weight of icing on container stacks, leading to loss of GM.",
          "High wind and waves leading to speed reduction and high fuel consumption.",
          "Temperature differential between air and seawater, leading to shell plating damage.",
          "The presence of icebergs leading to hazard of navigation."
        ],
        "correctIndex": 0,
        "image": "images/image972.jpg"
      },
      {
        "question": "Assign men to search men and women to search women unless a device such as a metal detector is used.",
        "options": [
          ".",
          "FALSE",
          ".",
          "TRUE"
        ],
        "correctIndex": 3,
        "image": "images/image151.jpg"
      },
      {
        "question": "Racking forces imposed on a container would likely cause the greatest deflection to:",
        "options": [
          "The base of the container.",
          "The closed end of the container.",
          "The door end of the container.",
          "The corner posts of the container."
        ],
        "correctIndex": 2,
        "image": "images/image964.jpg"
      },
      {
        "question": "New MARPOL regulations came into effect from July 93 stating that the previous instantaneous rate of discharge of oil content (60 litters per nautical mile) was changed to:",
        "options": [
          "10 litters per nautical mile",
          "20 litters per nautical mile",
          "30 litters per nautical mile",
          "25 litters per nautical mile"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "For a \"distress alert\" via the DSC, the MF-band is used in the frequencies:",
        "options": [
          "TX: 2189.5 kHz RX: 2189.5 kHz",
          "TX: 500.0 KHz RX: 518.0 KHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The authority to order the use of distress signal or distress alerts is:",
        "options": [
          "The first person to discover the distress situation",
          "Company safety officer",
          "Only with the master",
          "The person designated to maintain communication during distress situations"
        ],
        "correctIndex": 2,
        "image": "images/image25.jpg"
      },
      {
        "question": "For the same vessel and the same rudder angle, is the diameter of the turning circle completed at full ahead smaller than one completed at half ahead?",
        "options": [
          "No, it will be much larger turning circle at half ahead.",
          "Yes, there would be a change of shape of the turning circle; it would have an increase in the transfer, but not the advance.",
          "Yes, it would be a much smaller turning circle at half ahead",
          "No, the diameter of the turning circle would be almost the same."
        ],
        "correctIndex": 3,
        "image": "images/image551.jpg"
      },
      {
        "question": "For a container stowed in a position equidistant from the roll and pitch axes of a ship, what will quarter the acceleration forces acting on it?",
        "options": [
          "Halving the roll period",
          "Halving the pitch period",
          "Doubling the pitch period",
          "Doubling the roll period"
        ],
        "correctIndex": 3,
        "image": "images/image966.jpg"
      },
      {
        "question": "Satellites which receive the 406 MHz Cospas-Sarsat EPIRB are:",
        "options": [
          "Not capable to determine the position of the EPIRB",
          "Capable to determine the position of the EPIRB",
          "Only capable to determine the position of the EPIRB in certain curcumstances",
          "Capable to determine position only in day time"
        ],
        "correctIndex": 1,
        "image": "images/image9.jpg"
      },
      {
        "question": "If the shipper wishes to ensure that a vessel or her operators will not be held responsible for any damage that may arise from the carrier issuing a clean Bill of Lading, even though the Mate's receipt is marked as \"unclean\", such a document is called the:",
        "options": [
          "An absolution clause in the shipping documents.",
          "A Letter of Credit.",
          "A Letter of Indemnity.",
          "An addendum to the Bill of Lading."
        ],
        "correctIndex": 2,
        "image": "images/image574.jpg"
      },
      {
        "question": "If one wishes to make a collect call from a vessel to a shore subscriber, one must:",
        "options": [
          "Inform the telephone number on whom to charge the call",
          "Request for a personal call",
          "Request for telephone message stating name, address and telephone number",
          "Request for a collect call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "In a distress situation and immediately after the distress signal has been sounded, what is the next action to be taken by the Chief Officer on duty?",
        "options": [
          "Use the VHF-radio telephone to ask ships in the vicinity to stand by",
          "Use the intercom to inform crew and passengers of the reason for the alarm",
          "Send distress signals to call for help",
          "Call the nearest coastal radio station"
        ],
        "correctIndex": 1,
        "image": "images/image166.jpg"
      },
      {
        "question": "The International Convention for the Safety of Life at Sea (SOLAS) regulations, Chapter 5, deals with the Safety of Navigation and applies to which vessels?",
        "options": [
          "To vessels over a certain size",
          "To vessels with deadweight over 10 000 tons",
          "To all vessels and all voyages with exceptions",
          "To ALL vessels that go to sea"
        ],
        "correctIndex": 2,
        "image": "images/image34.jpg"
      },
      {
        "question": "The DoS addresses the responsibility for the security of the water around the ship and the verification of increased threat levels.",
        "options": [
          "TRUE",
          ".",
          ".",
          "FALSE"
        ],
        "correctIndex": 0,
        "image": "images/image87.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Rocket parachute flares",
          "Parachute landing area",
          "Survival craft distress pyrotechnic signals",
          "Line throwing appliance"
        ],
        "correctIndex": 3,
        "image": "images/image252.jpg"
      },
      {
        "question": "What do you understand by the term \"Risk Assessment\", and how would this be carried out on board?",
        "options": [
          "Requires a great deal of preparation and involves recording everything on paper",
          "Identify the hazards, quantify the risks, put control measures in place, monitor the work activity and review",
          "Identify the hazards and specify the personal protective equipment that would be required to complete the work",
          "States than when work has a degree of risk that the work is not carried out"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "A battery of 24 Volt supplies during 10 hours a current of 6 ampere. What is the capacity supplied:",
        "options": [
          "48 Ah",
          "60 Ah",
          "144 Ah",
          "240 Ah"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What device can be used by a tug to get a line aboard a disabled vessel in bad weather, when it is dangerous for the tug to get too close?",
        "options": [
          "A cannon line",
          "A heaving line",
          "A missile line",
          "A rocket line"
        ],
        "correctIndex": 3,
        "image": "images/image199.jpg"
      },
      {
        "question": "With an EPIRB:",
        "options": [
          "You must check the date the battery must be replaced",
          "You must check the working of the charger and check the loaded condition of the battery",
          "You must check if it is attached properly to a railing with the required line",
          "You must check the manufacturer of the battery"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "A heavy piece of machinery is loaded on deck of a container vessel, stowed across several flat rack containers. The most appropriate method for lashing such cargo would be by:",
        "options": [
          "Taking all lashings to the flat-rack lashing points.",
          "Taking all lashings to the hatch coamings, pillars and lashing bridges.",
          "Taking all lashings to the hatch top.",
          "Taking some of the lashings to flat-racks and rest to hatch tops."
        ],
        "correctIndex": 0,
        "image": "images/image810.jpg"
      },
      {
        "question": "If a master initially responds to a distress but then, in special circumstances, decides not to proceed, who must they tell?",
        "options": [
          "Inform the Search and Rescue Mission Coordinator(SMC) of their decision and enter the reason in the vessel's logbook",
          "If possible, inform the casualty of their decision and communicate the reason",
          "Contact all the other units in the SAR operation informing them of the decision to break off",
          "Inform the vessel owners of their decision and resume passage at the earliest opportunity"
        ],
        "correctIndex": 0,
        "image": "images/image60.jpg"
      },
      {
        "question": "The hydrostatic release of an EPIRB should be changed",
        "options": [
          "Yearly",
          "Every four years",
          "Every two years",
          "Every three years"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "The traffic list of a coast-station is a list of:",
        "options": [
          "Pertinent navigational -and weather information",
          "Call-signs of ships for which a radio-telephone call, a telegram or another call is intended",
          "Names of ships which, on behalf of safety at sea, are being routed by a traffic control system",
          "Name of ship's scheduled for berthing"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "When conducting a risk assessment for a shipboard work activity, the two elements to be considered are:",
        "options": [
          "The time available to complete the task and the resources to hand.",
          "The available manpower and their experience in this type of work.",
          "The chance of an incident re-occurring and the potential effects of an loss.",
          "The potential severity of harm and the likelihood that harm will occur."
        ],
        "correctIndex": 3,
        "image": "images/image299.jpg"
      },
      {
        "question": "On what wave band does the search and rescue radar transponder operate?",
        "options": [
          "2182kHz",
          "6 GHz",
          "8 GHz",
          "9 GHz"
        ],
        "correctIndex": 3,
        "image": "images/image5.jpg"
      },
      {
        "question": "Which of these statements about drug smuggling is true?",
        "options": [
          "\"The preventative measures you incorporate into your ship's security plan should be exhaustive, regardless of the level of threat identified by your ship's security assessment.\"",
          "\"Drug smuggling is only a problem in certain ports, so only ships sailing in those ports need to implement preventative measures.\"",
          "Drugs are difficult to conceal onboard a ship.",
          "The risks to ships are not restricted to specific areas or trading routes."
        ],
        "correctIndex": 3,
        "image": "images/image69.jpg"
      },
      {
        "question": "Who can contact the Designated Person with their safety concerns?",
        "options": [
          "All crewmembers",
          "Senior officers only",
          "The company's shore staff only",
          "The Master only"
        ],
        "correctIndex": 0,
        "image": "images/image230.jpg"
      },
      {
        "question": "When do vertical accelerations acting on containers reach their maximum values?",
        "options": [
          "When a ship is at its extreme angle of pitch and roll simultaneously",
          "When a ship changes direction at its extreme angle of pitch",
          "During resonant rolling",
          "When a ship surges"
        ],
        "correctIndex": 1,
        "image": "images/image966.jpg"
      },
      {
        "question": "Your watchkeeper has just informed you that the vessel has collided with a sailing vessel. What action should be taken?",
        "options": [
          "Alarm the rescue centre and commence searching for survivors",
          "Call the company, explain the situation and ask for instructions",
          "Tell the watchkeeper to sort out the problem",
          "Tell the watchkeeper to proceed on passage"
        ],
        "correctIndex": 0,
        "image": "images/image295.jpg"
      },
      {
        "question": "Where on a vessel moving ahead through the water, is the most dangerous place for a tug to manoeuvre?",
        "options": [
          "The most dangerous position is when the tug is alongside the amidships section passing a line",
          "There is no one position more dangerous than another, hydrodynamic effects are the same all around the hull",
          "The most dangerous position is where the tug approaches the bow, rounding the shoulder to pass a line",
          "The most dangerous position is where the tug approaches the stern of the larger vessel and enters into its associated positive pressure field"
        ],
        "correctIndex": 2,
        "image": "images/image534.jpg"
      },
      {
        "question": "What effect does shallow water have on a normal commercial vessel's turning circle?",
        "options": [
          "Turning circle will stay the same as they are a function of the hull length only",
          "Turning circles will be of a greater diameter for the same rudder angle",
          "The effect totally depends upon the shape of the hull, a lot of hulls are not effected",
          "Turning circle will stay the same as they are a function of the rudder angle only"
        ],
        "correctIndex": 1,
        "image": "images/image520.jpg"
      },
      {
        "question": "You are in an area of restricted visibility and hear this signal. It is repeated at two minute intervals. What does it indicate?",
        "options": [
          "That there is another vessel nearby, that is at anchor",
          "That there is another vessel nearby, that is underway, but stopped and making no way through the water",
          "That there is another vessel in the vicinity that has just altered course to port",
          "That there is another vessel nearby, that is underway and making way through the water"
        ],
        "correctIndex": 1,
        "image": "images/image489.jpg"
      },
      {
        "question": "Which statement best describes what happens to the vessel symbol on an ECDIS set in North-up, true motion mode?",
        "options": [
          "Vessel symbol shows the heading fixed vertically on the screen'",
          "'This is a feature only seen on a radar display'",
          "'Vessel is stopped on the screen, land moves relative'",
          "'Vessel symbol moves across the screen'"
        ],
        "correctIndex": 3
      },
      {
        "question": "Which type of call will be sent by a ship sighting containers adrift in vicinity of her position ? (No message about this problem was previously transmitted via NAVTEX or INMARSAT C SAFETYNET)",
        "options": [
          "Safety call",
          "Distress relay call",
          "Distress call",
          "Urgent call"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "In what format will an On-Scene Co-ordinator report such information as on-scene weather and operation progress to other parties?",
        "options": [
          "SARREP",
          "POSREP",
          "OSCREP",
          "SITREP"
        ],
        "correctIndex": 3,
        "image": "images/image575.jpg"
      },
      {
        "question": "On-board training in the use of davit-launched liferafts (including inflation and lowering whenever practicable) must take place",
        "options": [
          "every 4 months",
          "every month",
          "every 2 months",
          "every 3 months"
        ],
        "correctIndex": 0,
        "image": "images/image61.jpg"
      },
      {
        "question": "To receive distress alerting and MSI via an Inmarsat-C set vessels must have:",
        "options": [
          "MF/HF radio telex scanner with printer",
          "Suitable for 518 kHz NAVTEX receiver",
          "SES or an EGC receiver",
          "A radio officer on board"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What are the extra benefits of sailing in an area with a well managed Vessel Traffic Services (VTS)?",
        "options": [
          "Provide local information to all vessels navigating in the area",
          "An increase in efficiency for ships participating in the VTS scheme",
          "An increase in the safety of all ships and the protection of the local environment",
          "Improve the scheduling and traffic movement in the area."
        ],
        "correctIndex": 2,
        "image": "images/image505.jpg"
      },
      {
        "question": "On the MF/HF transmitter-receiver there is a sensitivity control. Another name for this is:",
        "options": [
          "AF-gain",
          "LF-gain",
          "AGC-gain",
          "RF-gain"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The direction of wave encounter that is most likely to cause a parametric roll condition on large container ships is:",
        "options": [
          "Beam seas.",
          "Head seas.",
          "Just forward of the beam seas.",
          "Following or quartering seas."
        ],
        "correctIndex": 1,
        "image": "images/image970.jpg"
      },
      {
        "question": "Messages sent via INMARSAT C are charged:",
        "options": [
          "On the number of kilobits of information transmitted per block of 256 bits",
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the number of kilobits of information transmitted per block of 1024 bits",
          "On the basis of a three minute minimum charge with one minute incremental steps"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "Which of the following duties shall be included in the \"muster list\" as being assigned to crewmembers in relation to passengers?",
        "options": [
          "Assembling passengers at muster station",
          "Ensuring that every passenger is provided with an immersion suit or a thermal protective aid",
          "Ensuring that extra food and water is taken to the survival craft",
          "Clearing the escape routes"
        ],
        "correctIndex": 0,
        "image": "images/image153.jpg"
      },
      {
        "question": "Master of every ship must provide:",
        "options": [
          "A link between the shipboard training officer and the company training officer ashore",
          "Proper rest to the crew after each training programme",
          "the training during crews working hours only",
          "Facilities to conduct training whenever required by the training officer"
        ],
        "correctIndex": 0,
        "image": "images/image254.jpg"
      },
      {
        "question": "The normal mode of operation for each coast station shall be indicated in:",
        "options": [
          "The ITU List of Call signs and numerical identities of station used by the maritime mobile and maritime mobile-satellite services",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Coast Station",
          "The ITU List of Ship Stations"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "The use of MF DSC",
          "The use of VHF DSC",
          "The use of MF and/or VHF R/T",
          "The use of SART transponders"
        ],
        "correctIndex": 2,
        "image": "images/image19.jpg"
      },
      {
        "question": "Why would a very large container vessel pitch more than a feeder vessel?",
        "options": [
          "Because very large container vessels are more exposed to open sea conditions",
          "Because container stacks on large container vessels are more exposed to wind forces",
          "Because pitching varies with ship's length",
          "Because vessel pitching varies with propeller pitch"
        ],
        "correctIndex": 2,
        "image": "images/image966.jpg"
      },
      {
        "question": "What is the minimum number of portable two way VHF walkie talkies for use in survival craft, that should be carried onboard vessels which comply with GMDSS regulations?",
        "options": [
          "2 sets",
          "1 set",
          "There is no requirement to carry them.",
          "3 sets"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "In case of pollution in US waters, do you always have to notify the National Response Center (OPA-90)",
        "options": [
          "Yes, within three (3) days",
          "Yes, within thirty (30) minutes",
          "No, not if the local US State Authority is correctly notified",
          "No, only the shipowner can notify NRC"
        ],
        "correctIndex": 1,
        "image": "images/image40.jpg"
      },
      {
        "question": "By \"collect call\" is meant:",
        "options": [
          "A call to collect the charges in office",
          "An urgent call",
          "A group call",
          "A call for account of the receiver"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which organisation verifies the computational results and stored ship data used by the stability program loaded on a vessel's computer?",
        "options": [
          "The Classification Society.",
          "The manufacturer.",
          "The engineer attending the installation and initial on-site testing.",
          "The master."
        ],
        "correctIndex": 0,
        "image": "images/image545.jpg"
      },
      {
        "question": "What is the result of a \"high metacentric height\"?",
        "options": [
          "The vessel will roll slowly or be unstable?",
          "The vessel will have a great bending moment?",
          "The vessel's tweendeck heights is too high?",
          "The vessel will roll violently?"
        ],
        "correctIndex": 3,
        "image": "images/image199.jpg"
      },
      {
        "question": "For a ship operating or calling in US waters, COTP can request (OPA-90)",
        "options": [
          "Participation in all announced drills",
          "Maximum two drills a year",
          "Unannounced drills at any time",
          "Maximum one drill a year"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "MARPOL - Annex IV. Prevention of Pollution by Sewage from ships. What do you understand by the word \"Sewage\"?",
        "options": [
          "Waste from galley.",
          "Drainage/waste from toilets/urinals.",
          "Mixture of sea water/oil.",
          "Waste from synthetic materials."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "The word SHIP is spelled conform the international phonetic alphabet:",
        "options": [
          "Singapore, Hotel, India, Paris",
          "Sierra, Hotel, India, Papa",
          "Sierra, Hotel, Item, Papa",
          "Sugar, Hotel, Italia, Peter"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of the following requirements to ships stability for normal operation corresponds to present regulations? (NSCL 4/12.2)",
        "options": [
          "Unless otherwise stated in the approved stability calculation, the total weight of the deck cargo shall not exceed 50 metric tons.",
          "The ship is loaded in such a manner that adequate stability is achieved in all loading condition.",
          "In waters with the danger of icing, loading of deck cargo must be approved by competent authority.",
          "Centre of gravity shall be calculated with accuracy better than 5 percent."
        ],
        "correctIndex": 1,
        "image": "images/image180.jpg"
      },
      {
        "question": "Which statement(s) is true of a gasoline spill?",
        "options": [
          "It is visible for a shorter time than a fuel oil spill",
          "It does little harm to marine life",
          "It will sink more rapidly than crude oil",
          "It is not covered by the pollution law"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "If W = Displacement, L = length, B = Breadth, D = depth of vessel, Cb = Block Coefficient, Cw = Coefficient of Waterplane, RD = Relative Density, then:",
        "options": [
          "W = L x B x D x CW",
          "W = L x B x D x CB",
          "W = L x B x D x CB / RD",
          "W = L x B x D x RD"
        ],
        "correctIndex": 2,
        "image": "images/image510.jpg"
      },
      {
        "question": "How is a 'sidelight' described in rule 21 of the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "A green light on the starboard side and red light on the port side, showing an unbroken light over an arc of 112.5 degree, from right ahead to 22.5 degrees abaft the beam on the respective side",
          "A red, green or yellow lantern, showing an unbroken light over an arc of 112.5 degrees",
          "A red light or a green light, with a minimum range, in a vessel of 50 metres or more, of 3 miles. In a vessel of 10 metres or more but less than 50 metres in length, a range of 1 mile",
          "A green light on the starboard side and red light on the port side, showing an unbroken light over an arc of 135 degrees, from right ahead to 22.5 degrees abaft the beam on the respective side"
        ],
        "correctIndex": 0,
        "image": "images/image554.jpg"
      },
      {
        "question": "What is the disadvantage of using chemicals on an oil-spill on the water?",
        "options": [
          "It is difficult to apply chemicals if there is any wind",
          "The chemicals make it difficult to remove the oil from the water",
          "The water gets a white colour, which makes it easy to detect the oil-spill",
          "It is difficult to apply the chemicals if the oil drifts away from the ship's side"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "When onboard channel 16 is used for a shore radio-connection, you always work:",
        "options": [
          "On low power",
          "Simplex",
          "Semi-duplex",
          "Duplex"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "Who is responsible for ensuring that your ship's security plan meets the requirements of the ISPS Code?",
        "options": [
          "Flag State Administration",
          "Company Security Officer",
          "Recognized Security Organization",
          "Ship Security Officer"
        ],
        "correctIndex": 1,
        "image": "images/image131.jpg"
      },
      {
        "question": "Which personnel must undergo familiarization training on board",
        "options": [
          "Only the deck officers",
          "Only catering staff",
          "Only the ratings",
          "Everyone"
        ],
        "correctIndex": 3,
        "image": "images/image52.jpg"
      },
      {
        "question": "DSC uses for automatic identification the MMSI. The identification 002442000 is assigned to:",
        "options": [
          "A type of vessel's",
          "A coast-station or coast guard-station",
          "A vessel",
          "A group of vessels"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "An EPIRB has been activated accidentally. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Send a distress priority VHF DSC call and make broadcast to all stations",
          "Make broadcast to all stations on VHF 16",
          "Call the nearest coast station and inform it that a false distress alert has been transmited",
          "Call a LUT and inform it"
        ],
        "correctIndex": 2,
        "image": "images/image2.jpg"
      },
      {
        "question": "The first step in completing an SSA is to:",
        "options": [
          "Create a list of potential motives for security incidents against your ship.",
          "List the existing security measures.",
          "\"Identify the key shipboard operations, systems, areas and personnel that are critical to protect.\"",
          "Develop an onboard security survey checklist"
        ],
        "correctIndex": 0,
        "image": "images/image82.jpg"
      },
      {
        "question": "According to the IAMSAR Manual, what is the expected survival time for a person in water of temperature over 20 degrees Celsius?",
        "options": [
          "Less than 12 hours if they have little body fat",
          "Less than 24 hours because of hypothermia",
          "Between 18 - 24 hours depending upon their size",
          "Indefinite, depending on fatigue state"
        ],
        "correctIndex": 3,
        "image": "images/image533.jpg"
      },
      {
        "question": "The operating mode of a pyrotechnic signal depends essentially on:",
        "options": [
          "The weather conditions of the moment",
          "Instructions or diagrams printed on its casing by the manufacturer",
          "A definite standard process",
          "The fact that the user is on board a liferaft, a lifeboat or ship"
        ],
        "correctIndex": 1,
        "image": "images/image170.jpg"
      },
      {
        "question": "The word CHANNEL is spelled conform the international phonetic alphabet:",
        "options": [
          "Charlie, Hotel, Able, November, November, Echo, Liverpool",
          "Charlie, Hotel, Alfa, November, November, Echo, Lima",
          "Cornelies, Hotel, Alfa, November, November, Echo, Lima",
          "Cornelies, Hotel, Apple, November, November, Echo, Land"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "How often shall each member of the crew participate in an \"abandon ship\"-drill?",
        "options": [
          "Once every week",
          "Once every 6 months",
          "Once every month",
          "Once a year"
        ],
        "correctIndex": 2,
        "image": "images/image49.jpg"
      },
      {
        "question": "By the degree of selectivity of a receiver is meant:",
        "options": [
          "Ability to make weak stations audible",
          "Ability to prevent variations in the strength of radio frequency signal received",
          "Abilit to receive all signals",
          "Ability to distinguish weak stations from adjacent stronger stations"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "In the situation illustrated with a ship on even keel, how should the tug power be set to enable the vessel to be pushed sideways without changing its heading?",
        "options": [
          "Equal power required by both tugs as they are the same distance from bow and stern",
          "Usually there would be greater power on the aft tug than on the forward tug",
          "Usually there would be greater power on the forward tug than on the after tug",
          "It would be very difficult to predict which tug needs greater or lesser power, it would have to be trial and error"
        ],
        "correctIndex": 2,
        "image": "images/image559.jpg"
      },
      {
        "question": "For how long time should a COSPAS-SARSAT epirb be able to operate on its batteries ?",
        "options": [
          "48 hours",
          "96 hours",
          "12 hours",
          "24 hours"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "Your vessel has been involved in a collision, and at first opportunity a lot of people from outsides parties are asking questions. What shall you tell them?",
        "options": [
          "Do not tell anybody anything, except representatives from the main newspapers, radio and TV. Remember, the people have the right to know.",
          "You shall only tell them the truth and nothing but the truth.",
          "To make sure that all parties are informed about the facts, show them the extracts of the log-book.",
          "Do not reply to any questions from outside parties, except the Solicitor appointed by your company."
        ],
        "correctIndex": 3,
        "image": "images/image93.jpg"
      },
      {
        "question": "Which of the following information shall be specified by the muster list?",
        "options": [
          "The muster list has been prepared and approved by the administration before the ship proceeds to sea",
          "Action to be taken by crew and passengers",
          "The specific duties assigned to passengers that are in charge of a group of others",
          "The abandon ship signal consisting of two long blasts"
        ],
        "correctIndex": 1,
        "image": "images/image61.jpg"
      },
      {
        "question": "How often are \"abandon ship\" drills required to be held on cargo vessels according to SOLAS?",
        "options": [
          "Once every year.",
          "Once every 6 months.",
          "Once every month.",
          "Once every week."
        ],
        "correctIndex": 2,
        "image": "images/image56.jpg"
      },
      {
        "question": "How many Radar Transponders (SART) are required to be carried onboard a ship for use in survival crafts?",
        "options": [
          "Two on each side of the ship",
          "2, one of which being capable of floating free if the ship sinks",
          "One in each lifeboat",
          "One on each side of the ship"
        ],
        "correctIndex": 3,
        "image": "images/image3.jpg"
      },
      {
        "question": "You receive a distress alert on HF Radio. What should you do?",
        "options": [
          "No response is necessary providing the vessel is more than 24 hours away.",
          "Acknowledge receipt.",
          "Wait three minutes and if no acknowledgement is heard from a coast station you should relay the alert.",
          "Relay the message immediately on 2182 kHz."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What is the disadvantage of using High Tensile Steel (HTS) in ship construction?",
        "options": [
          "Diminished cargo carrying capacity",
          "Low elasticity",
          "Failure without warning",
          "Enhanced vibration in HTS areas"
        ],
        "correctIndex": 3,
        "image": "images/image966.jpg"
      },
      {
        "question": "At what minimum height above sea level must a SART transponder be mounted?",
        "options": [
          "2 metres",
          "The proper function of a SART transponder doesn't depend on the height above sea level",
          "1 metre",
          "0.5 metre"
        ],
        "correctIndex": 2,
        "image": "images/image3.jpg"
      },
      {
        "question": "Which of the statements best describes what happens to the sounding figures on an ECDIS chart display, when the safety depth figure is set?",
        "options": [
          "'There will be alarms activated to let the operator know the depth under keel'",
          "'Figures less than the safety depth are highlighted in bold'",
          "'The display looks the same as it did before and is unchanged'",
          "'The whole sea area below that depth turns dark blue'"
        ],
        "correctIndex": 1
      },
      {
        "question": "Which of the following channels and modes should be used when initiating a distress alert transmission?",
        "options": [
          "Channel 70 DSC",
          "Channel 6 Radiotelephony.",
          "Channel 6 DSC",
          "Channel 13 Radiotelephony and channel 16 DSC."
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The transmitting power of the VHF is adjusted by setting:",
        "options": [
          "PTT",
          "Dual watch",
          "Squelch",
          "High/Low power"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Who is responsible for the vessel's radio station and mandatory radio routines?",
        "options": [
          "The master.",
          "Statutory authorities.",
          "The owners.",
          "The radio officer."
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "The bridge wheelman has not reported for duty and there is a suspected \"Man Overboard\" situation on your vessel. The ship has been searched and there is one seaman missing? The vessel turns round and retraces the course back, calling for assistance from other vessels in the vicinity. What should be the focal point for any search pattern to be established?",
        "options": [
          "Determine the drift and leeway of own ship and take this deviation from track into account on the return course. The search should focus around this return track back to the last sighted position",
          "The last sighted position should be the focal point of any search pattern and all ships should keep a good lookout in that vicinity, moving outwards to the present position.",
          "Determine when the seaman was last sighted and concentrate the search round the course line between the last sighting and present position, taking into account any prevailing current.",
          "The focus of the search should be from the present position as he probably went overboard when proceeding to the bridge for his watch."
        ],
        "correctIndex": 2,
        "image": "images/image552.jpg"
      },
      {
        "question": "When may a call for radio medical advice be preceded by the urgency-signal:",
        "options": [
          "When you have a doctor on board",
          "In urgent cases",
          "Never",
          "Always"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "Why does a vessel slow down in shallow water even though the engine revolutions stay the same?",
        "options": [
          "The propeller thrust is reduced because of the increased water density",
          "It does not, it stays at the same speed",
          "Because the vessel's hull starts to interact with the sea floor",
          "Because there is increased wave action"
        ],
        "correctIndex": 2
      },
      {
        "question": "As per the the IMDG Code, an \"article\" is referred to as:",
        "options": [
          "A device that contains a dangerous substance or mixture of substances.",
          "A device that is responsible for initiating a dangerous reaction.",
          "Something that is packed within a freight container.",
          "A form that contains important information about a hazardous substance."
        ],
        "correctIndex": 0,
        "image": "images/image513.jpg"
      },
      {
        "question": "Which radio frequency/channels are reserved for emergency communication?",
        "options": [
          "2128 kHz/VHF channel 16",
          "2182 kHz/VHF channel 16",
          "2182 kHz/VHF channel 6",
          "2188 kHz/VHF channel 8"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "Which of the connections you are shown, are the dedicated shore connection (MARPOL-connection) for discharging of sewage ?",
        "options": [
          "3",
          "2",
          "1",
          "4"
        ],
        "correctIndex": 3,
        "image": "images/image45.jpg"
      },
      {
        "question": "Which of the following prevention actions offers the guarantee of an efficient intervention in an emergency",
        "options": [
          "Training of the crew",
          "All the listed answers",
          "The installation of protective measures",
          "Planning of the emergency"
        ],
        "correctIndex": 1,
        "image": "images/image55.jpg"
      },
      {
        "question": "Where would you find the document relating to the \"Condition of Freeboard Assignment\" onboard?",
        "options": [
          "With the Safety Construction Certificate.",
          "With the Structural Survey File.",
          "With the Classification Records.",
          "With the Loadline Certificate."
        ],
        "correctIndex": 3,
        "image": "images/image498.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 301-400",
    "questions": [
      {
        "question": "Where should the placard you are shown be located, according to U.S. Coast Guard regulations ? (Title 33-Navigation and Navigable waters, § 155.440 )",
        "options": [
          "In a conspicuous place at the bilge and ballast pump control station",
          "Both in a conspicuous place in each machinery space and in a conspicuous place at the bilge and ballast pump control station",
          "In a conspicuous place in each machinery space",
          "In the wheelhouse"
        ],
        "correctIndex": 1,
        "image": "images/image176.jpg"
      },
      {
        "question": "As a result of being in collision with your vessel, the other vessel involved is on fire? What are your responsibilities to it?",
        "options": [
          "There is no statutory requirement to provide assistance as the actions of that vessel were the primary cause of the collision",
          "The other vessel is in distress and if possible I will render assistance",
          "Your vessel should manoeuvre close to the other vessel and aid the fire fighting operation",
          "You should continue on with the voyage if your damage is not serious"
        ],
        "correctIndex": 1,
        "image": "images/image506.jpg"
      },
      {
        "question": "MARPOL - Annex IV. Your ship has in operation an approved sewage treatment plant certified by the Administration. During discharge, while vessel is awaiting pilot off Cape Henry, USA, the surrounding water is discoloured. What kind of action would be appropriate to take?",
        "options": [
          "Continue discharge since Annex IV of MARPOL is internationally not yet in force.",
          "Reduce discharge rate in order to have less discolouration of surrounding water.",
          "Continue discharge since the treatment plant is of an approved type.",
          "Stop discharge."
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "The mandatory color of a hand flare is:",
        "options": [
          "White",
          "Yellow",
          "Red",
          "Green"
        ],
        "correctIndex": 2,
        "image": "images/image44.jpg"
      },
      {
        "question": "A message is send by the Inmarset C-set. The land earth station will:",
        "options": [
          "Never send a positive delivery notification (PDN) to the sender. The addressed will have to confirm the message through the ground-station and request for further information, if desired",
          "Only send a positive delivery notification (PDN) to the sender if the sender requested, so in the send menu",
          "The sender has to confirm delivery by sending another separate message",
          "Automatically send a positive delivery notification (PDN) to the sender"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "A distress call has been sent accidentally on your MF DSC equipment. Which of the following is correct for cancelling the false distress alert?",
        "options": [
          "Make broadcast on 2182 kHz \"\"Mayday all stations...\"\" and cancel the false distress alert.\"",
          "Send a selective distress priority MF DSC call to the nearest MRCC– Inform it that a false distress alert has been transmited",
          "Send a all stations urgent priority MF DSC call",
          "Switch off the transmitter"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "In which of these circumstances can your ship request a DoS?",
        "options": [
          "There is a heightened security risk for your ship and a port facility.",
          "Your ship is conducting activities with a port or ship that is not required to implement an approved security plan.",
          "Your ship has added a new port to its list of ports of call.",
          "Your ship is operating at a lower security level than the ship or port it is interfacing with."
        ],
        "correctIndex": 1,
        "image": "images/image66.jpg"
      },
      {
        "question": "What is the status of the rules of the SOLAS convention?",
        "options": [
          "Must be regarded as guidelines.",
          "Mandatory.",
          "Should be consulted when the vessel is in distress.",
          "Supplementary to classification rules."
        ],
        "correctIndex": 1,
        "image": "images/image58.jpg"
      },
      {
        "question": "You are proceeding along a narrow channel behind another vessel. You have a higher speed and have signalled your intention to the vessel ahead that you intend to overtake it on its port side. The vessel responds with this sound signal. What does it mean?",
        "options": [
          "That the vessel suggests I overtake on the starboard side instead",
          "That the vessel does not agree with my proposed manoeuvre",
          "This is a signal intended for another vessel or shore station. It is nothing to do with our vessel",
          "That the vessel is indicating its agreement with my proposed manoeuvre"
        ],
        "correctIndex": 3,
        "image": "images/image486.jpg"
      },
      {
        "question": "Under ISM, what is a \"non-conformity\"?",
        "options": [
          "A safety officer not being nominated for the vessel",
          "An observed situation where objective evidence indicates the non-fulfilment of a specified requirement",
          "The wearing of non-standard Personal protective equipment",
          "Official log book entries not being completed correctly"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "The accuracy of an Inmarsat-E positioning-system is:",
        "options": [
          "20 miles",
          "20 meters",
          "200 meters",
          "5 miles"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "What factors cause a vessel to squat when it is moving through water?",
        "options": [
          "There is an increase in the water velocity and a decrease of water pressure around certain parts of the vessel's hull",
          "There is a positive pressure field created ahead of the vessel and a negative one astern",
          "There is a decrease in the water velocity and an increase of water pressure around the vessel's hull",
          "There is an increased effect of gravity due to closeness of the sea-bed"
        ],
        "correctIndex": 0,
        "image": "images/image540.jpg"
      },
      {
        "question": "Who will have the authority to take charge and make appropriate decisions in the event of a vessel emergency when transiting the Panama Canal?",
        "options": [
          "The Panama Canal Authority",
          "The ship's company",
          "The ship's Master",
          "The Master and Pilot will agree the best course of action to be taken to resolve the emergency situation."
        ],
        "correctIndex": 0,
        "image": "images/image537.jpg"
      },
      {
        "question": "To inform ship of coast-stations messages, coast-stations give at fixed times:",
        "options": [
          "A list with the names of the ships involved spoken alphabetical numerical sequence.",
          "A list of all the messages for each vessel",
          "A traffic list with the call-sign of the ships involved in alphabetical numerical sequence",
          "A list of the official identification numbers, for example the Maritime Mobile Service Indentity (MMSI)."
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "The names and addresses of accounting authorities can be found in :",
        "options": [
          "The ITU List of Coast Stations",
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Ship Stations"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The ship is navigating in dense fog where the visibility is less than one mile. The Arpa radar is set on a range 12 miles on a course of 314 degrees and own ship has a vector as shown. What is the vector mode selected on the Arpa?",
        "options": [
          "True vectors",
          "Relative vectors.",
          "Relative vectors, sea stabilised",
          "Relative vectors, ground stabilised"
        ],
        "correctIndex": 0,
        "image": "images/image579.jpg"
      },
      {
        "question": "A lead battery of 200 Ah, in accordance with the DIN-standard, must be able to supply:",
        "options": [
          "6 ampere during 20 hours",
          "10 ampere during 20 hours",
          "200 ampere during 1 hour",
          "1 ampere during 200 hours"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of the following duties shall be included in the \"muster list\" as being assigned to members of the crew ?",
        "options": [
          "Preparation and launching of the survival craft",
          "Preparation of immersion suits for the ship's passengers",
          "Preparation of manoeuvres intended to ease launching of the survival craft",
          "Operation of the vessel's propulsion system"
        ],
        "correctIndex": 0,
        "image": "images/image80.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft portable radio",
          "Survival craft distress pyrotechnic signals",
          "EPIRB",
          "Rocket parachute flare"
        ],
        "correctIndex": 1,
        "image": "images/image122.jpg"
      },
      {
        "question": "Carriage of wet scrap steel borings, turnings and swarf in containers is generally considered dangerous, because:",
        "options": [
          "This type of cargo will corrode the container.",
          "The moisture will cause a huge increase in the weight of the cargo.",
          "It can spontaneously ignite.",
          "The cargo will not dry out en route enroute."
        ],
        "correctIndex": 2,
        "image": "images/image968.jpg"
      },
      {
        "question": "What items of container securing equipment must be used in conjunction with buttresses?",
        "options": [
          "Double stacking cones or link plates.",
          "Single stacking cones and bridge fittings.",
          "Twistlocks.",
          "Single stacking cones."
        ],
        "correctIndex": 0,
        "image": "images/image964.jpg"
      },
      {
        "question": "Once the Safety Management System is verified and working effectively, what document is issued to the ship?",
        "options": [
          "The Document of Compliance",
          "The I.S.M. Certificate",
          "The Safety Management Certificate",
          "The Document of Conformance"
        ],
        "correctIndex": 2,
        "image": "images/image230.jpg"
      },
      {
        "question": "Which one of the following items has to be included in an abandon ship drill according to SOLAS regulations?",
        "options": [
          "Launching and recovery of a survival craft.",
          "Checking that life-jackets are correctly donned.",
          "Starting and operating radio life-saving appliances.",
          "Manoeuvring the lifeboat in the water."
        ],
        "correctIndex": 1,
        "image": "images/image56.jpg"
      },
      {
        "question": "The purpose of profiling is to?",
        "options": [
          "Make judgements about people based on heir appearance.",
          "Get beneath the outer shell of an individual to obtain a more complete picture.",
          "Categorize people based on their nationality and ethnicity.",
          "Identify different personality types."
        ],
        "correctIndex": 1,
        "image": "images/image158.jpg"
      },
      {
        "question": "What does the abbreviation STCW stand for?",
        "options": [
          "The International Shipowners, Transport and Cargo Work Convention",
          "The International Convention of Ship's Trading, Chartering and Waybills",
          "The International Convention on Standards of Training, Certification and Watchkeeping of Seafarers",
          "Seafarer's Training and Competence of Watchkeepers"
        ],
        "correctIndex": 2,
        "image": "images/image84.jpg"
      },
      {
        "question": "Most minor oilspills are caused by:",
        "options": [
          "Major casualties",
          "Unforeseeable circumstances",
          "Equipment failure",
          "Human error"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "You are on a vessel 10 nautical miles off the coast of Algeria, in the Mediterranean Sea. Are you allowed to dump food waste overboard?",
        "options": [
          "Yes, the food waste can be dumped if it is ground so that the resulting particles can pass through a screen with 50 mm openings",
          "Yes, all kind of food waste can be dumped overboard",
          "No, food waste can not be dumped overboard",
          "Yes, the food waste can be dumped if it is ground so that the resulting particles can pass through a screen with 25 mm openings"
        ],
        "correctIndex": 2,
        "image": "images/image260.jpg"
      },
      {
        "question": "What is the emergency channel on VHF?",
        "options": [
          "Channel 16",
          "Channel 69",
          "Channel 09",
          "Channel 21"
        ],
        "correctIndex": 0,
        "image": "images/image21.jpg"
      },
      {
        "question": "What is the action that a GMDSS Radio Operator should take when a DSC distress alert is received?",
        "options": [
          "No action is necessary, as the DSC control will automatically switch to the NBDP follow-on communications frequency.",
          "The Operator should immediately set continuous watch on the radiotelephone frequency that is associated with frquency band on which the distress alert was received.",
          "The Operator should immediately set continuous watch on VHF channel 70.",
          "The Operator should immediately set continuous watch on the NBDP frequency that is associated with frequency band on which the distress alert was received."
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "When using an echo sounder in fresh water, the sounding indicated has a small error, what is the cause of this?",
        "options": [
          "The density of the water",
          "There should be no error with a properly working echo sounder",
          "The water temperature is probably higher",
          "The occurrence of weed and fish in fresh water"
        ],
        "correctIndex": 0,
        "image": "images/image585.jpg"
      },
      {
        "question": "You want to send a DSC-call in connection with a shore telephone-call. You must choose:",
        "options": [
          "Distress",
          "Routine",
          "Urgency",
          "Safety"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "If the wind speed on a vessel doubles, by approximately how much will the force from it rise?",
        "options": [
          "The force will be Quintupled",
          "The force will be Quadrupled",
          "The force will be Tripled",
          "The force will be Doubled"
        ],
        "correctIndex": 1,
        "image": "images/image582.jpg"
      },
      {
        "question": "Which of these statements about drug smugglers modes of operating is true?",
        "options": [
          "Individual entrepreneurs usually smuggle large quantities of drugs.",
          "\"Drugs smuggled by an organized conspiracy are usually concealed in a primary ship system such as the engine room or in a tank, void or compartment.\"",
          "Drugs hidden by individual entrepreneurs are usually difficult to detect.",
          "An organized conspiracy usually smuggles a small amount of drugs."
        ],
        "correctIndex": 1,
        "image": "images/image138.jpg"
      },
      {
        "question": "After confirmation that there is no other radio-traffic, we call on a VHF working channel of a coast-station. When you don't get any reply:",
        "options": [
          "You must wait 1 minute minimum before repeating your call",
          "You must wait 5 minutes before repeating the call",
          "You can repeat your call immediately",
          "You must wait 3 minute minimum before repeating your call"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "The Master is responsible that all crew participate in monthly emergency drills. If 25% of the crew - or more - has not participated in such drill during the last month, what is the time limit to conduct such a drill after the vessel has left a port?",
        "options": [
          "Within 12 hrs",
          "Within 30 hrs",
          "Within 24 hrs",
          "Within 48 hrs"
        ],
        "correctIndex": 2,
        "image": "images/image53.jpg"
      },
      {
        "question": "For security purposes, the IMDG Code should be read in conjunction with the:",
        "options": [
          "Part B of the ISPS Code and Chapter II of the Maritime Transport and Offshore Facilities Act.",
          "Chapter V of SOLAS and Annex II of MARPOL.",
          "Chapter XI-2 of SOLAS and Part A of the ISPS Code.",
          "IMO NVIC 24 and 46 CFR 2.05."
        ],
        "correctIndex": 2,
        "image": "images/image513.jpg"
      },
      {
        "question": "Which VHF channel should be used for intership navigation safety communications?",
        "options": [
          "Ch.13",
          "Ch.16",
          "Ch.06",
          "Ch.12"
        ],
        "correctIndex": 0,
        "image": "images/image23.jpg"
      },
      {
        "question": "On board they want to send a safety-call to other vessels. The DSC safety-call:",
        "options": [
          "Has to contain a work-frequency",
          "Will automatically send the correct working frequency",
          "May contain a work-frequency",
          "May not contain a work-frequency"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which option best describes what target fusion is on an ECDIS?",
        "options": [
          "When a target's AIS signal has a large error on it",
          "The discrepancy between radar and AIS displayed positions.",
          "Bringing together a displayed radar return and AIS target",
          "When two adjacent AIS targets come together"
        ],
        "correctIndex": 2
      },
      {
        "question": "Your vessel is involved in a collision with another vessel. What should you as Master tell the Master on the other vessel?",
        "options": [
          "Explain your actions prior to the collision and request details of actions taken by the other vessel which resulted in the collision",
          "Name of vessel; IMO number; Port of registry; Port of destination of your vessel",
          "That their actions were totally wrong and it is their fault",
          "There should be no communication with the other vessel"
        ],
        "correctIndex": 1,
        "image": "images/image295.jpg"
      },
      {
        "question": "According to the International Labour Organisation, how often should lifting appliances and items of loose gear be thoroughly inspected by a competent person?",
        "options": [
          "Every 6 months.",
          "Every 5 years.",
          "Biannually.",
          "Annually."
        ],
        "correctIndex": 3,
        "image": "images/image507.jpg"
      },
      {
        "question": "You are in open water and clear conditions. You are approaching the pilot station when you hear this signal from a vessel ahead of you. What does it signify?",
        "options": [
          "That the vessel is altering its course to starboard",
          "That the vessel is picking up its pilot",
          "That the vessel is starting its engine and resuming its passage",
          "That the vessel is operating astern propulsion"
        ],
        "correctIndex": 3,
        "image": "images/image581.jpg"
      },
      {
        "question": "Non distress calls on 2182 kHz and VHF channel 16 should not exceed:",
        "options": [
          "Three minutes.",
          "Five minutes.",
          "One minute.",
          "Two minutes."
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "Dish aerials are used with:",
        "options": [
          "Inmarsat –C and –M",
          "Inmarsat –A and –C",
          "Inmarsat - B and –M",
          "None of the mentioned"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "On multi-purpose vessels, responsibility for the stowage and securing of containers is:",
        "options": [
          "Determined by the clauses of the charter-party.",
          "Always upon the attending cargo surveyor.",
          "Always upon the charterer of the vessel.",
          "Provided as per advice from the Supercargo."
        ],
        "correctIndex": 0,
        "image": "images/image961.jpg"
      },
      {
        "question": "'Own-ship' is to leave a crowded anchorage heading in the 'way out' direction as illustrated. The ship has a right-handed propeller and conventional rudder. What would be the safest manoeuvre?",
        "options": [
          "Back out dead slow then full astern, transverse thrust should cant the bow to starboard. If the ship steers astern use port rudder",
          "Full ahead, rudder hard to starboard",
          "Full ahead, rudder hard to port",
          "Rudder hard to starboard, full ahead. Rudder hard to port, full astern. Repeating this manoeuvre until the turn has been made."
        ],
        "correctIndex": 0,
        "image": "images/image515.jpg"
      },
      {
        "question": "When during transmitting the display of a radiotelephone-installation shows a decrease in transmitting power it is:",
        "options": [
          "An indication of aerial problem",
          "An indication of chosing a wrong channel",
          "An adjustment of the semi-duplex transmitting power",
          "An automatic adjustment of the chosen transmitting mode"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "For what period of time is the protection and environment committee elected?",
        "options": [
          "3 - 4 years.",
          "5 - 6 years.",
          "1 - 2 years.",
          "8 years."
        ],
        "correctIndex": 2,
        "image": "images/image89.jpg"
      },
      {
        "question": "Operator connected R/T calls are charged",
        "options": [
          "On the basis of a three minute minimum charge with one minute incremental steps",
          "On the basis of a six second minimum charge with six second incremental steps",
          "On the basis of a one minute minimum charge with one minute incremental steps",
          "On the basis of a six second minimum charge with one second incremental steps"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The battery of a SART:",
        "options": [
          "Must be re-charged weekly",
          "Charged condition must be checked weekly",
          "Must be replaced before the expiry date is exceeded",
          "Replaced monthly"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "\" On area A3 the function \"\" Transmission and reception of on scene communications\"\" is mainly based on:\"",
        "options": [
          "The use of MF and/or HF R/T",
          "The use of DSC and/or INMARSAT C",
          "The use of MF and/or VHF R/T",
          "The use of HF DSC"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "What is the purpose of the O.D.M.E. (Oil Discharge Monitoring Equipment) printer ?",
        "options": [
          "To prove fault conditions in the O.D.M.E",
          "To prove that oil has been pumped overboard according to regulations",
          "To prove that the O.D.M.E. system has been used",
          "None of the mentioned"
        ],
        "correctIndex": 1,
        "image": "images/image235.jpg"
      },
      {
        "question": "To get proper conversation discipline in maritime radio traffic:",
        "options": [
          "Every available VHF-channel should always be used",
          "Only necessary radio conversations are made in a concise and businesslike way",
          "Communication should be done only as per company's prescribed schedule",
          "Only after permission by captain, to send and/or receive on a VHF-channel pointed out the master"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "According to rule 13 of the International Regulations for Preventing Collisions at Sea, what is the definition of \"an overtaking vessel\"?",
        "options": [
          "When coming up with another vessel from a direction more than 22.5 degrees abaft its beam",
          "When coming up with another vessel from any direction abaft its beam",
          "When coming up with another vessel from a direction more than 45 degrees abaft its beam",
          "When the vessel is detected as a radar target or sighted visually in a position directly astern"
        ],
        "correctIndex": 0,
        "image": "images/image556.jpg"
      },
      {
        "question": "A distress alert has accidentally been sent with the Inmarsat-C installation. One should now:",
        "options": [
          "Wait until an RCC reports",
          "Make contact with an RCC",
          "Call the manager",
          "Turn off the transmitter"
        ],
        "correctIndex": 1,
        "image": "images/image12.jpg"
      },
      {
        "question": "A typical hazard associated with the carriage of ammonium nitrate is:",
        "options": [
          "Environmental pollution.",
          "Loss of ship stability.",
          "Spontaneous combustion.",
          "Explosion."
        ],
        "correctIndex": 3,
        "image": "images/image973.jpg"
      },
      {
        "question": "On all UMS operated vessels and also on most other vessels the engine room is equipped with fire detectors. What requirements of testing and checking of the detectors are to be observed?",
        "options": [
          "All the mentioned alternatives.",
          "When testing detectors by suitable equipment (smoke and heat) check that the sensors self controlling system, e.g. a flashing control light etc. is functioning.",
          "Check that the actual detector is giving appropriate signals to the central control unit and that all electric connections are in good order.",
          "Check the detector with heat and/or smoke (in accordance with instructions in its manual)"
        ],
        "correctIndex": 0,
        "image": "images/image86.jpg"
      },
      {
        "question": "The transmitting receiving method, when both stations can transmit and receive at the same time is called:",
        "options": [
          "Duplex",
          "Simplex",
          "None of the mentioned",
          "Semi-duplex"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which international convention deals with pollution prevention?",
        "options": [
          "ISGOTT.",
          "SOLAS.",
          "MARPOL.",
          "STCW."
        ],
        "correctIndex": 2,
        "image": "images/image81.jpg"
      },
      {
        "question": "*The correct order of actions to be taken in a fire emergency, should be...",
        "options": [
          "Evaluation of the situation, confinement of fire, rescue and life-saving, extinction",
          "Extinction, evaluation of the situation, confinement of fire, rescue and life-saving",
          "Extinction, confinement of fire, feed back on the emergency, rescue and life-saving, then evaluation of the situation",
          "Evaluation of the situation, rescue and life-saving, confinement of fire, extinction, then feed back on the emergency"
        ],
        "correctIndex": 3,
        "image": "images/image51.jpg"
      },
      {
        "question": "The reporting of incidents involving harmful substances and / or marine pollutants is regulated under:",
        "options": [
          "Annex II to SOLAS 1974.",
          "The UN Convention on the Reporting of Accidents and Incidents which Present a Hazard to the Marine Environment 2004.",
          "Protocol I of MARPOL.",
          "Appendix B of the Supplement to the IMDG Code."
        ],
        "correctIndex": 2,
        "image": "images/image522.jpg"
      },
      {
        "question": "Poster or signs shall be provided on or in the vicinity of survival craft and their launching controls. Which one of the following requirements has to be included?",
        "options": [
          "Give information on survival craft capacity",
          "Give relevant instructions and warnings",
          "Give information on survival craft speed and seaworthiness",
          "Give an overview of location of all lifesaving appliances"
        ],
        "correctIndex": 1,
        "image": "images/image50.jpg"
      },
      {
        "question": "How is a vessel's navigational safety maintained when sailing between ports?",
        "options": [
          "Having an effective passage plan followed by the bridge team",
          "Having the vessel guided by a VTS operation",
          "Using an ECDIS as the main source of navigation",
          "Only using traditional navigational techniques"
        ],
        "correctIndex": 0,
        "image": "images/image535.jpg"
      },
      {
        "question": "Which SOLAS certificate carried onboard has details of a vessel's bulkhead fire ratings?",
        "options": [
          "The MODU Safety Certificate.",
          "The Cargo Ship Safety Equipment Certificate.",
          "The Safety Management Certificate.",
          "The Cargo Ship Safety Construction Certificate."
        ],
        "correctIndex": 3,
        "image": "images/image572.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission, when transmitting a telex-message:",
        "options": [
          "G3E",
          "J3E",
          "F1B/J2B",
          "H3E"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "The prescribed test of an approved portable VHF radio set (portophone) must be done once a:",
        "options": [
          "Week",
          "Year",
          "Month",
          "Quarter"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "What factors should influence the speed set on a vessel when connecting up a tug?",
        "options": [
          "The location of the vessel and the type of fairleads that it has",
          "The type of tug and the size of its towline",
          "The type of tug and its desired position on the vessel",
          "It is best to stop the vessel completely before connecting, so there should be no speed"
        ],
        "correctIndex": 2,
        "image": "images/image555.jpg"
      },
      {
        "question": "The steps of the embarkation ladder used must be proportioned as it follows:",
        "options": [
          "length = 280 mm, breadth = 85 mm, depth = 10 mm",
          "length = 480 mm, breadth = 115 mm, depth = 25 mm",
          "length = 580 mm, breadth = 165 mm, depth = 30 mm",
          "length = 380 mm, breadth = 145 mm, depth = 20 mm"
        ],
        "correctIndex": 1,
        "image": "images/image65.jpg"
      },
      {
        "question": "New MARPOL regulations came into effect from July 93 stating that the oily water separator which was previously certified for 100 ppm be changed to:",
        "options": [
          "25 ppm",
          "10 ppm",
          "15 ppm",
          "50 ppm"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "Your vessel is proceeding along a narrow channel in front of another one. You hear this signal from the vessel behind you. What does it mean?",
        "options": [
          "I am faster than you. Get out of the way",
          "I intend to overtake you on your port side",
          "I intend to overtake you on your starboard side",
          "I am operating astern propulsion"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "A message is sent to a fax-machine. However the message cannot be delivered by the land earth station. The land earth station will:",
        "options": [
          "Will only send a non-delivery notification (NDN) to the sender if so requested by him",
          "Call the sender on telephone and inform",
          "Never send a non-delivery notification (NDN) message to the sender. The sender to verify if the message was received",
          "Automatically send a non-delivery notification (NDN) to the sender"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The emergency battery of a GMDDS portophone:",
        "options": [
          "Must be tested once a week",
          "Cannot be replaced",
          "Must be replaced before the expiry date is exceeded",
          "Must be charged after expiry date"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship sighting another ship in distress which is not itself in position to transmit a distress alert ?",
        "options": [
          "Distress relay call",
          "Safety call",
          "Urgent call",
          "Distress call"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of MF DSC",
          "The use of VHF DSC",
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image10.jpg"
      },
      {
        "question": "You can reduce the need for security guards in certain areas by installing:",
        "options": [
          "Metal detectors",
          "Anti-intruder devices",
          "Water cannons",
          "Vapour detectors"
        ],
        "correctIndex": 1,
        "image": "images/image88.jpg"
      },
      {
        "question": "\"Part way through a profiling interview with a supplier, the package the individual is carrying arouses your suspicion. What do you do?\"",
        "options": [
          "Call for help on the radio.",
          "Confront the individual and demand that he open the package.",
          "Discreetly inform someone of your suspicions so he or she can get assistance.",
          "Take the package and open it."
        ],
        "correctIndex": 2,
        "image": "images/image46.jpg"
      },
      {
        "question": "One wishes to have a telephone conversation with a person whose name is known. This is what is called:",
        "options": [
          "A collect call",
          "A direct call",
          "A personal call",
          "A call to a known person"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "Would the indicated ground speed be suitable when berthing a large vessel?",
        "options": [
          "The approach speed is way too fast, even for a vessel in ballast.",
          "The speed requirements are decided by the pilot and should not be the concern of the OOW.",
          "The indicated speed would be a normal speed approaching a berth.",
          "The approach speed is essential to maintain steerage when coming alongside"
        ],
        "correctIndex": 0,
        "image": "images/image528.jpg"
      },
      {
        "question": "The emergency fire pump is in accordance with good seamanship and precautionary routines run and tested weekly. Routine checks and maintenance are normally carried out by dedicated personnel. To ensure safe and appropriate operation of the pump, would you consider it beneficial that the same dedicated personnel operate the pump in emergencies?",
        "options": [
          "Only senior engineers should operate the emergency pump.",
          "Only senior deck officers should operate the emergency pump.",
          "To ensure safe operation of the emergency pump,only dedicated personnel must be permitted to operate the pump.",
          "In case of accidents, it is important that a wide range of personnel must be permitted and trained to operate the pump."
        ],
        "correctIndex": 3,
        "image": "images/image243.jpg"
      },
      {
        "question": "Which word will precede a routine message ?",
        "options": [
          "MAYDAY",
          "PAN PAN",
          "ROUTINE",
          "No specific word will precede a routine message"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "What is EPIRB an abbreviation for?",
        "options": [
          "Electronic Purpose If Rescue Begins.",
          "Emergency Position Indication Radio Buoy.",
          "Electronic Pressure Indication Radar Buoy.",
          "Emergency Position Indicating Radio Beacon."
        ],
        "correctIndex": 3,
        "image": "images/image22.jpg"
      },
      {
        "question": "Where should the VHF survival craft transceivers be located during normal operation of the ship ?",
        "options": [
          "Near the liferaft",
          "Near the gangway",
          "In the lifeboats",
          "On the bridge"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "Who is responsible for completing the DoS on behalf of the ship?",
        "options": [
          "Company Security Officer",
          "Chief Officer",
          "Chief Engineer",
          "Ship Security Officer"
        ],
        "correctIndex": 3,
        "image": "images/image152.jpg"
      },
      {
        "question": "When reasonable and practicable, how often shall rescue boats be launched with their assigned crew aboard and manoeuvred in the water?",
        "options": [
          "Every month",
          "Every week",
          "Every two weeks",
          "Every six months"
        ],
        "correctIndex": 0,
        "image": "images/image115.jpg"
      },
      {
        "question": "With an Inmarsat-C installation there is the addressing-option \"special\". Via this option:",
        "options": [
          "You can send a message by express delivery",
          "Give one of Inmarsat's \"special access codes\"",
          "You can plan a message to be delivered at a special time",
          "You can deliver a message via a special telegram"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Whilst sailing through a narrow coastal passage, an ECDIS alarm indicates that number 1 GPS HDOP value is outside set limits. What should happen on the bridge?",
        "options": [
          "The watchkeeper should call the master and then adjust the limit so that the alarm is removed",
          "The ECDIS should be switched off as it will now be in DR mode and misleading to the bridge team",
          "The receiver should be checked and the vessel's position confirmed by other means",
          "Number 2 GPS should be selected as the primary receiver and the number 1 GPS switched off"
        ],
        "correctIndex": 2,
        "image": "images/image295.jpg"
      },
      {
        "question": "A distress alert sent by Inmarsat to an RCC is sent via:",
        "options": [
          "NCS",
          "LES",
          "The managers office",
          "LUT"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "A passage plan should indicate ways to fix position, and include which of the following methods?",
        "options": [
          "Visual navigation using land marks or celestial bodies",
          "Radar ranges with parallel indexing",
          "Position information from electronic systems",
          "All of these suggested answers"
        ],
        "correctIndex": 3,
        "image": "images/image487.jpg"
      },
      {
        "question": "You wish to carry out a test transmission on your radio equipment. What precautions should be taken if any?",
        "options": [
          "Test transmission should be carried out on artificial aerials and/or reduced power.",
          "Listen out to ensure that no safety/distress traffic is in progress.",
          "All of the items in the other alternatives should be done.",
          "Test transmission should be kept to a minimum."
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "What can lead to \"Unlimited responsibility\" (OPA-90)",
        "options": [
          "Wilful misconduct and gross negligence",
          "Only wilful misconduct",
          "Only gross negligence",
          "Wilful misconduct, gross negligence and violation of Federal Safety"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "Although not required by the IMDG Code, on a container vessel, carrying Calcium Hypochlorite under refrigeration is beneficial so as to:",
        "options": [
          "Ensure the cargo is shipped in a clean container.",
          "Prevent the cargo temperature increasing into the danger zone.",
          "Maintain a record of the temperature of the cargo.",
          "Maintain a continuous air flow through the cargo."
        ],
        "correctIndex": 1,
        "image": "images/image810.jpg"
      },
      {
        "question": "Which word will precede an urgency message ?",
        "options": [
          "PAN",
          "PAN PAN",
          "MAYDAY",
          "URGENCE"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding the stowage of a survival craft corresponds to present SOLAS regulations? Each survival craft shall be stowed:",
        "options": [
          "In a secure and sheltered position and protected from damage by fire or explosion.",
          "On the starboard side of the ship.",
          "In a state of readiness so that two crew-members can prepare for embarkation and launching in less than 15 minutes.",
          "Wherever space is available."
        ],
        "correctIndex": 0,
        "image": "images/image79.jpg"
      },
      {
        "question": "What is a \"passenger\" according to SOLAS regulations?",
        "options": [
          "Any person holding a ticket and travelling with a passenger ship",
          "Everyone who travels with a passenger ship",
          "Every person other than the Captain and the members of the crew or other persons employed or engaged onboard the ship in the business of that ship.",
          "Any person paying their voyage regardless of ship type"
        ],
        "correctIndex": 2,
        "image": "images/image159.jpg"
      },
      {
        "question": "The display of a radiotelephone-installation shows the following selections: Transmitting mode: H3E Transmitting frequency: 2187,5 kHz The transmitting mode indicator is \"flashing\". This can mean that:",
        "options": [
          "The transmitting mode is not compatible with the chosen frequency",
          "The \"H3E\"mode is to be selected before transmitting on the 2187,5 kHz band",
          "You are ready to press the send buuton",
          "The radiotelephone-alarm signal must be transmitted now"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "What signal may be given by sound and by light to indicate that a vessel fails to understand the intentions or actions of another vessel, or is in doubt that sufficient action is being taken by the other to avoid collision?",
        "options": [
          "Three short and rapid blasts (flashes)",
          "Five prolonged blasts (flashes)",
          "One prolonged blast (flash), followed by five or more short and rapid blasts (flashes)",
          "Five short and rapid blasts (flashes)"
        ],
        "correctIndex": 3,
        "image": "images/image581.jpg"
      },
      {
        "question": "A wire aerial for an MF/HF –transmitter must be suspended between isolators:",
        "options": [
          "To prevent burns when touching the aerial",
          "To save energy",
          "To prevent contact with earth",
          "To make the way for aerial currents as long as possible"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "You are onboard a vessel off the West African coast. You want to dump a mixture of food waste, glass bottles and floating packing materials. Is this allowed? and if so, how far off the coast would you have to be?",
        "options": [
          "3 nautical miles off the coast",
          "This is prohibited",
          "12 nautical miles off the coast",
          "25 nautical miles off the coast"
        ],
        "correctIndex": 1,
        "image": "images/image117.jpg"
      },
      {
        "question": "How often must inspection of proper working of the EPIRB 's and SART 's take place on board? Once per:",
        "options": [
          "Month",
          "Week",
          "Every day",
          "14 days"
        ],
        "correctIndex": 0,
        "image": "images/image5.jpg"
      },
      {
        "question": "What are the main advantages to the Navstar, Glonas and Galileo satellite navigation systems?",
        "options": [
          "These satellite systems give world-wide coverage 24 hours a day",
          "They are all made specifically for ships and marine operations",
          "Satellite navigation systems also give information about weather and wave conditions",
          "If a vessel uses any one of them, there is no need to practice other forms of navigation"
        ],
        "correctIndex": 0,
        "image": "images/image493.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 401-500",
    "questions": [
      {
        "question": "When should a crew member joining a ship for the first time be given some training and instructions in the use of the ship's fire-fighting appliances ?",
        "options": [
          "As soon as possible",
          "As soon as possible but not later than 2 weeks after he joins the ship",
          "As soon as possible but not later than 24 hours after he joins the ship",
          "As soon as possible but not later than 2 days after he joins the ship"
        ],
        "correctIndex": 1,
        "image": "images/image119.jpg"
      },
      {
        "question": "Which international organization is preparing conventions and rules for seafaring nations?",
        "options": [
          "International Ocean Safety Organization (IOSO)",
          "International Labor Organization (ILO)",
          "International Maritime Organization (IMO)",
          "International Marine Association (IMA)"
        ],
        "correctIndex": 2,
        "image": "images/image161.jpg"
      },
      {
        "question": "Distress MF communications should normally be operated :",
        "options": [
          "In J3E mode – on simplex basis",
          "In J3E mode – on duplex basis",
          "In G3E mode – on simplex basis",
          "In G3E mode – on duplex basis"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The mode J2B is used:",
        "options": [
          "For urgent message transmitting and receiving",
          "In public broadcasting",
          "For telephone traffic in the MF/HF bands between ship and shore stations",
          "For radiotelex-traffic in the MF/HF band between the ship and shore stations"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "A hand flare must have a burning period of at least",
        "options": [
          "10 Min",
          "5 Min",
          "30 Sec",
          "1 Min"
        ],
        "correctIndex": 3,
        "image": "images/image170.jpg"
      },
      {
        "question": "For which of the following ships, is the MARPOL convention applicable?",
        "options": [
          "For tankers and other vessels carrying persistent oil as cargo.",
          "For all listed vessels.",
          "For all vessels except passenger vessels.",
          "For all vessels except those engaged in coastal trade."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "Which of these statements about profiling is correct?",
        "options": [
          "Pay less attention to body language and behaviour and more attention to answers to questions.",
          "Use only open-ended questions.",
          "Verify that answers to questions match up with what's already known about the person being questioned.",
          "Check the ID of all visitors and some crew prior to boarding."
        ],
        "correctIndex": 2,
        "image": "images/image63.jpg"
      },
      {
        "question": "If whistles are fitted on a vessel at a distance apart of more than 100 metres, will manoeuvring and warning signals, as defined by rule 34 of the International regulations for Preventing Collisions at Sea, be given on one or both whistles?",
        "options": [
          "Manoeuvring signals will be given only on the forward whistle; warning signals will be given on both whistles simultaneously",
          "They shall be given on one whistle only",
          "They shall first be given on the forward whistle, followed by the after whistle, with a 5 second inetrval in between",
          "They shall be given on both whistles simultaneously"
        ],
        "correctIndex": 1,
        "image": "images/image486.jpg"
      },
      {
        "question": "Why does a ship with ahead or astern speed, have a small lateral or sideways movement when turning.",
        "options": [
          "Because the rudder is positioned at the stern of the vessel",
          "The ship moves laterally because of all the external forces on the vessel hull caused by the environment and possibly a tug",
          "The ship moves laterally because it has a single hull",
          "The hydrodynamics of the hull cause a drift angle to be produced, which is not in the fore and aft line of the vessel"
        ],
        "correctIndex": 3,
        "image": "images/image503.jpg"
      },
      {
        "question": "If a coast-station doesn't answer a call on VHF working channel or doesn't send a reply signal:",
        "options": [
          "You can repeat your call immediately when convinced that no other radio traffic is interfered with",
          "You must call on another working channel",
          "You can repeat your call after 2 minutes",
          "You must call on distress channel"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "The OPA-90 notification requirement is:",
        "options": [
          "Notify as soon as you have knowledge of any spill, or threat of a spill",
          "Notify only if you mean that own vessel might be tracked and charged",
          "Notify only if you mean that own vessel might be responsible",
          "Notify as soon as you have knowledge of a spill exceeding 10 gallons of oil"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "What is a contingency plan for ships?",
        "options": [
          "Plan for next voyage",
          "Plan for maintenance and repair",
          "Loading plan for general cargo",
          "Plan for safety preparedness"
        ],
        "correctIndex": 3,
        "image": "images/image43.jpg"
      },
      {
        "question": "Which of this information must be included in a piracy attack alert?",
        "options": [
          "The type of weapons being carried by the pirates/highjackers.",
          "The number of pirates/highjackers.",
          "The number of crew onboard.",
          "Your ship's name and call sign."
        ],
        "correctIndex": 3,
        "image": "images/image69.jpg"
      },
      {
        "question": "What is the acronym FR 01 ?",
        "options": [
          "MMSI",
          "AAIC",
          "MSI",
          "Call sign"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "Your vessel is not in distress and not taking part in a distress operation. How would you impose radio silence on vessels which are interfering the distress traffic?",
        "options": [
          "Seelonce Mayday",
          "Seelonce Distress",
          "Seelonce Securite",
          "Seelonce Pan"
        ],
        "correctIndex": 1,
        "image": "images/image14.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain medical advice ?",
        "options": [
          "38",
          "32",
          "26",
          "42"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "When using an ENC chart to passage planning, why should a scale at or near its compilation scale always be used?",
        "options": [
          "It is only at this scale that route validation is possible",
          "That is incorrect, as any ENC can be zoomed in or out for passage planning",
          "It is only at this scale that a route can be plotted",
          "The chart detail is correct for its usage band"
        ],
        "correctIndex": 3,
        "image": "images/image487.jpg"
      },
      {
        "question": "MARPOL - Annex I. Your vessel sailed from Bahrain heading for Singapore. 2 days after departure, you would like to empty your machinery space bilges. What will be the correct procedures in this connection?",
        "options": [
          "Discharge overboard through oily-water separating and filtering equipment without calling the bridge.",
          "Wait till after darkness and discharge in most convenient way.",
          "Call the bridge and request for position and permission to discharge overboard through oily water separating and filtering equipment.",
          "Call the bridge and request for position and permission to discharge directly overboard."
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "What are the functions of a flag state administration?",
        "options": [
          "The have responsibility for ensuring that ships are correctly manned and that crews' terms and conditions of employment are met satisfactorily",
          "They have responsibility for setting, monitoring and enforcing standards of safety and pollution prevention on vessels flying the countries flag",
          "They have responsibility for ensuring that ships are properly registered",
          "The maintain a record of all ship and their crews, and produce statistics involving ships from their country."
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "Why is it important to make weekly/routine rounds in the accomodation areas?",
        "options": [
          "To search for any contraband goods hidden on board",
          "To check for alcohol in cabins",
          "To ensure that cabins and common spaces are maintained in a clean, safe and hygienic condition",
          "It is a requirement as per flag state"
        ],
        "correctIndex": 2,
        "image": "images/image240.jpg"
      },
      {
        "question": "How can an ARPA best assist the bridge team to steer a suitable course to make good the entrance to a channel?",
        "options": [
          "Alter course so that own-ships ground stabilised true vector passes through the entrance to the channel",
          "Use the mapping facility provided by the ARPA, create a map of the channel then display it for entry",
          "Alter course so that own-ships water stabilised true vector passes through the entrance to the channel",
          "Acquire a buoy at the entrance to the channel and alter course to make the relative vector of the buoy point at own-ship"
        ],
        "correctIndex": 0,
        "image": "images/image586.jpg"
      },
      {
        "question": "When manoeuvring a conventional ship, if the engine is stopped with the rudder hard over what happens to the rudder turning force?",
        "options": [
          "It may increase due to a better laminar flow on the rudder",
          "Anything might happen as it depends upon the type of specialised rudder fitted",
          "It stays the same as the rudder angle is unchanged",
          "It is reduced because of the reduced water acting on the rudder"
        ],
        "correctIndex": 3,
        "image": "images/image520.jpg"
      },
      {
        "question": "To announce an important navigational –or meteorological warning via the VHF-installation, one should use the:",
        "options": [
          "Individual call",
          "Distress call",
          "Urgency call",
          "Safety call"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "You have received the nine digit MMSI of a ship on your DSC equipment. In which publication will you find the name of the ship?",
        "options": [
          "The ITU List of Callsigns and Numerical Identities of Stations used by the Maritime Mobile and Maritime Mobile-Satellite Services",
          "The ITU List of Radiodetermination and Special Services",
          "The ITU List of Ship Stations",
          "The ITU List of Coast Stations"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "The good operation in any location, whether the NAVTEX is working properly or not, can be checked using:",
        "options": [
          "A compulsory built-in alarm for defects",
          "Test transmissions specially broadcast for this purpose once a week",
          "A company test procedure",
          "A testing program built in for this purpose"
        ],
        "correctIndex": 3,
        "image": "images/image20.jpg"
      },
      {
        "question": "The prescribed periodic tests of the radio set must be entered in:",
        "options": [
          "Manual maritime radio communication",
          "Ship's deck log",
          "Radio Log",
          "Equipment manual"
        ],
        "correctIndex": 2,
        "image": "images/image6.jpg"
      },
      {
        "question": "When a vessel berths with a beam current, what happens to the force exerted by the current if the underkeel clearance is very much reduced?",
        "options": [
          "It will remain unchanged because the force is a function of the length of the vessel",
          "It rises very considerably because of the shallow water under the hull",
          "It reduces because the hull acts to block the flow of current",
          "It will remain unchanged because the force is a function of the current speed"
        ],
        "correctIndex": 1,
        "image": "images/image544.jpg"
      },
      {
        "question": "Only search vehicle compartments where you suspect objects may be hidden.",
        "options": [
          ".",
          ".",
          "FALSE",
          "TRUE"
        ],
        "correctIndex": 2,
        "image": "images/image75.jpg"
      },
      {
        "question": "The compulsory testing of a prescribed EPIRB is to be done:",
        "options": [
          "Once a year",
          "Once a week",
          "Once in 4 years",
          "Once a month"
        ],
        "correctIndex": 3,
        "image": "images/image15.jpg"
      },
      {
        "question": "During abandon ship exercise, what life-saving equipment must be demonstrated?",
        "options": [
          "Lifeboat radio",
          "Location of immersion suits and thermal protective aids",
          "Wearing and fastening of lifejackets and associated equipment",
          "How to communicate using the hand-held radios"
        ],
        "correctIndex": 2,
        "image": "images/image52.jpg"
      },
      {
        "question": "Who is responsible that regulatory working hours are not exceeded?",
        "options": [
          "The safety officer.",
          "The individual person.",
          "The bosun and the second engineer.",
          "The master and department heads."
        ],
        "correctIndex": 3,
        "image": "images/image60.jpg"
      },
      {
        "question": "Information about your ship's security arrangements and procedures is stored electronically. Which of these measures will help safeguard it from potential threats?",
        "options": [
          "Protective markings",
          "Passwords",
          "Encoded email messages",
          "Work history verification"
        ],
        "correctIndex": 1,
        "image": "images/image92.jpg"
      },
      {
        "question": "A distress alert on board may only be transmitted on explicit order of:",
        "options": [
          "The captain",
          "The radio officer",
          "The navigating officer on duty",
          "The safety officer"
        ],
        "correctIndex": 0,
        "image": "images/image14.jpg"
      },
      {
        "question": "\" What is the meaning of the abbreviation \"\"RQ\"\" at the end of a DSC sequence?\"",
        "options": [
          "End of sequence",
          "Acknowledgement request",
          "Problem of transmission",
          "Acknowledgment broadcast"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "MARPOL - Annex V. Disposal of garbage. Your vessel is in the Red Sea (Special Area) and the Chief Cook is requesting to have some food waste burned in the incinerator. Due to problems with incinerator, you decide to have the waste ground in the Grinder (Lump size max. 25 mm) and disposed off into the sea. Is this prohibited, if not, how far from nearest land is this legal?",
        "options": [
          "This is prohibited",
          "25 miles",
          "3 miles",
          "12 miles"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "A SART is used by a vessel in distress. This SART is seen on the screen of a:",
        "options": [
          "3 Cm radar",
          "10 Cm radar",
          "Special radar",
          "Both 3 Cm and 10 Cm radar"
        ],
        "correctIndex": 0,
        "image": "images/image5.jpg"
      },
      {
        "question": "Hand flares and buoyant smoke signals can continue to burn or emit smoke after having been immersed for a period of 10s",
        "options": [
          "Wrong",
          "Right",
          "Right if the immersion depth is smaller than 100 mm",
          "Right if the immersion depth is more than 1m"
        ],
        "correctIndex": 2,
        "image": "images/image242.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "EPIRB",
          "Survival craft distress pyrotechnic signals",
          "Survival craft portable radio",
          "Rocket parachute flares"
        ],
        "correctIndex": 3,
        "image": "images/image231.jpg"
      },
      {
        "question": "What rules and regulations are regulating the watch keeping routines in the engine room?",
        "options": [
          "SOLAS",
          "Both STCW and Class rules",
          "Class Rules",
          "International Standard for Training and Watch keeping (STCW)"
        ],
        "correctIndex": 1,
        "image": "images/image62.jpg"
      },
      {
        "question": "*You are on board a cargo ship. The ship is heavily listing to starboard, making impossible the launching of the survival craft stowed on this side. Lifeboats and liferafts are equally distributed on each side of the vessel. What should be the total number of persons that can be accommodated in the remaining survival craft stowed on the port side ? (*) N is the total number of persons that vessel is permitted to carry.",
        "options": [
          "at least 100 % N (lifeboat capacity: 50 % N; liferaft capacity: 50 % N) (*)",
          "at least 150 % N (lifeboat capacity: 50 % N; liferaft capacity: 100 % N) (*)",
          "at least 200 % N (lifeboat capacity: 100 % N; liferaft capacity: 100 % N) (*)",
          "at least 150 % N (lifeboat capacity: 100 % N; liferaft capacity: 50 % N) (*)"
        ],
        "correctIndex": 2,
        "image": "images/image48.jpg"
      },
      {
        "question": "How are the effects of squat seen on a moving vessel?",
        "options": [
          "There will be an increase in the vessels draught while moving through the water",
          "There will be a change of draught and a reduction in the speed.",
          "Heel can result on a vessel with a large block coefficient and a speed reduction",
          "There will be a reduction of the vessel's underkeel clearance and a possible change of trim."
        ],
        "correctIndex": 3,
        "image": "images/image547.jpg"
      },
      {
        "question": "According to Rule 26 of the International Regulations for Preventing Collisions and the illustrated lights, what type of vessels are they?",
        "options": [
          "These are two vessels engaged in fishing (pair trawling), showing the additional volutary signals for hauling nets",
          "These are two vessels engaged in fishing (pair trawling), showing the additional voluntary signals for shooting nets",
          "This is a vessel engaged in towing a disabled tow, restricted in its ability to manoeuvre, with a searchlight used to highlight the location of the tow",
          "These are two vessels engaged in fishing, using purse-seine gear. The searchlights are simply working lights"
        ],
        "correctIndex": 0,
        "image": "images/image587.jpg"
      },
      {
        "question": "What is the world-wide system operated by the US Coast Guard exclusively in support of search and rescue operations?",
        "options": [
          "The U.S. Command and Control Rescue (USCOMR) Service",
          "The Worldwide Maritime Mutual Assistance Programme (WMMAP)",
          "The Automated Mutual-Assistance Vessel Rescue (AMVER) System",
          "The International Search and Rescue Coordination System"
        ],
        "correctIndex": 2,
        "image": "images/image502.jpg"
      },
      {
        "question": "Your vessel is power-driven and making way in open water. This vessel is sighted wide on the port bow. It's bearing is opening, but its distance is closing rapidly. Which of the following is a correct assessment of the situation and the action to be taken?",
        "options": [
          "Risk of collision is a possibility. I will maintain my course and speed for now, but be prepared for an alteration of course to port if the CPA seems to be less than 0.2nm as we draw closer",
          "Risk of collision is deemed not to exist and I will maintain my course and speed. I will continue to monitor the situation",
          "Risk of collision is deemed to exist and I will make a broad alteration of course to starboard, sounding one short blast. I will re-assess the situation when the alteration is carried out",
          "Risk of collision is deemed not to to exist. However, to be sure of a safe passing distance, I will reduce my speed to allow the other vessel to pass ahead"
        ],
        "correctIndex": 1,
        "image": "images/image494.jpg"
      },
      {
        "question": "Under the IMO ECDIS requirements, what are the three minimum inputs required?",
        "options": [
          "Position fixing, heading and speed information",
          "Gyro heading, compass heading and position information",
          "Position fixing, radar over-lay and log value",
          "Log speed, distance run and position information"
        ],
        "correctIndex": 0
      },
      {
        "question": "Under GMDSS which VHF channel is used for Digital Selective Calling (DSC)?",
        "options": [
          "Ch.06",
          "Ch.16",
          "Ch.70",
          "Ch. 13"
        ],
        "correctIndex": 2,
        "image": "images/image17.jpg"
      },
      {
        "question": "The best way to ensure you get the equipment you need is to:",
        "options": [
          "Buy the most expensive equipment on the market.",
          "Buy what everyone else is buying.",
          "Buy the newest models.",
          "Determine your needs and do some research."
        ],
        "correctIndex": 3,
        "image": "images/image70.jpg"
      },
      {
        "question": "At sea there is a container adrift which can be a danger for navigation. The call starts with:",
        "options": [
          "URGENT (3x)",
          "PAN PAN (3x)",
          "MAYDAY (3x)",
          "SECURITE (3x)"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "You are taking fuel on your vessel in the US when you notice oil on the water around your vessel. You are to stop taking fuel and:",
        "options": [
          "Begin clean up operations",
          "Notify the US Coast Guard",
          "Leave the area",
          "Notify the Corps of Engineers"
        ],
        "correctIndex": 1,
        "image": "images/image262.jpg"
      },
      {
        "question": "The best way to prevent stowaways from boarding your ship is to:",
        "options": [
          "Search the ship when you arrive at port and again just after leaving.",
          "\"Conduct routine, but irregular searches of the ship.\"",
          "\"Seal spaces that are not in use while in port, and perform a search of the ship before leaving.\"",
          "Conduct a Nominated Officers search."
        ],
        "correctIndex": 2,
        "image": "images/image132.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: RX: 002442000  ; Ch87 ; D Sellcall  Routine  We're asked to listen on:",
        "options": [
          "Radio telephony-channel 7 in the 8 MHz band",
          "VHF- channel 16",
          "VHF- channel 87",
          "Channel Delta of the coast station"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The word SATCOM is spelled conform the international phonetic alphabet:",
        "options": [
          "Sierra, Alfa, Tango, Charlie, Oscar, Mike",
          "Sierra, Able, Tango, Cornelies, Oslo, Man",
          "Sierra, Anna, Tango, Cornelies, Oslo, Mike",
          "Sierra, Able, Tripoli, Charlie, Oscar, Mike"
        ],
        "correctIndex": 0,
        "image": "images/image1.jpg"
      },
      {
        "question": "Which of following items shall be included in an abandon ship drill?",
        "options": [
          "Checking the distress signal rockets and other distress signals",
          "Checking passenger's immersion suits",
          "instruction in the use of radio life-saving appliances",
          "Checking the lifeboat provisions and supplies"
        ],
        "correctIndex": 2,
        "image": "images/image80.jpg"
      },
      {
        "question": "The aerial system of an Inmarsat-C terminal consist of:",
        "options": [
          "A rod aerial",
          "An omni-directional aerial",
          "A flexible wire aerial",
          "A dish aerial"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "When on HF band a DSC distress alert is received, you have to listen to:",
        "options": [
          "The radio-telex distress frequency in the band in which the DSC distress alert was received",
          "2182 KHz",
          "The radio telephony distress frequency in the band in which the DSC distress alert was received",
          "8414.5 kHz (DSC distress frequency in 8 MHz)"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "Code signals concerning requests and general information on medical matters normally consist of:",
        "options": [
          "Letter P plus two other letters.",
          "Letter M plus two other letters.",
          "Letter D plus two other letters.",
          "Letter H plus two other letters."
        ],
        "correctIndex": 1,
        "image": "images/image16.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "Survival craft portable radio",
          "Survival craft distress pyrotechnic signals",
          "Rocket parachute flare",
          "EPIRB"
        ],
        "correctIndex": 3,
        "image": "images/image233.jpg"
      },
      {
        "question": "Regular 'updating' of a ships' position in an Inmarsat-C installation is necessary",
        "options": [
          "To have the correct position in case of accidents",
          "To enter the correct data to the disk antenna",
          "To keep to the correct Inmarsat-region",
          "To inform the satellite of ships position"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "In the situation illustrated with a vessel turning a bend in a narrow river, what outside forces effect the handling of the vessel?",
        "options": [
          "None, as the river flow will be fairly uniform guiding the vessel",
          "The only force from the outside on the vessel will be bottom effect, because the river is likely to be quite shallow",
          "The only likely outside force effecting the vessel will be from wind and river flow",
          "Bow and stern attraction/rejection force caused by the closeness of the river sides"
        ],
        "correctIndex": 3,
        "image": "images/image561.jpg"
      },
      {
        "question": "\" On area A4 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of HF DSC and COSPAS SARSAT Epirbs",
          "The use of HF DSC and INMARSAT Epirbs",
          "The use of MF DSC and INMARSAT Epirbs",
          "The use of VHF DSC and VHF Epirbs"
        ],
        "correctIndex": 0,
        "image": "images/image39.jpg"
      },
      {
        "question": "A DSC distress alert single frequency call attempt is awaiting acknowledgement:",
        "options": [
          "Automatically repeated after 3 and a half to 4 and a half minutes",
          "Not repeated automatically",
          "Automatically repeated after 1 to 1 and a half minutes",
          "Repeated manually when required"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A Cargo Ship Equipment Certificate will be issued for:",
        "options": [
          "4 years",
          "5 years with control every 12 months",
          "3 years",
          "2 years with control every 6 months"
        ],
        "correctIndex": 1,
        "image": "images/image114.jpg"
      },
      {
        "question": "Do the bridge team have to create a passage plan for transiting a canal or river where there will be an authorised pilot onboard?",
        "options": [
          "A passage plan is always required, even with an authorised pilot",
          "A passage plan is required for all deep sea passages, but not for transiting a canal under pilotage",
          "A passage plan is required only when there is no pilot on board",
          "A passage plan is only required up to the destination pilot station"
        ],
        "correctIndex": 0,
        "image": "images/image508.jpg"
      },
      {
        "question": "Who is responsible for the development of the Ship Security Plan?",
        "options": [
          "The Port Facility Security Officer",
          "The Company Security Officer",
          "The Ship Security Officer",
          "The Classification Society."
        ],
        "correctIndex": 1,
        "image": "images/image131.jpg"
      },
      {
        "question": "\"From the list below, which is among the recommended actions for a vessel to take, on entering an area known for pirate activity?\"",
        "options": [
          "To transit at night time only",
          "To confine all ship's personnel to one room onboard",
          "To turn off all lights",
          "To transit with maximum safe speed"
        ],
        "correctIndex": 3,
        "image": "images/image72.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions, when a ship is being overtaken by another while proceeding along a river. What should be the required procedure?",
        "options": [
          "There should be no overtaking in these confined waters",
          "The overtaking vessel can overtake but must allow sufficient space to reduce the interaction between the two vessels",
          "The overtaking vessel should request permission from the other ship by sounding two prolonged blasts followed by two short blasts on the whistle or by direct VHF contact",
          "The overtaking vessel should request permission to overtake from the Port Control VTS"
        ],
        "correctIndex": 2,
        "image": "images/image591.jpg"
      },
      {
        "question": "What type of vessel would show the illustrated lights?",
        "options": [
          "A sailing vessel of less than 10 metres in length, displaying the mandatory combined lantern inlieu of sailing lights, seen head-on",
          "A sailing vessel, seen from astern, where the edges of her sidelights are both visible",
          "A sailing vessel less than 20 metres in length, displaying the optional combined lantern in lieu of standard sailing lights, seen head-on",
          "A sailing vessel, at anchor"
        ],
        "correctIndex": 2,
        "image": "images/image492.jpg"
      },
      {
        "question": "Which option best describes what is meant by the Consistent Common Reference Point on a vessel.",
        "options": [
          "It is a term associated the ECDIS time constant",
          "It is a point on the vessel common to all position related sensors",
          "It is a position that the GPS aerial is in",
          "It is a position that the radar scanner is in"
        ],
        "correctIndex": 1
      },
      {
        "question": "To get priority with radio-communication, one must notify the coast-station that the call is:",
        "options": [
          "A personal call",
          "A collect call",
          "An urgent call",
          "A priority calll"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "With a Relative Motion radar Display, what would an echo of a target with no trail indicate? Note that this is a target trail, not a vector",
        "options": [
          "The target is on a collision course with own ship",
          "The target is on a constant bearing and getting closer to own ship",
          "The target is stopped and making no way through the water",
          "The target is on the same course and speed as own ship"
        ],
        "correctIndex": 3,
        "image": "images/image490.jpg"
      },
      {
        "question": "Who is responsible for the regular security inspections of the ship?",
        "options": [
          "The Port Facility Security Officer",
          "The Company Security Officer",
          "The Ship Security Officer",
          "The Classification Society."
        ],
        "correctIndex": 2,
        "image": "images/image60.jpg"
      },
      {
        "question": "A personal call means that:",
        "options": [
          "The applicant on board request the coast-station to personally guard the conversation with the shore subscriber",
          "The applicant on board wishes to have a conversation with a person whose name is known",
          "The applicant on board request the coastal station to bring about a conversation with a shore subscriber by means of a scrambler",
          "The applicant wants the call to be charged to some other person"
        ],
        "correctIndex": 1,
        "image": "images/image1.jpg"
      },
      {
        "question": "What percentage of the baggage is required to be checked at Security Level 1?",
        "options": [
          "100% of the baggage is required to be checked at Security Level 1.",
          "The percentage is not specified.",
          "5-15% of the baggage is required to be checked at Security Level 1.",
          "25-50% of the baggage is required to be checked at Security Level 1."
        ],
        "correctIndex": 1,
        "image": "images/image165.jpg"
      },
      {
        "question": "The log-in of an Inmarsat-C installation is important:",
        "options": [
          "To inform the LES, that one is available for messages offered",
          "To inform the addressee, that one is available for messages offered",
          "To keep watch on Sat-C for safety messages",
          "To inform the NCS that one is available for messages offered"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Via Inmarsat-C a message is sent to an Inmarsat-C mailbox with a positive delivery notification (PDN). The ground station will:",
        "options": [
          "Send no PDN's with messages intended for the mailbox",
          "Send a PDN, as soon as the message is collected from the mailbox",
          "Not send any PDN for this message",
          "Send a PDN, if the message has arrived in the mailbox"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The Urgency Message from a ship is used to notify other traffic of a situation where the ship is not in imminent danger, but where the development of the situation is uncertain and may need assistance in the near future. What is the telephony urgency message like?",
        "options": [
          "SECURITE",
          "PAN-PAN",
          "MAYDAY",
          "RESCUE-RESCUE"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "A MMSI number consist of:",
        "options": [
          "9 digits",
          "The call sign followed by 4 digits",
          "6 digits",
          "10 digits"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "A wire antenna of 12 metres in length is probably:",
        "options": [
          "A Sat-C antenna",
          "A MF/HF-antenna",
          "A VHF-antenna",
          "An Inmarsat-antenna"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Whilst on passage, what type of position monitoring is conventionally considered to be the most suitable?",
        "options": [
          "A satellite system plotted on ECDIS or a paper chart",
          "Traditional forms of position fixing that are more trustworthy that satellite",
          "Gyro compass bearings from two lighthouses or fixed marks",
          "One that employs more than one position fixing system"
        ],
        "correctIndex": 3,
        "image": "images/image247.jpg"
      },
      {
        "question": "Notification logging procedures .(OPA-90)",
        "options": [
          "Only communication with USCG",
          "Only verbal reports for documentation",
          "Only initial reports to be logged",
          "Every report or message must be logged including time and date"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "What IMO conventions take care of the human safety at sea?",
        "options": [
          "It is the MARPOL conventions that take care of the human safety at sea",
          "It is the STCW 78/95 that take care of the human safety at sea",
          "It is the SOLAS conventions that take care of the human safety at sea",
          "There isn't any conventions that take care of the human safety at sea"
        ],
        "correctIndex": 2,
        "image": "images/image76.jpg"
      },
      {
        "question": "The number of frequencies on which a MF/HF-DSC distress alert multi-frequency call attempt can be transmitted is:",
        "options": [
          "6",
          "2",
          "5",
          "3"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "If drugs are discovered onboard your ship....",
        "options": [
          "Disembark crew and passengers as quickly as possible at the next port of call so the authorities can conduct their investigation.",
          "Notify the authorities after you arrive at the next port of call.",
          "Ensure the witness to the discovery signs your incident report.",
          "Write a report a few days after the event and describe everything that occurred."
        ],
        "correctIndex": 2,
        "image": "images/image137.jpg"
      },
      {
        "question": "When a SOLAS vessel is required to have an emergency tow, what would be the best way to connect a tug?",
        "options": [
          "Using a bridle made up from the vessel's anchor chains",
          "With the towline led around the base of the windlass pedestal and shackled off",
          "Using the vessel's emergency towing arrangement",
          "With the towline turned up on a set of bits on the forecastle deck"
        ],
        "correctIndex": 2,
        "image": "images/image583.jpg"
      },
      {
        "question": "How does the International Regulations for Preventing Collisions define a 'vessel restricted in her ability to manoeuvre'?",
        "options": [
          "A vessel which through some exceptional circumstance is unable to manoeuvre as required by the Rules and is therefore unable to keep out of the way of another vessel",
          "A vessel which from the nature of her work is restricted in her ability to manoeuvre as required by the Rules and is therefore unable to keep out of the way of another vessel",
          "A vessel engaged in underwater work, such as the laying, picking up or servicing of a pipeline, or which is in support of diving operations, performing dredging and mine-clearance or is deploying or recovering a pilot",
          "A vessel which because of her draught in relation to the available depth of navigable water is restricted in her ability to deviate from her course and keep out of the way of another vessel"
        ],
        "correctIndex": 1,
        "image": "images/image525.jpg"
      },
      {
        "question": "A DSC-message of the \"safety\" category is received from another vessel on VHF channel 70. Conforming to the GMDSS rules, for the continuation of the safety traffic, you must change to VHF-channel:",
        "options": [
          "16",
          "85",
          "70",
          "07"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "On board they want to have a dial-phone call via Inmarsat with the Apollogracht. In the guides the following ID's are found for the Apollogracht:344320000, 424432010, 424432020, 1300210, 36715. What ID should be chosen:",
        "options": [
          "424432020",
          "344320000",
          "1300210",
          "424432010"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "On an oil tanker, are there any restrictions as to the maximum amount of treated water that originates from cargo spaces that has passed through a bilge water separator that can be discharged?",
        "options": [
          "There isn't any restrictions of pumping sludge from ships outside special areas",
          "Maximum is 30 litre pr nautical mile and total is 1/30000 part of full cargo on the ballast voyage.",
          "Maximum is 30 litre pr nautical mile and total is 1/10000 part of full cargo on the ballast voyage.",
          "Maximum is 60 litre pr nautical mile and total is 1/30000 part of full cargo on the ballast voyage."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions and the illustrated lights, what type of vessel is this and from what direction is it viewed?",
        "options": [
          "This is a vessel engaged in fishing other than trawling, making way through the water, with outlying gear extending more than 150 metres in the direction of the all-round red light. Looking at it from astern",
          "This is a vessel engaged in pilotage operations, deploying or recovering a pilot. Looking at its port side",
          "This is a vessel engaged in fishing other than trawling, making way through the water, with outlying gear extending more than 150m in the direction of the all-round white light. Looking at its port side",
          "This is a vessel engaged in pilotage duties at anchor. Looking at its port side"
        ],
        "correctIndex": 2,
        "image": "images/image509.jpg"
      },
      {
        "question": "To guarantee optimal reception of VHF-DSC-calls, every:",
        "options": [
          "DSC-symbol is checked on the right amount of 10, and then checked on the correct relation by Error Checked Character",
          "DSC-report is sent twice, at least every second call is compared with the earlier received call",
          "DSC-symbol is sent twice and checked extra by Error Check Character",
          "DSC-calls are repeated untill received"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "With maintenance of batteries it is of primary importance that:",
        "options": [
          "There is proper relative humidity in the space where the batteries are stored",
          "The space is not oily",
          "There is an absolute free access to the battery space",
          "The space where the batteries are stored is properly ventilated"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "A \"Standard Format for Search and Rescue Situation Reports\" (SITREPs) should be used by vessels in distress. The SITREP can be compiled as a short form (urgent essential details). Which of the following information shall be included when using the \"short form\"?",
        "options": [
          "Position.",
          "Weather on-scene.",
          "Cargo information.",
          "Oil spill possibility."
        ],
        "correctIndex": 1,
        "image": "images/image27.jpg"
      },
      {
        "question": "For a DSC-connection (no 'distress alert') with another vessel the following frequencies are used:",
        "options": [
          "Tx: 2187.5 kHz RX: 2182.0 kHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz",
          "TX: 2187.5 kHz RX: 2187.5 kHz",
          "TX: 2189.5 kHz RX: 2189.5 kHz"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Records relating to breaches of security and changes in security level must be secured against unauthorized access and available for review by contracting governments.",
        "options": [
          "TRUE",
          ".",
          ".",
          "FALSE"
        ],
        "correctIndex": 0,
        "image": "images/image92.jpg"
      },
      {
        "question": "HEL-H is the abbreviation of a heavy helicopter radius of action for rescue purposes. What do you think the radius and evacuating capacity of the helicopter is?",
        "options": [
          "100 nm and capacity for evacuating more than 10 persons.",
          "150 nm and capacity for evacuating more than 12 persons.",
          "200 nm and capacity for evacuating more then 15 persons.",
          "500 nm and capacity for evacuating more than 25 persons."
        ],
        "correctIndex": 2,
        "image": "images/image134.jpg"
      },
      {
        "question": "The PTT-switch must be:",
        "options": [
          "Pressed in during speaking only to work semi-duplex",
          "Pressed in constantly to work simplex",
          "Pressed to listen",
          "Pressed in during speaking only to work duplex"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "The vessel with the illustrated lights is sighted ahead and slightly to port. What do the lights tell you about the status of the other vessel, and what should happen on your vessel?",
        "options": [
          "This is a vessel aground. She appears to have been headed to starboard of my track and my vessel should alter course to port, passing under her stern",
          "This is a vessel not under command at anchor",
          "This vessel is aground. My vessel should be navigated with extreme caution given the nature of the hazard",
          "This is a vessel engaged in fishing vessel, with her nets fast on an obstruction. My vessel should keep out of the way by rule 18 of the International Collision Regulations"
        ],
        "correctIndex": 2,
        "image": "images/image566.jpg"
      },
      {
        "question": "Your vessel is acting as the on scene commander during a distress rescue. Various vessels are interfering the distress traffic on the VHF. What message would you use to stop them interfering with this traffic?",
        "options": [
          "Seelonce securite",
          "Seelonce pan",
          "Seelonce distress",
          "Seelonce mayday"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "What is meant by saying that a vessel hull is directionally unstable?",
        "options": [
          "It has been intentionally created with the centre of underwater pressure aft of amidships",
          "When the rudder is kept amidships, the ship will continue on a straight course",
          "The ship will only require small amounts of helm to maintain its course when stearing in a heavy seaway",
          "When free running it will shear to one side or the other if not controlled"
        ],
        "correctIndex": 3,
        "image": "images/image504.jpg"
      },
      {
        "question": "MARPOL - Annex V. Disposal of garbage outside \"Special Areas\". After unpacking spares, you are left with a limited amount of packing materials. Is this prohibited, if not, what will be the nearest distance to land for disposal into the sea of these materials?",
        "options": [
          "3 miles",
          "This is prohibited",
          "25 miles",
          "12 miles"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 501-600",
    "questions": [
      {
        "question": "The proper operation of an Inmarsat C-terminal can be tested by:",
        "options": [
          "Doing a \"link test\"",
          "Requesting a \"self test\"",
          "Sending a message to MF DSC",
          "Doing a \"recommissioning test\""
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of these measures would you implement to prevent drugs from being smuggled onboard your ship while it's berthed?",
        "options": [
          "\"Search some of the packages, spares and stores received.\"",
          "Eliminate fore and aft deck watch at night.",
          "Check a portion of the bags and packages brought onboard.",
          "Maintain restricted areas."
        ],
        "correctIndex": 3,
        "image": "images/image175.jpg"
      },
      {
        "question": "Which of the following is a coast station MMSI ?",
        "options": [
          "002275300",
          "22753000",
          "227005300",
          "227530000"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "The muster list shall show the duties assigned to the different members of the crew. Which of the given duties necessarily have to be included in the muster list?",
        "options": [
          "Type of fires that can be encountered on board",
          "Clearing escape routes",
          "Preparation and launching of survival crafts",
          "Preparation and starting of emergency generator"
        ],
        "correctIndex": 2,
        "image": "images/image85.jpg"
      },
      {
        "question": "In US waters \"Oil Pollution Act of 1990\" was activated in August 1993. What is the main issue for the introduction of the act?",
        "options": [
          "To prevent oil spills in US waters?",
          "To enforce owners to use equipment of higher standards that those of today?",
          "To encourage owners to build double hull vessels for trading US waters?",
          "To improve safety measures onboard?"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "Which of the following is the correct minimum carriage requirement for a ship of more than 300 gross tons and operating in area A1:",
        "options": [
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable - 1 EPIRB",
          "1 VHF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable",
          "1 VHF RT – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –",
          "1 MF RT + DSC+ DSC watch receiver – 1 or 2 SART – 1 NAVTEX or 1 EGC receiver– 2 or 3 VHF portable – 1 EPIRB –"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "When a DSC-message of the 'distress' category is received, in order to start distress alert communication in so far as not indicated in the alert, you will switch to VHF channel:",
        "options": [
          "85",
          "13",
          "67",
          "16"
        ],
        "correctIndex": 3,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is the colour and characteristic of a \"towing light\", as defined in the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "Yellow, fixed, seen over an arc of 135 degrees and so arranged as to display 67.5 degrees from right aft on each side of the vessel",
          "Amber, all-round, flashing, where it can best be seen",
          "White, fixed, displayed as an additional light on the foremast over an arc of 225 degrees, from right ahead to 22.5 degrees abaft the beam on each side of the vessel",
          "One of two all-round amber, alternate flashing lights, displayed where they can best be seen"
        ],
        "correctIndex": 0,
        "image": "images/image557.jpg"
      },
      {
        "question": "\" On area A4 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "The use of HF DSC",
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs",
          "The use of MF DSC"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding service and maintenance of life-saving appliances correspond to present regulations?",
        "options": [
          "At least one member of the crew shall hold a repairman certificate for life-saving equipment",
          "Maintenance and repair of all the life-saving equipments will be carried out ashore in work shop only",
          "Instructions for onboard maintenance of life-saving appliances in accordance with the regulations shall be provided",
          "Maintenance and repair of all life saving equipments shall be carried out by the certified ship staff only"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "Which statement about the use of profiling onboard a ship is true?",
        "options": [
          "Profilers need at least half an hour to gather the information they need.",
          "A random selection process must be established.",
          "Detection equipment can be used in place of profiling.",
          "Only visitors can be profiled."
        ],
        "correctIndex": 1,
        "image": "images/image173.jpg"
      },
      {
        "question": "Where is OPA-90 applicable?",
        "options": [
          "200 nm off US coast",
          "Within 200 nm of US waters including Guam, Hawaii, Alaska and San Juan",
          "200 nm off coast of California",
          "Within US waters"
        ],
        "correctIndex": 1,
        "image": "images/image40.jpg"
      },
      {
        "question": "At sea red rocket signals are seen. This is not reported by radio. You have to begin the distress alert procedure via VHF with the term:",
        "options": [
          "Distress alert",
          "MAYDAY",
          "MAYDAY RELAY",
          "MAYDAY RECU"
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "How many square metres does the IAMSAR Volume 3 manual suggest may be calmed by releasing 200 litres of lubricating oil slowly through a rubber hose with the outlet maintained just above the surface while the ship proceeds at slow speed?",
        "options": [
          "Approx 5,000 square metres",
          "Approx 50 square metres",
          "Approx 50,000 square metres",
          "Approx 500 square metres"
        ],
        "correctIndex": 0,
        "image": "images/image524.jpg"
      },
      {
        "question": "According to Rule 35 of the International Regulations for Preventing Collisions what sound signal is made by a vessel not under command when in or near an area of restricted visibility?",
        "options": [
          "One prolonged blast at intervals at not more than two minutes",
          "One prolonged blast, followed by two short blasts, at intervals of not more than two minutes",
          "One prolonged blast, followed by two short blasts, at intervals of not more than one minute",
          "Two prolonged blasts, followed by one short blast, at intervals of not more than two minutes"
        ],
        "correctIndex": 1,
        "image": "images/image589.jpg"
      },
      {
        "question": "What is the purpose of the « SQUELCH » on a VHF transmitter/receiver?",
        "options": [
          "Increase the range of the transmitter",
          "Reduce the \"noise\" in the background",
          "Switch to another channel",
          "Increase the sound signal of the receiver"
        ],
        "correctIndex": 1,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is a Continuous Synopsis Record?",
        "options": [
          "A record of the vessels history",
          "A plan including all security measures onboard",
          "A plan for continuous maintenance of security equipment",
          "A record of all security incidents"
        ],
        "correctIndex": 0,
        "image": "images/image167.jpg"
      },
      {
        "question": "In which areas is plastic material accepted for overboard disposal?",
        "options": [
          "In specially designated areas (ref. MARPOL).",
          "In coastal waters.",
          "Not permissible any where.",
          "100 n.m. from shore line."
        ],
        "correctIndex": 2,
        "image": "images/image117.jpg"
      },
      {
        "question": "How many maintenance methods must be provided by ships sailing in area A1 and A2",
        "options": [
          "2",
          "1",
          "4",
          "3"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "The distress message is used when the vessel is threatened by a serious and imminent danger and is in need of immediate assistance. What is the telephony distress signal?",
        "options": [
          "PAN-PAN",
          "MAYDAY",
          "SECURITE",
          "RESCUE-RESCUE"
        ],
        "correctIndex": 1,
        "image": "images/image28.jpg"
      },
      {
        "question": "The correct functioning of a DSC-modem can be checked by means of:",
        "options": [
          "The built-in test facility in the modem",
          "The testing-mode of the ever present VHF-DSC-EPIRB",
          "Tester provided with the equipment",
          "The obligatory monthly transmission from the RCC's"
        ],
        "correctIndex": 0,
        "image": "images/image17.jpg"
      },
      {
        "question": "At the entrance to the space where batteries are stored on board the following notice must be fitted:",
        "options": [
          "Electrician only",
          "Keep access free",
          "Crew only",
          "No entry with naked light and/or flame"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which word will precede a safety message ?",
        "options": [
          "URGENT",
          "SECURITE",
          "SAFETY",
          "PAN PAN"
        ],
        "correctIndex": 1,
        "image": "images/image8.jpg"
      },
      {
        "question": "On board a DSC-call is to be made in case of an OBS. Choose the category:",
        "options": [
          "Urgency",
          "Ship's business",
          "Safety",
          "Routine"
        ],
        "correctIndex": 3,
        "image": "images/image10.jpg"
      },
      {
        "question": "What is definition on clean ballast as per MARPOL Annex 1?",
        "options": [
          "Ballast with an oil content of less than 15 ppm",
          "There isn't any definition on clean ballast",
          "Ballast with an oil content of less than 45 ppm",
          "Ballast with an oil content of less than 1 %"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "What must be done if the Oil Discharge Monitoring Equipment (ODME) should fail during a ballast voyage?",
        "options": [
          "If the failure cannot be repaired onboard, the ODME must be repaired before the ship commences its next voyage",
          "The failure must be repaired",
          "The failure must be noted in the Oil Record Book",
          "All of the mentioned must be performed"
        ],
        "correctIndex": 3,
        "image": "images/image259.jpg"
      },
      {
        "question": "Which one of the listed requirements regarding abandon ship drills corresponds to present SOLAS regulation?",
        "options": [
          "On ships on short international voyages, each lifeboat shall be launched and maneuvered in the water at least every six months",
          "All lifeboats shall be lowered during drills",
          "Each lifeboat shall be launched, and maneuvered in the water with its assigned crew at least once every three months during an abandon ship drill",
          "Drills shall be conducted when the ship is in a harbour"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "When a vessel is undertaking a long canal transit with locks and lots of activity, what management issues should the Master consider?",
        "options": [
          "All of these answers",
          "Fully manned engine room throughout the canal transit",
          "Lack of sleep and fatigue of bridge officers",
          "Suitable crew available for lock transits"
        ],
        "correctIndex": 0,
        "image": "images/image537.jpg"
      },
      {
        "question": "On board they want to make a DSC-call with a foreign coast-station. It is an urgent call. Preferably choose:",
        "options": [
          "The international DSC-call frequency",
          "The national DSC-call frequecies of the coast-station concerned",
          "The international DSC-urgent frequency",
          "The international DSC-distress frequencies"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "The most effective way to combat the threat of drug smuggling is to?",
        "options": [
          "\"Perform routine, but irregular searches using teams of two or more personnel from the same department.\"",
          "Organize crew into pairs and conduct weekly searches of the ship.",
          "Perform spontaneous targeted searches using teams of two or more personnel from the same department.",
          "\"Combining routine, but irregular searches of the ship with spontaneous targeted searches.\""
        ],
        "correctIndex": 3,
        "image": "images/image75.jpg"
      },
      {
        "question": "In making VHF communication or test transmission you must:",
        "options": [
          "First tap on the mike several times, but not more than 10 times",
          "Identify yourself with your call sign and/or ship's name",
          "With DSC use, first broadcast the carrier wave for at least three seconds",
          "Warn all ships in the vicinity"
        ],
        "correctIndex": 1,
        "image": "images/image6.jpg"
      },
      {
        "question": "In what language/languages must the fire control plans or booklets (or copies of these) be written?",
        "options": [
          "In the Flag State official language with copies in English or French",
          "In the English language",
          "In the Flag State official language",
          "In a national language where company head office is located"
        ],
        "correctIndex": 0,
        "image": "images/image55.jpg"
      },
      {
        "question": "According to the International Regulations for Preventing Collisions, these displayed lights indicate that this is one of two types of vessel. What are the two options?",
        "options": [
          "A power-driven vessel engaged in towing, more than 50 metres in length, or less than 50 metres in length and showing a second masthead light, length of tow under 200 metres, seen head-on OR a power-driven vessel underway. Less than 50 metres in length and displaying the second all-round white masthead light, seen head-on",
          "A power-driven vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres, towing vessel and tow restricted in their ability to manoeuvre, seen head-on OR a power-driven vessel underway, more than 50 metres in length, or less than 50 metres in length and showing a second masthead light, restricted in her ability to manoeuvre, seen head-on",
          "A vessel engaged in fishing, restricted in her ability to manoeuvre, shooting nets OR a vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres, towing vessel restricted in her ability to manoeuvre, seen head-on",
          "A vessel engaged on pilotage duty, engaged in deploying or recovering a pilot, seen head-on or a power-driven vessel underway, lmore than 50 metres in length or less than 50 metres in length and showing the second masthead light, seen head-on"
        ],
        "correctIndex": 1,
        "image": "images/image584.jpg"
      },
      {
        "question": "By FleetNET communication is understood:",
        "options": [
          "A HF-NBDP -message destined for ships in a certain geographical area",
          "A MSI-message destined for ships in specific geographical area",
          "An urgent message for all ships in a particular area",
          "An EGC-message destined for ships with the same group call number"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The whip-antenna of the MF transceiver was lost in bad weather. The MF-transceiver can be used again:",
        "options": [
          "If the whip-antenna is replaced by a Sat C antenna",
          "If instead of the whip-antenna, another whip-antenna such as the spare VHF antenna is connected",
          "If the whip-antenna is replaced by an antenna of about the same length as the original one",
          "Only if the whip antenna is replaced by another whip-antenna of the same length"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "\"Your ship security plan must include procedures for responding to security threats, auditing security activities and interfacing with the port facility.\"",
        "options": [
          ".",
          ".",
          "TRUE",
          "FALSE"
        ],
        "correctIndex": 2,
        "image": "images/image67.jpg"
      },
      {
        "question": "You have an important navigational or meteorological warning to transmit. What call should proceed this message when made on the radio telephone?",
        "options": [
          "Securite Securite (3 times)",
          "Mayday Mayday  (3 times)",
          "Victor Victor (3 times)",
          "Pan Pan  (3 times)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "What is the priority for the ship's management team when fire breaks out?",
        "options": [
          "The ship's management team must organise the fire teams and then the teams have to rescue missing personnel",
          "The ship's management team and the crew must evacuate the ship",
          "The ship's management team must call the nearest fire brigade and police station",
          "The ship's management team must fight the fire and then call the fire teams"
        ],
        "correctIndex": 0,
        "image": "images/image25.jpg"
      },
      {
        "question": "An Oil Record Book, Part 1,shall be provided to every ship of 400 tons gross tonnage and above to record machinery space operations.Out of below mentioned operations, it is compulsory to record:",
        "options": [
          "Transfer of oil from settling - to daytank.",
          "Discharge of water from Aft, Peak Tank.",
          "Purification of HFO.",
          "Bunkering of bulk lubricating oil."
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "Which of the options best describes how a \"Balanced Rudder\" is constructed?",
        "options": [
          "Part of the rudder area is forward of the turning axis, therefore reducing the load on the steering motor.",
          "The rudder has an additional flap attached to the trailing edge to improve rudder efficiency",
          "The rudder is operated by two steering motors providing equal amounts of power to the rudder",
          "There is equal rudder area forward and aft of the turning axis, the turning axis being at the geometrical centre of the rudder area"
        ],
        "correctIndex": 0,
        "image": "images/image504.jpg"
      },
      {
        "question": "Inmarsat Telex Service code '33' can be used:",
        "options": [
          "To ask for radio medical advice",
          "To ask for 'maritime enquiries",
          "When technical problems are experienced with the Inmarsat-terminal",
          "When the coast-station is disfunctional"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "When a Master takes the leadership in approaching a problem, Must his first action be a decision that will directly solve the problem?",
        "options": [
          "Not necessary, he shall use all available resources. He should resist the temptation to step in and do it all by himself",
          "No, he should observ the situation, and let the other senior officers solve the situation.",
          "Yes, take full controll. Do not delegate to other officers, to avoid mistake.",
          "Yes, with his experience, it is most likely that he has the best solution."
        ],
        "correctIndex": 0,
        "image": "images/image71.jpg"
      },
      {
        "question": "Who are responsible for safe working conditions onboard?",
        "options": [
          "The safety officer.",
          "The individual person.",
          "Master, Chief Engineer & Chief Officer.",
          "The officer of the watch."
        ],
        "correctIndex": 2,
        "image": "images/image250.jpg"
      },
      {
        "question": "A satellite receives the transmissions of the 406 MHz Cospas-Sarsat EPIRB. The transmissions of the EPIRB will be:",
        "options": [
          "Always passed on to a LUT",
          "Passed when the satellite in passing the equator",
          "Exclusively passed on to a LUT if the satellite sees both the EPIRB and the LUT",
          "Exclusively passed on to a LUT only between 70 degrees N and 70 degrees S"
        ],
        "correctIndex": 0,
        "image": "images/image22.jpg"
      },
      {
        "question": "What does STCW deal with?",
        "options": [
          "STCW deals with recommendation for training centre and schools and type of education for seafarers",
          "STCW deals with minimum recommendation for training centre and schools",
          "STCW deals with training centre and schools and standards for watch keepers",
          "STCW deals with minimum recommendation of education for seafarers and minimum standards for training centre and schools"
        ],
        "correctIndex": 3,
        "image": "images/image84.jpg"
      },
      {
        "question": "You are on a power-driven vessel underway in open water. This vessel is sighted directly ahead. The distance is closing slowly. What action will you take under the International Collision Regulations and why?",
        "options": [
          "This is a vessel engaged in towing and I am seeing the stern light of the tow. The tug is not however showing any lights indicating she is restricted in her ability to manoeuvre. I will however display good seamanship and keep out of her way",
          "I will maintain my course and speed.  The other vessel is being overtaken and is therefore obliged to keep out of the way by rule 13",
          "I will keep out of her way. I am the overtaking vessel and am obliged to keep clear under rule 13",
          "The vessel is on a steady bearing and the distance is closing. I will therefore take avoiding action, altering course to starboard and sounding one short blast under rules 14 and 16"
        ],
        "correctIndex": 2,
        "image": "images/image565.jpg"
      },
      {
        "question": "Any ship of 10.000 tons gross tonnage and above shall be fitted with oily-water separating equipment for the control of machinery space bilges.What kind of equipment is required in this connection?",
        "options": [
          "Sludge separating tank.",
          "Oil filtering equipment only.",
          "Either Oil filtering equipment , or Oily-water separating equipment , or combination of both.",
          "Oily-water separating equipment only."
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "Why should a Ground Stabilised True Motion radar display not be used for anti-collision purposes?",
        "options": [
          "True motion does not provide the collision risk of targets as only true vectors are available",
          "The 'aspect' of the target is confused, so the Regulations for Preventing Collisions cannot be accurately applied",
          "The true vector can never give an indication of collision risk with another ship",
          "Because this display is only ever used for navigation"
        ],
        "correctIndex": 1,
        "image": "images/image487.jpg"
      },
      {
        "question": "A distress-call received via RCC should:",
        "options": [
          "Only be given receipt, if the master has confirmed that assistance indeed can be given",
          "Always be given receipt",
          "Always be relayed",
          "Be given receipt, even when indubitably too distant from the distress case"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "The ship is in a shallow water starboard turn and the fore and aft Doppler log sensors show a sideways motion to port. Where would the theoretical pivot point be located?",
        "options": [
          "At a position on the centreline, about 1/6 of the ship's length forward of the rudder post",
          "At a position aft of amidships",
          "At a position outside and forward of the hull",
          "At a position outside and aft of the hull"
        ],
        "correctIndex": 2,
        "image": "images/image560.jpg"
      },
      {
        "question": "Which international convention deals with fire-fighting equipment etc.",
        "options": [
          "SOLAS",
          "CRISTAL",
          "MARPOL",
          "Load Line convention"
        ],
        "correctIndex": 0,
        "image": "images/image119.jpg"
      },
      {
        "question": "The capacity of a battery is expressed in:",
        "options": [
          "volt x ampere",
          "Watt x hours",
          "volt x hours",
          "ampere x hours"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "How will you start a cancelling message after you send by mistake a distress call on your VHF DSC equipment",
        "options": [
          "\" SECURITE - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "MAYDAY - All Stations - This is \"\"SAINT-ROMAIN\"\"\"",
          "\" All Stations - This is \"\"SAINT-ROMAIN\"\"\"\"",
          "\" PAN PAN - All Stations - This is \"\"SAINT-ROMAIN\"\"\""
        ],
        "correctIndex": 2,
        "image": "images/image13.jpg"
      },
      {
        "question": "You are on a power-driven vessel underway in open water. You sight these lights on the port bow, on a steady bearing. The distance is closing. What are you looking at and what action will you take in compliance with the International Regulations for Preventing Collision at Sea?",
        "options": [
          "This is a power-driven vessel engaged in towing, less than 50 metres in length, length of tow under 200 metres and the tow, both being restricted in their ability to manoeuvre, seen from the starboard side. Under rule 18, I am required to keep clear and will take appropriate avoiding action",
          "This is a power-driven vessel engaged in towing, more than 50 metres in length or less than 50 metres in length and showing a second masthead light and the tow, the combined length of which is under 200 metres. The towing vessel is restricted in her ability to manoeuvre. I am seeing their starboard sides. The bearing is steady and risk of collision therefore exists. I will maintain my course and speed under rule 17",
          "This is a power-driven vessel, more than 50 metres in length or less than 50 metres in length and showing a second masthead light, restricted in her ability to manoeuvre. The sidelight of a second vessel can be seen beyond her. Under rule 18, I am obliged to keep clear of the first vessel and will therefore take appropriate avoiding action",
          "This is a power-driven vessel engaged in towing, more than 50 metres in length or less than 50 metres in length and showing a second masthead light, length of tow 200 metres or more, not under command. I will keep clear under rule 27"
        ],
        "correctIndex": 0,
        "image": "images/image549.jpg"
      },
      {
        "question": "The MF/HF-transceiver on board is tuned to the assigned frequency of a station. To make this connection the following mode is used:",
        "options": [
          "J3E",
          "J2B",
          "H3E",
          "G3E"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "What would be the preferred colour to use when maintaining the paint on shell, plating, structure and bottom/tanktopp in the engine room?",
        "options": [
          "Dark brown/red colour to camuflage any minor leakages and oil spills.",
          "Whatever paint is available.",
          "White or light grey to ensure all minor spills and leakages are noticed and dealt with.",
          "The same colour as machinery and equipment."
        ],
        "correctIndex": 2,
        "image": "images/image78.jpg"
      },
      {
        "question": "Which of the following is a ship MMSI ?",
        "options": [
          "1227200",
          "227530000",
          "22753000",
          "2275300"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Your vessel is towing an unmanned barge and restricted in its ability to manoeuvre. The total length of the tow is 800 metres. What daylight signals are required by the International Regulations for Preventing Collisions at Sea?",
        "options": [
          "A diamond shape, where it can best be seen shall be displayed on the tug and the tow. Three shapes shall also be displayed in a vertical line, the upper and lower being balls and the middle one a diamond",
          "Three shapes shall be displayed forward on the tug, in a vertical line, the upper and lower being balls and the middle one a diamond",
          "A diamond shape, where it can best be seen, on the tug only. Three shapes shall also be displayed, being three balls in a vertical line",
          "Three shapes shall be displayed on the tug, where they can best be seen, in a vertical line, the upper and lower being balls and the middle one a cylinder. The signal flag \"T\" shall also be flown on the tug. A diamond shall be displayed aft on the tow"
        ],
        "correctIndex": 0,
        "image": "images/image588.jpg"
      },
      {
        "question": "What is the required number of hours that a SART's battery must be able to operate the unit in the standby mode?",
        "options": [
          "Forty-eight (48) hours",
          "Eight (8) hours",
          "Four (4) days",
          "Three (3) days"
        ],
        "correctIndex": 2,
        "image": "images/image5.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Reception of shore to ship distress alerts\"\" is mainly based on:\"",
        "options": [
          "the use of VHF DSC",
          "the use of SARSAT COSPAS Epirbs",
          "the use of MF DSC",
          "the use of SART transponders"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Ships of 10.000 tons gross tonnage and more, shall be fitted with oil filtering equipment, complying with Reg.14 (7) of MARPOL for the control of machinery space bilges. What would be the maximum oil content of oily-water mixture to pass through the filter?",
        "options": [
          "60 ppm/n.m",
          "15 ppm",
          "100 ppm",
          "30 ppm"
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "Is there any special area under MARPOL where it is forbidden to pump out any sludge or oil residues?",
        "options": [
          "There are special areas where it is forbidden to pump out any sludge or oil residues",
          "There are 4 special areas: the Baltic Sea, Mediterranean Sea, Red Sea and Black Sea where it is forbidden to pump out any sludge or oil residues",
          "There isn't any special area where it is forbidden to pump out any sludge or oil residues",
          "There are 3 special areas: the Baltic Sea, Mediterranean Sea, and Black Sea where it is forbidden to pump out any sludge or oil residues"
        ],
        "correctIndex": 0,
        "image": "images/image42.jpg"
      },
      {
        "question": "\" On area A1 the function \"\" Transmission and reception of signals for locating \"\" is mainly based on:\"",
        "options": [
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs",
          "the use of VHF DSC",
          "the use of INMARSAT Epirbs"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "For how long is the health certificate valid for a seafarer above the age of 18?",
        "options": [
          "No time limit.",
          "One year.",
          "Three months.",
          "Two years."
        ],
        "correctIndex": 3,
        "image": "images/image116.jpg"
      },
      {
        "question": "The receipt of a distress alert is to be pronounced as followed:",
        "options": [
          "Mayday (1x) / this is / own call-sign (3x) received mayday",
          "Mayday (1x) / distress aleert / own ship call sign",
          "Mayday (3x) / this is / own call-sign (1x) / received mayday / call-sign of ship in distress (1x)",
          "Mayday (1x), call-sign of ship in distress (3x) / this is / own call-sign (3x) / received mayday"
        ],
        "correctIndex": 3,
        "image": "images/image8.jpg"
      },
      {
        "question": "A ship in distress should transmit the appropriate alarm signal followed by the distress call and message on one or all of the international distress frequencies. Which of frequencies is in accordance with the present recommendations?",
        "options": [
          "500 kHz, 2367 kHz and 243 MHz",
          "550 kHz, 2182 kHz and 121.5 MHz",
          "500 kHz, 2182 kHz and 156.8 MHz",
          "550 kHz, 2367 kHz and 121.5 MHz"
        ],
        "correctIndex": 2,
        "image": "images/image7.jpg"
      },
      {
        "question": "You are on a sailing vessel, underway in open water. This vessel is sighted on the starboard bow, on a steady bearing and the distance is closing. By the International Regulations for the Preventing Collisions at Sea, what action will you follow?",
        "options": [
          "Risk of collision is deemed to exist and, as the other vessel is on a steady bearing on my starboard side, I will maintain my course and speed",
          "This vessel is clearly a power-driven vessel and I anticipate that the bearing will therefore close and she will pass ahead at a safe distance",
          "Risk of collision is deemed to exist and, as the other vessel is on a steady bearing on my starboard side, I am required to keep out of the way. I will make a broad alteration of course to starboard",
          "By Rule 18, a power-driven vessel underway shall keep out of the way of a sailing vessel. I will maintain my course and speed, but will continue to monitor situation to ensure the other vessel takes avoiding action"
        ],
        "correctIndex": 3,
        "image": "images/image563.jpg"
      },
      {
        "question": "What does the term DISCHARGE mean, as used in the Oil Pollution Regulations?",
        "options": [
          "Spilling",
          "Dumping",
          "All the other alternatives",
          "Leaking"
        ],
        "correctIndex": 2,
        "image": "images/image57.jpg"
      },
      {
        "question": "The Training Manual shall contain instructions and information on the life-saving appliances and the best method of survival. The training manual shall contain detailed explanations of crew duties in relation to emergency situations. Which of the following tasks or duties shall be included in the manual according to present regulations?",
        "options": [
          "The use of surface to air visual signals to be used by survivors.",
          "The use of escape routes and other escape methodes.",
          "The use of the ship's line throwing apparatus.",
          "The use of navigational equipment for survival crafts."
        ],
        "correctIndex": 2,
        "image": "images/image83.jpg"
      },
      {
        "question": "Your vessel is close to the entrance of a port in thick fog. You hear the following signal. What does it mean?",
        "options": [
          "That there is a vessel aground in the vicinity",
          "That there is a vessel at anchor in the vicinity. It is more than 100 metres in length",
          "That the port is closed",
          "That there is a vessel at anchor in the vicinity. It is less than 100 metres in length"
        ],
        "correctIndex": 3,
        "image": "images/image489.jpg"
      },
      {
        "question": "In the Inmarsat Maritime Communications Handbook one can find information about:",
        "options": [
          "2 digit code telex services",
          "Ship's Inmarsat Id's",
          "Numbers of fax subscribers",
          "Radio telex commands"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which of these tasks are performed as part of the SSA?",
        "options": [
          "Assign security duties to ship personnel.",
          "Implement measures to address weaknesses in ship security.",
          "Assess the likelihood and potential consequences of security incidents.",
          "Train shipboard personnel in their security duties."
        ],
        "correctIndex": 2,
        "image": "images/image64.jpg"
      },
      {
        "question": "How often shall crew members participate in fire drills?",
        "options": [
          "Once every 6 months",
          "Once every month",
          "Once every year",
          "Once every week"
        ],
        "correctIndex": 1,
        "image": "images/image89.jpg"
      },
      {
        "question": "If requested by a coastal radio station to participate in a rescue operation, what is the most important information you may give?",
        "options": [
          "Your vessel's destination",
          "Your vessel's position, name, call sign and speed",
          "Your vessel's own cargo owner",
          "Your crews nationality"
        ],
        "correctIndex": 1,
        "image": "images/image27.jpg"
      },
      {
        "question": "On a MF/HF-transmitter-receiver there is a volume control. Another name for this is:",
        "options": [
          "RC-gain",
          "LF-gain",
          "HF-gain",
          "Sensitivity"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "According to Rule 24 of the International Regulations for Preventing Collisions and the illustrated lights, how long is the tow likely to be?",
        "options": [
          "It is less than 200 metres",
          "It is more than 50 metres but less than 200 metres",
          "At least 100 metres",
          "It exceeds 200 metres"
        ],
        "correctIndex": 3,
        "image": "images/image580.jpg"
      },
      {
        "question": "One of the categories of information that must be included in your SSP is:",
        "options": [
          "Ship security survey",
          "Weaknesses in security measures",
          "Threat scenarios",
          "Security arrangements"
        ],
        "correctIndex": 3,
        "image": "images/image91.jpg"
      },
      {
        "question": "What is SITREP an abbreviation for?",
        "options": [
          "Ship Indication Transmission Equipment.",
          "Ship Transit Emergency Radio.",
          "Survivor Indication Transponder Equipment.",
          "Situation Report."
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "A small vessel with a right handed propeller and no thruster is approaching a berth with an onshore wind. What is the best way to have a controlled berthing?",
        "options": [
          "Full starboard rudder and stop engines",
          "Dredge a forward anchor, working the engine and rudder against it to keep the stern up",
          "Stop the engine and let the vessel momentum and the wind drop the vessel onto the berth",
          "Reduce speed by going full astern on the engines"
        ],
        "correctIndex": 1,
        "image": "images/image521.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship in danger of capsizing and needing assistance from all vessels in her vicinity ?",
        "options": [
          "Safety call",
          "Urgent call",
          "Distress relay call",
          "Distress call"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which of the following items shall be included in an \"abandon ship\"-drill?",
        "options": [
          "Checking that passengers and crew are suitably dressed and lifejackets correctly donned",
          "Checking that all crew and passenger moral is high",
          "Checking the lifeboat provisions and supplies",
          "Checking the distress signal rockets and other distress signals"
        ],
        "correctIndex": 0,
        "image": "images/image49.jpg"
      },
      {
        "question": "Which class of emission is used for ARQ NBDP transmissions ?",
        "options": [
          "F1B",
          "J3E",
          "G3E",
          "G2B"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "\"A contractor is hired to install new navigation equipment onboard your ship while it's berthed. For a period of time he's left unsupervised and photographs schematics of the ship that he finds rolled up and stored in the corner of a nearby office. Later, from home, he hacks into the network and prints off information about the ship's security procedures. Which of these information security measures would have prevented his unauthorized access?\"",
        "options": [
          "\"Protective markings, reference checks, and passwords.\"",
          "\"Firewall, protective markings, vetting and a secure network.\"",
          "\"Secure area, passwords, a firewall and a secure network.\"",
          "\"Secure area, passwords, a firewall and protective markings.\""
        ],
        "correctIndex": 2,
        "image": "images/image63.jpg"
      },
      {
        "question": "When a pollution incident occurs there is a plan for actions to be undertaken. State which of following priority sequences to be considered:",
        "options": [
          "Stop pumps - clean up - report?",
          "Report - stop pumps -  clean up?",
          "Clean up - report - stop pumps?",
          "Stop pumps - report - clean up?"
        ],
        "correctIndex": 3,
        "image": "images/image121.jpg"
      },
      {
        "question": "What does the term OIL mean, as used in the Oil Pollution Regulations?",
        "options": [
          "All of the mentioned",
          "Oil refuse",
          "Sludge",
          "Fuel oil"
        ],
        "correctIndex": 0,
        "image": "images/image57.jpg"
      },
      {
        "question": "Your vessel is power-driven and making way in open water. This vessel is on the port bow with a steady bearing. What kind of vessel is it and what will your action be?",
        "options": [
          "This is a sailing vessel underway, seen head-on. It is my responsibility to keep clear under rule 18 and I will take appropriate avoiding action",
          "This is a sailing vessel not making way through the water. There is no risk of collision and I will maintain my course and speed",
          "This is a vessel engaged in fishing. It is my responsibility to keep clear under rule 18 and I will alter course to starboard, sounding one short blast",
          "This is a sailing vessel underway. I am the stand-on vessel and will maintain my course and speed under rule 17"
        ],
        "correctIndex": 0,
        "image": "images/image496.jpg"
      },
      {
        "question": "The portable walkie talkies required to be carried by GMDSS regulations should have which channels as a minimum?",
        "options": [
          "Channels 6, 13 & 16",
          "Channels 13 & 16",
          "Channel 16 only",
          "Channels 6 & 16"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "The safety message announces that a station:",
        "options": [
          "Will relay a message concerning an important navigational or meteorological warning",
          "Is in serious and imminent danger and needs immediate assistance",
          "Is going to be under repairs",
          "Has an very urgent message concerning the safety of a vessel, a plane or another means of conveyance"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "The time indication 121310z means in maritime radio communication:",
        "options": [
          "12th month, 13th day, 1000 hour Local time",
          "12th day, 1310 hours local time",
          "12th day, 1310 hours UTC",
          "12th month, 13th day, 1000 hours UTC"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "What is a Declaration of Security?",
        "options": [
          "A document between the port and the cargo owner stating security",
          "A checklist jointly completed by the Ship Security Officer and the U.S. Coast Guard",
          "A checklist jointly completed by the ship and shore security representatives",
          "A document stating the ship's security level"
        ],
        "correctIndex": 2,
        "image": "images/image87.jpg"
      },
      {
        "question": "If a ship in the MF-band wants to have a DSC-connection with a coast-station (no 'distress alert' or a test alert) the following frequencies are chosen:",
        "options": [
          "Tx: 2187.5 KHz RX: 2182 KHz",
          "TX: 2189.5 kHz RX: 2177.0 kHz",
          "TX: 2177.0 kHz RX: 2189.5 kHz",
          "TX: 2177.0 kHz RX: 2177.0 kHz"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "For a search to be effective it must be:",
        "options": [
          "Conducted by personnel with limited knowledge of the ship's layout.",
          "Organized haphazardly.",
          "Inclusive of all personnel.",
          "Centrally controlled."
        ],
        "correctIndex": 3,
        "image": "images/image59.jpg"
      },
      {
        "question": "The analyses of the smoke produced by a fire, may give an interpretation of that fire. Which are the factors we should take into account?",
        "options": [
          "Amount and opacity only",
          "There is no possible interpretation of a fire according to the smoke",
          "Colour only",
          "Opacity, amount and colour"
        ],
        "correctIndex": 3,
        "image": "images/image55.jpg"
      },
      {
        "question": "In a distress situation, how many times or for how long should the emergency alarm signal be sounded?",
        "options": [
          "3 minutes",
          "3 times",
          "Until all crew members and passengers have reported to their respective muster stations",
          "Until the signal \"risk is over\" or the order \"abandon ship\" is given"
        ],
        "correctIndex": 2,
        "image": "images/image56.jpg"
      },
      {
        "question": "What is the alcohol content in the blood permissible under US legislation before it is defined as intoxication?",
        "options": [
          "0,04 %",
          "0,1 %",
          "0,07 %",
          "0,01 %"
        ],
        "correctIndex": 0,
        "image": "images/image143.jpg"
      },
      {
        "question": "Who is responsible for issuing an ISPS certificate?",
        "options": [
          "US Coast Guard",
          "The insurance company",
          "The Flag State",
          "The Port State"
        ],
        "correctIndex": 2,
        "image": "images/image133.jpg"
      },
      {
        "question": "A distress-call, onboard via RCC, may only be given Receipt if:",
        "options": [
          "The manager orders",
          "The captain orders",
          "OSC from the RCC concerned invites the vessels",
          "The O.O.W deems it necessary"
        ],
        "correctIndex": 3,
        "image": "images/image14.jpg"
      },
      {
        "question": "On an oil tanker outside a special area, what is the maximum instantaneous rate of discharge of oil content per nautical mile?",
        "options": [
          "20 litres per nautical mile.",
          "30 litres per nautical mile",
          "60 litres per nautical mile.",
          "40 litres per nautical mile."
        ],
        "correctIndex": 1,
        "image": "images/image42.jpg"
      },
      {
        "question": "Which of the following two digits codes is used to obtain maritime assistance ?",
        "options": [
          "38",
          "39",
          "32",
          "37"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "Which type of call will be sent by a ship adrift and needing the assistance of a tug ? (The weather is not bad and the ship will be aground 24 hours later)",
        "options": [
          "Urgent call",
          "Distress relay call",
          "Distress call",
          "Safety call"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      }
    ]
  },
  {
    "title": "Container Ship 601-695",
    "questions": [
      {
        "question": "You are proceeding along a coastal route when you hear this signal. The visibility is severely restricted. What does the signal mean?",
        "options": [
          "There is a vessel at anchor in the vicinity. She is less than 100 metres in length. She is sounding an additional warning to approaching vessels that they are \"running into danger\"",
          "There is a vessel aground in the vicinity. She is less than 100 metres in length. She is sounding an additional warning to approaching vessels to \"navigate with extreme caution\"",
          "There is a vessel aground in the vicinity. She is more than 100 metres in length. She is sounding an additional warning to approaching vessels that they are \"running into danger\"",
          "There is a vessel at anchor in the vicinity. She is more than 100 metres in length. She is sounding an additional warning signal to approaching vessels, directing them to \"keep clear\""
        ],
        "correctIndex": 2,
        "image": "images/image489.jpg"
      },
      {
        "question": "In the situation illustrated, what should be the power distribution of the tugs to maintain the ship sideways motion with only minor changes in the ship's heading?",
        "options": [
          "Full power on the forward tug and the after tug ceases to push, but continuously monitor the ship's gyro heading",
          "Considerably more power on the aft tug than the forward tug, while monitoring the ship's gyro heading",
          "Considerably more power on the forward tug than the after tug, while monitoring the ship's gyro heading",
          "Equal power on both tugs while monitoring the ship's gyro heading"
        ],
        "correctIndex": 1,
        "image": "images/image558.jpg"
      },
      {
        "question": "\" On area A2 the function \"\" Transmission of ship to shore distress alerts\"\" is mainly based on:\"",
        "options": [
          "The use of SARSAT COSPAS Epirbs",
          "The use of MF DSC",
          "The use of VHF DSC",
          "The use of INMARSAT Epirbs"
        ],
        "correctIndex": 1,
        "image": "images/image24.jpg"
      },
      {
        "question": "All designated SAR aircraft and civil aircraft carry equipment operating on the international aeronautical distress frequencies (amplitude modulation). The aeronautical distress frequencies are?",
        "options": [
          "123.8 MHz and/or 247.6 MHz",
          "121.5 MHz and/or 243.0 MHz",
          "127.8 MHz and/or 349.6 MHz",
          "243.1 MHz and/or 486.2 MHz"
        ],
        "correctIndex": 1,
        "image": "images/image29.jpg"
      },
      {
        "question": "What is the correct setting of the \"Anti sea clutter\" control on the radar?",
        "options": [
          "All of the suggested answers",
          "No sea returns left on the screen so that a small target will be seen",
          "A removal of all the sea returns up to about three miles from own-ship",
          "A few sea returns remaining around the own-ship position"
        ],
        "correctIndex": 3,
        "image": "images/image490.jpg"
      },
      {
        "question": "What is most important for crew members when preparing for emergencies?",
        "options": [
          "That people are well trained",
          "That people know where to find designated equipment",
          "That people listen to orders given",
          "That people know where to muster"
        ],
        "correctIndex": 0,
        "image": "images/image54.jpg"
      },
      {
        "question": "If one wants to transmit a weather report with an Inmarsat-C terminal one should use the following address:",
        "options": [
          "41",
          "Sitrep",
          "OBS +",
          "Meteorological Center"
        ],
        "correctIndex": 0,
        "image": "images/image12.jpg"
      },
      {
        "question": "Which of these conventions is The International Ship and Port Facility Security (ISPS) Code a part of?",
        "options": [
          "MARPOL",
          "SOLAS",
          "The Anti Terrorist International Agreement",
          "STCW - 95"
        ],
        "correctIndex": 1,
        "image": "images/image168.jpg"
      },
      {
        "question": "On a conventional rudder, how much lift force remains if the rudder-angle is decreased to 20 degrees, from an initial 35 degrees?",
        "options": [
          "About 50 %",
          "About 30 %",
          "About 80 %",
          "About 10 %"
        ],
        "correctIndex": 2,
        "image": "images/image532.jpg"
      },
      {
        "question": "Who is responsible for ensuring your ship completes a security assessment?",
        "options": [
          "Flag State Administration",
          "Ship Security Officer",
          "Recognized Security Organization",
          "Company Security Officer"
        ],
        "correctIndex": 3,
        "image": "images/image131.jpg"
      },
      {
        "question": "*Which one of the given requirements regarding manning and supervision of survival craft corresponds to the SOLAS regulation?",
        "options": [
          "Every motorised survival craft shall have a certificated engineer assigned",
          "Every lifeboat required to carry radio telegraph installation shall have a deck officer capable of operating the equipment assigned",
          "A deck officer or certificated person shall be placed in charge of each survival craft to be used",
          "There shall be at least 5 trained persons on board, mustering and assisting untrained persons"
        ],
        "correctIndex": 2,
        "image": "images/image21.jpg"
      },
      {
        "question": "When a character in the NAVTEX message sent is not received in the proper way:",
        "options": [
          "A closely resembling character will be printed",
          "the message will not be printed at all until, with repeated transmission, it can be automatically compared and corrected",
          "Any other character will be printed",
          "Nothing or a special character will be printed"
        ],
        "correctIndex": 3,
        "image": "images/image20.jpg"
      },
      {
        "question": "Searches are often triggered by:",
        "options": [
          "News stories of stowaways.",
          "An increase in security level by the Flag State.",
          "The receipt of a shipment of damaged stores.",
          "Lost baggage."
        ],
        "correctIndex": 1,
        "image": "images/image137.jpg"
      },
      {
        "question": "The ship is approaching shallow water where the Under Keel Clearance will reduce to about 0.25 of the ship's draught. Which of the following answers most accurately summarizes the aspects to be considered when deciding a suitable speed?",
        "options": [
          "All of the suggested answers",
          "A further reduction of underkeel clearance and possible changes of the ship's trim",
          "Touching the bottom if there is any swell and causing damage due to the wake or wash of the vessel",
          "A reduced ability to stop the vessel and maintain steerage"
        ],
        "correctIndex": 0,
        "image": "images/image516.jpg"
      },
      {
        "question": "With an Inmarsat-C terminal the option 'PSTN' for addressing is available. This option:",
        "options": [
          "Delivers the message as a fax",
          "Is to deliver a message by telephone via a modem on the computer of the suscriber",
          "Delivers a message as a telegram",
          "Have the operator read the message by phone"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "A DSC-notice should be sent on VHF-channel:",
        "options": [
          "70",
          "13",
          "16",
          "67"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "Who is responsible for keeping the required official publications onboard?",
        "options": [
          "The owner.",
          "The authorities.",
          "The master.",
          "The radio officer."
        ],
        "correctIndex": 2,
        "image": "images/image74.jpg"
      },
      {
        "question": "A MF/HF-DSC multi-frequency call attempt may:",
        "options": [
          "Be repeated after 15 minutes",
          "Be repeated after 1 to 1.5 minutes",
          "Not be repeated",
          "Be repeated after 3.5 to 4.5 minutes"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The relay of a distress-call by an RCC for coast-station begins with:",
        "options": [
          "PAN PAN (3x)",
          "Distress (3X)",
          "MAYDAY (3x)",
          "MAYDAY RELAY (3x)"
        ],
        "correctIndex": 3,
        "image": "images/image18.jpg"
      },
      {
        "question": "Check the items that can be a possible threat",
        "options": [
          "All alternatives",
          "Cargo tampering and Stowaways",
          "Bombing and Sabotage",
          "\"Piracy, Hijacking and Smuggling\""
        ],
        "correctIndex": 0,
        "image": "images/image179.jpg"
      },
      {
        "question": "In relation to OPA 90, Which of the following statements is correct?",
        "options": [
          "COTP-zones may have additional rules and regulations",
          "OPA-90 specify all oil cargo related rules and regulations",
          "After implementation of OPA-90 there are no area specific rules andregulations",
          "OPA-90 specify rules and regulations for all COTP-zones"
        ],
        "correctIndex": 0,
        "image": "images/image40.jpg"
      },
      {
        "question": "During helicopter evacuation of an injured man, what course should the ship steer?",
        "options": [
          "As instructed by the helicopter pilot",
          "Directly into the wind",
          "With the wind astern so that the effect of the wind is reduced as much as possible",
          "With the wind fine on the bow opposite to the helicopter operating area"
        ],
        "correctIndex": 0,
        "image": "images/image134.jpg"
      },
      {
        "question": "The first time you send a DSC distress alert via the HF-band, you prefer the?",
        "options": [
          "16 MHz band",
          "22 MHz band",
          "12 MHz band",
          "8 MHz band"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "The ID of an Inmarsat M station on board starts with:",
        "options": [
          "1",
          "6",
          "3",
          "4"
        ],
        "correctIndex": 1,
        "image": "images/image4.jpg"
      },
      {
        "question": "What percentage of the ship's stores are required to be inspected at Security Level 3?",
        "options": [
          "5-20% of the ship's stores are required to be inspected at Security Level 3.",
          "100% of the ship's stores are required to be inspected at Security Level 3.",
          "25-50% of the ship's stores are required to be inspected at Security Level 3.",
          "50-80% of the ship's stores are required to be inspected at Security Level 3."
        ],
        "correctIndex": 1,
        "image": "images/image256.jpg"
      },
      {
        "question": "Eavesdropping and phone taps are examples of which threat to information security?",
        "options": [
          "Espionage",
          "Subversion",
          "Sabotage",
          "Terrorism"
        ],
        "correctIndex": 0,
        "image": "images/image138.jpg"
      },
      {
        "question": "When a coastguard-station wants to send a gale-warning by DSC it will happen in the category:",
        "options": [
          "Routine",
          "Safety",
          "Urgency",
          "Security"
        ],
        "correctIndex": 1,
        "image": "images/image11.jpg"
      },
      {
        "question": "You are on a vessel 10 nautical miles off the coast of Nigeria, West Africa. Are you allowed to dump empty glass bottles overboard ?",
        "options": [
          "Yes, glass bottles can be dumped overboard",
          "Yes, the bottles can be dumped if they are ground so that the resulting particles can pass through a screen with 50 mm openings",
          "Yes, the bottles can be dumped if they are ground so that the resulting particles can pass through a screen with 25 mm openings",
          "No, glass bottles can not be dumped overboard"
        ],
        "correctIndex": 3,
        "image": "images/image251.jpg"
      },
      {
        "question": "Give the meaning of the following symbol",
        "options": [
          "EPIRB",
          "Rocket parachute flare",
          "Survival craft portable radio",
          "Survival craft distress pyrotechnic signals"
        ],
        "correctIndex": 1,
        "image": "images/image231.jpg"
      },
      {
        "question": "A vessel is coming alongside a pier with two tugs assisting and there is little wind or current. How is it best to use the tugs?",
        "options": [
          "As shown in 'A', pushing but also made fast to check the vessel's movement towards the berth with a pull off",
          "As shown in 'B', made fast forward and aft using the centre leads to enable the ship to be positioned",
          "As shown in 'A', pushing on ship's side, but not made fast to allow the tug to move to another position if needed",
          "As shown in 'C', but only one tug made fast forward for pulling and the other pushing aft"
        ],
        "correctIndex": 0,
        "image": "images/image550.jpg"
      },
      {
        "question": "Which organization or administration is responsible for surveys and inspections of ships, and the issue of Safety Certificates?",
        "options": [
          "International Maritime Organization (IMO)",
          "International Labor Organization (ILO)",
          "Government Authorities of the Flag State",
          "Ships Classification Associations (Lloyd's, American Bureau of Shipping, The Norwegian Veritas, Germanische Lloyd's, etc.)"
        ],
        "correctIndex": 2,
        "image": "images/image161.jpg"
      },
      {
        "question": "What mode must be used on the MF/HF transmission when making a radiotelephone call:",
        "options": [
          "J3E",
          "F1B/J2B",
          "H3E",
          "G3E"
        ],
        "correctIndex": 0,
        "image": "images/image6.jpg"
      },
      {
        "question": "Which PPM is allowed for discharging of \"Bilge Water\" overboard?",
        "options": [
          "15 PPM",
          "0 PPM",
          "50 PPM",
          "100 PPM"
        ],
        "correctIndex": 0,
        "image": "images/image81.jpg"
      },
      {
        "question": "The position that is determined by built in GPS-receiver in an Inmarsat-EPIRB has an accuracy of about:",
        "options": [
          "4200 meters",
          "1200 meters",
          "200 meters",
          "2200 meters"
        ],
        "correctIndex": 2,
        "image": "images/image15.jpg"
      },
      {
        "question": "\"RECEIVED MAYDAY\" is used in a:",
        "options": [
          "Receipt of a distress alert",
          "Distress alert",
          "Supplementary receipt on a distress alert",
          "When received a weather report"
        ],
        "correctIndex": 0,
        "image": "images/image8.jpg"
      },
      {
        "question": "How many annexes do we find in MARPOL and what is the content of annex 1?",
        "options": [
          "We find 4 annexes in MARPOL and annex 1 regulations for the prevention of pollution by garbage",
          "We find 5 annexes in MARPOL and annex 1 is the regulations for the prevention of pollution by sewage",
          "We find 1 annexes in MARPOL and annex 1 regulations for the prevention of pollution by chemicals.",
          "We find 6 annexes in MARPOL and annex 1 is the regulations for the prevention of pollution by oil"
        ],
        "correctIndex": 3,
        "image": "images/image42.jpg"
      },
      {
        "question": "The prescribed test of EPIRB, SART and portable VHF radio set must be entered in:",
        "options": [
          "Maintenance manual",
          "Radio equipment manual",
          "Equipment survey",
          "Ship's radio log"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "If you use chemicals for cleaning up an oil-spill on the water, what would the chemicals do?",
        "options": [
          "Absorb the oil for easy removal",
          "Remove the oil from the water",
          "Disperse or dissolve the oil into the water",
          "Contain the oil within a small area"
        ],
        "correctIndex": 2,
        "image": "images/image42.jpg"
      },
      {
        "question": "Is it necessary to be certified to be a lifeboat-commander?",
        "options": [
          "No, the only thing you need is one hour instruction from a deck officer.",
          "Yes, you must attend a one week course at a approved course center.",
          "No",
          "Yes, you must attend to a course held by certified personnel, and provide evidence of having maintained the required standards of competence every five years."
        ],
        "correctIndex": 3,
        "image": "images/image177.jpg"
      },
      {
        "question": "The DSC-controller displays the following: DOO:    246321000 CH16 ; S distress       flooding After receiving this DSC message nothing more is received. Sending receipt on channel 16 does not give any response. One should first:",
        "options": [
          "Send a DSC acknowledgement",
          "Inform the safety officer",
          "Listen out on VHF channel 67",
          "Send a DSC distress alert relay"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "This vessel is encountered at the mouth of a river. According to the International Regulations for Preventing Collisions and the illustrated shapes, what type of vessel is it?",
        "options": [
          "This is a vessel engaged in dredging or underwater operations. The two balls in a vertical line indicate the side on which an obstruction exists; the two diamonds in a vertical line indicate the side on which it is safe to pass; the ball / diamond / /ball in a vertical line indiacte that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged in dredging or underwater operations. The two balls in a vertical line indicate the side on which it is safe to pass; the two diamonds in a vertical line indicate the side on which an obstruction exists; the ball / diamond / ball indicate that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged on port security duties. The two balls in a vertical line indicate that the port is closed; the two diamonds in a vertical line indicate that the port is engaged in mine-clearance operations; the ball / diamond / ball in a vertical line indicate that the vessel is restricted in her ability to manoeuvre",
          "This is a vessel engaged in mine-clearance opetrations. The two balls in a vertical line indicate that it has a sweep mechanism deployed; the two diamonds in a vertical line indicate that the vessel should be given a clearance of at least 1000 metres; the ball / diamond / ball indicate that the vessel is restricted in her ability to manoeuvre"
        ],
        "correctIndex": 0,
        "image": "images/image564.jpg"
      },
      {
        "question": "What is full form of VRP (OPA-90)",
        "options": [
          "Vessel Reporting Procedures",
          "Vessel Report Plan",
          "Vessel Response Plan",
          "Vessel Response Procurement"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "A deep draught vessel sailing in a very narrow channel can develop a sudden sheer as it slows down. What could be the cause of this?",
        "options": [
          "The vessel stopping shifts the pivot point forward and creates a turning moment and results in the ship swinging towards the bank.",
          "The hydrodynamic interaction effects from the banks of the shallow water channel acts on the stern causing the vessel to sheer strongly",
          "The large volume of water dragged behind the vessel continues to move forward and cause a strong turning moment on the stern of the vessel",
          "The shallow water reduces the effectiveness of the rudder and when the vessel stops any applied rudder will become suddenly more effective."
        ],
        "correctIndex": 2,
        "image": "images/image531.jpg"
      },
      {
        "question": "What type of vessel is identified by the displayed shapes?",
        "options": [
          "A vessel not under command",
          "A vessel that is engaged in towing",
          "A vessel restricted in its ability to manoeuvre",
          "A vessel that is constrained by draught"
        ],
        "correctIndex": 0,
        "image": "images/image495.jpg"
      },
      {
        "question": "Which one of the given requirements regarding survival craft muster and embarkation arrangements corresponds to the present SOLAS regulations?",
        "options": [
          "Searchlights to be provided at the launching station.",
          "Muster and embarkation stations shall be readily accessible from accommondation and work areas.",
          "Davit-launched survival craft muster and embarkation stations shall be arranged to enable stretchers to be placed in survival craft.",
          "Muster and embarkation stations are to be arranged separately to improve working conditions."
        ],
        "correctIndex": 1,
        "image": "images/image79.jpg"
      },
      {
        "question": "What has the most influence on the turning effect from an attached tug?",
        "options": [
          "Having a tug attached to a fairlead close to the pivot point",
          "Having a tug attached to the stern centre lead on a tug line",
          "Having a tug attached to the bow on a tug line",
          "The position of the applied tug force relative to the ship's pivot point"
        ],
        "correctIndex": 3,
        "image": "images/image534.jpg"
      },
      {
        "question": "When a vessel violates the oil pollution laws, who may be held responsible?",
        "options": [
          "Any one involved in the operation",
          "Officers only",
          "Captain only",
          "Shipowners only"
        ],
        "correctIndex": 0,
        "image": "images/image57.jpg"
      },
      {
        "question": "What are the conditions that influence the efforts for organising the fire fighting?",
        "options": [
          "Where the fire break out, the ships mobility, distance to the fire station and the size of the fire brigade",
          "Where the fire breaks out, how many fire teams are available, the strength of the fire, the ships mobility, what is burning and communication",
          "Distance to the fire station and the size of the fire brigade, what is burning, possibility to get water",
          "Where the fire break out, how many fire teams are available, what is burning, distance to the fire station"
        ],
        "correctIndex": 1,
        "image": "images/image25.jpg"
      },
      {
        "question": "What manoeuvre should be carried out in case of a fire onboard a ship?",
        "options": [
          "Keep the stem up against the wind if possible",
          "Reduce speed and, if possible, keep the fire zone to the leeward of the ship",
          "Continue on course and speed",
          "Let the ship follow the wind in order to reduce the oxygen supply"
        ],
        "correctIndex": 1,
        "image": "images/image68.jpg"
      },
      {
        "question": "If one requires medical advice by means of an Inmarsat-C terminal one should use the following address:",
        "options": [
          "Sick Seaman",
          "MED +",
          "32",
          "Radiomedical"
        ],
        "correctIndex": 2,
        "image": "images/image12.jpg"
      },
      {
        "question": "Which IMO convention takes care of the human safety at sea ?",
        "options": [
          "the STCW 78/95",
          "there isn't any conventions that take care of the human safety at sea",
          "The SOLAS convention",
          "the MARPOL convention"
        ],
        "correctIndex": 2,
        "image": "images/image159.jpg"
      },
      {
        "question": "Which of following are security duties?",
        "options": [
          "Calibration of security equipment",
          "Monitoring of restricted areas",
          "All alternatives",
          "Checking ID of visitors onboard"
        ],
        "correctIndex": 2,
        "image": "images/image118.jpg"
      },
      {
        "question": "Which of the following would be considered pollution, when discharged overboard, under the US water pollution laws?",
        "options": [
          "All of the mentioned",
          "Garbage",
          "Oil",
          "Hazardous substances"
        ],
        "correctIndex": 0,
        "image": "images/image57.jpg"
      },
      {
        "question": "OPA-90 is referring to a Qualified Individual (QI)",
        "options": [
          "QI is representing the USCG",
          "QI is an authorised individual, situated in the US, and contracted by the owner or operator of the vessel",
          "An individual certified by USCG to handle oil spills",
          "QI is the owner's contingency leader"
        ],
        "correctIndex": 1,
        "image": "images/image40.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: TX call:Selectiveto: 02114200 Category:RoutineUSB:telephony DSC Tx  2189.5 kHzsave>send<  This DSC-message must be transmitted in the mode:",
        "options": [
          "J3E",
          "H3E",
          "G3E",
          "F1B"
        ],
        "correctIndex": 3,
        "image": "images/image4.jpg"
      },
      {
        "question": "For calling a coast-station by VHF one should preferably use:",
        "options": [
          "A special calling channel of that coast-station",
          "Channel 70",
          "A working channel of the nearest shore-station of that coast-station",
          "Channel 16"
        ],
        "correctIndex": 2,
        "image": "images/image1.jpg"
      },
      {
        "question": "In case of a pollution in US waters, who shall notify the cleaning up contractor (OPA-90)",
        "options": [
          "Emergency response team",
          "The Master",
          "The shipowner",
          "Qualified Individual"
        ],
        "correctIndex": 3,
        "image": "images/image40.jpg"
      },
      {
        "question": "What is the emergency frequency on M.F. (Medium frequency) radio?",
        "options": [
          "2617 Hz",
          "1616 Hz",
          "1718 Hz",
          "2182 Hz"
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "Which of these actions should you take it your ship is successfully boarded by armed pirates?",
        "options": [
          "Scream in fear and refuse to cooperate.",
          "Fight back.",
          "Keep quiet and ignore any questions you're asked.",
          "Assure your captors that you're not planning an attack to overthrow them."
        ],
        "correctIndex": 3,
        "image": "images/image241.jpg"
      },
      {
        "question": "On area A3 the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "The use of DSC and/or INMARSAT C",
          "The use of MF and/or HF R/T",
          "The use of HF DSC",
          "The use of HF/MF and/or VHF R/T and/or INMARSAT C"
        ],
        "correctIndex": 3,
        "image": "images/image21.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of MF DSC and INMARSAT Epirbs",
          "The use of HF DSC and INMARSAT Epirbs",
          "The use of VHF DSC and VHF Epirbs",
          "The use of HF DSC and COSPAS SARSAT Epirbs"
        ],
        "correctIndex": 3,
        "image": "images/image39.jpg"
      },
      {
        "question": "Onboard training should be organised in such a way that:",
        "options": [
          "It is an integral part of the overall training plan and does not contravene with the rest hours of the crew",
          "It does not contravene with the rest hours of the crew and each crew member is trained individually",
          "Each crew member is trained individually",
          "none of the above"
        ],
        "correctIndex": 0,
        "image": "images/image84.jpg"
      },
      {
        "question": "The steps of the embarkation ladder used must be spaced apart by a distance of:",
        "options": [
          "300 mm",
          "200 mm",
          "equally spaced, not less than 200 mm or more than 280 mm",
          "Equally spaced and not less than 300 mm or more than 380 mm"
        ],
        "correctIndex": 3,
        "image": "images/image65.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "the use of MF and/or HF R/T",
          "the use of HF DSC",
          "the use of HF/MF and/or VHF R/T",
          "the use of SARSAT COSPAS Epirb"
        ],
        "correctIndex": 2,
        "image": "images/image8.jpg"
      },
      {
        "question": "On area A4 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "The use of MF DSC",
          "The use of HF DSC",
          "The use of SART transponders",
          "The use of SARSAT COSPAS Epirbs"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A Ship Security Assessment is integral to the creation of your ship's security plan.",
        "options": [
          "TRUE",
          "FALSE",
          ".",
          "."
        ],
        "correctIndex": 0,
        "image": "images/image91.jpg"
      },
      {
        "question": "What is SOPEP?",
        "options": [
          "A Ship-Owners Permitted Entry Plan",
          "A Shipboard Oil Pollution Emergency Plan",
          "A Shipboard Oil Pollution Exemption Procedure",
          "A Seafarer's Offical Pension and Employment Payment scheme"
        ],
        "correctIndex": 1,
        "image": "images/image52.jpg"
      },
      {
        "question": "On area A3 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "the use of SARSAT COSPAS Epirbs",
          "the use of HF DSC",
          "the use of MF DSC",
          "the use of SART transponders"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "A large vessel is proceeding under its own power in a narrow channel, assisted by a tug. Where should the tug be connected to best assist the ship maintain steerageway?",
        "options": [
          "Made fast on a line through the centre lead forward",
          "Made fast on a line through the centre lead aft",
          "Standing-by - ready for use anywhere, as required",
          "Pushing alongside - either side"
        ],
        "correctIndex": 1,
        "image": "images/image562.jpg"
      },
      {
        "question": "What is the top priority if an incident occurs in US waters (OPA-90)",
        "options": [
          "Any immediate action to prevent loss of time",
          "Protection of the environment",
          "Safety of ship and crew",
          "Prevention of oil pollution"
        ],
        "correctIndex": 2,
        "image": "images/image40.jpg"
      },
      {
        "question": "Which personnel must undergo familiarization training on board?",
        "options": [
          "Only the deck officers",
          "Only catering staff",
          "Everyone",
          "Only the ratings"
        ],
        "correctIndex": 2,
        "image": "images/image246.jpg"
      },
      {
        "question": "Why is it important to have good a relationship between the crew on board a vessel?",
        "options": [
          "It will prevent accidents from happening",
          "It encourages crew to extend their contract",
          "Crew comes to know each others problems",
          "It leads to better work performance and positive atmosphere among the crew"
        ],
        "correctIndex": 3,
        "image": "images/image1.jpg"
      },
      {
        "question": "On area A3 the function \"Reception of shore to ship distress alerts\" is mainly based on:",
        "options": [
          "The use of MF DSC and INMARSAT C SAFETYNET",
          "The use of SARSAT COSPAS Epirbs and NAVTEX",
          "The use of VHF DSC and NAVTEX",
          "The use of HF DSC and INMARSAT C SAFETYNET"
        ],
        "correctIndex": 3,
        "image": "images/image6.jpg"
      },
      {
        "question": "Substances, materials and articles shall be stowed as indicated in the Dangerous Goods List of the IMDG Code, in accordance with a series of stowage categories, which are designated as:",
        "options": [
          "Three categories, numbered I, II and III.",
          "10 categories, labelled A-K (excluding I).",
          "5 categories, labelled A-E.",
          "10 categories, numbered 1-10."
        ],
        "correctIndex": 2,
        "image": "images/image499.jpg"
      },
      {
        "question": "In area A1 the function \"Reception of shore to ship distress alerts\" is mainly based on:",
        "options": [
          "the use of MF DSC",
          "the use of SARSAT COSPAS Epirbs",
          "the use of SART transponders",
          "the use of VHF DSC"
        ],
        "correctIndex": 3,
        "image": "images/image330.jpg"
      },
      {
        "question": "Whether or not the NAVTEX is functioning properly, can be checked using:",
        "options": [
          "A testing program built in for this purpose",
          "A company test procedure",
          "A compulsory built-in alarm for defects",
          "Test transmissions specially broadcast for this purpose once a week"
        ],
        "correctIndex": 0,
        "image": "images/image15.jpg"
      },
      {
        "question": "What should you do with the ashes from your vessels incinerator if you have incinerated garbage containing plastics?",
        "options": [
          "Discharge at sea providing you are more than 25 miles offshore",
          "Discharge at sea providing you are not in any river or estuary",
          "MARPOL demands discharge to a shore facility, regardless of content",
          "Discharge at sea providing you are more than 12 miles offshore"
        ],
        "correctIndex": 2,
        "image": "images/image230.jpg"
      },
      {
        "question": "In area A2, the function \"Transmission and reception of on scene communications\" is mainly based on:",
        "options": [
          "The use of VHF DSC",
          "The use of MF DSC",
          "The use of MF and/or VHF R/T",
          "The use of SART transponders"
        ],
        "correctIndex": 2,
        "image": "images/image487.jpg"
      },
      {
        "question": "In area A1 the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of VHF DSC",
          "The use of SART transponders",
          "The use of HF DSC",
          "The use of portable VHF"
        ],
        "correctIndex": 0,
        "image": "images/image295.jpg"
      },
      {
        "question": "Which of the following requirements regarding on board stability data corresponds to present regulations? (NSCL 4/12.1)",
        "options": [
          "A calculation example showing use of \"GM\" limitation curves.",
          "Stability data produced by stability calculation instruments.",
          "Drawings and caculations documenting the stability of the ship, both in intact and all possible damage condition.",
          "A calculation example showing the use of \"KG\" limitation curves."
        ],
        "correctIndex": 3,
        "image": "images/image180.jpg"
      },
      {
        "question": "That the 406 MHz Cospas-Sarsat EPIRB is in proper working order can be tested with:",
        "options": [
          "Test transmissions from Cospas-Sarsat satellites",
          "The testing function of the device",
          "Regulation monthly test transmissions from RCC 's",
          "Requesting RCC for the test"
        ],
        "correctIndex": 1,
        "image": "images/image412.jpg"
      },
      {
        "question": "In radio telephony what is the \"URGENCY CALL\" which should be used to indicate that you have a very urgent message to transmit concerning the safety of another vessel or person?",
        "options": [
          "Pan Pan (3 times)",
          "Mayday (3 times)",
          "Securite (3 times)",
          "Victor Victor (3 times)"
        ],
        "correctIndex": 0,
        "image": "images/image13.jpg"
      },
      {
        "question": "In area A2, the function \"Transmission of ship to shore distress alerts\" is mainly based on:",
        "options": [
          "The use of INMARSAT Epirbs",
          "The use of MF DSC",
          "The use of SARSAT COSPAS Epirbs",
          "The use of VHF DSC"
        ],
        "correctIndex": 1,
        "image": "images/image536.jpg"
      },
      {
        "question": "In area A1 the function \"Reception of shore to ship distress alerts\" is mainly based on:\"",
        "options": [
          "The use of VHF DSC",
          "The use of MF DSC",
          "The use of SARSAT COSPAS Epirbs",
          "The use of SART transponders"
        ],
        "correctIndex": 0,
        "image": "images/image10.jpg"
      },
      {
        "question": "Onboard the following message is received on the DSC controller: DOO: 245329000 CH16 ; S distress ack 244123000 What station sent the distress acknowledgement?",
        "options": [
          "245329000",
          "244123000",
          "None of the given",
          "002453290"
        ],
        "correctIndex": 0,
        "image": "images/image4.jpg"
      },
      {
        "question": "An Inmarsat-C terminal is suitable for:",
        "options": [
          "Telephony, fax and data",
          "E-mail, SMS, telex, chart and weather updates.",
          "Telephony, telex, fax and data",
          "Telex only"
        ],
        "correctIndex": 1,
        "image": "images/image12.jpg"
      },
      {
        "question": "Where several rescue units are engaged in a search and rescue operation, one of them may be designated as the On-Scene Coordinator(OSC). Which of the following descibes how this appointment will be made?",
        "options": [
          "The role of OSC is only taken by a naval ship close to the area",
          "The OSC will always be designated by the Search and Rescue Mission Coordinator",
          "An aircraft is usually appointed as the OSC because of their speed",
          "The coastguard will appoint the OSC using their vessel database to assess suitability"
        ],
        "correctIndex": 1,
        "image": "images/image239.jpg"
      },
      {
        "question": "In area A1 the function \"Transmission and reception of signals for locating\" is mainly based on:",
        "options": [
          "the use of SART transponders",
          "the use of SARSAT COSPAS Epirbs",
          "the use of VHF DSC",
          "the use of INMARSAT Epirbs"
        ],
        "correctIndex": 0,
        "image": "images/image70.jpg"
      },
      {
        "question": "As far as possible, all engines in lifeboats and rescue boats should be run",
        "options": [
          "for a total period of not less than 3 minutes every week",
          "for a total period of not less than 3 minutes every month",
          "for a total period of not less than 5 minutes every month",
          "for a total period of not less than 10 minutes every week"
        ],
        "correctIndex": 0,
        "image": "images/image1000.jpg"
      },
      {
        "question": "What is the result of an \"unusually large metacentric height\"?",
        "options": [
          "The vessel will roll violently",
          "The vessel will have a great bending moment",
          "The vessel's tweendeck heights is too high",
          "The vessel will roll slowly or be unstable"
        ],
        "correctIndex": 0,
        "image": "images/image1000.jpg"
      },
      {
        "question": "The emergency battery of a GMDSS portable radio:",
        "options": [
          "Must be replaced before the expiry date is exceeded",
          "Must be charged after expiry date",
          "Cannot be replaced",
          "Must be tested once a week"
        ],
        "correctIndex": 0,
        "image": "images/image16.jpg"
      },
      {
        "question": "What is usually the effect on G when the ship is damaged below the waterline, with water ingress?",
        "options": [
          "It is unchanged",
          "It rises",
          "It first rises then lowers",
          "It lowers"
        ],
        "correctIndex": 3,
        "image": "images/image1000.jpg"
      },
      {
        "question": "The DSC-controller displays the following: DOO: 246321000 CH16 ; S distress flooding After receiving this DSC message nothing more is received. Sending receipt on channel 16 does not give any response. One should first:",
        "options": [
          "Listen out on VHF channel 67",
          "Inform the safety officer",
          "Send a DSC distress alert relay",
          "Send a DSC acknowledgement"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "The display of the DSC-controller on board is showing the following lines: TX call:Selectiveto: 02114200 Category:RoutineUSB:telephony DSC Tx 2189.5 kHzsave>send<  This DSC-message must be transmitted in the mode:",
        "options": [
          "H3E",
          "J3E",
          "F1B",
          "G3E"
        ],
        "correctIndex": 2,
        "image": "images/image4.jpg"
      },
      {
        "question": "A dynamic test of the winch brake with a proof load equal to 1.1 times the weight of the survival craft or rescue boat and its full complement of persons and equipment should be carried out",
        "options": [
          "every three years",
          "every year",
          "every five years",
          "every ten years"
        ],
        "correctIndex": 2,
        "image": "images/image1000.jpg"
      }
    ]
  }
];
