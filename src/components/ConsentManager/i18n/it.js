/*
  === NOTES ===
    
  - Providing the list of cookies (i.e. cookieTable) is not required,
    as long as the scope of each service is adequately described.

    The Authorities recognize that keeping the list up-to-date is quite
    a burden. This list could still be provided in the Cookie Policy document,
    or as a link to the implemented service documentation.
*/

const ConsentManager_i18n_IT = {
  consentModal: {
    title: "Your tracker settings",
    description: `
We use cookies and similar methods to recognise visitors and remember preferences.
<br>
We also use them to measure campaign effectiveness and analyse site traffic.
<br><br>
By selecting ‘Accept‘, you consent to the use of these methods by us and trusted third parties.
<br><br>
For further details or to change your consent choices at any time see our cookie policy.
`,
    acceptAllBtn: "Accetta tutti",
    acceptNecessaryBtn: "Rifiuta tutti",
    showPreferencesBtn: "Gestisci preferenze",
    revisionMessage: "Hi, we've made some changes to our cookie policy since the last time you visited!",
  },
  preferencesModal: {
    title: "Cookie preferences",
    acceptAllBtn: "Accept all",
    acceptNecessaryBtn: "Reject all",
    savePreferencesBtn: "Save preferences",
    closeIconLabel: "Close",
    sections: [
      {
        title: "Cookie usage",
        description:
          "We use cookies to ensure the basic functionalities of the website and to enhance your online experience ...",
      },
      {
        title: "Strictly necessary cookies",
        description:
          "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
        linkedCategory: "necessary",
      },
      {
        title: "Performance and Analytics cookies",
        description: "These cookies allow the website to remember the choices you have made in the past",
        linkedCategory: "analytics",
      },
      {
        title: "More information",
        description:
          'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourdomain.com">contact us</a>.',
      },
    ],
  },
};

export default ConsentManager_i18n_IT;


/*

Your tracker settings

We use cookies and similar methods to recognise visitors and remember preferences. We also use them to measure campaign effectiveness and analyse site traffic.

By selecting ‘Accept‘, you consent to the use of these methods by us and trusted third parties.

For further details or to change your consent choices at any time see our cookie policy.

*/

/*

Tracking choices

We use cookies to recognise visitors and remember your preferences.

They enhance user experience, personalise content and ads, provide social media features, measure campaign effectiveness, and analyse site traffic.

Select the types of trackers you consent to, both by us, and third parties.

Learn more at data privacy: cookie policy - you can change your choices at any time from the footer of the site.

This will switch all toggles "ON".
Essential

Enables the site's core functionality, such as navigation, access to secure areas, video players and payments. The site cannot function properly without these cookies; they can only be disabled by changing your browser preferences.
Performance

Collects information on site usage, for example, which pages are most frequently visited.
Functionality

Recognises you when you return to our site. This enables us to personalise content, greet you by name, remember your preferences, and helps you share pages on social networks.
*/

// https://ubuntu.com/legal/data-privacy
// https://ubuntu.com/legal
