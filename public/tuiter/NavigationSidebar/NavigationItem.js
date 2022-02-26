const NavigationItem = (page, active) => {
  return `
        ${
          page.name === active
            ? `
            <a
              class="list-group-item text-white active"
              href="${page.href}"
            >
              ${page.icon}
              <span class="d-none d-xl-inline-block"> ${page.text}</span>
            </a>`
            : `
            <a class="list-group-item bg-dark text-white" href="${page.href}">
              ${page.icon}
              <span class="d-none d-xl-inline-block"> ${page.text}</span>
            </a>`
        }  
    `;
};

export default NavigationItem;
