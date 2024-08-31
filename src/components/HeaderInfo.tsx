import {
  AlarmCheck,
  Facebook,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";

const HeaderInfo = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto items-center font-medium">
        <span className="flex gap-2 items-center">
          <Phone size={20} className="text-cyan-600" />
          +008888
        </span>
        <span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="flex gap-2 items-center">
                <AlarmCheck className="text-cyan-600" size={20} />
                Services Time
              </Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <ul
                style={{
                  listStyleType: "circle",
                  marginLeft: "20px",
                  color: "#0891b2",
                }}
              >
                <li>Sun-Thu 09:00-08:00</li>
                <li>Friday - offday</li>
              </ul>
            </HoverCardContent>
          </HoverCard>
        </span>

        {/*  */}

        <div className="flex items-center gap-5 text-cyan-600">
          <Link href="https://www.facebook.com" target="_blank">
            <Facebook size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter size={20} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <Youtube size={20} />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Dhaka+Medical+College+Hospital/@23.726013,90.3800712,15z/data=!4m10!1m2!2m1!1sdhaka+medical!3m6!1s0x3755b8e6474187cf:0xb3d3783755659522!8m2!3d23.726013!4d90.3975807!15sCg1kaGFrYSBtZWRpY2FsWg8iDWRoYWthIG1lZGljYWySARNnb3Zlcm5tZW50X2hvc3BpdGFsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5DZW05cU9WVkJFQUXgAQA!16zL20vMDRwdjRr!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <MapPin size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
