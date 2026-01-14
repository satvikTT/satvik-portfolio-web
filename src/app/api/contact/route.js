import fs from 'fs'
import path from 'path'

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing fields' }),
        { status: 400 }
      )
    }

    const filePath = path.join(process.cwd(), 'contacts.csv')

    const row = `"${name}","${email}","${message.replace(/"/g, '""')}","${new Date().toISOString()}"\n`

    // create file with headers if not exists
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(
        filePath,
        `"Name","Email","Message","Date"\n`
      )
    }

    fs.appendFileSync(filePath, row)

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500 }
    )
  }
}
