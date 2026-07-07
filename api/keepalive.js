const SUPABASE_URL = process.env.SUPABASE_URL || "https://aykbzbeerstjmhworody.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "sb_publishable_vioHpKZRfR_EcTgDuzyBJQ_l9xNxV5I";
const APP_STATE_ID = "odem-event";

export default async function handler(request, response) {
  if (!["GET", "POST", "HEAD"].includes(request.method)) {
    response.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  try {
    const now = new Date().toISOString();
    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/app_status?on_conflict=id`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation"
      },
      body: JSON.stringify({
        id: APP_STATE_ID,
        last_active: now
      })
    });

    if (!supabaseResponse.ok) {
      const details = await supabaseResponse.text();
      response.status(supabaseResponse.status).json({ ok: false, details });
      return;
    }

    response.setHeader("Cache-Control", "no-store");
    response.status(200).json({ ok: true, checkedAt: now });
  } catch (error) {
    response.status(500).json({ ok: false, error: "keepalive_failed" });
  }
}
