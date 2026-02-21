export async function initPostGrid() {
    const postGrid = document.getElementById('post-grid-section');
    if (!postGrid) {
        console.error('Element with id "post-grid-section" not found');
        return;
    }

    try {
        const response = await fetch('/data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error('Data loaded is not an array');
        }

        postGrid.innerHTML = `
            <h2 style="font-size: 1.5rem; margin-bottom: 2rem; border-bottom: 2px solid var(--text-dark); display: inline-block;">Latest Posts</h2>
            <div class="grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
                ${posts.map(post => `
                    <article class="post-card" style="margin-bottom: 2rem;">
                        <div class="post-image" style="height: 200px; overflow: hidden; border-radius: 4px; margin-bottom: 1rem;">
                            <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition-smooth);">
                        </div>
                        <span class="post-category" style="color: var(--primary-color); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${post.category}</span>
                        <h3 style="font-size: 1.25rem; margin: 0.5rem 0; line-height: 1.3;">
                            <a href="#" class="hover-underline">${post.title}</a>
                        </h3>
                        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${post.excerpt}</p>
                        <div class="post-meta" style="font-size: 0.75rem; color: #999;">
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
