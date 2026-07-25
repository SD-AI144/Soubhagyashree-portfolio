document.addEventListener('DOMContentLoaded', () => {
  const pillars = document.querySelectorAll('.pillar');
  const expansions = document.querySelectorAll('.expansion');

  function closeAll(){
    expansions.forEach(e => e.classList.remove('open'));
    pillars.forEach(p => p.classList.remove('active'));
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
});
