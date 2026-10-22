# NAXENT — Website Header & Footer Design System

> **Purpose:** Professional design and implementation specification for the Naxent website header and footer.
>
> **Reference:** Current Naxent website header/footer visual design supplied for this documentation.
>
> **Scope:** Header, desktop navigation, CTA, responsive mobile navigation, footer, footer navigation columns, contact information, social links, legal links, typography, colors, spacing, responsive behavior, accessibility, and implementation rules.

---

## 1. Design Direction

### 1.1 Visual Style

The Naxent website uses a:

- Clean and professional fintech visual language
- White pill-shaped header
- Soft light-blue page/header background
- Dark navy footer
- Strong blue primary action buttons
- Minimal borders and shadows
- Spacious desktop layout
- Clear navigation hierarchy
- High readability and strong contrast
- Responsive behavior for laptop, tablet, and mobile screens

### 1.2 Design Principle

The header and footer should feel like two complementary parts of the same system:

**Header**
- Light
- Clean
- White
- Navigation-focused
- Primary CTA highlighted in blue

**Footer**
- Dark
- Structured
- Information-focused
- White/light-blue typography
- Multiple navigation groups
- Contact information clearly separated

---

# 2. Global Design Tokens

## 2.1 Font

Recommended primary font:

```css
font-family: "Plus Jakarta Sans", sans-serif;
```

Google Fonts:

```css
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");
```

### Font Weights

| Weight | Usage |
|---|---|
| 400 | Body text |
| 500 | Navigation and secondary text |
| 600 | Buttons and important links |
| 700 | Headings and section titles |
| 800 | Logo/strong branding |

---

## 2.2 Color Palette

| Token | Value | Usage |
|---|---|---|
| `--navy` | `#0A2A6E` | Logo, footer background, strong text |
| `--blue` | `#1446A0` | Primary CTA/button |
| `--link-blue` | `#1A73E8` | Active navigation and links |
| `--text` | `#1A2744` | Main navigation/body text |
| `--page-bg` | `#EEF2F9` | Header/page background |
| `--white` | `#FFFFFF` | Header, button text, footer accents |
| `--border` | `#E7EBF2` | Borders and separators |
| `--footer-text` | `rgba(255,255,255,0.70)` | Footer secondary text |
| `--footer-muted` | `rgba(255,255,255,0.50)` | Footer legal/copyright text |
| `--footer-line` | `rgba(255,255,255,0.12)` | Footer divider |

---

## 2.3 Radius

```css
--radius-pill: 100px;
--radius-header-mobile: 20px;
--radius-button: 100px;
--radius-card: 16px;
--radius-circle: 50%;
```

---

## 2.4 Shadows

### Header

```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
```

### Mobile Navigation

```css
box-shadow: 0 16px 40px rgba(10, 42, 110, 0.12);
```

---

# 3. Header Design

## 3.1 Header Structure

The header consists of four primary areas:

```text
Header Wrapper
│
└── Header Container
    │
    ├── Brand / Logo
    │
    ├── Main Navigation
    │   ├── Home
    │   ├── Products
    │   ├── About Us
    │   ├── Services
    │   ├── Investors
    │   └── Contact Us
    │
    └── Primary CTA
        └── Let's talk →
```

---

## 3.2 Header Wrapper

### Desktop

```css
width: 100%;
padding: 20px;
background: #EEF2F9;
display: flex;
justify-content: center;
```

The header should have enough surrounding space so the white navigation pill is visually separated from the page edges.

---

## 3.3 Header Container

```css
width: 100%;
max-width: 1280px;
min-height: 70px;

display: flex;
align-items: center;
justify-content: space-between;

padding: 10px 18px 10px 10px;

background: #FFFFFF;
border-radius: 100px;

box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

position: relative;
z-index: 10;
```

### Visual Requirement

The desktop header must remain a **single white pill**.

Do not convert the desktop header into a rectangular navigation bar.

---

# 4. Logo Design

## 4.1 Logo Structure

```text
[ NAXENT ICON ] NAXENT
```

### Icon

```css
width: 38px;
height: 38px;
border-radius: 50%;
```

The supplied Naxent logo asset should be used whenever available.

### Brand Name

```css
font-size: 20px;
font-weight: 800;
letter-spacing: 3px;
color: #0A2A6E;
```

### Logo Layout

```css
display: flex;
align-items: center;
gap: 10px;
```

---

