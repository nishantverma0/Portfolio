"use client";

import { motion } from "framer-motion";
import { ArrowDown, Bot, BriefcaseBusiness, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createRobot() {
  const group = new THREE.Group();
  group.name = "AI Guide Robot";

  const metal = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#dce9ff"),
    metalness: 0.35,
    roughness: 0.28,
    clearcoat: 0.65,
    clearcoatRoughness: 0.22
  });
  const dark = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#09111f"),
    metalness: 0.1,
    roughness: 0.5
  });
  const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color("#5be7ff") });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.58, 0.65, 10, 22), metal);
  body.position.y = -0.25;
  body.castShadow = true;
  group.add(body);

  const chest = new THREE.Mesh(new THREE.CircleGeometry(0.24, 32), glow);
  chest.position.set(0, -0.13, 0.6);
  group.add(chest);

  const head = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.66, 0.72, 6, 6, 6), metal);
  head.position.y = 0.63;
  head.castShadow = true;
  group.add(head);

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.05), dark);
  visor.position.set(0, 0.65, 0.39);
  group.add(visor);

  [-0.21, 0.21].forEach((x) => {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 18, 18), glow);
    eye.position.set(x, 0.67, 0.43);
    group.add(eye);
  });

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.32, 12), metal);
  antenna.position.set(0, 1.08, 0);
  group.add(antenna);

  const antennaOrb = new THREE.Mesh(new THREE.SphereGeometry(0.075, 20, 20), glow);
  antennaOrb.position.set(0, 1.26, 0);
  group.add(antennaOrb);

  [-0.78, 0.78].forEach((x, index) => {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.52, 8, 14), metal);
    arm.position.set(x, -0.2, 0);
    arm.rotation.z = (index === 0 ? 1 : -1) * 0.33;
    group.add(arm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 18), metal);
    hand.position.set(x * 1.05, -0.56, 0.02);
    group.add(hand);
  });

  [-0.24, 0.24].forEach((x) => {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.44, 8, 14), metal);
    leg.position.set(x, -0.92, 0);
    group.add(leg);
  });

  group.scale.setScalar(0.92);
  group.position.set(1.65, -0.18, 0.2);
  group.rotation.y = -0.38;

  return { group, glowMaterial: glow };
}

function createNeuralField() {
  const group = new THREE.Group();
  const particleCount = 130;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const colorA = new THREE.Color("#5be7ff");
  const colorB = new THREE.Color("#a78bfa");
  const colorC = new THREE.Color("#4ade80");

  for (let i = 0; i < particleCount; i += 1) {
    const radius = 1.6 + Math.random() * 2.8;
    const angle = Math.random() * Math.PI * 2;
    const height = (Math.random() - 0.5) * 3.2;

    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = height;
    positions[i * 3 + 2] = Math.sin(angle) * radius - 0.8;

    const color = i % 3 === 0 ? colorA : i % 3 === 1 ? colorB : colorC;
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const points = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false
    })
  );
  group.add(points);

  const linePositions: number[] = [];
  for (let i = 0; i < particleCount; i += 4) {
    for (let j = i + 1; j < Math.min(i + 12, particleCount); j += 3) {
      const ax = positions[i * 3];
      const ay = positions[i * 3 + 1];
      const az = positions[i * 3 + 2];
      const bx = positions[j * 3];
      const by = positions[j * 3 + 1];
      const bz = positions[j * 3 + 2];
      const distance = Math.hypot(ax - bx, ay - by, az - bz);

      if (distance < 1.35) {
        linePositions.push(ax, ay, az, bx, by, bz);
      }
    }
  }

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(linePositions, 3)
  );

  const lines = new THREE.LineSegments(
    lineGeometry,
    new THREE.LineBasicMaterial({
      color: "#7dd3fc",
      transparent: true,
      opacity: 0.17,
      blending: THREE.AdditiveBlending
    })
  );
  group.add(lines);

  return { group, points, lines };
}

