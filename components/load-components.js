// components/load-components.js

// header を読み込み
fetch("/kaimonde/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // header挿入後にイベント登録
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    // 言語切替（header 内にある場合）
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.documentElement.lang = lang;
        alert(`This feature has not been implemented yet.`);
      });
    }
  })
  .catch(err => console.error("Header load failed:", err));

// footer を読み込み
fetch("/kaimonde//components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch(err => console.error("Footer load failed:", err));
