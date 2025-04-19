import {
  CurrencyExchange as CurrencyIcon,
  Feedback as FeedbackIcon,
  AirplanemodeActive as FlightIcon,
  Help as HelpIcon,
  Hotel as HotelIcon,
  Language as LanguageIcon,
  LocationOn as LocationIcon,
  Luggage as LuggageIcon,
  Settings as SettingsIcon,
  ShowChart as TrackedIcon,
  TravelExplore as TravelExploreIcon,
  House as VacationIcon,
} from "@mui/icons-material";

import { ReactNode } from "react";

export interface NavigationItem {
  id: string;
  icon: ReactNode;
  label: string;
  path: string;
}

export const mainNavigationItems: NavigationItem[] = [
  {
    id: "travel",
    icon: <LuggageIcon className="text-blue-700" />,
    label: "Travel",
    path: "/travel",
  },
  {
    id: "explore",
    icon: <TravelExploreIcon className="text-blue-700" />,
    label: "Explore",
    path: "/explore",
  },
  {
    id: "flights",
    icon: <FlightIcon className="text-blue-700 rotate-45" />,
    label: "Flights",
    path: "/flights",
  },
  {
    id: "hotels",
    icon: <HotelIcon className="text-blue-700" />,
    label: "Hotels",
    path: "/hotels",
  },
  {
    id: "vacations",
    icon: <VacationIcon className="text-blue-700" />,
    label: "Vacation rentals",
    path: "/vacations",
  },
];

export const secondaryNavigationItems: NavigationItem[] = [
  {
    id: "tracked",
    icon: <TrackedIcon />,
    label: "Tracked flight prices",
    path: "/tracked-prices",
  },
  {
    id: "language",
    icon: <LanguageIcon />,
    label: "Change language",
    path: "/language",
  },
  {
    id: "currency",
    icon: <CurrencyIcon />,
    label: "Change currency",
    path: "/currency",
  },
  {
    id: "location",
    icon: <LocationIcon />,
    label: "Change location",
    path: "/location",
  },
];

export const bottomNavigationItems: NavigationItem[] = [
  {
    id: "settings",
    icon: <SettingsIcon />,
    label: "Flights settings",
    path: "/settings",
  },
  {
    id: "feedback",
    icon: <FeedbackIcon />,
    label: "Feedback",
    path: "/feedback",
  },
  {
    id: "help",
    icon: <HelpIcon />,
    label: "Help",
    path: "/help",
  },
];
