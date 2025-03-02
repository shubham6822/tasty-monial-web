import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const publicRoutes = ["/", "/login", "/signup"];
  const token = req.cookies.get("token")?.value; // Read token from cookies

  // Check if the user is trying to access a private route
  const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

  if (!isPublicRoute && !token) {
    // Redirect to home if token is missing
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Allow request to proceed
}

// Apply middleware to all routes except static files
export const config = {
  matcher: "/((?!_next|favicon.ico|api).*)",
};
