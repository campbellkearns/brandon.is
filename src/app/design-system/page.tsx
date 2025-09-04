import  Container  from "@/app/_components/container";

export default function DesignSystemPage() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-16 px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-6xl font-bold text-foreground mb-6">
            Design System
          </h1>
          <p className="text-xl text-foreground-secondary leading-relaxed">
            A warm, scholarly aesthetic combining academic gravitas with creative warmth. 
            Built with semantic color tokens, generous spacing, and thoughtful typography.
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Color Palette</h2>
          
          {/* Light Mode Colors */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Light Mode</h3>
            
            {/* Background Colors */}
            <div className="mb-8">
              <h4 className="font-sans text-lg font-medium text-foreground mb-4">Background Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-background-primary rounded border"></div>
                  <p className="mt-2 text-sm font-mono">bg-background-primary</p>
                  <p className="text-xs text-foreground-secondary">Warm off-white</p>
                </div>
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-background-secondary rounded border"></div>
                  <p className="mt-2 text-sm font-mono">bg-background-secondary</p>
                  <p className="text-xs text-foreground-secondary">Soft cream</p>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div className="mb-8">
              <h4 className="font-sans text-lg font-medium text-foreground mb-4">Text Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-background-secondary rounded flex items-center justify-center border">
                    <span className="text-foreground font-medium text-xl">Primary Text</span>
                  </div>
                  <p className="mt-2 text-sm font-mono">text-foreground</p>
                  <p className="text-xs text-foreground-secondary">Primary text</p>
                </div>
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-background-secondary rounded flex items-center justify-center border">
                    <span className="text-foreground-secondary font-medium text-xl">Secondary Text</span>
                  </div>
                  <p className="mt-2 text-sm font-mono">text-foreground-secondary</p>
                  <p className="text-xs text-foreground-secondary">Secondary text</p>
                </div>
              </div>
            </div>

            {/* Accent Colors */}
            <div className="mb-8">
              <h4 className="font-sans text-lg font-medium text-foreground mb-4">Accent Colors</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-accent-terracotta rounded flex items-center justify-center">
                    <span className="text-white font-medium">Terracotta</span>
                  </div>
                  <p className="mt-2 text-sm font-mono">bg-accent-terracotta</p>
                  <p className="text-xs text-foreground-secondary">Primary accent</p>
                </div>
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-accent-sage rounded flex items-center justify-center">
                    <span className="text-white font-medium">Sage</span>
                  </div>
                  <p className="mt-2 text-sm font-mono">bg-accent-sage</p>
                  <p className="text-xs text-foreground-secondary">Secondary accent</p>
                </div>
                <div className="bg-background border border-foreground/10 rounded-lg p-4">
                  <div className="w-full h-16 bg-accent-navy rounded flex items-center justify-center">
                    <span className="text-white font-medium">Navy</span>
                  </div>
                  <p className="mt-2 text-sm font-mono">bg-accent-navy</p>
                  <p className="text-xs text-foreground-secondary">Important elements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Mode Colors */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Dark Mode</h3>
            <div className="bg-dark-background-primary rounded-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dark Backgrounds */}
                <div className="space-y-3">
                  <h4 className="font-sans text-sm font-medium text-dark-foreground-secondary uppercase tracking-wider">Backgrounds</h4>
                  <div className="bg-dark-background-secondary border border-dark-foreground-primary/10 rounded-lg p-4">
                    <div className="w-full h-16 bg-dark-background-primary rounded border border-dark-foreground-primary/20"></div>
                    <p className="mt-2 text-sm font-mono text-dark-foreground-primary">bg-dark-background-primary</p>
                    <p className="text-xs text-dark-foreground-secondary">Dark warm background</p>
                  </div>
                </div>

                {/* Dark Accents */}
                <div className="space-y-3">
                  <h4 className="font-sans text-sm font-medium text-dark-foreground-secondary uppercase tracking-wider">Accents</h4>
                  <div className="bg-dark-background-secondary border border-dark-foreground-primary/10 rounded-lg p-4">
                    <div className="w-full h-16 bg-dark-accent-terracotta rounded flex items-center justify-center">
                      <span className="text-dark-background-primary font-medium">Terracotta</span>
                    </div>
                    <p className="mt-2 text-sm font-mono text-dark-foreground-primary">bg-dark-accent-terracotta</p>
                    <p className="text-xs text-dark-foreground-secondary">Dark mode accent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Typography</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Headings (Serif)</h3>
              <div className="space-y-4">
                <div>
                  <h1 className="font-serif text-6xl font-bold text-foreground">Heading 1</h1>
                  <code className="text-sm text-foreground-secondary">font-serif text-6xl</code>
                </div>
                <div>
                  <h2 className="font-serif text-4xl font-bold text-foreground">Heading 2</h2>
                  <code className="text-sm text-foreground-secondary">font-serif text-4xl</code>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">Heading 3</h3>
                  <code className="text-sm text-foreground-secondary">font-serif text-2xl</code>
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium text-foreground">Heading 4</h4>
                  <code className="text-sm text-foreground-secondary">font-serif text-xl</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Body Text (Sans-serif)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lg text-foreground">
                    Large body text with generous line height for enhanced readability. 
                    This demonstrates the warm, scholarly aesthetic we're aiming for.
                  </p>
                  <code className="text-sm text-foreground-secondary">text-lg (line-height: 1.6)</code>
                </div>
                <div>
                  <p className="text-base text-foreground">
                    Regular body text with 1.7 line height for optimal reading experience. 
                    The Inter font provides clean, modern readability while maintaining warmth.
                  </p>
                  <code className="text-sm text-foreground-secondary">text-base (line-height: 1.7)</code>
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">
                    Secondary text for captions, metadata, and supporting information.
                  </p>
                  <code className="text-sm text-foreground-secondary">text-sm text-foreground-secondary</code>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Accent Text</h3>
              <div className="space-y-4">
                <div>
                  <blockquote className="text-xl text-accent-terracotta font-medium border-l-4 border-accent-terracotta pl-6">
                    "Pull quotes and highlighted text use the warm terracotta accent for visual emphasis."
                  </blockquote>
                  <code className="text-sm text-foreground-secondary">text-accent-terracotta</code>
                </div>
                <div>
                  <p className="text-accent-sage font-medium">
                    Secondary accent text in sage green for variety and hierarchy.
                  </p>
                  <code className="text-sm text-foreground-secondary">text-accent-sage</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Spacing</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Generous White Space</h3>
              <div className="bg-background-secondary rounded-lg p-8 border">
                <div className="space-y-6">
                  <div className="bg-accent-terracotta/10 p-4 rounded">
                    <p>Standard padding (p-4)</p>
                  </div>
                  <div className="bg-accent-sage/10 p-8 rounded">
                    <p>Large padding (p-8)</p>
                  </div>
                  <div className="bg-accent-navy/10 p-12 rounded">
                    <p>Extra large padding (p-12)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Extended Spacing Scale</h3>
              <div className="space-y-2">
                {[14, 18, 22, 28, 32, 36, 40].map((size) => (
                  <div key={size} className="flex items-center gap-4">
                    <div className={`bg-accent-terracotta h-4`} style={{ width: `${size * 0.25}rem` }}></div>
                    <code className="text-sm">space-{size} ({size * 0.25}rem)</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Shadows</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-xs">
              <h4 className="font-serif text-lg font-medium mb-2">Extra Small</h4>
              <code className="text-sm text-foreground-secondary">shadow-xs</code>
            </div>
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-sm">
              <h4 className="font-serif text-lg font-medium mb-2">Small</h4>
              <code className="text-sm text-foreground-secondary">shadow-sm</code>
            </div>
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-md">
              <h4 className="font-serif text-lg font-medium mb-2">Medium</h4>
              <code className="text-sm text-foreground-secondary">shadow-md</code>
            </div>
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-lg">
              <h4 className="font-serif text-lg font-medium mb-2">Large</h4>
              <code className="text-sm text-foreground-secondary">shadow-lg</code>
            </div>
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-warm">
              <h4 className="font-serif text-lg font-medium mb-2">Warm Glow</h4>
              <code className="text-sm text-foreground-secondary">shadow-warm</code>
            </div>
            <div className="bg-background border border-foreground/10 rounded-lg p-6 shadow-warm-lg">
              <h4 className="font-serif text-lg font-medium mb-2">Warm Glow Large</h4>
              <code className="text-sm text-foreground-secondary">shadow-warm-lg</code>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Component Examples</h2>
          
          {/* Card Example */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-background-secondary border border-foreground/10 rounded-lg p-6 shadow-md">
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">Standard Card</h4>
                  <p className="text-foreground-secondary mb-4">
                    A clean card design with subtle shadows and warm backgrounds.
                  </p>
                  <button className="bg-accent-terracotta text-white px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
                
                <div className="bg-background-secondary border border-accent-sage rounded-lg p-6 shadow-warm">
                  <h4 className="font-serif text-xl font-semibold text-accent-navy mb-2">Accent Card</h4>
                  <p className="text-foreground-secondary mb-4">
                    Enhanced with accent colors and warm glow shadows.
                  </p>
                  <button className="bg-accent-sage text-white px-4 py-2 rounded font-medium hover:opacity-90 transition-opacity">
                    Explore
                  </button>
                </div>
              </div>
            </div>

            {/* Alert Example */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Alerts</h3>
              <div className="space-y-4">
                <div className="bg-accent-terracotta/10 border-l-4 border-accent-terracotta p-4 rounded">
                  <p className="text-accent-navy">
                    <strong>Information:</strong> This is an informational alert using our warm color palette.
                  </p>
                </div>
                <div className="bg-accent-sage/10 border-l-4 border-accent-sage p-4 rounded">
                  <p className="text-accent-navy">
                    <strong>Success:</strong> Action completed successfully with sage accent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Mode Demo */}
        <section className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Dark Mode</h2>
          <div className="bg-dark-background-primary rounded-lg p-8 border border-dark-foreground-primary/20">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-semibold text-dark-foreground-primary mb-4">
                Dark Mode Preview
              </h3>
              <p className="text-dark-foreground-secondary mb-6">
                Toggle between light and dark modes using the theme switcher in the top corner. 
                Our design system provides seamless transitions between modes while maintaining the warm, scholarly aesthetic.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-background-secondary border border-dark-foreground-primary/10 rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold text-dark-accent-terracotta mb-3">
                  Dark Mode Card
                </h4>
                <p className="text-dark-foreground-secondary mb-4">
                  Demonstrates how our warm color palette adapts beautifully to dark themes.
                </p>
                <div className="flex gap-2">
                  <span className="bg-dark-accent-terracotta text-dark-background-primary px-3 py-1 rounded text-sm font-medium">
                    Terracotta
                  </span>
                  <span className="bg-dark-accent-sage text-dark-background-primary px-3 py-1 rounded text-sm font-medium">
                    Sage
                  </span>
                </div>
              </div>
              
              <div className="bg-dark-background-secondary border border-dark-accent-navy/30 rounded-lg p-6">
                <h4 className="font-serif text-xl font-semibold text-dark-accent-navy mb-3">
                  Typography in Dark
                </h4>
                <p className="text-dark-foreground-primary mb-2">
                  Primary text maintains excellent readability
                </p>
                <p className="text-dark-foreground-secondary text-sm">
                  Secondary text provides subtle hierarchy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8">Usage Guidelines</h2>
          <div className="bg-background-secondary rounded-lg p-8 border">
            <div className="prose prose-lg max-w-none">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Design Principles</h3>
              <ul className="text-foreground space-y-2">
                <li><strong>Generous spacing:</strong> Use extended spacing utilities for breathing room</li>
                <li><strong>Warm shadows:</strong> Prefer warm glow shadows for cozy aesthetics</li>
                <li><strong>Semantic colors:</strong> Use meaningful color names over numerical systems</li>
                <li><strong>Typography hierarchy:</strong> Combine serif headings with sans-serif body text</li>
                <li><strong>Accessibility:</strong> Maintain sufficient contrast ratios in both light and dark modes</li>
              </ul>

              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 mt-8">Implementation</h3>
              <div className="bg-foreground/5 rounded p-4 font-mono text-sm">
                <p className="text-foreground-secondary mb-2">Example usage:</p>
                <code className="text-accent-navy">
                  &lt;div className="bg-background-primary text-foreground p-8 shadow-warm rounded-lg"&gt;<br/>
                  &nbsp;&nbsp;&lt;h2 className="font-serif text-2xl text-accent-terracotta mb-4"&gt;Title&lt;/h2&gt;<br/>
                  &nbsp;&nbsp;&lt;p className="text-foreground-secondary"&gt;Content&lt;/p&gt;<br/>
                  &lt;/div&gt;
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}