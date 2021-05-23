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

const copyEmail = (email) => {
    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
};

export {
    scrollToTop,
    scrollToSection,
    openTab,
    copyEmail,
};