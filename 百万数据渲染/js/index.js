// //图片数组
// let imgarr = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg"];

// $('.content img')[0].src = imgarr[0];

// //鼠标移入显示轮播折叠
// $('.content').hover(() => {
//     $('.hidden').css('bottom', '0');
// }, () => {
//     $('.hidden').css('bottom', '-40px')
// });



// //点击折叠创建轮播
// $('.hidden').on('click', (e) => {
//     if ($('.lunbox').length != 0) {
//         return;
//     } else {
//         let x = $('.content').offset().left;
//         let str =
//             '<div class="lunbox">' +
//             '<div class="jiao"></div>' +
//             '<div class="swiper-container">' +
//             '<div class="swiper-wrapper"></div>' +
//             '<div class="swiper-button-prev"></div>' +
//             '<div class="swiper-button-next"></div>' +
//             '</div>' +
//             '<div>';
//         $('.content').after(str);
//         $('.jiao').css('left', x + 180 + 'px');
//         for (let i = 0; i < imgarr.length; i++) {
//             $('.swiper-wrapper').append('<div class="swiper-slide"><img src="' + imgarr[i] + '"/></div>');
//         }
//         let swiper = new Swiper('.swiper-container', {
//             pagination: '.swiper-pagination',
//             slidesPerView: 3,
//             paginationClickable: true,
//             spaceBetween: 30,
//             prevButton: '.swiper-button-prev',
//             nextButton: '.swiper-button-next'
//         });


//         $('*').on('click', (e) => {
//             e.stopPropagation();
//         })

//         $('body').on('click', () => {
//             $('.lunbox').remove();
//         });
//     }

// });