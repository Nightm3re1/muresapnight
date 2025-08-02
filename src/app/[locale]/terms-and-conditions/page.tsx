
// This file is now a Server Component

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import TermsAndConditionsClientContent from './terms-and-conditions-client-content'; // Import the new client component

interface TermsAndConditionsPageProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({params: {locale}}: TermsAndConditionsPageProps): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'TermsAndConditionsPage'});
  return {
    title: t('title'),
  };
}

export default function TermsAndConditionsPage({ params, searchParams }: TermsAndConditionsPageProps) {
  // This server component now simply renders the client component
  return <TermsAndConditionsClientContent params={params} searchParams={searchParams} />;
}
