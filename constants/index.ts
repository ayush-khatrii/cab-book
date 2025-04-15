import { Cab } from "@/types";

export const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Cabs",
    path: "/cabs"
  },
  {
    name: "Contact",
    path: "/contact"
  },
];
export const cabs: Cab[] = [
  {
    id: 1,
    name: 'XL6 (SUV)',
    image: '/xl6.png',
    background: '/city-road.png',
    seats: 6,
    type: "SUV",
    passengers: 6,
    pricePerKm: 15,
  },
  {
    id: 2,
    name: 'Ertiga (SUV)',
    image: '/ertiga.png',
    background: '/city-road.png',
    seats: 6,
    passengers: 6,
    type: "SUV",
    pricePerKm: 13,
  },
  {
    id: 3,
    name: 'Swift (HatchBack)',
    image: '/swift-dzire.png',
    background: '/city-road.png',
    seats: 4,
    passengers: 4,
    type: "HATCHBACK",
    pricePerKm: 11,
  },
  {
    id: 4,
    name: 'Swift Dzire (Sedan)',
    image: '/dzire.png',
    background: '/city-road.png',
    seats: 4,
    passengers: 4,
    type: "SEDAN",
    pricePerKm: 11,
  },
];
export const packages = [
  {
    id: "1",
    timeTravel: "8hr/80kms",
  },
  {
    id: "2",
    timeTravel: "12hr/120kms",
  },
  {
    id: "3",
    timeTravel: "16hr/160kms",
  },
  {
    id: "4",
    timeTravel: "20hr/200kms",
  },
  {
    id: "5",
    timeTravel: "24hr/240kms",
  }
];



// constants/prices.ts
export const priceMatrix = {
  // FROM GIMB TO DIFFERENT LOCATIONS & DIFFERENT LOCATIONS TO GIMB
  GANDHIDHAM: {
    BHACHAU: {
      "ONE-WAY": {
        SUV: 2500,
        SEDAN: 2000,
      }
    },
    MUNDRA: {
      "ONE-WAY": {
        SUV: 2000,
        SEDAN: 1500,
      }
    },
    BHUJ: {
      "ONE-WAY": {
        SUV: 2000,
        SEDAN: 1500,
      }
    },
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 4500,
        SEDAN: 3500,
      },
    },
    RAJKOT: {
      "ONE-WAY": {
        SUV: 4000,
        SEDAN: 3000,
      },
    },
    JAMNAGAR: {
      "ONE-WAY": {
        SUV: 5500,
        SEDAN: 4500,
      },
    },
    SOMNATH: {
      "ONE-WAY": {
        SUV: 8500,
        SEDAN: 7500,
      },
    },
    DWARKA: {
      "ONE-WAY": {
        SUV: 8500,
        SEDAN: 7500,
      },
    },
    JUNAGADH: {
      "ONE-WAY": {
        SUV: 5700,
        SEDAN: 4700,
      },
    },
    PALANPUR: {
      "ONE-WAY": {
        SUV: 5000,
        SEDAN: 4000,
      },
    },
    BARODA: {
      "ONE-WAY": {
        SUV: 5500,
        SEDAN: 4500,
      },
    },
    SURAT: {
      "ONE-WAY": {
        SUV: 12000,
        SEDAN: 11000,
      },
    },
    BHAVNAGAR: {
      "ONE-WAY": {
        SUV: 5600,
        SEDAN: 4600,
      },
    },
  },
  BHACHAU: {
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 2500,
        SEDAN: 2000,
      }
    },
  },
  MUNDRA: {
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 2000,
        SEDAN: 1500,
      }
    },
  },
  BHUJ: {
    MUNDRA: {
      "ONE-WAY": {
        SUV: 2000,
        SEDAN: 1500,
      }
    },
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 5000,
        SEDAN: 4000,
      }
    },
    RAJKOT: {
      "ONE-WAY": {
        SUV: 4500,
        SEDAN: 3500,
      }
    },
    BHAVNAGAR: {
      "ONE-WAY": {
        SUV: 7000,
        SEDAN: 8500,
      }
    },
    DWARKA: {
      "ONE-WAY": {
        SUV: 9500,
        SEDAN: 8500,
      }
    },
    SOMNATH: {
      "ONE-WAY": {
        SUV: 9000,
        SEDAN: 8000,
      }
    },
    JUNAGADH: {
      "ONE-WAY": {
        SUV: 6100,
        SEDAN: 5100,
      }
    },
    SURAT: {
      "ONE-WAY": {
        SUV: 14000,
        SEDAN: 13000,
      }
    },
    BARODA: {
      "ONE-WAY": {
        SUV: 6000,
        SEDAN: 5000,
      }
    },
    PALANPUR: {
      "ONE-WAY": {
        SUV: 5600,
        SEDAN: 4600,
      }
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 2000,
        SEDAN: 1500,
      }
    },
  },
  AHMEDABAD: {
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 4500,
        SEDAN: 3500,
      },
    },
    RAJKOT: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    BARODA: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    SURAT: {
      "ONE-WAY": {
        SUV: 5800,
        SEDAN: 4800,
      },
    },
    JAMNAGAR: {
      "ONE-WAY": {
        SUV: 5000,
        SEDAN: 4000,
      },
    },
    BHAVNAGAR: {
      "ONE-WAY": {
        SUV: 4500,
        SEDAN: 3500,
      },
    },
    SOMNATH: {
      "ONE-WAY": {
        SUV: 9500,
        SEDAN: 8500,
      },
    },
    DWARKA: {
      "ONE-WAY": {
        SUV: 9700,
        SEDAN: 8700,
      },
    },
    PALANPUR: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    JUNAGADH: {
      "ONE-WAY": {
        SUV: 6000,
        SEDAN: 5000,
      },
    },
  },
  RAJKOT: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 4000,
        SEDAN: 3000,
      },
    },
  },
  JAMNAGAR: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 5000,
        SEDAN: 4000,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 5500,
        SEDAN: 4500,
      },
    },
  },
  SOMNATH: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 9500,
        SEDAN: 8500,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 8500,
        SEDAN: 7500,
      },
    },
  },
  DWARKA: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 9700,
        SEDAN: 8700,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 8500,
        SEDAN: 7500,
      },
    },
  },
  JUNAGADH: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 6000,
        SEDAN: 5000,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 5700,
        SEDAN: 4700,
      },
    },
  },
  PALANPUR: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 5000,
        SEDAN: 4000,
      },
    },
  },
  BARODA: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 3500,
        SEDAN: 2500,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 5500,
        SEDAN: 4500,
      },
    },
  },
  SURAT: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 5800,
        SEDAN: 4800,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 12000,
        SEDAN: 11000,
      },
    },
  },
  BHAVNAGAR: {
    AHMEDABAD: {
      "ONE-WAY": {
        SUV: 4500,
        SEDAN: 3500,
      },
    },
    GANDHIDHAM: {
      "ONE-WAY": {
        SUV: 5600,
        SEDAN: 4600,
      },
    },
  },
} as const;


