import Icon from '@/components/ui/icon';

const REVIEWS_URL = 'https://2gis.ru/vladivostok/firm/70000001021577918/tab/reviews';

const REVIEWS = [
  {
    name: 'Гостья салона',
    program: 'Посетили салон вместе с мужем',
    text: 'Посетили салон вместе с мужем, впечатления остались потрясающие! С порога погружаешься в атмосферу спокойствия, приглушенный свет, тихая расслабляющая музыка и очень вежливый персонал. Спа-программа была на высоте. Обязательно вернемся сюда снова!',
  },
  {
    name: 'Алена Панина',
    program: 'Постоянный клиент',
    text: 'Обожаю это место, я постоянный клиент уже один год. Хорошие специалисты, очень вежливый и внимательный менеджер. Отдыхаю у вас как телом и душой.',
  },
  {
    name: 'Ольга Трошкова',
    program: 'Программа «Слияние двух душ»',
    text: 'Во-первых, администратор очень вежливая и все показала-рассказала, объяснила. Во-вторых, атмосфера внутри ну волшебная — аутентичное, но очень красивое и чистое тайское пространство. В-третьих, девушки массажистки отработали почти 3 часа без единого перерыва — это вообще шок.',
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon key={i} name="Star" size={16} className="fill-gold text-gold" />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <div>
      <div className="mx-auto mb-12 flex w-fit flex-col items-center gap-2 rounded-2xl border border-gold/30 bg-card/60 px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl text-gold">5,0</span>
          <Stars />
        </div>
        <p className="text-sm text-muted-foreground">рейтинг в 2ГИС на основе 81 оценки</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <div key={r.text} className="relative rounded-3xl border border-gold/20 bg-card/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
            <Icon name="Quote" size={32} className="absolute right-6 top-6 text-gold/20" />
            <Stars />
            <p className="mt-4 font-display text-xl leading-snug text-foreground/90">«{r.text}»</p>
            <div className="mt-5 border-t border-border/60 pt-4">
              <p className="font-medium">{r.name}</p>
              <p className="text-sm text-gold/80">{r.program}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm text-gold transition-colors hover:bg-gold/10"
        >
          Читать все отзывы в 2ГИС <Icon name="ExternalLink" size={15} />
        </a>
      </div>
    </div>
  );
}