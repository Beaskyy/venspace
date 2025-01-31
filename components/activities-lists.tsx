import Link from "next/link";

const activities = [
  {
    title: "Photoshoot",
    activities: [
      "Gym",
      "Birthday Shoot",
      "Maternity Shoot",
      "Photo Studio",
      "Hall",
      "Store",
      "Garage",
      "Football Field",
      "Head shot",
      "Hotel",
      "Dock",
      "Cabin",
      "Bungalow",
      "Duplex",
      "Mansion",
      "Restaurant",
      "Luxury",
      "Colourful",
      "Lagos",
      "Abandoned",
    ],
  },
  {
    title: "Party",
    activities: [
      "Gym",
      "Birthday Shoot",
      "Maternity",
      "Photo Studio",
      "Hall",
      "Store",
      "Garage",
      "Football Field",
      "Head shot",
      "Hotel",
      "Dock",
      "Cabin",
      "Bungalow",
      "Duplex",
      "Mansion",
      "Restaurant",
      "Luxury",
      "Colourful",
      "Lagos",
      "Abandoned",
    ],
  },
  {
    title: "Videoshoot",
    activities: [
      "Gym",
      "Birthday Shoot",
      "Maternity",
      "Photo Studio",
      "Hall",
      "Store",
      "Garage",
      "Football Field",
      "Head shot",
      "Hotel",
      "Dock",
      "Cabin",
      "Bungalow",
      "Duplex",
      "Mansion",
      "Restaurant",
      "Luxury",
      "Colourful",
      "Lagos",
      "Abandoned",
    ],
  },
  {
    title: "Corporate Event",
    activities: [
      "Gym",
      "Birthday Shoot",
      "Maternity",
      "Photo Studio",
      "Hall",
      "Store",
      "Garage",
      "Football Field",
      "Head shot",
      "Hotel",
      "Dock",
      "Cabin",
      "Bungalow",
      "Duplex",
      "Mansion",
      "Restaurant",
      "Luxury",
      "Colourful",
      "Lagos",
      "Abandoned",
    ],
  },
];

export const ActivitiesList = () => {
  return (
    <div className="flex flex-col gap-6 lg:px-[72px] md:p-8 p-4">
      <h3 className="text-[#001224] md:text-[32px] text-xl font-bold">
        All activities available in Venspace
      </h3>
      {activities.map((activity, index) => (
        <div className="flex flex-col gap-5" key={index}>
          <h6 className="md:text-2xl text-lg text-[#001224] pb-5 font-bold border-b border-[#1A1A1A14]">
            {activity.title}
          </h6>
          <div className="flex flex-col gap-8 pb-16">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
              {activity.activities.map((subActivity, subIndex) => (
                <div key={subIndex}>
                  <Link href={`/activities/${subActivity}`} className="md:text-lg text-sm text-[#434242] font-medium">
                    {subActivity}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
