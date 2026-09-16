document.querySelectorAll('a[href$=".apk"]').forEach(link => {
  link.addEventListener('click', () => {
    const original = link.textContent;
    if (original.includes('Download') || original.includes('Get the Android')) {
      setTimeout(() => { link.textContent = original; }, 1200);
    }
  });
});
