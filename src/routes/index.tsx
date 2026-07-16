import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Wrench,
  ShieldCheck,
  Sparkles,
  Zap,
  Cog,
  Instagram,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  HardHat,
  Shirt,
  Disc3,
  Lightbulb,
  Droplets,
  Gauge,
  Bike,
  Package,
} from "lucide-react";
import heroMoto from "@/assets/hero-moto.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carajás Moto Center — Oficina de Motos em Marabá | Peças, Acessórios e Serviço" },
      {
        name: "description",
        content:
          "Sua moto nas mãos de quem entende. Oficina mecânica, peças e acessórios em Marabá-PA. Atendimento rápido, preço justo e mecânicos qualificados. Agende agora.",
      },
      { property: "og:title", content: "Carajás Moto Center — Marabá-PA" },
      {
        property: "og:description",
        content:
          "Oficina de motos referência em Marabá. Peças, acessórios e serviço com qualidade. Ligue (94) 99113-9571.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_LINK =
  "https://wa.me/5594991139571?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20agendar%20um%20servi%C3%A7o%20na%20minha%20moto.";
const PHONE_LINK = "tel:+5594991139571";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Categories />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Wrench className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">CARAJÁS</p>
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Moto Center
            </p>
          </div>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:inline-flex"
        >
          <MessageCircle className="h-4 w-4" /> Agendar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroMoto}
          alt="Oficina Carajás Moto Center em Marabá"
          width={1600}
          height={1000}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Oficina nº 1 em Marabá — 4.2★ (69 avaliações)
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
            Sua moto nas mãos de quem
            <span className="block text-primary">realmente entende.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Mecânicos qualificados, peças originais e atendimento honesto.
            Mais de <strong className="text-foreground">5 anos</strong> cuidando das motos de Marabá
            com preço justo e serviço garantido.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.02] hover:opacity-95"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar meu serviço agora
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              <Phone className="h-5 w-5" /> (94) 99113-9571
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Diagnóstico rápido
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Peças com garantia
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Orçamento sem compromisso
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        <Stat value="4.2★" label="Nota no Google" />
        <Stat value="69+" label="Avaliações reais" />
        <Stat value="5+" label="Anos de estrada" />
        <Stat value="100%" label="Foco em motos" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-black tracking-tight text-primary md:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Oficina Mecânica",
      desc: "Revisão, reparo e manutenção preventiva com mecânicos qualificados.",
    },
    {
      icon: Cog,
      title: "Peças & Acessórios",
      desc: "Ampla variedade em estoque. Se não tiver, a gente encontra.",
    },
    {
      icon: Zap,
      title: "Elétrica & Bateria Moura",
      desc: "Diagnóstico elétrico completo e a melhor energia para sua moto.",
    },
    {
      icon: ShieldCheck,
      title: "Serviço com Garantia",
      desc: "Você sai da oficina com a moto rodando redonda — ou a gente resolve.",
    },
  ];

  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          O que fazemos
        </p>
        <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
          Tudo pra sua moto num só lugar
        </h2>
        <p className="mt-3 text-muted-foreground">
          Da revisão simples ao reparo complexo. Peças, acessórios e mão de obra especializada.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:bg-card/80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      title: "Preço justo, sem enrolação",
      desc: "Orçamento transparente antes de começar. Você aprova, a gente executa.",
    },
    {
      title: "Mecânicos que cuidam da sua moto como se fosse deles",
      desc: "Profissionais qualificados, treinados e apaixonados por duas rodas.",
    },
    {
      title: "Peças originais e acessórios de qualidade",
      desc: "Trabalhamos com marcas reconhecidas, incluindo baterias Moura.",
    },
    {
      title: "Ambiente amigável e acolhedor",
      desc: "Empresa que acolhe a comunidade LGBTQ+ e todo mundo que ama moto.",
    },
  ];

  return (
    <section className="bg-card/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Por que Carajás?
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            A oficina que os motociclistas de Marabá recomendam
          </h2>
          <p className="mt-4 text-muted-foreground">
            Não somos só mais uma oficina. Somos referência em atendimento, técnica e
            confiança na Av. Transamazônica há anos.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Falar com um mecânico
          </a>
        </div>

        <ul className="space-y-4">
          {items.map((it) => (
            <li
              key={it.title}
              className="flex gap-4 rounded-xl border border-border bg-background p-5"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">{it.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      name: "Francisco Olten",
      text: "Melhor oficina de motos de Marabá! Excelente atendimento e competência técnica.",
      stars: 5,
    },
    {
      name: "Cliente Google",
      text: "Bons mecânicos, um bom atendimento, e uma variedade de peças.",
      stars: 5,
    },
    {
      name: "Cliente Google",
      text: "Profissionais qualificados, preço justo e atendimento de qualidade.",
      stars: 5,
    },
    {
      name: "Moura Marabá",
      text: "Se tem Moura, então tem a melhor energia para sua moto.",
      stars: 5,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Prova social
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
            Quem confia, indica
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
          <div className="flex text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <span className="font-semibold">4.2</span>
          <span className="text-muted-foreground">/ 69 avaliações no Google</span>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex text-primary">
              {[...Array(r.stars)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed">"{r.text}"</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              — {r.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Vocês fazem orçamento sem compromisso?",
      a: "Sim. Traga sua moto ou mande fotos pelo WhatsApp. Avaliamos e passamos o orçamento antes de qualquer serviço.",
    },
    {
      q: "Trabalham com quais marcas de moto?",
      a: "Atendemos todas as marcas: Honda, Yamaha, Suzuki, Kawasaki, Dafra, Shineray e mais.",
    },
    {
      q: "Vocês têm peças em estoque?",
      a: "Sim, temos ampla variedade de peças e acessórios. Se precisar de algo específico, encomendamos rápido.",
    },
    {
      q: "Qual o horário de funcionamento?",
      a: "Aberto até às 18:00. Ligue (94) 99113-9571 ou chame no WhatsApp para confirmar.",
    },
    {
      q: "Onde vocês ficam?",
      a: "Av. Transamazônica, 1745 — Cidade Nova, Marabá-PA. Fácil acesso e estacionamento na porta.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-card/40 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Perguntas frequentes
        </p>
        <h2 className="mt-2 text-center text-3xl font-black tracking-tight md:text-4xl">
          Tirando suas dúvidas
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <button
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full rounded-xl border border-border bg-background p-5 text-left transition hover:border-primary/40"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>
              {open === i && (
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
          Sua moto merece o melhor.
          <span className="block text-primary">Agende agora e evite dor de cabeça.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Chame no WhatsApp, envie fotos ou vídeos do problema e já recebe um retorno com
          orçamento e prazo. Simples assim.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/30 transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp agora
          </a>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold transition hover:bg-card/70"
          >
            <Phone className="h-5 w-5" /> Ligar (94) 99113-9571
          </a>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 text-left sm:grid-cols-3">
          <InfoRow icon={MapPin} title="Endereço" text="Av. Transamazônica, 1745 — Cidade Nova, Marabá-PA" />
          <InfoRow icon={Clock} title="Horário" text="Aberto hoje · Fecha às 18:00" />
          <InfoRow icon={Phone} title="Telefone" text="(94) 99113-9571" />
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="mt-0.5 text-sm font-medium">{text}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
        <p className="font-semibold text-foreground">
          Carajás Moto Center — Marabá-PA
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-primary"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-2xl shadow-primary/30 transition hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Agendar no WhatsApp</span>
    </a>
  );
}
