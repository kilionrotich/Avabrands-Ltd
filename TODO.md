# TODO - Avabrands theme update

## 1) Global CSS
- [x] Update `frontend/src/index.css` to apply pure black background to `html`, `body`, and `main` containers.
- [x] Ensure default text color is bold yellow (#FFD700) globally.
- [x] Ensure metallic gradient uses #C0C0C0 -> #808080 and includes text-fill technique.


## 2) Component updates (remove teal hardcoding)
- [ ] Update `frontend/src/components/Header.jsx` navbar/link/button colors to match black/yellow.
- [ ] Update `frontend/src/components/Hero.jsx` cards, headings, paragraphs, CTAs to match black/yellow/metallic.
- [ ] Update `frontend/src/components/Services.jsx` all backgrounds/texts.
- [ ] Update `frontend/src/components/Portfolio.jsx` section backgrounds, filters, cards, modal.
- [ ] Update `frontend/src/components/Rfq.jsx` form container + inputs + messages + submit button.
- [ ] Update `frontend/src/components/Contact.jsx` all backgrounds/texts.
- [ ] Update `frontend/src/components/Footer.jsx` borders/text.

## 3) Status badges
- [ ] Ensure any Completed/Active/Open badges use `#FFD700` bg and `#000000` text (reuse `.status-badge` if appropriate).

## 4) Verify + deploy
- [ ] Run `cd frontend && npm run build`.
- [ ] Fix any build/lint issues.
- [ ] Commit: `style: apply global black/yellow theme and finalize CSS logo`.

