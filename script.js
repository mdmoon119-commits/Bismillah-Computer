<script>
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('status').innerText = "ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।";
      this.reset();
    });
  </script>