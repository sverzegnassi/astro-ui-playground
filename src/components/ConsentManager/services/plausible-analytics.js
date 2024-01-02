export const PlausibleAnalyticsService = (dataDomain, scriptSrc) => {
  return {
    label: "Plausible Analytics",

    onAccept: () => {
      var analytics = document.createElement("script");
      script.defer = true;
      script["data-domain"] = dataDomain;
      script.src = scriptSrc;

      document.head.appendChild(analytics);
    },

    onReject: () => {
      // Page will be refreshed automatically
    },

    cookies: [
      // No cookie is set by the script.
    ],
  };
};
