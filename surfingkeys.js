// an example to create a new mapping `ctrl-y`
mapkey('<Ctrl-y>', 'Show me the money', function() {
    Front.showPopup('a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).');
});

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
// map('gt', 'T');

// an example to remove mapkey `Ctrl-i`
// unmap('<Ctrl-i>');

mapkey('T', 'Choose a tab with omnibar', function() {
    Front.openOmnibar({type: "Tabs"});
});

//Scrolling Speed
settings.scrollStepSize = 180;

// Go back in history
map('H', 'S');

// Go forward in history
map('L', 'D');

// Go back in history
map('J', 'E');

// Go forward in history
map('K', 'R');

unmap('S');
unmap('D');
unmap('R');
unmap('E');

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.

// To change style for link hints:
Hints.style('border: solid 3px #B00020; color:#efe1eb; background: initial; background-color: #B00020;');

// To Change style for text hints:
Hints.style("border: solid 8px #C38A22;padding: 1px;background: #e39913", "text");
