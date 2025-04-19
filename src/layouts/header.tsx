import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import {
  Apps as AppsIcon,
  DarkMode as DarkModeIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "@/components/sidebar";
import { mainNavigationItems } from "@/config/navigation";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentPath = location.pathname;
  const activeTab =
    mainNavigationItems.find((item) => item.path === currentPath)?.id ||
    "flights";

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        style={{
          boxShadow: "none",
        }}
        className="border-b h-16"
      >
        <Toolbar className="gap-2 justify-between lg:justify-normal">
          <Box className="flex items-center gap-2">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              className="lg:hidden cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MenuIcon />
            </IconButton>

            <Box className="flex items-center gap-2">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google Logo"
                className="h-6 object-contain"
              />
            </Box>
          </Box>

          <Box className="lg:flex items-center gap-2 ml-4 flex-grow hidden">
            {mainNavigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                    transition-colors duration-200
                    border border-neutral-200
                    cursor-pointer
                    ${
                      isActive
                        ? "bg-primary-100 text-primary-600 border-none"
                        : "text-neutral-900 hover:bg-neutral-100"
                    }
                  `}
                >
                  <item.Icon
                    fontSize="small"
                    className={`
                      ${isActive ? "text-primary-500" : "text-primary-600"}
                      ${item.rotate ? "rotate-45" : ""}
                    `}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </Box>

          <Box className="flex items-center gap-2">
            <IconButton size="large" color="inherit">
              <DarkModeIcon />
            </IconButton>
            <IconButton size="large" color="inherit">
              <AppsIcon />
            </IconButton>
            <Avatar className="cursor-pointer" sx={{ width: 32, height: 32 }}>
              U
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxShadow: "none",
            border: "none",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Sidebar onNavigate={handleNavigation} activeTab={activeTab} />
      </Drawer>
    </>
  );
};

export default Header;
