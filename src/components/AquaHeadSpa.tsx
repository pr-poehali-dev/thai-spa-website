import Icon from '@/components/ui/icon';

const IMG = 'https://cdn.poehali.dev/projects/9ea9e0d2-a1ec-4b0a-af03-e8295a2d64b5/files/d689814a-66f2-4ac8-8bc8-e16c45a8de46.jpg';

const STEPS = [
  { icon: 'Droplets', text: 'Глубокое очищение кожи головы' },
  { icon: 'Hand', text: 'Расслабляющий массаж шейно-воротниковой зоны' },
  { icon: 'Sparkles', text: 'Массаж лица' },
  { icon: 'Leaf', text: 'Восстановление волос премиальными средствами' },
];

export default function AquaHeadSpa({ phoneHref }: { phoneHref: string }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gold/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/40">
          <img src={IMG} alt="Процедура Aqua HEAD SPA" className="h-[480px] w-full object-cover" />
        </div>
        <span className="absolute left-6 top-6 rounded-full bg-gold px-5 py-1.5 text-sm font-medium text-primary-foreground shadow-lg">
          Новинка
        </span>
      </div>

      <div>
        <p className="font-body text-sm uppercase tracking-[0.3em] text-gold">Новая процедура салона</p>
        <h2 className="mt-4 font-display text-5xl font-medium sm:text-6xl">
          <span className="text-shimmer animate-shimmer">Aqua HEAD SPA</span>
        </h2>
        <p className="mt-3 font-display text-xl italic text-foreground/80">Тайский спа для головы и волос</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Это не просто уходовая процедура, а настоящая терапия для здоровья волос, кожи головы и нервной системы.
        </p>

        <ul className="mt-8 space-y-4">
          {STEPS.map((s) => (
            <li key={s.text} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <Icon name={s.icon} size={20} className="text-gold" />
              </span>
              <span className="text-foreground/90">{s.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-gold/30 pt-6">
          <span className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Clock" size={16} /> 1 час 20 минут
          </span>
          <span className="font-display text-4xl font-semibold text-gold">8 000 ₽</span>
        </div>

        <a
          href={phoneHref}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_hsl(var(--gold))]"
        >
          <Icon name="Phone" size={18} className="transition-transform group-hover:rotate-12" />
          Записаться на Aqua HEAD SPA
        </a>
      </div>
    </div>
  );
}
