"use client";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AboutPage() {
  return (
    <Section>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
        reiciendis.
      </p>
      <Button variant="secondary" onClick={() => console.log("det virker!")}>
        GO to hell
      </Button>
      <Button variant="primary" href="/">
        Yes
      </Button>
      <h1 className="bg-primary font-oswald text-4xl">Toolbox</h1>
    </Section>
  );
}
