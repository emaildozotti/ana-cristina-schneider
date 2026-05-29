import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 2 Pain Points)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'Você dá conta de tudo.',
  headingEm: 'Mas a que custo?',
  pains: [
    'O tribunal da mente. A sensação de que nunca é o bastante. Autocobrança implacável que vira julgamento constante. Você revisa um e-mail simples cinco vezes ou apaga e reescreve mensagens no WhatsApp com medo de errar ou de parecer inadequada.',
    'A armadilha do controle. A ilusão de que se você soltar as rédeas, tudo desmorona. Inflexibilidade silenciosa que gera irritação profunda com pequenos imprevistos. Até o seu final de semana é cronometrado e você não consegue descansar no domingo sem culpa.',
    'O labirinto da dúvida. Indecisão crônica que paralisa. Horas sofrendo pra tomar decisões simples do cotidiano, desde escolher um prato até dar um direcionamento importante. O medo de fazer a escolha errada faz com que você prefira adiar.',
    'A fachada que ninguém vê cair. De dia você sorri, resolve, organiza, escuta todo mundo. À noite você fecha a porta do banheiro e chora em silêncio pra não acordar a casa. No outro dia passa café, sorri e ninguém imagina.',
  ],
  transition: 'Esse cansaço silencioso tem nome clínico. E tem um caminho que não passa por mais uma planilha de hábitos.',
}
// ════════════════════════════════════════════════════════════════════

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {COPY.pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex gap-5 p-6 md:p-8 group transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-bg-warm)',
                  borderRadius: '12px 4px 12px 4px',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 40%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'
                }}
              >
                <span
                  className="shrink-0 eyebrow-ultra"
                  style={{
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    paddingTop: '2px',
                    opacity: 0.6,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                  }}
                >
                  {pain}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <div
              style={{
                width: '2px',
                height: '60px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.transition}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
