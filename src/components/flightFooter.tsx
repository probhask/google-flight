import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Language as LanguageIcon,
  LocationOn as LocationIcon,
  CurrencyExchange as CurrencyIcon,
} from "@mui/icons-material";
import { useState } from "react";
import FooterDropdownSection from "./footerDropdownSection";

// Data options
const LANGUAGES = [
  { label: "English (US)", value: "English (United States)" },
  { label: "English (UK)", value: "English (United Kingdom)" },
  { label: "Afrikaans", value: "Afrikaans" },
  { label: "Shqip", value: "Albanian" },
  { label: "العربية", value: "Arabic" },
  { label: "Հայերեն", value: "Armenian" },
  { label: "Azərbaycanca", value: "Azerbaijani" },
  { label: "বাংলা", value: "Bengali" },
  { label: "Bosanski", value: "Bosnian" },
  { label: "Български", value: "Bulgarian" },
  { label: "Català", value: "Catalan" },
  { label: "中文 (简体)", value: "Chinese (Simplified)" },
  { label: "中文 (繁體)", value: "Chinese (Traditional)" },
  { label: "Hrvatski", value: "Croatian" },
  { label: "Čeština", value: "Czech" },
  { label: "Dansk", value: "Danish" },
  { label: "Nederlands", value: "Dutch" },
  { label: "Eesti", value: "Estonian" },
  { label: "Filipino", value: "Filipino" },
  { label: "Suomi", value: "Finnish" },
  { label: "Français", value: "French" },
  { label: "Deutsch", value: "German" },
  { label: "Ελληνικά", value: "Greek" },
  { label: "ગુજરાતી", value: "Gujarati" },
  { label: "עברית", value: "Hebrew" },
  { label: "हिन्दी", value: "Hindi" },
  { label: "Magyar", value: "Hungarian" },
  { label: "Íslenska", value: "Icelandic" },
  { label: "Bahasa Indonesia", value: "Indonesian" },
  { label: "Gaeilge", value: "Irish" },
  { label: "Italiano", value: "Italian" },
  { label: "日本語", value: "Japanese" },
  { label: "ಕನ್ನಡ", value: "Kannada" },
  { label: "한국어", value: "Korean" },
  { label: "Latviešu", value: "Latvian" },
  { label: "Lietuvių", value: "Lithuanian" },
  { label: "മലയാളം", value: "Malayalam" },
  { label: "मराठी", value: "Marathi" },
  { label: "Norsk", value: "Norwegian" },
  { label: "فارسی", value: "Persian" },
  { label: "Polski", value: "Polish" },
  { label: "Português (BR)", value: "Portuguese (Brazil)" },
  { label: "Português (PT)", value: "Portuguese (Portugal)" },
  { label: "Română", value: "Romanian" },
  { label: "Русский", value: "Russian" },
  { label: "Српски", value: "Serbian" },
  { label: "Slovenčina", value: "Slovak" },
  { label: "Slovenščina", value: "Slovenian" },
  { label: "Español", value: "Spanish" },
  { label: "Svenska", value: "Swedish" },
  { label: "தமிழ்", value: "Tamil" },
  { label: "తెలుగు", value: "Telugu" },
  { label: "ไทย", value: "Thai" },
  { label: "Türkçe", value: "Turkish" },
  { label: "Українська", value: "Ukrainian" },
  { label: "اردو", value: "Urdu" },
  { label: "Tiếng Việt", value: "Vietnamese" },
];

const LOCATIONS = [
  "India",
  "United States",
  "United Kingdom",
  "France",
  "Germany",
  "Japan",
  "Australia",
];

const CURRENCIES = ["INR", "USD", "EUR", "GBP", "JPY", "AUD"];

const FOOTERLINKS = [
  "About",
  "Privacy",
  "Terms",
  "Join user studios",
  "Feedback",
  "Help Center",
];

type OptionModalProps = {
  options: { label: string; value: string }[];
  label: string;
  open: boolean;
  defaultValue?: string;
  onClose: () => void;
  onSelect: (value: string) => void;
};

