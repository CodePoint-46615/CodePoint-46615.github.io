// Accordion toggle for skills
// Accordion toggle for skills
document.querySelectorAll('.toggle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const list = btn.nextElementSibling;
    const arrow = btn.querySelector('.arrow');
    const text = btn.querySelector('.toogle-txt');
    const skillSectionDiv = btn.closest('.skill-group'); // fixed

    // toggle visibility
    list.classList.toggle('hidden');

    // toggle arrow rotation (now smooth via CSS)
    arrow.classList.toggle('rotate-180');

    // toggle text positioning
    text.classList.toggle('mx-16');
    text.classList.toggle('mt-10');

    // skill group color
    skillSectionDiv.classList.toggle('bg-red-50');
  });
});


// Ensure ALL dropdowns are closed on page load
window.addEventListener('DOMContentLoaded', () => {

  //add toggle visibility
  document.querySelectorAll('.toggle-btn + div').forEach((list) => {
    list.classList.add('hidden');
  });

  //remove toggle arrow rotation
  document.querySelectorAll('.arrow').forEach((arrow) => {
    arrow.classList.remove('rotate-180');
  });

  //remove toggle text positioning
  document.querySelectorAll('.toogle-txt').forEach((text) => {
    text.classList.remove('mx-16', 'mt-10');
  });
});
