'use client'

import { useState } from 'react'
import { contradictions, type Contradiction } from '@/data/contradictions'

const STAGGER_MS = 140
const CARD_ANIM_MS = 600

export default function Page() {
  const [selectedId, setSelectedId] = useState(contradictions[0].id)
  const [resolved, setResolved] = useState(false)

  const selected = contradictions.find((c) => c.id === selectedId) as Contradiction

  function select(id: string) {
    setSelectedId(id)
    setResolved(false)
  }

  // The note, then the button, enter after the last card has landed.
  const noteDelay = selected.testimonies.length * STAGGER_MS + 200
  const buttonDelay = noteDelay + CARD_ANIM_MS

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
      <header className="mb-12 border-b border-rule pb-8 lg:mb-16">
        <p className="mb-3 text-xs font-medium tracking-[0.2em] text-accent uppercase">
          Chronicle of a Death Foretold
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl">The Contradiction Engine</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Twenty-seven years after the murder of Santiago Nasar, the witnesses
          still do not agree — this file holds their accounts side by side, as
          given, without correction.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        <aside>
          <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-ink-soft uppercase">
            Questions of fact
          </h2>
          <ul className="flex flex-col">
            {contradictions.map((c) => {
              const active = c.id === selectedId
              return (
                <li key={c.id} className="border-b border-rule last:border-b-0">
                  <button
                    type="button"
                    onClick={() => select(c.id)}
                    aria-current={active ? 'true' : undefined}
                    className={`w-full border-l-2 py-3 pl-4 text-left font-serif text-lg leading-snug transition-colors ${
                      active
                        ? 'border-accent text-ink'
                        : 'border-transparent text-ink-soft hover:text-ink'
                    }`}
                  >
                    {c.question}
                  </button>
                </li>
              )
            })}
          </ul>
        </aside>

        <main>
          {/* Remounting on question change restarts the staggered entrance. */}
          <div key={selected.id}>
            <h2 className="animate-rise mb-8 font-serif text-2xl lg:text-3xl">
              {selected.question}
            </h2>

            <div
              className={`flex flex-col gap-5 transition-opacity duration-700 ${
                resolved ? 'opacity-40' : ''
              }`}
            >
              {selected.testimonies.map((t, i) => (
                <article
                  key={t.witness}
                  className="animate-rise border border-rule bg-card px-6 py-5"
                  style={{ animationDelay: `${i * STAGGER_MS}ms` }}
                >
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-sm">
                      <span className="font-semibold">{t.witness}</span>
                      <span className="text-ink-soft">, {t.role}</span>
                    </p>
                    <p className="font-mono text-xs text-ink-soft">
                      p. {t.page}
                      {t.yearsAfter !== undefined && (
                        <span> · {t.yearsAfter} years after</span>
                      )}
                    </p>
                  </div>
                  <blockquote className="font-serif text-lg leading-relaxed">
                    {t.quote}
                  </blockquote>
                </article>
              ))}
            </div>

            <p
              className="animate-rise mt-8 max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink-soft"
              style={{ animationDelay: `${noteDelay}ms` }}
            >
              {selected.note}
            </p>

            <div
              className="animate-rise mt-10"
              style={{ animationDelay: resolved ? '0ms' : `${buttonDelay}ms` }}
              aria-live="polite"
            >
              {resolved ? (
                <div className="border-t border-rule pt-6">
                  <p className="font-serif text-lg italic">
                    The record does not permit resolution.
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    Each account remains in the file as it was given.
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setResolved(true)}
                  className="border border-ink px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:bg-ink hover:text-paper"
                >
                  Resolve this
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
