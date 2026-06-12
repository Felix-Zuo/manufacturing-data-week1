# Content Update Contract

The app reads course data from JavaScript assets under:

```text
app/src/main/assets/
```

The current module is registered in `content-library.js` through `window.COURSE_LIBRARY`.

## Module Payload

Each week payload should include:

- `id`
- `title`
- `subtitle`
- `duration`
- `level`
- `outcome`
- `programGoal`
- `baselineDiagnosis`
- `planPrinciples`
- `learningRhythm`
- `recordTemplates`
- `roadmap`
- `minimumOutcomes`
- `portfolioProjects`
- `interviewBank`
- `lessons`
- `lessonEnglishReviews`
- `glossary`
- `bilingualArticle`

## Lesson Payload

Each lesson should include:

- `id`
- `label`
- `title`
- `duration`
- `summary`
- `goals`
- `sections`

## Section Payload

Each section can include:

- `heading`
- `paragraphs`
- `bullets`
- `tasks`
- `example`
- `warning`
- `checkpoint`
- `code`

## Adding Future Content

1. Add a new asset file or extend `content-library.js`.
2. Append the module object to `window.COURSE_LIBRARY.weeks`.
3. Update `currentWeekId` when the packaged app should open a new module by default.
4. Keep paragraph and lesson ids stable after release so saved notes can still point to the same content.
