import { fetchCars } from "@/utils";
import { Hero, SearchBar, CustomFilter, CarCard } from "../components";
import { HomeProps } from "@/types";

export default async function Home({ searchParams } : HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !allCars || !Array.isArray(allCars) || allCars.length < 1;


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} key={car.title} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__container">
            <h2 className="text-black text-xl font-bold">Ups, no results</h2>
            {allCars?.message}
          </div>
        )}
      </div>
    </main>
  );
}
