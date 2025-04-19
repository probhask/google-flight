import { Banner } from "@/assets";
import Typography from "./ui/styledTypography";

const BannerSection = () => {
  return (
    <div className="relative">
      <div className="min-h-40">
        <img
          src={Banner}
          className="object-cover mx-auto w-full sm:max-w-[1300px] max-sm:min-w-[320px]"
        />
        <Typography
          variant="h2"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-2"
          responsive
        >
          Flights
        </Typography>
      </div>
    </div>
  );
};
BannerSection.displayName = "BannerSection";

export default BannerSection;
