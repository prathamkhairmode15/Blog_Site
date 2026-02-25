export function initFooter() {
    const footer = document.getElementById('site-footer');
    footer.innerHTML = `
        <div class="content-wrapper" style="padding: 0 1rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem;">
            <div>
                <h4 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem;">THE INVISIBLE CIPHER<span style="color: var(--primary-color);">.</span></h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.8;">
                    Sharing knowledge and daily practices to inspire growth and lifelong learning.
                </p>
            </div>
            <div>
                <h5 style="text-transform: uppercase; font-size: 0.9rem; margin-bottom: 1.5rem; letter-spacing: 1px;">Quick Links</h5>
                <ul style="font-size: 0.85rem; color: var(--text-muted);">
                    <li style="margin-bottom: 0.5rem;"><a href="index.html">Home</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="learnings.html">Learnings</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="learnings.html">Learnings</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="about.html">About Us</a></li>
                    <li style="margin-bottom: 0.5rem;"><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div>
                <h5 style="text-transform: uppercase; font-size: 0.9rem; margin-bottom: 1.5rem; letter-spacing: 1px;">Subscribe</h5>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">Get my latest content in your inbox.</p>
                <div style="display: flex; gap: 0.5rem;">
                    <input type="email" placeholder="Email" style="flex: 1; padding: 0.5rem; border: 1px solid var(--border-color); outline: none;">
                    <button style="background: var(--primary-color); color: #fff; border: none; padding: 0.5rem 1rem; cursor: pointer;">Send</button>
                </div>
            </div>
        </div>
        <div style="text-align: center; margin-top: 4rem; padding-top: 2rem; border-top: 1px solid #ddd; font-size: 0.8rem; color: #999;">
            &copy; 2026 The Invisible Cipher. All rights reserved.
        </div>
    `;
}
