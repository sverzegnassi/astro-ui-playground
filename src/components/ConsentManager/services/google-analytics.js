export const GoogleAnalyticsService = (ID) => {
  return {
    label: "Google Analytics",

    onAccept: () => {
      // Google tag (gtag.js)
      var existingGtagScript = document.querySelector('script[src="' + `https://www.googletagmanager.com/gtag/js?id=${ID}` + '"]');
      if (!existingScript) {
        var script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
        document.head.appendChild(script);
      }

      // GA4
      var analytics = document.createElement("script");
      script.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${ID});
      `;

      document.head.appendChild(analytics);
    },

    onReject: () => {
      // Page will be refreshed automatically
    },

    cookies: [
      {
        name: /^(_ga|_gid)/,
      },
    ],
  };
};

const template = `
<script
    type="text/plain"
    data-category="analytics"
    data-service="Google Analytics"
    async
    src="https://www.googletagmanager.com/gtag/js?id=${ID}"
></script>
<script
    type="text/plain"
    data-category="analytics"
    data-service="Google Analytics"
>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${ID});
</script>
<script
    type="text/plain"
    data-category="analytics"
    data-service="!Google Analytics"
>
<!-- Clean up -->
</script>
`