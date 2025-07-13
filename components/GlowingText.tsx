'use client';

import React, { useRef, useEffect, useState, CSSProperties } from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
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

// プリセット設定
export const GlowingTextPresets = {
  default: {
    gradientColors: ['#06b6d4', '#ec4899', '#eab308'], // シアン → ピンク → イエロー
  },
  fire: {
    gradientColors: ['#dc2626', '#ea580c', '#facc15'], // 赤 → オレンジ → 明るい黄色
  },
  ocean: {
    gradientColors: ['#1e3a8a', '#3b82f6', '#93c5fd'], // 濃い青 → 青 → 薄い青
  },
  rainbow: {
    gradientColors: ['#ff9999', '#ffb366', '#ffe066', '#99ff99', '#99ccff', '#cc99ff'], // パステル虹色
  },
  neon: {
    gradientColors: ['#a855f7', '#06b6d4', '#10b981'], // 紫 → シアン → 緑
  },
  sunset: {
    gradientColors: ['#f59e0b', '#f97316', '#dc2626'], // 金 → オレンジ → 赤
  },
  forest: {
    gradientColors: ['#16a34a', '#22c55e', '#84cc16'], // 濃い緑 → 緑 → ライム
  },
  aurora: {
    gradientColors: ['#8b5cf6', '#a855f7', '#06b6d4', '#10b981'], // 紫 → 紫 → シアン → 緑
  },
} as const;

const GlowingText: React.FC<GlowingTextProps> = ({ 
  children,
  maxDistance = 150,
  transitionDuration = 600,
  defaultColor = '#ffffff',
  gradientColors = ['#06b6d4', '#ec4899', '#eab308'], // defaultプリセットと同じ
  fontSize = '3.75rem', // text-6xl equivalent
  fontWeight = 'bold',
  className = '',
  style = {},
  useTailwind = true
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isClose, setIsClose] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const calculatedOpacity = Math.max(0, 1 - normalizedDistance);
      
      setIsClose(distance < maxDistance);
      setOpacity(calculatedOpacity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [maxDistance]);

  // グラデーション文字列を生成
  const gradientString = `linear-gradient(90deg, ${gradientColors.join(', ')})`;

  // スタイルを構築
  const combinedStyle: CSSProperties = {
    fontSize,
    fontWeight,
    transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    opacity: isClose ? opacity : 1,
    filter: isClose ? `brightness(${0.8 + opacity * 0.4})` : 'brightness(1)',
    // カスタムグラデーションを静的に適用（アニメーションなし）
    ...(isClose ? {
      background: gradientString,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    } : {
      color: defaultColor,
    }),
    ...style,
  };

  // Tailwindクラス名を構築（カスタムグラデーション用にシンプルに）
  const tailwindClasses = [
    useTailwind ? 'bg-200%' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <span
      ref={textRef}
      className={tailwindClasses}
      style={combinedStyle}
    >
      {children}
    </span>
  );
};

export default GlowingText;

// 使用例:
// 
// Tailwindあり（デフォルト）:
// <GlowingText>Hello World</GlowingText>
//
// ピュアCSS版:
// <GlowingText useTailwind={false}>Hello World</GlowingText>
//
// カスタム設定:
// <GlowingText 
//   maxDistance={200}
//   gradientColors={['#ff0000', '#00ff00', '#0000ff']}
//   animationDuration={2000}
// >
//   Custom Text
// </GlowingText>
//
// プリセット使用:
// <GlowingText {...GlowingTextPresets.fire}>Fire Effect</GlowingText>
