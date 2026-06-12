# Factory Data Pocket Lab

Android pocket lab for manufacturing data modeling, traceability, and operations analysis concepts.

The project is packaged as a small offline WebView app. It is intentionally generic: all examples use synthetic factory data concepts and do not include personal learning records, private company data, or job-search material.

## Contents

- Manufacturing data-modeling walkthrough
- BOM, inventory, supplier, lot, routing, and source-reference examples
- Manufacturing, API, RAG, async-task, and reliability glossary
- Bilingual reading material
- Local vocabulary list and personal notes
- Paragraph bookmarks and notes
- Content structure for future modules

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
app/src/main/assets/content-library.js
```

Future modules can follow the same schema and register another payload in the asset bundle.
