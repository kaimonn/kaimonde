/**
 * LocationBadge コンポーネント
 * @param {object} loc - location オブジェクト
 * @returns {HTMLElement} span 要素に整形された場所を返す
 */
function LocationBadge(loc) {
  const span = document.createElement("span");
  span.className = "text-xs text-gray-400 mt-2";

  if (!loc) {
    span.textContent = "";
    return span;
  }

  let text = "";
  if (loc.country) {
    // city / region / country
    text = [loc.city, loc.region, loc.country].filter(Boolean).join(" / ");
  } else {
    // country がない場合は continent 表示
    text = loc.continent || "";
  }

  span.textContent = "📍" + text;
  return span;
}
