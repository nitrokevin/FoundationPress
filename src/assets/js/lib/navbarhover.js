 const navItems = document.querySelectorAll('.desktop-menu > li');
 const hoverPill = document.getElementById('hoverPill');

 // Set initial pill position for current menu item
 const currentPage = document.querySelector('.desktop-menu > li.current-menu-item');
 if (currentPage) {
   const itemRect = currentPage.getBoundingClientRect();
   const containerRect = currentPage.parentElement.parentElement.getBoundingClientRect();
   const leftPosition = itemRect.left - containerRect.left;
   const itemWidth = itemRect.width;
   hoverPill.style.left = `${leftPosition}px`;
   hoverPill.style.width = `${itemWidth}px`;
   hoverPill.style.opacity = '1';
 }

 navItems.forEach(item => {
   item.addEventListener('mouseenter', () => {
     const itemRect = item.getBoundingClientRect();
     const containerRect = item.parentElement.parentElement.getBoundingClientRect();

     const leftPosition = itemRect.left - containerRect.left;
     const itemWidth = itemRect.width;

     hoverPill.style.left = `${leftPosition}px`;
     hoverPill.style.width = `${itemWidth}px`;
   });
 });

 // Reset pill position when mouse leaves the nav container
 document.querySelector('.nav-container').addEventListener('mouseleave', () => {
   if (currentPage) {
     const itemRect = currentPage.getBoundingClientRect();
     const containerRect = currentPage.parentElement.parentElement.getBoundingClientRect();
     const leftPosition = itemRect.left - containerRect.left;
     const itemWidth = itemRect.width;

     hoverPill.style.left = `${leftPosition}px`;
     hoverPill.style.width = `${itemWidth}px`;
   }
 });