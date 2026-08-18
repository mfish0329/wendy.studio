import { buildProfessionalServiceJsonLd } from "@wendy/seo";

import Audience from "@/components/sections/Audience";
import Cta from "@/components/sections/Cta";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import { site } from "@/content/site";

const jsonLd = buildProfessionalServiceJsonLd(site);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 區塊順序與主站一致，只有視覺不同 */}
      <Hero />
      <Audience />
      <Services />
      <Process />
      <Works />
      <Cta />
    </>
  );
}
