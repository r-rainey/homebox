import { useRuntimeConfig } from '#imports';

/**
 * Composable for generating page titles with a configurable prefix
 * @param pageTitle The specific page title to append after the app name
 * @returns A formatted title string with the app name from environment variable
 */
export function usePageTitle(pageTitle: string): string {
  // Use the composable inside a component setup function
  const config = useRuntimeConfig();
  
  // Get app title from runtime config, fallback to "HomeBox" if not set
  const appTitle = config.public.appTitle || 'HomeBox';
  
  return `${appTitle} | ${pageTitle}`;
}
