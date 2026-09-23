import Image from "next/image";
import { basePath } from "@/lib/config";

const photos = [
  { file: "yard-morning.jpg", position: "center 52%" },
  { file: "orchard.webp", position: "center 55%" },
  { file: "sunset-wide.jpg", position: "center 55%" },
  { file: "sunset.webp", position: "center 55%" },
];

export function ScenicBackdrop() {
  return (
    <div className="scenic-backdrop" aria-hidden="true">
      {photos.map((photo, index) => (
        <Image
          className="scenic-frame"
          key={photo.file}
          src={`${basePath}/images/outdoors/${photo.file}`}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          style={{ objectPosition: photo.position }}
        />
      ))}
    </div>
  );
}
