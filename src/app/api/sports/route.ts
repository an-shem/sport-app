import { db } from '@/db';
import { sportsTable } from '@/db/schema';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

export async function GET() {
  const sports = await db.select().from(sportsTable);
  return NextResponse.json(sports);
}

const SportInsertSchema = z.object({
  title: z
    .string()
    .min(3, 'Title should be at least 3 character long')
    .max(80, 'Title should be no longer than 80 character'),
  image: z.string().refine(
    (val) => {
      try {
        new URL(val);
        return true;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        return false;
      }
    },
    { message: 'Invalid URL of image' }
  ),
  description: z
    .string()
    .min(3, 'Title should be at least 3 character long')
    .max(1000, 'Title should be no longer than 500 character'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, image, description } = SportInsertSchema.parse(body);
    const [sport] = await db.insert(sportsTable).values({ title, image, description }).returning();

    return NextResponse.json(sport, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid inputs',
          details: error.issues,
        },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
