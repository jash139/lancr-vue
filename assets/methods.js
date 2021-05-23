const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const scrollToSection = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView();
};

const openTab = (url) => {
    window.open(url, '_blank')
};


export {
    scrollToTop,
    scrollToSection,
    openTab,
};