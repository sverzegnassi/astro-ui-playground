export const UmamiAnalyticsService = (dataWebsiteId, scriptSrc) => {
  return {
    label: "Umami Analytics",

    onAccept: () => {
      var analytics = document.createElement("script");
      script.async = true;
      script["data-website-id"] = dataDomain;
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
