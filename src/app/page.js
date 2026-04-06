export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans">
      
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Amaury Cepero</h1>
        <p className="text-gray-600">Tampa, FL | amauryc726@gmail.com | (908) 906-3819</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1">Summary</h2>
        <p className="mt-2 text-gray-700">
          Motivated Business Analytics student with experience in sales, customer service, and data-driven decision making. Strong communication skills and ability to adapt in fast-paced environments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <p className="mt-2 text-gray-700">
          University of South Florida — B.S. in Business Analytics & Information Systems (Expected 2027)
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b pb-1">Experience</h2>
        <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-2">
          <li>
            Flooring Sales Specialist — Home Depot  
            Delivered customer-focused solutions and generated consistent sales through product knowledge and communication.
          </li>
          <li>
            Customer Service Associate — Retail  
            Assisted customers, handled transactions, and maintained efficient store operations in a fast-paced environment.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1">Skills</h2>
        <ul className="mt-2 text-gray-700 list-disc pl-5">
          <li>Excel, Tableau, Basic JavaScript</li>
          <li>Sales & Customer Service</li>
          <li>Communication & Teamwork</li>
        </ul>
      </section>

    </main>
  );
}