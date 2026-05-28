document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('services-dropdown');
  const button = document.getElementById('dropdown-button');
  
  // Toggle dropdown on click
  button.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });
  
  // Close dropdown when clicking elsewhere
  document.addEventListener('click', function() {
    dropdown.classList.remove('active');
  });
  
  // Prevent dropdown from closing when clicking inside it
  dropdown.querySelector('.dropdown-menu').addEventListener('click', function(e) {
    e.stopPropagation();
  });
});