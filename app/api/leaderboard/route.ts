import { NextResponse } from 'next/server';

const EXTERNAL_API_BASE = 'https://query.idleclans.com/api';
const CACHE_MAX_AGE = 3600;
const STALE_WHILE_REVALIDATE = 600;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const leaderboardName = searchParams.get('leaderboardName');
    const name = searchParams.get('name');
    const startCount = searchParams.get('startCount') ?? '1';
    const maxCount = searchParams.get('maxCount') ?? '100';

    if (!leaderboardName || !name) {
        return NextResponse.json(
            { error: 'leaderboardName and name parameters are required' },
            { status: 400 }
        );
    }

    const upstreamUrl = new URL(
        `${EXTERNAL_API_BASE}/Leaderboard/top/${encodeURIComponent(leaderboardName)}/${encodeURIComponent(name)}`
    );
    upstreamUrl.searchParams.set('startCount', startCount);
    upstreamUrl.searchParams.set('maxCount', maxCount);

    try {
        const upstream = await fetch(upstreamUrl.toString(), {
            next: { revalidate: CACHE_MAX_AGE },
        });

        if (!upstream.ok) {
            return NextResponse.json(
                { error: `Upstream API error: ${upstream.status}` },
                { status: upstream.status }
            );
        }

        const data = await upstream.json();

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
            },
        });
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to fetch leaderboard data' },
            { status: 500 }
        );
    }
}
