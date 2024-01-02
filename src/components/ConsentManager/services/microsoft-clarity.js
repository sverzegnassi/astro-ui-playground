export const MicrosoftClarityService = (projectId) => {
  return {
    label: "Microsoft Clarity",

    onAccept: () => {
      var script = document.createElement("script");
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", ${projectId});
        `;

      document.head.appendChild(script);
    },

    onReject: () => {
      // Page will be refreshed automatically
    },

    cookies: [
      /*
        List from:
            https://learn.microsoft.com/en-us/clarity/setup-and-installation/cookie-list
      */
      {
        name: "_clck", // String
      },
      {
        name: "_clsk", // String
      },
      {
        name: "CLID", // String
      },
      {
        name: "ANONCHK", // Flag
      },
      {
        name: "MR", // Flag
      },
      {
        name: "MUID", // GUID
      },
      {
        name: "SM", // Character Flags
      },
    ],
  };
};
