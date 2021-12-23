// kata jQuery !
// l'utilisateur doit cliquer sur la case checkbox pour validé

let checkbox = $('#checkbox');

checkbox.click(function () {
    this.toggleAttribute('checked');
})

$('input[type=submit]').click(function () {
    if (checkbox[0].hasAttribute('checked'))
        alert('la case a bien était coché')
    else
        alert("tu n'a pas coché la case");
})

$('span').click(function () {
    for (let i = 0; i < 4; i++) {
        setTimeout(function () {
            $('span').fadeToggle();
        }, 1000)
    }
});

$('tr:even').css("background-color", "gray")

$("a").click(function () {
    window.print();
})

$('textarea').attr("maxlength", "30");

$('p').each(function(index, elem) {
    let words = elem.innerText.split(" ");
    let firstWord = words[0];
    words.shift();
    elem.innerHTML = '<b>' + firstWord + ' ' + '</b>' + words.join(" ");
})

jQuery('body').append('<div style="background-color: #000000;color: white">new Div</div>');

$('#div2').appendTo($('#div1'));

let MyObject = {
    prop1: "value1",
    prop2: "value2"
}

let part10P = $('#part10')
$.each(MyObject, function (property, value) {
    part10P.text(part10P.text() + property + ' = ' + value + ' ');
})

$('ul').first().append('<li>item 4</li>');
function part12() {
    let select = $('select').first()
    select.children().remove()
    select.append('<option>option 4</option>')
}
part12()
function part13() {
    $('p').css("text-decoration", "underline")
}
part13()

$('input[type=text]').first().val()

function removeAllClass(element) {
    element.removeClass()
}

removeAllClass($('.class1'));

const part16Span = $('#css')
part16Span.css('color', 'blue');
part16Span.removeAttr('style');

window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log('click gauche')
});

$('body').click(function (e) {
    if (e.button === 0)
        console.log('click droit')
})

function checkInteger(nb) {
    if (Number.isInteger(nb)) {
        console.log("c'est un entier")
    }
}

window.addEventListener("keydown", function (event) {
    if (event.key === 'Enter')
        console.log('Enter')
});

console.log($('tr').length);

console.log($('textArea').val())

$('#form').append('<input type="radio" value="radio">');

console.log($('p').first().offset());

$('p').each(function(index, elem) {
    elem.style.textTransform = "uppercase";
})

$('textarea').change(function () {
    console.log('changé');
})

$('tr').last().remove();

$('button').text('nouveau text');

$("select").append('<option>option 1</option>, <option>option 2</option>, <option>option 3</option>');

$("textarea").css("background", "red");

$('tr').siblings().remove();

$("select").change(function () {
    console.log($(this).val())
});

$('a').removeAttr("href");

$('.class')[0].className = "newClass";

$('select').addClass("css");
console.log($('#selected p').length)
console.log(jQuery.fn.jquery);

$('tr').eq(0).remove();

$('input[type=text]').val('new value');

$('span').text('new text');

$('span').click(function () {
    console.log($(this).attr("class"))
});

window.addEventListener('load', function () {
    $('a').attr("href", "newLink")
});

function deleteDisabled(element) {
    element.removeAttr("disabled")
}
deleteDisabled($('select'));

console.log($('div').first().outerWidth())

$('button').mouseenter(function () {
    $('button').fadeOut()
});

let val = [];
$('#form').children().each(function (index, element) {
    val.push(element.value)
});

$('span').first().attr('data-attribute', 'value')