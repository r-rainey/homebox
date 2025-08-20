import { useRuntimeConfig } from '#imports';

/**
 * Utility function to generate page titles with a configurable prefix
 * @param pageTitle The specific page title to append after the app name
 * @returns A formatted title string with the app name from environment variable
 */
export function getPageTitle(pageTitle: string): string {
  const config = useRuntimeConfig();
  // Get app title from runtime config, fallback to "HomeBox" if not set
  const appTitle = config.public.appTitle || 'HomeBox';
  
  return `${appTitle} | ${pageTitle}`;
}
