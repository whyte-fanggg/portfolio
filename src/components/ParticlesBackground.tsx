import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { Engine } from "tsparticles-engine"

function ParticlesBackground() {
  const [particleColor, setParticleColor] = useState("#ffffff")

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      const theme = root.getAttribute("data-theme")
      if (theme === "dark") {
        setParticleColor("#ffffff")
      } else {
        setParticleColor("#888888")
      }
    })

    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })

    const initialTheme = root.getAttribute("data-theme")
    if (initialTheme === "dark") {
      setParticleColor("#ffffff")
    } else {
      setParticleColor("#888888")
    }

    return () => observer.disconnect()
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: particleColor },
          links: { color: particleColor, distance: 100, enable: true, opacity: 0.4, width: 1 },
          move: { enable: true, outModes: { default: "out" }, speed: 0.5 },
          number: { value: 50, density: { enable: true, area: 800 } },
          opacity: { value: 0.25 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: 0,
      }}
    />
  )
}

export default ParticlesBackground
