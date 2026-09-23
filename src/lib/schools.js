import { supabase } from "./supabase";

export async function getSchoolsByState(state, searchText = "") {
  if (!supabase) {
    throw new Error("Supabase is not configured.");
  }

  let query = supabase
    .from("schools")
    .select(
      "id, school_name, state, district, block, village, pin_code, board, udise_code",
    )
    .eq("state", state)
    .order("school_name", { ascending: true })
    .limit(100);

  if (searchText.trim()) {
    query = query.ilike("school_name", `%${searchText.trim()}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw error;
  }

  return data || [];
}
