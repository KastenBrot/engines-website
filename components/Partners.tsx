import Link from "next/link";
Image;
import { partners } from "@/constants";
import Image from "next/image";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-[10vh] md:h-[20vh] bg-fillerGray1">
      <div className="flex flex-row justify-between lg:gap-x-32">
        {partners.map((partner, index) => (
          <Link
            href={partner.link}
            className="cursor-pointer transition duration-500 hover:scale-125 m-2 sm:m-4 lg:m-0"
          >
            <Image
              src={partner.icon}
              alt={`Partner-${index + 1}`}
              width={160}
              height={64}
              className="max-h-14 lg:max-h-16 2xl:max-h-20 flex-shrink-0 w-auto h-auto grayscale transition duration-500 hover:grayscale-0 "
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
