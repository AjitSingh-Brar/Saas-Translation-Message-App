import LogoImage from "@logos/black.png";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-20">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            width={200}
            alt="logo"
            className="dark:filter dark:invert"
            aria-label="Application Logo"
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
