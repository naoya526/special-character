# GlowingText Component

マウスカーソルの位置に応じて光るアニメーション効果を持つテキストコンポーネントです。

## 特徴

- 🎨 カスタマイズ可能なグラデーション色
- ⚡ 滑らかなアニメーション
- 🔧 Tailwind CSS / ピュア CSS 両対応
- 📱 TypeScript完全対応
- 🎛️ 豊富な設定オプション

## インストール

このコンポーネントを他のプロジェクトにコピーしてください：

```bash
# コンポーネントファイルをコピー
cp GlowingText.tsx /path/to/your/project/components/
```

## 基本的な使用方法

```tsx
import GlowingText from './components/GlowingText';

function App() {
  return (
    <div>
      <GlowingText>Hello World</GlowingText>
    </div>
  );
}
```

## Tailwind CSS設定

Tailwind CSSを使用する場合は、`tailwind.config.js`に以下を追加してください：

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 3s infinite ease-in-out',
      },
      keyframes: {
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0',
            opacity: '0.8'
          },
          '50%': {
            backgroundPosition: '0% 0',
            opacity: '1'
          },
          '100%': { 
            backgroundPosition: '200% 0',
            opacity: '0.8'
          },
        },
      },
      backgroundSize: {
        '200%': '200% 100%',
      },
    },
  },
};
```

## Props

| Props | 型 | デフォルト | 説明 |
|-------|------|------------|------|
| `children` | `React.ReactNode` | - | 表示するテキスト（必須） |
| `maxDistance` | `number` | `150` | マウスとの最大検知距離（px） |
| `animationDuration` | `number` | `3000` | アニメーション継続時間（ms） |
| `transitionDuration` | `number` | `600` | トランジション継続時間（ms） |
| `defaultColor` | `string` | `'#ffffff'` | 通常時のテキスト色 |
| `gradientColors` | `string[]` | `['#22d3ee', '#ec4899', '#fde047']` | グラデーションの色配列 |
| `fontSize` | `string` | `'3.75rem'` | フォントサイズ |
| `fontWeight` | `string` | `'bold'` | フォントの太さ |
| `className` | `string` | `''` | カスタムクラス名 |
| `style` | `CSSProperties` | `{}` | カスタムスタイル |
| `useTailwind` | `boolean` | `true` | Tailwind CSSを使用するか |

## プリセット

便利なプリセット設定が利用できます：

```tsx
import GlowingText, { GlowingTextPresets } from './components/GlowingText';

// ファイア効果
<GlowingText {...GlowingTextPresets.fire}>Fire Text</GlowingText>

// オーシャン効果
<GlowingText {...GlowingTextPresets.ocean}>Ocean Text</GlowingText>

// レインボー効果
<GlowingText {...GlowingTextPresets.rainbow}>Rainbow Text</GlowingText>

// ネオン効果
<GlowingText {...GlowingTextPresets.neon}>Neon Text</GlowingText>
```

## 使用例

### Tailwind CSS版（推奨）

```tsx
<GlowingText 
  maxDistance={200}
  animationDuration={2500}
>
  Awesome Text
</GlowingText>
```

### ピュア CSS版

```tsx
<GlowingText 
  useTailwind={false}
  gradientColors={['#ff0000', '#00ff00', '#0000ff']}
  fontSize="4rem"
  defaultColor="#333333"
>
  Pure CSS Text
</GlowingText>
```

### カスタム設定

```tsx
<GlowingText 
  maxDistance={300}
  gradientColors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
  animationDuration={4000}
  transitionDuration={800}
  fontSize="5rem"
  className="custom-class"
  style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
>
  Custom Glowing Text
</GlowingText>
```

## 移植時の注意点

1. **Tailwind CSS**: `useTailwind={false}`を設定するとピュア CSSモードになります
2. **依存関係**: React 18+ が必要です
3. **パフォーマンス**: `maxDistance`を大きくしすぎるとパフォーマンスに影響する場合があります
4. **ブラウザ対応**: `background-clip: text`を使用しているため、古いブラウザでは対応していない場合があります

## ライセンス

このコンポーネントは自由に使用・改変できます。
