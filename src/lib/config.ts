interface AppConfig {
   features: {
      prerequisitesChecking: boolean;
      progressTracking: boolean;
      courseCompletion: boolean;
   };
   ui: {
      theme: "default" | "colorful";
      animations: boolean;
   };
}

// Global app configuration
export const appConfig: AppConfig = {
   features: {
      prerequisitesChecking: false, // Toggle prerequisites checking on/off
      progressTracking: true, // Track user progress
      courseCompletion: true, // Course completion features
   },
   ui: {
      theme: "default", // Use primary/secondary colors instead of colorful
      animations: true, // Enable/disable animations
   },
};

// Helper functions to check feature flags
export const isPrerequisitesEnabled = () =>
   appConfig.features.prerequisitesChecking;
export const isProgressTrackingEnabled = () =>
   appConfig.features.progressTracking;
export const isCourseCompletionEnabled = () =>
   appConfig.features.courseCompletion;
export const isColorfulTheme = () => appConfig.ui.theme === "colorful";
export const areAnimationsEnabled = () => appConfig.ui.animations;

// Function to toggle prerequisites checking
export const togglePrerequisites = (enabled: boolean) => {
   appConfig.features.prerequisitesChecking = enabled;
};

// Function to toggle theme
export const toggleTheme = (theme: "default" | "colorful") => {
   appConfig.ui.theme = theme;
};
