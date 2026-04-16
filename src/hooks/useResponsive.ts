import { useMediaQuery } from "@mui/material";

export default function useResponsive() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:768px) and (max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return { isMobile, isTablet, isDesktop };
}