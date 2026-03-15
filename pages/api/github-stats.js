export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.github.com/users/Harshit-Arya-07",
      {
        headers: {
          "User-Agent": "harshitarya-portfolio",
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");
    return res.status(200).json({
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
    });
  } catch {
    return res.status(503).json({ error: "GitHub API unavailable" });
  }
}
