import { type MiddlewareConfig } from "next/server";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import { isTokenExpired } from "./utils/auth";

const publicRoutes = [
  {
    path: "/sign-in",
    whenAutenticated: "redirect",
  },
  {
    path: "/register/candidate",
    whenAutenticated: "redirect",
  },
  {
    path: "/register/company",
    whenAutenticated: "redirect",
  },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTER = "/sign-in";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const publicRoute = publicRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get("token")?.value;

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTER;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAutenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && isTokenExpired(authToken)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/sign-in";

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.delete("token");

    return response;
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
