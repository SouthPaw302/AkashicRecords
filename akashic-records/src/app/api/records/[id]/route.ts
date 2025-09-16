import { NextRequest, NextResponse } from 'next/server';
import { recordService } from '@/lib/supabase';

// GET /api/records/[id] - Retrieve a specific record
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const record = await recordService.getRecord(id);

    return NextResponse.json({
      success: true,
      data: record
    });
  } catch (error) {
    console.error('Error fetching record:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch record' },
      { status: 500 }
    );
  }
}

// PUT /api/records/[id] - Update a specific record
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, category, content, cosmicLevel } = body;

    const updateData: {
      title?: string;
      category?: string;
      content?: string;
      cosmicLevel?: number;
    } = {};
    if (title) updateData.title = title;
    if (category) updateData.category = category;
    if (content) updateData.content = content;
    if (cosmicLevel !== undefined) updateData.cosmicLevel = cosmicLevel;

    const updatedRecord = await recordService.updateRecord(id, updateData);

    return NextResponse.json({
      success: true,
      data: updatedRecord
    });
  } catch (error) {
    console.error('Error updating record:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update record' },
      { status: 500 }
    );
  }
}

// DELETE /api/records/[id] - Delete a specific record
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await recordService.deleteRecord(id);

    return NextResponse.json({
      success: true,
      message: 'Record deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting record:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete record' },
      { status: 500 }
    );
  }
}