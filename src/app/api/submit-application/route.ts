import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Get Google Sheets credentials from environment
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

    if (!GOOGLE_SHEET_ID || !GOOGLE_API_KEY) {
      console.warn('Google Sheets credentials not configured. Storing in memory only.');
      // For now, just return success - you can configure Google Sheets later
      return NextResponse.json(
        { success: true, message: 'Application received' },
        { status: 200 }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const values = [[
      timestamp,
      data.studentName,
      data.fatherName,
      data.motherName,
      data.email,
      data.phone,
      data.dob,
      data.currentClass,
      data.applyingForClass,
      data.address,
      data.city,
      data.state,
      data.pincode,
    ]];

    // Send to Google Sheets using Google Sheets API
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1!A:M:append?key=${GOOGLE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values,
          majorDimension: 'ROWS',
        }),
      }
    );

    if (!response.ok) {
      console.error('Google Sheets API error:', response.statusText);
      throw new Error('Failed to save to Google Sheets');
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
