import Gallery from "@/components/Gallery";
import Hero from "@/components/ui/Hero";
import InputField from "@/components/ui/InputField";

import Section from "@/components/ui/Section";
import { getGallery } from "@/lib/api";

export default async function Home() {
  const [gallery] = await Promise.all([getGallery()]);
  return (
    <>
      <Hero />
      <Section title="hej" background>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta non
          modi beatae laudantium, nam ipsam eos facilis quas vel ea architecto,
          eveniet nostrum labore amet? Minus ex modi dolor iusto!
        </p>
        <InputField
          type="email"
          name="email"
          placeholder=""
          status={["nigger"]}
        />
      </Section>
    </>
  );
}
