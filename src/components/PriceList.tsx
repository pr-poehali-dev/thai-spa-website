import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

type Option = { time: string; price: string };
type Program = {
  name: string;
  note?: string;
  steps?: string[];
  desc?: string;
  options: Option[];
};

const FOR_TWO: Program[] = [
  {
    name: 'Слияние двух душ',
    note: 'для двоих',
    steps: ['Сауна для двоих — 15 минут', 'Нанесение скраба на тело — 30 минут', 'Aroma-oil массаж — 2 часа'],
    options: [{ time: '2 часа 45 минут', price: '19 500 ₽ на двоих' }],
  },
  {
    name: 'Sweet Love',
    note: 'Идеальная программа для влюблённой пары',
    steps: ['Сауна — 15 минут', 'Нанесение скраба на тело — 30 минут', 'Aroma-oil массаж — 60 минут'],
    options: [{ time: '1 час 45 минут', price: '15 000 ₽ на двоих' }],
  },
  {
    name: 'СПА для двоих',
    steps: [
      'Сауна — 15 минут',
      'Aroma-oil массаж — 1 час',
      'Прикосновения Таиланда (массаж лица) — 30 минут или Шаг к совершенству (массаж ног) — 30 минут',
    ],
    options: [{ time: '1 час 45 минут', price: '14 500 ₽ на двоих' }],
  },
];

const PERSONAL: Program[] = [
  {
    name: 'Абсолютная Гармония',
    steps: [
      'Сауна — 15 минут',
      'Нанесение скраба на тело — 15 минут',
      'Aroma-oil массаж — 120 минут',
      'Обёртывание тела и массаж лица — 30 минут',
    ],
    options: [{ time: '3 часа', price: '12 000 ₽' }],
  },
  {
    name: 'Целебные травы',
    steps: [
      'Сауна — 15 минут',
      'Нанесение скраба на тело — 15 минут',
      'Обёртывание тела + массаж лица — 30 минут',
      'Массаж тела травяными мешочками — 1 час',
    ],
    options: [{ time: '2 часа', price: '10 000 ₽' }],
  },
  {
    name: 'Жизненная философия',
    steps: [
      'Посещение сауны — 15 минут',
      'Интенсивный спортивный массаж — 1 час 30 минут',
      'Массаж головы, спины, шеи и плеч — 15 минут',
    ],
    options: [{ time: '2 часа', price: '9 000 ₽' }],
  },
  {
    name: 'Благоухание ночи',
    steps: [
      'Сауна — 15 минут',
      'Лавандовый пилинг — 30 минут',
      'Лавандовое обёртывание — 15 минут',
      'Массаж с тёплым маслом лаванды — 1 час',
    ],
    options: [{ time: '2 часа', price: '9 000 ₽' }],
  },
  {
    name: 'Таинственная Азия',
    steps: ['Сауна — 15 минут', 'Нанесение скраба на тело — 15 минут', 'Aroma-oil массаж — 1 час 30 минут'],
    options: [{ time: '2 часа', price: '8 500 ₽' }],
  },
];

const MASSAGES: Program[] = [
  {
    name: 'Массаж с применением масел',
    options: [
      { time: '1 час', price: '5 000 ₽' },
      { time: '1 час 30 минут', price: '7 000 ₽' },
      { time: '2 часа', price: '8 000 ₽' },
    ],
  },
  {
    name: 'Жизненная энергия',
    note: 'Спортивный массаж',
    options: [
      { time: '1 час', price: '5 000 ₽' },
      { time: '1 час 30 минут', price: '7 000 ₽' },
      { time: '2 часа', price: '8 500 ₽' },
    ],
  },
  {
    name: 'Традиционный тайский массаж',
    note: 'в пижаме',
    options: [
      { time: '1 час', price: '4 500 ₽' },
      { time: '1 час 30 минут', price: '6 000 ₽' },
      { time: '2 часа', price: '7 000 ₽' },
    ],
  },
  {
    name: 'Утреннее пробуждение',
    steps: ['Тайский массаж спины, шейно-воротниковой зоны и головы', 'Традиционный массаж ног'],
    options: [{ time: '1 час 30 минут', price: '6 000 ₽' }],
  },
  {
    name: 'Прикосновение Таиланда',
    note: 'массаж лица в тайской технике',
    options: [{ time: '30 минут', price: '2 500 ₽' }],
  },
  {
    name: 'Slim massage',
    note: 'антицеллюлитный массаж',
    options: [{ time: '1 час 30 минут', price: '7 000 ₽' }],
  },
];

