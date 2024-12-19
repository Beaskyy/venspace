// components/PropertyCarousel.tsx
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Heart, HeartOff } from "lucide-react";
// import { HeartIcon as FilledHeart } from "@heroicons/react/solid";
// import { HeartIcon as OutlineHeart } from "@heroicons/react/outline";


interface PropertyCarouselProps {
  images: string[];
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ images }) => {
  const [likedImages, setLikedImages] = useState<number[]>([]); // Store liked image indices
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  const toggleLike = (index: number) => {
    setLikedImages((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Remove like
        : [...prev, index] // Add like
    );
  };

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="keen-slider__slide relative flex justify-center items-center"
          >
            {/* Image */}
            <img
              src={image}
              alt={`Property image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Like Button */}
            <button
              onClick={() => toggleLike(index)}
              className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white"
            >
              {likedImages.includes(index) ? (
                <Heart className="w-6 h-6 text-red-500" />
              ) : (
                <HeartOff className="w-6 h-6 text-gray-500" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCarousel;
