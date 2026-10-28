const copyStatus = document.getElementById('copy-status');
const modeButton = document.getElementById('mode-button');
const schoolLogo = document.querySelector('.school-logo');

function useLocalSchoolLogo() {
  if (schoolLogo && schoolLogo.getAttribute('src') !== schoolLogo.dataset.fallback) {
    schoolLogo.src = schoolLogo.dataset.fallback;
  }
}

schoolLogo?.addEventListener('error', useLocalSchoolLogo);
if (schoolLogo?.complete && !schoolLogo.naturalWidth) useLocalSchoolLogo();

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const helper = document.createElement('textarea');
  helper.value = value;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.opacity = '0';
  document.body.append(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  if (!copied) throw new Error('無法複製');
}

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    if (!source) return;
    const original = button.textContent;
    try {
      await copyText(source.textContent.trim());
      button.textContent = '已複製 ✓';
      copyStatus.textContent = `${button.getAttribute('aria-label')}已複製`;
    } catch {
      button.textContent = '請手動選取文字';
      copyStatus.textContent = '自動複製失敗，請手動選取提示詞文字。';
    }
    window.setTimeout(() => { button.textContent = original; }, 2500);
  });
});

modeButton?.addEventListener('click', () => {
  const isOn = document.body.classList.toggle('presentation');
  modeButton.setAttribute('aria-pressed', String(isOn));
  modeButton.title = isOn ? '恢復一般閱讀字體' : '放大教材字體供投影使用';
  copyStatus.textContent = isOn ? '已開啟投影模式' : '已關閉投影模式';
});

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.main-nav a')];
  const targets = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.2, 0.5] });
  targets.forEach((target) => observer.observe(target));
}
