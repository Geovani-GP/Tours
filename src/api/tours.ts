export interface Tour {
    id_tour: string;
    title: string;
    rating: number;
    price_adult: number;
    price_child: number;
    schedule: {
      check_in: string;
      departure: string;
      return: string;
    };
    included_items: string[];
    not_included_items: string[];
  }
  
  export const getTours = async (): Promise<Tour[]> => {
    try {
      const response = await fetch('https://magicloops.dev/api/loop/3a74cd71-bf0e-4bbe-bcc2-4b5aecb4eed3/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      return data.tours as Tour[];
    } catch (error) {
      console.error("Error fetching tours:", error);
      return [];
    }
  };

