import { Box, Button, Typography } from "@mui/material";

import { AirplanemodeActive as AirplaneIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
      {/* Animated Airplane */}
      <Box className="relative w-24 h-24 mb-8">
        <AirplaneIcon
          className="
          
            absolute 
            text-blue-500 
            text-[96px]
            animate-fly
            rotate-45
          "
        />
      </Box>

      {/* 404 Text */}
      <Typography
        variant="h1"
        className="
          text-8xl 
          font-bold 
          bg-gradient-to-r from-blue-600 to-blue-400 
          bg-clip-text text-transparent
          animate-fade-in
        "
      >
        404
      </Typography>

      {/* Message */}
      <Typography
        variant="h5"
        className="
          text-gray-600
          max-w-md
          animate-fade-in-up
        "
      >
        Looks like this flight path doesn't exist
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        className="
          text-gray-500
          mb-8
          animate-fade-in-up
          animation-delay-200
        "
      >
        The page you're looking for has either taken off or never landed here
      </Typography>

      {/* Return Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/flights")}
        className="
          rounded-full 
          px-8 
          py-3
          animate-fade-in-up
          animation-delay-400
          hover:shadow-lg
          transition-all
        "
      >
        Return to Flights
      </Button>
    </Box>
  );
};

export default NotFound;
