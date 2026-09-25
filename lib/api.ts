import { GalleryItem } from "@/types/api";

const API_BASE_URL = process.env.API_URL || "http://localhost:4000";

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        Accept: "application/json",
      },
      ...options,
    });
  } catch {
    throw new Error(
      `Server connection failed for ${endpoint}. Is your backend running?`,
    );
  }

  if (!response.ok) {
    throw new Error(
      `Server returned status ${response.status} for ${endpoint}`,
    );
  }

  try {
    return await response.json();
  } catch {
    throw new Error(`Response from ${endpoint} was not valid JSON`);
  }
}

export async function getGallery(): Promise<GalleryItem[]> {
  return apiFetch<GalleryItem[]>("/gallery", {
    next: { revalidate: 3600 },
  });
}
