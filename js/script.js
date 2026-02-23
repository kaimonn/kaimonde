// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    
    // 言語切り替えのイベントリスナー
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        switchLanguage(selectedLang);
    });

    // 言語切り替え関数（例: ドキュメントのlang属性を変更し、コンテンツを更新）
    function switchLanguage(lang) {
        document.documentElement.lang = lang;
        // ここでコンテンツを言語ごとに更新するロジックを追加
        // 例: API呼び出しやローカルストレージからコンテンツをロード
        console.log(`言語を${lang}に切り替えました。`);
        // 実際のブログでは、コンテンツを多言語対応にするために、JSONファイルやコンポーネントからロード
    }

    // 初期言語設定
    switchLanguage('ja');
});
