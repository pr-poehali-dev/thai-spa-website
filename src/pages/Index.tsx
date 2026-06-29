import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const PHONE = '+7 (900) 123-45-67';
const PHONE_HREF = 'tel:+79001234567';

// Real photos of Tai Spa interior
const IMG_HERO = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/110df343-8e9e-44d4-a243-3dee8b666183.jpg';
const IMG_LOUNGE = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/3848fefb-b8d1-45d7-a667-9e18f683d3ab.jpg';
const IMG_CANDLES_COLOR = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/0416b03c-7360-455d-b6f1-535598faba3e.jpg';
const IMG_CANDLES_GOLD = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/73ed0ed1-5ea7-41e4-bd0d-0bd1696aa061.jpg';
const IMG_SCULPTURE = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/fda167be-cc13-4fa3-9da7-e2995153e4bb.jpg';
const IMG_PILLOWS = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/407e95e2-3856-4b03-9d80-9122da31756d.jpg';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О пространстве' },
  { id: 'services', label: 'Услуги' },
  { id: 'prices', label: 'Прайс' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'masters', label: 'Мастера' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'Flower2', title: 'Тайский массаж', desc: 'Глубокая работа с телом по древним традициям — растяжки, акупрессура, восстановление потоков энергии.' },
  { icon: 'Leaf', title: 'Обёртывания', desc: 'Травяные и медовые обёртывания с тайскими компрессами для глубокого питания и детокса кожи.' },
  { icon: 'Flame', title: 'Парение в сауне', desc: 'Мягкий пар и ароматы трав, которые раскрывают поры и наполняют тело лёгкостью.' },
  { icon: 'Droplets', title: 'Кедровая бочка', desc: 'Фитопарение в кедровой бочке — целебный пар, бережная детоксикация и глубокое расслабление.' },
];

const PRICES = [
  { name: 'Традиционный тайский массаж', time: '60 / 90 мин', price: '3 500 / 4 900 ₽' },
  { name: 'Масляный SPA-массаж', time: '90 мин', price: '5 200 ₽' },
  { name: 'Травяное обёртывание', time: '60 мин', price: '3 800 ₽' },
  { name: 'Парение в сауне', time: '40 мин', price: '2 400 ₽' },
  { name: 'Кедровая бочка', time: '30 мин', price: '1 900 ₽' },
  { name: 'Ритуал «Перезагрузка»', time: '180 мин', price: '9 800 ₽' },
];

const GALLERY = [
  { src: IMG_LOUNGE, alt: 'Зал отдыха' },
  { src: IMG_CANDLES_GOLD, alt: 'Золотые свечи' },
  { src: IMG_SCULPTURE, alt: 'Деревянная скульптура' },
  { src: IMG_CANDLES_COLOR, alt: 'Керамические свечницы' },
  { src: IMG_PILLOWS, alt: 'Тайские подушки со слонами' },
  { src: IMG_HERO, alt: 'Вход в Тай СПА' },
];

const MASTERS = [
  { name: 'Чанида', role: 'Мастер тайского массажа', exp: '12 лет практики', img: IMG_CANDLES_GOLD },
  { name: 'Малини', role: 'Специалист по обёртываниям', exp: '9 лет практики', img: IMG_SCULPTURE },
  { name: 'Арун', role: 'Мастер парения', exp: '15 лет практики', img: IMG_CANDLES_COLOR },
];

const Ornament = () => (
  <div className="flex items-center justify-center gap-3 my-6" aria-hidden>
    <span className="h-px w-16 ornament-line" />
    <Icon name="Flower2" size={20} className="text-gold" />
    <span className="h-px w-16 ornament-line" />
  </div>
);

const CallButton = ({ className = '' }: { className?: string }) => (
  <a
    href={PHONE_HREF}
    className={`group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-body font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-8px_hsl(var(--gold))] hover:scale-[1.03] ${className}`}
  >
    <Icon name="Phone" size={18} className="transition-transform group-hover:rotate-12" />
    Позвонить администратору
  </a>
);

