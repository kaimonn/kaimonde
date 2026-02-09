fetch('components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    const btn = document.getElementById('lang-btn');
    const menu = document.getElementById('lang-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        btn.textContent = item.textContent + ' ▼';
        menu.classList.remove('open');
        // 将来：言語URL切替など
      });
    });

    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  });
