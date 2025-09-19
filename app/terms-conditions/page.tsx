"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsConditions() {
  const sections = [
    {
      id: 1,
      title_en: "Vehicle Usage",
      title_hi: "वाहन का उपयोग",
      content_en: [
        "The Renter must only use the vehicle for personal purposes and within permissible driving limits.",
        "Subleasing or lending the vehicle to third parties is strictly prohibited.",
        "The Renter must not engage in illegal activities while operating the vehicle.",
      ],
      content_hi: [
        "किराएदार को वाहन का उपयोग केवल व्यक्तिगत उद्देश्यों और निर्धारित ड्राइविंग सीमाओं के भीतर ही करना चाहिए।",
        "किसी तीसरे पक्ष को वाहन को उप-किराए पर देना या उधार देना सख्त वर्जित है।",
        "किराएदार को वाहन चलाते समय किसी भी अवैध गतिविधि में शामिल नहीं होना चाहिए।",
      ],
    },
    {
      id: 2,
      title_en: "Driver's Responsibility",
      title_hi: "चालक की ज़िम्मेदारी",
      content_en: [
        "The Renter must hold a valid driving license.",
        "The Renter is responsible for all parking tickets, traffic violations, toll tax, border tax and penalties during the rental period.",
        "The Renter must not operate the vehicle under the influence of alcohol, drugs, or any other intoxicants.",
      ],
      content_hi: [
        "किराएदार के पास वैध ड्राइविंग लाइसेंस होना चाहिए।",
        "किराए की अवधि के दौरान किराएदार सभी पार्किंग टिकट, यातायात उल्लंघन, टोल टैक्स, सीमा कर और दंड के लिए जिम्मेदार होगा।",
        "किराएदार को शराब, ड्रग्स या किसी अन्य नशीले पदार्थ के प्रभाव में वाहन नहीं चलाना चाहिए।",
      ],
    },
    {
      id: 3,
      title_en: "Vehicle Condition and Maintenance",
      title_hi: "वाहन की स्थिति और रखरखाव",
      content_en: [
        "The Renter must return the vehicle in the same condition as received, except for normal wear and tear.",
        "In the event of damage, loss, or theft of the vehicle, the Renter shall bear the repair/replacement costs/cost of the part damaged (whether replaced later or not).",
        "Routine maintenance and fuel costs during the rental period are the Renter's responsibility.",
        "In case of damage, the renter will also be charged at per-day rate for repair duration, and the car will be repaired only in the company's showroom.",
      ],
      content_hi: [
        "किराएदार को वाहन सामान्य टूट-फूट को छोड़कर, उसे प्राप्त करने की स्थिति में ही वापस करना होगा।",
        "क्षति, हानि या चोरी की स्थिति में, किराएदार मरम्मत/प्रतिस्थापन लागत या क्षतिग्रस्त हिस्से की लागत वहन करेगा (चाहे वह हिस्सा और आगे बदला जाए या नहीं)।",
        "किराए की अवधि के दौरान नियमित रखरखाव और ईंधन की लागत किराएदार की जिम्मेदारी है।",
        "क्षति की स्थिति में, मरम्मत में लगने वाले दिनों के अनुसार किराएदार से प्रति दिन के हिसाब से शुल्क लिया जाएगा, और कार की मरम्मत कंपनी के शोरूम में ही होगी।",
      ],
    },
    {
      id: 4,
      title_en: "Fuel Policy",
      title_hi: "ईंधन नीति",
      content_en: [
        "The vehicle must be returned with the same fuel level as provided.",
        "Fuel shortages will be charged at the current applicable rate.",
      ],
      content_hi: [
        "वाहन को उसी ईंधन स्तर पर वापस किया जाना चाहिए जिस पर वह दिया गया था।",
        "ईंधन की कमी होने पर लागू दर के अनुसार शुल्क लिया जाएगा।",
      ],
    },
    {
      id: 5,
      title_en: "Extension and Termination",
      title_hi: "विस्तार और समाप्ति",
      content_en: [
        "Rental extensions must be requested and approved at least 24 hours before the end of the rental period.",
        "Early returns will not result in a refund unless explicitly agreed.",
        "Late returns will incur a penalty of ₹300 per hour.",
      ],
      content_hi: [
        "किराए की अवधि समाप्त होने से कम से कम 24 घंटे पहले विस्तार का अनुरोध और अनुमोदन किया जाना चाहिए।",
        "जल्दी वापसी पर कोई रिफंड नहीं मिलेगा जब तक कि स्पष्ट रूप से सहमत न हो।",
        "देर से वापसी पर प्रति घंटे ₹300 का जुर्माना लगेगा।",
      ],
    },
    {
      id: 6,
      title_en: "Cancellation Policy",
      title_hi: "रद्दीकरण नीति",
      content_en: [
        "Cancellations will not result in refund of advance taken for bookings.",
      ],
      content_hi: ["रद्दीकरण से पहले ली गई अग्रिम राशि का कोई रिफंड नहीं मिलेगा।"],
    },
    {
      id: 7,
      title_en: "Security Deposit",
      title_hi: "सुरक्षा जमा",
      content_en: [
        "The Renter must deposit their original Driving license, Aadhaar Card and PAN Card.",
        "The deposited documents will be returned as soon as the vehicle and full payment is received.",
        "The security deposit for rental term will be between ₹10,000 - ₹15,000.",
      ],
      content_hi: [
        "किराएदार को अपना मूल ड्राइविंग लाइसेंस, आधार कार्ड और पैन कार्ड जमा करना होगा।",
        "जमा किए गए दस्तावेज वाहन और पूरा भुगतान मिलने के तुरंत बाद वापस कर दिए जाएंगे।",
        "किराए की अवधि के लिए सुरक्षा जमा ₹10,000 से ₹15,000 के बीच होगा।",
      ],
    },
    {
      id: 8,
      title_en: "Governing Law",
      title_hi: "शासी कानून",
      content_en: [
        "This Agreement shall be governed by the laws of the jurisdiction where the vehicle is rented.",
      ],
      content_hi: [
        "यह समझौता उस क्षेत्राधिकार के कानूनों द्वारा शासित होगा जहां वाहन किराए पर लिया गया है।",
      ],
    },
    {
      id: 9,
      title_en: "Prohibited Uses and Unlawful Activities",
      title_hi: "निषिद्ध उपयोग और अवैध गतिविधियाँ",
      content_en: [
        "Prohibited Uses:",
        "For any illegal purpose, criminal activity, or violation of traffic laws.",
        "To transport illegal substances, contraband, flammable materials, or weapons.",
        "In any race, speed test, or contest.",
        "To tow any other vehicle or trailer.",
        "By any person under the influence of alcohol, drugs, or intoxicants.",
        "Liability: The Renter is solely liable if the vehicle is involved in unlawful activity.",
        "Indemnification: The Renter indemnifies the Company against claims, damages, penalties, or expenses arising from unlawful use.",
        "Financial Responsibility: The Renter is liable for fines, towing, storage, repairs, loss of revenue, and legal costs.",
        "Breach: Any unlawful use constitutes a breach, allowing the Company to terminate rental and repossess the vehicle at Renter’s expense.",
      ],
      content_hi: [
        "किराएदार स्पष्ट रूप से सहमत है कि वाहन का उपयोग निम्नलिखित किसी भी उद्देश्य के लिए नहीं किया जाएगा:",
        "यदि वाहन इस किराए के समझौते के दौरान किसी अवैध गतिविधि में शामिल होता है, तो किराएदार पूरी तरह से और विशेष रूप से उत्तरदायी होगा।",
        "यदि कोई अवैध उपयोग होता है, तो किराएदार कंपनी को सभी दावों, देनदारियों, नुकसानों, जुर्माने, कानूनी प्रक्रियाओं और खर्चों से सुरक्षित रखने के लिए क्षतिपूर्ति करेगा।",
        "अवैध उपयोग से संबंधित सभी जुर्माना, दंड और कोर्ट की लागत किराएदार द्वारा भुगतान की जाएगी।",
        "अवैध उपयोग कंपनी के साथ अनुबंध के उल्लंघन का एक सामग्री कार्य माना जाएगा, जिससे कंपनी तुरंत किराए को समाप्त कर सकती है और किराएदार के खर्च पर वाहन को वापस ले सकती है।",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-4xl py-10">
      <div className="border-none">
        <div className="flex flex-row items-center justify-between">
          <div className="my-5">
            <h1 className="text-3xl font-bold">Self Drive — Terms & Conditions</h1>
            <p className="text-muted-foreground">
              Bilingual policy (English / हिन्दी) — Please read carefully.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          {sections.map((s, idx) => (
            <div key={s.id} className="space-y-3">
              <h2 className="text-lg font-semibold">
                {s.id}. {s.title_en} / {s.title_hi}
              </h2>

              <ul className="list-disc pl-6 space-y-1 text-foreground">
                {s.content_en.map((line, i) => (
                  <li key={`en-${idx}-${i}`}>{line}</li>
                ))}
              </ul>

              <ul className="list-disc pl-6 space-y-1 text-foreground">
                {s.content_hi.map((line, i) => (
                  <li key={`hi-${idx}-${i}`}>{line}</li>
                ))}
              </ul>

              <Separator />
            </div>
          ))}

          <footer className="pt-4 text-muted-foreground">
            <p>
              Last updated:{" "}
              {new Intl.DateTimeFormat("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date())}
            </p>
            <p className="mt-2">
              This document is a template for self-drive rental terms and should
              be reviewed by legal counsel before use.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
