//заготовка для выделения пункта меню
// function setActiveLink() {
//     var pgurl = window.location,
//         links = document.querySelectorAll('a');

//     [].slice.call(links).forEach(function (link) {
//         if (link.href == pgurl) {
//             var cls = link.className.split(' ');
//             cls.push('active');
//             link.className = cls.join(' ');
//         }
//     });
// }

// window.onload = setActiveLink('active');

const TOKEN = '5526058062:AAHQoss786tCbmEGIZVSC__p0ScZo2fmLHY';
const CHAT_ID = '-1001858095930';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Сообщение с сайта!</b>\n`;
    message += `<b>Отправитель:</b> ${this.name.value} \n`;
    message += `<b>Номер телефона:</b> ${this.tel.value} \n`;
    message += `<b>Сообщение:</b> ${this.message.value}`;

    axios
        .post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message,
        })
        .then((res) => {
            this.name.value = '';
            this.tel.value = '';
            this.message.value = '';
        });
});
