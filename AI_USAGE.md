# AI usage log

## Week 1
### Tool(s):
- Gemini

### What I asked for:
- I asked for guide me to answer the reflection question

### What I kept:
- None

### What I changed:
- None

### What I rejected:
- None

### One thing the AI got wrong and how I fixed it:
- None

## Week 2
### Tool(s):
- Antigravity IDE / Gemini 3.8 Flash

### What I asked for:
- Complete Lab 2 Part B (B1 to B6):
  1. Fix and structure `src/data/vendors.js` with 3 vendors and at least 3 categories for Kek Tapak Kuda.
  2. Implement/verify props passing for VendorCard, MenuItemCard, Header.
  3. Render lists with `.map()` and unique keys, with empty state handling in MenuList.
  4. Manage state and events in App (selected vendor and cart count without mutating state).
  5. Implement Personal Feature (Digit 1: Filter by category) showing category buttons via `.map()` that log on click.
  6. Prepare Git commits, week-2 tag, and repository update.

### What I kept:
- Component architecture with state in `App.jsx`, props flowing down, and callbacks bubbling up (`onSelect`, `onAdd`).
- CategoryFilter buttons mapped dynamically from the selected vendor's menu data with unique keys.
- Immutable state update pattern `setCart((prev) => [...prev, item])`.

### What I changed:
- Added a 3rd category ('Drinks') to 'Kek Tapak Kuda' to satisfy the minimum 3 categories requirement.
- Replaced the duplicate `kafe-faruq` vendor entry in `vendors.js` with `kafe-ali` (Kafe Mahallah Ali) with distinct IDs to avoid duplicate key issues.
- Added responsive styling for `.category-filter` and `.category-btn` in `index.css`.

### What I rejected:
- Rejected hardcoding categories; dynamically derived categories using `new Set()` from active vendor menu items.

### One thing the AI got wrong and how I fixed it:
- The initial vendors list had duplicate vendor IDs (`kafe-faruq` listed twice with identical menu item IDs), which would cause React duplicate key warnings in the console. Fixed it by replacing the second one with `kafe-ali` and distinct menu item IDs (`ali-1` to `ali-5`).