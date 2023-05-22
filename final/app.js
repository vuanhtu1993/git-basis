window.onscroll = function () {
    const scroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const percentage = scroll / height * 100
    document.querySelector("#myBar").style.width = percentage + "%"
}