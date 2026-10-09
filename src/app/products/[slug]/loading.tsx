
const ProductDetailsSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#ADB2AE]/10">
      <div className="container mx-auto px-3 py-7 sm:px-5">

        {/* Breadcrumb Skeleton */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-4 w-12 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
          <div className="h-4 w-3 rounded bg-gray-200" />
          <div className="h-4 w-28 rounded bg-gray-200" />
        </div>

        {/* Product Header */}
        <div className="mt-5 flex flex-col justify-between gap-5 rounded-2xl bg-white p-5 sm:flex-row sm:items-center">

          {/* Header Left */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 shrink-0 rounded-2xl bg-[#F0F5F0]" />

            <div className="flex-1 space-y-3">
              <div className="h-7 w-40 max-w-full rounded-lg bg-gray-200" />
              <div className="h-4 w-28 rounded bg-gray-200" />
              <div className="h-4 w-56 max-w-full rounded bg-gray-200" />
            </div>
          </div>

          {/* Header Right: Today's Price */}
          <div className="w-full rounded-2xl bg-[#ADB2AE]/10 p-4 text-center sm:w-48">
            <div className="mx-auto h-4 w-24 rounded bg-gray-200" />
            <div className="mx-auto mt-3 h-9 w-28 rounded-lg bg-gray-200" />
            <div className="mx-auto mt-3 h-4 w-24 rounded bg-gray-200" />
            <div className="mx-auto mt-3 h-4 w-16 rounded bg-gray-200" />
          </div>
        </div>

        {/* Price Summary */}
        <div className="mt-6 rounded-2xl bg-white p-4 sm:p-5">
          <div className="h-7 w-44 rounded-lg bg-gray-200" />

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="min-h-36 w-full rounded-2xl border border-gray-200 p-4"
              >
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="mt-3 h-9 w-32 rounded-lg bg-gray-200" />
                <div className="mt-4 h-4 w-40 max-w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Market Comparison Table */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Table Title */}
            <div className="border-b border-gray-200 px-5 py-5 sm:px-6">
              <div className="h-7 w-56 max-w-full rounded-lg bg-gray-200" />
              <div className="mt-2 h-4 w-72 max-w-full rounded bg-gray-200" />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#F0F5F0]">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <th key={item} className="px-5 py-4 sm:px-6">
                        <div className="ml-auto h-4 w-20 rounded bg-gray-200 first:ml-0" />
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
                    <tr
                      key={row}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-5 py-4 sm:px-6">
                        <div className="h-5 w-32 rounded bg-gray-200" />
                      </td>

                      <td className="px-5 py-4">
                        <div className="h-7 w-20 rounded-full bg-gray-200" />
                      </td>

                      <td className="px-5 py-4">
                        <div className="ml-auto h-5 w-16 rounded bg-gray-200" />
                      </td>

                      <td className="px-5 py-4">
                        <div className="ml-auto h-5 w-16 rounded bg-gray-200" />
                      </td>

                      <td className="px-5 py-4">
                        <div className="ml-auto h-5 w-20 rounded bg-gray-200" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 sm:px-6">
              <div className="h-3 w-80 max-w-full rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

