import Link from "next/link";
Image;
import { partners } from "@/constants";
import Image from "next/image";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-full h-[20vh] bg-fillerGray1">
      <div className="flex flex-row justify-between gap-8 lg:gap-16">
        {partners.map((partner, index) => (
          <Link
            href={partner.link}
            className="cursor-pointer transition duration-500 hover:scale-125"
          >
            <Image
              src={partner.icon}
              alt="Partner"
              className="h-14 flex-shrink-0 lg:h-20 grayscale transition duration-500 hover:grayscale-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
