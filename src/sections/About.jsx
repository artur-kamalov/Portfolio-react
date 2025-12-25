import React from 'react'

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Чистый код",
    description:
      "Пишу поддерживаемый и масштабируемый код, который проходит проверку временем.",
  },
  {
    icon: Rocket,
    title: "Производительность",
    description:
      "Улучшаю скорость работы приложений и создаю молниеносный пользовательский интерфейс.",
  },
  {
    icon: Users,
    title: "Командная работа",
    description: "Тесно взаимодействую с командами для воплощения идей в жизнь.",
  },
  {
    icon: Lightbulb,
    title: "Инновационный подход",
    description:
      "Актуальный стек технологий и следование передовым стандартам разработки.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Строим будущее,{" "}
              <span className="font-serif italic font-normal text-white">
                 компонент за компонентом.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Я опытный Web разработчик: уже более 4 лет я создаю значимые цифровые продукты. Всё началось с простого интереса к тому, как работает веб, а сегодня я обладаю глубокими знаниями в области современного фронтенда и искренне люблю свое дело.
              </p>
              <p>
                Специализируюсь на стеке Angular и TypeScript: от простых лендингов до сложных систем корпоративного уровня. Сочетаю глубокие технические навыки с развитым чувством дизайна и пониманием UX.
              </p>
              <p>
                В свободное от программирования время я изучаю новые технологии, активно развиваю свои hard скиллы и слежу за трендами в индустрии, чтобы всегда быть на передовой веб-разработки.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                «Моя миссия — создавать такой цифровой опыт, который будет не просто функциональным, но и по-настоящему приятным: продукты, которыми пользователям нравится пользоваться, а разработчикам — легко поддерживать».
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About