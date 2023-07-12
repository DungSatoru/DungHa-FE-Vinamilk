function checkName() {
    const Regex = /^[a-zA-ZÀ-Ỹ ]+$/;
    if ($('#Name').val().trim() === "") {
        $('#Name').next('.form-message').addClass('inValid');
        $('#Name').next('.form-message').text('Vui lòng nhập tên').show();
        return false;
    } else if (!Regex.test($('#Name').val())) {
        $('#Name').next('.form-message').addClass('inValid');
        $('#Name').next('.form-message').text('Chỉ nhập ký tự chữ').show();
        return false;

    } else {
        if ($('#Name').val().length < 6) {
            $('#Name').next('.form-message').addClass('inValid');
            $('#Name').next('.form-message').text('Vui lòng nhập từ 6 ký tự trở lên').show();
            return false;
        }
        if ($('#Name').val().length > 10) {
            $('#Name').next('.form-message').addClass('inValid');
            $('#Name').next('.form-message').text('Vui lòng nhập ít hơn hoặc bằng 10 ký tự!').show();
            return false;
        }
    }
    $('#Name').next(".form-message").text('Tên giới hạn 6-10 ký tự, không bao gồm ký tự đặc biệt như $,%,&,*.#,@,...').show();
    $('#Name').next('.form-message').removeClass('inValid');
    return true;
}
function checkYear() {
    const Regex = /^\d{4}$/;
    if ($('#Year').val().trim() === "") {
        $('#Year').next('.form-message').addClass('inValid');
        $('#Year').next('.form-message').text('Nhập 4 chữ số').show();
        return false;
    } else if (!Regex.test($('#Year').val())) {
        $('#Year').next('.form-message').addClass('inValid');
        $('#Year').next('.form-message').text('Chỉ nhập ký tự số').show();
        return false;

    }
    $('#Year').next('.form-message').removeClass('inValid');
    $('#Year').next('.form-message').text('Nhập 4 chữ số').show();
    return true;
}
$(document).ready(function () {
    var isName, isYear;
    $('#Name').on('input', () => {
        isName = checkName();
        if (isName && isYear) {
            $('#Submit').addClass('active');
        } else {
            $('#Submit').removeClass('active');
        }
    })
    $('#Year').on('input', () => {
        isYear = checkYear();
        if (isName && isYear) {
            $('#Submit').addClass('active');
        } else {
            $('#Submit').removeClass('active');
        }
    })



    $('#Submit').click(function (e) {
        e.preventDefault();
        if (isName && isYear) {
            $('#saveButton').css('display', 'block');
            $('.show').css('display', 'flex');
            $('.name').text($('#Name').val());
            $('.name').append(`
                <div class="d-flex w-100 justify-content-between">
                    <p class="est">EST</p>
                    <p class="since">2003</p>
                </div>
            `)
            $('.since').text($('#Year').val());
        } else {
            $('.show').css('display', 'none');
            $('#saveButton').css('display', 'none');
        }
    })

    $("#saveButton").click(function () {
        html2canvas($(".show")[0]).then(function (canvas) {
            var image = canvas.toDataURL("image/png");

            var link = $("<a>").attr({
                href: image,
                download: $('#Name').val() + ".png"
            });

            link[0].click();
        })

    })

})