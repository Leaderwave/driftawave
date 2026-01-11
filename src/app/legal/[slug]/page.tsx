
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContentBlock } from "@/components/ui/ContentBlock";
import { LEGAL_PAGES } from "@/lib/data";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];

  if (!page) {
    return {
      title: "Page Not Found | Driftawave",
    };
  }

  return {
    title: `${page.title} | Driftawave Legal`,
    description: `Read our ${page.title}`,
  };
}

export async function generateStaticParams() {
  return Object.keys(LEGAL_PAGES).map((slug) => ({
    slug,
  }));
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = LEGAL_PAGES[slug];

  if (!page) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title={page.title}
        breadcrumbs={[
          { label: "Legal" },
          { label: page.title },
        ]}
        backgroundImage="/images/hero-background.jpg"
      />

      <div className="py-16 md:py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div 
          className="prose prose-lg prose-gray max-w-none font-serif"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </main>
  );
}

