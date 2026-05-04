# Example request to create a match
curl -X POST http://localhost:3000/api/matches \
  -H "Authorization: Bearer $MATCHES_WRITE_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "id":"01HFEXAMPLE",
    "game":"valorant",
    "tournament":"Uniliga Woche 5",
    "format":"First-to-1",
    "date":"2026-05-04T18:00:00Z",
    "team1":{"name":"Engines Stuttgart","score":13},
    "team2":{"name":"KIT SC Esports","score":7}
  }'