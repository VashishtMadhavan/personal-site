import React from 'react';
import Link from 'next/link';

interface PublicationLinkProps {
  href: string;
  title: string;
  conference: string;
  blog?: string;
  code?: string;
}

export function PublicationLink({ href, title, conference, blog, code }: PublicationLinkProps) {
  return (
    <div>
        <div className="flex items-center">
            <h1 className="text-md font-bold mr-2">{title}</h1>
            <p>{conference}</p>
        </div>
        <div className="flex items-center mb-4">
            <Link href={href} className="text-cyan-600">Paper</Link>
            {blog && <Link href={blog} className="text-cyan-600 ml-2">Blog</Link>}
            {code && <Link href={code} className="text-cyan-600 ml-2">Code</Link>}
        </div>
    </div>
  );
}