export default function Index() {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <button onClick={() => go('hero')} className="flex items-center gap-2">
            <Icon name="Flower2" size={22} className="text-gold" />
            <span className="font-display text-2xl font-semibold tracking-wide">Тай СПА</span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={`relative text-sm transition-colors ${active === n.id ? 'text-gold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <a href={PHONE_HREF} className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-2 text-sm text-gold transition-colors hover:bg-gold/10">
            <Icon name="Phone" size={15} /> {PHONE}
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-border/40 bg-background/95 px-6 py-4 flex flex-col gap-3 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="text-left text-muted-foreground hover:text-gold">{n.label}</button>
            ))}
          </nav>
        )}
      </header>

      {/* 1. HERO */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Photo of the real sign with flamingo */}
        <img src={IMG_HERO} alt="Вывеска Тай СПА с фламинго" className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in" />
        {/* Warm glow behind the sign */}
        <div className="absolute left-1/2 top-[34%] -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[120px]" />
        {/* Vignette: darkened edges, transparent center so the sign stays visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_38%,transparent_0%,hsl(var(--background)/0.45)_70%,hsl(var(--background))_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 grain opacity-[0.1]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-end px-6 pb-24 pt-32 text-center">
          <p className="animate-fade-up font-body text-xs uppercase tracking-[0.45em] text-gold sm:text-sm" style={{ animationDelay: '0.3s', opacity: 0 }}>
            พื้นที่แห่งความผ่อนคลาย
          </p>
          <h1 className="animate-fade-up mt-5 font-display text-4xl font-medium leading-[1.08] sm:text-6xl" style={{ animationDelay: '0.45s', opacity: 0 }}>
            Где тело отдыхает,<br /><span className="text-shimmer animate-shimmer">а голова перезагружается</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg" style={{ animationDelay: '0.6s', opacity: 0 }}>
            Камерное пространство тайского массажа, обёртываний и парения. Настоящие мастерицы из Таиланда и атмосфера полного покоя.
          </p>
          <div className="animate-fade-up mt-9 flex justify-center" style={{ animationDelay: '0.75s', opacity: 0 }}>
            <CallButton />
          </div>
        </div>
        <button onClick={() => go('about')} className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-gold/70 animate-float">
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="relative py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div className="relative animate-fade-up" style={{ opacity: 0 }}>
            {/* Main lounge photo */}
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_0_60px_-10px_rgba(0,0,0,0.8)]">
              <img src={IMG_LOUNGE} alt="Зал ожидания Тай СПА" className="h-[480px] w-full object-cover" />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/10" />
            </div>
            {/* Small candles detail floating card */}
            <div className="absolute -bottom-5 -right-4 hidden overflow-hidden rounded-2xl border border-gold/30 shadow-2xl sm:block" style={{ width: 140, height: 140 }}>
              <img src={IMG_CANDLES_GOLD} alt="Свечи" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 hidden rounded-2xl border border-gold/30 bg-card px-5 py-4 sm:block shadow-xl">
              <p className="font-display text-3xl text-gold">8 лет</p>
              <p className="text-xs text-muted-foreground">дарим покой</p>
            </div>
          </div>
          <div>
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">О пространстве</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Атмосфера расслабления, аромат уникальных масел и профессионализм</h2>
            <Ornament />
            <p className="text-muted-foreground leading-relaxed">
              «Тай СПА» — это мир полного эмоционального восстановления, скрытый за плотной шторой от городской суеты. Тёплая уютная атмосфера изысканно поддержана тёплым светом, тонкими ароматами, звуком тихой воды — всё это окутает вас и погрузит в сладкую негу. Здесь нет спешки — только ваше тело и руки мастера.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Все элементы декора выполнены вручную: настоящие тайские скульптуры, резьба по дереву, шёлковые подушки и портьеры с изысканной вышивкой. «Тай СПА» — это место, куда приходят, чтобы выдохнуть.
            </p>
            {/* Three detail thumbnails */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[IMG_SCULPTURE, IMG_CANDLES_COLOR, IMG_PILLOWS].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl border border-gold/20">
                  <img src={src} alt="" className="h-24 w-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="bg-card/40 py-28">
        <div className="container">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Услуги</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Ритуалы для тела и ума</h2>
            <Ornament />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-background p-7 transition-all duration-500 hover:border-gold/50 hover:-translate-y-2">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <Icon name={s.icon} size={26} />
                </div>
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRICES */}
      <section id="prices" className="py-28">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Прайс-лист</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Стоимость процедур</h2>
            <Ornament />
          </div>
          <div className="rounded-3xl border border-gold/20 bg-card/50 p-2 sm:p-4">
            {PRICES.map((p, i) => (
              <div key={p.name} className={`flex items-center justify-between gap-4 px-4 py-5 sm:px-6 ${i !== PRICES.length - 1 ? 'border-b border-border/60' : ''}`}>
                <div>
                  <p className="font-display text-xl">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.time}</p>
                </div>
                <p className="whitespace-nowrap font-body font-semibold text-gold">{p.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Запись и подбор процедуры — по звонку администратору.</p>
          <div className="mt-7 flex justify-center"><CallButton /></div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section id="gallery" className="bg-card/40 py-28">
        <div className="container">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Галерея</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Атмосфера пространства</h2>
            <Ornament />
          </div>
          <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
            {GALLERY.map((item, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl border border-gold/15 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? 'h-72' : i % 3 === 1 ? 'h-52' : 'h-64'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MASTERS */}
      <section id="masters" className="py-28">
        <div className="container">
          <div className="text-center">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Мастера</p>
            <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Настоящие тайские мастерицы</h2>
            <Ornament />
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {MASTERS.map((m) => (
              <div key={m.name} className="group text-center">
                <div className="relative mx-auto mb-5 overflow-hidden rounded-[1.5rem] border border-gold/20">
                  <img src={m.img} alt={m.name} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="text-gold text-sm">{m.role}</p>
                <p className="text-sm text-muted-foreground">{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACTS */}
      <section id="contacts" className="relative overflow-hidden py-28">
        <img src={IMG_LOUNGE} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container relative z-10 max-w-2xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Контакты</p>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">Приходите выдохнуть</h2>
          <Ornament />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <Icon name="MapPin" size={24} className="mx-auto mb-3 text-gold" />
              <p className="font-medium">Адрес</p>
              <p className="text-sm text-muted-foreground">г. Москва, ул. Лотосовая, 7</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <Icon name="Clock" size={24} className="mx-auto mb-3 text-gold" />
              <p className="font-medium">Часы работы</p>
              <p className="text-sm text-muted-foreground">Ежедневно 10:00 — 22:00</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CallButton />
            <a href={PHONE_HREF} className="font-display text-2xl text-foreground hover:text-gold transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center">
        <p className="font-display text-xl text-gold">Тай СПА</p>
        <p className="mt-2 text-sm text-muted-foreground">© 2026 · Пространство тайского массажа и парения</p>
      </footer>
    </div>
  );
}