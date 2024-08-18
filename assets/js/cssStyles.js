function getAllCssStyles() {
    let allCssRules = [];
    const importCssRules = [...document.styleSheets[0].cssRules];

    importCssRules.forEach(importRule => {
        let rules = [...importRule.styleSheet.cssRules];

        rules.forEach(rule => {
            allCssRules.push(rule);
        });
    });

    return allCssRules;
}

function getCssStyle(title) {
    let allCssStyle = getAllCssStyles();
    return allCssStyle.find((r) => r.selectorText === title);
}

export { getCssStyle };