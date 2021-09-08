/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:w-1/4">
        <img alt="post" className="object-cover" src={post.image} />
        <div className="text-center my-4">
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}
