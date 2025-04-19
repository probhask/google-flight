import { Banner } from "@/assets";

const BannerSection = () => {
  return (
    <div className="relative">
      <div>
        <img src={Banner} />
      </div>
    </div>
  );
};
BannerSection.displayName = "BannerSection";

export default BannerSection;
