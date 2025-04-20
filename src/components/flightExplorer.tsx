import {
  Box,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";

import { useState } from "react";
import { Formik } from "formik";
import DropdownSelect from "./dropdownSelect";
import { CabinClass, TripType } from "@/constants/formConstants";
import { LocationPin, SwapHoriz, TripOrigin } from "@mui/icons-material";

interface Airport {
  code: string;
  name: string;
  distance?: string;
}

const FlightExplorer = () => {
  const [fromAnchor, setFromAnchor] = useState<null | HTMLElement>(null);
  const [toAnchor, setToAnchor] = useState<null | HTMLElement>(null);
  const [dateAnchor, setDateAnchor] = useState<null | HTMLElement>(null);
  const [passengersAnchor, setPassengersAnchor] = useState<null | HTMLElement>(
    null
  );

  const [fromLocation, setFromLocation] = useState<Airport>({
    code: "DED",
    name: "Dehradun, Uttarakhand",
  });
  const [toLocation, setToLocation] = useState<Airport | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    infantsOnLap: 0,
  });

  const tripTypeOptions = [];

  return (
    <Box className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-xl">
      <Box>
        <Formik
          initialValues={{ tripType: "", cabinClass: "" }}
          onSubmit={(values) => {}}
        >
          {({ values, setFieldValue }) => (
            <>
              <Box>
                <DropdownSelect
                  placeholder="tripType"
                  options={TripType.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  value={values.tripType}
                  onChange={() => setFieldValue("tripType", values.tripType)}
                />
                <DropdownSelect
                  placeholder="cabinClass"
                  options={CabinClass.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  value={values.tripType}
                  onChange={() =>
                    setFieldValue("cabinClass", values.cabinClass)
                  }
                />
              </Box>

              <Box className="flex items-center justify-center mt-4 gap-4 relative">
                <TextField
                  id="from-location-select"
                  label="TextField"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <TripOrigin fontSize="small" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="outlined"
                  placeholder="Select From Location"
                />
                <Box className="flex items-center justify-center border rounded-full w-10 h-10 mx-2 absolute left-1/2 transform -translate-x-[70%] z-50 bg-white">
                  <IconButton aria-label="">
                    <SwapHoriz />
                  </IconButton>
                </Box>
                <TextField
                  id="to-location-select"
                  label="TextField"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationPin fontSize="small" />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="outlined"
                  placeholder="Select To Location"
                />
                {/* <Box className="flex items-center justify-center border gap-2  px-6 py-2 rounded-md">
                  <IconButton aria-label="" onClick={() => {}}>
                    <TripOrigin />
                  </IconButton>
                  <Box>Select From Location</Box>
                </Box>
                <Box className="flex items-center justify-center border rounded-full w-10 h-10 mx-2 absolute left-1/2 transform -translate-x-1/2 z-auto bg-white">
                  <IconButton aria-label="">
                    <SwapHoriz />
                  </IconButton>
                </Box>
                <Box className="flex items-center justify-center border gap-2  px-6 py-2 rounded-md">
                  <IconButton aria-label="" onClick={() => {}}>
                    <LocationPin />
                  </IconButton>
                  <Box>Select To Location</Box>
                </Box> */}
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default FlightExplorer;
