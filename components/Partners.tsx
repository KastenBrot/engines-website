import Link from "next/link";
Image;
import { partners } from "@/constants";
import Image from "next/image";

type Props = {};

const Partners = (props: Props) => {
  return (
    <div className="flex justify-between items-center w-full py-5 bg-lightgray ">
      <div className="flex justify-between items-center  mx-auto w-4/5">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 gap-8 text-gray-500 sm:gap-12 md:grid-cols-5 lg:grid-cols-6 dark:text-gray-400">
            {partners.map((partner, index) => (
              <Link
                href={partner.link}
                className="flex justify-center items-center hover:scale-125 transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={partner.icon}
                  alt="Partner"
                  className="h-16 hover:text-gray-900 dark:hover:text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
