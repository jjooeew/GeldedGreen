# Review Notes

- Removed AI Studio scaffolding and unused server/API dependencies so this remains a static Vite app for Vercel.
- Centralized category and product data in `src/data.ts`; exported product objects now include `id`, `name`, `category`, `price`, `image`, `description`, `features`, and `status`.
- Switched local category images to Vite imports so production builds fingerprint and serve them correctly.
- Simplified the shop page to the approved prototype scope: product browsing and an add-to-bag button only. Cart, enquiry, and checkout behavior can be added later.
- Updated basic SEO metadata, favicon placeholder, README deployment instructions, keyboard focus states, image alt text, and low-contrast text where practical.
