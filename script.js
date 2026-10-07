const EVENT_START = new Date('2026-10-26T20:00:00+09:00');
const CHURCH_EMAIL = 'woorilightsalt@gmail.com';

const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => [...root.querySelectorAll(q)];

function updateCountdown() {
  const el = $('#countdownValue');
  if (!el) return;
  const diff = EVENT_START - new Date();
  if (diff <= 0) {
    const end = new Date('2026-10-30T23:59:59+09:00');
    el.textContent = new Date() <= end ? '부흥회가 진행 중입니다' : '은혜 가운데 마쳤습니다';
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  el.textContent = days > 0 ? `D-${days} · ${hours}시간` : `${hours}시간 남았습니다`;
}
updateCountdown();
setInterval(updateCountdown, 60000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.11 });
$$('.reveal').forEach((el) => observer.observe(el));

const dialog = $('#posterDialog');
$('#openPoster')?.addEventListener('click', () => dialog?.showModal());
$('#closePoster')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

function toast(message) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(location.href);
    toast('초대장 링크를 복사했습니다');
  } catch {
    window.prompt('아래 주소를 복사해 주세요.', location.href);
  }
}
$('#copyButton')?.addEventListener('click', copyLink);

$('#shareButton')?.addEventListener('click', async () => {
  const data = {
    title: '2026 가을부흥회 | 진리가 자유케 합니다',
    text: '10월 26일(월)–30일(금) 매일 오후 8시, 우리광염교회 가을부흥회에 초대합니다.',
    url: location.href
  };
  if (navigator.share) {
    try { await navigator.share(data); } catch (_) {}
  } else {
    copyLink();
  }
});

$('#rsvpForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = $('#name').value.trim();
  const phone = $('#phone').value.trim() || '미입력';
  const days = $$('input[name="day"]:checked').map((el) => el.value).join(', ') || '미정';
  const companions = $('#companions').value;
  const message = $('#message').value.trim() || '없음';

  const subject = `[가을부흥회 참석신청] ${name}`;
  const body = [
    '2026 우리광염교회 가을부흥회 참석 신청',
    '',
    `이름: ${name}`,
    `연락처: ${phone}`,
    `참석 날짜: ${days}`,
    `동반 인원: ${companions}명`,
    `기도제목/메시지: ${message}`
  ].join('\n');

  location.href = `mailto:${CHURCH_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
