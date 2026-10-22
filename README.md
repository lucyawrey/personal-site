# Lucy Awrey's Personal Website

This repo is the source code for my (Lucy Awrey) personal website located at https://lucyawrey.com.

## Getting Started

To run the development server:

```bash
pnpm install
pnpm run dev
```

## Built With

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [tailwindcss](https://tailwindcss.com)
- [MobX](https://mobx.js.org)

## Updating content

- Page copy (intro, projects, experience, skills, section headings) lives in `src/content/copy.yml`. Keep it in step with the master resume. Its shape is typed in `src/content/copy.ts`.
- To update the resume PDF, download it from Google Docs and replace `public/Lucy_Awrey_Resume.pdf` (keep the same file name).
- Terminal text and commands live in `src/content/text.json` and `src/utilities/commands.ts`.

## Development Todo

- [ ] Add screenshots or images to the project cards.
- [ ] Test website for accessibility and implement needed changes.

## AI usage

This project uses AI tools to assist with development. This means primarily code and tooling.
