# Manufacturing Data Week 1

Android course app for the first week of manufacturing data modeling.

## Contents

- Seven-day database modeling course
- Manufacturing glossary and bilingual reading
- Local vocabulary list
- Paragraph bookmarks and notes
- Content structure for future weeks

## Build

```powershell
.\gradlew.bat :app:assembleDebug
```

APK output:

```text
app\build\outputs\apk\debug\app-debug.apk
```

## Content Updates

Course data lives in:

```text
app/src/main/assets/content-week1.js
```

Future weeks can follow the same schema and register another week payload in the asset bundle.
