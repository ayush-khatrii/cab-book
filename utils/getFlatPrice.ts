import { priceMatrix } from "@/constants";

export const getFlatPrice = (
  fromCity: string,
  toCity: string,
  cabType: string,
  travelType: string
): string => {
  if (travelType === "Self Drive") {
    if (cabType.toUpperCase() === "SUV") return "3500";
    if (cabType.toUpperCase() === "SEDAN") return "₹3000";
    if (cabType.toUpperCase() === "HATCHBACK") return "2500";
  }
  const from = fromCity.toUpperCase().trim().split(" ").join("_") as keyof typeof priceMatrix;
  if (!priceMatrix[from]) return "To Book Call on +917984986324";

  const to = toCity.toUpperCase().trim().split(" ").join("_") as keyof (typeof priceMatrix)[typeof from];
  if (!priceMatrix[from][to]) return "To Book Call on +917984986324";

  const trip = travelType.toUpperCase() as keyof (typeof priceMatrix)[typeof from][typeof to];
  if (!priceMatrix[from][to][trip]) return "To Book Call on +917984986324";

  const cab = cabType.toUpperCase() as keyof (typeof priceMatrix)[typeof from][typeof to][typeof trip];
  const price = priceMatrix[from][to][trip][cab];

  return price ? `₹${price}` : "To Book Call on +917984986324";
};

