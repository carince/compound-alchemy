import { PageTimeData } from '@/types';

const STORAGE_KEY = 'compound-alchemy-page-time-data';
const activeTrackingSessions = new Map<string, { 
  startTime: number, 
  isNewVisit: boolean // Flag to track if this is a new visit or resuming
}>();

/**
 * Start tracking time spent on a page
 */
export const startTracking = (pageId: string, isNewVisit = true): void => {
  // Store the start time and visit type
  activeTrackingSessions.set(pageId, {
    startTime: Date.now(),
    isNewVisit
  });
  
  const pageData = getPageData(pageId);
  const now = Date.now();
  
  if (!pageData) {
    // First visit to this page
    savePageData({
      pageId,
      totalTimeSpent: 0,
      visits: 1,
      lastVisitTimestamp: now,
      firstVisitTimestamp: now
    });
  } else if (isNewVisit) {
    // Only increment visit count for new visits, not when resuming after visibility change
    savePageData({
      ...pageData,
      visits: pageData.visits + 1,
      lastVisitTimestamp: now
    });
  }
};

/**
 * Stop tracking time and update storage
 */
export const stopTracking = (pageId: string): void => {
  const session = activeTrackingSessions.get(pageId);
  if (!session) return;
  
  const timeSpent = Date.now() - session.startTime;
  
  const pageData = getPageData(pageId);
  if (pageData) {
    savePageData({
      ...pageData,
      totalTimeSpent: pageData.totalTimeSpent + timeSpent
    });
  }
  
  activeTrackingSessions.delete(pageId);
};

/**
 * Get all page tracking data
 */
export const getAllPageData = (): Record<string, PageTimeData> => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error('Error retrieving page time data:', error);
  }
  
  return {};
};

/**
 * Get data for a specific page
 */
export const getPageData = (pageId: string): PageTimeData | null => {
  const allData = getAllPageData();
  return allData[pageId] || null;
};

/**
 * Save page data to localStorage
 */
const savePageData = (data: PageTimeData): void => {
  try {
    const allData = getAllPageData();
    allData[data.pageId] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
  } catch (error) {
    console.error('Error saving page time data:', error);
  }
};

/**
 * Clear all tracking data
 */
export const clearAllPageData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing page time data:', error);
  }
};

/**
 * React hook for automatic page time tracking
 */
export const usePageTimeTracking = (pageId: string): void => {
  if (typeof window === 'undefined') return;
  
  // Effect setup function
  const setupTracking = () => {
    // Start tracking when component mounts (this is a new visit)
    startTracking(pageId, true);
    
    // Setup tracking for visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        stopTracking(pageId);
      } else {
        // Resume tracking, but don't count as a new visit
        startTracking(pageId, false);
      }
    };
    
    // Setup beforeunload to catch when user leaves the page
    const handleBeforeUnload = () => {
      stopTracking(pageId);
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Cleanup function
    return () => {
      stopTracking(pageId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  };
  
  // Use React's useEffect
  if (typeof React !== 'undefined' && React.useEffect) {
    React.useEffect(setupTracking, [pageId]);
  } else {
    // Basic setup if not in React context
    const cleanup = setupTracking();
    
    // Return cleanup function
    return cleanup;
  }
};

/**
 * Format milliseconds as human-readable time
 */
export const formatTimeSpent = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  } else {
    return `${seconds}s`;
  }
};
