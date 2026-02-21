export async function initPostDetail() {
    const postDetailContainer = document.getElementById('post-detail-section');
    if (!postDetailContainer) return;

    // Get ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    if (!postId) {
        postDetailContainer.innerHTML = `
            <div style="text-align: center; padding: 5rem;">
                <h2>Post Not Found</h2>
                <p>The post you are looking for does not exist or has been removed.</p>
                <a href="index.html" class="hover-underline" style="color: var(--primary-color); display: inline-block; margin-top: 1rem;">Back to Home</a>
            </div>
        `;
        return;
    }

    try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to load posts data.');

        const posts = await response.json();
        const post = posts.find(p => p.id === postId);

        if (!post) {
            throw new Error('Post not found in our database.');
        }

        // Update page title
        document.title = `${post.title} | Wordsmith`;

        postDetailContainer.innerHTML = `
            <article class="post-detail-container">
                <header class="post-header" style="text-align: center; margin-bottom: 3rem;">
                    <a href="javascript:history.back()" class="back-link" style="display: inline-block; margin-bottom: 2rem; color: var(--text-muted); font-size: 0.9rem;">
                        &larr; Back to previous page
                    </a>
                    <div class="post-category" style="margin-bottom: 1rem;">${post.category}</div>
                    <h1 style="font-size: clamp(2rem, 6vw, 3.5rem); margin-bottom: 1.5rem; line-height: 1.2;">${post.title}</h1>
                    <div class="post-meta" style="color: var(--text-muted); font-size: 0.9rem;">
                        <span>Published on ${post.date}</span> &bull; <span>By Author</span>
                    </div>
                </header>

                <div class="post-featured-image" style="margin-bottom: 3rem; border-radius: 8px; overflow: hidden; height: clamp(300px, 50vh, 500px);">
                    <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <div class="article-body" style="font-size: 1.15rem; line-height: 1.8; color: #333;">
                    ${post.content}
                </div>

                <footer class="post-footer" style="margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border-color); text-align: center;">
                    <p style="margin-bottom: 2rem; font-style: italic;">Thank you for reading!</p>
                    <a href="index.html" class="hover-underline" style="color: var(--primary-color); font-weight: 700;">Back to Home</a>
                </footer>
            </article>
        `;

    } catch (error) {
        console.error('Error loading post details:', error);
        postDetailContainer.innerHTML = `
            <div style="text-align: center; padding: 5rem;">
                <h2>Error Loading Post</h2>
                <p>${error.message}</p>
                <a href="index.html" class="hover-underline" style="color: var(--primary-color); display: inline-block; margin-top: 1rem;">Back to Home</a>
            </div>
        `;
    }
}
