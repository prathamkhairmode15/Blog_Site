export function initHeader() {
    const header = document.getElementById('site-header');
    header.innerHTML = `
        <div class="header-container">
            <div class="logo">
                <a href="index.html" class="logo-text">THE INVISIBLE CIPHER</a>
            </div>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="breaking.html">Breaking</a></li>
                    <li><a href="learnings.html">Learnings</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <div class="search-container">
                    <div class="search-input-wrapper">
                        <input type="text" id="blog-search" placeholder="Search posts..." autocomplete="off">
                        <div class="search-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </div>
                    </div>
                    <div id="search-results" class="search-results-dropdown"></div>
                </div>
            </div>
        </div>
    `;

    // Search Logic
    const searchInput = document.getElementById('blog-search');
    const resultsDiv = document.getElementById('search-results');
    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.toLowerCase().trim();

        if (query.length < 2) {
            resultsDiv.style.display = 'none';
            return;
        }

        debounceTimer = setTimeout(async () => {
            try {
                const response = await fetch('/data.json');
                const posts = await response.json();

                const matches = posts.filter(post =>
                    post.title.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query)
                );

                renderSearchResults(matches);
            } catch (error) {
                console.error('Search error:', error);
            }
        }, 300);
    });

    // Close results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
            resultsDiv.style.display = 'none';
        }
    });

    function renderSearchResults(matches) {
        if (matches.length === 0) {
            resultsDiv.innerHTML = '<div class="no-results">No matches found</div>';
        } else {
            resultsDiv.innerHTML = matches.map(post => `
                <a href="post.html?id=${post.id}" class="search-result-item">
                    <div class="result-info">
                        <span class="result-title">${post.title}</span>
                        <span class="result-category">${post.category}</span>
                    </div>
                </a>
            `).join('');
        }
        resultsDiv.style.display = 'block';
    }
}
