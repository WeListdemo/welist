$(() => {
    let topfalg = true;
    $('.ju').on('click', () => {
        if (topfalg) {
            
            $('.header').animate({ 'top': '-48px' }, 300);
            $('.ju div').eq(2).html('&#xe602;');
            topfalg = false;
        } else {
            $('.header').animate({ 'top': '0' }, 300);
            $('.ju div').eq(2).html('&#xe63e;');
            topfalg = true;
        };

    });

    const winwidth = document.documentElement.clientWidth;
    const winheight = document.documentElement.clientHeight;
    $('.content').css({'width':winwidth,'height':winheight});
    let arr = [];
    $('.content').on('mousedown',function(e){
       let oldX = e.offsetX;
       $(document).on('mousemove',function(e){
          let newX = e.offsetX;
          let Xcha = newX - oldX;
          arr.push(Xcha);
       })
    })
});