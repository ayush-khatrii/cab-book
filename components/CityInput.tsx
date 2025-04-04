import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const CityInput = () => {
  const [state, setstate] = useState("");
  const [cities, setCities] = useState<any>([]);
  const getData = async () => {
    try {
      const url = `https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode?countrycode=in&statecode=${state}`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '316eb18c05mshe6bc5edd62d83a3p1b3cfejsn01b273bb3860',
          'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        }
      };

      const response = await fetch(url, options);
      const result = await response.json();
      setCities(result);
      console.log(result);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, [state])


  return (
    <div className="my-10 space-y-1.5">
      <Select>
        <Input
          type="text"
          placeholder="State"
          className="w-full"
          value={state}
          onChange={(e) => setstate(e.target.value)}
        />
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cities" />
        </SelectTrigger>
        <SelectContent>
          {
            cities.slice(0, 100).map((city: any) => (
              <SelectItem key={city.id} value={city.name}>{city.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  )
}

export default CityInput