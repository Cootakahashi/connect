export function Compare() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              他者との比較
            </h1>
          </div>
          <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Plan
                  </th>
                  <th class="border-4 border-orange-500 px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    RESTART
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    英会話教室
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    英語コーチング
                  </th>
                  <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-3">金額</td>
                  <td class="border-x-4 border-orange-500 px-4 py-3">5 Mb/s</td>
                  <td class="px-4 py-3">15 GB</td>
                  <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td class="w-10 text-center"></td>
                </tr>
                <tr>
                  <td class="border-t-2 border-gray-200 px-4 py-3">学習内容</td>
                  <td class="border-x-4 border-orange-500 border-t- border-gray-200 px-4 py-3">
                    25 Mb/s
                  </td>
                  <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $24
                  </td>
                  <td class="border-t-2 border-gray-200 w-10 text-center"></td>
                </tr>
                <tr>
                  <td class="border-t-2 border-gray-200 px-4 py-3">
                    継続サポート
                  </td>
                  <td class="border-x-4 border-orange-500 border-gray-200 px-4 py-3">
                    36 Mb/s
                  </td>
                  <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                  <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $50
                  </td>
                  <td class="border-t-2 border-gray-200 w-10 text-center"></td>
                </tr>
                <tr>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    人生経験
                  </td>
                  <td class="border-x-4 border-orange-500 border-b-2 border-gray-200 px-4 py-3">
                    48 Mb/s
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                    120 GB
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                    $72
                  </td>
                  <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
