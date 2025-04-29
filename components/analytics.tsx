'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Simple analytics component - in a real implementation, this would
// connect to your analytics provider of choice
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This would typically send data to your analytics service
    const track = () => {
      console.log(`Page view: ${pathname}`);
    };

    track();
  }, [pathname, searchParams]);

  return null;
}