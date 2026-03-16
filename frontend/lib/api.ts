export async function getProjects() {
  const res = await fetch("http://127.0.0.1:8000/projects");

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}