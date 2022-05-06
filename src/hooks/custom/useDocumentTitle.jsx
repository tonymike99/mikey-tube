import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `Candelify ${title}`;

    return () => {
      console.log("Cleanup");
    };
  }, [title]);
};

export { useDocumentTitle };
