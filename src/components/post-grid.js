export async function initPostGrid(filterCategory = null, limit = null, containerId = 'post-grid-section') {
    const postGrid = document.getElementById(containerId);
    if (!postGrid) {
        console.error(`Element with id "${containerId}" not found`);
        return;
    }

    try {
        const response = await fetch('/data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error('Data loaded is not an array');
        }

        // Sort posts by ID descending (latest first)
        posts.sort((a, b) => b.id - a.id);

        // Apply filtering if a category is specified
        if (filterCategory) {
            posts = posts.filter(post => post.category === filterCategory);
        }

        // Apply limit if specified
        if (limit) {
            posts = posts.slice(0, limit);
        }

        if (posts.length === 0) {
            postGrid.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 3rem;">No posts found for "${filterCategory || 'this section'}".</p>`;
            return;
        }

        postGrid.innerHTML = `
            ${!filterCategory ? '<h2 class="grid-title">Latest Posts</h2>' : ''}
            <div class="grid-container">
                ${posts.map(post => `
                    <article class="post-card">
                        <div class="post-image">
                            <img src="${post.image}" alt="${post.title}">
                        </div>
                        <span class="post-category">${post.category}</span>
                        <h3>
                            <a href="#" class="hover-underline">${post.title}</a>
                        </h3>
                        <p>${post.excerpt}</p>
                        <div class="post-meta">
                            <span>${post.date}</span>
                        </div>
                    </article>
                `).join('')}
            </div>
        `;

        // Add hover effects via JS for more control if needed
        const images = postGrid.querySelectorAll('.post-image img');
        images.forEach(img => {
            img.onmouseover = () => img.style.transform = 'scale(1.05)';
            img.onmouseout = () => img.style.transform = 'scale(1)';
        });

    } catch (error) {
        console.error('Error loading posts:', error);
        postGrid.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
    }
}
