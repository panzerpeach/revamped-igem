$(document).ready(() => {
  $('#nav-aboutus').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  }).on('click', () => {
    $('#first-section')[0].scrollIntoView(true);
  });

  $('#nav-subteams').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  }).on('click', () => {
    $('#second-section')[0].scrollIntoView(true);
  });

  $('#nav-members').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  }).on('click', () => {
    $('#third-section')[0].scrollIntoView(true);
  });

  $('#nav-recruiting').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  }).on('click', () => {
    $('#fourth-section')[0].scrollIntoView(true);
  });

  $('#nav-sponsors').on('mouseenter', event => {
    $(event.currentTarget).addClass("highlight");
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass("highlight");
  }).on('click', () => {
    $('#fifth-section')[0].scrollIntoView(true);
  });
});