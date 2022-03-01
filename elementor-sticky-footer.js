const header_height = document.querySelector('div[data-elementor-type="header"]').offsetHeight;
const footer_height = document.querySelector('div[data-elementor-type="footer"]').offsetHeight;
const footer = document.querySelector('div[data-elementor-type="footer"]');
const body_height = document.querySelector('main').offsetHeight;
const window_height = document.documentElement.clientHeight;
if ( (header_height + footer_height + body_height) < window_height) {
  footer.classList.add('stickyFooter');
} else {
  footer.classList.remove('stickyFooter');
}
});
