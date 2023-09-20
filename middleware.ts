import { NextRequest, NextResponse } from 'next/server'

// Already Built middleware from NextAuth.js to direct to Login page in specified routes
import middleware from 'next-auth/middleware'
export default middleware;


// Custom Middleware function:
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url))
// }

// Specific Routes for which middleware should work.
export const config = {
    // *: zero or more 
    // +: one or more
    //'?: zero or more
    matcher: ['/users/:id+', '/dashboard']
}