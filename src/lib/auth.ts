/**
 * Simple Authentication Utility
 * 
 * Client-side password-based authentication for demo/prototype purposes.
 * Password is stored in environment variable VITE_DEMO_PASSWORD.
 * 
 * Note: This is for demo protection only, not for production use.
 */

const AUTH_STORAGE_KEY = 'mira_demo_auth';
const AUTH_TOKEN = 'mira_demo_token';

/**
 * Get the demo password from environment variable
 */
function getDemoPassword(): string {
  const password = import.meta.env.VITE_DEMO_PASSWORD;
  if (!password) {
    // Fallback for development - should be set in production
    console.warn('VITE_DEMO_PASSWORD not set, using default demo password');
    return 'demo123';
  }
  return password;
}

/**
 * Validate password against demo password
 */
export function validatePassword(password: string): boolean {
  const demoPassword = getDemoPassword();
  return password === demoPassword;
}

/**
 * Authenticate user with password
 */
export function login(password: string): boolean {
  if (validatePassword(password)) {
    // Store auth token in sessionStorage (cleared on browser close)
    sessionStorage.setItem(AUTH_STORAGE_KEY, AUTH_TOKEN);
    return true;
  }
  return false;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  const authToken = sessionStorage.getItem(AUTH_STORAGE_KEY);
  return authToken === AUTH_TOKEN;
}

/**
 * Logout user
 */
export function logout(): void {
  sessionStorage.removeItem(AUTH_STORAGE_KEY);
}

/**
 * Require authentication - redirects to login if not authenticated
 * Returns true if authenticated, false otherwise
 */
export function requireAuth(): boolean {
  if (!isAuthenticated()) {
    return false;
  }
  return true;
}