# 5. Main Navigation

## 5.1 Navigation Layout

```css
display: flex;
align-items: center;
gap: 26px;
```

Navigation items:

```text
Home
Products
About Us
Services
Investors
Contact Us
```

---

## 5.2 Navigation Typography

```css
font-size: 14px;
font-weight: 600;
color: #1A2744;
```

### Hover

```css
color: #1A73E8;
```

---

## 5.3 Active Navigation

The active page should use:

```css
color: #1A73E8;
```

with a small blue underline.

```css
.active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  height: 2px;
  background: #1A73E8;
}
```

The underline should remain subtle and should not make the navigation visually heavy.

---

# 6. Header Primary CTA

## 6.1 Button

Text:

```text
Let's talk →
```

### Style

```css
display: inline-flex;
align-items: center;
justify-content: center;
gap: 8px;

padding: 11px 20px;

background: #1446A0;
color: #FFFFFF;

border-radius: 100px;

font-size: 14px;
font-weight: 600;
```

### Hover

```css
background: #0A2A6E;
transform: translateY(-1px);
box-shadow: 0 8px 18px rgba(10, 42, 110, 0.18);
```

### Requirement

The CTA should remain visually stronger than ordinary navigation links.

---

# 7. Header Responsive Design

## 7.1 Laptop — 1024px to 1279px

```css
.header-container {
  max-width: 1100px;
}

.nav {
  gap: 20px;
}

.nav a {
  font-size: 13px;
}
```

---

## 7.2 Tablet — 768px to 1023px

```css
.header-container {
  border-radius: 28px;
  padding: 10px 14px;
}

.nav {
  gap: 14px;
}

.nav a {
  font-size: 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.logo-text {
  font-size: 16px;
}

.talk-btn {
  padding: 9px 15px;
  font-size: 12px;
}
```

---

# 8. Mobile Header

## 8.1 Mobile Breakpoint

```css
@media (max-width: 767px)
```

### Header

```css
.header-wrapper {
  padding: 12px;
}

.header-container {
  border-radius: 20px;
  padding: 10px 12px;
  flex-wrap: wrap;
}
```

---

## 8.2 Mobile Navigation

Desktop navigation and desktop CTA should be hidden:

```css
.nav,
.talk-btn {
  display: none;
}
```

Menu button:

```css
.menu-btn {
  display: block;
}
```

---

## 8.3 Mobile Menu

The mobile menu must remain **inside the header wrapper**.

It must not become a full-screen navigation.

```css
.nav.nav-open {
  width: 100%;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 12px;
  padding-bottom: 16px;

  background: #FFFFFF;
  border: 1px solid #E7EBF2;
  border-radius: 16px;

  box-shadow: 0 16px 40px rgba(10, 42, 110, 0.12);
}
```

### Important

- No backdrop blur
- No full-screen menu
- No unnecessary animation
- No heavy overlay
- Menu should remain clean and easy to read

---

# 9. Footer Design

## 9.1 Footer Structure

The footer follows the dark reverse style of the header.

```text
Footer
│
├── Brand
│   ├── Naxent logo
│   ├── Company description
│   └── Social icons
│
├── Company
│   ├── About Us
│   ├── Why Naxent
│   ├── Careers
│   ├── Newsroom
│   ├── Blog
│   └── Contact
│
├── Products
│   ├── Naxent Money
│   ├── Naxent Gold
│   ├── Naxent Pay
│   └── Naxent Shield
│
├── Services
│   ├── Strategy & Research
│   ├── Design & UX
│   ├── Technology
│   ├── Fintech Consulting
│   └── Managed Services
│
├── Resources
│   ├── Insights
│   ├── Documentation
│   ├── Help Center
│   ├── FAQs
│   └── Support
│
└── Contact
    ├── Get in Touch
    ├── Phone
    ├── Email
    └── Location
```

---

# 10. Footer Wrapper

```css
width: 100%;
background: #0A2A6E;
padding: 60px 20px 30px;
```

The footer should occupy the full browser width.

---

# 11. Footer Container

```css
width: 100%;
max-width: 1280px;
margin: 0 auto;
```

---

# 12. Footer Grid

Desktop layout:

```css
display: grid;
grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1.2fr;
gap: 40px;
```

The exact number of columns may be adjusted slightly depending on content width, but the visual hierarchy must remain:

**Brand → Navigation groups → Contact**

---

# 13. Footer Brand

