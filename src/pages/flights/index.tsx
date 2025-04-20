import {
  BannerSection,
  FlightExplorerSection,
  FlightFooter,
} from "@/components";
import { Box } from "@mui/material";

const Flights = () => {
  return (
    <div className="space-y-2">
      <BannerSection />
      <Box className="h-[400px] bg-gradient-to-b from-blue-100 to-transparent relative overflow-hidden">
        {/* Flight Explorer Component */}
        <Box className="relative z-20">
          <FlightExplorerSection />
        </Box>
        <FlightFooter />
      </Box>
    </div>
  );
};

export default Flights;
