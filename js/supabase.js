/* ==========================================================
    HOLLOWMIND
    supabase.js

    Supabase Backend Connection
========================================================== */

"use strict";

const SUPABASE_URL =
    "https://qpebdkmqllhykoyheano.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_98N7ZKaxMuZHvdNSlNCOUw_WBHqfdyF";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

console.log("Supabase connected");