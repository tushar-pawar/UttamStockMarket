$ -> 
  $('body').on 'click', 'ul.topnav li.icon' ->
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");