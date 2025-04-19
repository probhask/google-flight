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

export interface NavigationItem {
  id: string;
  Icon: React.ElementType;
  label: string;
  path: string;
  rotate?: boolean;
}

export const mainNavigationItems: NavigationItem[] = [
  {
    id: "travel",
    Icon: LuggageIcon,
    label: "Travel",
    path: "/travel",
  },
  {
    id: "explore",
    Icon: TravelExploreIcon,
    label: "Explore",
    path: "/explore",
  },
  {
    id: "flights",
    Icon: FlightIcon,
    label: "Flights",
    path: "/flights",
    rotate: true,
  },
  {
    id: "hotels",
    Icon: HotelIcon,
    label: "Hotels",
    path: "/hotels",
  },
  {
    id: "vacations",
    Icon: VacationIcon,
    label: "Vacation rentals",
    path: "/vacations",
  },
];

export const secondaryNavigationItems: NavigationItem[] = [
  {
    id: "tracked",
    Icon: TrackedIcon,
    label: "Tracked flight prices",
    path: "/tracked-prices",
  },
  {
    id: "language",
    Icon: LanguageIcon,
    label: "Change language",
    path: "/language",
  },
  {
    id: "currency",
    Icon: CurrencyIcon,
    label: "Change currency",
    path: "/currency",
  },
  {
    id: "location",
    Icon: LocationIcon,
    label: "Change location",
    path: "/location",
  },
];

export const bottomNavigationItems: NavigationItem[] = [
  {
    id: "settings",
    Icon: SettingsIcon,
    label: "Flights settings",
    path: "/settings",
  },
  {
    id: "feedback",
    Icon: FeedbackIcon,
    label: "Feedback",
    path: "/feedback",
  },
  {
    id: "help",
    Icon: HelpIcon,
    label: "Help",
    path: "/help",
  },
];
