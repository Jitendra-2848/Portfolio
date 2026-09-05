import { NextResponse } from "next/server";

export const revalidate = 300; // Cache for 5 minutes to stay fresh

export async function GET() {
  try {
    const username = "Jitendra-2848";

    // 1. Fetch User Profile
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "Portfolio-App",
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });

    const userData = userRes.ok ? await userRes.json() : null;

    // 2. Fetch Contributions Data from public contributions API
    const contribRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 300 }, signal: AbortSignal.timeout(5000) }
    );

    const contribData = contribRes.ok ? await contribRes.json() : null;

    // 3. Process 1 FULL YEAR of contributions up to now (~53 weeks = 371 days)
    let days: { date: string; level: number }[] = [];
    let totalYear: number | null = null;

    if (contribData?.contributions && Array.isArray(contribData.contributions)) {
      totalYear =
        contribData.total?.lastYear ??
        contribData.contributions.reduce((acc: number, d: any) => acc + (d.count || 0), 0);

      // All days for 1 full year up to today
      days = contribData.contributions.map((d: any) => ({
        date: d.date,
        level: typeof d.level === "number" ? d.level : 0,
      }));
    }

    return NextResponse.json({
      success: true,
      profile: {
        repos: userData?.public_repos ?? null,
        followers: userData?.followers ?? null,
        following: userData?.following ?? null,
        location: userData?.location ?? null,
        bio: userData?.bio ?? null,
      },
      contributions: {
        total: totalYear,
        days: days,
      },
      latestCommit: null,
    });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json({
      success: false,
      profile: {
        repos: null,
        followers: null,
        following: null,
        location: null,
        bio: null,
      },
      contributions: {
        total: null,
        days: [],
      },
      latestCommit: null,
    });
  }
}
