import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const IMG = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/bucket/8108f571-e805-49a7-aee2-6afcb636a5d7.jpg';
const PHONE = '+7 (423) 220-57-20';
const PHONE_HREF = 'tel:+74232205720';

const STEPS = [
  { icon: 'Droplets', title: 'Глубокое очищение', text: 'Бережное очищение кожи головы и волос тёплой водой' },
  { icon: 'Hand', title: 'Массаж шейно-воротниковой зоны', text: 'Расслабляющий массаж снимает напряжение с шеи и плеч' },
  { icon: 'Sparkles', title: 'Массаж лица', text: 'Мягкие техники возвращают лицу свежесть и отдых' },
  { icon: 'Leaf', title: 'Восстановление волос', text: 'Уход с применением премиальных средств' },
];

const BENEFITS = ['Здоровье волос', 'Здоровье кожи головы', 'Отдых для нервной системы'];

export default function AquaHeadSpa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Flower2" size={22} className="text-gold" />
            <span className="font-display text-2xl font-semibold tracking-wide">Тай СПА</span>
          </Link>
          <Link to="/#prices" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold">
            <Icon name="ArrowLeft" size={16} /> К прайсу
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[80vh] items-end overflow-hidden pt-16">
        <img src={IMG} alt="Процедура Aqua HEAD SPA" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="container relative z-10 pb-16">
          <span className="rounded-full bg-gold px-4 py-1.5 text-sm font-medium text-primary-foreground">Новинка</span>
          <h1 className="mt-5 font-display text-5xl font-medium sm:text-7xl">Aqua HEAD SPA</h1>
          <p className="mt-3 font-display text-2xl italic text-foreground/85">Тайский спа для головы и волос</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <p className="font-display text-2xl leading-relaxed text-foreground/90 sm:text-3xl">
            Тайский спа для головы и волос — это не просто уходовая процедура, а настоящая терапия для здоровья волос, кожи головы и нервной системы.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {BENEFITS.map((b) => (
              <span key={b} className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold">{b}</span>
            ))}
          </div>

          <h2 className="mt-16 font-display text-3xl font-medium sm:text-4xl">Что включает процедура</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-3xl border border-gold/20 bg-card/60 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                  <Icon name={s.icon} size={22} className="text-gold" />
                </span>
                <div>
                  <p className="font-display text-xl">{s.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-6 rounded-3xl border border-gold bg-gold/10 p-8 text-center shadow-[0_0_60px_-15px_hsl(var(--gold))] sm:p-10">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-2 text-muted-foreground"><Icon name="Clock" size={18} /> 1 час 20 минут</span>
              <span className="font-display text-4xl font-semibold text-gold">8 000 ₽</span>
            </div>
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_hsl(var(--gold))]"
            >
              <Icon name="Phone" size={18} className="transition-transform group-hover:rotate-12" />
              Звонок администратору
            </a>
            <a href={PHONE_HREF} className="font-display text-xl hover:text-gold">{PHONE}</a>
          </div>

          <div className="mt-12 text-center">
            <Link to="/#prices" className="inline-flex items-center gap-2 text-gold hover:underline">
              <Icon name="ArrowLeft" size={16} /> Вернуться к прайсу
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
