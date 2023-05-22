window.onscroll = function () {
    var windowScroll = document.documentElement.scrollTop
    console.log(windowScroll);
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var percentage = windowScroll / height * 100
    document.querySelector("#myBar").style.width = percentage + "%"
}