const AQUA: Program = {
  name: 'Aqua HEAD SPA',
  desc: 'Тайский спа для головы и волос — это не просто уходовая процедура, а настоящая терапия для здоровья волос, кожи головы и нервной системы. Она включает глубокое очищение, расслабляющий массаж шейно-воротниковой зоны, массаж лица и восстановление волос с применением премиальных средств.',
  options: [{ time: '1 час 20 минут', price: '8 000 ₽' }],
};

const ProgramCard = ({ p }: { p: Program }) => (
  <div className="flex h-full flex-col rounded-3xl border border-gold/20 bg-card/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 sm:p-7">
    <h4 className="font-display text-2xl font-medium leading-tight">{p.name}</h4>
    {p.note && <p className="mt-1 text-sm italic text-gold/80">{p.note}</p>}
    {p.steps && (
      <div className="mt-5">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">Этапы</p>
        <ul className="space-y-2">
          {p.steps.map((s) => (
            <li key={s} className="flex gap-2 text-sm text-foreground/85">
              <Icon name="Sparkle" size={14} className="mt-1 shrink-0 text-gold" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
    {p.desc && <p className="mt-4 text-sm leading-relaxed text-foreground/85">{p.desc}</p>}
    <div className="mt-auto pt-6">
      <div className="space-y-2 border-t border-border/60 pt-4">
        {p.options.map((o) => (
          <div key={o.time} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Clock" size={14} /> {o.time}
            </span>
            <span className="whitespace-nowrap font-semibold text-gold">{o.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const GroupTitle = ({ num, title, subtitle }: { num: string; title: string; subtitle: string }) => (
  <div className="mb-8 flex items-end gap-4 border-b border-gold/20 pb-4">
    <span className="font-display text-5xl leading-none text-gold/60">{num}</span>
    <div>
      <h3 className="font-display text-3xl font-medium sm:text-4xl">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  </div>
);

export default function PriceList() {
  return (
    <div className="space-y-20">
      <div>
        <GroupTitle num="01" title="Программы восстановления для двоих" subtitle="Разделите время заботы и гармонии с близким человеком" />
        <div className="grid gap-6 md:grid-cols-3">
          {FOR_TWO.map((p) => <ProgramCard key={p.name} p={p} />)}
        </div>
      </div>

      <div>
        <GroupTitle num="02" title="Персональные программы восстановления" subtitle="Время, которое принадлежит только вам" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PERSONAL.map((p) => <ProgramCard key={p.name} p={p} />)}
        </div>
        <p className="mb-6 mt-14 text-xs uppercase tracking-[0.3em] text-gold">Массажи</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MASSAGES.map((p) => <ProgramCard key={p.name} p={p} />)}
        </div>
      </div>

      <div>
        <GroupTitle num="03" title="Новая программа Aqua HEAD SPA" subtitle="Тайский спа-ритуал для головы и волос" />
        <div className="relative overflow-hidden rounded-3xl border border-gold bg-gold/10 p-8 shadow-[0_0_60px_-15px_hsl(var(--gold))] sm:p-10">
          <span className="absolute right-6 top-6 rounded-full bg-gold px-4 py-1 text-xs font-medium text-primary-foreground">Новинка</span>
          <h4 className="pr-24 font-display text-3xl font-medium sm:text-4xl">{AQUA.name}</h4>
          <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-gold/30 pt-6">
            <span className="flex items-center gap-2 text-muted-foreground"><Icon name="Clock" size={16} /> {AQUA.options[0].time}</span>
            <span className="font-display text-3xl font-semibold text-gold">{AQUA.options[0].price}</span>
            <Link
              to="/aqua-head-spa"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:ml-auto"
            >
              Подробнее <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}