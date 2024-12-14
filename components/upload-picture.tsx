import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X } from "lucide-react";

import { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadPicture = () => {
  const [images, setImages] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    // Filter valid image files and append them to the existing list
    setImages((prev) => [...prev, ...acceptedFiles]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept all image types
  });

  return (
    <div className="flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[706px] gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[28px] text-black font-bold text-center">
              Upload pictures of your space
            </h1>
            <p className="text-[#434242] text-base text-center max-w-[661px]">
              Make your space stand out! Photos are the first thing that guests
              will see. We recommend adding 10 or more high quality photos.
            </p>
          </div>

          {/* Drag-and-drop area */}
          <div
            {...getRootProps()}
            className={`flex flex-col justify-center items-center py-[77px] gap-4 border rounded-lg cursor-pointer ${
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
                Drag and drop files here, or click to select
              </p>
              <Button className="shadow-none h-11 bg-[#FDF1C3] text-[#001224] hover:text-white hover:bg-[#001224]">
                Upload
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Image src="lightning.svg" alt="light" width={24} height={24} />
            <p className="text-base text-[#434242] leading-6">
              Drag and drop your photos to change the order. Your first photo is
              what your guests will see when browsing, so make sure it
              represents your space.
            </p>
          </div>

          {/* Uploaded images preview */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative md:w-[223px] md:h-[266px] w-[150px] h-[180px] rounded-[6px]"
              >
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded image ${index + 1}`}
                  fill
                  className="absolute rounded-[6px] object-cover"
                />
                <X
                  className="absolute -right-2 -top-2 text-white size-5 bg-[#001224] p-[2px] rounded-full cursor-pointer"
                  onClick={() => removeImage(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[#001F3F] text-sm font-medium">
            Video Link (Optional)
          </label>
          <Input
            type="text"
            className="border border-[#1A1A1A26] placeholder:text-[#43424270] text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadPicture;
