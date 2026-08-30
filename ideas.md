# Medora — Design Direction

## Three stylistic approaches

### Theme Name: Soft Clinic Clay
Very brief intro: A warm, tactile claymorphic dashboard that makes health administration feel calmer and more human. Rounded relief surfaces, paper-like warmth, and quiet coral accents create a reassuring companion rather than a clinical console.
Probability: 0.07

### Theme Name: Botanical Ledger
Very brief intro: An editorial health journal with moss green, cream paper, and botanical linework. It treats personal health as a long-term narrative with a calm, archival tone.
Probability: 0.04

### Theme Name: Signal & Stillness
Very brief intro: A dark, high-contrast health cockpit with precise signal colors and restrained glow. It emphasizes monitoring and rapid scanning for users who want a more technical feel.
Probability: 0.02

## Chosen approach: Soft Clinic Clay

### Design Movement
Contemporary claymorphism with influences from tactile industrial design, Japanese editorial minimalism, and friendly healthcare software. The interface should feel physically pressable without becoming childish or toy-like.

### Core Principles
1. **Tactile calm:** Use raised and inset surfaces, soft shadows, and generous radii to make every action feel safe and tangible.
2. **Human scanning:** Structure the dashboard around short, readable clusters so a user can understand status in seconds.
3. **Warm precision:** Pair a soft oat background with medical teal and a coral signal color; the system stays comforting while still communicating urgency.
4. **Progress over pressure:** Make trends, adherence, and next actions feel achievable through encouraging language and lightweight motion.

### Color Philosophy
The base is a warm oat #F4EFE7 rather than stark white, reducing the visual harshness associated with clinical systems. Deep ink #263238 anchors copy. Medical teal #236B68 signals trustworthy action and stable health states. Coral #EF765F is reserved for reminders and meaningful attention, never decoration. Butter #F5C96A adds a small note of optimism for progress moments.

### Layout Paradigm
A persistent left rail on desktop anchors navigation while the main content uses an asymmetric “care rhythm”: a wide greeting and care score panel, a compact next-action stack, and a lower row of personal records. On mobile, the rail folds into a bottom dock and the dashboard becomes a thumb-friendly vertical journal.

### Signature Elements
1. A pebble-shaped Medora mark made from two overlapping organic forms.
2. Soft inset “well” controls for filters, tabs, and metric summaries.
3. A thin coral pulse line that appears in trends and reminder states.

### Interaction Philosophy
Interactions should feel like pressing a physical soft surface. Hover states lift slightly, active states press inward, and important confirmations appear as small, calm toast notes. Never use aggressive alert red for routine health attention.

### Animation
Use 160–240ms transitions with a snappy ease-out. Cards lift by 2px on hover, buttons press to 0.97 scale, and dashboard groups enter with 40ms staggered delays. Trend lines draw in once on page entry. Respect prefers-reduced-motion and keep all motion secondary to reading.

### Typography System
Use Fraunces for display headlines and section statements, with Manrope for navigation, labels, data, and body copy. Headlines use tight tracking and expressive serif contrast; UI copy uses medium-weight geometric sans at 13–15px. Numbers in metrics use Manrope with tabular numerals.

### Brand Essence
Medora is a calm personal health cockpit for people who want every important health detail in one clear place, without the coldness of a medical portal. Personality: **reassuring, observant, capable**.

### Brand Voice
Headlines should sound grounded and quietly optimistic. CTAs should be direct, useful, and never salesy. Microcopy should explain what matters next.

Example lines:
- “A little more clarity for your everyday health.”
- “You’re on track. Keep the rhythm gentle.”

### Wordmark & Logo
The mark is a pebble-heart: two rounded leaf-like lobes joined at the base, suggesting care and continuity. The wordmark uses a custom lowercase “medora” lockup with a soft terminal on the “a”; in the UI, the symbol stands alone at a visible 34px size.

### Signature Brand Color
**Medora Teal — #236B68**, a deep softened teal that feels medical, grounded, and ownable without reading as institutional blue.

## Implementation Notes

The project is intentionally **JavaScript-only**: use `.js` and `.jsx`, remove TypeScript entry points and type-check scripts, and keep the UI frontend-only so it runs immediately after `pnpm install && pnpm dev`. Include `schema.sql` for the requested SQL data model and `README.md` with Java, C#, C++, JavaScript, HTML, CSS, and SQL integration guidance. Do not fabricate reviews, ratings, or testimonials.
