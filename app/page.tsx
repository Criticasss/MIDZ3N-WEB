import Image from 'next/image';
import { ArrowRight, Bomb, ExternalLink, Gamepad2, Sparkles, Waves } from 'lucide-react';

const discordUrl = 'https://discord.gg/AM5mSuPCbm';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="MidZen Studios home">
          <Image src="/midzen-logo.png" alt="MidZen Studios" width={52} height={52} priority />
          <span>MIDZEN</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#team">The duo</a>
          <a href="#projects">Projects</a>
        </div>
        <a className="nav-discord" href={discordUrl} target="_blank" rel="noreferrer">
          Discord <ExternalLink size={15} aria-hidden="true" />
        </a>
      </nav>

      <section id="home" className="hero section-shell">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Independent game studio</div>
          <h1>Two creators.<br /><span>One big impact.</span></h1>
          <p>
            We are Midripa and Z3N — two friends building energetic Roblox experiences,
            memorable worlds, and a community that grows with every release.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={discordUrl} target="_blank" rel="noreferrer">
              Join our Discord <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#team">Meet the duo</a>
          </div>
          <div className="hero-note">
            <span className="live-dot" /> Currently building our next Roblox experience
          </div>
        </div>

        <div className="hero-mark" aria-label="MidZen Studios logo">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <Image
            src="/midzen-logo.png"
            alt="A shark and a bomb forming the MidZen Studios emblem"
            width={760}
            height={760}
            priority
          />
        </div>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-kicker">Who we are</div>
        <div className="about-grid">
          <h2>Different energy.<br />Shared ambition.</h2>
          <div>
            <p>
              MidZen Studios was born from a friendship and a simple idea: make games
              that feel exciting from the first second and give players a reason to return.
            </p>
            <p>
              We are learning, experimenting, and turning bold ideas into playable worlds —
              one update at a time.
            </p>
          </div>
        </div>
      </section>

      <section id="team" className="team section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">The founders</div>
            <h2>Meet the minds behind MidZen.</h2>
          </div>
          <p>Two identities, one studio.</p>
        </div>

        <div className="founder-grid">
          <article className="founder-card shark-card">
            <div className="founder-icon"><Waves size={34} /></div>
            <div className="founder-number">01</div>
            <div className="founder-symbol">THE SHARK</div>
            <h3>Midripa</h3>
            <p>Instinct, momentum, and fearless ideas. The shark keeps the studio moving forward.</p>
          </article>

          <article className="founder-card bomb-card">
            <div className="founder-icon"><Bomb size={34} /></div>
            <div className="founder-number">02</div>
            <div className="founder-symbol">THE BOMB</div>
            <h3>Z3N</h3>
            <p>Energy, impact, and bold concepts. The bomb brings the spark that makes every idea explode.</p>
          </article>
        </div>
      </section>

      <section id="projects" className="projects section-shell">
        <div className="project-card">
          <div className="project-copy">
            <div className="section-kicker">Our games</div>
            <h2>The first MidZen experience is taking shape.</h2>
            <p>
              We are creating on Roblox and building with our community. Follow the journey,
              test early versions, and be there when the next world opens.
            </p>
            <a href={discordUrl} target="_blank" rel="noreferrer">
              Get development updates <ArrowRight size={17} />
            </a>
          </div>
          <div className="project-visual" aria-hidden="true">
            <Gamepad2 size={74} />
            <span>COMING SOON</span>
          </div>
        </div>
      </section>

      <section id="discord" className="community section-shell">
        <div className="community-inner">
          <div className="community-badge">MZ</div>
          <div>
            <div className="section-kicker">The MidZen community</div>
            <h2>Play, share ideas, and build with us.</h2>
            <p>Join our Discord to see progress, announcements, tests, and future releases.</p>
          </div>
          <a className="button button-light" href={discordUrl} target="_blank" rel="noreferrer">
            Enter Discord <ExternalLink size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="brand footer-brand">
          <Image src="/midzen-logo.png" alt="" width={44} height={44} />
          <span>MIDZEN STUDIOS</span>
        </div>
        <p>Built by Midripa &amp; Z3N.</p>
        <p>© 2026 MidZen Studios</p>
      </footer>
    </main>
  );
}
