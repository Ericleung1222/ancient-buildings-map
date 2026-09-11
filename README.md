# East Asian Timber Architecture — V1.5

V1.5 updates:
- Location hierarchy renamed: LOCATION → Main Regions → Country → Region.
- Main Regions now uses the same multi-select include/exclude treatment as Country.
- Added numeric filters for 樓層數, 出跳, 長, 高 in Dimensions.
- GIS buildings without 世紀(半) data are shown in black.
- Result detail fields now include Address plus the new dimension values.
- Keeps V1.4 GIS performance improvements and virtualized Database.

## Local test
Run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.
