import { Helmet } from "react-helmet";

const SEOHelmet = ({
  title,
  description,
  keywords,
  canonical,
  pageName,
  breadcrumb,
  products = [],   // for category pages
  product = null,  // for single product pages
}) => {
  return (
    <Helmet>
      {/* ===== BASIC SEO ===== */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Vikah Ecotech Pvt Ltd" />

      <link rel="canonical" href={canonical} />

      {/* ===== OPEN GRAPH ===== */}
      <meta property="og:type" content={product ? "product" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:image"
        content="https://vikahecotech.com/logo_vk.png"
      />

      {/* ===== TWITTER ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://vikahecotech.com/logo_vk.png"
      />

      {/* ===== ORGANIZATION ===== */}
      <script type="application/ld+json">
        {`
        {
          "@context":"https://schema.org",
          "@type":"Organization",
          "name":"Vikah Ecotech Pvt Ltd",
          "url":"https://vikahecotech.com",
          "logo":"https://vikahecotech.com/logo_vk.png"
        }
        `}
      </script>

      {/* ===== LOCAL BUSINESS ===== */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Vikah Ecotech Pvt Ltd",
          "image": "https://vikahecotech.com/logo_vk.png",
          "url": "https://vikahecotech.com",
          "telephone": "+91-4049471616",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "406, 4th Floor, Patel Towers, Above EasyBuy, Beside Nagole RTO Office, Nagole",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500068",
            "addressCountry": "IN"
          },
          "areaServed": "India"
        }
        `}
      </script>

      {/* ===== WEBSITE (helps sitelinks) ===== */}
      <script type="application/ld+json">
        {`
        {
          "@context":"https://schema.org",
          "@type":"WebSite",
          "name":"Vikah Ecotech",
          "url":"https://vikahecotech.com"
        }
        `}
      </script>

      {/* ===== ITEM LIST (CATEGORY PAGES) ===== */}
      {products.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: pageName,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                "@id": p.url,
                name: p.name,
                description: p.description,
                image: p.image,
                brand: {
                  "@type": "Brand",
                  name: "Vikah Ecotech",
                },
                url: p.url,
                offers: {
                  "@type": "Offer",
                  url: p.url,
                  priceCurrency: "INR",
                  price: p.price || "0",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          })}
        </script>
      )}

      {/* ===== SINGLE PRODUCT PAGE ===== */}
      {product && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": product.url,
            name: product.name,
            description: product.description,
            image: product.image,
            sku: product.sku,
            category: product.category,
            brand: {
              "@type": "Brand",
              name: "Vikah Ecotech",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Vikah Ecotech Pvt Ltd",
              url: "https://vikahecotech.com",
            },
            offers: {
              "@type": "Offer",
              url: product.url,
              priceCurrency: "INR",
              price: product.price || "0",
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      )}

      {/* ===== BREADCRUMB ===== */}
      {breadcrumb && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb.map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: b.name,
              item: b.url,
            })),
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHelmet;
