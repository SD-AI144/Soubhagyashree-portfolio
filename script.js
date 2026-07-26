document.addEventListener('DOMContentLoaded', () => {
  const pillars = document.querySelectorAll('.pillar');
  const expansions = document.querySelectorAll('.expansion');
  const body = document.body;

  function closeAll(){
    expansions.forEach(e => e.classList.remove('open'));
    pillars.forEach(p => p.classList.remove('active'));
    body.classList.remove('expanded');
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

  // ---- LegalTech: row of 3 -> single project detail ----
  const systemsRow = document.getElementById('systems-row');
  const details = document.querySelectorAll('.system-detail');

  function showRow(){
    systemsRow.style.display = 'grid';
    details.forEach(d => d.classList.remove('open'));
  }

  document.querySelectorAll('.system-mini').forEach(mini => {
    mini.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = 'detail-' + mini.getAttribute('data-system');
      systemsRow.style.display = 'none';
      details.forEach(d => d.classList.toggle('open', d.id === id));
    });
  });

  document.querySelectorAll('.back-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      showRow();
    });
  });
});
