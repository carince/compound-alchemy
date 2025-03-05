import { useEffect, useState } from 'react';

import { PageTimeData } from '@/types';

const STORAGE_KEY = 'compound-alchemy-page-time-data';
const activeTrackingSessions = new Map<string, { startTime: number }>();

export const usePageTimeTracker = (pageId: string) => {
  const [pageData, setPageData] = useState<PageTimeData | null>(null);

  useEffect(() => {
    const startTime = Date.now();
    const now = Date.now();

    const storedData = getPageData(pageId);
    if (!storedData) {
      const newPageData: PageTimeData = {
        pageId,
        totalTimeSpent: 0,
        lastVisitTimestamp: now,
        firstVisitTimestamp: now,
      };
      savePageData(newPageData);
      setPageData(newPageData);
    } else {
      const updatedPageData = {
        ...storedData,
        lastVisitTimestamp: now,
      };
      savePageData(updatedPageData);
      setPageData(updatedPageData);
    }

    activeTrackingSessions.set(pageId, { startTime });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        stopTracking(pageId);
      } else {
        startTracking(pageId);
      }
    };

    const handleBeforeUnload = () => {
      stopTracking(pageId);
      sendTimeDataToAPI();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      stopTracking(pageId);
      sendTimeDataToAPI();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pageId]);

  const startTracking = (pageId: string) => {
    const now = Date.now();
    activeTrackingSessions.set(pageId, { startTime: now });
  };

  const stopTracking = (pageId: string) => {
    const session = activeTrackingSessions.get(pageId);
    if (!session) return;

    const timeSpent = Date.now() - session.startTime;
    const storedData = getPageData(pageId);
    if (storedData) {
      const updatedPageData = {
        ...storedData,
        totalTimeSpent: storedData.totalTimeSpent + timeSpent,
        lastVisitTimestamp: Date.now(),
      };
      savePageData(updatedPageData);
      setPageData(updatedPageData);
    }
    activeTrackingSessions.delete(pageId);
  };

  const getPageData = (pageId: string): PageTimeData | null => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const allData = JSON.parse(storedData);
        return allData[pageId] || null;
      }
    } catch (error) {
      console.error('Error retrieving page time data:', error);
    }
    return null;
  };

  const savePageData = (data: PageTimeData): void => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      const allData = storedData ? JSON.parse(storedData) : {};
      allData[data.pageId] = data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
    } catch (error) {
      console.error('Error saving page time data:', error);
    }
  };

  const sendTimeDataToAPI = async () => {
    try {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const response = await fetch('/api/user/time', {
          method: 'POST',
          body: JSON.stringify({ time: JSON.parse(storedData) }),
        });
        if (!response.ok) {
          throw new Error('Failed to send time data to API');
        }
      }
    } catch (error) {
      console.error('Error sending time data to API:', error);
    }
  };

  return pageData;
};