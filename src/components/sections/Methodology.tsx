export function Methodology() {
  const principles = [
    {
      index: "01",
      title: "Отказоустойчивость и идемпотентность",
      description:
        "В распределённых системах сетевые и инфраструктурные сбои неизбежны. Проектирую критичные эндпоинты с обязательными ключами идемпотентности (UUID + Idempotency-Key), распределёнными блокировками на Redis и транзакционными аудит-логами, исключая риск дублирования операций.",
    },
    {
      index: "02",
      title: "Производительность на больших данных",
      description:
        "Оптимизирую выполнение запросов на уровне СУБД: профилирование через EXPLAIN ANALYZE, составные индексы и агрегации для 1.5M+ строк. На бэкенде применяю чанк-стриминг для тяжелых экспортов, а на фронтенде — эффективную кластеризацию 30,000+ гео-точек.",
    },
    {
      index: "03",
      title: "Чистые границы (Clean Architecture & DDD)",
      description:
        "Изолирую бизнес-логику от транспортных слоёв (REST / WebSockets / CLI) и деталей хранения. Это обеспечивает устойчивость к изменениям библиотек, упрощает тестирование доменных сценариев и предотвращает накопление технического долга в ядре проекта.",
    },
    {
      index: "04",
      title: "Offline-First и непрерывность работы",
      description:
        "Данные пользователя не должны зависеть от стабильности мобильной сети. Проектирую локальное хранилище на Hive/SQLite, устойчивые очереди фоновой синхронизации и детерминированное восстановление состояния после перезапуска.",
    },
  ];

  return (
    <section id="principles" className="container-editorial py-12 md:py-20">
      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <div className="font-mono text-xs uppercase tracking-wider text-primary">
          [ 05 // ENGINEERING PRINCIPLES ]
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Инженерный подход и принципы
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Инженерная дисциплина, нацеленная на предсказуемость, надёжность и долговечность кода.
        </p>
      </div>

      {/* Editorial Principles Grid */}
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
        {principles.map((item) => (
          <div key={item.index} className="bg-surface p-6 sm:p-8">
            <span className="font-mono text-xs font-semibold text-primary">{item.index} //</span>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {item.title}
            </h3>
            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
