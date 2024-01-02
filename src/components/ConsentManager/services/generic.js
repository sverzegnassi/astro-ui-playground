/*
    TODO: Content Security Policies

    `<meta http-equiv="Content-Security-Policy" content="...">`
*/

export const GenericService = (
    serviceLabel,
    serviceSnippet,
    serviceCookies,
) => {
    return {
      label: serviceLabel,
      onAccept: () => {
        const div = document.createElement('div');
        div.innerHTML = serviceSnippet;

        Array.from(div.children).forEach(child => document.head.appendChild(child));
        div.remove();
      },
      onReject: () => {
        // Do nothing. Page will be refreshed anyway.
      },
      cookies: serviceCookies,
  };
}
  

/* https://cookieconsent.orestbida.com/advanced/manage-scripts.html */
const props = {
    dataCategory,
    dataService,
    dataType,
    dataSrc,
    innerScript
}

// You can also have a clean-up logic by "!dataService"

// Might as well just offer a code injection point??