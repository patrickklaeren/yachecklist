# ✈️ YaChecklist (Yet Another Checklist)

Welcome to the **YaChecklist** project! 🛬

I got fed up with the existing checklist websites. Wanted something lightweight and easy to use. This is MIT licensed, do with it what you want under the terms of MIT.

Checklists are hydrafted via JSON files.

## 📁 File Structure

```
├── index.html               # Homepage that lists all aircraft
├── viewer.html              # Displays checklist from JSON
├── /scripts                 # JS logic to load and render data
├── /styles                  # Basic styling
├── /checklists              # JSON files per aircraft
│   ├── index.json           # List of aircraft
```

---

## ✍️ How to add a checklist

1. Create a new JSON file in `/checklists/` like this:

```json
{
  "aircraft": "Cessna 172",
  "checklists": [
    {
      "title": "Preflight",
      "items": ["Walkaround complete", "Fuel checked", "Pitot cover removed"]
    }
  ]
}
```

2. Add it to `checklists/index.json`:

```json
[
  { "file": "B737NG.json", "name": "Boeing 737NG" },
  { "file": "C172.json", "name": "Cessna 172" }
]
```

That’s it! Your aircraft will now appear on the homepage. 🛫

## 🤝 Contributions welcome

Have another aircraft you’d like to add? Found a bug? Open an issue or PR!

Happy flying! ✈️🛫🛩️

---

**Disclaimer:** this is for flight simulation use, not intended for any real world operations. I am not responsible for any inaccuracies or other discrepencies on any checklist or data in this repository.