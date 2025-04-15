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
    seats: "6+1",
    type: "SUV",
    passengers: "7 person",
    pricePerKm: 15,
  },
  {
    id: 2,
    name: 'Ertiga (SUV)',
    image: '/ertiga.png',
    background: '/city-road.png',
    seats: "6+1",
    passengers: "7 person",
    type: "SUV",
    pricePerKm: 13,
  },
  {
    id: 3,
    name: 'Swift (HatchBack)',
    image: '/swift-dzire.png',
    background: '/city-road.png',
    seats: "3+1",
    passengers: "4 person",
    type: "HATCHBACK",
    pricePerKm: 11,
  },
  {
    id: 4,
    name: 'Swift Dzire (Sedan)',
    image: '/dzire.png',
    background: '/city-road.png',
    seats: "3+1",
    passengers: "4 person",
    type: "SEDAN",
    pricePerKm: 11,
  },
  {
    id: 5,
    name: 'Innova (SUV)',
    image: '/innova-img.png',
    background: '/city-road.png',
    seats: "6+1",
    type: "SUV",
    passengers: "7 person",
    pricePerKm: 18,
  }
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

export const localPriceMatrix = {
  "8hr,80/km": {
    SUV: 3500,
    SEDAN: 2500
  },
  "12hr,120/km": {
    SUV: 4200,
    SEDAN: 3200
  }
}


