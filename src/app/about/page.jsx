export default function About() {
  return (
    <main>
      <section className="pt-30 px-10">
        <div className="max-w-sm">
          <h1 className="text-black text-6xl">
            At the Core of Nigeria's Trade Transformation
          </h1>
          <div className="w-80 pt-8">
            <p>
              Empowering Nigerian exportes with financing and support to thrive
              in global markets.
            </p>
          </div>
        </div>
      </section>
      <div className="relative bg-[url('/images/aboutBg.png')] bg-no-repeat bg-cover w-full h-[515px] mt-[71px]"></div>
      <aside className="px-10 flex gap-14">
        <section className="w-[30%]">
          <div className="space-y-3 pt-[111px]">
            <h2 className="font-semibold">About Us</h2>
            <ul className="text-[#A39F9F] font-normal text-[20px] space-y-3">
              <li>Board members</li>
              <li>Management Team</li>
              <li>Core Values</li>
              <li>CSB</li>
              <li>Development Initiative</li>
              <li>Testimonials</li>
            </ul>
          </div>
        </section>
        <section className="w-[70%]">
          <div className="pt-[111px]">
            <h1 className="font-semibold text-3xl">About NEXIM Bank</h1>
            <div className="max-w-xl pt-8">
              <p>
                The Nigerian Export-Import Bank (NEXIM) was established by Act
                38 of 1991 as an Export Credit Agency (ECA) with a share capital
                of N50, 000,000,000 (Fifty Billion Naira) held equally by the
                Federal Ministry of Finance Incorporated and the Central Bank of
                Nigeria. The Bank which replaced the Nigerian Export Credit
              </p>
              <div className="pt-8">
                <p>
                  Guarantee & Insurance Corporation earlier set up under Act 15
                  of 1988, has the following main statutory functions:{" "}
                </p>
                <ul className="list-disc pl-5 space-y-3 pt-3">
                  <li>
                    Provision of export credit guarantee and export credit
                    insurance facilities to its clients.
                  </li>
                  <li>
                    Provision of credit in local currency to its clients in
                    support of exports.
                  </li>
                  <li>
                    Establishment and management of funds connected with
                    exports.
                  </li>
                  <li>
                    Maintenance of a foreign exchange revolving fund for lending
                    to exporters who need to import foreign inputs to facilitate
                    export production.
                  </li>
                  <li>
                    Provision of domestic credit insurance where such a facility
                    is likely to assist exports.
                  </li>
                  <li>
                    Maintenance of a trade information system in support of
                    export business.
                  </li>
                </ul>
                <p className="pt-3">
                  The Bank presently provides short and medium term loans to
                  Nigerian exporters. It also provides short term guarantees for
                  loans granted by Nigerian Banks to exporters as well as credit
                  insurance against political and commercial risks in the event
                  of non-payment by foreign buyers.
                </p>
                <p className="pt-3">The Bank is also the government’s National Guarantor under the ECOWAS Inter-state Road
                Transit programme.</p>
              </div>
            </div>
          </div>
          <aside className="mt-27.5 border-t border-[#dedede] border-b flex w-[65%] gap-10 py-15 mb-15">
            <div className="">
                <h2 className="font-semibold text-2xl">Our Mission</h2>
                <p>To facilitate export diversification and economic growth in Nigeria</p>
            </div>
            <div>
                <h2 className="font-semibold text-2xl">Our Vision</h2>
                <p>To be the leading Export Development Bank in Africa</p>
            </div>
          </aside>
        </section>
      </aside>
    </main>
  );
}
