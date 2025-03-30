import $ from 'jquery';

const formWrapper = document.querySelector('.form-wrapper');

/*Dropdown Menu*/
$('.dropdown').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
  const selectedText = $(this).text();
  const selectedId = $(this).attr('id');
  $(this).parents('.dropdown').find('span').text(selectedText);
  $(this).parents('.dropdown').find('input').attr('value', selectedId);
  const result = selectedId;
  switch (result) {
    case 'Task1':
      formWrapper.innerHTML = '';
      console.log('Task1');
      break;
    case 'Task2':
      formWrapper.innerHTML = '';
      console.log('Task2');
      break;
    case 'Task3':
      formWrapper.innerHTML = '';
      console.log('Task3');
      break;
    default:
      console.log('No task selected');
  }
});
