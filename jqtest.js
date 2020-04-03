$('input.first').click(changeButton);
$('input.second').click(styleButton);
// document.querySelector('input').addEventListener('click', changeButton);

function changeButton() {
    let newElement = $('<span>Hello Farhad!</span>');
    $('div').slideToggle()
            .html(newElement);
    // document.querySelector('div').style.visibility = 'hidden';
}

function styleButton() {
    $('div').css({
        'background-color': 'red',
        'top': '50vh'
});

}