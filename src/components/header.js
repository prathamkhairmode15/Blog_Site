export function initHeader() {
    const header = document.getElementById('site-header');
    header.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="index.html" class="logo-text">WORDSMITH<span>.</span></a>
            </div>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="practices.html">Practices</a></li>
                    <li><a href="learnings.html">Learnings</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <div class="search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
        </div>
    `;
}
