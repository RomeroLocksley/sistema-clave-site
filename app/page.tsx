"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("Por favor completa los campos requeridos.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden bg-[#0a0f1e]">

      {/* ═══ BACKGROUND ═══ */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-10%] left-[-5%] h-[700px] w-[700px] rounded-full bg-[#1e3a8a] opacity-20 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#2563eb] opacity-10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[500px] rounded-full bg-[#1d4ed8] opacity-10 blur-[100px]" />
      </div>

      {/* ═══ NAVBAR ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="mx-4 mt-4 rounded-2xl border border-white/10 px-5 py-3 flex items-center justify-between"
          style={{
            background: "rgba(10, 15, 30, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="relative w-28 h-8">
            <Image
              src="/Clave-White.png"
              alt="Clave"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2 text-xs font-semibold text-[#0a0f1e] transition-all duration-200 hover:bg-blue-100"
          >
            Solicitar Demo
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-24 text-center">

        <div className="mb-10 relative w-52 h-16">
          <Image
            src="/Clave-White.png"
            alt="Clave"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
            CRM Personalizado para Contratistas
          </span>
        </div>

        <h1 className="text-[42px] md:text-7xl font-semibold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
          Cada trabajo. Cada cliente.{" "}
          <span
            className="text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Todo bajo control.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto mb-6">
          Un sistema CRM completamente personalizado para contratistas —
          diseñado desde el campo. Rastrea leads, envía presupuestos,
          obtén firmas electrónicas y cobra pagos, todo desde tu teléfono.
        </p>

        <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 mb-10 backdrop-blur-sm">
          <span className="text-white/40 text-sm line-through">Antes costaba $10,000+</span>
          <span className="w-px h-4 bg-white/20" />
          <span className="text-white font-semibold text-sm">Desde $297/mes</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(96,165,250,0.35)]"
          >
            Solicitar Demo Gratis
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#funciones"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
          >
            Ver Funciones
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
          <div className="h-8 w-[1px] bg-white animate-pulse" />
          <span className="text-[10px] tracking-widest text-white uppercase">Scroll</span>
        </div>
      </section>

      {/* ═══ POR QUÉ ES ACCESIBLE ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl border border-blue-500/20 p-10 md:p-14 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.35) 0%, rgba(10,15,30,0.8) 70%)",
            }}
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px] pointer-events-none" />
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Por Qué Es Accesible
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Antes costaba decenas de miles de dólares.
            </h2>
            <p className="text-white/55 leading-relaxed text-lg mb-4">
              Sistemas como Clave antes requerían un equipo de desarrolladores, meses de trabajo
              y un precio de cinco cifras — fuera del alcance de la mayoría de los contratistas.
            </p>
            <p className="text-white/55 leading-relaxed text-lg mb-4">
              Nosotros construimos Clave con un equipo pequeño usando inteligencia artificial —
              igual que ayudamos a nuestros clientes a hacer crecer sus negocios.
              Por eso podemos ofrecerlo a una fracción del costo anterior.
            </p>
            <p className="text-white/70 leading-relaxed text-lg font-medium">
              Y si quieres incorporar inteligencia artificial en tu operación como lo hicimos nosotros — también te ayudamos con eso.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FUNCIONES ═══ */}
      <section id="funciones" className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 max-w-xl">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Funciones
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              Todo en un solo lugar.{" "}
              <span className="text-white/30">Nada que no necesitas.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Pipeline de Ventas",
                desc: "Rastrea cada lead desde el primer contacto hasta el trabajo cerrado. Ve dónde está cada oportunidad de un vistazo.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Etapas de Proyecto y Presupuesto",
                desc: "Sigue cada proyecto de construcción por etapas con presupuestos asignados. Sin adivinar dónde está cada trabajo.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-6 3h.008v.008H6v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                ),
                title: "Aplicación Móvil",
                desc: "Toda tu operación en tu bolsillo. Crea presupuestos, revisa trabajos y da seguimiento a clientes desde el campo.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
                title: "Presupuestos + Firma Electrónica",
                desc: "Envía un presupuesto profesional en minutos. Los clientes firman electrónicamente — sin imprimir, sin escanear.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
                title: "Cobros y Pagos",
                desc: "Envía solicitudes de pago directamente desde el CRM. Cobra más rápido sin perseguir cheques ni hacer llamadas incómodas.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: "Acceso por Roles",
                desc: "Dueño, vendedor, cuadrilla de campo — cada quien ve exactamente lo que necesita. Diseñado para equipos.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-[#0a0f1e] p-8 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 mb-5 transition-colors group-hover:bg-blue-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DISEÑADO SIMPLE ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">
              Diseñado Diferente
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
              Poderoso para una empresa en crecimiento.{" "}
              <span className="text-white/35">Simple para el campo.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-5">
              Hemos usado los CRMs que te hacen sentir que necesitas un curso de entrenamiento
              solo para registrar un lead. Clave fue diseñado por alguien que ha vendido
              techos, revestimientos y ventanas — y sabe que tu equipo no usará un sistema
              que los ralentiza.
            </p>
            <p className="text-white/50 leading-relaxed">
              Ya seas un contratista solo que está comenzando a organizarse, o una empresa
              establecida con un equipo de ventas en el campo — Clave está hecho para
              trabajar como tú trabajas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Contratistas Solos", desc: "Organízate desde el primer día" },
              { title: "Equipos en Crecimiento", desc: "Acceso por roles mientras escalas" },
              { title: "Cuadrillas de Campo", desc: "Móvil primero, funciona en cualquier teléfono" },
              { title: "Vendedores", desc: "Pipeline y seguimiento incluidos" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mb-4" />
                <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRECIOS ═══ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-4">Precios</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Precios claros y transparentes.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-3">Estándar</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-semibold text-white">$297</span>
                <span className="text-white/40 text-sm mb-1">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Sistema CRM completo, hecho para tu negocio",
                  "Pipeline de leads y ventas",
                  "Seguimiento de proyectos por etapas",
                  "Presupuestos + firma electrónica",
                  "Solicitudes de pago",
                  "Aplicación móvil",
                  "Hasta 5 roles de usuario",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="block text-center rounded-full border border-white/15 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Solicitar Demo Gratis
              </a>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/40 to-[#0a0f1e] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-[60px] pointer-events-none" />
              <p className="text-xs font-medium tracking-widest text-blue-400 uppercase mb-3">Personalizado</p>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-4xl font-semibold text-white">Hablemos</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Todo lo del plan Estándar",
                  "Flujos de trabajo completamente personalizados",
                  "Roles de usuario ilimitados",
                  "Integraciones de IA y automatizaciones",
                  "Reportes y paneles personalizados",
                  "Soporte prioritario",
                  "Construcción y mejora continua",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="block text-center rounded-full bg-white py-3 text-sm font-semibold text-[#0a0f1e] hover:bg-blue-100 transition-colors hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              >
                Obtener Cotización
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO ═══ */}
      <section id="contacto" className="relative z-10 px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          <div className="pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-blue-300 uppercase">
                Demo Gratis
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Veamos cómo Clave{" "}
              <span
                className="text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                funciona para ti.
              </span>
            </h2>
            <p className="text-white/45 leading-relaxed mb-8">
              15 minutos. Sin presión. Te mostramos exactamente cómo Clave
              quedaría configurado para tu operación — sin compromiso.
            </p>
            <div className="space-y-4">
              {[
                { icon: "📍", label: "Fredericksburg, VA" },
                { icon: "⏱️", label: "Respuesta en menos de 24 horas" },
                { icon: "✅", label: "Sin obligación — solo una conversación real" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  <span className="text-sm text-white/55">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">¡Mensaje recibido!</h3>
                <p className="text-white/40 text-sm">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">Tu Nombre</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Juan García"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="juan@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">
                    Teléfono <span className="text-white/20 normal-case font-normal">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="(540) 555-0100"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2 tracking-wide uppercase">Cuéntanos sobre tu negocio</label>
                  <textarea
                    name="message"
                    placeholder="¿Qué tipo de trabajo haces, cuántas personas en tu equipo, qué es lo que más te frena?"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-xs">Algo salió mal. Por favor intenta de nuevo.</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-white py-3.5 text-sm font-semibold text-[#0a0f1e] transition-all duration-200 hover:bg-blue-100 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Enviando…" : "Solicitar Demo Gratis →"}
                </button>
                <p className="text-center text-xs text-white/20">
                  Respondemos en menos de 24 horas. Sin spam.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-24 h-7">
            <Image
              src="/Clave-White.png"
              alt="Clave"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
            />
          </div>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Clave · Un producto de Romero & Locksley LLC
          </p>
          <p className="text-xs text-white/20">
            Tecnología construida desde el campo
          </p>
        </div>
      </footer>

    </main>
  );
}