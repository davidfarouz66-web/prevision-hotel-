const SUPABASE_URL = process.env.SUPABASE_URL || "https://aykbzbeerstjmhworody.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "sb_publishable_vioHpKZRfR_EcTgDuzyBJQ_l9xNxV5I";

export default async function handler(request, response) {
  try {
    const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/app_status`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates"
      },
      body: JSON.stringify({
        id: "odem-event",
        last_active: new Date().toISOString()
      })
    });

    if (!supabaseResponse.ok) {
      response.status(supabaseResponse.status).json({ ok: false });
      return;
    }

    response.status(200).json({ ok: true });
  } catch (error) {
    response.status(500).json({ ok: false });
  }
}
