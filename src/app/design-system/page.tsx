import Container from "@/app/_components/container";

export default function DesignSystemPage() {
    return (
        <Container>
            <div className="max-w-6xl mx-auto py-16 px-6">
                {/* Header */}
                <header className="mb-16">
                    <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                        Design System
                    </h1>
                    <p className="font-sans text-xl text-foreground-secondary max-w-3xl leading-relaxed">
                        A comprehensive style guide for brandon.is — combining scholarly gravitas with creative warmth for a digital garden and blog experience.
                    </p>
                </header>

                {/* Color Palette */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Color Palette</h2>

                    <div className="grid gap-8">
                        {/* Background Colors */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Background (Gallery-Inspired Neutrals)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-background-primary border border-border"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Primary (Off-white)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-background-primary</p>
                                    <p className="font-mono text-xs text-foreground-muted">#fafaf8</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-background-secondary border border-border"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Secondary (Warm concrete)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-background-secondary</p>
                                    <p className="font-mono text-xs text-foreground-muted">#f8f8f7</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-secondary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-background-tertiary border border-border"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Tertiary (Pure white)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-background-tertiary</p>
                                    <p className="font-mono text-xs text-foreground-muted">#ffffff</p>
                                </div>
                            </div>
                        </div>

                        {/* Foreground Colors */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Foreground (Text)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-foreground-primary"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Primary (Rich charcoal)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">text-foreground-primary</p>
                                    <p className="font-mono text-xs text-foreground-muted">#2d2d2d</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-foreground-secondary"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Secondary (Medium gray)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">text-foreground-secondary</p>
                                    <p className="font-mono text-xs text-foreground-muted">#4a4a4a</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-foreground-muted"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Muted (Light gray)</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">text-foreground-muted</p>
                                    <p className="font-mono text-xs text-foreground-muted">#6b6b6b</p>
                                </div>
                            </div>
                        </div>

                        {/* Border Colors */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Borders & Subtle Accents</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border-2 border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-border"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Default</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">border-border</p>
                                    <p className="font-mono text-xs text-foreground-muted">#e8e6e3</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border-2 border-border-light">
                                    <div className="w-full h-16 rounded mb-4 bg-border-light"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Light</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">border-border-light</p>
                                    <p className="font-mono text-xs text-foreground-muted">#f0efec</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border-2 border-border-medium">
                                    <div className="w-full h-16 rounded mb-4 bg-border-medium"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Medium</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">border-border-medium</p>
                                    <p className="font-mono text-xs text-foreground-muted">#d4d2cf</p>
                                </div>
                            </div>
                        </div>

                        {/* Semantic Accent Colors */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Semantic Accents (Primary Layer)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-accent-primary"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Primary</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-accent-primary</p>
                                    <p className="font-mono text-xs text-foreground-muted">Soft terracotta</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-accent-secondary"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Secondary</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-accent-secondary</p>
                                    <p className="font-mono text-xs text-foreground-muted">Soft sage</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-accent-tertiary"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Tertiary</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-accent-tertiary</p>
                                    <p className="font-mono text-xs text-foreground-muted">Deep forest</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-accent-statement"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Statement</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-accent-statement</p>
                                    <p className="font-mono text-xs text-foreground-muted">Deep navy</p>
                                </div>
                            </div>
                        </div>

                        {/* Terracotta Variations */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Terracotta Range (Easy to swap!)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-terracotta-soft"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Soft</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-terracotta-soft</p>
                                    <p className="font-mono text-xs text-foreground-muted">#d4a574</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-terracotta-medium"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Medium</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-terracotta-medium</p>
                                    <p className="font-mono text-xs text-foreground-muted">#c4956c</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-terracotta-bold"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Bold</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-terracotta-bold</p>
                                    <p className="font-mono text-xs text-foreground-muted">#d4622d</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-terracotta-vibrant"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Vibrant</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-terracotta-vibrant</p>
                                    <p className="font-mono text-xs text-foreground-muted">#cc5500</p>
                                </div>
                            </div>
                        </div>

                        {/* Green & Navy Variations */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Green Range</h3>
                                <div className="grid gap-4">
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-green-sage"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Sage</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-green-sage</p>
                                        <p className="font-mono text-xs text-foreground-muted">#9caf88</p>
                                    </div>
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-green-forest"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Forest</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-green-forest</p>
                                        <p className="font-mono text-xs text-foreground-muted">#4a6741</p>
                                    </div>
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-green-deep"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Deep</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-green-deep</p>
                                        <p className="font-mono text-xs text-foreground-muted">#2d5016</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Navy Range</h3>
                                <div className="grid gap-4">
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-navy"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Deep Navy</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-navy</p>
                                        <p className="font-mono text-xs text-foreground-muted">#1a2332</p>
                                    </div>
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-navy-statement"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Statement</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-navy-statement</p>
                                        <p className="font-mono text-xs text-foreground-muted">#1a2332</p>
                                    </div>
                                    <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                        <div className="w-full h-16 rounded mb-4 bg-navy-muted"></div>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Muted</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">bg-navy-muted</p>
                                        <p className="font-mono text-xs text-foreground-muted">#2c3e50</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pop Accents */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Pop Accents (Use sparingly!)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-pop-red"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Vibrant Red</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-pop-red</p>
                                    <p className="font-mono text-xs text-foreground-muted">#ff4444</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-pop-green"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Vibrant Teal</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-pop-green</p>
                                    <p className="font-mono text-xs text-foreground-muted">#00cc88</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-pop-yellow"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Vibrant Yellow</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-pop-yellow</p>
                                    <p className="font-mono text-xs text-foreground-muted">#ffdd00</p>
                                </div>
                            </div>
                        </div>

                        {/* Utility Colors */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Utility</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg bg-background-tertiary border border-border">
                                    <div className="w-full h-16 rounded mb-4 bg-charcoal"></div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Charcoal Black</h4>
                                    <p className="font-mono text-xs text-foreground-secondary">bg-charcoal</p>
                                    <p className="font-mono text-xs text-foreground-muted">Strong contrast • #1c1c1c</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Typography</h2>
                    
                    <div className="grid gap-12">
                        {/* Font Families */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Font Families</h3>
                            <div className="grid gap-6">
                                <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Serif (Playfair Display)</h4>
                                    <p className="font-serif text-3xl text-foreground mb-2">The quick brown fox jumps over the lazy dog</p>
                                    <p className="font-mono text-xs text-foreground-secondary">font-serif</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Sans (IBM Plex Sans)</h4>
                                    <p className="font-sans text-3xl text-foreground mb-2">The quick brown fox jumps over the lazy dog</p>
                                    <p className="font-mono text-xs text-foreground-secondary">font-sans</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Display (IBM Plex Sans)</h4>
                                    <p className="font-display text-3xl text-foreground mb-2">The quick brown fox jumps over the lazy dog</p>
                                    <p className="font-mono text-xs text-foreground-secondary">font-display</p>
                                </div>
                                <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Mono (JetBrains Mono)</h4>
                                    <p className="font-mono text-lg text-foreground mb-2">The quick brown fox jumps over the lazy dog</p>
                                    <p className="font-mono text-xs text-foreground-secondary">font-mono</p>
                                </div>
                            </div>
                        </div>

                        {/* Type Scale */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Type Scale</h3>
                            <div className="space-y-4">
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">9xl</span>
                                    <h1 className="font-serif text-9xl font-bold text-foreground leading-none">Aa</h1>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">8xl</span>
                                    <h1 className="font-serif text-8xl font-bold text-foreground leading-none">Aa</h1>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">7xl</span>
                                    <h1 className="font-serif text-7xl font-bold text-foreground leading-none">Aa</h1>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">6xl</span>
                                    <h1 className="font-serif text-6xl font-bold text-foreground">Aa</h1>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">5xl</span>
                                    <h2 className="font-serif text-5xl font-bold text-foreground">Aa</h2>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">4xl</span>
                                    <h2 className="font-serif text-4xl font-bold text-foreground">Aa</h2>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">3xl</span>
                                    <h3 className="font-serif text-3xl font-bold text-foreground">Aa</h3>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">2xl</span>
                                    <h3 className="font-serif text-2xl font-bold text-foreground">Aa</h3>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">xl</span>
                                    <h4 className="font-serif text-xl font-bold text-foreground">Aa</h4>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">lg</span>
                                    <p className="font-sans text-lg text-foreground">Aa</p>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">base</span>
                                    <p className="font-sans text-base text-foreground">Aa</p>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">sm</span>
                                    <p className="font-sans text-sm text-foreground">Aa</p>
                                </div>
                                <div className="flex items-baseline gap-4">
                                    <span className="font-mono text-xs text-foreground-secondary w-12">xs</span>
                                    <p className="font-sans text-xs text-foreground">Aa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spacing & Layout */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Spacing & Layout</h2>
                    
                    <div className="grid gap-8">
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Custom Spacing Scale</h3>
                            <div className="space-y-4">
                                {[14, 18, 22, 28, 32, 36, 40, 44, 48, 52, 56, 60].map((size) => (
                                    <div key={size} className="flex items-center gap-4">
                                        <span className="font-mono text-sm text-foreground-secondary w-8">{size}</span>
                                        <div 
                                            className="bg-accent-primary/20 border-l-4 border-accent-primary h-6"
                                            style={{width: `${size * 0.25}rem`}}
                                        ></div>
                                        <span className="font-mono text-xs text-foreground-secondary">{size * 0.25}rem</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Grid System</h3>
                            <div className="grid grid-cols-12 gap-4 mb-4">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <div key={i} className="bg-accent-primary/20 h-8 rounded flex items-center justify-center text-xs font-mono text-foreground">
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <p className="font-mono text-xs text-foreground-secondary">12-column responsive grid with 1rem gap</p>
                        </div>
                    </div>
                </section>

                {/* Shadows & Elevation */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Shadows & Elevation</h2>

                    <div className="grid gap-8">
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Standard Shadows</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: 'sm', class: 'shadow-sm' },
                                    { name: 'md', class: 'shadow-md' },
                                    { name: 'lg', class: 'shadow-lg' },
                                    { name: 'xl', class: 'shadow-xl' },
                                    { name: '2xl', class: 'shadow-2xl' },
                                    { name: 'inner', class: 'shadow-inner' }
                                ].map((shadow) => (
                                    <div key={shadow.name} className={`p-6 rounded-lg bg-background-tertiary border border-border ${shadow.class}`}>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">{shadow.name}</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">{shadow.class}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Accent Glow Shadows</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { name: 'Terracotta Glow', class: 'shadow-accent-glow' },
                                    { name: 'Terracotta Glow (lg)', class: 'shadow-accent-glow-lg' },
                                    { name: 'Sage Glow', class: 'shadow-sage-glow' },
                                    { name: 'Navy Glow', class: 'shadow-navy-glow' }
                                ].map((shadow) => (
                                    <div key={shadow.name} className={`p-6 rounded-lg bg-background-tertiary ${shadow.class}`}>
                                        <h4 className="font-mono text-sm font-semibold text-foreground mb-2">{shadow.name}</h4>
                                        <p className="font-mono text-xs text-foreground-secondary">{shadow.class}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Components */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Blog Components</h2>
                    <p className="font-sans text-lg text-foreground-secondary mb-8">Polished, structured layouts for published content</p>
                    
                    <div className="space-y-12">
                        {/* Article Card */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Article Card</h3>
                            <article className="p-8 rounded-lg bg-background-secondary shadow-md border border-foreground/10 max-w-2xl">
                                <div className="flex items-center gap-2 text-sm font-mono text-foreground-secondary mb-4">
                                    <time dateTime="2024-03-15">March 15, 2024</time>
                                    <span className="text-foreground/30">•</span>
                                    <span>5 min read</span>
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-4 leading-tight">
                                    The Art of Digital Minimalism
                                </h2>
                                <p className="font-sans text-lg text-foreground-secondary leading-relaxed mb-6">
                                    Exploring how intentional design choices can create more meaningful digital experiences, 
                                    drawing from both scholarly research and practical implementation.
                                </p>
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 text-xs font-mono bg-accent-primary/10 text-accent-primary rounded-full">design</span>
                                    <span className="px-3 py-1 text-xs font-mono bg-accent-tertiary/10 text-accent-tertiary rounded-full">philosophy</span>
                                </div>
                            </article>
                        </div>

                        {/* Article Header */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Article Header</h3>
                            <header className="max-w-3xl">
                                <div className="flex items-center gap-2 text-sm font-mono text-foreground-secondary mb-6">
                                    <time dateTime="2024-03-15">March 15, 2024</time>
                                    <span className="text-foreground/30">•</span>
                                    <span>8 min read</span>
                                    <span className="text-foreground/30">•</span>
                                    <span>Updated: March 20, 2024</span>
                                </div>
                                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                    Designing for Thoughtful Interaction
                                </h1>
                                <p className="font-sans text-xl text-foreground-secondary leading-relaxed mb-8">
                                    An exploration of how we can create digital interfaces that encourage reflection, 
                                    deeper thinking, and meaningful engagement rather than mindless consumption.
                                </p>
                            </header>
                        </div>
                    </div>
                </section>

                {/* Garden Components */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Garden Components</h2>
                    <p className="font-sans text-lg text-foreground-secondary mb-8">Organic, interconnected layouts for evolving ideas</p>
                    
                    <div className="space-y-12">
                        {/* Note Card */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Note Card</h3>
                            <div className="p-6 rounded-lg bg-background border-l-4 border-accent-secondary max-w-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="font-display text-xl font-semibold text-foreground">Mental Models & Design Patterns</h3>
                                    <span className="text-xs font-mono text-foreground-secondary bg-foreground/5 px-2 py-1 rounded">evolving</span>
                                </div>
                                <p className="font-sans text-foreground-secondary mb-4 leading-relaxed">
                                    How do the mental models we carry about interface design influence the patterns we choose? 
                                    This note explores the relationship between cognitive frameworks and UI decisions.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-full">#design-thinking</span>
                                    <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-full">#cognitive-science</span>
                                    <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-full">#patterns</span>
                                </div>
                            </div>
                        </div>

                        {/* Connected Notes */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Connected Notes</h3>
                            <div className="grid gap-4 max-w-4xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-lg bg-background-secondary border border-foreground/10">
                                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">Design Systems</h4>
                                        <p className="font-sans text-sm text-foreground-secondary mb-3">Thoughts on systematic approaches to interface consistency...</p>
                                        <div className="text-xs font-mono text-foreground-secondary">3 connections</div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-background-secondary border border-foreground/10">
                                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">User Psychology</h4>
                                        <p className="font-sans text-sm text-foreground-secondary mb-3">Understanding how people actually interact with interfaces...</p>
                                        <div className="text-xs font-mono text-foreground-secondary">7 connections</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-block w-px h-8 bg-accent-secondary/30"></div>
                                </div>
                                <div className="p-6 rounded-lg bg-accent-secondary/5 border border-accent-secondary/20">
                                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">Interface Philosophy</h4>
                                    <p className="font-sans text-foreground-secondary leading-relaxed">
                                        The intersection of design systems and user psychology reveals deeper questions about 
                                        how we structure digital experiences. What philosophical frameworks guide our choices?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Elements */}
                <section className="mb-20">
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Interactive Elements</h2>
                    
                    <div className="space-y-12">
                        {/* Buttons */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Buttons</h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-accent-primary text-white font-display font-medium rounded-lg hover:bg-accent-primary/90 transition-colors shadow-sm">
                                    Primary
                                </button>
                                <button className="px-6 py-3 bg-accent-secondary text-foreground font-display font-medium rounded-lg hover:bg-accent-secondary/90 transition-colors shadow-sm">
                                    Secondary
                                </button>
                                <button className="px-6 py-3 border border-foreground/20 text-foreground font-display font-medium rounded-lg hover:bg-foreground/5 transition-colors">
                                    Outline
                                </button>
                                <button className="px-6 py-3 text-foreground-secondary font-display font-medium hover:text-foreground transition-colors">
                                    Ghost
                                </button>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Links</h3>
                            <div className="space-y-2">
                                <p className="font-sans text-lg">
                                    This is a paragraph with an <a href="#" className="text-accent-primary hover:underline font-medium">inline link</a> that demonstrates hover states.
                                </p>
                                <p className="font-sans text-lg">
                                    Links can also be <a href="#" className="text-foreground border-b border-accent-primary/30 hover:border-accent-primary transition-colors">underlined for emphasis</a> when needed.
                                </p>
                            </div>
                        </div>

                        {/* Form Elements */}
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Form Elements</h3>
                            <div className="grid gap-4 max-w-md">
                                <div>
                                    <label className="block font-display font-medium text-foreground mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 border border-foreground/20 rounded-lg bg-background-secondary focus:border-accent-primary focus:outline-none transition-colors font-sans"
                                    />
                                </div>
                                <div>
                                    <label className="block font-display font-medium text-foreground mb-2">Message</label>
                                    <textarea 
                                        rows={4}
                                        placeholder="Your thoughts..."
                                        className="w-full px-4 py-3 border border-foreground/20 rounded-lg bg-background-secondary focus:border-accent-primary focus:outline-none transition-colors font-sans resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Usage Guidelines */}
                <section>
                    <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Usage Guidelines</h2>
                    
                    <div className="grid gap-8 max-w-4xl">
                        <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Blog vs. Garden Distinction</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Blog (Polished)</h4>
                                    <ul className="font-sans text-sm text-foreground-secondary space-y-1">
                                        <li>• Serif headings for traditional feel</li>
                                        <li>• Structured layouts with clear dates</li>
                                        <li>• Formal spacing and grid system</li>
                                        <li>• Subtle borders and dividers</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-mono text-sm font-semibold text-foreground mb-2">Garden (Evolving)</h4>
                                    <ul className="font-sans text-sm text-foreground-secondary space-y-1">
                                        <li>• Sans-serif headings for casual feel</li>
                                        <li>• Looser, organic layouts</li>
                                        <li>• Interconnected visual elements</li>
                                        <li>• Tag-based organization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg bg-background-secondary border border-foreground/10">
                            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Key Principles</h3>
                            <ul className="font-sans text-foreground-secondary space-y-2">
                                <li>• <strong className="text-foreground">Warm Minimalism</strong>: Clean design that never feels cold</li>
                                <li>• <strong className="text-foreground">Scholarly Authority</strong>: Professional presentation with academic gravitas</li>
                                <li>• <strong className="text-foreground">Creative Flair</strong>: Thoughtful asymmetry and unexpected details</li>
                                <li>• <strong className="text-foreground">Generous Spacing</strong>: Abundant white space for comfortable reading</li>
                                <li>• <strong className="text-foreground">Accessibility First</strong>: Proper contrast and focus states</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
}
