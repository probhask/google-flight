import { Language } from "@mui/icons-material";
import { Button } from "@mui/material";

const FlightFooter = () => {
  return (
    <div>
      <Button startIcon={<Language />}>languages</Button>
    </div>
  );
};
FlightFooter.displayName = "FlightFooter";

export default FlightFooter;
