
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store";
import Image from "next/image";
import Link from "next/link";

const SiteLogo = ({ className }: { className?: string }) => {
  const { collapsed } = useSidebar();
  return (
    <div className={cn("", className)}>
      <Link href="#"
        className=" flex items-center gap-3">
        <Image
          src={"/images/logo/logo-2.png"}
          alt="DashUI Logo"
          width={42}
          height={42}
        />

        <span className={cn("font-robotoSlab text-lg font-bold",
          { "hidden": collapsed }
        )}> ShopDash</span>
      </Link>
    </div>
  );
};

export default SiteLogo;