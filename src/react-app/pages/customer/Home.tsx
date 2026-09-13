import ProductCard from "../../components/ProductCard"

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero-label">فروشگاه قطعات الکترونیکی</p>

          <h1>
            قطعات الکترونیکی مورد نیازت
            <br />
            را پیدا کن
          </h1>

          <p className="hero-description">
            مجموعه‌ای از قطعات الکترونیکی برای پروژه‌های
            شخصی، آموزشی و حرفه‌ای.
          </p>

          <button type="button" className="primary-button">
            مشاهده محصولات
          </button>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">محصولات</p>
              <h2>محصولات پیشنهادی</h2>
            </div>

            <a href="/products">مشاهده همه</a>
          </div>

          <div className="products-grid">
            <ProductCard
              name="مقاومت 1KΩ"
              category="مقاومت"
              price={2000}
            />

            <ProductCard
              name="خازن الکترولیتی 100µF"
              category="خازن"
              price={5000}
            />

            <ProductCard
              name="ترانزیستور BC547"
              category="ترانزیستور"
              price={3500}
            />

            <ProductCard
              name="LED قرمز 5mm"
              category="LED"
              price={1500}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
