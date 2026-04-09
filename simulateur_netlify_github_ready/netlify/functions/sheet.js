exports.handler = async function () {
  const sheetId = "1tiiiWK4RQM_vm97ijUcbovVLDEw1ZwMeiu8P4LK_niY";
  const tabName = "BDD_trimestrielle";
  const url = `https://opensheet.elk.sh/${sheetId}/${encodeURIComponent(tabName)}?t=${Date.now()}`;

  try {
    const res = await fetch(url, {
      headers: { "accept": "application/json" }
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify({ error: `HTTP ${res.status}`, tabName })
      };
    }

    const rows = await res.json();

    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store"
      },
      body: JSON.stringify({ tabName, rows })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "content-type": "application/json; charset=utf-8" },
      body: JSON.stringify({ error: String(error), tabName })
    };
  }
};
