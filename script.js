$(document).ready(() => {
  $('#nav-aboutus').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  });

  $('#nav-subteams').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  });

  $('#nav-members').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  });

  $('#nav-recruiting').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  });

  $('#nav-sponsors').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  });
});