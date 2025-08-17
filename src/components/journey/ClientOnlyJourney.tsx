import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ClientOnlyJourneyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ClientOnlyJourney({ children, fallback }: ClientOnlyJourneyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        {fallback || (
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}