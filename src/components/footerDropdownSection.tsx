import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Box, Button, ListItemText, MenuItem } from "@mui/material";
import { useState } from "react";

const INTERNATIONAL_SITES = [
  { label: "Google Flights - United States (en-US)" },
  { label: "Popular departures from India" },
  { label: "Google Voos - Brasil (pt-BR)" },
  { label: "Popular routes from India" },
  { label: "Google Flights - Canada (en)" },
  { label: "Popular destinations from India" },
  { label: "Google Flights - United Kingdom (en-GB)" },
  { label: "Popular regions from India" },
  { label: "Google Flights - France (fr)" },
  { label: "Google Flüge - Deutschland (de)" },
  { label: "Google Vuelos - España (es)" },
  { label: "Google Flights - Australia (en)" },
  { label: "Google Flights - México (es)" },
  { label: "Google Voli - Italia (it)" },
];

const FooterDropdownSection = () => {
  const [expandInternationalSites, setExpandInternationalSites] =
    useState(false);
  const [expandExploreFlights, setExpandExploreFlights] = useState(false);

  return (
    <Box className="flex gap-6">
      <Box>
        <Button
          variant="text"
          color="primary"
          endIcon={
            expandInternationalSites ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
          onClick={() => setExpandInternationalSites((prev) => !prev)}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "action.hover",
            },
            textAlign: "left",
          }}
          className="w-96 text-left"
        >
          International sites
        </Button>
        {expandInternationalSites &&
          INTERNATIONAL_SITES.map((site) => (
            <MenuItem key={site.label}>
              <ListItemText primary={site.label} />
            </MenuItem>
          ))}
      </Box>
      <Box>
        <Button
          variant="text"
          color="primary"
          endIcon={
            expandExploreFlights ? <ExpandLessIcon /> : <ExpandMoreIcon />
          }
          onClick={() => setExpandExploreFlights((prev) => !prev)}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
          className="w-96 text-left"
        >
          Explore flights
        </Button>
        {expandExploreFlights &&
          INTERNATIONAL_SITES.map((site) => (
            <MenuItem key={site.label}>
              <ListItemText primary={site.label} />
            </MenuItem>
          ))}
      </Box>
    </Box>
  );
};

export default FooterDropdownSection;
