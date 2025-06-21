// preload.js
window.addEventListener('DOMContentLoaded', () => {
  const removeAds = () => {
    document.querySelectorAll('iframe, .ad, .ads, [id^="ad-"], [class*="sponsor"]').forEach(el => el.remove());
  };
  removeAds();
  setInterval(removeAds, 1000);
});
