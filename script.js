document.addEventListener('DOMContentLoaded', () => {
  const pillars = document.querySelectorAll('.pillar');
  const expansions = document.querySelectorAll('.expansion');
  const body = document.body;

  function closeAll(){
    expansions.forEach(e => e.classList.remove('open'));
    pillars.forEach(p => p.classList.remove('active'));
    body.classList.remove('expanded');
    // Reset level 1 rows and close all level 2 details when accordion closes
    document.querySelectorAll('.systems-row').forEach(row => row.style.display = 'grid');
    document.querySelectorAll('.system-detail').forEach(d => d.classList.remove('open'));
  }

  pillars.forEach(pillar => {
    pillar.addEventListener('click', () => {
      const targetId = pillar.getAttribute('data-target');
      const target = document.getElementById(targetId);
      const alreadyOpen = target.classList.contains('open');
      closeAll();
      if (!alreadyOpen){
        target.classList.add('open');
        pillar.classList.add('active');
        body.classList.add('expanded');
        setTimeout(() => target.scrollIntoView({ behavior:'smooth', block:'nearest' }), 150);
      }
    });
  });

  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAll();
    });
  });

  // ---- Drilldown inside any expansion panel (Level 1 mini cards -> Level 2 detail) ----
  document.querySelectorAll('.system-mini').forEach(mini => {
    mini.addEventListener('click', (e) => {
      e.stopPropagation();
      const panel = mini.closest('.expansion-panel');
      if (!panel) return;
      const targetSystem = mini.getAttribute('data-system');
      const targetDetail = panel.querySelector(`#detail-${targetSystem}`);
      const row = panel.querySelector('.systems-row');

      if (row && targetDetail) {
        row.style.display = 'none';
        panel.querySelectorAll('.system-detail').forEach(d => d.classList.remove('open'));
        targetDetail.classList.add('open');
      }
    });
  });

  document.querySelectorAll('.back-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const panel = link.closest('.expansion-panel');
      if (!panel) return;
      const row = panel.querySelector('.systems-row');
      if (row) {
        panel.querySelectorAll('.system-detail').forEach(d => d.classList.remove('open'));
        row.style.display = 'grid';
      }
    });
  });

  // ---- PDF Viewer Modal Logic ----
  const pdfModal = document.getElementById('pdf-modal');
  const pdfIframe = document.getElementById('pdf-modal-iframe');
  const pdfTitleText = document.getElementById('pdf-modal-title-text');
  const pdfNewTab = document.getElementById('pdf-modal-newtab');
  const pdfClose = document.getElementById('pdf-modal-close');

  document.querySelectorAll('.view-pdf').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pdfUrl = btn.getAttribute('data-pdf');
      const title = btn.getAttribute('data-title') || 'Document Preview';

      if (pdfUrl) {
        pdfTitleText.textContent = title;
        pdfIframe.src = pdfUrl;
        pdfNewTab.href = pdfUrl;
        pdfModal.classList.add('open');
        pdfModal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  function closePdfModal() {
    if (pdfModal) {
      pdfModal.classList.remove('open');
      pdfModal.setAttribute('aria-hidden', 'true');
      pdfIframe.src = '';
    }
  }

  if (pdfClose) {
    pdfClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closePdfModal();
    });
  }

  if (pdfModal) {
    pdfModal.addEventListener('click', (e) => {
      if (e.target === pdfModal) {
        closePdfModal();
      }
    });
  }
});
