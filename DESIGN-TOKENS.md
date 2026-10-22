# Kiddovate marketing site design tokens

Source: `kiddovate-website` (`app/page.tsx`, `app/globals.css`, `components/legal-page.tsx`, `tailwind.config.ts`, `app/layout.tsx`). Tailwind spacing, radius, and shadow values below are the default Tailwind scale. No custom spacing scale is defined.

## Brand colors

Colors actually painted on the site:

| Hex | Role | Where it is used |
| --- | --- | --- |
| `#FF6B35` | Brand orange | Hero accent (“Endless Fun!”), nav underline, hamburger, outline store button, Play Now chip, form focus border, form error, loading spinner top, gradient start |
| `#FF8F65` | Orange highlight | End stop of filled orange buttons (`#FF6B35` → `#FF8F65`) |
| `#FFD23F` | Brand yellow | Logo tile gradient end, hero blob, character circles, star ratings, “No Ads” bolt, decorative bubbles |
| `#FFA726` | Amber | Lulu character circle (`#FFD23F` → `#FFA726`) |
| `#2D1B69` | Brand navy | Headings, nav links, wordmark, footer background, store-badge titles |
| `#4A3494` | Navy midtone | Download section gradient (`#2D1B69` → `#4A3494`) |
| `#6B5B95` | Muted purple | Body copy on cream and white, card descriptions, testimonials |
| `#636E72` | Legal body gray | Privacy, terms, and about article text |
| `#FFF8F0` | Cream | Hero and legal page top, parent cards, nav bar (at 92% opacity) |
| `#FFF0E0` | Peach | Hero bottom, character and newsletter section gradient partner |
| `#FFF5EE` | Warm card | Sing & Dance card, drawing mock row, one testimonial |
| `#FFE8D6` | Warm card end | ABCs learning card gradient end |
| `#FFD6C0` | Peach border | Newsletter inputs, legal “last updated” rule, spinner track |
| `#F0F5FF` | Cool card | Birthday show card, games mock row |
| `#DBEAFE` | Cool card end | Numbers learning card gradient end |
| `#F0FFF5` | Mint card | Animal Friends card, learning mock row |
| `#D1FAE5` | Mint card end | Colors & Art learning card gradient end |
| `#FFF0F5` | Pink wash | Life Skills card gradient start |
| `#FCE7F3` | Pink wash end | Life Skills card gradient end |
| `#F8F5FF` | Lilac card | First parent testimonial |
| `#FFFFFF` | White | Section backgrounds, wave, store badges, legal article, button text |
| `#6C5CE7` | Purple | Birthday card and “See all” button gradient start, expert icon tile |
| `#A29BFE` | Soft purple | Birthday gradient end, Kune character circle start |
| `#35CE8D` | Green | Animal card and safety icon gradient start, Kid-Safe stroke, form success |
| `#4ECDC4` | Teal | Animal card gradient end, Bobi circle start, safety icon end |
| `#84FAB0` | Mint | Lula character circle start |
| `#8FD3F4` | Sky | Lula character circle end |
| `#FF6B85` | Rose | Jojo character circle start |
| `#FF3366` | Hot pink | Jojo character circle end |
| `#FF9A9E` | Blush | Fikir character circle start |
| `#FECFEF` | Pale pink | Fikir character circle end |
| `#333333` | Icon gray | Apple and Play marks on the white download badges |
| `#666666` | Caption gray | “Download on the” / “Get it on” on the white badges |
| `#000000` | Scrim | Legal modal overlay at 70% opacity; drop shadows |

Translucent uses of the same colors:

| Value | Where |
| --- | --- |
| `rgba(255,248,240,0.92)` | Sticky nav background |
| `rgba(255,107,53,0.15)` | Nav bottom border |
| `rgba(255,107,53,0.06)` | Outlined Google Play button fill |
| `rgba(255,107,53,0.4)` / `0.8` | Orange button glow (`pulse-glow`) |
| `rgba(255,255,255,0.85)` | “Download on the” on the orange hero button |
| `rgba(255,255,255,0.8)` | Download-section body copy |
| `rgba(255,255,255,0.6)` | Footer tagline and links |
| `rgba(255,255,255,0.5)` | Footer copyright |
| `rgba(255,255,255,0.1)` | Footer social buttons and divider |
| `rgba(45,27,105,0.5)` | Legal-page footer (`#2D1B69` at 50%) |
| `rgba(0,0,0,0.12)` | Tree drop shadow |
| `rgba(0,0,0,0.15)` / `0.2` | Keypad and card shadows in CSS/JSX |

Declared in `tailwind.config.ts` but not used by the pages:

| Token | Hex |
| --- | --- |
| `k-yellow` | `#FFD23F` (same yellow, unused as a class) |
| `k-blue` | `#4361EE` |
| `k-orange` | `#FF9F1C` |
| `k-pink` | `#F72585` |
| `k-white` | `#FFFFFF` |
| `k-text` | `#2B2D42` |

