// src/services.js

export const fetchArtworks = async () => {
    const apiKey = import.meta.env.VITE_HARVARD_API_KEY;
    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&culture=Chinese&size=25&page=1&classification=Calligraphy&sort=rank&sortorder=desc`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      // Filter artworks to only include those with a primary image URL
      const filteredArtworks = data.records.filter((artwork) => artwork.images && artwork.images.length > 0 && artwork.images[0].iiifbaseuri);
  console.log(filteredArtworks)
      // Map the artworks to a simpler format
      const formattedArtworks = filteredArtworks.map((artwork, index) => ({
        id: index + 1,
        title: artwork.title,
        artist: artwork.people ? artwork.people[0].name : 'Unknown Artist',
        price: null, 
        image: `${artwork.images[0].iiifbaseuri}/full/full/0/default.jpg`
      }));
  

    console.log(formattedArtworks)

      return formattedArtworks;
    } catch (error) {
      console.error('Error fetching artworks:', error);
      return [];
    }
  };
  