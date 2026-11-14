# Step 1 Question Bank — GitHub Pages website

A simple, self-contained practice site with **45 original Step 1-style questions** covering cardiology, nephrology, and pulmonology. Each question has five options. Picking an answer immediately reveals whether it was correct, a high-yield takeaway, and a separate explanation for **each of the five choices**. Previous/Next navigation and a jump menu are included.

The quiz saves selected answers and progress in the **same browser and device**, using `localStorage`. It does not use a server, create accounts, or sync between devices.

## Easiest setup: upload through GitHub's website (no terminal)

1. Download and unzip the project ZIP from ChatGPT.
2. Sign into [github.com](https://github.com).
3. On the GitHub home page click **+ → New repository** (or visit <https://github.com/new>).
4. Name the repository `step1-question-bank`, choose **Public**, and click **Create repository**. It is safest to create a new repository rather than edit an existing project by accident.
5. Inside this new repository, click **uploading an existing file** (if the empty repository shows that link), or **Add file → Upload files**.
6. Upload **`index.html` and `questions.js`** from inside the unzipped `step1-question-bank` folder. The files must be in the repository **root**, not in a nested folder. You can also upload this README.
7. Click **Commit changes** (GitHub may show **Commit changes...** and then a confirmation dialog).
8. Go to **Settings → Pages**. Under **Build and deployment** select **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, then click **Save**.
9. Return to **Settings → Pages** and click **Visit site** once GitHub has published it. The usual site URL is `https://YOUR-USERNAME.github.io/step1-question-bank/` (replace YOUR-USERNAME with your own username). GitHub Pages may need a short while to deploy.

Official documentation: <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>

## Preview on your own computer

Keep `index.html` and `questions.js` in the same folder. Double-click `index.html` to open it in a browser. No install or Node/npm commands are needed.

## How to add questions 46 onward

Only edit `questions.js`. New question objects should be added **inside** the `window.STEP1_QUESTIONS = [ ... ];` array, separated by commas, with a new unique number for `id`.

Example object (make sure to separate from the previous object with a comma):

```js
{
  id: 46,
  topic: 'Cardiology',
  stem: 'A patient presents with ...',
  labs: [['Serum sodium', '140 mEq/L', '135–145 mEq/L']], // optional
  prompt: 'Which mechanism explains the findings?',
  options: ['Choice A', 'Choice B', 'Choice C', 'Choice D', 'Choice E'],
  correct: 1, // 0=A, 1=B, 2=C, 3=D, 4=E
  explanations: [
    'Why A is wrong.',
    'Why B is correct.',
    'Why C is wrong.',
    'Why D is wrong.',
    'Why E is wrong.'
  ],
  takeaway: 'A concise explanation of the central concept.'
}
```

On GitHub, go to the repository, open `questions.js`, click the pencil/edit icon, add the next batch, and **Commit changes**. The website automatically uses all valid question objects. For a large batch, it is easier to have ChatGPT generate a new complete `questions.js` file and upload it, replacing the old file. Keep a backup of the old file first.

## Files

- `index.html`: all website layout, styles, navigation, and automatic checking.
- `questions.js`: the editable content for the current 45 questions.
- `README.md`: these instructions.

## Troubleshooting

- **Blank question area:** make sure both `index.html` and `questions.js` are in the same folder and their names match exactly. Open the browser developer console for detailed errors.
- **404 on GitHub Pages:** confirm the files are in the selected root folder, branch is `main`, and the site has finished publishing.
- **Answers did not transfer to another device:** that's expected. The site stores progress locally in each browser, not on GitHub.
- **Old question content remains after upload:** hard-refresh your browser and make sure the new `questions.js` was committed.

## Attribution

These are original educational practice questions informed by concepts in the supplied Bootcamp review PDFs. They are **not** official NBME or USMLE items and are **not** affiliated with or endorsed by NBME, USMLE, or Bootcamp. PDFs were **not** included in the published project. Verify clinical and exam content independently before relying on it.
