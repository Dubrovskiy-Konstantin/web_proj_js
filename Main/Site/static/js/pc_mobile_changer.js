const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i"); 
if (devices.test(navigator.userAgent))
{
    alert("Версия для мобильного устройства");
    var classesToDelete = document.getElementsByClassName('desctop');
    for (var item of classesToDelete) {
        item.removeAttribute('class');
    }

    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/mobile.css';
    head.appendChild(link);
    
}
else
{
    alert("Версия для ПК");
    var classesToDelete = document.getElementsByClassName('mobile');
    for (var item of classesToDelete) {
        item.removeAttribute('class');
    }
}