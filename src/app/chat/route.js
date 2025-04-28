import { NextResponse } from "next/server";

export async function POST(request) {
    const { message } = await request.json();

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message}]
            }),
        });

        const data = await response.json();
        const reply = data.choices[0].message.content.trim();
        return NextResponse.json({ message: reply});
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error communicating with AI'}, { status: 500})
    }
}