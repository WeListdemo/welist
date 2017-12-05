$(() => {

    let obj = {};

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: '../json/data.json',
        success: (data) => {
            obj = data;
            for (let i = 0; i < data.length; i++) {
                $('.list').append('<li><h3>' + data[i].name + '</h3><div>价格：￥' + data[i].porint + '</div></li>');
            }
        }
    });



    let arr = [];
    $('input').on('change', (e) => {
        arr = [];
        let str = $(e.target).val()
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].name.indexOf(str) >= 0 || obj[i].porint.indexOf(str) >= 0) {
                arr.push(obj[i]);
            }
        }
        if (arr.length > 0) {
            xuanran(arr);
        } else {
            xuanran(obj);
        }

    });

    let xuanran = (data) => {
        $('.list').html('');
        for (let i = 0; i < data.length; i++) {
            $('.list').append('<li><h3>' + data[i].name + '</h3><div>价格：￥' + data[i].porint + '</div></li>');
        }
    }

})