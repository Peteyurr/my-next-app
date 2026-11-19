# CLAUDE_CODE_RULES.md — peteyurr.com

Apply all of these every session.

1. After every file write, immediately run `ls` on that directory.
2. After any dev server restart, confirm it compiled successfully.
3. Before deleting any file, explain what it does and wait for confirmation.
4. Before any architectural decision, flag it before writing code.
5. Never report success without verifying.
6. Read DESIGN.md before any UI work. Use the theme tokens/classes, never raw hex values in components.
7. All redesign work happens on the `redesign` branch. Never commit to `main` directly.
8. Run only ONE build or dev server at a time. Kill old ones before starting a new one.
9. The project lives in ~/Developer/peteyurr-site (not iCloud-synced Desktop). Don't move it back.
10. Keep each change small: one prompt = one focused change, verified, then committed.
