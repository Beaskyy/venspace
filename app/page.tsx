import { Events } from "@/components/events";
import { Explore } from "@/components/explore";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Host } from "@/components/host";
import { Listing } from "@/components/listing";
import { Spaces } from "@/components/spaces";
import { WhyVenspace } from "@/components/why-venspace";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Spaces />
      <Listing />
      <Events />
      <WhyVenspace />
      <Host />
      <Footer />
    </main>
  );
}
