let $li = $('li');
$li.empty();

let $ul = $('ul');

let $input = $('input');
let $addSkill = $('.green');
// let $redButton = $('button.red');


$addSkill.on('click', $addSkill, function(){
    let $text = $input.val();
    $ul.append('<li>' + '<button class="red">X</button>' + $text + '</li>');
    $input.val('');
    let $redButton = $('button.red');
    $redButton.on('click', $redButton, function(){
        $(this).closest('li').remove();
    });
});
