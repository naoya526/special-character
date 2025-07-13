import GlowingText from '@/components/GlowingText';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      {/* ヘッダー */}
      <div className="text-center mb-12">
        <GlowingText fontSize="4rem" className="mb-4">
          I'm Naoya Kumakura
        </GlowingText>
        <p className="text-gray-400 text-xl">
          GlowingText Component Exhibition
        </p>
      </div>

      {/* プリセット例のグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* デフォルトプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">DEFAULT PRESET</h3>
          <GlowingText 
            gradientColors={['#06b6d4', '#ec4899', '#eab308']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Default
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Cyan → Pink → Yellow
          </p>
        </div>

        {/* ファイアプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">FIRE PRESET</h3>
          <GlowingText 
            gradientColors={['#dc2626', '#ea580c', '#facc15']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Fire
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Red → Orange → Bright Yellow
          </p>
        </div>

        {/* オーシャンプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">OCEAN PRESET</h3>
          <GlowingText 
            gradientColors={['#1e3a8a', '#3b82f6', '#93c5fd']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Ocean
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Deep Blue → Blue → Light Blue
          </p>
        </div>

        {/* レインボープリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">RAINBOW PRESET</h3>
          <GlowingText 
            gradientColors={['#ff5555', '#ffb366', '#ffe066', '#99ff99', '#99ccff', '#8b77ff']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Rainbow
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Pastel Red → Orange → Yellow → Green → Blue → Purple
          </p>
        </div>

        {/* ネオンプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">NEON PRESET</h3>
          <GlowingText 
            gradientColors={['#a855f7', '#06b6d4', '#10b981']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Neon
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Purple → Cyan → Green
          </p>
        </div>

        {/* カスタム例 */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">CUSTOM</h3>
          <GlowingText 
            gradientColors={['#9333ea', '#ec4899', '#f59e0b', '#10b981']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Custom
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Purple → Pink → Orange → Green
          </p>
        </div>

        {/* サンセットプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">SUNSET PRESET</h3>
          <GlowingText 
            gradientColors={['#f59e0b', '#f97316', '#dc2626']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Sunset
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Gold → Orange → Red
          </p>
        </div>

        {/* フォレストプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">FOREST PRESET</h3>
          <GlowingText 
            gradientColors={['#16a34a', '#22c55e', '#84cc16']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Forest
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Dark Green → Green → Lime
          </p>
        </div>

        {/* オーロラプリセット */}
        <div className="bg-gray-900 rounded-lg p-6 text-center">
          <h3 className="text-gray-300 text-sm mb-4">AURORA PRESET</h3>
          <GlowingText 
            gradientColors={['#8b5cf6', '#a855f7', '#06b6d4', '#10b981']}
            fontSize="2.5rem"
            maxDistance={120}
          >
            Aurora
          </GlowingText>
          <p className="text-gray-500 text-xs mt-4">
            Purple → Violet → Cyan → Green
          </p>
        </div>
      </div>

      {/* フッター - インタラクション例 */}
      <div className="mt-16 text-center">
        <div className="mb-6">
          <h2 className="text-gray-300 text-lg mb-4">インタラクション例</h2>
        </div>
        
        {/* 大きなテキスト例 */}
        <div className="mb-8">
          <GlowingText 
            gradientColors={['#dc2626', '#ea580c', '#facc15']}
            fontSize="3rem"
            maxDistance={200}
            transitionDuration={800}
          >
            Welcome to my portfolio!
          </GlowingText>
        </div>

        {/* 複数行テキスト例 */}
        <div className="space-y-4">
          <GlowingText 
            gradientColors={['#1e3a8a', '#3b82f6', '#93c5fd']}
            fontSize="1.5rem"
            maxDistance={150}
          >
            マウスを近づけてみてください
          </GlowingText>
          
          <GlowingText 
            gradientColors={['#a855f7', '#06b6d4', '#10b981']}
            fontSize="1.2rem"
            maxDistance={100}
          >
            距離に応じて光の強さが変わります
          </GlowingText>
        </div>

        {/* 使用方法の説明 */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-gray-300 text-lg mb-4">使用方法</h3>
            <div className="text-left space-y-2 text-sm text-gray-400">
              <p>• マウスカーソルをテキストに近づけると光ります</p>
              <p>• 距離に応じて光の強さが変化します</p>
              <p>• 各プリセットで異なるグラデーション色</p>
              <p>• 滑らかなトランジション効果付き</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
