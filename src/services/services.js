// src/services.js

export const fetchArtworks = async () => {
    const apiKey = import.meta.env.VITE_HARVARD_API_KEY;
    const url = `https://api.harvardartmuseums.org/object?apikey=${apiKey}&culture=Chinese&size=50&page=1&classification=Calligraphy&sort=rank&sortorder=desc&verificationlevel=3`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Filter artworks to only include those with a primary image URL
      const filteredArtworks = data.records.filter((artwork) => artwork.primaryimageurl);
  
      // Map the artworks to a simpler format
      const formattedArtworks = filteredArtworks.map((artwork, index) => ({
        id: index + 1,
        title: artwork.title,
        artist: artwork.people ? artwork.people[0].name : 'Unknown Artist',
        price: artwork.price || null, // Assuming price is available in the API (if not, it'll show 'N/A')
        image: artwork.primaryimageurl,
      }));
  
      return formattedArtworks;
    } catch (error) {
      console.error('Error fetching artworks:', error);
      return [];
    }
  };
  