const OptionModal = ({
  options,
  label,
  open,
  defaultValue,
  onClose,
  onSelect,
}: OptionModalProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    defaultValue || ""
  );

  const handleMenuItemClick = (value: string) => {
    setSelectedOption(value);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      onSelect(selectedOption);
    }
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={`${label}-modal-title`}
      aria-describedby={`${label}-modal-description`}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 1,
          p: 2,
          maxHeight: "80vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography id={`${label}-modal-title`} variant="h6" component="h2">
          Select {label}
        </Typography>

        <Box
          sx={{
            overflowY: "auto",
            flex: 1,
            p: 2,
          }}
        >
          <RadioGroup
            aria-labelledby={`${label}-options-group`}
            value={selectedOption}
            // sx={{ msOverflowY: "auto", flexGrow: 1, mt: 2 }}
          >
            {options.map(({ label, value }) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
                onClick={() => handleMenuItemClick(value)}
              />
            ))}
          </RadioGroup>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
          <Button onClick={onClose} sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirm}
            disabled={!selectedOption}
          >
            OK
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const FlightFooter = () => {
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0].value);
  const [currentLocation, setCurrentLocation] = useState(LOCATIONS[0]);
  const [currentCurrency, setCurrentCurrency] = useState(CURRENCIES[0]);

  const [languageModalOpen, setLanguageModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false);

  const selectionButtons = [
    {
      key: "language",
      icon: LanguageIcon,
      label: "Language",
      value: currentLanguage,
      onClick: () => setLanguageModalOpen(true),
    },
    {
      key: "location",
      icon: LocationIcon,
      label: "Location",
      value: currentLocation,
      onClick: () => setLocationModalOpen(true),
    },
    {
      key: "currency",
      icon: CurrencyIcon,
      label: "Currency",
      value: currentCurrency,
      onClick: () => setCurrencyModalOpen(true),
    },
  ];

  return (
    <Box
      sx={{ p: 2, borderTop: 1, borderColor: "divider" }}
      className="flex flex-col items-center"
    >
      {/* Selection buttons */}
      <Box
        sx={{
          display: "flex",
          rowGap: 1,
          columnGap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {selectionButtons.map((button) => (
          <Button
            key={button.key}
            variant="outlined"
            startIcon={<button.icon fontSize="small" />}
            onClick={button.onClick}
            sx={{
              borderRadius: "50px",
              "&:hover": {
                backgroundColor: "primary.100",
                borderColor: "primary.main",
              },
              textTransform: "none",
            }}
          >
            <strong>{button.label}:</strong> {button.value}
          </Button>
        ))}
      </Box>

      <Box className="flex flex-col items-center my-8">
        <Typography variant="body2" color="text.secondary">
          Current language and currency options applied: {currentLanguage} -{" "}
          {currentLocation} - {currentCurrency}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Displayed currencies may differ from the currencies used to purchase
          flights.{" "}
          <Button variant="text" size="small" color="primary">
            Learn more
          </Button>
        </Typography>
      </Box>

      {/* Footer links */}
      <Box className="flex justify-center items-center">
        <Box
          sx={{
            display: "flex",
            rowGap: 1,
            columnGap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {FOOTERLINKS.map((link) => (
            <Button
              key={link}
              variant="text"
              size="small"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              {link}
            </Button>
          ))}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box className="flex justify-center items-center gap-4">
        <FooterDropdownSection />
      </Box>

      {/* Modals */}
      <OptionModal
        options={LANGUAGES}
        label="Language"
        open={languageModalOpen}
        defaultValue={currentLanguage}
        onClose={() => setLanguageModalOpen(false)}
        onSelect={(lang) => setCurrentLanguage(lang)}
      />

      <OptionModal
        options={LOCATIONS.map((item) => ({ label: item, value: item }))}
        label="Location"
        open={locationModalOpen}
        defaultValue={currentLocation}
        onClose={() => setLocationModalOpen(false)}
        onSelect={(loc) => setCurrentLocation(loc)}
      />

      <OptionModal
        options={CURRENCIES.map((item) => ({ label: item, value: item }))}
        label="Currency"
        open={currencyModalOpen}
        defaultValue={currentCurrency}
        onClose={() => setCurrencyModalOpen(false)}
        onSelect={(curr) => setCurrentCurrency(curr)}
      />
    </Box>
  );
};

export default FlightFooter;
