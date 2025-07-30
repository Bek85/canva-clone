"use client";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

export default function BlogSlug({ params }: SlugPageProps) {
  return <div>Blog Slug page: {params.slug}</div>;
}
