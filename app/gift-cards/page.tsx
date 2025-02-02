"use client"

import { CreativeIdea } from "@/components/creative-idea";
import { Footer } from "@/components/footer";
import { GiftCardHero } from "@/components/gift-card-hero";
import { HowGiftCardWorks } from "@/components/how-gift-cards-work";
import { SearchHeader } from "@/components/search-header";
import { VenspaceGiftCards } from "@/components/venspace-gift-cards";

const GiftCards = () => {
  return (
    <div>
      <SearchHeader />
      <GiftCardHero />
      <HowGiftCardWorks />
      <VenspaceGiftCards />
      <CreativeIdea />
      <Footer />
    </div>
  );
}

export default GiftCards