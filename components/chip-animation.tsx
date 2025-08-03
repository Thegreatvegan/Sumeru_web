"use client"

import { useEffect, useRef } from "react"

export default function ChipAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Circuit board lines
    class Line {
      x: number
      y: number
      length: number
      angle: number
      width: number
      speed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.length = Math.random() * 100 + 50
        this.angle = Math.floor(Math.random() * 4) * (Math.PI / 2)
        this.width = Math.random() * 1 + 0.5
        this.speed = Math.random() * 0.5 + 0.1
        this.color = `rgba(100, 200, 255, ${Math.random() * 0.2 + 0.1})`
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x + Math.cos(this.angle) * this.length, this.y + Math.sin(this.angle) * this.length)
        ctx.strokeStyle = this.color
        ctx.lineWidth = this.width
        ctx.stroke()
      }

      update() {
        this.y += this.speed

        if (this.y > canvas.height) {
          this.y = -this.length
          this.x = Math.random() * canvas.width
        }
      }
    }

    // Create lines
    const lines: Line[] = []
    for (let i = 0; i < 100; i++) {
      lines.push(new Line())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        line.draw()
        line.update()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
