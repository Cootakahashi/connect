export function Toc({ blog }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full lg:w-64 border-2 mb-20">
      <h5 className="text-lg font-bold mb-4">目次</h5>
      <ul>
        {blog.head1 && (
          <li className="mt-3">
            <a href="#head1" className="text-blue-600 hover:underline">
              1: {blog.head1}
            </a>
          </li>
        )}
        {blog.head2 && (
          <li className="mt-3">
            <a href="#head2" className="text-blue-600 hover:underline">
              2: {blog.head2}
            </a>
          </li>
        )}
        {blog.head3 && (
          <li className="mt-3">
            <a href="#head3" className="text-blue-600 hover:underline">
              3: {blog.head3}
            </a>
          </li>
        )}
        {blog.head4 && (
          <li className="mt-3">
            <a href="#head4" className="text-blue-600 hover:underline">
              4: {blog.head4}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
