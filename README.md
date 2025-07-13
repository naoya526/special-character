# GlowingText Component Project

This is a [Next.js](https://nextjs.org) project showcasing the **GlowingText** component - an interactive text component that creates beautiful glowing effects based on mouse proximity.

## ✨ Features

- 🎨 **Interactive Glow Effect**: Text lights up with gradient colors when mouse cursor approaches
- 🌈 **Multiple Presets**: 8 built-in color presets (Default, Fire, Ocean, Rainbow, Neon, Sunset, Forest, Aurora)
- 🎛️ **Highly Customizable**: Adjustable colors, distances, transition durations, and more
- 📱 **Responsive Design**: Works seamlessly across different screen sizes
- ⚡ **Smooth Animations**: Fluid transitions with CSS cubic-bezier timing
- 🔧 **TypeScript Support**: Full type safety and IntelliSense support

## 🎯 Demo

The component features:
- **Distance-based opacity**: Glow intensity changes based on cursor proximity
- **Gradient colors**: Beautiful color transitions for each preset
- **Smooth transitions**: No jarring animations, just smooth color changes
- **Customizable parameters**: Distance thresholds, colors, sizes, and timing

## 🎨 Available Presets

| Preset | Colors | Description |
|--------|---------|-------------|
| **Default** | Cyan → Pink → Yellow | Balanced, versatile color scheme |
| **Fire** | Red → Orange → Bright Yellow | Warm, energetic flame colors |
| **Ocean** | Deep Blue → Blue → Light Blue | Cool, calming ocean depths |
| **Rainbow** | Pastel Red → Orange → Yellow → Green → Blue → Purple | Soft, pastel rainbow spectrum |
| **Neon** | Purple → Cyan → Green | Electric, vibrant neon colors |
| **Sunset** | Gold → Orange → Red | Warm sunset gradient |
| **Forest** | Dark Green → Green → Lime | Natural, earthy forest tones |
| **Aurora** | Purple → Violet → Cyan → Green | Mystical aurora borealis |

## 🚀 Usage Example

```tsx
import GlowingText from '@/components/GlowingText';

// Basic usage
<GlowingText>Hello World</GlowingText>

// Custom colors
<GlowingText 
  gradientColors={['#ff0000', '#00ff00', '#0000ff']}
  maxDistance={200}
  fontSize="3rem"
>
  Custom Glow
</GlowingText>

// Fire preset colors
<GlowingText 
  gradientColors={['#dc2626', '#ea580c', '#facc15']}
  maxDistance={150}
>
  Fire Effect
</GlowingText>
```

## 🎛️ Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Text content to display |
| `gradientColors` | `readonly string[]` | `['#06b6d4', '#ec4899', '#eab308']` | Array of gradient colors |
| `maxDistance` | `number` | `150` | Maximum detection distance (px) |
| `fontSize` | `string` | `'3.75rem'` | Font size |
| `fontWeight` | `string` | `'bold'` | Font weight |
| `transitionDuration` | `number` | `600` | Transition duration (ms) |
| `defaultColor` | `string` | `'#ffffff'` | Default text color |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `CSSProperties` | `{}` | Inline styles |


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🏗️ Project Structure

```
├── app/
│   ├── page.tsx          # Main demo page with all presets
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── GlowingText.tsx   # Main component
│   ├── GlowingText.d.ts  # TypeScript definitions
│   ├── README.md         # Component documentation
│   └── package.json      # Component package info
└── README.md             # This file
```

## 🎯 Component Features

### Mouse Proximity Detection
The component uses mouse event listeners to calculate the distance between the cursor and the text element, creating a smooth proximity-based glow effect.

### Gradient Generation
Dynamic CSS gradients are generated based on the provided color array, allowing for unlimited color combinations.

### Performance Optimized
- Uses `useRef` for direct DOM access
- Efficient distance calculations
- Smooth CSS transitions with optimized timing functions

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📚 Learn More

### About the GlowingText Component

The GlowingText component demonstrates advanced React patterns including:
- **Custom Hooks**: Mouse position tracking with useEffect
- **Performance Optimization**: Efficient event handling and cleanup
- **CSS-in-JS**: Dynamic style generation with TypeScript
- **Responsive Design**: Adaptive layouts with Tailwind CSS

### Next.js Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎮 Live Demo

Visit the deployed version to see the GlowingText component in action with all available presets and interactive examples.


## 📄 License

This project is open source and available under the [MIT License](LICENSE).
