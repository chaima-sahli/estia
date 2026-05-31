import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET as string

export function signToken(userId: string): string {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '7d',
  } as jwt.SignOptions)
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}

export function getTokenFromRequest(req: NextRequest): string | null {
  const authHeader = req.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  const token = req.cookies.get('token')?.value
  return token || null
}

export async function getUserFromRequest(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req)
    if (!token) return null
    const decoded = verifyToken(token) as { id: string }
    return decoded
  } catch {
    return null
  }
}