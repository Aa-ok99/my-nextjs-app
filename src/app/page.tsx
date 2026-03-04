"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* อนิเมชั่นแสงตามเมาส์ */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`
        }}
      />
      
      {/* พื้นหลังกริดเคลื่อนไหว */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" />
      
      {/* เนื้อหาหลัก */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl animate-in fade-in zoom-in duration-1000">
          
          {/* Badge ใหม่ */}
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm border border-purple-500/30 animate-bounce">
              🚀 อัพเกรดเป็น 2026 แล้ว!
            </span>
          </div>

          {/* หัวข้อ + เอฟเฟค */}
          <div className="text-center mb-8 group">
            <h1 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient-x">
              สวัสดี! 👋
            </h1>
            <div className="h-1 w-0 group-hover:w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000" />
          </div>

          <p className="text-xl text-center text-gray-300 mb-12 animate-pulse">
            เว็บนี้โหลด... "ช้าไป10ปี" แต่ตอนนี้แรงเกินร้อย! ⚡
          </p>

          {/* การ์ดแบบไดนามิก */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { emoji: "⚡", title: "แรงขั้นเทพ", desc: "เร็วจนเมาส์ไม่ทัน", color: "from-purple-500/20 to-purple-500/5", delay: 0 },
              { emoji: "🎨", title: "สีสันจัดเต็ม", desc: "ย้อนยุค10ปี แต่เท่!", color: "from-pink-500/20 to-pink-500/5", delay: 200 },
              { emoji: "🚀", title: "อัพเดท2026", desc: "ทันสมัยที่สุดในห้อง", color: "from-red-500/20 to-red-500/5", delay: 400 }
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:scale-105 hover:border-white/30 transition-all duration-300 animate-in slide-in-from-bottom-4`}
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${item.delay}ms` }}>{item.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ปุ่ม + อนิเมชั่น */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/Aa-ok99/my-nextjs-app"
              target="_blank"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] animate-in slide-in-from-left"
            >
              <span className="relative z-10">ดูโค้ดบน GitHub 📁</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            
            <a
              href="https://vercel.com"
              target="_blank"
              className="group relative px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 animate-in slide-in-from-right"
            >
              เรียน Vercel 📚
            </a>
          </div>

          {/* ฟุตเตอร์แบบมีชีวิต */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Deploy อัตโนมัติจาก git push</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-xs text-gray-600 mt-4 animate-pulse">
              *ความช้าลดลง 99.9% หลังอัพเกรด
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