## Logo

```text
[ N ] NAXENT
```

### Logo

```css
display: flex;
align-items: center;
gap: 8px;
```

Logo icon:

```css
width: 38px;
height: 38px;
border-radius: 50%;
background: #FFFFFF;
```

Brand text:

```css
font-size: 18px;
font-weight: 800;
letter-spacing: 2.5px;
color: #FFFFFF;
```

---

## Brand Description

Current visual message:

```text
Technology for a more inclusive
India.
```

Style:

```css
font-size: 14px;
line-height: 1.6;
color: rgba(255,255,255,0.70);
max-width: 280px;
```

---

# 14. Footer Social Icons

Social icons should be displayed in small circular containers.

```css
width: 40px;
height: 40px;
border-radius: 50%;

border: 1px solid rgba(255,255,255,0.12);
background: transparent;
```

### Hover

```css
background: #1446A0;
transform: translateY(-2px);
```

The icons should remain visually subtle and should not compete with the footer navigation.

---

# 15. Footer Navigation Groups

Groups:

```text
Company
Products
Services
Resources
```

### Heading

```css
font-size: 15px;
font-weight: 700;
color: #FFFFFF;
margin-bottom: 18px;
```

A small blue underline can be used below the group heading.

### Links

```css
display: block;
font-size: 14px;
font-weight: 500;
color: rgba(255,255,255,0.70);
margin-bottom: 12px;
```

### Hover

```css
color: #FFFFFF;
transform: translateX(3px);
```

---

# 16. Footer Contact Column

The contact area should be visually separated from the navigation groups with a vertical divider on desktop.

```css
border-left: 1px solid rgba(255,255,255,0.12);
padding-left: 36px;
```

Contact items:

```text
✉  Get in Touch
☎  +91XXXXXXXXXX
✉  hello@naxent.in
📍 Chennai, India
```

Icons should appear inside small blue circular containers.

---

# 17. Footer CTA

If a footer CTA is required:

```css
display: inline-flex;
align-items: center;
justify-content: center;

padding: 10px 20px;

background: #FFFFFF;
color: #0A2A6E;

border-radius: 100px;

font-size: 14px;
font-weight: 600;
```

---

# 18. Footer Divider

```css
height: 1px;
background: rgba(255,255,255,0.12);
margin: 40px 0 24px;
```

---

# 19. Footer Bottom Bar

Layout:

```css
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
flex-wrap: wrap;
```

### Copyright

```text
© 2025 Naxent Financial Technologies Pvt. Ltd. All rights reserved.
```

Style:

```css
font-size: 13px;
color: rgba(255,255,255,0.50);
```

### Legal Links

```text
Privacy Policy | Terms of Use | Grievance
```

```css
display: flex;
gap: 20px;
```

Link color:

```css
rgba(255,255,255,0.50)
```

Hover:

```css
color: #FFFFFF;
```

---

# 20. Footer Responsive Design

## Tablet — max-width 1023px

```css
.footer-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
}
```

The contact column should no longer depend on a narrow desktop divider.

---

## Mobile — max-width 767px

```css
.footer {
  padding: 40px 16px 24px;
}

.footer-grid {
  grid-template-columns: 1fr;
  gap: 32px;
}

.footer-bottom {
  align-items: flex-start;
  flex-direction: column;
}
```

### Mobile Requirements

- One column
- Comfortable spacing
- No horizontal overflow
- Links must be easy to tap
- Contact information must remain readable
- Footer should not become unnecessarily dense
- Legal links may wrap naturally
- Social icons remain visible
- No tiny text

---

# 21. Accessibility

The implementation should follow these rules:

### Navigation

- Use semantic `<nav>`
- Use real `<a>` / Next.js `<Link>` elements
- Clearly indicate the active page
- Provide visible keyboard focus

### Buttons

- Use `<button>` for menu controls
- Provide `aria-label` for icon-only buttons
- Menu open/close state should be exposed with `aria-expanded`

Example:

```jsx
<button
  type="button"
  aria-label="Open navigation menu"
  aria-expanded={mobileOpen}
>
```

### Images

Every meaningful image should have appropriate `alt` text.

Decorative images should use:

```jsx
alt=""
```

---

# 22. Responsive Breakpoints

Use the following project-wide breakpoints:

```css
/* Laptop */
@media (max-width: 1279px) {}

/* Tablet */
@media (max-width: 1023px) {}

/* Mobile */
@media (max-width: 767px) {}
```

