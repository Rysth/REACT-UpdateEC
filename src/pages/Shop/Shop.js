import BannerSection from './sections/BannerSection';
import SearchSection from './sections/SearchSection';
import FilterSection from './sections/FilterSection';
import ProductSection from './sections/ProductSection';

function Shop() {
  return (
    <section className="relative text-white">
      <article className="px-4 py-24 mx-auto max-w-screen-2xl">
        <BannerSection />
        <main className="flex flex-col flex-wrap">
          <SearchSection />
          <div className="flex flex-col gap-10 sm:flex-row">
            <FilterSection />
            <ProductSection />
          </div>
        </main>
      </article>
    </section>
  );
}

export default Shop;
