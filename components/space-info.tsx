import { Input } from "./ui/input";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronDown, X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui";
import { Textarea } from "./ui/textarea";
import { useDropzone } from "react-dropzone";

const activities = ["Anniversary", "Podcasts", "Photo Shoot", "Art Studio"];
const offers = ["Free WiFi", "Air Conditioner", "Changing Room", "Lightening"];

export const SpaceInfo = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [showPhotoDialog, setShowPhotoDialog] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    // Filter valid image files and append them to the existing list
    setPhotos((prev) => [...prev, ...acceptedFiles]);
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept all image types
  });

  // Handle checkbox toggle
  const handleToggle = (activity: string) => {
    setSelectedActivities(
      (prev) =>
        prev.includes(activity)
          ? prev.filter((item) => item !== activity) // Remove if already selected
          : [...prev, activity] // Add if not selected
    );
  };
  const handleOfferToggle = (activity: string) => {
    setSelectedOffers(
      (prev) =>
        prev.includes(activity)
          ? prev.filter((item) => item !== activity) // Remove if already selected
          : [...prev, activity] // Add if not selected
    );
  };
  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[563px] gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Tell us about your space
            </h1>
            <p className="text-[#434242] text-base text-center">
              Help guests make their decisions easier by telling them what you
              have to offer by ranking higher in their books. You can always
              change this.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#001F3F] text-sm font-medium">
              Is your space available for instant booking?
            </label>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2 border border-[#1A1A1A26] placeholder:text-[#43424270] h-16 py-3 px-4 rounded-lg">
                <RadioGroupItem value="option-one" id="option-one" />
                <div className="flex flex-col">
                  <Label
                    htmlFor="option-one"
                    className="text-sm text-[#001224]"
                  >
                    Yes
                  </Label>
                  <small className="text-xs text-[#434242]">
                    Guests who acknowledge and accept your host rules can book
                    instantly without any request
                  </small>
                </div>
              </div>
              <div className="flex items-center space-x-2 border border-[#1A1A1A26] placeholder:text-[#43424270] h-16 py-3 px-4 rounded-lg">
                <RadioGroupItem value="option-two" id="option-two" />
                <div className="flex flex-col">
                  <Label
                    htmlFor="option-two"
                    className="text-sm text-[#001224]"
                  >
                    Option Two
                  </Label>
                  <small className="text-xs text-[#434242]">
                    Guests who acknowledge and accept your host rules can book
                    instantly without any request
                  </small>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <label className="text-[#001F3F] text-sm font-medium">
                What activities can be done in your space
              </label>
              <Popover onOpenChange={(open) => setIsOpen(open)}>
                <PopoverTrigger className="flex justify-between items-center border border-[#1A1A1A26] h-12 rounded-lg p-4">
                  {/* Show selected activities or "Select" placeholder */}
                  <div className="flex gap-2 flex-wrap">
                    {selectedActivities.length > 0 ? (
                      selectedActivities.map((activity) => (
                        <span
                          key={activity}
                          className="text-[#5C5C5C] text-xs py-1 px-2 bg-[#DEE2E8] rounded-[18px]"
                        >
                          {activity}
                        </span>
                      ))
                    ) : (
                      <span className="text-[#43424257]">Select</span>
                    )}
                  </div>
                  <ChevronDown
                    className={`size-5 text-[#001F3F66] transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </PopoverTrigger>

                <PopoverContent className="w-[563px] py-1 px-2 rounded-lg flex flex-col gap-1">
                  {activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-center space-x-2 py-1 px-2 h-8 gap-1"
                    >
                      <Checkbox
                        id={activity}
                        checked={selectedActivities.includes(activity)}
                        onCheckedChange={() => handleToggle(activity)}
                      />
                      <label
                        htmlFor={activity}
                        className="text-sm text-[#001224] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {activity}
                      </label>
                    </div>
                  ))}
                </PopoverContent>

                {/* Info below the Popover */}
                <div className="flex gap-1 mt-1">
                  <Image
                    src="/lightning.svg"
                    alt="lightning"
                    width={18}
                    height={18}
                  />
                  <p className="text-sm text-[#434242]">
                    You may choose up to 10 different activities.
                  </p>
                </div>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#001F3F] text-sm font-medium">
                What amenities do you have to offer
              </label>
              <Popover onOpenChange={(open) => setOpen(open)}>
                <PopoverTrigger className="flex justify-between items-center border border-[#1A1A1A26] h-12 rounded-lg p-4">
                  {/* Show selected activities or "Select" placeholder */}
                  <div className="flex gap-2 flex-wrap">
                    {selectedOffers.length > 0 ? (
                      selectedOffers.map((offer) => (
                        <span
                          key={offer}
                          className="text-[#5C5C5C] text-xs py-1 px-2 bg-[#DEE2E8] rounded-[18px]"
                        >
                          {offer}
                        </span>
                      ))
                    ) : (
                      <span className="text-[#43424257]">Select</span>
                    )}
                  </div>
                  <ChevronDown
                    className={`size-5 text-[#001F3F66] transform transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </PopoverTrigger>

                <PopoverContent className="w-[563px] py-1 px-2 rounded-lg flex flex-col gap-1">
                  {offers.map((offer) => (
                    <div
                      key={offer}
                      className="flex items-center space-x-2 py-1 px-2 h-8 gap-1"
                    >
                      <Checkbox
                        id={offer}
                        checked={selectedOffers.includes(offer)}
                        onCheckedChange={() => handleOfferToggle(offer)}
                      />
                      <label
                        htmlFor={offer}
                        className="text-sm text-[#001224] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {offer}
                      </label>
                    </div>
                  ))}
                </PopoverContent>

                {/* Info below the Popover */}
                <div className="flex gap-1 mt-1">
                  <Image
                    src="/lightning.svg"
                    alt="lightning"
                    width={18}
                    height={18}
                  />
                  <p className="text-sm text-[#434242]">
                    Select as many that applies.
                  </p>
                </div>
              </Popover>
            </div>
            <div>
              <label className="text-[#001F3F] text-sm font-medium">
                How many guests are allowed at a time
              </label>
              <Input
                type="text"
                placeholder="Apartment Number"
                className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
              />
            </div>
            <div>
              <label className="text-[#001F3F] text-sm font-medium">
                Who is allowed in your space?
              </label>
              <Select>
                <SelectTrigger className="w-full h-12 rounded-lg border border-[#1A1A1A26]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All-Ages">All Ages</SelectItem>
                  <SelectItem value="No-infants">
                    No infants (0-5yrs)
                  </SelectItem>
                  <SelectItem value="5yrs+">5yrs and above</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#001F3F] font-medium">Add-ons</p>
              <p className="text-sm text-[#434242]">
                These are amenities that you charge for and is not included in
                your hourly rate
              </p>
              {showPhotoDialog && (
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center border border-[#1A1A1A14] p-4 rounded-lg gap-8 md:w-[501px]">
                    <div className="flex gap-3">
                      <div className="relative w-14 h-14 rounded-md">
                        <Image
                          src="/camera.jpeg"
                          alt="camera"
                          fill
                          className="absolute object-cover rounded-md"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-1">
                        <p className="text-[15px] font-bold text-black">
                          Camera
                        </p>
                        <p className="text-sm text-[#434242]">
                          2016 Sony camera for photography
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-black">
                        ₦45,000
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base text-[#003B77] font-medium">Edit</p>
                  </div>
                </div>
              )}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="flex">
                  <div className="flex justify-center items-center min-w-[100px] py-2.5 px-4 font-medium h-10 rounded-lg text-xs text-[#001F3F] bg-[#FDF1C3] shadow-none hover:bg-[#001F3F] hover:text-white">
                    {showPhotoDialog ? "Add another equipment" : "Add Section"}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-[#001224] font-bold">
                      Add-ons
                    </DialogTitle>
                    <DialogDescription className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[#001F3F] text-sm font-medium">
                          Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Name of equipment"
                          className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[#001F3F] text-sm font-medium">
                          Short Description
                        </label>
                        <Textarea
                          className="h-[156px] border border-[#1A1A1A26] placeholder:text-[#43424270]"
                          placeholder="Give a short description of your equipment"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="text-[#001F3F] text-sm font-medium">
                            Price - flat fee
                          </label>
                          <Input
                            type="text"
                            placeholder="10 hours"
                            className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[#001F3F] text-sm font-medium">
                            Maximum Number
                          </label>
                          <Input
                            type="text"
                            placeholder="Max. number a guest can lend"
                            className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center px-4">
                        <div className="flex flex-col w-full gap-14">
                          <div className="flex flex-col gap-8">
                            {/* Drag-and-drop area */}
                            {photos.length < 2 && (
                              <div
                                {...getRootProps()}
                                className={`flex flex-col justify-center items-center py-10 gap-4 border rounded-lg cursor-pointer ${
                                  isDragActive
                                    ? "border-[#001224] bg-[#f0f0f0]"
                                    : "border-[#1A1A1A26]"
                                }`}
                              >
                                <input {...getInputProps()} />
                                <div className="flex flex-col justify-center items-center gap-6">
                                  <Image
                                    src="/gallery-add.svg"
                                    alt="upload-picture"
                                    width={24}
                                    height={24}
                                  />
                                  <p className="text-sm text-[#001224]">
                                    Please add at least 2 equipment photos
                                  </p>
                                  <Button className="shadow-none h-11 bg-white border border-[#1A1A1A26] w-[149px] text-[#001224] hover:text-white hover:bg-[#001224]">
                                    Upload
                                  </Button>
                                </div>
                              </div>
                            )}

                            {/* Uploaded images preview */}
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
                              {photos.map((image, index) => (
                                <div
                                  key={index}
                                  className="relative md:w-[140px] md:h-[140px] w-[100px] h-[100px] rounded-[6px]"
                                >
                                  <Image
                                    src={URL.createObjectURL(image)}
                                    alt={`Uploaded image ${index + 1}`}
                                    fill
                                    className="absolute rounded-[6px] object-cover"
                                  />
                                  <X
                                    className="absolute -right-2 -top-2 text-white size-5 bg-[#001224] p-[2px] rounded-full cursor-pointer"
                                    onClick={() => removePhoto(index)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          className="font-medium hover:text-white hover:bg-[#001224]"
                          onClick={() => {
                            setShowPhotoDialog(true)
                            setOpen(false)
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
