export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
        {/* หัวข้อ */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
          สวัสดีชาวโลก! 👋
        </h1>
        
        <p className="text-lg text-center text-gray-600 mb-8">
          นี่คือเว็บแรกของฉันที่ deploy ด้วย Vercel 🚀
        </p>

        {/* การ์ดแสดงความสามารถ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-indigo-50 p-4 rounded-xl text-center hover:scale-105 transition">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-indigo-800">เร็วทันใจ</h3>
            <p className="text-sm text-gray-500">Deploy อัตโนมัติ</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl text-center hover:scale-105 transition">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-purple-800">สวยงาม</h3>
            <p className="text-sm text-gray-500">TailwindCSS</p>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-xl text-center hover:scale-105 transition">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-pink-800">มืออาชีพ</h3>
            <p className="text-sm text-gray-500">Vercel</p>
          </div>
        </div>

        {/* ปุ่ม */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://github.com/Aa-ok99/my-nextjs-app" 
            target="_blank"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition text-center"
          >
            ดูโค้ดบน GitHub 📁
          </a>
          
          <a 
            href="https://vercel.com" 
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-center"
          >
            เรียนรู้ Vercel 📚
          </a>
        </div>

        {/* ฟุตเตอร์ */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t pt-4">
          <p>ลองแก้ไฟล์นี้ดู! แล้ว git push</p>
          <p className="text-xs mt-1">🔄 Vercel Deploy อัตโนมัติ</p>
        </div>
      </div>
    </main>
  )
}
