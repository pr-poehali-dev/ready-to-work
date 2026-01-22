import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 text-9xl animate-float">☁️</div>
          <div className="absolute top-40 right-20 text-7xl animate-float" style={{animationDelay: '1s'}}>🦥</div>
          <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{animationDelay: '2s'}}>🍩</div>
          <div className="absolute bottom-40 right-1/3 text-8xl animate-float" style={{animationDelay: '1.5s'}}>☁️</div>
          <div className="absolute top-1/2 left-1/2 text-5xl animate-pulse-soft" style={{animationDelay: '2.5s'}}>💤</div>
          <div className="absolute top-1/4 right-10 text-6xl animate-pulse-soft" style={{animationDelay: '3s'}}>🌸</div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="text-8xl mb-6 animate-float">∞</div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Хватит притворяться продуктивным
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            LifeWaster — приложение, которое наконец-то понимает, чего ты действительно хочешь. 
            Мы собираем лучший контент из всех твоих соцсетей и помогаем залипнуть так глубоко, 
            как ты заслуживаешь.
          </p>
          <div className="text-sm mb-4 text-foreground/60 italic">
            Just Waste It — You Can Do It
          </div>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(255,205,178,0.5)] px-12 py-8 text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-500"
          >
            Начать тратить жизнь ✨
          </Button>
          <p className="text-sm mt-4 text-foreground/50">
            Кредитная карта не нужна. Сила воли тоже.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gradient-to-r from-white/50 via-secondary/30 to-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold mb-2">0</div>
            <div className="text-sm text-foreground/70">пользователей вернулись к работе</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-sm text-foreground/70">часов потрачено с удовольствием</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm text-foreground/70">пользователей опоздали на созвон</div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl font-bold mb-2">4.9★</div>
            <div className="text-sm text-foreground/70">сняли одну звезду за зарядку</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
            Фичи для качественного залипания
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(255,182,193,0.3)] transition-all duration-500 hover:scale-[1.02] border border-accent/20">
              <div className="text-5xl mb-4">🌀</div>
              <h3 className="text-2xl font-bold mb-4">Doom Scroll Engine™</h3>
              <p className="text-foreground/80 leading-relaxed">
                Наш AI проанализировал твой watch history на всех платформах и создал персональную ленту, 
                от которой физически невозможно оторваться. YouTube, TikTok, Reddit, Threads — 
                всё в одном бесконечном потоке блаженства.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(255,182,193,0.3)] transition-all duration-500 hover:scale-[1.02] border border-accent/20">
              <div className="text-5xl mb-4">😌</div>
              <h3 className="text-2xl font-bold mb-4">Mood2Waste</h3>
              <p className="text-foreground/80 leading-relaxed">
                Грустно? Вот тебе котики. Злишься? Держи драму в комментариях. Устал? ASMR-компиляция на 4 часа. 
                Мы не решаем твои проблемы — мы помогаем о них забыть.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(255,182,193,0.3)] transition-all duration-500 hover:scale-[1.02] border border-accent/20">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Procrastination Analytics</h3>
              <p className="text-foreground/80 leading-relaxed">
                Красивые графики того, как ты НЕ проводишь время с пользой. Отслеживай streak бездействия, 
                соревнуйся с друзьями, разблокируй ачивки: «Диванный Марафонец», «Ночной Скроллер», 
                «Мастер Кроличьих Нор».
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(255,182,193,0.3)] transition-all duration-500 hover:scale-[1.02] border border-accent/20">
              <div className="text-5xl mb-4">🐰</div>
              <h3 className="text-2xl font-bold mb-4">Rabbit Hole Mode</h3>
              <p className="text-foreground/80 leading-relaxed">
                Одна кнопка. Два часа минимум. Алгоритм сам решает, куда тебя унести — 
                ты просто наслаждаешься путешествием. Начинаешь с рецепта пасты, 
                заканчиваешь документалкой про глубоководных рыб.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-[0_10px_40px_rgba(255,182,193,0.3)] transition-all duration-500 hover:scale-[1.02] border border-accent/20 md:col-span-2">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4">Anti-Productivity Shield</h3>
              <p className="text-foreground/80 leading-relaxed">
                Автоматически блокирует уведомления от Slack, почты и всего, что пытается вернуть тебя 
                к «важным делам». Включается фраза: «Пользователь сейчас занят. Ничем.»
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/30 via-white/50 to-secondary/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
            Команда мечты (о безделье)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              <div className="text-6xl mb-4">🦥</div>
              <h3 className="text-2xl font-bold mb-2">Дмитрий "Димон" Лежаков</h3>
              <p className="text-sm text-accent-foreground font-semibold mb-3">CEO & Chief Procrastination Officer</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Бывший продакт-менеджер в Notion. Уволился, когда понял, что люди открывают приложение 
                для продуктивности и тут же идут в TikTok. Решил убрать посредника. 15,000+ часов экранного времени. 
                Рекорд — 47 часов без сна на марафоне One Piece.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              <div className="text-6xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-2">Алиса Скроллова</h3>
              <p className="text-sm text-accent-foreground font-semibold mb-3">Head of Algorithm</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Ex-YouTube рекомендации. Знает все грязные трюки, как превратить «ещё одно видео» в «уже утро?!». 
                Диссертация: «Нейронные сети для максимизации залипания». Не защитила — залипла.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-2">Кирилл Мемов</h3>
              <p className="text-sm text-accent-foreground font-semibold mb-3">Chief Content Curator</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Подписан на 2,847 телеграм-каналов. Модерирует 12 сабреддитов. Знает каждый мем до того, 
                как он станет мемом. Спит 3 часа в день, потому что «там как раз новый тренд начался».
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Василиса Подушкина</h3>
              <p className="text-sm text-accent-foreground font-semibold mb-3">UX Designer</p>
              <p className="text-foreground/80 text-sm leading-relaxed">
                Проектирует интерфейсы, которые обнимают. Каждая кнопка — приглашение остаться. 
                Каждый свайп — шаг в бесконечность. Пользователи не могут закрыть приложение. 
                Это не баг. Это фича.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">
            Тарифы для каждого уровня лени
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/20">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-3xl font-bold mb-2">Free</h3>
              <p className="text-sm text-foreground/60 mb-6">Начинающий Прокрастинатор</p>
              <div className="text-4xl font-bold mb-6">0₽</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>3 часа качественного залипания в день</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Базовый Doom Scroll</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Напоминания «Может хватит?» (которые легко отключить)</span>
                </li>
              </ul>
              <Button onClick={scrollToForm} className="w-full rounded-full py-6 bg-secondary hover:bg-secondary/90">
                Начать бесплатно
              </Button>
            </Card>

            <Card className="relative overflow-hidden p-8 bg-gradient-to-br from-accent via-secondary/80 to-primary backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(255,182,193,0.4)] transition-all duration-500 scale-105 border-4 border-accent-foreground/30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{backgroundSize: '1000px 100%'}} />
              <div className="relative text-4xl mb-4">⭐</div>
              <h3 className="text-3xl font-bold mb-2">Pro</h3>
              <p className="text-sm text-foreground/70 mb-6">Профессиональный Бездельник</p>
              <div className="text-4xl font-bold mb-6">299₽<span className="text-lg">/мес</span></div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Безлимитное залипание</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Все режимы включены</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Расширенная аналитика бесполезности</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Приоритетный доступ к новым кроличьим норам</span>
                </li>
              </ul>
              <Button onClick={scrollToForm} className="w-full rounded-full py-6 bg-foreground text-background hover:bg-foreground/90">
                Попробовать Pro
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-secondary/20">
              <div className="text-4xl mb-4">💀</div>
              <h3 className="text-3xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-foreground/60 mb-6">Точка Невозврата</p>
              <div className="text-2xl font-bold mb-6">По запросу</div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Для тех, кто официально сдался</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Интеграция с рабочим календарём (автоотмена всех встреч)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Персональный куратор контента</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Сертификат «Профессиональный Прокрастинатор»</span>
                </li>
              </ul>
              <Button onClick={scrollToForm} className="w-full rounded-full py-6 bg-muted hover:bg-muted/90">
                Связаться с нами
              </Button>
              <p className="text-xs text-center mt-3 text-foreground/50">
                Если вы спрашиваете — вы ещё не готовы
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-foreground">
            Наш офис залипания
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            Где-то на диване в центре Москвы
          </p>
          <Card className="rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/30 hover:border-accent/50 transition-all duration-300">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617644%2C55.755819&z=16&l=map&pt=37.617644,55.755819,pm2rdm"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="w-full"
            />
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 bg-gradient-to-br from-secondary/40 via-white/50 to-accent/30 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Напиши нам
          </h2>
          <p className="text-center text-foreground/60 mb-12">
            (или не напиши, мы поймём)
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-2xl border-2 border-accent/30">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Имя</label>
                <Input 
                  placeholder="Как тебя зовут?" 
                  className="rounded-full py-6 border-2 border-accent/30 focus:border-accent focus:shadow-[0_0_20px_rgba(255,205,178,0.3)] transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="rounded-full py-6 border-2 border-accent/30 focus:border-accent focus:shadow-[0_0_20px_rgba(255,205,178,0.3)] transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Расскажи, как ты тратишь жизнь..." 
                  rows={5}
                  className="rounded-3xl border-2 border-accent/30 focus:border-accent focus:shadow-[0_0_20px_rgba(255,205,178,0.3)] resize-none transition-all duration-300"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-full py-6 text-lg bg-accent hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(255,205,178,0.5)] transition-all duration-500"
              >
                Отправить (наверное)
              </Button>
              <p className="text-xs text-center text-foreground/50">
                Среднее время ответа: когда дойдут руки. Спойлер: не скоро.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-t from-primary/20 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-6 animate-float">∞</div>
          <h3 className="text-2xl font-bold mb-4">LifeWaster</h3>
          <div className="mb-6 space-y-2 text-sm text-foreground/70">
            <p>📧 waste@lifewaster.io</p>
            <p>📞 Мы не отвечаем на звонки</p>
            <p>📍 Где-то на диване, Россия</p>
          </div>
          <div className="flex justify-center gap-6 mb-8 text-sm text-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности (слишком длинная, не читай)
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Условия использования (там ничего важного)
            </a>
          </div>
          <p className="text-xs text-foreground/50">
            © 2026 LifeWaster. Все права защищены. Время — нет.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;