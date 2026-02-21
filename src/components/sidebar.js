export async function initSidebar() {
    const sidebar = document.getElementById('sidebar-section');
    if (!sidebar) return;

    try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Failed to load data for sidebar.');
        const posts = await response.json();

        // Calculate Category Counts
        const categoryCounts = posts.reduce((acc, post) => {
            acc[post.category] = (acc[post.category] || 0) + 1;
            return acc;
        }, {});

        // Get Unique Tags
        const allTags = posts.flatMap(post => post.tags || []);
        const uniqueTags = [...new Set(allTags)].sort();

        sidebar.innerHTML = `
            <div class="sidebar-widget">
                <h4>About Me</h4>
                <p>Hi! I'm sharing my daily practices and learnings to help others on their journey. Follow along to see my progress.</p>
            </div>

            <div class="sidebar-widget">
                <h4>Categories</h4>
                <ul id="categories-list">
                    ${Object.entries(categoryCounts).map(([category, count]) => `
                        <li>
                            <a href="index.html?category=${encodeURIComponent(category)}" class="hover-underline">${category}</a>
                            <span>(${count})</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="sidebar-widget">
                <h4>Popular Tags</h4>
                <div class="tags" id="tags-cloud">
                    ${uniqueTags.map(tag => `
                        <a href="index.html?tag=${encodeURIComponent(tag)}" class="tag-item">${tag}</a>
                    `).join('')}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error initializing sidebar:', error);
        sidebar.innerHTML = '<div class="sidebar-widget"><p>Failed to load sidebar data.</p></div>';
    }
}
