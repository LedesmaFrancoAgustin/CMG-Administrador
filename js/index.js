const toggleSidebarButton = document.getElementById('toggleSidebar');

toggleSidebarButton.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');
    sidebar.classList.toggle('hidden');
    content.classList.toggle('expanded');
    footer.classList.toggle('expandedFooter');
    toggleSidebarButton.classList.toggle('collapsed');
    toggleSidebarButton.innerHTML = sidebar.classList.contains('hidden') ? '&gt;' : '&lt;';
}
