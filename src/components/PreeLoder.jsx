import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-7 h-7 border-4  border-violet-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default PreLoader;
