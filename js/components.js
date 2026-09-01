function getHeader(activePage) {
  var navItems = [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Ecosystem', href: 'ecosystem.html' },
    { label: 'Learning', href: 'learning.html' },
    { label: 'Create', href: 'create.html' },
    { label: 'Connect', href: 'connect.html' },
    { label: 'Initiatives', href: 'initiatives.html' },
    { label: 'Stories', href: 'stories.html' },
    { label: 'Resources', href: 'resources.html' },
    { label: 'Get Involved', href: 'get-involved.html' }
  ];
  var navLinks = navItems.map(function(item) {
    return '<a href="' + item.href + '" class="' + (item.label === activePage ? 'active' : '') + '">' + item.label + '</a>';
  }).join('');
  return '<header class="header"><div class="header__inner"><a href="index.html" class="header__logo"><div class="header__logo-icon">S</div><span class="header__logo-text">S.Ai.R.O.V.A.R.</span></a><nav class="header__nav" id="mainNav">' + navLinks + '<a href="get-involved.html" class="header__cta">Join the Movement</a></nav><button class="header__mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">&#9776;</button></div></header>';
}
function getFooter() {
  return '<footer class="footer"><div class="footer__inner"><div class="footer__top"><div class="footer__brand"><div class="footer__brand-logo"><div class="footer__brand-logo-icon">S</div><span class="footer__brand-logo-text">S.Ai.R.O.V.A.R.</span></div><p class="footer__brand-text">S.Ai.R.O.V.A.R. Learn. Explore. Create. Share. And pass it on. Enabling sovereign computational potential across India.</p><p class="footer__brand-curated">Curated by Dr. Inderjot Kaur &amp; Dr. Sandeep Singh Sandha</p></div><div class="footer__col"><div class="footer__col-title">About S.Ai.R.O.V.A.R.</div><a href="about.html">Our Mission</a><a href="#">Sovereign IP</a><a href="#">Press &amp; Media</a></div><div class="footer__col"><div class="footer__col-title">Learn &amp; Create</div><a href="learning.html">Curriculum</a><a href="#">Mentor Sandbox</a><a href="#">Parivar Gateway</a></div><div class="footer__col"><div class="footer__col-title">Connect &amp; Resources</div><a href="get-involved.html">Get Involved</a><a href="initiatives.html">Initiatives</a><a href="stories.html">Stories</a></div></div><div class="footer__bottom"><span>&copy; 2026 S.Ai.R.O.V.A.R. All sovereign intellectual rights reserved.</span><span>An Initiative by Network18 &middot; Knowledge Partner: Smile &amp; Showup Foundation</span></div></div></footer>';
}
function toggleMobileMenu() {
  var nav = document.getElementById('mainNav');
  if (nav.style.display === 'flex') { nav.style.display = 'none'; }
  else { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.position = 'absolute'; nav.style.top = '64px'; nav.style.left = '0'; nav.style.right = '0'; nav.style.background = '#fff'; nav.style.padding = '16px'; nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }
}
document.addEventListener('DOMContentLoaded', function() {
  var h = document.getElementById('site-header');
  var f = document.getElementById('site-footer');
  var p = document.body.dataset.page || '';
  if (h) h.innerHTML = getHeader(p);
  if (f) f.innerHTML = getFooter();
});
