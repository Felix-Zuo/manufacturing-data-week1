# Content Update Contract

The app reads course data from JavaScript assets under:

```text
app/src/main/assets/
```

The current week is registered in `content-week1.js` through `window.COURSE_LIBRARY`.

## Week Payload

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

## Adding a Future Week

1. Add a new asset file, for example `content-week2.js`.
2. Append the week object to `window.COURSE_LIBRARY.weeks`.
3. Update `currentWeekId` when the packaged app should open the new week by default.
4. Keep paragraph and lesson ids stable after release so saved notes can still point to the same content.
