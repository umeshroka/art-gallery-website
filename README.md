# Art Gallery Website

<img alt="image" src="src/assets/Screenshot.png">

# Description

This is an ecommerce website for an art gallery. 
It will have 2 main sections:
1. A gallery to view/buy art pieces 
2. Services offering: calligraphy workshops, authenticity & apprasial services, commissoning a calligraphy art piece, art repair/restoration

# Link to deployed site

[Live Site](art-gallery-website-rose.vercel.app)

# MVP

- A banner with company logo, shopping cart with links
- A navbar with gallery, services and about us with links 
- A carousel with art pieces rotating 
- A gallery with artworks
- A services page
- Shopping cart

# Planning materials 

## User stories 

1. When I arrive on the landing page, I want to see the banner, navbar, carousel, the 4x4 grid and a footer.

## wireframes / html + css

Placeholder for wireframe

# Attributions

- Style Framework: [React Bootstrap](https://react-bootstrap.netlify.app)
- Stack Overflow, w3 schools, MDN, Pixabay
- ChatGPT

# Technologies Used

HTML + CSS + Javascript + React

# Stretch goals



# Reflections

## Favorite code

```
              <div className="card-body">
                <h5 className="card-title">{artwork.title}</h5>
                <p className="card-text">Artist: {artwork.artist}</p>
                {artwork.price ? (
                  <>
                    <p className="card-text">Price: {artwork.price}</p>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(artwork)}
                    >
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <>
                    <p className="card-text">Price upon enquiry</p>
                    <Link
                      to="/enquiry"
                      state={{ item: artwork }}
                      className="btn btn-secondary w-100"
                    >
                      Enquire for Price
                    </Link>
                  </>
                )}
              </div>

```

Ternary to conditionally render an add to cart button or enquire for price button based on whether the artwork has a price

## Can do better

Currently, the services and the artworks can be added to the cart uniquely and separately but that is because I have given the services id starting from 90 and the artworks id starting from 1. Hence, they appear to the separate. But in actuality, there should not be sharing the same id sequence and should have their own unqiue id sequence and unique categories. 




