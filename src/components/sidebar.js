export function initSidebar() {
    const sidebar = document.getElementById('sidebar-section');
    sidebar.innerHTML = `
        <div class="sidebar-widget" style="margin-bottom: 3rem;">
            <h4 style="font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">About Me</h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Hi! I'm sharing my daily practices and learnings to help others on their journey. Follow along to see my progress.</p>
        </div>

        <div class="sidebar-widget" style="margin-bottom: 3rem;">
            <h4 style="font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Categories</h4>
            <ul style="font-size: 0.9rem;">
                <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <a href="#" class="hover-underline">Growth</a>
                    <span style="color: #999;">(12)</span>
                </li>
                <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <a href="#" class="hover-underline">Coding</a>
                    <span style="color: #999;">(8)</span>
                </li>
                <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <a href="#" class="hover-underline">Design</a>
                    <span style="color: #999;">(4)</span>
                </li>
                <li style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                    <a href="#" class="hover-underline">Reflection</a>
                    <span style="color: #999;">(6)</span>
                </li>
            </ul>
        </div>

        <div class="sidebar-widget">
            <h4 style="font-size: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Popular Tags</h4>
            <div class="tags" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${['Creative', 'Dev', 'Life', 'Music', 'Travel', 'Art'].map(tag => `
                    <a href="#" style="background: #eee; padding: 0.2rem 0.6rem; border-radius: 2px; font-size: 0.75rem; color: #666;">${tag}</a>
                `).join('')}
            </div>
        </div>
    `;
}