Avoid adding unnecessary breakpoints unless the layout genuinely requires them.

---

# 23. Implementation File Structure

Recommended Next.js structure:

```text
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
└── components/
    ├── Header.jsx
    ├── Header.css
    ├── Footer.jsx
    └── Footer.css
```

Public assets:

```text
public/
└── nlogo.png
```

Design documentation:

```text
DESIGN.md
```

---

# 24. Component Responsibilities

## Header.jsx

Responsible for:

- Naxent logo
- Main navigation
- Active navigation state
- Mobile menu button
- Mobile navigation
- Let's Talk CTA
- Navigation accessibility

## Header.css

Responsible for:

- Header layout
- Pill shape
- Typography
- Colors
- Active underline
- CTA styling
- Responsive navigation
- Mobile menu

## Footer.jsx

Responsible for:

- Brand information
- Company links
- Product links
- Service links
- Resource links
- Contact information
- Social links
- Copyright
- Legal links

## Footer.css

Responsible for:

- Dark footer layout
- Grid
- Typography
- Dividers
- Social icon styling
- Contact column
- Responsive footer

---

# 25. Content Reference

## Header Navigation

```text
Home
Products
About Us
Services
Investors
Contact Us
```

## Header CTA

```text
Let's talk →
```

## Footer Brand

```text
NAXENT

Technology for a more inclusive
India.
```

## Footer Groups

### Company

```text
About Us
Why Naxent
Careers
Newsroom
Blog
Contact
```

### Products

```text
Naxent Money
Naxent Gold
Naxent Pay
Naxent Shield
```

### Services

```text
Strategy & Research
Design & UX
Technology
Fintech Consulting
Managed Services
```

### Resources

```text
Insights
Documentation
Help Center
FAQs
Support
```

### Contact

```text
Get in Touch
Phone
Email
Chennai, India
```

---

# 26. Design Rules

### DO

- Keep the header as a white pill on a soft light-blue background.
- Keep the footer dark navy.
- Use blue for primary actions.
- Keep navigation clean and readable.
- Maintain generous whitespace.
- Keep the footer structured and professional.
- Use consistent spacing and typography.
- Make every section responsive.
- Preserve the Naxent brand identity.

### DO NOT

- Do not use excessive gradients.
- Do not use heavy visual effects.
- Do not use unnecessary animations.
- Do not use backdrop-filter blur for the mobile overlay.
- Do not make the mobile menu full-screen.
- Do not overcrowd the header.
- Do not use very small mobile typography.
- Do not introduce unrelated colors without a design reason.
- Do not change the desktop pill-header concept.

---

# 27. Quality Checklist

Before considering the Header and Footer complete, verify:

- [ ] Naxent logo is correctly displayed
- [ ] Header is centered
- [ ] Header has the white pill shape
- [ ] Navigation spacing is consistent
- [ ] Active page has blue underline
- [ ] Let's Talk button is visible on desktop
- [ ] Mobile menu works correctly
- [ ] Mobile menu stays inside the header wrapper
- [ ] No horizontal scrolling occurs
- [ ] Footer uses dark navy background
- [ ] Footer columns align correctly
- [ ] Contact column is clearly separated
- [ ] Footer divider is visible
- [ ] Copyright is aligned correctly
- [ ] Legal links work
- [ ] Social icons are visible
- [ ] Tablet layout is checked
- [ ] Mobile layout is checked
- [ ] Keyboard focus is visible
- [ ] Images have appropriate alt text

---

# 28. Final Design Summary

The Naxent website header and footer should communicate:

**Clarity → Trust → Technology → Professionalism**

The final visual relationship is:

```text
LIGHT PAGE BACKGROUND
        ↓
┌──────────────────────────────────────────────┐
│        WHITE PILL NAXENT HEADER              │
│ Logo | Navigation                  Let's talk│
└──────────────────────────────────────────────┘
        ↓
              WEBSITE CONTENT
        ↓
┌──────────────────────────────────────────────┐
│                                              │
│              DARK NAVY FOOTER                │
│                                              │
│ Brand | Company | Products | Services | ...  │
│                                              │
│ ──────────────────────────────────────────── │
│ Copyright                    Privacy | Terms  │
└──────────────────────────────────────────────┘
```

**Design intent:** A simple, trustworthy, professional fintech interface that remains visually consistent from desktop to mobile.