export function AILabScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [guideReady, setGuideReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const reducedMotion = prefersReducedMotion();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.3, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.dataset.scene = "ai-lab";

    const ambient = new THREE.AmbientLight("#9cc9ff", 1.15);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight("#ffffff", 2.8);
    keyLight.position.set(3, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight("#a78bfa", 4.5, 7);
    rimLight.position.set(-2.4, 1.5, 2);
    scene.add(rimLight);

    const cyanLight = new THREE.PointLight("#5be7ff", 3.8, 6);
    cyanLight.position.set(1.8, -1, 2);
    scene.add(cyanLight);

    const neural = createNeuralField();
    neural.group.position.set(-0.5, 0.1, -0.5);
    neural.group.rotation.x = 0.14;
    scene.add(neural.group);

    const robot = createRobot();
    robot.group.position.y = reducedMotion ? -0.18 : -2.2;
    scene.add(robot.group);

    const haloGeometry = new THREE.TorusGeometry(1.08, 0.006, 8, 128);
    const halo = new THREE.Mesh(
      haloGeometry,
      new THREE.MeshBasicMaterial({
        color: "#5be7ff",
        transparent: true,
        opacity: 0.4
      })
    );
    halo.position.set(1.65, -0.18, 0.18);
    halo.rotation.x = Math.PI / 2.2;
    scene.add(halo);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();

      if (width < 768) {
        camera.position.z = 6.2;
        neural.group.scale.setScalar(0.88);
        robot.group.position.x = 0.65;
        halo.position.x = 0.65;
      } else {
        camera.position.z = 5.2;
        neural.group.scale.setScalar(1);
        robot.group.position.x = 1.65;
        halo.position.x = 1.65;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let frameId = 0;

    if (!reducedMotion) {
      const start = performance.now();
      const intro = () => {
        const elapsed = performance.now() - start;
        const progress = Math.min(elapsed / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        robot.group.position.y = -2.2 + eased * 2.02;

        if (progress < 1) {
          requestAnimationFrame(intro);
        }
      };
      requestAnimationFrame(intro);
    }

    const revealTimeout = window.setTimeout(() => setGuideReady(true), reducedMotion ? 350 : 1300);

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      neural.group.rotation.y = elapsed * 0.06;
      neural.points.rotation.y = elapsed * 0.075;
      neural.lines.rotation.y = elapsed * 0.075;
      halo.rotation.z = elapsed * 0.7;

      if (!reducedMotion) {
        robot.group.position.y += Math.sin(elapsed * 2.2) * 0.0018;
        robot.group.rotation.y = -0.38 + Math.sin(elapsed * 1.2) * 0.08;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.clearTimeout(revealTimeout);
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      neural.points.geometry.dispose();
      neural.lines.geometry.dispose();
      halo.geometry.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_28%,rgba(91,231,255,0.2),transparent_35%),radial-gradient(circle_at_30%_65%,rgba(167,139,250,0.16),transparent_36%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.35),transparent_45%,rgba(0,0,0,0.2))]"
        aria-hidden="true"
      />
      <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />

      {guideReady ? (
        <motion.div
          className="pointer-events-auto absolute bottom-6 right-4 hidden w-[min(330px,calc(100vw-2rem))] rounded-2xl border border-white/12 bg-black/45 p-4 text-white shadow-panel backdrop-blur-2xl md:block"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-3 flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
              <Bot className="h-4 w-4" />
            </span>
            <p className="text-sm leading-6 text-white/78">
              Hello. I am the AI guide. Pick a signal and I will take you there.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("#projects")}
            >
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Projects
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("#skills")}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Skills
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="h-3.5 w-3.5" />
              Contact
            </Button>
          </div>
        </motion.div>
      ) : null}

      <motion.button
        className="pointer-events-auto absolute bottom-5 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/75 backdrop-blur-xl transition hover:text-white"
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to about"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </div>
  );
}
