import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL_UNPOOLED!, {
  ssl: { rejectUnauthorized: false },
});

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id;
  `;
  return data;
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'DB error' }, { status: 500 });
  }
}
