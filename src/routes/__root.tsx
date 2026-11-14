import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return <div className="container-page flex min-h-[65vh] flex-col items-start justify-center gap-5">
    <p className="meta">404 / not found</p>
    <h1 className="text-5xl font-medium">This page doesn't exist.</h1>
    <Link to="/" className="link-rule">Return to portfolio ↗</Link>
  </div>;
}

function ErrorComponent({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return <div className="container-page flex min-h-[65vh] flex-col items-start justify-center gap-5">
    <p className="meta">Something went wrong</p>
    <h1 className="text-4xl font-medium">The page couldn't load.</h1>
    <button type="button" className="link-rule" onClick={() => { router.invalidate(); reset(); }}>Try again ↗</button>
  </div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}>
    <HeadContent />
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-4">
      Skip to content
    </a>
    <Navbar />
    <main id="main"><Outlet /></main>
    <Footer />
  </QueryClientProvider>;
}
