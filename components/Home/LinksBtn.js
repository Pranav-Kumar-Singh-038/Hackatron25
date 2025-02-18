import { useEffect } from "react";

const LinksBtn = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Devfolio SDK Loaded");
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="butHolder">
      <div
        className="apply-button"
        data-hackathon-slug="hackatron-3"
        data-button-theme="light"
        style={{ height: "44px", width: "312px" }}
      />
    </div>
  );
};

export default LinksBtn;
