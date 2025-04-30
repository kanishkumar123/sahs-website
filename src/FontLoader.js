// FontLoader.js
// A dedicated component to handle font loading more effectively
import { useEffect, useState } from "react";

/**
 * Utility function to preload custom fonts with better error handling
 * @param {Object} options - Font loading options
 * @param {string} options.fontFamily - The name of the font family
 * @param {string} options.fontUrl - The URL to the font file
 * @param {string} options.format - The font format (e.g., 'truetype', 'woff2')
 * @returns {boolean} - Whether the font is loaded
 */
export const useFontLoader = ({
  fontFamily = "QR",
  fontUrl = "/QR.ttf",
  format = "truetype",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // We'll try multiple approaches to load the font
    const loadFont = async () => {
      // Option 1: FontFace API (modern browsers)
      if ("FontFace" in window) {
        try {
          // Try all possible paths
          const possiblePaths = [
            fontUrl,
            `/QR.ttf`,
            `/fonts${fontUrl}`,
            `../public${fontUrl}`,
            `../assets${fontUrl}`,
            // Add more potential paths if needed
          ];

          let fontLoaded = false;

          for (const path of possiblePaths) {
            if (fontLoaded) break;

            try {
              console.log(`Attempting to load font from: ${path}`);
              const font = new FontFace(fontFamily, `url(${path})`, {
                display: "swap",
              });

              const loadedFont = await font.load();
              document.fonts.add(loadedFont);
              fontLoaded = true;

              console.log(
                `✓ Font '${fontFamily}' loaded successfully from ${path}`
              );
              setIsLoaded(true);
            } catch (e) {
              console.warn(`Could not load font from ${path}:`, e.message);
            }
          }

          if (!fontLoaded) {
            throw new Error("Failed to load font from any location");
          }
        } catch (err) {
          console.error(`Failed to load font '${fontFamily}':`, err);
          setHasError(true);

          // Fall back to CSS-based loading
          console.log("Falling back to CSS-based font loading");
          setTimeout(() => setIsLoaded(true), 1000);
        }
      } else {
        // Option 2: CSS-based loading (for older browsers without FontFace API)
        console.log("FontFace API not available, using CSS-based loading");
        setTimeout(() => setIsLoaded(true), 1000);
      }

      // Additional check: Try to detect if the font is actually loaded
      if (document.fonts && document.fonts.check) {
        const checkInterval = setInterval(() => {
          if (document.fonts.check(`1em ${fontFamily}`)) {
            console.log(
              `Font '${fontFamily}' is now available via document.fonts.check`
            );
            setIsLoaded(true);
            clearInterval(checkInterval);
          }
        }, 250);

        // Stop checking after 5 seconds as a failsafe
        setTimeout(() => clearInterval(checkInterval), 5000);
      }
    };

    loadFont();
  }, [fontFamily, fontUrl, format]);

  return { isLoaded, hasError };
};

// Example usage:
// const { isLoaded } = useFontLoader({ fontFamily: 'QR', fontUrl: '/QR.ttf' });
