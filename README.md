# Art Gallery Website

<img alt="image" src="src/assets/Screenshot.png">

# Description

This is an ecommerce website for an art gallery. 
It will have 2 main sections:
1. A gallery to view/buy art pieces 
2. Services offering: calligraphy workshops, authenticity & apprasial services, commissoning a calligraphy art piece, art repair/restoration

I have used Harvard Museum Art APIs to retrieve some calligraphy artworks and displayed them in the gallery. 

# Link to deployed site

[Art Website](https://art-gallery-website-rose.vercel.app/)

# MVP

- A navbar with company logo, gallery, services, about us and shopping cart with links 
- A carousel with gallery and services pages and link
- A gallery with artworks
- A services page
- Shopping cart

# Planning materials 

## User stories 

1. When I arrive on the landing page, I want to see the navbar with the company name, logo, home, gallery, services, about us and shopping cart links.
2. I also want to see the carousel which auto rotates between services and gallery and there are buttons with link to the gallery and the services. 
3. When I click the link to the gallery, I want to be directed to the gallery page where there are art pieces represented in cards with titles, prices, description etc. There should also be a add to cart button or a enquire for price button. 
4. When I click the link to the services, I should see the services presented as a horizontal cards with alternating images and description as well as the add to cart and enquire for price buttons. 
5. Adding to cart adds to the cart and when I click on the shopping cart, I should be able to see the updated shopping cart. 
6. Enquire for price button should lead me to the enquire price form which I can fill up and send for follow up. 

## wireframes / html + css

Placeholder for wireframe

# Attributions

- Style Framework: [React Bootstrap](https://react-bootstrap.netlify.app)
- Stack Overflow, w3 schools, MDN, Pixabay
- ChatGPT

# Technologies Used

HTML + CSS + Javascript + React

# Stretch goals

Placeholder

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




