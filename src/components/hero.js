export function initHero() {
    const hero = document.getElementById('hero-section');
    hero.innerHTML = `
        <div class="hero-wrapper">
            <video 
                 autoplay
                 muted
                 loop
                 playsinline
                 style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
                 <source src="/assets/images/hero.mp4" type="video/mp4">
            </video>
            <div class="hero-text-content">
                <h1>Documenting My Journey: One Day at a Time</h1>
                <div class="meta">
                    <span>By Pratham Khairmode</span> &bull; <span>February 22, 2026</span>
                </div>
            </div>
        </div>
    `;
}
