# Customer Editing Guide — Ariana & Aaron Wedding Invitation (wax-seal-royale)

This template is a luxury royal wedding invitation designed with an interactive wax-seal envelope overlay, opening animation video, ambient swans background video, classical ambient music, live countdown timer, 6-event schedule timeline, Kovilakom Resort venue card with Google Maps & Calendar integration, dress code etiquette, wedding gift registries, and couple photo portrait.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week11/arian-aaron/editable/wedding-data.js)

### Couple Information
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: Names (`"Ariana"`, `"Aaron"`)
- `monogram`: Couple monogram (`"A&A"`)
- `subtitle`: Wedding quote with translation

### Wedding Date & Invitation Note
Edit `wedding` in `editable/wedding-data.js`:
- `eventName`: Header badge text (`"A&A"`)
- `dateLabel`: Date string for hero banner (`"January 16, 2027"`)
- `dateISO`: Event start ISO timestamp with timezone offset (`"2027-01-16T15:30:00+05:30"` for IST). Drives live countdown timer and Google Calendar link.
- `invitationNote`: Main welcome message text

### Schedule of Events
Edit `schedule` array in `editable/wedding-data.js`:
- Six timed event rows:
  - 3:30 PM – Guest Arrival
  - 4:30 PM – Wedding Ceremony
  - 5:30 PM – Mocktail Hour
  - 7:00 PM – Reception
  - 7:30 PM – Dinner
  - 8:00 PM – Party & Dance

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: Resort name (`"Kovilakom Resort"`)
- `address`: Location (`"Muhamma, Kerala, India"`)
- `mapsUrl`: Google Maps direction URL

### Dress Code & Gift Registry
Edit `details` & `registry` in `editable/wedding-data.js`:
- `dressCode`: Dress code guideline
- `registry.items`: Links to Honeyfund and Amazon registries

### Media & Assets
Replace files directly in `editable/assets/` or update `media` in `wedding-data.js`:
- `photo1`: Couple photograph (`editable/assets/photo1.jpg`)
- `overlayImage`: Wax-seal envelope graphic
- `sealVideo`: Wax-seal breaking/opening MP4
- `heroVideo`: Ambient background video
- `audio`: Background soundtrack

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and replace media in `editable/assets/`.
2. Do not modify bundled Tilda core scripts in `js/` or styling in `css/tilda-*`.
3. Custom styling belongs in `css/custom.css`.
4. Keep ISO date strings with proper timezone offsets (`+05:30` for IST).
5. Validate changes with `node --check editable/wedding-data.js`.
