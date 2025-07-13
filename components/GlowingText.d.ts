import { CSSProperties, ReactNode } from 'react';

export interface GlowingTextProps {
  children: ReactNode;
  /** マウスとの最大検知距離 (px) */
  maxDistance?: number;
  /** トランジション継続時間 (ms) */
  transitionDuration?: number;
  /** 通常時のテキスト色 */
  defaultColor?: string;
  /** グラデーションの色配列 */
  gradientColors?: readonly string[];
  /** フォントサイズ */
  fontSize?: string;
  /** フォントの太さ */
  fontWeight?: string;
  /** カスタムクラス名 */
  className?: string;
  /** カスタムスタイル */
  style?: CSSProperties;
  /** Tailwindを使用するかどうか */
  useTailwind?: boolean;
}

export interface GlowingTextPreset {
  gradientColors: readonly string[];
}

export type GlowingTextPresetName = 'default' | 'fire' | 'ocean' | 'rainbow' | 'neon' | 'sunset' | 'forest' | 'aurora';

export declare const GlowingTextPresets: Record<GlowingTextPresetName, GlowingTextPreset>;

declare const GlowingText: React.FC<GlowingTextProps>;

export default GlowingText;
