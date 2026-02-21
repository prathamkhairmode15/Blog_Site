export function initSidebar() {
    const sidebar = document.getElementById('sidebar-section');
    sidebar.innerHTML = `
        <div class="sidebar-widget">
            <h4>About Me</h4>
            <p>Hi! I'm sharing my daily practices and learnings to help others on their journey. Follow along to see my progress.</p>
        </div>

        <div class="sidebar-widget">
            <h4>Categories</h4>
            <ul>
                <li>
                    <a href="#" class="hover-underline">Growth</a>
                    <span>(12)</span>
                </li>
                <li>
                    <a href="#" class="hover-underline">Coding</a>
                    <span>(8)</span>
                </li>
                <li>
                    <a href="#" class="hover-underline">Design</a>
                    <span>(4)</span>
                </li>
                <li>
                    <a href="#" class="hover-underline">Reflection</a>
                    <span>(6)</span>
                </li>
            </ul>
        </div>

        <div class="sidebar-widget">
            <h4>Popular Tags</h4>
            <div class="tags">
                ${['Creative', 'Dev', 'Life', 'Music', 'Travel', 'Art'].map(tag => `
                    <a href="#" class="tag-item">${tag}</a>
                `).join('')}
            </div>
        </div>
    `;
}