The legal modal also uses Tailwind’s default grays (`gray-400`, `gray-500`, `gray-600`, `gray-700`, `gray-200`).

## Fonts

Loaded from Google Fonts in `app/globals.css`:

- **Andika** 400, 700
- **Baloo 2** 400, 500, 600, 700, 800
- **Nunito** 400, 600, 700, 800

| Role | Stack | Weight |
| --- | --- | --- |
| Body, links, buttons, inputs | Andika, Nunito, sans-serif | 400 default; 600 semibold; 700 bold |
| Headings (h1–h4, `.font-heading`) | Andika, Baloo 2, cursive | 700, often raised to 800 with `font-extrabold` |

`tailwind.config.ts` also names Fredoka (`font-fredoka`) and Nunito (`font-nunito`). Fredoka is not loaded, and those utilities are not used. Pages use `font-heading` and `font-body`.

## Heading and body styles

| Style | Size | Weight | Color | Notes |
| --- | --- | --- | --- | --- |
| Hero h1 | `clamp(2.2rem, 5vw, 4rem)` | 800 | `#2D1B69`, orange span `#FF6B35` | Tight leading |
| Section h2 | `text-3xl` / `sm:text-4xl` / `lg:text-5xl` (30 / 36 / 48px) | 800 | `#2D1B69`, or white on the download band | Newsletter h2 stops at 36px |
| Card h3 | `text-xl` (20px) or `text-lg` (18px) for characters and learn tiles | 700 | `#2D1B69` | |
| Footer h4 | `text-sm` (14px), uppercase labels | 700 | white | |
| Modal title | `text-2xl` (24px) | 700 | `#2D1B69` | |
| Legal h1 | `text-3xl` / `sm:text-4xl` | 800 | `#2D1B69` | |
| Hero paragraph | `text-lg` / `sm:text-xl` (18 / 20px) | 400 | `#6B5B95` | |
| Section paragraph | `text-lg` | 400 | `#6B5B95` or white at 80% | |
| Card body | `text-sm` (14px) | 400 | `#6B5B95` | Testimonials are italic |
| Fine print | `text-xs` (12px) or `text-[10px]` | 600 on store captions | `#6B5B95`, `#666`, or white at 85% | |
| Nav links | `text-sm`, wide tracking | 600 | `#2D1B69` | |
| Legal body | `text-base` (16px), relaxed leading | 400 | `#636E72` | Pre-wrapped |
| Wordmark | `text-lg` or `text-xl` | 700 | `#2D1B69` or white | |

## Button styles

Shared motion: `transition-all`, hover scale `1.05` (logo and social icons scale `1.10`).

| Button | Radius | Padding | Fill | Hover |
| --- | --- | --- | --- | --- |
| Nav “Watch Now” | full pill | 20px × 10px (`px-5 py-2.5`) | `#FF6B35` → `#FF8F65`, white, 14px bold | Larger shadow, scale 1.05 |
| Mobile “Watch Free” | full pill | 24px × 12px | Same orange gradient | No extra hover class |
| Hero App Store | full pill | 32px × 16px, 16px icon gap | Same orange gradient, white, 12px caption + 18px title | `shadow-xl` → `shadow-2xl`, scale 1.05, pulsing orange glow |
| Hero Google Play | full pill, 2px `#FF6B35` border | 32px × 16px, 16px gap | `rgba(255,107,53,0.06)`, orange text and icon | Scale 1.05 |
| “See all” shows link | full pill | 32px × 14px | `#6C5CE7` → `#A29BFE`, white | Larger shadow, scale 1.05 |
| Download-section store badges | 16px (`rounded-2xl`) | 24px × 14px, 12px gap | White, `#333` icon, `#666` caption, `#2D1B69` title | Scale 1.05, `shadow-lg` |
| “Join Family” | full pill | 32px × 16px | Orange gradient, white, 16px bold | Larger shadow, scale 1.05 |
| Mock “Play Now” | 12px | vertical 8px | Solid `#FF6B35`, white, 12px | None |
| Footer social | full circle, 40×40 | centered 18px icon | white at 10% | Scale 1.10 |
| Newsletter fields | full pill | 24px × 16px | white, 2px `#FFD6C0` border, navy text | Focus border `#FF6B35` |

Nav link hover is an underline, not a fill: 3px `#FF6B35`, 2px radius, grows from the left.

## Card styles

| Card | Radius | Padding | Shadow | Background | Hover |
| --- | --- | --- | --- | --- | --- |
| Show card | 24px | media 192px / 208px tall | `shadow-lg` | `#FFF5EE`, `#F0F5FF`, or `#F0FFF5` | Lift 8px and scale 1.03 |
| Learn tile | 24px | 20px / 24px | `shadow-md` | Soft vertical washes | Scale 1.05 |
| Parent feature | 24px | 24px | `shadow-md` | `#FFF8F0` | `shadow-lg` |
| Testimonial | 16px | 20px | none | `#F8F5FF` or `#FFF5EE` | None |
| Character | circle, 112px / 128px | image cover | `shadow-xl` | Per-character gradient | Scale 1.10 |
| App phone | 40px outer, 32px screen | 12px frame | `shadow-2xl` | Orange-to-yellow frame, white screen | Frame tilts back to flat |
| Legal article | 24px | 24px / 40px | `shadow-lg` | white | None |
| Legal modal | 16px | 24px | `shadow-2xl` | white on a 70% black scrim | None |
| Logo tile | 16px (12px in the footer) | image fills 40–48px | `shadow-lg` on the nav tile | `#FF6B35` → `#FFD23F` | Scale 1.10 |

