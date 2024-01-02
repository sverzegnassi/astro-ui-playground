/*
  Refs.
  https://help.hotjar.com/hc/en-us/articles/360054097813-Common-Compliance-Questions-FAQ
*/

export const HotjarService = (siteId) => {
  return {
    label: "Hotjar",

    onAccept: () => {
      var script = document.createElement("script");
      script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.j.q||[]).push(arguments)};
        h._hjSettings={hjid:${siteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+t+h._hjSettings.hjsv;
        a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `;

      document.head.appendChild(script);
    },

    onReject: () => {
      // TODO: Clean up LocalStorage
    },

    cookies: [
      {
        name: `hjSessionUser${siteId}`
      },
      {
        name: `_hjid`
      },
      {
        name: `_hjFirstSeen`
      },
      {
        name: `_hjHasCachedUserAttributes`
      },
      {
        name: `_hjUserAttributesHash`
      },
      {
        name: `hjSession${siteId}`
      },
      {
        name: `_hjSessionTooLarge`
      },
      {
        name: `_hjSessionResumed`
      },
      {
        name: `_hjCookieTest`
      },
      {
        name: `_hjLocalStorageTest`
      },
      {
        name: `_hjSessionStorageTest`
      },
      {
        name: `hjIncludedInSessionSample${siteId}`
      },
      {
        name: `_hjAbsoluteSessionInProgress`
      },
      {
        name: `_hjTLDTest`
      },
      {
        name: `_hjClosedSurveyInvites`
      },
      {
        name: `_hjDonePolls`
      },
      {
        name: `_hjMinimizedPolls`
      },
      {
        name: `_hjShownFeedbackMessage`
      },
    ],
  };
};
