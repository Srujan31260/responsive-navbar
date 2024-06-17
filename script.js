
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#333';
    navbar.style.color = 'white';
  } else {
    navbar.style.backgroundColor = 'white';
    navbar.style.color = 'black';
  }
});

function showSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = 'none';
}


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#f0f0f0';
    link.style.color = 'black';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = 'transparent';
    link.style.color = 'black';
  });
});
