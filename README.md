# Pronoun Studio

A spacious Mexican Spanish learning site for mastering object pronouns, reflexive structures, and the core Spanish tenses.

Pronoun Studio is built as a serious self-study experience: lessons are separated from exams, explanations are deep, examples are practical, and the interface stays calm enough for focused learning.

## What It Teaches

Pronoun Studio currently covers six major lesson areas:

- Direct object pronouns
- Indirect object pronouns
- Combined direct and indirect pronouns
- Reflexive pronouns
- Reflexive verbs
- The top 12 Spanish tenses

Each lesson includes mental models, usage rules, common mistakes, Mexican Spanish notes, examples, and checkpoints.

## Pages

The app is split into three simple pages:

- `index.html` - home and overview
- `lessons.html` - full lessons and reference panels
- `exams.html` - selectable topic and level-based exams

## Features

- Light-first professional education design
- Optional dark mode with local preference memory
- Local P22 Mackinac Pro display typography
- Deep tense lessons with examples, avoid notes, practice notes, and checkpoints
- Lesson-specific examples instead of disconnected global examples
- Exam selector by topic and level
- Five exam levels per topic
- At least 40 generated mixed-format questions per topic level
- Multiple question types:
  - Multiple choice
  - Spanish to English
  - English to Spanish
  - Error correction
  - Fill in the blank
- Progress, streak, exam choice, and theme stored locally in the browser

## Running Locally

No build step is required. This is a static HTML, CSS, and JavaScript app.

Open:

```text
index.html
```

Or open `lessons.html` / `exams.html` directly.

## Project Structure

```text
.
├── index.html
├── lessons.html
├── exams.html
├── styles.css
├── app.js
└── assets/
    ├── pronoun-workspace.png
    └── fonts/
        ├── P22MackinacPro-Book.otf
        ├── P22MackinacPro-Medium.otf
        └── P22MackinacPro-Bold.otf
```

## Design Direction

The interface combines a spacious Apple-like learning flow with the warmth of modern education platforms. It uses soft cream backgrounds, Okulistik-inspired educational accents, rounded geometry, and restrained cards so the content remains the focus.

## Notes

The app stores progress in `localStorage`; no account or backend is required. All lesson content and exam generation currently live in `app.js`.