Show, learn, and parent cards sit in a `gap-6` grid (24px). Show cards use three columns from `lg` up.

## Spacing

The site uses Tailwind’s 4px base. Repeated steps:

| Token | Pixels | Typical use |
| --- | --- | --- |
| 1 | 4 | Tight stacks inside mock rows |
| 2 | 8 | Icon gaps, footer link stacks |
| 3 | 12 | Form row gap, badge gap |
| 4 | 16 | Page inset on small screens, heading margin |
| 5 | 20 | Tree row inset, card padding |
| 6 | 24 | Grid gap, section horizontal inset from `sm` |
| 8 | 32 | Nav gap, hero paragraph margin, footer columns |
| 10 | 40 | Footer block margin |
| 12 | 48 | Space under section titles |
| 16 / 20 | 64 / 80 | Section vertical padding (`py-16`, `sm:py-20`) |

Content width is `max-w-7xl` (80rem) with `px-4 sm:px-6 lg:px-8`. Legal pages use `max-w-4xl`. The newsletter column is `max-w-3xl`, the form `max-w-lg`.

## Icons and illustrations

- UI icons are inline SVGs: 2px stroke, round caps and joins, usually white. Sizes are 18px (social), 20px (Kid-Safe / No Ads), 24px (parent tiles), and 28px (menu). Store marks are filled paths, 32px in the hero and 28px in the download section.
- Learning topics and the phone mock use emoji at `text-4xl` / `text-5xl` and `text-xl`.
- Characters are wide painted PNGs (668×374) cropped into gradient circles. The hero mascot sits in an organic blob (`border-radius` about 42% 58% 70% 30%) that slowly changes shape and floats.
- Clouds drift across the hero at 60% and 50% opacity. Three trees sway from their bases along the bottom. A white wave separates the hero from the first white section.
- Motion is gentle and constant: float, bounce-in, slide-up, cloud drift, tree sway, and scroll reveals that rise 30px.

## Layout tone

The page is a bright preschool landing page: cream and peach fields, navy type, and orange as the action color. Almost every container is a pill or a 16–24px rounded card. Sections alternate white, cream, and one deep-navy download band. Copy is short, friendly, and aimed at parents (safety, no ads, ages 1–7) while the pictures and motion are aimed at kids. Legal pages keep the same cream ground and navy headings, with a quieter gray article.

## Image assets

Paths are relative to `kiddovate-website/`. Sizes are file bytes.

| File | Dimensions | Bytes | Used for |
| --- | --- | --- | --- |
| `public/app_logo.png` | 800 × 800 | 87,868 | Favicon and Open Graph image |
| `public/image/app_logo.png` | 500 × 500 | 29,779 | Nav, phone mock, footer, legal header |
| `public/image/logo.png` | 800 × 800 | 87,868 | Not referenced |
| `public/image/elephant.png` | 668 × 374 | 187,763 | Hero mascot and Kiddo |
| `public/image/ጩሎ.png` | 668 × 374 | 170,419 | Kune |
| `public/image/Bobi.png` | 668 × 374 | 126,651 | Bobi |
| `public/image/Jojo.png` | 668 × 374 | 127,944 | Jojo |
| `public/image/Lulu.png` | 668 × 374 | 152,412 | Lulu |
| `public/image/ፍቅር.png` | 668 × 374 | 157,905 | Fikir |
| `public/image/ሉላ.png` | 668 × 374 | 174,597 | Lula |
| `public/image/sing-icon.png` | 1623 × 1058 | 1,233,174 | Sing & Dance card photo |
| `public/image/birthday.png` | 1920 × 1080 | 3,398,958 | Birthday Songs card photo |
| `public/image/animal_friends.png` | 1920 × 1080 | 4,264,425 | Animal Friends card photo |
| `public/image/cloud1.png` | 176 × 180 | 14,535 | Left hero cloud |
| `public/image/cloud2.png` | 176 × 180 | 14,535 | Right hero cloud |
| `public/image/cloud3.png` | 176 × 180 | 14,535 | Not referenced |
| `public/image/cloud4.png` | 176 × 180 | 14,535 | Not referenced |
| `public/image/tree.png` | 176 × 180 | 9,880 | Three hero trees |

`cloud1.png` through `cloud4.png` share the same dimensions and byte size. `public/app_logo.png` and `public/image/logo.png` also match each other (800 × 800, 87,868 bytes).
